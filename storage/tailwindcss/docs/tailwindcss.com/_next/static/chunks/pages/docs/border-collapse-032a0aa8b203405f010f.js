_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[64],{"5xSE":function(n,a,s){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,s){"use strict";s.d(a,"a",(function(){return i}));var t=s("KQm4"),e=s("rePB"),p=s("q1tI"),o=s.n(p),c=s("98BF"),l=s("Zb5r"),r=s("AOjV"),u=o.a.createElement;function i(n){var a=n.plugin,s=n.name,p=c.defaultConfig.variants[a]||["responsive"];s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(n){return!p.includes(n)})).slice(0,2);return u(o.a.Fragment,null,u("p",null,"By default, ",p.length?"only ".concat(Object(l.a)(p)):"no"," variants are generated for ",s," utilities."),u("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",u("code",null,a)," property in the ",u("code",null,"variants")," section of your"," ",u("code",null,"tailwind.config.js")," file."),u("p",null,"For example, this config will ",p.length>0?"also ":"","generate"," ",Object(l.a)(i)," variants:"),u(r.a,{path:"variants",before:"// ...",remove:Object(e.a)({},a,p),add:Object(e.a)({},a,[].concat(Object(t.a)(p),Object(t.a)(i)))}))}},AOjV:function(n,a,s){"use strict";s.d(a,"a",(function(){return i}));var t=s("q1tI"),e=s.n(t),p=s("Btb4"),o=s.n(p),c=s("AI3G"),l=s("iuhU"),r=e.a.createElement;function u(n){var a=n.edits,s=n.indent,e=void 0===s?"":s,p=n.type,c=void 0===p?"inserted":p;return r("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(a).map((function(n,s){return r(t.Fragment,{key:s},r("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",e,/^[a-z_$][a-z0-9_$]*$/i.test(p=n)?p:"'".concat(p,"'"),":"," ",o()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,a){return"[".concat(a.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,a){return"".concat(0===a?"":"+ "+e).concat(n)})).join("\n"),",\n");var p})))}function i(n){var a=n.path,s=n.add,e=n.remove,p=n.before,o=n.after;return a="string"===typeof a?a.split("."):a,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((function(n,a){return r(t.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")})),p&&Object(c.a)(p).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")}))),e&&r(u,{edits:e,type:"deleted",indent:"  ".repeat(a.length+1)}),s&&r(u,{edits:s,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},o&&Object(c.a)(o).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")})),a.map((function(n,s){return r(t.Fragment,{key:s},"  ","  ".repeat(a.length-s),"}\n")})),"  }")))}},Btb4:function(n,a,s){"use strict";const t=s("5xSE"),e=s("p+I8"),p=s("GAX2").default;n.exports=(n,a,s)=>{const o=[];return function n(a,s,c){let l;(s=s||{}).indent=s.indent||"\t",c=c||"",l=void 0===s.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+s.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===s.inlineCharacterLimit)return n;const a=n.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return a.length<=s.inlineCharacterLimit?a:n.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),c).replace(new RegExp(l.indent,"g"),c+s.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+l.newLine+a.map((t,e)=>{const p=a.length-1===e?l.newLine:","+l.newLineOrSpace;let o=n(t,s,c+s.indent);return s.transform&&(o=s.transform(a,e,o)),l.indent+o+p}).join("")+l.pad+"]";return o.pop(),r(t)}if(e(a)){let t=Object.keys(a).concat(p(a));if(s.filter&&(t=t.filter(n=>s.filter(a,n))),0===t.length)return"{}";o.push(a);const e="{"+l.newLine+t.map((e,p)=>{const o=t.length-1===p?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof e,u=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(e),i=r||u?e:n(e,s);let k=n(a[e],s,c+s.indent);return s.transform&&(k=s.transform(a,e,k)),l.indent+String(i)+": "+k+o}).join("")+l.pad+"}";return o.pop(),r(e)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===s.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,s)}},GAX2:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},Vhtw:function(n,a,s){"use strict";s.r(a),s.d(a,"Layout",(function(){return y})),s.d(a,"classes",(function(){return f})),s.d(a,"meta",(function(){return m})),s.d(a,"tableOfContents",(function(){return h})),s.d(a,"default",(function(){return j}));var t=s("wx14"),e=s("Ff2n"),p=s("q1tI"),o=s.n(p),c=s("7ljp"),l=(s("YFqc"),s("tc9R")),r=s("pOT7"),u=s("vRWG"),i=s("I6Nb"),k=s("sEq3"),d=s.n(k),g=s("8C7G"),b=s("wH44"),y=(o.a.createElement,u.DocumentationLayout),f={plugin:d.a},m={title:"Border Collapse",description:"Utilities for controlling whether table borders should collapse or be separated."},h=[{title:"Collapse",slug:"collapse",children:[]},{title:"Separate",slug:"separate",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],v={Layout:y,classes:f,meta:m,tableOfContents:h},O=i.ContentsLayout;function j(n){var a=n.components,s=Object(e.a)(n,["components"]);return Object(c.a)(O,Object(t.a)({},v,s,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"collapse",toc:!0},"Collapse"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".border-collapse")," to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level ",Object(c.a)("inlineCode",{parentName:"p"},"<table>")," tag."),Object(c.a)(r.a,{preview:'\n  <table class="border-collapse border-2 border-gray-500">\n    <thead>\n      <tr>\n        <th class="border border-gray-400 px-4 py-2 text-gray-800">State</th>\n        <th class="border border-gray-400 px-4 py-2 text-gray-800">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Indiana</td>\n        <td class="border border-gray-400 px-4 py-2">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Ohio</td>\n        <td class="border border-gray-400 px-4 py-2">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Michigan</td>\n        <td class="border border-gray-400 px-4 py-2">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-collapse border-2 border-gray-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"separate",toc:!0},"Separate"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},".border-separate")," to force each cell to display its own separate borders."),Object(c.a)(r.a,{preview:'\n  <table class="border-separate border-2 border-gray-500">\n    <thead>\n      <tr>\n        <th class="border border-gray-400 px-4 py-2 text-gray-800">State</th>\n        <th class="border border-gray-400 px-4 py-2 text-gray-800">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Indiana</td>\n        <td class="border border-gray-400 px-4 py-2">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Ohio</td>\n        <td class="border border-gray-400 px-4 py-2">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border border-gray-400 px-4 py-2">Michigan</td>\n        <td class="border border-gray-400 px-4 py-2">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-separate border-2 border-gray-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2 text-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border border-gray-400 px-4 py-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(g.a,{plugin:"borderCollapse",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(b.a,{plugin:"borderCollapse",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=v},Zb5r:function(n,a,s){"use strict";function t(n){return n.reduce((function(a,s,t){return 0===t?s:t===n.length-1?"".concat(a," and ").concat(s):"".concat(a,", ").concat(s)}),"")}s.d(a,"a",(function(){return t}))},dam5:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-collapse",function(){return s("Vhtw")}])},"p+I8":function(n,a,s){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,s){"use strict";s.d(a,"a",(function(){return c}));var t=s("q1tI"),e=s.n(t),p=s("iuhU"),o=e.a.createElement;function c(n){var a=n.preview,s=n.snippet,t=n.previewClassName;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:a}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:s}}))))}},sEq3:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".border-collapse":{"border-collapse":"collapse"},".border-separate":{"border-collapse":"separate"}},a("borderCollapse"))}}},wH44:function(n,a,s){"use strict";s.d(a,"a",(function(){return k}));var t=s("rePB"),e=s("q1tI"),p=s.n(e),o=s("AOjV"),c=s("AI3G"),l=s("Zb5r"),r=p.a.createElement;function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(t.a)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function k(n){var a=n.plugin,s=n.name,e=Object(c.a)(a);return s=s||a.replace(/([a-z])([A-Z])/g,(function(n,a,s){return"".concat(a," ").concat(s.toLowerCase())})),r(p.a.Fragment,null,r("p",null,"If you don't plan to use the ",s," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",e.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(o.a,{path:"corePlugins",before:"// ...",add:e.reduce((function(n,a){return i(i({},n),{},Object(t.a)({},a,!1))}),{})}))}}},[["dam5",0,2,1,3,4]]]);