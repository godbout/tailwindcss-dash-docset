(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[166],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),o=n("98BF"),i=n("Zb5r"),c=n("AOjV"),p=s.a.createElement;function r(a){var{plugin:e,name:n}=a,t=o.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),r="By default, ".concat(t.length?"only ".concat(Object(i.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:r}}),p("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",p("code",null,e)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(i.a)(s)," variants:"),p(c.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},QksO:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]],{filterDefault:!0})};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return r}));var t=n("q1tI"),s=n.n(t),o=n("iuhU"),i=s.a.createElement,c={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function r(a){var{preview:e,snippet:n,previewClassName:t,color:s="gray"}=a;return i("div",{className:"relative overflow-hidden mb-8"},i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",c[s],{"bg-gray-800":!c[s]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":c[s]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}},uKbb:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),o=n("q1tI"),i=n.n(o),c=n("7ljp"),p=n("YFqc"),r=n.n(p),l=n("tc9R"),u=n("pOT7"),m=n("vRWG"),b=n("I6Nb"),g=n("QksO"),d=n.n(g),j=n("8C7G"),O=n("wH44"),f=(i.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:d()},meta:{title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Timing values",slug:"timing-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=b.ContentsLayout;function h(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(c.a)(N,Object(t.a)({},f,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-{timing}")," utilities to control an element's easing curve.")),Object(c.a)(u.a,{preview:'\n  <div class="flex justify-around items-center">\n    <button class="transition duration-700 ease-in transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-timing-function at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-timing-function utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-in-out")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(c.a)("p",null,"By default Tailwind provides four general purpose transition-timing-function utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'in-expo'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.95, 0.05, 0.795, 0.035)'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'out-expo'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.19, 1, 0.22, 1)'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(j.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(O.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=f},yHg6:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return n("uKbb")}])}},[["yHg6",0,2,1,3,4,5,6,7,8]]]);