(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"5xSE":function(n,e,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,e,t){"use strict";t.d(e,"a",(function(){return p}));var a=t("q1tI"),s=t.n(a),c=t("98BF"),i=t("Zb5r"),r=t("AOjV"),o=s.a.createElement;function p(n){var{plugin:e,name:t}=n,a=c.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(n,e,t)=>"".concat(e," ").concat(t.toLowerCase()));var p=["responsive","hover","focus","active","group-hover"].filter(n=>!a.includes(n)).slice(0,2);return o(s.a.Fragment,null,o("p",null,"By default, ",a.length?"only ".concat(Object(i.a)(a)):"no"," variants are generated for ",t," utilities."),o("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",o("code",null,e)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(i.a)(p)," variants:"),o(r.a,{path:"variants",before:"// ...",remove:{[e]:a},add:{[e]:[...a,...p]}}))}},AOjV:function(n,e,t){"use strict";t.d(e,"a",(function(){return u}));var a=t("q1tI"),s=t.n(a),c=t("Btb4"),i=t.n(c),r=t("AI3G"),o=t("iuhU"),p=s.a.createElement;function l(n){var{edits:e,indent:t="",type:s="inserted"}=n;return p("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(e).map((n,c)=>p(a.Fragment,{key:c},p("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,function(n){return/^[a-z_$][a-z0-9_$]*$/i.test(n)?n:"'".concat(n,"'")}(n),":"," ",i()(e[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(n,e)=>"[".concat(e.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((n,e)=>"".concat(0===e?"":"+ "+t).concat(n)).join("\n"),",\n")))}function u(n){var{path:e,add:t,remove:s,before:c,after:i}=n;return e="string"===typeof e?e.split("."):e,p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((n,e)=>p(a.Fragment,{key:e},"  ","  ".repeat(e+1),n,": ","{\n")),c&&Object(r.a)(c).map(n=>"".concat("  ".repeat(e.length+2)).concat(n,"\n"))),s&&p(l,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&p(l,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},i&&Object(r.a)(i).map(n=>"".concat("  ".repeat(e.length+2)).concat(n,"\n")),e.map((n,t)=>p(a.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n")),"  }")))}},Btb4:function(n,e,t){"use strict";const a=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;n.exports=(n,e,t)=>{const i=[];return function n(e,t,r){let o;(t=t||{}).indent=t.indent||"\t",r=r||"",o=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=n=>{if(void 0===t.inlineCharacterLimit)return n;const e=n.replace(new RegExp(o.newLine,"g"),"").replace(new RegExp(o.newLineOrSpace,"g")," ").replace(new RegExp(o.pad+"|"+o.indent,"g"),"");return e.length<=t.inlineCharacterLimit?e:n.replace(new RegExp(o.newLine+"|"+o.newLineOrSpace,"g"),"\n").replace(new RegExp(o.pad,"g"),r).replace(new RegExp(o.indent,"g"),r+t.indent)};if(-1!==i.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||a(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";i.push(e);const a="["+o.newLine+e.map((a,s)=>{const c=e.length-1===s?o.newLine:","+o.newLineOrSpace;let i=n(a,t,r+t.indent);return t.transform&&(i=t.transform(e,s,i)),o.indent+i+c}).join("")+o.pad+"]";return i.pop(),p(a)}if(s(e)){let a=Object.keys(e).concat(c(e));if(t.filter&&(a=a.filter(n=>t.filter(e,n))),0===a.length)return"{}";i.push(e);const s="{"+o.newLine+a.map((s,c)=>{const i=a.length-1===c?o.newLine:","+o.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:n(s,t);let d=n(e[s],t,r+t.indent);return t.transform&&(d=t.transform(e,s,d)),o.indent+String(u)+": "+d+i}).join("")+o.pad+"}";return i.pop(),p(s)}return e=String(e).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(n,e,t)}},"Ca+n":function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("q1tI"),s=t.n(a),c=t("S5AU"),i=t.n(c),r=t("iuhU"),o=s.a.createElement,p=["","sm:","md:","lg:","xl:"];function l(n){var{children:e,active:t,onClick:a}=n;return o("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:a},e)}var u=n=>'<div class="'.concat(n,'"></div>');function d(n){var{classNames:e,snippet:t=u,preview:s,previewClassName:c}=n,d=Array.isArray(e[0])?e.length:1,{0:g,1:f}=Object(a.useState)(0);return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(l,{active:0===g,onClick:()=>f(0)},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(l,{active:1===g,onClick:()=>f(1)},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(l,{active:2===g,onClick:()=>f(2)},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(l,{active:3===g,onClick:()=>f(3)},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(l,{active:4===g,onClick:()=>f(4)},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},i()(t(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((n,e)=>"{{CLASSNAMES[".concat(e,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((n,t)=>{if(t%2===1){var a=n.match(/\[([0-9]+)\]/);return(a?e[parseInt(a[1],10)]:e).map((n,e)=>n?o("span",{key:"".concat(t,"-").concat(e),className:g===e?"text-code-yellow":""},0===e?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(n=>"".concat(p[e]).concat(n)).join(" ")):null).filter(Boolean)}return n})))),o("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",c,{"p-4":!c})},s(function(n){if(d>1)return e.map(e=>{for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=n;t>=0;t--)if(e[t])return e[t].replace(/\(([^)]+)\)/g,"$1")}(g)))))}},GAX2:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=n=>Object.getOwnPropertySymbols(n).filter(e=>Object.prototype.propertyIsEnumerable.call(n,e))},"IBu/":function(n,e,t){"use strict";const a=t("sQdO");n.exports=n=>{const e=a(n);if(0===e)return n;const t=new RegExp(`^[ \\t]{${e}}`,"gm");return n.replace(t,"")}},RdsV:function(n,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return v})),t.d(e,"classes",(function(){return x})),t.d(e,"meta",(function(){return y})),t.d(e,"tableOfContents",(function(){return O})),t.d(e,"default",(function(){return N}));var a=t("wx14"),s=t("Ff2n"),c=t("q1tI"),i=t.n(c),r=t("7ljp"),o=t("YFqc"),p=t.n(o),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),g=t("I6Nb"),f=t("Wne5"),m=t.n(f),h=t("8C7G"),k=t("wH44"),b=t("Ca+n"),v=(i.a.createElement,d.DocumentationLayout),x={plugin:m()},y={title:"Flex Shrink",description:"Utilities for controlling how flex items shrink.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},O=[{title:"Shrink",slug:"shrink",children:[]},{title:"Don't shrink",slug:"don-t-shrink",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Shrink Values",slug:"shrink-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:v,classes:x,meta:y,tableOfContents:O},j=g.ContentsLayout;function N(n){var{components:e}=n,t=Object(s.a)(n,["components"]);return Object(r.a)(j,Object(a.a)({},w,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)(l.a,{level:2,id:"shrink",toc:!0},"Shrink"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".flex-shrink")," to allow a flex item to shrink if needed:"),Object(r.a)(u.a,{preview:'\n  <div class="flex bg-gray-200">\n    <div class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Longer content that cannot flex\n    </div>\n    <div class="flex-shrink text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">\n      Item that will shrink even if it causes the content to wrap\n    </div>\n    <div class="flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Longer content that cannot flex\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Longer content that cannot flex\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-shrink text-gray-800 text-center bg-gray-500 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that will shrink even if it causes the content to wrap\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-none text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Longer content that cannot flex\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"don-t-shrink",toc:!0},"Don't shrink"),Object(r.a)("p",null,"Use ",Object(r.a)("inlineCode",{parentName:"p"},".flex-shrink-0")," to prevent a flex item from shrinking:"),Object(r.a)(u.a,{preview:'\n  <div class="flex bg-gray-200">\n    <div class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Item that can shrink if needed\n    </div>\n    <div class="flex-shrink-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2">\n      Item that cannot shrink below its initial size\n    </div>\n    <div class="flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">\n      Item that can shrink if needed\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex bg-gray-200<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that can shrink if needed\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-shrink-0 text-gray-800 text-center bg-gray-500 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that cannot shrink below its initial size\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Item that can shrink if needed\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control how a flex item shrinks at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:flex-shrink-0")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"flex-shrink-0")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(b.a,{classNames:["flex-shrink","flex-shrink-0","flex-shrink","flex-shrink-0","flex-shrink"],snippet:n=>'\n    <div class="flex ...">\n      \x3c!-- ... --\x3e\n      <div class="'.concat(n,' ...">\n        Responsive flex item\n      </div>\n      \x3c!-- ... --\x3e\n    </div>\n  '),preview:n=>Object(r.a)("div",{className:"flex bg-gray-200"},Object(r.a)("div",{className:"flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"Item that can grow or shrink if needed"),Object(r.a)("div",{className:"text-gray-800 text-center bg-gray-500 px-4 py-2 m-2 ".concat(n)},"Responsive flex item"),Object(r.a)("div",{className:"flex-shrink text-gray-700 text-center bg-gray-400 px-4 py-2 m-2"},"Item that can grow or shrink if needed")),mdxType:"ResponsiveCodeSample"}),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"shrink-values",toc:!0},"Shrink Values"),Object(r.a)("p",null,"By default Tailwind provides two ",Object(r.a)("inlineCode",{parentName:"p"},"flex-shrink")," utilities. You change, add, or remove these by editing the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.flexShrink")," section of your Tailwind config."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(a.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     flexShrink: {\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': 0,\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       default: 1,\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       default: 2,\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '1': 1,\n"),Object(r.a)("span",Object(a.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(a.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(h.a,{plugin:"flexShrink",mdxType:"Variants"}),Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(k.a,{plugin:"flexShrink",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=w},S5AU:function(n,e,t){"use strict";const a=t("IBu/"),s=t("S6im");n.exports=(n,e=0,t)=>s(a(n),e,t)},S6im:function(n,e,t){"use strict";n.exports=(n,e=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===e)return n;const a=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(a,t.indent.repeat(e))}},Wne5:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:n,e:e,theme:t,variants:a}){n(s.default.fromPairs(s.default.map(t("flexShrink"),(n,t)=>{return[`.${e("default"===t?"flex-shrink":`flex-shrink-${t}`)}`,{"flex-shrink":n}]})),a("flexShrink"))}};var a,s=(a=t("LvDl"))&&a.__esModule?a:{default:a}},YuTi:function(n,e){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Zb5r:function(n,e,t){"use strict";function a(n){return n.reduce((e,t,a)=>0===a?t:a===n.length-1?"".concat(e," and ").concat(t):"".concat(e,", ").concat(t),"")}t.d(e,"a",(function(){return a}))},fFr5:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-shrink",function(){return t("RdsV")}])},"p+I8":function(n,e,t){"use strict";n.exports=function(n){var e=typeof n;return null!==n&&("object"===e||"function"===e)}},pOT7:function(n,e,t){"use strict";t.d(e,"a",(function(){return r}));var a=t("q1tI"),s=t.n(a),c=t("iuhU"),i=s.a.createElement;function r(n){var{preview:e,snippet:t,previewClassName:a}=n;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(c.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",a,{"p-4":!a}),dangerouslySetInnerHTML:{__html:e}}),i("div",{className:"rounded-b-lg bg-gray-800"},i("pre",{className:"scrollbar-none m-0 p-0 language-html"},i("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(n,e,t){"use strict";n.exports=n=>{const e=n.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((n,e)=>Math.min(n,e.length),1/0):0}},wH44:function(n,e,t){"use strict";t.d(e,"a",(function(){return d}));var a=t("rePB"),s=t("q1tI"),c=t.n(s),i=t("AOjV"),r=t("AI3G"),o=t("Zb5r"),p=c.a.createElement;function l(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function u(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?l(Object(t),!0).forEach((function(e){Object(a.a)(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function d(n){var{plugin:e,name:t}=n,a=Object(r.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,(n,e,t)=>"".concat(e," ").concat(t.toLowerCase())),p(c.a.Fragment,null,p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(a.map(n=>"<code>".concat(n,"</code>")))}})," ",a.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(i.a,{path:"corePlugins",before:"// ...",add:a.reduce((n,e)=>u(u({},n),{},{[e]:!1}),{})}))}},yLpj:function(n,e){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(a){"object"===typeof window&&(t=window)}n.exports=t}},[["fFr5",0,2,5,1,3,4]]]);