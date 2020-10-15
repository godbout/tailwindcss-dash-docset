_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[162],{"6xmZ":function(a,n,s){"use strict";s.r(n),s.d(n,"Layout",(function(){return f})),s.d(n,"classes",(function(){return j})),s.d(n,"meta",(function(){return O})),s.d(n,"tableOfContents",(function(){return y})),s.d(n,"default",(function(){return w}));var t=s("wx14"),e=s("Ff2n"),p=s("q1tI"),o=s.n(p),c=s("7ljp"),l=s("YFqc"),i=s.n(l),u=s("tc9R"),r=s("pOT7"),k=s("vRWG"),g=s("I6Nb"),d=s("lbhK"),b=s.n(d),m=s("8C7G"),v=s("wH44"),h=s("Ca+n"),f=(o.a.createElement,k.DocumentationLayout),j={plugin:b.a},O={title:"Top / Right / Bottom / Left",description:"Utilities for controlling the placement of positioned elements."},y=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Top / Right / Bottom / Left scale",slug:"top-right-bottom-left-scale"},{title:"Negative values",slug:"negative-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],x={Layout:f,classes:j,meta:O,tableOfContents:y},N=g.ContentsLayout;function w(a){var n=a.components,s=Object(e.a)(a,["components"]);return Object(c.a)(N,Object(t.a)({},x,s,{components:n,mdxType:"MDXLayout"}),Object(c.a)(u.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".{top|right|bottom|left|inset}-0")," utilities to anchor absolutely positioned elements against any of the edges of the nearest positioned parent."),Object(c.a)("p",null,"Combined with Tailwind's padding and margin utilities, you'll probably find that these are all you need to precisely control absolutely positioned elements."),Object(c.a)(r.a,{preview:'\n  <div class="flex justify-around mb-8">\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.inset-x-0.top-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute inset-x-0 top-0 h-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.inset-y-0.right-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute inset-y-0 right-0 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.inset-x-0.bottom-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute inset-x-0 bottom-0 h-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.inset-y-0.left-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute inset-y-0 left-0 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.inset-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute inset-0 bg-gray-700"></div>\n      </div>\n    </div>\n  </div>\n  <div class="flex justify-around">\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.left-0.top-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute left-0 top-0 h-8 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.top-0.right-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute top-0 right-0 h-8 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.right-0.bottom-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute right-0 bottom-0 h-8 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div>\n      <p class="text-center text-sm text-gray-600 mb-1">.bottom-0.left-0</p>\n      <div class="relative h-24 w-24 bg-gray-400">\n        <div class="absolute bottom-0 left-0 h-8 w-8 bg-gray-700"></div>\n      </div>\n    </div>\n    <div class="relative h-24 w-24 opacity-0"></div>\n  </div>\n',snippet:'<span class="token comment">&lt;!-- Span top edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute inset-x-0 top-0 h-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span right edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute inset-y-0 right-0 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span bottom edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute inset-x-0 bottom-0 h-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Span left edge --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute inset-y-0 left-0 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Fill entire parent --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute inset-0 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to top left corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute left-0 top-0 h-8 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to top right corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute top-0 right-0 h-8 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to bottom right corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute bottom-0 right-0 h-8 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token comment">&lt;!-- Pin to bottom left corner --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>relative h-24 w-24 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute bottom-0 left-0 h-8 w-8 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To position an element only at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing positioning utility. For example, adding the class ",Object(c.a)("inlineCode",{parentName:"p"},"md:inset-y-0")," to an element would apply the ",Object(c.a)("inlineCode",{parentName:"p"},"inset-y-0")," utility at medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(h.a,{classNames:["absolute inset-0","bottom-0 left-0","top-0 inset-x-0","right-0 inset-y-0","bottom-0 inset-x-0"],snippet:function(a){return'\n    <div class="relative h-32 bg-gray-400 p-4">\n      <div class="'.concat(a,'"></div>\n    </div>\n  ')},preview:function(a){return Object(c.a)("div",{className:"relative h-32 bg-gray-400 p-4"},Object(c.a)("div",{className:"absolute bg-gray-800 p-4 text-gray-500 ".concat(a)},"Responsive element"))},mdxType:"ResponsiveCodeSample"}),Object(c.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(u.a,{level:3,id:"top-right-bottom-left-scale",toc:!0},"Top / Right / Bottom / Left scale"),Object(c.a)("p",null,"By default Tailwind only provides ",Object(c.a)("inlineCode",{parentName:"p"},"0")," and ",Object(c.a)("inlineCode",{parentName:"p"},"auto")," top/right/bottom/left/inset utilities. You can change, add, or remove these by editing the ",Object(c.a)("inlineCode",{parentName:"p"},"theme.inset")," section of your ",Object(c.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     inset: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': 0,\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       auto: 'auto',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '1/2': '50%',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)(u.a,{level:3,id:"negative-values",toc:!0},"Negative values"),Object(c.a)("p",null,"If you'd like to add any negative top/right/bottom/left classes that take the same form as Tailwind's ",Object(c.a)(i.a,{href:"/docs/margin#negative-margins",passHref:!0},Object(c.a)("a",null,"negative margin"))," classes, prefix the keys in your config file with a dash:"),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       inset: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '-16': '-4rem',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Tailwind is smart enough to generate classes like ",Object(c.a)("inlineCode",{parentName:"p"},"-top-16")," when it sees the leading dash, not ",Object(c.a)("inlineCode",{parentName:"p"},"top--16")," like you might expect."),Object(c.a)(u.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(m.a,{plugin:"inset",name:"top, right, bottom, left, and inset",mdxType:"Variants"}),Object(c.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(v.a,{plugin:"inset",name:"top, right, bottom, left, and inset",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=x},"VxD/":function(a,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/top-right-bottom-left",function(){return s("6xmZ")}])},lbhK:function(a,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,e:n,theme:s,variants:p}){const o=[(a,s)=>({[`.${n((0,e.default)("inset",s))}`]:{top:`${a}`,right:`${a}`,bottom:`${a}`,left:`${a}`}}),(a,s)=>({[`.${n((0,e.default)("inset-y",s))}`]:{top:`${a}`,bottom:`${a}`},[`.${n((0,e.default)("inset-x",s))}`]:{right:`${a}`,left:`${a}`}}),(a,s)=>({[`.${n((0,e.default)("top",s))}`]:{top:`${a}`},[`.${n((0,e.default)("right",s))}`]:{right:`${a}`},[`.${n((0,e.default)("bottom",s))}`]:{bottom:`${a}`},[`.${n((0,e.default)("left",s))}`]:{left:`${a}`}})];a(t.default.flatMap(o,a=>t.default.flatMap(s("inset"),a)),p("inset"))}};var t=p(s("LvDl")),e=p(s("6HzA"));function p(a){return a&&a.__esModule?a:{default:a}}}},[["VxD/",0,2,5,1,3,4,10]]]);