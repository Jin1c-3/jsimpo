import os, sys
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
        self.parser = Parser(JS_LANGUAGE)
        self.src_file = src_file
        self.tree = self.parser.parse(bytes(self.src_file, "utf8"))
        self.root_node = self.tree.root_node

    def extract_fns(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = self.language.query('(function_declaration) @function_declaration')
        fn_nodes = query.captures(current_node)['function_declaration']
        self.functions = {node_to_text(node.child_by_field_name('name')):node for node in fn_nodes}
        return self.functions

    def extract_single_assignment(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = detector.language.query('''
        (variable_declarator 
            name: (identifier)
            value: (identifier)
        )@assignment
        ''')
        ass_nodes = query.captures(current_node)['assignment']
        self.single_assignments = {node_to_text(node.child_by_field_name('name')):\
                                   node_to_text(node.child_by_field_name('value')) for node in ass_nodes}
        return self.single_assignments

    def extract_call_exprs(self, current_node:tree_sitter.Node=None):
        if current_node is None:
            current_node = self.root_node
        
        query = self.language.query('(call_expression) @call_expression')
        self.call_exprs = query.captures(current_node)['call_expression']
        return self.call_exprs
    
    def is_static_call(self, current_node:tree_sitter.Node):
        assert current_node.type == 'call_expression'
        parameters = current_node.child_by_field_name('arguments')
        
        static_parameters = [is_static_value(parameter) for parameter in parameters.named_children]
        is_static = sum(static_parameters) == len(static_parameters)
        return is_static
        
    def bind_functions(self):
        '''
        invoke the following functions before:
        - self.extract_fns()
        - self.extract_single_assignment()
        '''

        self.
        for src, dst in self.single_assignments.items():

        
        self.extract_call_exprs()
        for fn in self.call_exprs:
            print(self.is_static_call(fn), node_to_text(fn))