_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[166],{"7F3y":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),m=t("pOT7"),b=t("vRWG"),u=t("I6Nb"),d=t("I2Hb"),j=t.n(d),O=t("8C7G"),N=t("wH44"),g=(c.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:j.a},meta:{title:"Transition Property",description:"Utilities for controlling which CSS properties transition."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Prefers-reduced-motion",slug:"prefers-reduced-motion",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Property values",slug:"property-values"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=u.ContentsLayout;function f(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(h,Object(n.a)({},g,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"transition-{properties}")," utilities to specify which properties should transition when they change.")),Object(r.a)(m.a,{preview:'\n  <div class="text-center">\n    <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-600 hover:bg-red-600 text-white font-semibold py-3 px-6 rounded-md">\n      Hover me\n    </button>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transition</span> duration-500 ease-in-out bg-blue-600 hover:bg-red-600 transform hover:-translate-y-1 hover:scale-110 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"prefers-reduced-motion",toc:!0},"Prefers-reduced-motion"),Object(r.a)("p",null,"You can conditionally apply animations and transitions using the ",Object(r.a)("inlineCode",{parentName:"p"},"motion-safe")," and ",Object(r.a)("inlineCode",{parentName:"p"},"motion-reduce")," variants:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transition transform hover:-translate-y-1 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"motion-reduce:transition-none motion-reduce:transform-none")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Hover me\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"These variants are not enabled by default"),", but you can enable them in the ",Object(r.a)("inlineCode",{parentName:"p"},"variants")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n  variants",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    transitionProperty",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'responsive'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'motion-safe'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'motion-reduce'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"Learn more in the ",Object(r.a)(p.a,{href:"/docs/hover-focus-and-other-states#motion-safe-v1-6-0",passHref:!0},Object(r.a)("a",null,"variants documentation")),"."),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To change which properties of an element transition at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-property utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:transition-colors")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"transition-colors")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"property-values",toc:!0},"Property values"),Object(r.a)("p",null,"By default Tailwind provides transition-property utilities for seven common property combinations. You change, add, or remove these by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"transitionProperty")," section of your Tailwind theme config."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionProperty",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'height'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'height'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'spacing'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'margin, padding'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(O.a,{plugin:"transitionProperty",name:"transition-property",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(N.a,{plugin:"transitionProperty",name:"transition-property",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=g},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("98BF"),r=t("Zb5r"),i=t("AOjV"),p=o.a.createElement;function l(e){var a=e.plugin,t=e.name,s=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var o=["responsive","hover","focus","active","group-hover"].filter((function(e){return!s.includes(e)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,a)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(r.a)(o)," variants:"),p(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},a,o)}))}},I2Hb:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,theme:a,variants:t}){const o=a("transitionTimingFunction.DEFAULT"),c=a("transitionDuration.DEFAULT");e(n.default.fromPairs(n.default.map(a("transitionProperty"),(e,a)=>[(0,s.default)("transition",a),{"transition-property":e,..."none"===e?{}:{"transition-timing-function":o,"transition-duration":c}}])),t("transitionProperty"))}};var n=o(t("LvDl")),s=o(t("dzuX"));function o(e){return e&&e.__esModule?e:{default:e}}},M6XH:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-property",function(){return t("7F3y")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),o=t("iuhU"),c=s.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function p(e){var a=e.preview,t=e.snippet,n=e.previewClassName,s=e.color,p=void 0===s?"gray":s;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",i[p],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}),c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",r[p],{"bg-gray-800":!r[p]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[p]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}}},[["M6XH",0,2,9,1,3,4,5,6,7]]]);