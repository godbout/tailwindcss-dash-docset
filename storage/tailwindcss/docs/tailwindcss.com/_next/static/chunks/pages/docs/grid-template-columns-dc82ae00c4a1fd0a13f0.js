_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[107],{"+ar0":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({target:e,...a}){"ie11"!==e("gridTemplateColumns")&&(0,s.default)("gridTemplateColumns",[["grid-cols",["gridTemplateColumns"]]])({target:e,...a})}};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("KQm4"),s=t("rePB"),c=t("q1tI"),i=t.n(c),r=t("98BF"),o=t("Zb5r"),l=t("AOjV"),p=i.a.createElement;function u(e){var a=e.plugin,t=e.name,c=r.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!c.includes(e)})).slice(0,2);return p(i.a.Fragment,null,p("p",null,"By default, ",c.length?"only ".concat(Object(o.a)(c)):"no"," variants are generated for ",t," utilities."),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,a)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",c.length>0?"also ":"","generate"," ",Object(o.a)(u)," variants:"),p(l.a,{path:"variants",before:"// ...",remove:Object(s.a)({},a,c),add:Object(s.a)({},a,[].concat(Object(n.a)(c),Object(n.a)(u)))}))}},"Ca+n":function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("q1tI"),s=t.n(n),c=t("S5AU"),i=t.n(c),r=t("iuhU"),o=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var a=e.children,t=e.active,n=e.onClick;return o("button",{type:"button",className:Object(r.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:n},a)}var u=function(e){return'<div class="'.concat(e,'"></div>')};function d(e){var a=e.classNames,t=e.snippet,s=void 0===t?u:t,c=e.preview,d=e.previewClassName,m=Array.isArray(a[0])?a.length:1,g=Object(n.useState)(0),b=g[0],v=g[1];return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(p,{active:0===b,onClick:function(){return v(0)}},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(p,{active:1===b,onClick:function(){return v(1)}},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(p,{active:2===b,onClick:function(){return v(2)}},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(p,{active:3===b,onClick:function(){return v(3)}},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(p,{active:4===b,onClick:function(){return v(4)}},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},i()(s(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((function(e,a){return"{{CLASSNAMES[".concat(a,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(e,t){if(t%2===1){var n=e.match(/\[([0-9]+)\]/);return(n?a[parseInt(n[1],10)]:a).map((function(e,a){return e?o("span",{key:"".concat(t,"-").concat(a),className:b===a?"text-code-yellow":""},0===a?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(e){return"".concat(l[a]).concat(e)})).join(" ")):null})).filter(Boolean)}return e}))))),o("div",{className:Object(r.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",d,{"p-4":!d})},c(function(e){if(m>1)return a.map((function(a){for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(b)))))}},"IBu/":function(e,a,t){"use strict";const n=t("sQdO");e.exports=e=>{const a=n(e);if(0===a)return e;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return e.replace(t,"")}},R38X:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return j})),t.d(a,"classes",(function(){return O})),t.d(a,"meta",(function(){return N})),t.d(a,"tableOfContents",(function(){return y})),t.d(a,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),i=t.n(c),r=t("7ljp"),o=t("YFqc"),l=t.n(o),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),g=t("+ar0"),b=t.n(g),v=t("8C7G"),f=t("wH44"),h=t("Ca+n"),j=(i.a.createElement,d.DocumentationLayout),O={plugin:b.a},N={title:"Grid Template Columns",description:"Utilities for specifying the columns in a grid layout.",featureVersion:"v1.2.0+"},y=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],x={Layout:j,classes:O,meta:N,tableOfContents:y},w=m.ContentsLayout;function k(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(w,Object(n.a)({},x,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-cols-{n}")," utilities to create grids with ",Object(r.a)("em",{parentName:"p"},"n")," equally sized columns."),Object(r.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4">\n    <div class="bg-gray-300 h-12 flex items-center justify-center">1</div>\n    <div class="bg-gray-500 h-12 flex items-center justify-center">2</div>\n    <div class="bg-gray-300 h-12 flex items-center justify-center">3</div>\n    <div class="bg-gray-500 h-12 flex items-center justify-center">4</div>\n    <div class="bg-gray-300 h-12 flex items-center justify-center">5</div>\n    <div class="bg-gray-500 h-12 flex items-center justify-center">6</div>\n    <div class="bg-gray-300 h-12 flex items-center justify-center">7</div>\n    <div class="bg-gray-500 h-12 flex items-center justify-center">8</div>\n    <div class="bg-gray-300 h-12 flex items-center justify-center">9</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 gap-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"bg-white p-8"}),Object(r.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the columns of a grid at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing grid-template-columns utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:grid-cols-6")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-cols-6")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(h.a,{classNames:["grid-cols-1","grid-cols-2","grid-cols-3","grid-cols-4","grid-cols-6"],snippet:function(e){return'\n    <div class="grid '.concat(e,'">\n      \x3c!-- ... --\x3e\n    </div>\n  ')},previewClassName:"p-8",preview:function(e){return Object(r.a)("div",{className:"grid gap-4 ".concat(e)},Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}),Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}),Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}),Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}),Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}),Object(r.a)("div",{className:"bg-gray-300 h-12"}),Object(r.a)("div",{className:"bg-gray-500 h-12"}))},mdxType:"ResponsiveCodeSample"}),Object(r.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"By default Tailwind includes grid-template-column utilities for creating basic grids with up to 12 equal width columns. You change, add, or remove these by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"gridTemplateColumns")," section of your Tailwind theme config."),Object(r.a)("p",null,"You have direct access to the ",Object(r.a)("inlineCode",{parentName:"p"},"grid-template-columns")," CSS property here so you can make your custom column values as generic or as complicated and site-specific as you like."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       gridTemplateColumns: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         // Simple 16 column grid\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '16': 'repeat(16, minmax(0, 1fr))',\n"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"         // Complex site-specific column configuration\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'footer': '200px minmax(900px, 1fr) 100px',\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(v.a,{plugin:"gridTemplateColumns",name:"grid-template-columns",mdxType:"Variants"}),Object(r.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(f.a,{plugin:"gridTemplateColumns",name:"grid-template-columns",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=x},S5AU:function(e,a,t){"use strict";const n=t("IBu/"),s=t("S6im");e.exports=(e,a=0,t)=>s(n(e),a,t)},S6im:function(e,a,t){"use strict";e.exports=(e,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return e;const n=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,t.indent.repeat(a))}},o6pH:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/grid-template-columns",function(){return t("R38X")}])},sQdO:function(e,a,t){"use strict";e.exports=e=>{const a=e.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((e,a)=>Math.min(e,a.length),1/0):0}}},[["o6pH",0,2,1,3,4,7]]]);