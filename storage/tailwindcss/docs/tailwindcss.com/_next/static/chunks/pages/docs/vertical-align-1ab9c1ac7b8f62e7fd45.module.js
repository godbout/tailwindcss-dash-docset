(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[165],{"5xSE":function(e,n,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,n,t){"use strict";t.d(n,"a",(function(){return c}));var a=t("q1tI"),s=t.n(a),l=t("98BF"),o=t("Zb5r"),i=t("AOjV"),r=s.a.createElement;function c(e){var{plugin:n,name:t}=e,a=l.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var c=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2);return r(s.a.Fragment,null,r("p",null,"By default, ",a.length?"only ".concat(Object(o.a)(a)):"no"," variants are generated for ",t," utilities."),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,n)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),r(i.a,{path:"variants",before:"// ...",remove:{[n]:a},add:{[n]:[...a,...c]}}))}},AOjV:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),l=t("Btb4"),o=t.n(l),i=t("AI3G"),r=t("iuhU"),c=s.a.createElement;function p(e){var{edits:n,indent:t="",type:s="inserted"}=e;return c("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map((e,l)=>c(a.Fragment,{key:l},c("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(e){return/^[a-z_$][a-z0-9_$]*$/i.test(e)?e:"'".concat(e,"'")}(e),":"," ",o()(n[e],{indent:"  "}).replace(/\[([^\]]+)\]/g,(e,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((e,n)=>"".concat(0===n?"":"+ "+t).concat(e)).join("\n"),",\n")))}function u(e){var{path:n,add:t,remove:s,before:l,after:o}=e;return n="string"===typeof n?n.split("."):n,c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((e,n)=>c(a.Fragment,{key:n},"  ","  ".repeat(n+1),e,": ","{\n")),l&&Object(i.a)(l).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n"))),s&&c(p,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&c(p,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),c("span",{className:"token unchanged"},o&&Object(i.a)(o).map(e=>"".concat("  ".repeat(n.length+2)).concat(e,"\n")),n.map((e,t)=>c(a.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))}},Btb4:function(e,n,t){"use strict";const a=t("5xSE"),s=t("p+I8"),l=t("GAX2").default;e.exports=(e,n,t)=>{const o=[];return function e(n,t,i){let r;(t=t||{}).indent=t.indent||"\t",i=i||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const c=e=>{if(void 0===t.inlineCharacterLimit)return e;const n=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),i).replace(new RegExp(r.indent,"g"),i+t.indent)};if(-1!==o.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||a(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";o.push(n);const a="["+r.newLine+n.map((a,s)=>{const l=n.length-1===s?r.newLine:","+r.newLineOrSpace;let o=e(a,t,i+t.indent);return t.transform&&(o=t.transform(n,s,o)),r.indent+o+l}).join("")+r.pad+"]";return o.pop(),c(a)}if(s(n)){let a=Object.keys(n).concat(l(n));if(t.filter&&(a=a.filter(e=>t.filter(n,e))),0===a.length)return"{}";o.push(n);const s="{"+r.newLine+a.map((s,l)=>{const o=a.length-1===l?r.newLine:","+r.newLineOrSpace,c="symbol"===typeof s,p=!c&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=c||p?s:e(s,t);let d=e(n[s],t,i+t.indent);return t.transform&&(d=t.transform(n,s,d)),r.indent+String(u)+": "+d+o}).join("")+r.pad+"}";return o.pop(),c(s)}return n=String(n).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(e,n,t)}},"Ca+n":function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),l=t("S5AU"),o=t.n(l),i=t("iuhU"),r=s.a.createElement,c=["","sm:","md:","lg:","xl:"];function p(e){var{children:n,active:t,onClick:a}=e;return r("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},n)}var u=e=>'<div class="'.concat(e,'"></div>');function d(e){var{classNames:n,snippet:t=u,preview:s,previewClassName:l}=e,d=Array.isArray(n[0])?n.length:1,{0:b,1:g}=Object(a.useState)(0);return r("div",{className:"mt-8"},r("div",{className:"flex justify-center"},r("div",{className:"grid grid-cols-5 mb-2 bg-white"},r(p,{active:0===b,onClick:()=>g(0)},r("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"all")),r(p,{active:1===b,onClick:()=>g(1)},r("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"sm")),r(p,{active:2===b,onClick:()=>g(2)},r("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"md")),r(p,{active:3===b,onClick:()=>g(3)},r("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"lg")),r(p,{active:4===b,onClick:()=>g(4)},r("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),r("p",{className:"text-xs"},"xl")))),r("div",{className:"overflow-hidden mb-8"},r("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},r("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},r("code",{className:"inline-block p-4"},o()(t(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((e,n)=>"{{CLASSNAMES[".concat(n,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var a=e.match(/\[([0-9]+)\]/);return(a?n[parseInt(a[1],10)]:n).map((e,n)=>e?r("span",{key:"".concat(t,"-").concat(n),className:b===n?"text-code-yellow":""},0===n?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(c[n]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),r("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",l,{"p-4":!l})},s(function(e){if(d>1)return n.map(n=>{for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(b)))))}},EL43:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/vertical-align",function(){return t("yLNH")}])},GAX2:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=e=>Object.getOwnPropertySymbols(e).filter(n=>Object.prototype.propertyIsEnumerable.call(e,n))},"IBu/":function(e,n,t){"use strict";const a=t("sQdO");e.exports=e=>{const n=a(e);if(0===n)return e;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return e.replace(t,"")}},S5AU:function(e,n,t){"use strict";const a=t("IBu/"),s=t("S6im");e.exports=(e,n=0,t)=>s(a(e),n,t)},S6im:function(e,n,t){"use strict";e.exports=(e,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return e;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(a,t.indent.repeat(n))}},Zb5r:function(e,n,t){"use strict";function a(e){return e.reduce((n,t,a)=>0===a?t:a===e.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return a}))},"p+I8":function(e,n,t){"use strict";e.exports=function(e){var n=typeof e;return null!==e&&("object"===n||"function"===n)}},pOT7:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var a=t("q1tI"),s=t.n(a),l=t("iuhU"),o=s.a.createElement;function i(e){var{preview:n,snippet:t,previewClassName:a}=e;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(l.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:n}}),o("div",{className:"rounded-b-lg bg-gray-800"},o("pre",{className:"scrollbar-none m-0 p-0 language-html"},o("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},qkm3:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:e,variants:n}){e({".align-baseline":{"vertical-align":"baseline"},".align-top":{"vertical-align":"top"},".align-middle":{"vertical-align":"middle"},".align-bottom":{"vertical-align":"bottom"},".align-text-top":{"vertical-align":"text-top"},".align-text-bottom":{"vertical-align":"text-bottom"}},n("verticalAlign"))}}},sQdO:function(e,n,t){"use strict";e.exports=e=>{const n=e.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((e,n)=>Math.min(e,n.length),1/0):0}},wH44:function(e,n,t){"use strict";t.d(n,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),l=t.n(s),o=t("AOjV"),i=t("AI3G"),r=t("Zb5r"),c=l.a.createElement;function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){Object(a.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function d(e){var{plugin:n,name:t}=e,a=Object(i.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(e,n,t)=>"".concat(n," ").concat(t.toLowerCase())),c(l.a.Fragment,null,c("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",c("code",null,"false")," in the"," ",c("code",null,"corePlugins")," section of your config file:"),c(o.a,{path:"corePlugins",before:"// ...",add:a.reduce((e,n)=>u(u({},e),{},{[n]:!1}),{})}))}},yLNH:function(e,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return w})),t.d(n,"classes",(function(){return k})),t.d(n,"meta",(function(){return O})),t.d(n,"tableOfContents",(function(){return y})),t.d(n,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),l=t("q1tI"),o=t.n(l),i=t("7ljp"),r=t("YFqc"),c=t.n(r),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),g=t("qkm3"),m=t.n(g),v=t("8C7G"),f=t("wH44"),h=t("Ca+n"),w=(o.a.createElement,d.DocumentationLayout),k={plugin:m()},O={title:"Vertical Alignment",shortTitle:"Vertical Align",description:"Utilities for controlling the vertical alignment of an inline or table-cell box.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},y=[{title:"Baseline",slug:"baseline",children:[]},{title:"Top",slug:"top",children:[]},{title:"Middle",slug:"middle",children:[]},{title:"Bottom",slug:"bottom",children:[]},{title:"Text Top",slug:"text-top",children:[]},{title:"Text Bottom",slug:"text-bottom",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:w,classes:k,meta:O,tableOfContents:y},x=b.ContentsLayout;function N(e){var{components:n}=e,t=Object(s.a)(e,["components"]);return Object(i.a)(x,Object(a.a)({},j,t,{components:n,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"baseline",toc:!0},"Baseline"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-baseline")," to align the baseline of an element with the baseline of its parent."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-baseline bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-baseline</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-baseline ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"top",toc:!0},"Top"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-top")," to align the top of an element and its descendants with the top of the entire line."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-top bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-top</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-top ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"middle",toc:!0},"Middle"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-middle")," to align the middle of an element with the baseline plus half the x-height of the parent."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-middle bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-middle</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-middle ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"bottom",toc:!0},"Bottom"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-bottom")," to align the bottom of an element and its descendants with the bottom of the entire line."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-bottom bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-bottom</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-bottom ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"text-top",toc:!0},"Text Top"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-text-top")," to align the top of an element with the top of the parent element's font."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-text-top bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-text-top</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-text-top ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"text-bottom",toc:!0},"Text Bottom"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},".align-text-bottom")," to align the bottom of an element with the bottom of the parent element's font."),Object(i.a)(u.a,{preview:'\n  <div class="leading-none relative">\n    <span class="w-1 h-8 inline-block align-text-bottom bg-blue-300">\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-8"></span>\n      <span class="absolute top-0 border-blue-300 border-t border-b w-full h-4"></span>\n    </span>\n    <span class="relative z-10">.align-text-bottom</span>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block align-text-bottom ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the vertical alignment only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing vertical align utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:align-top")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"align-top")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(h.a,{classNames:["align-top","align-middle","align-bottom","align-text-top","align-text-bottom"],snippet:e=>'\n    <div class="leading-none relative">\n      <span class="'.concat(e,' ...">...</span>\n      <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>\n    </div>\n  '),preview:e=>Object(i.a)("div",{className:"leading-none relative"},Object(i.a)("span",{className:"w-1 h-8 inline-block bg-blue-300 ".concat(e)},Object(i.a)("span",{className:"absolute top-0 border-blue-300 border-t border-b w-full h-8"}),Object(i.a)("span",{className:"absolute top-0 border-blue-300 border-t border-b w-full h-4"})),Object(i.a)("span",{className:"relative z-10"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit.")),mdxType:"ResponsiveCodeSample"}),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(v.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Variants"}),Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(f.a,{plugin:"verticalAlign",name:"vertical-alignment",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j}},[["EL43",0,2,1,3,4]]]);