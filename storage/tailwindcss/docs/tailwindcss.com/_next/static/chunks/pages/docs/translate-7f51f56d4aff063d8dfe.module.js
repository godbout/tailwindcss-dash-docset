(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[164],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),r=t("Zb5r"),i=t("AOjV"),o=s.a.createElement;function l(e){var{plugin:a,name:t}=e,n=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var l=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2);return o(s.a.Fragment,null,o("p",null,"By default, ",n.length?"only ".concat(Object(r.a)(n)):"no"," variants are generated for ",t," utilities."),o("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",o("code",null,a)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(r.a)(l)," variants:"),o(i.a,{path:"variants",before:"// ...",remove:{[a]:n},add:{[a]:[...n,...l]}}))}},"Ca+n":function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("q1tI"),s=t.n(n),c=t("S5AU"),r=t.n(c),i=t("iuhU"),o=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var{children:a,active:t,onClick:n}=e;return o("button",{type:"button",className:Object(i.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:n},a)}var u=e=>'<div class="'.concat(e,'"></div>');function m(e){var{classNames:a,snippet:t=u,preview:s,previewClassName:c}=e,m=Array.isArray(a[0])?a.length:1,{0:d,1:f}=Object(n.useState)(0);return o("div",{className:"mt-8"},o("div",{className:"flex justify-center"},o("div",{className:"grid grid-cols-5 mb-2 bg-white"},o(p,{active:0===d,onClick:()=>f(0)},o("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"all")),o(p,{active:1===d,onClick:()=>f(1)},o("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"sm")),o(p,{active:2===d,onClick:()=>f(2)},o("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"md")),o(p,{active:3===d,onClick:()=>f(3)},o("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),o("p",{className:"text-xs"},"lg")),o(p,{active:4===d,onClick:()=>f(4)},o("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},o("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),o("p",{className:"text-xs"},"xl")))),o("div",{className:"overflow-hidden mb-8"},o("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},o("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},o("code",{className:"inline-block p-4"},r()(t(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((e,a)=>"{{CLASSNAMES[".concat(a,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var n=e.match(/\[([0-9]+)\]/);return(n?a[parseInt(n[1],10)]:a).map((e,a)=>e?o("span",{key:"".concat(t,"-").concat(a),className:d===a?"text-code-yellow":""},0===a?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(l[a]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),o("div",{className:Object(i.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",c,{"p-4":!c})},s(function(e){if(m>1)return a.map(a=>{for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(d)))))}},GLRZ:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/translate",function(){return t("b17U")}])},"IBu/":function(e,a,t){"use strict";const n=t("sQdO");e.exports=e=>{const a=n(e);if(0===a)return e;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return e.replace(t,"")}},S5AU:function(e,a,t){"use strict";const n=t("IBu/"),s=t("S6im");e.exports=(e,a=0,t)=>s(n(e),a,t)},S6im:function(e,a,t){"use strict";e.exports=(e,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return e;const n=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,t.indent.repeat(a))}},b17U:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return O})),t.d(a,"classes",(function(){return N})),t.d(a,"meta",(function(){return v})),t.d(a,"tableOfContents",(function(){return x})),t.d(a,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),r=t.n(c),i=t("7ljp"),o=t("YFqc"),l=t.n(o),p=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),f=t("zI9L"),b=t.n(f),g=t("8C7G"),h=t("wH44"),j=t("Ca+n"),O=(r.a.createElement,m.DocumentationLayout),N={plugin:b()},v={title:"Translate",description:"Utilities for translating elements with transform.",featureVersion:"v1.2.0+"},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Translate scale",slug:"translate-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],w={Layout:O,classes:N,meta:v,tableOfContents:x},y=d.ContentsLayout;function k(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(i.a)(y,Object(n.a)({},w,t,{components:a,mdxType:"MDXLayout"}),Object(i.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Translate an element by first enabling transforms with the ",Object(i.a)("inlineCode",{parentName:"p"},"transform")," utility, then specifying the translate direction and distance using the ",Object(i.a)("inlineCode",{parentName:"p"},"translate-x-{amount}")," and ",Object(i.a)("inlineCode",{parentName:"p"},"translate-y-{amount}")," utilities."),Object(i.a)(u.a,{preview:'\n  <img class="h-16 w-16 rounded transform translate-y-6" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  <img class="h-16 w-16 rounded transform -translate-y-6" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  <img class="h-16 w-16 rounded transform translate-y-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform translate-y-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform -translate-y-6 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform translate-y-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"bg-white lg:flex justify-around items-center text-sm p-4 py-12"}),Object(i.a)("p",null,"Note that because Tailwind implements transforms using ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS custom properties"),", ",Object(i.a)("strong",{parentName:"p"},"the transform utilities are not supported in older browsers like IE11"),". If you need transforms for your project and need to support older browsers, ",Object(i.a)(l.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(i.a)("a",null,"add your own utilities"))," or other custom CSS."),Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the translation of an element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing translate utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:translate-x-8")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"translate-x-8")," utility at only medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(j.a,{classNames:["translate-y-6","-translate-y-6","translate-y-2","-translate-y-8","translate-y-0"],snippet:e=>'\n    <img class="transform '.concat(e,'...">\n  '),previewClassName:"flex justify-center items-center px-4 py-12",preview:e=>Object(i.a)("img",{className:"h-16 w-16 rounded transform ".concat(e),src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),mdxType:"ResponsiveCodeSample"}),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"translate-scale",toc:!0},"Translate scale"),Object(i.a)("p",null,"By default Tailwind provides fixed value translate utilities that match our ",Object(i.a)(l.a,{href:"/docs/customizing-spacing",passHref:!0},Object(i.a)("a",null,"spacing scale")),", as well as 50% and 100% variations for translating relative to the element's size."),Object(i.a)("p",null,"You can customize the global spacing scale in the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.spacing")," or ",Object(i.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," sections of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       spacing: {\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '72': '18rem',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '84': '21rem',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '96': '24rem',\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)("p",null,"To customize the translate scale separately, use the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.translate")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       translate: {\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '1/7': '14.2857143%',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '2/7': '28.5714286%',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '3/7': '42.8571429%',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '4/7': '57.1428571%',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '5/7': '71.4285714%',\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '6/7': '85.7142857%',\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)("p",null,"Learn more about customizing the default theme in the ",Object(i.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(i.a)("a",null,"theme customization documentation")),"."),Object(i.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(g.a,{plugin:"translate",mdxType:"Variants"}),Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(h.a,{plugin:"translate",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=w},sQdO:function(e,a,t){"use strict";e.exports=e=>{const a=e.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((e,a)=>Math.min(e,a.length),1/0):0}},zI9L:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({target:e,...a}){"ie11"!==e("translate")?(0,s.default)("translate",[["translate-x",["--transform-translate-x"]],["translate-y",["--transform-translate-y"]]])({target:e,...a}):(0,s.default)("translate",[["translate-x",["transform"],e=>`translateX(${e})`],["translate-y",["transform"],e=>`translateY(${e})`]])({target:e,...a})}};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}}},[["GLRZ",0,2,1,3,4,7]]]);