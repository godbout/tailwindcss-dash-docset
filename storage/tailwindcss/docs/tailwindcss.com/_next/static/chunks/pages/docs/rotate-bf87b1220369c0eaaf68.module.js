(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[147],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),r=t("Zb5r"),c=t("AOjV"),i=s.a.createElement;function l(e){var{plugin:a,name:t}=e,n=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var l=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2);return i(s.a.Fragment,null,i("p",null,"By default, ",n.length?"only ".concat(Object(r.a)(n)):"no"," variants are generated for ",t," utilities."),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,a)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(r.a)(l)," variants:"),i(c.a,{path:"variants",before:"// ...",remove:{[a]:n},add:{[a]:[...n,...l]}}))}},"96RL":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/rotate",function(){return t("H91C")}])},"Ca+n":function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("q1tI"),s=t.n(n),o=t("S5AU"),r=t.n(o),c=t("iuhU"),i=s.a.createElement,l=["","sm:","md:","lg:","xl:"];function p(e){var{children:a,active:t,onClick:n}=e;return i("button",{type:"button",className:Object(c.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:n},a)}var u=e=>'<div class="'.concat(e,'"></div>');function d(e){var{classNames:a,snippet:t=u,preview:s,previewClassName:o}=e,d=Array.isArray(a[0])?a.length:1,{0:m,1:f}=Object(n.useState)(0);return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(p,{active:0===m,onClick:()=>f(0)},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(p,{active:1===m,onClick:()=>f(1)},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(p,{active:2===m,onClick:()=>f(2)},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(p,{active:3===m,onClick:()=>f(3)},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(p,{active:4===m,onClick:()=>f(4)},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},r()(t(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((e,a)=>"{{CLASSNAMES[".concat(a,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((e,t)=>{if(t%2===1){var n=e.match(/\[([0-9]+)\]/);return(n?a[parseInt(n[1],10)]:a).map((e,a)=>e?i("span",{key:"".concat(t,"-").concat(a),className:m===a?"text-code-yellow":""},0===a?"":" ",e.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(e=>"".concat(l[a]).concat(e)).join(" ")):null).filter(Boolean)}return e})))),i("div",{className:Object(c.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",o,{"p-4":!o})},s(function(e){if(d>1)return a.map(a=>{for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=e;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(m)))))}},H91C:function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return j})),t.d(a,"classes",(function(){return O})),t.d(a,"meta",(function(){return N})),t.d(a,"tableOfContents",(function(){return w})),t.d(a,"default",(function(){return y}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),r=t.n(o),c=t("7ljp"),i=t("YFqc"),l=t.n(i),p=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),f=t("ZN42"),g=t.n(f),b=t("8C7G"),h=t("wH44"),v=t("Ca+n"),j=(r.a.createElement,d.DocumentationLayout),O={plugin:g()},N={title:"Rotate",description:"Utilities for rotating elements with transform.",featureVersion:"v1.2.0+"},w=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Rotate scale",slug:"rotate-scale"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],x={Layout:j,classes:O,meta:N,tableOfContents:w},k=m.ContentsLayout;function y(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(c.a)(k,Object(n.a)({},x,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)(p.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Rotate an element by first enabling transforms with the ",Object(c.a)("inlineCode",{parentName:"p"},"transform")," utility, then specifying the rotation angle using the ",Object(c.a)("inlineCode",{parentName:"p"},"rotate-{angle}")," utilities."),Object(c.a)(u.a,{preview:'\n  <img class="h-16 w-16 rounded transform rotate-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  <img class="h-16 w-16 rounded transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  <img class="h-16 w-16 rounded transform rotate-90" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n  <img class="h-16 w-16 rounded transform rotate-180" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform rotate-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform rotate-90 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform rotate-180 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:"bg-white lg:flex justify-around items-center text-sm p-4 py-12"}),Object(c.a)("p",null,"Note that because Tailwind implements transforms using ",Object(c.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS custom properties"),", ",Object(c.a)("strong",{parentName:"p"},"the transform utilities are not supported in older browsers like IE11"),". If you need transforms for your project and need to support older browsers, ",Object(c.a)(l.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(c.a)("a",null,"add your own utilities"))," or other custom CSS."),Object(c.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the rotation of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing rotate utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:rotate-90")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"rotate-90")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(v.a,{classNames:["rotate-0","rotate-45","rotate-90","rotate-180","-rotate-90"],snippet:e=>'\n    <img class="transform '.concat(e,'...">\n  '),previewClassName:"flex justify-center items-center px-4 py-12",preview:e=>Object(c.a)("img",{className:"h-16 w-16 rounded transform ".concat(e),src:"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"}),mdxType:"ResponsiveCodeSample"}),Object(c.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(p.a,{level:3,id:"rotate-scale",toc:!0},"Rotate scale"),Object(c.a)("p",null,"By default Tailwind provides seven general purpose rotate utilities. You change, add, or remove these by editing the ",Object(c.a)("inlineCode",{parentName:"p"},"theme.rotate")," section of your Tailwind config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     rotate: {\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '-180': '-180deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '-90': '-90deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '-45': '-45deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': '0',\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '45': '45deg',\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '90': '90deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '135': '135deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '180': '180deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '270': '270deg',\n"),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(p.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(b.a,{plugin:"rotate",mdxType:"Variants"}),Object(c.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(h.a,{plugin:"rotate",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=x},"IBu/":function(e,a,t){"use strict";const n=t("sQdO");e.exports=e=>{const a=n(e);if(0===a)return e;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return e.replace(t,"")}},S5AU:function(e,a,t){"use strict";const n=t("IBu/"),s=t("S6im");e.exports=(e,a=0,t)=>s(n(e),a,t)},S6im:function(e,a,t){"use strict";e.exports=(e,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof e)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof e}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return e;const n=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return e.replace(n,t.indent.repeat(a))}},ZN42:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({target:e,...a}){"ie11"!==e("rotate")?(0,s.default)("rotate",[["rotate",["--transform-rotate"]]])({target:e,...a}):(0,s.default)("rotate",[["rotate",["transform"],e=>`rotate(${e})`]])({target:e,...a})}};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return c}));var n=t("q1tI"),s=t.n(n),o=t("iuhU"),r=s.a.createElement;function c(e){var{preview:a,snippet:t,previewClassName:n}=e;return r("div",{className:"relative overflow-hidden mb-8"},r("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",n,{"p-4":!n}),dangerouslySetInnerHTML:{__html:a}}),r("div",{className:"rounded-b-lg bg-gray-800"},r("pre",{className:"scrollbar-none m-0 p-0 language-html"},r("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(e,a,t){"use strict";e.exports=e=>{const a=e.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((e,a)=>Math.min(e,a.length),1/0):0}}},[["96RL",0,2,1,3,4,7]]]);