_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[175],{"5xSE":function(n,e,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("KQm4"),s=t("rePB"),o=t("q1tI"),l=t.n(o),i=t("98BF"),r=t("Zb5r"),c=t("AOjV"),p=l.a.createElement;function u(n){var e=n.plugin,t=n.name,o=i.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(n,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!o.includes(n)})).slice(0,2);return p(l.a.Fragment,null,p("p",null,"By default, ",o.length?"only ".concat(Object(r.a)(o)):"no"," variants are generated for ",t," utilities."),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,e)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(r.a)(u)," variants:"),p(c.a,{path:"variants",before:"// ...",remove:Object(s.a)({},e,o),add:Object(s.a)({},e,[].concat(Object(a.a)(o),Object(a.a)(u)))}))}},AOjV:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),o=t("Btb4"),l=t.n(o),i=t("AI3G"),r=t("iuhU"),c=s.a.createElement;function p(n){var e=n.edits,t=n.indent,s=void 0===t?"":t,o=n.type,i=void 0===o?"inserted":o;return c("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===i,"deleted-sign deleted":"inserted"!==i})},Object.keys(e).map((function(n,t){return c(a.Fragment,{key:t},c("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===i,deleted:"inserted"!==i})},"inserted"===i?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=n)?o:"'".concat(o,"'"),":"," ",l()(e[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,e){return"[".concat(e.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,e){return"".concat(0===e?"":"+ "+s).concat(n)})).join("\n"),",\n");var o})))}function u(n){var e=n.path,t=n.add,s=n.remove,o=n.before,l=n.after;return e="string"===typeof e?e.split("."):e,c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((function(n,e){return c(a.Fragment,{key:e},"  ","  ".repeat(e+1),n,": ","{\n")})),o&&Object(i.a)(o).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")}))),s&&c(p,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&c(p,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},l&&Object(i.a)(l).map((function(n){return"".concat("  ".repeat(e.length+2)).concat(n,"\n")})),e.map((function(n,t){return c(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n")})),"  }")))}},Btb4:function(n,e,t){"use strict";const a=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;n.exports=(n,e,t)=>{const l=[];return function n(e,t,i){let r;(t=t||{}).indent=t.indent||"\t",i=i||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=n=>{if(void 0===t.inlineCharacterLimit)return n;const e=n.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return e.length<=t.inlineCharacterLimit?e:n.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+t.indent)};if(-1!==l.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||a(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";l.push(e);const a="["+r.newLine+e.map((a,s)=>{const o=e.length-1===s?r.newLine:","+r.newLineOrSpace;let l=n(a,t,i+t.indent);return t.transform&&(l=t.transform(e,s,l)),r.indent+l+o}).join("")+r.pad+"]";return l.pop(),c(a)}if(s(e)){let a=Object.keys(e).concat(o(e));if(t.filter&&(a=a.filter(n=>t.filter(e,n))),0===a.length)return"{}";l.push(e);const s="{"+r.newLine+a.map((s,o)=>{const l=a.length-1===o?r.newLine:","+r.newLineOrSpace,c="symbol"===typeof s,p=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=c||p?s:n(s,t);let d=n(e[s],t,i+t.indent);return t.transform&&(d=t.transform(e,s,d)),r.indent+String(u)+": "+d+l}).join("")+r.pad+"}";return l.pop(),c(s)}return e=String(e).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,t)}},"Ca+n":function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),o=t("S5AU"),l=t.n(o),i=t("iuhU"),r=s.a.createElement,c=["","sm:","md:","lg:","xl:"];function p(n){var e=n.children,t=n.active,a=n.onClick;return r("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},e)}var u=function(n){return'<div class="'.concat(n,'"></div>')};function d(n){var e=n.classNames,t=n.snippet,s=void 0===t?u:t,o=n.preview,d=n.previewClassName,b=Array.isArray(e[0])?e.length:1,g=Object(a.useState)(0),m=g[0],f=g[1];return r("div",{className:"mt-8"},r("div",{className:"flex justify-center"},r("div",{className:"grid grid-cols-5 mb-2 bg-white"},r(p,{active:0===m,onClick:function(){return f(0)}},r("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"all")),r(p,{active:1===m,onClick:function(){return f(1)}},r("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"sm")),r(p,{active:2===m,onClick:function(){return f(2)}},r("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"md")),r(p,{active:3===m,onClick:function(){return f(3)}},r("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"lg")),r(p,{active:4===m,onClick:function(){return f(4)}},r("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),r("p",{className:"text-xs"},"xl")))),r("div",{className:"overflow-hidden mb-8"},r("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},r("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},r("code",{className:"inline-block p-4"},l()(s(1===b?"{{CLASSNAMES}}":Array.from({length:b}).map((function(n,e){return"{{CLASSNAMES[".concat(e,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(n,t){if(t%2===1){var a=n.match(/\[([0-9]+)\]/);return(a?e[parseInt(a[1],10)]:e).map((function(n,e){return n?r("span",{key:"".concat(t,"-").concat(e),className:m===e?"text-code-yellow":""},0===e?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(n){return"".concat(c[e]).concat(n)})).join(" ")):null})).filter(Boolean)}return n}))))),r("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},o(function(n){if(b>1)return e.map((function(e){for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},EL43:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return t("yLNH")}])},GAX2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.getOwnPropertySymbols(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))},"IBu/":function(n,e,t){"use strict";const a=t("sQdO");n.exports=n=>{const e=a(n);if(0===e)return n;const t=new RegExp(`^[ \\t]{${e}}`,"gm");return n.replace(t,"")}},S5AU:function(n,e,t){"use strict";const a=t("IBu/"),s=t("S6im");n.exports=(n,e=0,t)=>s(a(n),e,t)},S6im:function(n,e,t){"use strict";n.exports=(n,e=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===e)return n;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(a,t.indent.repeat(e))}},Zb5r:function(n,e,t){"use strict";function a(n){return n.reduce((function(e,t,a){return 0===a?t:a===n.length-1?"".concat(e," and ").concat(t):"".concat(e,", ").concat(t)}),"")}t.d(e,"a",(function(){return a}))},"p+I8":function(n,e,t){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},pOT7:function(n,e,t){"use strict";t.d(e,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),o=t("iuhU"),l=s.a.createElement;function i(n){var e=n.preview,t=n.snippet,a=n.previewClassName;return l("div",{className:"relative overflow-hidden mb-8"},l("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:e}}),l("div",{className:"rounded-b-lg bg-gray-800"},l("pre",{className:"scrollbar-none m-0 p-0 language-html"},l("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},qkm3:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:n,variants:e}){n({".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"}},e("verticalAlign"))}}},sQdO:function(n,e,t){"use strict";n.exports=n=>{const e=n.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((n,e)=>Math.min(n,e.length),1/0):0}},wH44:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),o=t.n(s),l=t("AOjV"),i=t("AI3G"),r=t("Zb5r"),c=o.a.createElement;function p(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?p(Object(t),!0).forEach((function(e){Object(a.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var e=n.plugin,t=n.name,s=Object(i.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,(function(n,e,t){return"".concat(e," ").concat(t.toLowerCase())})),c(o.a.Fragment,null,c("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",c("code",null,"false")," in the"," ",c("code",null,"corePlugins")," section of your config file:"),c(l.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,e){return u(u({},n),{},Object(a.a)({},e,!1))}),{})}))}},yLNH:function(n,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return w})),t.d(e,"classes",(function(){return k})),t.d(e,"meta",(function(){return O})),t.d(e,"tableOfContents",(function(){return j})),t.d(e,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),o=t("q1tI"),l=t.n(o),i=t("7ljp"),r=t("YFqc"),c=t.n(r),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),g=t("qkm3"),m=t.n(g),f=t("8C7G"),v=t("wH44"),h=t("Ca+n"),w=(l.a.createElement,d.DocumentationLayout),k={plugin:m.a},O={title:"Vertical Alignment",shortTitle:"Vertical Align",description:"Utilities for controlling the vertical alignment of an inline or table-cell box.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},j=[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],y={Layout:w,classes:k,meta:O,tableOfContents:j},x=b.ContentsLayout;function N(n){var e=n.components,t=Object(s.a)(n,["components"]);return Object(i.a)(x,Object(a.a)({},y,t,{components:e,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-baseline")," to align the baseline of an element with the baseline of its parent."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-baseline bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-baseline</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-baseline ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"top",toc:!0},"Top"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-top")," to align the top of an element and its descendants with the top of the entire line."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-top bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-top</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-top ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"middle",toc:!0},"Middle"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-middle")," to align the middle of an element with the baseline plus half the x-height of the parent."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-middle bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-middle</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-middle ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"bottom",toc:!0},"Bottom"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-bottom")," to align the bottom of an element and its descendants with the bottom of the entire line."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-bottom bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-bottom</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-bottom ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"text-top",toc:!0},"Text Top"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-text-top")," to align the top of an element with the top of the parent element's font."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-text-top bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-text-top</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-text-top ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"text-bottom",toc:!0},"Text Bottom"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-text-bottom")," to align the bottom of an element with the bottom of the parent element's font."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-text-bottom bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-text-bottom</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-text-bottom ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the vertical alignment only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing vertical align utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:align-top")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"align-top")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(h.a,{classNames:["align-top","align-middle","align-bottom","align-text-top","align-text-bottom"],snippet:function(n){return'\n    <div class="leading-none relative">\n      <span class="'.concat(n,' ...">...</span>\n      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>\n    </div>\n  ')},preview:function(n){return Object(i.a)("div",{className:"leading-none relative"},Object(i.a)("span",{className:"w-1 h-8 inline-block bg-blue-300 ".concat(n)},Object(i.a)("span",{className:"absolute top-0 border-blue-300 border-t border-b w-full h-8"}),Object(i.a)("span",{className:"absolute top-0 border-blue-300 border-t border-b w-full h-4"})),Object(i.a)("span",{className:"relative z-10"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit."))},mdxType:"ResponsiveCodeSample"}),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(f.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Variants"}),Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(v.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=y}},[["EL43",0,2,1,3,4]]]);