(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[127],{"5xSE":function(t,e,n){"use strict";t.exports=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)}},"8C7G":function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var a=n("q1tI"),s=n.n(a),o=n("98BF"),c=n("Zb5r"),p=n("AOjV"),i=s.a.createElement;function r(t){var{plugin:e,name:n}=t,a=o.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(t,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var r=["responsive","hover","focus","active","group-hover"].filter(t=>!a.includes(t)).slice(0,2);return i(s.a.Fragment,null,i("p",null,"By default, ",a.length?"only ".concat(Object(c.a)(a)):"no"," variants are generated for ",n," utilities."),i("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(r)," variants:"),i(p.a,{path:"variants",before:"// ...",remove:{[e]:a},add:{[e]:[...a,...r]}}))}},AOjV:function(t,e,n){"use strict";n.d(e,"a",(function(){return u}));var a=n("q1tI"),s=n.n(a),o=n("Btb4"),c=n.n(o),p=n("AI3G"),i=n("iuhU"),r=s.a.createElement;function l(t){var{edits:e,indent:n="",type:s="inserted"}=t;return r("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(e).map((t,o)=>r(a.Fragment,{key:o},r("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,function(t){return/^[a-z_$][a-z0-9_$]*$/i.test(t)?t:"'".concat(t,"'")}(t),":"," ",c()(e[t],{indent:"  "}).replace(/\[([^\]]+)\]/g,(t,e)=>"[".concat(e.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((t,e)=>"".concat(0===e?"":"+ "+n).concat(t)).join("\n"),",\n")))}function u(t){var{path:e,add:n,remove:s,before:o,after:c}=t;return e="string"===typeof e?e.split("."):e,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((t,e)=>r(a.Fragment,{key:e},"  ","  ".repeat(e+1),t,": ","{\n")),o&&Object(p.a)(o).map(t=>"".concat("  ".repeat(e.length+2)).concat(t,"\n"))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&r(l,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},c&&Object(p.a)(c).map(t=>"".concat("  ".repeat(e.length+2)).concat(t,"\n")),e.map((t,n)=>r(a.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n")),"  }")))}},Btb4:function(t,e,n){"use strict";const a=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;t.exports=(t,e,n)=>{const c=[];return function t(e,n,p){let i;(n=n||{}).indent=n.indent||"\t",p=p||"",i=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=t=>{if(void 0===n.inlineCharacterLimit)return t;const e=t.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return e.length<=n.inlineCharacterLimit?e:t.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),p).replace(new RegExp(i.indent,"g"),p+n.indent)};if(-1!==c.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||a(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";c.push(e);const a="["+i.newLine+e.map((a,s)=>{const o=e.length-1===s?i.newLine:","+i.newLineOrSpace;let c=t(a,n,p+n.indent);return n.transform&&(c=n.transform(e,s,c)),i.indent+c+o}).join("")+i.pad+"]";return c.pop(),r(a)}if(s(e)){let a=Object.keys(e).concat(o(e));if(n.filter&&(a=a.filter(t=>n.filter(e,t))),0===a.length)return"{}";c.push(e);const s="{"+i.newLine+a.map((s,o)=>{const c=a.length-1===o?i.newLine:","+i.newLineOrSpace,r="symbol"===typeof s,l=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||l?s:t(s,n);let d=t(e[s],n,p+n.indent);return n.transform&&(d=n.transform(e,s,d)),i.indent+String(u)+": "+d+c}).join("")+i.pad+"}";return c.pop(),r(s)}return e=String(e).replace(/[\r\n]/g,t=>"\n"===t?"\\n":"\\r"),!1===n.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(t,e,n)}},"Ca+n":function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("q1tI"),s=n.n(a),o=n("S5AU"),c=n.n(o),p=n("iuhU"),i=s.a.createElement,r=["","sm:","md:","lg:","xl:"];function l(t){var{children:e,active:n,onClick:a}=t;return i("button",{type:"button",className:Object(p.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":n,"text-gray-500":!n}),onClick:a},e)}var u=t=>'<div class="'.concat(t,'"></div>');function d(t){var{classNames:e,snippet:n=u,preview:s,previewClassName:o}=t,d=Array.isArray(e[0])?e.length:1,{0:m,1:b}=Object(a.useState)(0);return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(l,{active:0===m,onClick:()=>b(0)},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(l,{active:1===m,onClick:()=>b(1)},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(l,{active:2===m,onClick:()=>b(2)},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(l,{active:3===m,onClick:()=>b(3)},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(l,{active:4===m,onClick:()=>b(4)},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},c()(n(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((t,e)=>"{{CLASSNAMES[".concat(e,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((t,n)=>{if(n%2===1){var a=t.match(/\[([0-9]+)\]/);return(a?e[parseInt(a[1],10)]:e).map((t,e)=>t?i("span",{key:"".concat(n,"-").concat(e),className:m===e?"text-code-yellow":""},0===e?"":" ",t.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(t=>"".concat(r[e]).concat(t)).join(" ")):null).filter(Boolean)}return t})))),i("div",{className:Object(p.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",o,{"p-4":!o})},s(function(t){if(d>1)return e.map(e=>{for(var n=t;n>=0;n--)if(e[n])return e[n].replace(/\(([^)]+)\)/g,"$1")});for(var n=t;n>=0;n--)if(e[n])return e[n].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},GAX2:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=t=>Object.getOwnPropertySymbols(t).filter(e=>Object.prototype.propertyIsEnumerable.call(t,e))},"IBu/":function(t,e,n){"use strict";const a=n("sQdO");t.exports=t=>{const e=a(t);if(0===e)return t;const n=new RegExp(`^[ \\t]{${e}}`,"gm");return t.replace(n,"")}},KM9i:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-position",function(){return n("dyt1")}])},S5AU:function(t,e,n){"use strict";const a=n("IBu/"),s=n("S6im");t.exports=(t,e=0,n)=>s(a(t),e,n)},S6im:function(t,e,n){"use strict";t.exports=(t,e=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!==typeof t)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof t}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===e)return t;const a=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return t.replace(a,n.indent.repeat(e))}},YuTi:function(t,e){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),t.webpackPolyfill=1),t}},Zb5r:function(t,e,n){"use strict";function a(t){return t.reduce((e,n,a)=>0===a?n:a===t.length-1?"".concat(e," and ").concat(n):"".concat(e,", ").concat(n),"")}n.d(e,"a",(function(){return a}))},dyt1:function(t,e,n){"use strict";n.r(e),n.d(e,"Layout",(function(){return v})),n.d(e,"classes",(function(){return k})),n.d(e,"meta",(function(){return y})),n.d(e,"tableOfContents",(function(){return x})),n.d(e,"default",(function(){return N}));var a=n("wx14"),s=n("Ff2n"),o=n("q1tI"),c=n.n(o),p=n("7ljp"),i=n("YFqc"),r=n.n(i),l=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("mvUL"),g=n.n(b),f=n("8C7G"),h=n("wH44"),j=n("Ca+n"),v=(c.a.createElement,d.DocumentationLayout),k={plugin:g()},y={title:"Object Position",description:"Utilities for controlling how a replaced element's content should be positioned within its container.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Object Positioning",slug:"object-positioning"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],O={Layout:v,classes:k,meta:y,tableOfContents:x},w=m.ContentsLayout;function N(t){var{components:e}=t,n=Object(s.a)(t,["components"]);return Object(p.a)(w,Object(a.a)({},O,n,{components:e,mdxType:"MDXLayout"}),Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},".object-{side}")," utilities to specify how a replaced element's content should be positioned within its container."),Object(p.a)(u.a,{preview:'\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-left-top</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-left-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-top</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-right-top</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-right-top object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n  </div>\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-left</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-left object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-center</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-center object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-right</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-right object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n  </div>\n  <div class="flex justify-around">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-left-bottom</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-left-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-bottom</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.object-right-bottom</p>\n      <img class="mx-auto bg-gray-400 w-24 h-24 object-right-bottom object-none" src="https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-left-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-right-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-left bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-center bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-right bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-left-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none object-right-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To position an object only at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing object position utility. For example, adding the class ",Object(p.a)("inlineCode",{parentName:"p"},"md:object-top")," to an element would apply the ",Object(p.a)("inlineCode",{parentName:"p"},"object-top")," utility at medium screen sizes and above."),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(j.a,{classNames:["object-center","object-top","object-right","object-bottom","object-left"],snippet:t=>'\n    <img class="'.concat(t,' ..." src="...">\n  '),preview:t=>Object(p.a)("img",{className:"mx-auto bg-gray-400 w-48 h-48 object-none ".concat(t),src:"https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80"}),mdxType:"ResponsiveCodeSample"}),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"object-positioning",toc:!0},"Object Positioning"),Object(p.a)("p",null,"By default Tailwind provides nine object position utilities. You can change, add, or remove these by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.objectPosition")," section of your Tailwind config."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     objectPosition: {\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       bottom: 'bottom',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       center: 'center',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       left: 'left',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       'left-bottom': 'left bottom',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       'left-top': 'left top',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       right: 'right',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'right-bottom': 'right bottom',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'right-top': 'right top',\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       top: 'top',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'center-bottom': 'center bottom'\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'center-top': 'center top',\n"),Object(p.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(f.a,{plugin:"objectPosition",mdxType:"Variants"}),Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(h.a,{plugin:"objectPosition",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},mvUL:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:t,e:e,theme:n,variants:a,target:o}){if("ie11"===o("objectPosition"))return;t(s.default.fromPairs(s.default.map(n("objectPosition"),(t,n)=>[`.${e(`object-${n}`)}`,{"object-position":t}])),a("objectPosition"))}};var a,s=(a=n("LvDl"))&&a.__esModule?a:{default:a}},"p+I8":function(t,e,n){"use strict";t.exports=function(t){var e=typeof t;return null!==t&&("object"===e||"function"===e)}},pOT7:function(t,e,n){"use strict";n.d(e,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),o=n("iuhU"),c=s.a.createElement;function p(t){var{preview:e,snippet:n,previewClassName:a}=t;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:e}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},sQdO:function(t,e,n){"use strict";t.exports=t=>{const e=t.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((t,e)=>Math.min(t,e.length),1/0):0}},wH44:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),o=n.n(s),c=n("AOjV"),p=n("AI3G"),i=n("Zb5r"),r=o.a.createElement;function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function u(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t){var{plugin:e,name:n}=t,a=Object(p.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,(t,e,n)=>"".concat(e," ").concat(n.toLowerCase())),r(o.a.Fragment,null,r("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(a.map(t=>"<code>".concat(t,"</code>")))}})," ",a.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(c.a,{path:"corePlugins",before:"// ...",add:a.reduce((t,e)=>u(u({},t),{},{[e]:!1}),{})}))}},yLpj:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(a){"object"===typeof window&&(n=window)}t.exports=n}},[["KM9i",0,2,5,1,3,4]]]);