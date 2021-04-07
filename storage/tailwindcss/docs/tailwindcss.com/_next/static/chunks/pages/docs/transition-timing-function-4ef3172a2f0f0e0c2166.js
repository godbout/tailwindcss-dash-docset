_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[182],{"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("rePB"),s=n("q1tI"),i=n.n(s),o=n("98BF"),c=n("Zb5r"),r=n("AOjV"),p=i.a.createElement;function l(e){var a=e.plugin,n=e.name,s=o.defaultConfig.variants[a]||["responsive"];n=n||a.replace(/([a-z])([A-Z])/g,(function(e,a,n){return"".concat(a," ").concat(n.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(c.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",p("code",null,a)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(i)," variants:"),p(r.a,{path:"variants.extend",before:"...",add:Object(t.a)({},a,i)}))}},QksO:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionTimingFunction",[["ease",["transitionTimingFunction"]]],{filterDefault:!0})};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return f}));var t=n("wx14"),s=n("q1tI"),i=n.n(s),o=n("iuhU"),c=n("ZMKu"),r=i.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},b={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var a=Object(s.useRef)(),n=Object(s.useState)(!1),i=n[0],o=n[1],c=Object(s.useState)({}),p=c[0],l=c[1];return Object(s.useEffect)((function(){if(i){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),function(){e.disconnect()}}function n(){l({height:a.current.contentDocument.body.scrollHeight})}}),[i]),r("iframe",Object(t.a)({},e,{ref:a,onLoad:function(){return o(!0)},style:p}))}function d(e){var a=e.color,n=e.snippet;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function g(e){var a=e.preview,n=e.src,t=e.snippet,s=e.previewClassName,i=e.color,c=void 0===i?"gray":i;return r("div",{className:"relative overflow-hidden mb-8"},a?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[c],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):r(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[c])}),r(d,{color:c,snippet:t}))}function f(e){var a=e.preview,n=e.src,t=e.previewClassName,i=e.snippet,p=e.color,g=void 0===p?"gray":p,f=e.min,j=void 0!==f&&f,O=Object(s.useRef)(),h=Object(c.h)(0),N=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],x=v[1];return Object(s.useEffect)((function(){var e=new window.ResizeObserver((function(){h.set(0)}));return e.observe(O.current),function(){e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:O,className:"relative rounded-t-xl ".concat(u[g])},r("div",{className:j?"md:w-88":void 0},r(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(h,(function(e){return-e}))}},a?r("div",{className:Object(o.a)("rounded-t-xl",t,l[g],{"p-10":!t}),dangerouslySetInnerHTML:{__html:a}}):r(m,{src:n,className:Object(o.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":k})}))),r("div",{ref:N,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(c.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:N,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(j?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(b[g]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(d,{color:g,snippet:i}))}},uKbb:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),i=n("q1tI"),o=n.n(i),c=n("7ljp"),r=n("YFqc"),p=n.n(r),l=n("tc9R"),u=n("pOT7"),b=n("vRWG"),m=n("I6Nb"),d=n("QksO"),g=n.n(d),f=n("8C7G"),j=n("wH44"),O=(o.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:g.a},meta:{title:"Transition Timing Function",description:"Utilities for controlling the easing of CSS transitions."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Timing values",slug:"timing-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=m.ContentsLayout;function N(e){var a=e.components,n=Object(s.a)(e,["components"]);return Object(c.a)(h,Object(t.a)({},O,n,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-{timing}")," utilities to control an element's easing curve.")),Object(c.a)(u.a,{preview:'\n  <div class="flex justify-around items-center">\n    <button class="transition duration-700 ease-in transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n    <button class="transition duration-700 ease-in-out transform hover:scale-125 bg-indigo-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>transition <span class="code-highlight bg-code-highlight">ease-in-out</span> duration-700 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hover me<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control an element's transition-timing-function at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-timing-function utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:ease-in-out")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"ease-in-out")," utility at only medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"timing-values",toc:!0},"Timing values"),Object(c.a)("p",null,"By default, Tailwind provides four general purpose transition-timing-function utilities. You change, add, or remove these by customizing the ",Object(c.a)("inlineCode",{parentName:"p"},"transitionTimingFunction")," section of your Tailwind theme config."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionTimingFunction",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'in-expo'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.95, 0.05, 0.795, 0.035)'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'out-expo'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'cubic-bezier(0.19, 1, 0.22, 1)'"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(c.a)("p",null,"Learn more about customizing the default theme in the ",Object(c.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(c.a)("a",null,"theme customization documentation")),"."),Object(c.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(f.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(j.a,{plugin:"transitionTimingFunction",name:"transition-timing-function",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},yHg6:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-timing-function",function(){return n("uKbb")}])}},[["yHg6",0,2,6,1,3,4,5,7,8,9]]]);