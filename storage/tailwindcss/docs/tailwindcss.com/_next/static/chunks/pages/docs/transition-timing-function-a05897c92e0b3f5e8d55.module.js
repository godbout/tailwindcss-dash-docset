(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[163],{"8C7G":function(n,a,e){"use strict";e.d(a,"a",(function(){return u}));var t=e("q1tI"),s=e.n(t),i=e("98BF"),o=e("Zb5r"),c=e("AOjV"),p=s.a.createElement;function u(n){var{plugin:a,name:e}=n,t=i.defaultConfig.variants[a]||["responsive"];e=e||a.replace(/([a-z])([A-Z])/g,(n,a,e)=>"".concat(a," ").concat(e.toLowerCase()));var u=["responsive","hover","focus","active","group-hover"].filter(n=>!t.includes(n)).slice(0,2);return p(s.a.Fragment,null,p("p",null,"By default, ",t.length?"only ".concat(Object(o.a)(t)):"no"," variants are generated for ",e," utilities."),p("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",p("code",null,a)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(u)," variants:"),p(c.a,{path:"variants",before:"// ...",remove:{[a]:t},add:{[a]:[...t,...u]}}))}},QksO:function(n,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]])};var t,s=(t=e("y2+P"))&&t.__esModule?t:{default:t}},uKbb:function(n,a,e){"use strict";e.r(a),e.d(a,"Layout",(function(){return j})),e.d(a,"classes",(function(){return v})),e.d(a,"meta",(function(){return k})),e.d(a,"tableOfContents",(function(){return h})),e.d(a,"default",(function(){return x}));var t=e("wx14"),s=e("Ff2n"),i=e("q1tI"),o=e.n(i),c=e("7ljp"),p=e("YFqc"),u=e.n(p),l=e("tc9R"),r=e("pOT7"),d=e("vRWG"),m=e("I6Nb"),b=e("QksO"),g=e.n(b),f=e("8C7G"),O=e("wH44"),j=(o.a.createElement,d.DocumentationLayout),v={plugin:g()},k={title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions.",featureVersion:"v1.2.0+"},h=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Timing values",slug:"timing-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],N={Layout:j,classes:v,meta:k,tableOfContents:h},y=m.ContentsLayout;function x(n){var{components:a}=n,e=Object(s.a)(n,["components"]);return Object(c.a)(y,Object(t.a)({},N,e,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-{timing}")," utilities to control an element's easing curve."),Object(c.a)(r.a,{preview:'\n  <button class="transition duration-700 ease-in transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-700 ease-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n  <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-blue-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-in duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-out duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition ease-in-out duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"bg-white flex justify-around items-center p-4 py-12"}),Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-timing-function at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-timing-function utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-in-out")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(u.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(c.a)("p",null,"By default Tailwind provides four general purpose transition-timing-function utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," section of your Tailwind theme config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction: {\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(u.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(f.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(O.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=N},yHg6:function(n,a,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return e("uKbb")}])}},[["yHg6",0,2,1,3,4,7]]]);