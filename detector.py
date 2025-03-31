import os, sys
from queue import Queue
import tree_sitter
import tree_sitter_javascript as tsjs
from tree_sitter import Language, Parser

def node_to_text(node:tree_sitter.Node) -> str:
    return node.text.decode()

def is_static_value(node:tree_sitter.Node) -> bool:
    if node.type in ['number', 'string', 'string_fragment']:
        return True
    else:
        return False

class jsimpo_detector:
    def __init__(self, src_file:str):
        self.language = Language(tsjs.language())
        self.parser = Parser(self.language)
        self.src_file = src_file
        self.tree = self.parser.parse(bytes(self.src_file, "utf8"))
        self.root_node = self.tree.root_node

    def extract_fns(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = self.language.query('''
        (variable_declarator 
            name: (identifier)
            value: (function_expression)
        ) @function_declaration
        (function_declaration) @function_declaration
        ''')
        results = query.captures(current_node)
        # print(results)
        if 'function_declaration' in results:
            fn_nodes = results['function_declaration']
        else:
            fn_nodes = []

        self.functions = {node_to_text(node.child_by_field_name('name')):node for node in fn_nodes}
        return self.functions

    def extract_single_assignment(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = self.language.query('''
        (variable_declarator 
            name: (identifier)
            value: (identifier)
        )@assignment
        ''')
        results = query.captures(current_node)
        if 'assignment' in results:
            ass_nodes = results['assignment']
        else:
            ass_nodes = []
        self.single_assignments = {node_to_text(node.child_by_field_name('name')):\
                                   node_to_text(node.child_by_field_name('value')) for node in ass_nodes}
        return self.single_assignments

    def extract_call_exprs(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = self.language.query('(call_expression) @call_expression')
        results = query.captures(current_node)
        if 'call_expression' in results:
            self.call_exprs = results['call_expression']
        else:
            self.call_exprs = []
        return self.call_exprs
    
    def is_static_call(self, current_node:tree_sitter.Node):
        assert current_node.type == 'call_expression'

        fn_name = node_to_text(current_node.child_by_field_name('function'))
        parameters = current_node.child_by_field_name('arguments')

        static_parameters = [is_static_value(parameter) for parameter in parameters.named_children]
        is_static = sum(static_parameters) == len(static_parameters)

        # avoid self-recursive
        parent_node, src_node = current_node, self.functions[self.reverse_alias[fn_name]]
        while parent_node.parent is not None:
            if parent_node == src_node:
                return True
            parent_node = parent_node.parent
        return is_static
        
    def bind_functions(self):
        '''
        invoke the following functions before:
        - self.extract_fns()
        - self.extract_single_assignment()
        '''
        self.alias = {fn_name:set() for fn_name in self.functions.keys()}

        for fn_name in self.functions.keys():
            candidates = Queue()
            candidates.put_nowait(fn_name)
            visited = set()

            while not candidates.empty():
                head = candidates.get_nowait()
                if head in visited:
                    continue
                else:
                    self.alias[fn_name].add(head)
                    visited.add(head)
                new_fns = [src for src, dst in self.single_assignments.items() if dst == head]
                for new_fn in new_fns:
                    candidates.put_nowait(new_fn)
        self.reverse_alias = {new_name: fn_name for fn_name, alias in self.alias.items() for new_name in alias}
        return self.alias

    def extract_spurious_fn(self, max_number=1):
        self.extract_fns()
        self.extract_single_assignment()
        self.bind_functions()
        self.extract_call_exprs()

        self.static_counts = {fn_name:0 for fn_name in self.functions.keys()}
        self.dynamic_counts = {fn_name:0 for fn_name in self.functions.keys()}

        for fn in self.call_exprs:
            fn_name = node_to_text(fn.child_by_field_name('function'))
            if fn_name not in self.reverse_alias:
                continue
            raw_fn_name = self.reverse_alias[fn_name]
            if self.is_static_call(fn):
                self.static_counts[raw_fn_name] = self.static_counts[raw_fn_name] + 1
            else:
                self.dynamic_counts[raw_fn_name] = self.dynamic_counts[raw_fn_name] + 1
        print(self.static_counts, self.dynamic_counts)

        scores = [(self.static_counts[fn_name], self.dynamic_counts[fn_name], fn_name) \
                   for fn_name in self.functions.keys()]
        scores = [(i, k) for i, j, k in scores if j == 0]
        scores.sort(reverse=True)
        return [k for i, k in scores[:max_number]]


def test_detector():
    with open('./jsdata/rand_jsjiami/1255.js-jiami.js', 'r') as f:
        js_file = f.read()
    with open('./jsdata/rand_ob/1255.js-ob.js', 'r') as f:
        js_file = f.read()

    detector = jsimpo_detector(js_file)
    spurious_fns = detector.extract_spurious_fn(1)
    print(f'spurious_fns: {spurious_fns}\n')
    for spurious_fn in spurious_fns:
        print(f'alias of {spurious_fn}:\n{detector.alias[spurious_fn]}')

if __name__ == '__main__':
    test_detector()