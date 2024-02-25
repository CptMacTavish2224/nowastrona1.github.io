//# sourceMappingURL=i18nModule.js.map
var $jscomp={scope:{},getGlobal:function(k){return"undefined"!=typeof window&&window===k?k:"undefined"!=typeof global?global:k}};$jscomp.global=$jscomp.getGlobal(this);$jscomp.patches={};$jscomp.patch=function(k,m){($jscomp.patches[k]=$jscomp.patches[k]||[]).push(m);var p=$jscomp.global;k=k.split(".");for(var g=0;g<k.length-1&&p;g++)p=p[k[g]];k=k[k.length-1];p&&p[k]instanceof Function&&(p[k]=m(p[k]))};$jscomp.SYMBOL_PREFIX="jscomp_symbol_";
$jscomp.initSymbol=function(){$jscomp.initSymbol=function(){};if(!$jscomp.global.Symbol){$jscomp.global.Symbol=$jscomp.Symbol;var k=[],m=function(m){return function(g){k=[];g=m(g);for(var r=[],z=0,L=g.length;z<L;z++){var w;a:if(w=g[z],w.length<$jscomp.SYMBOL_PREFIX.length)w=!1;else{for(var A=0;A<$jscomp.SYMBOL_PREFIX.length;A++)if(w[A]!=$jscomp.SYMBOL_PREFIX[A]){w=!1;break a}w=!0}w?k.push(g[z]):r.push(g[z])}return r}};$jscomp.patch("Object.keys",m);$jscomp.patch("Object.getOwnPropertyNames",m);$jscomp.patch("Object.getOwnPropertySymbols",
function(p){return function(g){m.unused=Object.getOwnPropertyNames(g);k.push.apply(p(g));return k}})}};$jscomp.symbolCounter_=0;$jscomp.Symbol=function(k){return $jscomp.SYMBOL_PREFIX+k+$jscomp.symbolCounter_++};$jscomp.initSymbolIterator=function(){$jscomp.initSymbol();$jscomp.global.Symbol.iterator||($jscomp.global.Symbol.iterator=$jscomp.global.Symbol("iterator"));$jscomp.initSymbolIterator=function(){}};
!function(k){function m(g){if(p[g])return p[g].exports;var r=p[g]={i:g,l:!1,exports:{}};return k[g].call(r.exports,r,r.exports,m),r.l=!0,r.exports}var p={};m.m=k;m.c=p;m.d=function(g,k,p){m.o(g,k)||Object.defineProperty(g,k,{configurable:!1,enumerable:!0,get:p})};m.n=function(g){var k=g&&g.__esModule?function(){return g.default}:function(){return g};return m.d(k,"a",k),k};m.o=function(g,k){return Object.prototype.hasOwnProperty.call(g,k)};m.p="";m(m.s=7464)}({4989:function(k,m,p){k=p(9458);var g;
m="en";webwave.isDef(window.wwConfig)&&webwave.isDef(window.wwConfig.pageLanguageCode)&&(m=wwConfig.pageLanguageCode);try{var r=document.getElementById("translations");webwave.isDefAndNotNull(r)&&(g=Object(k.a)({},m,JSON.parse(r.textContent)),null!==r.parentNode&&r.parentNode.removeChild(r))}catch(z){console.error("Error during translations parsing",z),g={}}i18next.init({resources:g,fallbackLng:m,shorcutFunction:"defaultValue",lng:m,interpolation:{prefix:"__",suffix:"__"}});!0;window.i18n=i18next},
5024:function(k,m,p){var g=p(9459);window.i18next=function(){function k(b,a,f){function l(a){return a&&-1<a.indexOf("###")?a.replace(/###/g,"."):a}for(a="string"!=typeof a?[].concat(a):a.split(".");1<a.length;){if(!b||"string"==typeof b)return{};var c=l(a.shift());!b[c]&&f&&(b[c]=new f);b=b[c]}return b&&"string"!=typeof b?{obj:b,k:l(a.shift())}:{}}function m(b,a,f){b=k(b,a,Object);b.obj[b.k]=f}function p(b,a){a=k(b,a);b=a.obj;a=a.k;if(b)return b[a]}function w(b){return b.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
"\\$&")}function A(b){return"string"==typeof b?b.replace(/[&<>"'\/]/g,function(a){return M[a]}):b}function E(b){return b.charAt(0).toUpperCase()+b.slice(1)}function H(b){return"string"==typeof b.ns&&(b.ns=[b.ns]),"string"==typeof b.fallbackLng&&(b.fallbackLng=[b.fallbackLng]),"string"==typeof b.fallbackNS&&(b.fallbackNS=[b.fallbackNS]),b.whitelist&&0>b.whitelist.indexOf("cimode")&&b.whitelist.push("cimode"),b}function F(){}$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbolIterator();var I=
"function"==typeof Symbol&&"symbol"==Object(g.a)(Symbol.iterator)?function(b){return Object(g.a)(b)}:function(b){$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbol();return b&&"function"==typeof Symbol&&b.constructor===Symbol&&b!==Symbol.prototype?"symbol":Object(g.a)(b)},x=function(b,a){if(!(b instanceof a))throw new TypeError("Cannot call a class as a function");},v=Object.assign||function(b){for(var a=1;a<arguments.length;a++){var f=arguments[a],l;for(l in f)Object.prototype.hasOwnProperty.call(f,
l)&&(b[l]=f[l])}return b},C=function(b,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+Object(g.a)(a));b.prototype=Object.create(a&&a.prototype,{constructor:{value:b,enumerable:!1,writable:!0,configurable:!0}});a&&(Object.setPrototypeOf?Object.setPrototypeOf(b,a):b.__proto__=a)},B=function(b,a){if(!b)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=Object(g.a)(a)&&"function"!=
typeof a?b:a},G=function(b,a){if(Array.isArray(b))return b;$jscomp.initSymbol();$jscomp.initSymbolIterator();if(Symbol.iterator in Object(b)){var f=[],l=!0,c=!1,e=void 0;try{$jscomp.initSymbol();$jscomp.initSymbolIterator();for(var d,h=b[Symbol.iterator]();!(l=(d=h.next()).done)&&(f.push(d.value),!a||f.length!==a);l=!0);}catch(n){c=!0,e=n}finally{try{!l&&h.return&&h.return()}finally{if(c)throw e;}}return f}throw new TypeError("Invalid attempt to destructure non-iterable instance");},N={type:"logger",
log:function(b){this.output("log",b)},warn:function(b){this.output("warn",b)},error:function(b){this.output("error",b)},output:function(b,a){var f;console&&console[b]&&(f=console)[b].apply(f,function(a){if(Array.isArray(a)){for(var f=0,b=Array(a.length);f<a.length;f++)b[f]=a[f];return b}return Array.from(a)}(a))}},y=new (function(){function b(a){var f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};x(this,b);this.init(a,f)}return b.prototype.init=function(a){var f=1<arguments.length&&void 0!==
arguments[1]?arguments[1]:{};this.prefix=f.prefix||"i18next:";this.logger=a||N;this.options=f;this.debug=f.debug},b.prototype.setDebug=function(a){this.debug=a},b.prototype.log=function(){for(var a=arguments.length,f=Array(a),b=0;b<a;b++)f[b]=arguments[b];return this.forward(f,"log","",!0)},b.prototype.warn=function(){for(var a=arguments.length,f=Array(a),b=0;b<a;b++)f[b]=arguments[b];return this.forward(f,"warn","",!0)},b.prototype.error=function(){for(var a=arguments.length,f=Array(a),b=0;b<a;b++)f[b]=
arguments[b];return this.forward(f,"error","")},b.prototype.deprecate=function(){for(var a=arguments.length,f=Array(a),b=0;b<a;b++)f[b]=arguments[b];return this.forward(f,"warn","WARNING DEPRECATED: ",!0)},b.prototype.forward=function(a,f,b,c){return c&&!this.debug?null:("string"==typeof a[0]&&(a[0]=""+b+this.prefix+" "+a[0]),this.logger[f](a))},b.prototype.create=function(a){return new b(this.logger,v({prefix:this.prefix+":"+a+":"},this.options))},b}()),D=function(){function b(){x(this,b);this.observers=
{}}return b.prototype.on=function(a,f){var b=this;a.split(" ").forEach(function(a){b.observers[a]=b.observers[a]||[];b.observers[a].push(f)})},b.prototype.off=function(a,f){var b=this;this.observers[a]&&this.observers[a].forEach(function(){if(f){var c=b.observers[a].indexOf(f);-1<c&&b.observers[a].splice(c,1)}else delete b.observers[a]})},b.prototype.emit=function(a){for(var f=arguments.length,b=Array(1<f?f-1:0),c=1;c<f;c++)b[c-1]=arguments[c];this.observers[a]&&[].concat(this.observers[a]).forEach(function(a){a.apply(void 0,
b)});this.observers["*"]&&[].concat(this.observers["*"]).forEach(function(f){var c;f.apply(f,(c=[a]).concat.apply(c,b))})},b}(),M={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"},O=function(b){function a(f){var l=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{ns:["translation"],defaultNS:"translation"};x(this,a);var c=B(this,b.call(this));return c.data=f||{},c.options=l,c}return C(a,b),a.prototype.addNamespaces=function(a){0>this.options.ns.indexOf(a)&&this.options.ns.push(a)},
a.prototype.removeNamespaces=function(a){a=this.options.ns.indexOf(a);-1<a&&this.options.ns.splice(a,1)},a.prototype.getResource=function(a,b,c){var e=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}).keySeparator||this.options.keySeparator;void 0===e&&(e=".");var d=[a,b];return c&&"string"!=typeof c&&(d=d.concat(c)),c&&"string"==typeof c&&(d=d.concat(e?c.split(e):c)),-1<a.indexOf(".")&&(d=a.split(".")),p(this.data,d)},a.prototype.addResource=function(a,b,c,e){var d=4<arguments.length&&
void 0!==arguments[4]?arguments[4]:{silent:!1},h=this.options.keySeparator;void 0===h&&(h=".");var n=[a,b];c&&(n=n.concat(h?c.split(h):c));-1<a.indexOf(".")&&(n=a.split("."),e=b,b=n[1]);this.addNamespaces(b);m(this.data,n,e);d.silent||this.emit("added",a,b,c,e)},a.prototype.addResources=function(a,b,c){for(var e in c)"string"==typeof c[e]&&this.addResource(a,b,e,c[e],{silent:!0});this.emit("added",a,b,c)},a.prototype.addResourceBundle=function(a,b,c,e,d){var h=[a,b];-1<a.indexOf(".")&&(h=a.split("."),
e=c,c=b,b=h[1]);this.addNamespaces(b);var n=p(this.data,h)||{};e?function t(a,b,f){for(var c in b)c in a?"string"==typeof a[c]||a[c]instanceof String||"string"==typeof b[c]||b[c]instanceof String?f&&(a[c]=b[c]):t(a[c],b[c],f):a[c]=b[c];return a}(n,c,d):n=v({},n,c);m(this.data,h,n);this.emit("added",a,b,c)},a.prototype.removeResourceBundle=function(a,b){this.hasResourceBundle(a,b)&&delete this.data[a][b];this.removeNamespaces(b);this.emit("removed",a,b)},a.prototype.hasResourceBundle=function(a,b){return void 0!==
this.getResource(a,b)},a.prototype.getResourceBundle=function(a,b){return b||(b=this.options.defaultNS),"v1"===this.options.compatibilityAPI?v({},this.getResource(a,b)):this.getResource(a,b)},a.prototype.toJSON=function(){return this.data},a}(D),J={processors:{},addPostProcessor:function(b){this.processors[b.name]=b},handle:function(b,a,f,l,c){var e=this;return b.forEach(function(b){e.processors[b]&&(a=e.processors[b].process(a,f,l,c))}),a}},K=function(b){function a(f){var l=1<arguments.length&&void 0!==
arguments[1]?arguments[1]:{};x(this,a);var c=B(this,b.call(this));return function(a,b,c){a.forEach(function(a){b[a]&&(c[a]=b[a])})}(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector"],f,c),c.options=l,c.logger=y.create("translator"),c}return C(a,b),a.prototype.changeLanguage=function(a){a&&(this.language=a)},a.prototype.exists=function(a){var b=this.resolve(a,1<arguments.length&&void 0!==arguments[1]?arguments[1]:{interpolation:{}});return b&&void 0!==b.res},a.prototype.extractFromKey=
function(a,b){var c=b.nsSeparator||this.options.nsSeparator;void 0===c&&(c=":");var e=b.keySeparator||this.options.keySeparator||".";b=b.ns||this.options.defaultNS;c&&-1<a.indexOf(c)&&(a=a.split(c),(c!==e||c===e&&-1<this.options.ns.indexOf(a[0]))&&(b=a.shift()),a=a.join(e));return"string"==typeof b&&(b=[b]),{key:a,namespaces:b}},a.prototype.translate=function(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if("object"!==(void 0===c?"undefined":I(c))&&(c=this.options.overloadTranslationOptionHandler(arguments)),
void 0===a||null===a||""===a)return"";"number"==typeof a&&(a=String(a));"string"==typeof a&&(a=[a]);var e=c.keySeparator||this.options.keySeparator||".",d=this.extractFromKey(a[a.length-1],c),h=d.key,n=d.namespaces,u=n[n.length-1],d=c.lng||this.language,t=c.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(d&&"cimode"===d.toLowerCase())return t?u+(c.nsSeparator||this.options.nsSeparator)+h:h;var q=(t=this.resolve(a,c))&&t.res,t=t&&t.usedKey||h,g=Object.prototype.toString.apply(q),k=
void 0!==c.joinArrays?c.joinArrays:this.options.joinArrays;if(q&&"string"!=typeof q&&"boolean"!=typeof q&&"number"!=typeof q&&0>["[object Number]","[object Function]","[object RegExp]"].indexOf(g)&&(!k||"[object Array]"!==g)){if(!c.returnObjects&&!this.options.returnObjects)return this.logger.warn("accessing an object - but returnObjects options is not enabled!"),this.options.returnedObjectHandler?this.options.returnedObjectHandler(t,q,c):"key '"+h+" ("+this.language+")' returned an object instead of string.";
if(c.keySeparator||this.options.keySeparator){var d="[object Array]"===g?[]:{},m;for(m in q)Object.prototype.hasOwnProperty.call(q,m)&&(d[m]=this.translate(""+t+e+m,v({},c,{joinArrays:!1,ns:n})));q=d}}else if(k&&"[object Array]"===g)(q=q.join(k))&&(q=this.extendTranslation(q,a,c));else{e=m=!1;this.isValidLookup(q)||void 0===c.defaultValue||(m=!0,q=c.defaultValue);this.isValidLookup(q)||(e=!0,q=h);var p=c.defaultValue&&c.defaultValue!==q&&this.options.updateMissing;if(e||m||p){this.logger.log(p?"updateKey":
"missingKey",d,u,h,p?c.defaultValue:q);d=[];m=this.languageUtils.getFallbackCodes(this.options.fallbackLng,c.lng||this.language);if("fallback"===this.options.saveMissingTo&&m&&m[0])for(n=0;n<m.length;n++)d.push(m[n]);else"all"===this.options.saveMissingTo?d=this.languageUtils.toResolveHierarchy(c.lng||this.language):d.push(c.lng||this.language);var r=function(a,f){b.options.missingKeyHandler?b.options.missingKeyHandler(a,u,f,p?c.defaultValue:q,p):b.backendConnector&&b.backendConnector.saveMissing&&
b.backendConnector.saveMissing(a,u,f,p?c.defaultValue:q,p);b.emit("missingKey",a,u,f,q)};this.options.saveMissing&&(this.options.saveMissingPlurals&&c.count?d.forEach(function(a){b.pluralResolver.getPluralFormsOfKey(a,h).forEach(function(b){return r([a],b)})}):r(d,h))}q=this.extendTranslation(q,a,c);e&&q===h&&this.options.appendNamespaceToMissingKey&&(q=u+":"+h);e&&this.options.parseMissingKeyHandler&&(q=this.options.parseMissingKeyHandler(q))}return q},a.prototype.extendTranslation=function(a,b,
c){var e=this;c.interpolation&&this.interpolator.init(v({},c,{interpolation:v({},this.options.interpolation,c.interpolation)}));var d=c.replace&&"string"!=typeof c.replace?c.replace:c;this.options.interpolation.defaultVariables&&(d=v({},this.options.interpolation.defaultVariables,d));a=this.interpolator.interpolate(a,d,c.lng||this.language);!1!==c.nest&&(a=this.interpolator.nest(a,function(){return e.translate.apply(e,arguments)},c));c.interpolation&&this.interpolator.reset();d=c.postProcess||this.options.postProcess;
d="string"==typeof d?[d]:d;return void 0!==a&&d&&d.length&&!1!==c.applyPostProcessor&&(a=J.handle(d,a,b,c,this)),a},a.prototype.resolve=function(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=void 0,d=void 0;return"string"==typeof a&&(a=[a]),a.forEach(function(a){if(!b.isValidLookup(e)){a=b.extractFromKey(a,c);var f=a.key;d=f;a=a.namespaces;b.options.fallbackNS&&(a=a.concat(b.options.fallbackNS));var u=void 0!==c.count&&"string"!=typeof c.count,t=void 0!==c.context&&"string"==
typeof c.context&&""!==c.context,q=c.lngs?c.lngs:b.languageUtils.toResolveHierarchy(c.lng||b.language);a.forEach(function(a){b.isValidLookup(e)||q.forEach(function(d){if(!b.isValidLookup(e)){var h=f,q=[h],g=void 0;u&&(g=b.pluralResolver.getSuffix(d,c.count));u&&t&&q.push(h+g);t&&q.push(h+=""+b.options.contextSeparator+c.context);for(u&&q.push(h+g);h=q.pop();)b.isValidLookup(e)||(e=b.getResource(d,a,h,c))}})})}}),{res:e,usedKey:d}},a.prototype.isValidLookup=function(a){return!(void 0===a||!this.options.returnNull&&
null===a||!this.options.returnEmptyString&&""===a)},a.prototype.getResource=function(a,b,c){return this.resourceStore.getResource(a,b,c,3<arguments.length&&void 0!==arguments[3]?arguments[3]:{})},a}(D),P=function(){function b(a){x(this,b);this.options=a;this.whitelist=this.options.whitelist||!1;this.logger=y.create("languageUtils")}return b.prototype.getScriptPartFromCode=function(a){if(!a||0>a.indexOf("-"))return null;a=a.split("-");return 2===a.length?null:(a.pop(),this.formatLanguageCode(a.join("-")))},
b.prototype.getLanguagePartFromCode=function(a){if(!a||0>a.indexOf("-"))return a;a=a.split("-");return this.formatLanguageCode(a[0])},b.prototype.formatLanguageCode=function(a){if("string"==typeof a&&-1<a.indexOf("-")){var b="hans hant latn cyrl cans mong arab".split(" ");a=a.split("-");return this.options.lowerCaseLng?a=a.map(function(a){return a.toLowerCase()}):2===a.length?(a[0]=a[0].toLowerCase(),a[1]=a[1].toUpperCase(),-1<b.indexOf(a[1].toLowerCase())&&(a[1]=E(a[1].toLowerCase()))):3===a.length&&
(a[0]=a[0].toLowerCase(),2===a[1].length&&(a[1]=a[1].toUpperCase()),"sgn"!==a[0]&&2===a[2].length&&(a[2]=a[2].toUpperCase()),-1<b.indexOf(a[1].toLowerCase())&&(a[1]=E(a[1].toLowerCase())),-1<b.indexOf(a[2].toLowerCase())&&(a[2]=E(a[2].toLowerCase()))),a.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?a.toLowerCase():a},b.prototype.isWhitelisted=function(a){return("languageOnly"===this.options.load||this.options.nonExplicitWhitelist)&&(a=this.getLanguagePartFromCode(a)),!this.whitelist||
!this.whitelist.length||-1<this.whitelist.indexOf(a)},b.prototype.getFallbackCodes=function(a,b){if(!a)return[];if("string"==typeof a&&(a=[a]),"[object Array]"===Object.prototype.toString.apply(a))return a;if(!b)return a.default||[];var l=a[b];return l||(l=a[this.getScriptPartFromCode(b)]),l||(l=a[this.formatLanguageCode(b)]),l||(l=a.default),l||[]},b.prototype.toResolveHierarchy=function(a,b){var l=this;b=this.getFallbackCodes(b||this.options.fallbackLng||[],a);var c=[],e=function(a){a&&(l.isWhitelisted(a)?
c.push(a):l.logger.warn("rejecting non-whitelisted language code: "+a))};return"string"==typeof a&&-1<a.indexOf("-")?("languageOnly"!==this.options.load&&e(this.formatLanguageCode(a)),"languageOnly"!==this.options.load&&"currentOnly"!==this.options.load&&e(this.getScriptPartFromCode(a)),"currentOnly"!==this.options.load&&e(this.getLanguagePartFromCode(a))):"string"==typeof a&&e(this.formatLanguageCode(a)),b.forEach(function(a){0>c.indexOf(a)&&e(l.formatLanguageCode(a))}),c},b}(),Q=[{lngs:"ach ak am arn br fil gun ln mfe mg mi oc pt pt-BR tg ti tr uz wa".split(" "),
nr:[1,2],fc:1},{lngs:"af an ast az bg bn ca da de dev el en eo es et eu fi fo fur fy gl gu ha he hi hu hy ia it kn ku lb mai ml mn mr nah nap nb ne nl nn no nso pa pap pms ps pt-PT rm sco se si so son sq sv sw ta te tk ur yo".split(" "),nr:[1,2],fc:2},{lngs:"ay bo cgg fa id ja jbo ka kk km ko ky lo ms sah su th tt ug vi wo zh".split(" "),nr:[1],fc:3},{lngs:"be bs dz hr ru sr uk".split(" "),nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],
nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21}],R={1:function(b){return Number(1<
b)},2:function(b){return Number(1!=b)},3:function(b){return 0},4:function(b){return Number(1==b%10&&11!=b%100?0:2<=b%10&&4>=b%10&&(10>b%100||20<=b%100)?1:2)},5:function(b){return Number(0===b?0:1==b?1:2==b?2:3<=b%100&&10>=b%100?3:11<=b%100?4:5)},6:function(b){return Number(1==b?0:2<=b&&4>=b?1:2)},7:function(b){return Number(1==b?0:2<=b%10&&4>=b%10&&(10>b%100||20<=b%100)?1:2)},8:function(b){return Number(1==b?0:2==b?1:8!=b&&11!=b?2:3)},9:function(b){return Number(2<=b)},10:function(b){return Number(1==
b?0:2==b?1:7>b?2:11>b?3:4)},11:function(b){return Number(1==b||11==b?0:2==b||12==b?1:2<b&&20>b?2:3)},12:function(b){return Number(1!=b%10||11==b%100)},13:function(b){return Number(0!==b)},14:function(b){return Number(1==b?0:2==b?1:3==b?2:3)},15:function(b){return Number(1==b%10&&11!=b%100?0:2<=b%10&&(10>b%100||20<=b%100)?1:2)},16:function(b){return Number(1==b%10&&11!=b%100?0:0!==b?1:2)},17:function(b){return Number(1==b||1==b%10?0:1)},18:function(b){return Number(0==b?0:1==b?1:2)},19:function(b){return Number(1==
b?0:0===b||1<b%100&&11>b%100?1:10<b%100&&20>b%100?2:3)},20:function(b){return Number(1==b?0:0===b||0<b%100&&20>b%100?1:2)},21:function(b){return Number(1==b%100?1:2==b%100?2:3==b%100||4==b%100?3:0)}},S=function(){function b(a){var f=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};x(this,b);this.languageUtils=a;this.options=f;this.logger=y.create("pluralResolver");this.rules=function(){var a={};return Q.forEach(function(b){b.lngs.forEach(function(f){a[f]={numbers:b.nr,plurals:R[b.fc]}})}),
a}()}return b.prototype.addRule=function(a,b){this.rules[a]=b},b.prototype.getRule=function(a){return this.rules[a]||this.rules[this.languageUtils.getLanguagePartFromCode(a)]},b.prototype.needsPlural=function(a){return(a=this.getRule(a))&&1<a.numbers.length},b.prototype.getPluralFormsOfKey=function(a,b){var l=this,c=[];return this.getRule(a).numbers.forEach(function(e){e=l.getSuffix(a,e);c.push(""+b+e)}),c},b.prototype.getSuffix=function(a,b){var l=this,c=this.getRule(a);if(c){a=c.noAbs?c.plurals(b):
c.plurals(Math.abs(b));var e=c.numbers[a];this.options.simplifyPluralSuffix&&2===c.numbers.length&&1===c.numbers[0]&&(2===e?e="plural":1===e&&(e=""));b=function(){return l.options.prepend&&e.toString()?l.options.prepend+e.toString():e.toString()};return"v1"===this.options.compatibilityJSON?1===e?"":"number"==typeof e?"_plural_"+e.toString():b():"v2"===this.options.compatibilityJSON||2===c.numbers.length&&1===c.numbers[0]?b():2===c.numbers.length&&1===c.numbers[0]?b():this.options.prepend&&a.toString()?
this.options.prepend+a.toString():a.toString()}return this.logger.warn("no plural rule found for: "+a),""},b}(),T=function(){function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};x(this,b);this.logger=y.create("interpolator");this.init(a,!0)}return b.prototype.init=function(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};arguments[1]&&(this.options=a,this.format=a.interpolation&&a.interpolation.format||function(a){return a},this.escape=a.interpolation&&a.interpolation.escape||
A);a.interpolation||(a.interpolation={escapeValue:!0});a=a.interpolation;this.escapeValue=void 0===a.escapeValue||a.escapeValue;this.prefix=a.prefix?w(a.prefix):a.prefixEscaped||"{{";this.suffix=a.suffix?w(a.suffix):a.suffixEscaped||"}}";this.formatSeparator=a.formatSeparator?a.formatSeparator:a.formatSeparator||",";this.unescapeSuffix=(this.unescapePrefix=a.unescapeSuffix?"":a.unescapePrefix||"-")?"":a.unescapeSuffix||"";this.nestingPrefix=a.nestingPrefix?w(a.nestingPrefix):a.nestingPrefixEscaped||
w("$t(");this.nestingSuffix=a.nestingSuffix?w(a.nestingSuffix):a.nestingSuffixEscaped||w(")");this.maxReplaces=a.maxReplaces?a.maxReplaces:1E3;this.resetRegExp()},b.prototype.reset=function(){this.options&&this.init(this.options)},b.prototype.resetRegExp=function(){this.regexp=new RegExp(this.prefix+"(.+?)"+this.suffix,"g");this.regexpUnescape=new RegExp(""+this.prefix+this.unescapePrefix+"(.+?)"+this.unescapeSuffix+this.suffix,"g");this.nestingRegexp=new RegExp(this.nestingPrefix+"(.+?)"+this.nestingSuffix,
"g")},b.prototype.interpolate=function(a,b,l){var c=this,e=void 0,d=void 0,h=void 0,n=function(a){if(0>a.indexOf(c.formatSeparator))return p(b,a);var d=a.split(c.formatSeparator);a=d.shift().trim();d=d.join(c.formatSeparator).trim();return c.format(p(b,a),d,l)};this.resetRegExp();for(h=0;(e=this.regexpUnescape.exec(a))&&(d=n(e[1].trim()),a=a.replace(e[0],d),this.regexpUnescape.lastIndex=0,!(++h>=this.maxReplaces)););for(h=0;(e=this.regexp.exec(a))&&("string"!=typeof(d=n(e[1].trim()))&&(d=null==d?
"":""+d),d||(this.logger.warn("missed to pass in variable "+e[1]+" for interpolating "+a),d=""),d=(this.escapeValue?this.escape(d):d).replace(/\$/g,"$$$$"),a=a.replace(e[0],d),this.regexp.lastIndex=0,!(++h>=this.maxReplaces)););return a},b.prototype.nest=function(a,b){var l,c=void 0,e=v({},2<arguments.length&&void 0!==arguments[2]?arguments[2]:{});for(e.applyPostProcessor=!1;l=this.nestingRegexp.exec(a);){var d;d=l[1].trim();var h=e;if(!(0>d.indexOf(","))){var n=d.split(",");d=n.shift();n=n.join(",");
n=(n=this.interpolate(n,e)).replace(/'/g,'"');try{e=JSON.parse(n),h&&(e=v({},h,e))}catch(u){this.logger.error("failed parsing options string in nesting for key "+d,u)}}if((c=b(d,e))&&l[0]===a&&"string"!=typeof c)return c;"string"!=typeof c&&(c=null==c?"":""+c);c||(this.logger.warn("missed to resolve "+l[1]+" for nesting "+a),c="");a=a.replace(l[0],c);this.regexp.lastIndex=0}return a},b}(),U=function(b){function a(f,l,c){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};x(this,a);var d=
B(this,b.call(this));return d.backend=f,d.store=l,d.languageUtils=c.languageUtils,d.options=e,d.logger=y.create("backendConnector"),d.state={},d.queue=[],d.backend&&d.backend.init&&d.backend.init(c,e.backend,e),d}return C(a,b),a.prototype.queueLoad=function(a,b,c){var e=this,d=[],h=[],n=[],u=[];return a.forEach(function(a){var c=!0;b.forEach(function(b){var f=a+"|"+b;e.store.hasResourceBundle(a,b)?e.state[f]=2:0>e.state[f]||(1===e.state[f]?0>h.indexOf(f)&&h.push(f):(e.state[f]=1,c=!1,0>h.indexOf(f)&&
h.push(f),0>d.indexOf(f)&&d.push(f),0>u.indexOf(b)&&u.push(b)))});c||n.push(a)}),(d.length||h.length)&&this.queue.push({pending:h,loaded:{},errors:[],callback:c}),{toLoad:d,pending:h,toLoadLanguages:n,toLoadNamespaces:u}},a.prototype.loaded=function(a,b,c){var e=this,d=a.split("|"),d=G(d,2),h=d[0],n=d[1];b&&this.emit("failedLoading",h,n,b);c&&this.store.addResourceBundle(h,n,c);this.state[a]=b?-1:2;this.queue.forEach(function(c){var d=k(c.loaded,[h],Object),g=d.obj,d=d.k;g[d]=g[d]||[];g[d].push(n);
g=c.pending;for(d=g.indexOf(a);-1!==d;)g.splice(d,1),d=g.indexOf(a);b&&c.errors.push(b);0!==c.pending.length||c.done||(e.emit("loaded",c.loaded),c.done=!0,c.errors.length?c.callback(c.errors):c.callback())});this.queue=this.queue.filter(function(a){return!a.done})},a.prototype.read=function(a,b,c){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0,d=this,h=4<arguments.length&&void 0!==arguments[4]?arguments[4]:250,n=arguments[5];return a.length?this.backend[c](a,b,function(g,t){return g&&
t&&5>e?void setTimeout(function(){d.read.call(d,a,b,c,e+1,2*h,n)},h):void n(g,t)}):n(null,{})},a.prototype.load=function(a,b,c){var e=this;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),c&&c();var d=v({},this.backend.options,this.options.backend);"string"==typeof a&&(a=this.languageUtils.toResolveHierarchy(a));"string"==typeof b&&(b=[b]);var h=this.queueLoad(a,b,c);return h.toLoad.length?void(d.allowMultiLoading&&this.backend.readMulti?this.read(h.toLoadLanguages,
h.toLoadNamespaces,"readMulti",null,null,function(a,b){a&&e.logger.warn("loading namespaces "+h.toLoadNamespaces.join(", ")+" for languages "+h.toLoadLanguages.join(", ")+" via multiloading failed",a);!a&&b&&e.logger.log("successfully loaded namespaces "+h.toLoadNamespaces.join(", ")+" for languages "+h.toLoadLanguages.join(", ")+" via multiloading",b);h.toLoad.forEach(function(c){var f=c.split("|"),d=G(f,2),f=d[0],d=d[1],h=p(b,[f,d]);h?e.loaded(c,a,h):(f="loading namespace "+d+" for language "+f+
" via multiloading failed",e.loaded(c,f),e.logger.error(f))})}):h.toLoad.forEach(function(a){e.loadOne(a)})):(h.pending.length||c(),null)},a.prototype.reload=function(a,b){var c=this;this.backend||this.logger.warn("No backend was added via i18next.use. Will not load resources.");var e=v({},this.backend.options,this.options.backend);"string"==typeof a&&(a=this.languageUtils.toResolveHierarchy(a));"string"==typeof b&&(b=[b]);e.allowMultiLoading&&this.backend.readMulti?this.read(a,b,"readMulti",null,
null,function(d,e){d&&c.logger.warn("reloading namespaces "+b.join(", ")+" for languages "+a.join(", ")+" via multiloading failed",d);!d&&e&&c.logger.log("successfully reloaded namespaces "+b.join(", ")+" for languages "+a.join(", ")+" via multiloading",e);a.forEach(function(a){b.forEach(function(b){var f=p(e,[a,b]);f?c.loaded(a+"|"+b,d,f):(f="reloading namespace "+b+" for language "+a+" via multiloading failed",c.loaded(a+"|"+b,f),c.logger.error(f))})})}):a.forEach(function(a){b.forEach(function(b){c.loadOne(a+
"|"+b,"re")})})},a.prototype.loadOne=function(a){var b=this,c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",e=a.split("|"),e=G(e,2),d=e[0],h=e[1];this.read(d,h,"read",null,null,function(e,g){e&&b.logger.warn(c+"loading namespace "+h+" for language "+d+" failed",e);!e&&g&&b.logger.log(c+"loaded namespace "+h+" for language "+d,g);b.loaded(a,e,g)})},a.prototype.saveMissing=function(a,b,c,e,d){this.backend&&this.backend.create&&this.backend.create(a,b,c,e,null,{isUpdate:d});a&&a[0]&&this.store.addResource(a[0],
b,c,e)},a}(D),V=function(b){function a(f,l,c){var e=3<arguments.length&&void 0!==arguments[3]?arguments[3]:{};x(this,a);var d=B(this,b.call(this));return d.cache=f,d.store=l,d.services=c,d.options=e,d.logger=y.create("cacheConnector"),d.cache&&d.cache.init&&d.cache.init(c,e.cache,e),d}return C(a,b),a.prototype.load=function(a,b,c){var e=this;if(!this.cache)return c&&c();b=v({},this.cache.options,this.options.cache);var d="string"==typeof a?this.services.languageUtils.toResolveHierarchy(a):a;b.enabled?
this.cache.load(d,function(a,b){if(a&&e.logger.error("loading languages "+d.join(", ")+" from cache failed",a),b)for(var f in b)if(Object.prototype.hasOwnProperty.call(b,f))for(var l in b[f])Object.prototype.hasOwnProperty.call(b[f],l)&&"i18nStamp"!==l&&(a=b[f][l])&&e.store.addResourceBundle(f,l,a);c&&c()}):c&&c()},a.prototype.save=function(){this.cache&&this.options.cache&&this.options.cache.enabled&&this.cache.save(this.store.data)},a}(D);return new (function(b){function a(){var f=0<arguments.length&&
void 0!==arguments[0]?arguments[0]:{},l=arguments[1];x(this,a);var c=B(this,b.call(this));if(c.options=H(f),c.services={},c.logger=y,c.modules={external:[]},l&&!c.isInitialized&&!f.isClone){var e;if(!c.options.initImmediate)return e=c.init(f,l),B(c,e);setTimeout(function(){c.init(f,l)},0)}return c}return C(a,b),a.prototype.init=function(){function a(b){return b?"function"==typeof b?new b:b:null}var b=this,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},e=arguments[1];if("function"==typeof c&&
(e=c,c={}),this.options=v({},{debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,whitelist:!1,nonExplicitWhitelist:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,postProcess:!1,returnNull:!0,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:function(){},
parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:function(a){return{defaultValue:a[1]}},interpolation:{escapeValue:!0,format:function(a,b,c){return a},prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",maxReplaces:1E3}},this.options,H(c)),this.format=this.options.interpolation.format,e||(e=F),!this.options.isClone){this.modules.logger?y.init(a(this.modules.logger),this.options):y.init(null,
this.options);c=new P(this.options);this.store=new O(this.options.resources,this.options);var d=this.services;d.logger=y;d.resourceStore=this.store;d.resourceStore.on("added removed",function(a,b){d.cacheConnector.save()});d.languageUtils=c;d.pluralResolver=new S(c,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix});d.interpolator=new T(this.options);d.backendConnector=new U(a(this.modules.backend),d.resourceStore,
d,this.options);d.backendConnector.on("*",function(a){for(var c=arguments.length,d=Array(1<c?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];b.emit.apply(b,[a].concat(d))});d.backendConnector.on("loaded",function(a){d.cacheConnector.save()});d.cacheConnector=new V(a(this.modules.cache),d.resourceStore,d,this.options);d.cacheConnector.on("*",function(a){for(var c=arguments.length,d=Array(1<c?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];b.emit.apply(b,[a].concat(d))});this.modules.languageDetector&&(d.languageDetector=
a(this.modules.languageDetector),d.languageDetector.init(d,this.options.detection,this.options));this.translator=new K(this.services,this.options);this.translator.on("*",function(a){for(var c=arguments.length,d=Array(1<c?c-1:0),f=1;f<c;f++)d[f-1]=arguments[f];b.emit.apply(b,[a].concat(d))});this.modules.external.forEach(function(a){a.init&&a.init(b)})}"getResource addResource addResources addResourceBundle removeResourceBundle hasResourceBundle getResourceBundle".split(" ").forEach(function(a){b[a]=
function(){var c;return(c=b.store)[a].apply(c,arguments)}});c=function(){b.changeLanguage(b.options.lng,function(a,c){b.isInitialized=!0;b.logger.log("initialized",b.options);b.emit("initialized",b.options);e(a,c)})};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),this},a.prototype.loadResources=function(){var a=this,b=0<arguments.length&&void 0!==arguments[0]?arguments[0]:F;if(this.options.resources)b(null);else{if(this.language&&"cimode"===this.language.toLowerCase())return b();
var c=[],e=function(b){b&&a.services.languageUtils.toResolveHierarchy(b).forEach(function(a){0>c.indexOf(a)&&c.push(a)})};this.language?e(this.language):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(function(a){return e(a)});this.options.preload&&this.options.preload.forEach(function(a){return e(a)});this.services.cacheConnector.load(c,this.options.ns,function(){a.services.backendConnector.load(c,a.options.ns,b)})}},a.prototype.reloadResources=function(a,b){a||(a=
this.languages);b||(b=this.options.ns);this.services.backendConnector.reload(a,b)},a.prototype.use=function(a){return"backend"===a.type&&(this.modules.backend=a),"cache"===a.type&&(this.modules.cache=a),("logger"===a.type||a.log&&a.warn&&a.error)&&(this.modules.logger=a),"languageDetector"===a.type&&(this.modules.languageDetector=a),"postProcessor"===a.type&&J.addPostProcessor(a),"3rdParty"===a.type&&this.modules.external.push(a),this},a.prototype.changeLanguage=function(a,b){var c=this,e=function(a,
d){c.translator.changeLanguage(d);d&&(c.emit("languageChanged",d),c.logger.log("languageChanged",d));b&&b(a,function(){return c.t.apply(c,arguments)})},d=function(a){a&&(c.language=a,c.languages=c.services.languageUtils.toResolveHierarchy(a),c.translator.language||c.translator.changeLanguage(a),c.services.languageDetector&&c.services.languageDetector.cacheUserLanguage(a));c.loadResources(function(b){e(b,a)})};a||!this.services.languageDetector||this.services.languageDetector.async?!a&&this.services.languageDetector&&
this.services.languageDetector.async?this.services.languageDetector.detect(d):d(a):d(this.services.languageDetector.detect())},a.prototype.getFixedT=function(a,b){var c=this,e=function h(a,b){for(var e=arguments.length,f=Array(2<e?e-2:0),g=2;g<e;g++)f[g-2]=arguments[g];e=v({},b);return"object"!==(void 0===b?"undefined":I(b))&&(e=c.options.overloadTranslationOptionHandler([a,b].concat(f))),e.lng=e.lng||h.lng,e.lngs=e.lngs||h.lngs,e.ns=e.ns||h.ns,c.t(a,e)};return"string"==typeof a?e.lng=a:e.lngs=a,
e.ns=b,e},a.prototype.t=function(){var a;return this.translator&&(a=this.translator).translate.apply(a,arguments)},a.prototype.exists=function(){var a;return this.translator&&(a=this.translator).exists.apply(a,arguments)},a.prototype.setDefaultNamespace=function(a){this.options.defaultNS=a},a.prototype.loadNamespaces=function(a,b){var c=this;return this.options.ns?("string"==typeof a&&(a=[a]),a.forEach(function(a){0>c.options.ns.indexOf(a)&&c.options.ns.push(a)}),void this.loadResources(b)):b&&b()},
a.prototype.loadLanguages=function(a,b){"string"==typeof a&&(a=[a]);var c=this.options.preload||[];a=a.filter(function(a){return 0>c.indexOf(a)});return a.length?(this.options.preload=c.concat(a),void this.loadResources(b)):b()},a.prototype.dir=function(a){return a||(a=this.languages&&0<this.languages.length?this.languages[0]:this.language),a?0<="ar shu sqr ssh xaa yhd yud aao abh abv acm acq acw acx acy adf ads aeb aec afb ajp apc apd arb arq ars ary arz auz avl ayh ayl ayn ayp bbz pga he iw ps pbt pbu pst prp prd ur ydd yds yih ji yi hbo men xmn fa jpr peo pes prs dv sam".split(" ").indexOf(this.services.languageUtils.getLanguagePartFromCode(a))?
"rtl":"ltr":"rtl"},a.prototype.createInstance=function(){return new a(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},arguments[1])},a.prototype.cloneInstance=function(){var b=this,g=1<arguments.length&&void 0!==arguments[1]?arguments[1]:F,c=v({},this.options,0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},{isClone:!0}),e=new a(c);return["store","services","language"].forEach(function(a){e[a]=b[a]}),e.translator=new K(e.services,e.options),e.translator.on("*",function(a){for(var b=
arguments.length,c=Array(1<b?b-1:0),f=1;f<b;f++)c[f-1]=arguments[f];e.emit.apply(e,[a].concat(c))}),e.init(c,g),e.translator.options=e.options,e},a}(D))}()},7464:function(k,m,p){Object.defineProperty(m,"__esModule",{value:!0});p(5024);p(4989);window[window.WWNamespace.LOAD_MODULE_SERVICE].notifyAboutLoad(window[window.WWNamespace.MODULES].I18N)},9458:function(k,m,p){m.a=function(g,k,m){k in g?Object.defineProperty(g,k,{value:m,enumerable:!0,configurable:!0,writable:!0}):g[k]=m;return g}},9459:function(k,
m,p){function g(k){"@babel/helpers - typeof";$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbolIterator();return(g="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(g){return typeof g}:function(g){$jscomp.initSymbol();$jscomp.initSymbol();$jscomp.initSymbol();return g&&"function"==typeof Symbol&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g})(k)}m.a=g}});