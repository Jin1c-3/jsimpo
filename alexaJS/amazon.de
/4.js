
window.ue_ihb = (window.ue_ihb || window.ueinit || 0) + 1;
if (window.ue_ihb === 1) {

var ue_csm = window,
    ue_hob = +new Date();
(function(d){var e=d.ue=d.ue||{},f=Date.now||function(){return+new Date};e.d=function(b){return f()-(b?0:d.ue_t0)};e.stub=function(b,a){if(!b[a]){var c=[];b[a]=function(){c.push([c.slice.call(arguments),e.d(),d.ue_id])};b[a].replay=function(b){for(var a;a=c.shift();)b(a[0],a[1],a[2])};b[a].isStub=1}};e.exec=function(b,a){return function(){try{return b.apply(this,arguments)}catch(c){ueLogError(c,{attribution:a||"undefined",logLevel:"WARN"})}}}})(ue_csm);


    var ue_err_chan = 'jserr-rw';
(function(d,e){function h(f,b){if(!(a.ec>a.mxe)&&f){a.ter.push(f);b=b||{};var c=f.logLevel||b.logLevel;c&&c!==k&&c!==m&&c!==n&&c!==p||a.ec++;c&&c!=k||a.ecf++;b.pageURL=""+(e.location?e.location.href:"");b.logLevel=c;b.attribution=f.attribution||b.attribution;a.erl.push({ex:f,info:b})}}function l(a,b,c,e,g){d.ueLogError({m:a,f:b,l:c,c:""+e,err:g,fromOnError:1,args:arguments},g?{attribution:g.attribution,logLevel:g.logLevel}:void 0);return!1}var k="FATAL",m="ERROR",n="WARN",p="DOWNGRADED",a={ec:0,ecf:0,
pec:0,ts:0,erl:[],ter:[],mxe:50,startTimer:function(){a.ts++;setInterval(function(){d.ue&&a.pec<a.ec&&d.uex("at");a.pec=a.ec},1E4)}};l.skipTrace=1;h.skipTrace=1;h.isStub=1;d.ueLogError=h;d.ue_err=a;e.onerror=l})(ue_csm,window);


var ue_id = 'Q4E6V9ZVB5KXRKP80WX0',
    ue_url = '/rd/uedata',
    ue_navtiming = 1,
    ue_mid = 'A1PA6795UKMFR9',
    ue_sid = '260-9113205-8476751',
    ue_sn = 'www.amazon.de',
    ue_furl = 'fls-eu.amazon.de',
    ue_surl = 'https://unagi-eu.amazon.com/1/events/com.amazon.csm.nexusclient.prod',
    ue_int = 0,
    ue_fcsn = 1,
    ue_urt = 3,
    ue_rpl_ns = 'cel-rpl',
    ue_ddq = 1,
    ue_fpf = '//fls-eu.amazon.de/1/batch/1/OP/A1PA6795UKMFR9:260-9113205-8476751:Q4E6V9ZVB5KXRKP80WX0$uedata=s:',
    ue_sbuimp = 1,
    ue_ibft = 0,
    ue_sswmts = 0,
    ue_jsmtf = 0,
    ue_fnt = 0,
    ue_lpsi = 6000,

    ue_swi = 1;
var ue_viz=function(){(function(b,e,a){function k(c){if(b.ue.viz.length<p&&!l){var a=c.type;c=c.originalEvent;/^focus./.test(a)&&c&&(c.toElement||c.fromElement||c.relatedTarget)||(a=e[m]||("blur"==a||"focusout"==a?"hidden":"visible"),b.ue.viz.push(a+":"+(+new Date-b.ue.t0)),"visible"==a&&(b.ue.isl&&q("at"),l=1))}}for(var l=0,q=b.uex,f,g,m,n=["","webkit","o","ms","moz"],d=0,p=20,h=0;h<n.length&&!d;h++)if(a=n[h],f=(a?a+"H":"h")+"idden",d="boolean"==typeof e[f])g=a+"visibilitychange",m=(a?a+"V":"v")+
"isibilityState";k({});d&&e.addEventListener(g,k,0);b.ue&&d&&(b.ue.pageViz={event:g,propHid:f})})(ue_csm,ue_csm.document,ue_csm.window)};

(function(d,h,N){function H(a){return a&&a.replace&&a.replace(/^\s+|\s+$/g,"")}function u(a){return"undefined"===typeof a}function B(a,b){for(var c in b)b[v](c)&&(a[c]=b[c])}function I(a){try{var b=N.cookie.match(RegExp("(^| )"+a+"=([^;]+)"));if(b)return b[2].trim()}catch(c){}}function O(m,b,c){var q=(x||{}).type;if("device"!==c||2!==q&&1!==q)m&&(d.ue_id=a.id=a.rid=m,w&&(w=w.replace(/((.*?:){2})(\w+)/,function(a,b){return b+m})),D&&(e("id",D,m),D=0)),b&&(w&&(w=w.replace(/(.*?:)(\w|-)+/,function(a,
c){return c+b})),d.ue_sid=b),c&&a.tag("page-source:"+c),d.ue_fpf=w}function P(){var a={};return function(b){b&&(a[b]=1);b=[];for(var c in a)a[v](c)&&b.push(c);return b}}function y(d,b,c,q){q=q||+new E;var f,l;if(b||u(c)){if(d)for(l in f=b?e("t",b)||e("t",b,{}):a.t,f[d]=q,c)c[v](l)&&e(l,b,c[l]);return q}}function e(d,b,c){var e=b&&b!=a.id?a.sc[b]:a;e||(e=a.sc[b]={});"id"===d&&c&&(Q=1);return e[d]=c||e[d]}function R(d,b,c,e,f){c="on"+c;var l=b[c];"function"===typeof l?d&&(a.h[d]=l):l=function(){};b[c]=
function(a){f?(e(a),l(a)):(l(a),e(a))};b[c]&&(b[c].isUeh=1)}function S(m,b,c,q){function p(b,c){var d=[b],g=0,f={},l,h;c?(d.push("m=1"),f[c]=1):f=a.sc;for(h in f)if(f[v](h)){var q=e("wb",h),p=e("t",h)||{},n=e("t0",h)||a.t0,k;if(c||2==q){q=q?g++:"";d.push("sc"+q+"="+h);for(k in p)u(p[k])||null===p[k]||d.push(k+q+"="+(p[k]-n));d.push("t"+q+"="+p[m]);if(e("ctb",h)||e("wb",h))l=1}}!J&&l&&d.push("ctb=1");return d.join("&")}function l(b,c,g,e){if(b){var f=d.ue_err;d.ue_url&&!e&&b&&0<b.length&&(e=new Image,
a.iel.push(e),e.src=b,a.count&&a.count("postbackImageSize",b.length));if(w){var m=h.encodeURIComponent;m&&b&&(e=new Image,b=""+d.ue_fpf+m(b)+":"+(+new E-d.ue_t0),a.iel.push(e),e.src=b)}else a.log&&(a.log(b,"uedata",{n:1}),a.ielf.push(b));f&&!f.ts&&f.startTimer();a.b&&(f=a.b,a.b="",l(f,c,g,1))}}function A(b){var c=x?x.type:F,d=2==c||a.isBFonMshop,c=c&&!d,e=a.bfini;Q||(e&&1<e&&(b+="&bfform=1",c||(a.isBFT=e-1)),d&&(b+="&bfnt=1",a.isBFT=a.isBFT||1),a.ssw&&a.isBFT&&(a.isBFonMshop&&(a.isNRBF=0),u(a.isNRBF)&&
(d=a.ssw(a.oid),d.e||u(d.val)||(a.isNRBF=1<d.val?0:1)),u(a.isNRBF)||(b+="&nrbf="+a.isNRBF)),a.isBFT&&!a.isNRBF&&(b+="&bft="+a.isBFT));return b}if(!a.paused&&(b||u(c))){for(var k in c)c[v](k)&&e(k,b,c[k]);a.isBFonMshop||y("pc",b,c);k="ld"===m&&b&&e("wb",b);var s=e("id",b)||a.id;k||s===a.oid||(D=b,ba(s,(e("t",b)||{}).tc||+e("t0",b),+e("t0",b)));var s=e("id",b)||a.id,t=e("id2",b),g=a.url+"?"+m+"&v="+a.v+"&id="+s,J=e("ctb",b)||e("wb",b),z;J&&(g+="&ctb="+J);t&&(g+="&id2="+t);1<d.ueinit&&(g+="&ic="+d.ueinit);
if(!("ld"!=m&&"ul"!=m||b&&b!=s)){if("ld"==m){try{h[K]&&h[K].isUeh&&(h[K]=null)}catch(I){}if(h.chrome)for(t=0;t<L.length;t++)T(G,L[t]);(t=N.ue_backdetect)&&t.ue_back&&t.ue_back.value++;d._uess&&(z=d._uess());a.isl=1}a._bf&&(g+="&bf="+a._bf());d.ue_navtiming&&f&&(e("ctb",s,"1"),a.isBFonMshop||y("tc",F,F,M));!C||a.isBFonMshop||U||(f&&B(a.t,{na_:f.navigationStart,ul_:f.unloadEventStart,_ul:f.unloadEventEnd,rd_:f.redirectStart,_rd:f.redirectEnd,fe_:f.fetchStart,lk_:f.domainLookupStart,_lk:f.domainLookupEnd,
co_:f.connectStart,_co:f.connectEnd,sc_:f.secureConnectionStart,rq_:f.requestStart,rs_:f.responseStart,_rs:f.responseEnd,dl_:f.domLoading,di_:f.domInteractive,de_:f.domContentLoadedEventStart,_de:f.domContentLoadedEventEnd,_dc:f.domComplete,ld_:f.loadEventStart,_ld:f.loadEventEnd,ntd:("function"!==typeof C.now||u(M)?0:new E(M+C.now())-new E)+a.t0}),x&&B(a.t,{ty:x.type+a.t0,rc:x.redirectCount+a.t0}),U=1);a.isBFonMshop||B(a.t,{hob:d.ue_hob,hoe:d.ue_hoe});a.ifr&&(g+="&ifr=1")}y(m,b,c,q);var r,n;k||b&&
b!==s||ca(b);(c=d.ue_mbl)&&c.cnt&&!k&&(g+=c.cnt());k?e("wb",b,2):"ld"==m&&(a.lid=H(s));for(r in a.sc)if(1==e("wb",r))break;if(k){if(a.s)return;g=p(g,null)}else c=p(g,null),c!=g&&(c=A(c),a.b=c),z&&(g+=z),g=p(g,b||a.id);g=A(g);if(a.b||k)for(r in a.sc)2==e("wb",r)&&delete a.sc[r];z=0;a._rt&&(g+="&rt="+a._rt());c=h.csa;if(!k&&c)for(n in r=e("t",b)||{},c=c("PageTiming"),r)r[v](n)&&c("mark",da[n]||n,r[n]);k||(a.s=0,(n=d.ue_err)&&0<n.ec&&n.pec<n.ec&&(n.pec=n.ec,g+="&ec="+n.ec+"&ecf="+n.ecf),z=e("ctb",b),
"ld"!==m||b||a.markers?a.markers&&a.isl&&!k&&b&&B(a.markers,e("t",b)):(a.markers={},B(a.markers,e("t",b))),e("t",b,{}));a.tag&&a.tag().length&&(g+="&csmtags="+a.tag().join("|"),a.tag=P());n=a.viz||[];(r=n.length)&&(g+="&viz="+n.splice(0,r).join("|"));u(d.ue_pty)||(g+="&pty="+d.ue_pty+"&spty="+d.ue_spty+"&pti="+d.ue_pti);a.tabid&&(g+="&tid="+a.tabid);a.aftb&&(g+="&aftb=1");!a._ui||b&&b!=s||(g+=a._ui());a.a=g;l(g,m,z,k)}}function ca(a){var b=h.ue_csm_markers||{},c;for(c in b)b[v](c)&&y(c,a,F,b[c])}
function A(a,b,c){c=c||h;if(c[V])c[V](a,b,!1);else if(c[W])c[W]("on"+a,b)}function T(a,b,c){c=c||h;if(c[X])c[X](a,b,!1);else if(c[Y])c[Y]("on"+a,b)}function Z(){function a(){d.onUl()}function b(a){return function(){c[a]||(c[a]=1,S(a))}}var c={},e,f;d.onLd=b("ld");d.onLdEnd=b("ld");d.onUl=b("ul");e={stop:b("os")};h.chrome?(A(G,a),L.push(a)):e[G]=d.onUl;for(f in e)e[v](f)&&R(0,h,f,e[f]);d.ue_viz&&ue_viz();A("load",d.onLd);y("ue")}function ba(e,b,c){var f=d.ue_mbl,p=h.csa,l=p&&p("SPA"),p=p&&p("PageTiming");
f&&f.ajax&&f.ajax(b,c);l&&p&&(l("newPage",{requestId:e,transitionType:"soft"}),p("mark","transitionStart",b));a.tag("ajax-transition")}d.ueinit=(d.ueinit||0)+1;var a=d.ue=d.ue||{};a.t0=h.aPageStart||d.ue_t0;a.id=d.ue_id;a.url=d.ue_url;a.rid=d.ue_id;a.a="";a.b="";a.h={};a.s=1;a.t={};a.sc={};a.iel=[];a.ielf=[];a.viz=[];a.v="0.232430.0";a.paused=!1;var v="hasOwnProperty",G="beforeunload",K="on"+G,V="addEventListener",X="removeEventListener",W="attachEvent",Y="detachEvent",da={cf:"criticalFeature",af:"aboveTheFold",
fn:"functional",fp:"firstPaint",fcp:"firstContentfulPaint",bb:"bodyBegin",be:"bodyEnd",ld:"loaded"},E=h.Date,C=h.performance||h.webkitPerformance,f=(C||{}).timing,x=(C||{}).navigation,M=(f||{}).navigationStart,w=d.ue_fpf,Q=0,U=0,L=[],D=0,F;a.oid=H(a.id);a.lid=H(a.id);a._t0=a.t0;a.tag=P();a.ifr=h.top!==h.self||h.frameElement?1:0;a.markers=null;a.attach=A;a.detach=T;if("000-0000000-8675309"===d.ue_sid){var $=I("cdn-rid"),aa=I("session-id");$&&aa&&O($,aa,"cdn")}d.uei=Z;d.ueh=R;d.ues=e;d.uet=y;d.uex=
S;a.reset=O;a.pause=function(d){a.paused=d};Z()})(ue_csm,ue_csm.window,ue_csm.document);


ue.stub(ue,"event");ue.stub(ue,"onSushiUnload");ue.stub(ue,"onSushiFlush");

ue.stub(ue,"log");ue.stub(ue,"onunload");ue.stub(ue,"onflush");
(function(b){var a=b.ue;a.cv={};a.cv.scopes={};a.cv.buffer=[];a.count=function(b,f,c){var e={},d=a.cv,g=c&&0===c.c;e.counter=b;e.value=f;e.t=a.d();c&&c.scope&&(d=a.cv.scopes[c.scope]=a.cv.scopes[c.scope]||{},e.scope=c.scope);if(void 0===f)return d[b];d[b]=f;d=0;c&&c.bf&&(d=1);ue_csm.ue_sclog||!a.clog||0!==d||g?a.log&&a.log(e,"csmcount",{c:1,bf:d}):a.clog(e,"csmcount",{bf:d});a.cv.buffer.push({c:b,v:f})};a.count("baselineCounter2",1);a&&a.event&&(a.event({requestId:b.ue_id||"rid",server:b.ue_sn||"sn",
obfuscatedMarketplaceId:b.ue_mid||"mid"},"csm","csm.CSMBaselineEvent.4"),a.count("nexusBaselineCounter",1,{bf:1}))})(ue_csm);



var ue_hoe = +new Date();
}
window.ueinit = window.ue_ihb;
