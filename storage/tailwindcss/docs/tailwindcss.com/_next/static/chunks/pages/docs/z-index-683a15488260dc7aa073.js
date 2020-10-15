_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[180],{"7iEl":function(a,e,n){"use strict";n.r(e),n.d(e,"Layout",(function(){return k})),n.d(e,"classes",(function(){return N})),n.d(e,"meta",(function(){return v})),n.d(e,"tableOfContents",(function(){return x})),n.d(e,"default",(function(){return y}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),i=n("7ljp"),l=n("YFqc"),o=n.n(l),r=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("f2nW"),g=n.n(b),j=n("8C7G"),O=n("wH44"),f=n("Ca+n"),k=(p.a.createElement,d.DocumentationLayout),N={plugin:g.a},v={title:"Z-Index",description:"Utilities for controlling the stack order of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},x=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Z-Index scale",slug:"z-index-scale"},{title:"Negative values",slug:"negative-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],z={Layout:k,classes:N,meta:v,tableOfContents:x},h=m.ContentsLayout;function y(a){var e=a.components,n=Object(s.a)(a,["components"]);return Object(i.a)(h,Object(t.a)({},z,n,{components:e,mdxType:"MDXLayout"}),Object(i.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Control the stack order (or three-dimensional positioning) of an element in Tailwind, regardless of order it has been displayed, using the ",Object(i.a)("inlineCode",{parentName:"p"},".z-{index}")," utilities."),Object(i.a)(u.a,{preview:'\n  <div class="relative h-32 text-center">\n    <div class="z-40 absolute w-24 h-24 ml-0 mt-0 bg-gray-400 flex justify-center items-center">z-40</div>\n    <div class="z-30 absolute w-24 h-24 ml-2 mt-2 bg-gray-500 flex justify-center items-center">z-30</div>\n    <div class="z-20 absolute w-24 h-24 ml-4 mt-4 bg-gray-600 flex justify-center items-center">z-20</div>\n    <div class="z-10 absolute w-24 h-24 ml-6 mt-6 bg-gray-700 flex justify-center items-center">z-10</div>\n    <div class="z-0 absolute w-24 h-24 ml-8 mt-8 bg-gray-800 flex justify-center items-center">z-0</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>z-40 ml-0 mt-0 bg-gray-400<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>z-40<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>z-30 ml-2 mt-2 bg-gray-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>z-30<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>z-20 ml-4 mt-4 bg-gray-600<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>z-20<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>z-10 ml-6 mt-6 bg-gray-700<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>z-10<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>z-0 ml-8 mt-8 bg-gray-800<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>z-0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(i.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the z-index of an element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing z-index utility. For example, use ",Object(i.a)("inlineCode",{parentName:"p"},"md:z-50")," to apply the ",Object(i.a)("inlineCode",{parentName:"p"},"z-50")," utility at only medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(o.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(f.a,{classNames:["z-0","z-10","z-20","z-30","z-40"],snippet:function(a){return'\n    <div class="'.concat(a,' bg-yellow-400">yellow</div>\n    <div class="z-40 ml-4 mt-0 bg-gray-400">z-40</div>\n    <div class="z-30 ml-6 mt-2 bg-gray-500">z-30</div>\n    <div class="z-20 ml-8 mt-4 bg-gray-600">z-20</div>\n    <div class="z-10 ml-10 mt-6 bg-gray-700">z-10</div>\n    <div class="z-0 ml-12 mt-8 bg-gray-800">z-0</div>\n  ')},preview:function(a){return Object(i.a)("div",{className:"relative w-full h-32 text-center"},Object(i.a)("div",{className:"".concat(a," absolute w-full h-12 mt-12 bg-yellow-400 flex justify-center items-center")},"yellow"),Object(i.a)("div",{className:"z-40 absolute w-24 h-24 ml-4 mt-0 bg-gray-400 flex justify-center items-center"},"z-40"),Object(i.a)("div",{className:"z-30 absolute w-24 h-24 ml-6 mt-2 bg-gray-500 flex justify-center items-center"},"z-30"),Object(i.a)("div",{className:"z-20 absolute w-24 h-24 ml-8 mt-4 bg-gray-600 flex justify-center items-center"},"z-20"),Object(i.a)("div",{className:"z-10 absolute w-24 h-24 ml-10 mt-6 bg-gray-700 flex justify-center items-center"},"z-10"),Object(i.a)("div",{className:"z-0 absolute w-24 h-24 ml-12 mt-8 bg-gray-800 flex justify-center items-center"},"z-0"))},mdxType:"ResponsiveCodeSample"}),Object(i.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(r.a,{level:3,id:"z-index-scale",toc:!0},"Z-Index scale"),Object(i.a)("p",null,"By default Tailwind provides six numeric ",Object(i.a)("inlineCode",{parentName:"p"},"z-index")," utilities and an ",Object(i.a)("inlineCode",{parentName:"p"},"auto")," utility. You change, add, or remove these by editing the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.zIndex")," section of your Tailwind config."),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     zIndex: {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       '0': 0,\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '10': 10,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '20': 20,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '30': 30,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '40': 40,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       '50': 50,\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '25': 25,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '50': 50,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '75': 75,\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       '100': 100,\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'auto': 'auto',\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)(r.a,{level:3,id:"negative-values",toc:!0},"Negative values"),Object(i.a)("p",null,"If you'd like to add any negative z-index classes that take the same form as Tailwind's ",Object(i.a)(o.a,{href:"/docs/margin#negative-margins",passHref:!0},Object(i.a)("a",null,"negative margin"))," classes, prefix the keys in your config file with a dash:"),Object(i.a)("pre",{className:"language-diff"},Object(i.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       zIndex: {\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         '-10': '-10',\n"),Object(i.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(i.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(i.a)("p",null,"Tailwind is smart enough to generate classes like ",Object(i.a)("inlineCode",{parentName:"p"},"-z-10")," when it sees the leading dash, not ",Object(i.a)("inlineCode",{parentName:"p"},"z--10")," like you might expect."),Object(i.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(i.a)(j.a,{plugin:"zIndex",name:"z-index",mdxType:"Variants"}),Object(i.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(i.a)(O.a,{plugin:"zIndex",name:"z-index",mdxType:"Disabling"}))}y.isMDXComponent=!0,y.layoutProps=z},ZYNp:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/z-index",function(){return n("7iEl")}])},f2nW:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,e:e,theme:n,variants:c}){a(t.default.fromPairs(t.default.map(n("zIndex"),(a,n)=>[`.${e((0,s.default)("z",n))}`,{"z-index":a}])),c("zIndex"))}};var t=c(n("LvDl")),s=c(n("6HzA"));function c(a){return a&&a.__esModule?a:{default:a}}}},[["ZYNp",0,2,5,1,3,4,10]]]);