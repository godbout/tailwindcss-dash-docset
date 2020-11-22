_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[52],{"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var s=e("rePB"),t=e("q1tI"),p=e.n(t),c=e("98BF"),o=e("Zb5r"),l=e("AOjV"),i=p.a.createElement;function r(a){var n=a.plugin,e=a.name,t=c.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!t.includes(a)})).slice(0,2),r="By default, ".concat(t.length?"only ".concat(Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(e," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",i("code",null,n)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),i(l.a,{path:"variants.extend",before:"...",add:Object(s.a)({},n,p)}))}},VKa0:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-radius",function(){return e("v+v5")}])},nPbI:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,theme:n,variants:e}){const p=[(a,n)=>({[(0,t.default)("rounded",n)]:{borderRadius:""+a}}),(a,n)=>({[(0,t.default)("rounded-t",n)]:{borderTopLeftRadius:""+a,borderTopRightRadius:""+a},[(0,t.default)("rounded-r",n)]:{borderTopRightRadius:""+a,borderBottomRightRadius:""+a},[(0,t.default)("rounded-b",n)]:{borderBottomRightRadius:""+a,borderBottomLeftRadius:""+a},[(0,t.default)("rounded-l",n)]:{borderTopLeftRadius:""+a,borderBottomLeftRadius:""+a}}),(a,n)=>({[(0,t.default)("rounded-tl",n)]:{borderTopLeftRadius:""+a},[(0,t.default)("rounded-tr",n)]:{borderTopRightRadius:""+a},[(0,t.default)("rounded-br",n)]:{borderBottomRightRadius:""+a},[(0,t.default)("rounded-bl",n)]:{borderBottomLeftRadius:""+a}})];a(s.default.flatMap(p,a=>s.default.flatMap(n("borderRadius"),(n,e)=>a(n,e))),e("borderRadius"))}};var s=p(e("LvDl")),t=p(e("dzuX"));function p(a){return a&&a.__esModule?a:{default:a}}},pOT7:function(a,n,e){"use strict";e.d(n,"a",(function(){return i}));var s=e("q1tI"),t=e.n(s),p=e("iuhU"),c=t.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var n=a.preview,e=a.snippet,s=a.previewClassName,t=a.color,i=void 0===t?"gray":t;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",o[i],{"bg-gray-800":!o[i]})},c("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[i]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}}))))}},"v+v5":function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return h}));var s=e("wx14"),t=e("Ff2n"),p=e("q1tI"),c=e.n(p),o=e("7ljp"),l=e("YFqc"),i=e.n(l),r=e("tc9R"),d=e("pOT7"),u=e("vRWG"),g=e("I6Nb"),b=e("nPbI"),m=e.n(b),k=e("8C7G"),j=e("wH44"),O=(c.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:m.a},meta:{title:"Border Radius",description:"Utilities for controlling the border radius of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Rounded corners",slug:"rounded-corners",children:[]},{title:"Pills and circles",slug:"pills-and-circles",children:[]},{title:"No rounding",slug:"no-rounding",children:[]},{title:"Rounding sides separately",slug:"rounding-sides-separately",children:[]},{title:"Rounding corners separately",slug:"rounding-corners-separately",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Border Radiuses",slug:"border-radiuses"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=g.ContentsLayout;function h(a){var n=a.components,e=Object(t.a)(a,["components"]);return Object(o.a)(N,Object(s.a)({},O,e,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"rounded-corners",toc:!0},"Rounded corners"),Object(o.a)("p",null,"Use utilities like ",Object(o.a)("inlineCode",{parentName:"p"},".rounded-sm"),", ",Object(o.a)("inlineCode",{parentName:"p"},".rounded"),", or ",Object(o.a)("inlineCode",{parentName:"p"},".rounded-lg")," to apply different border radius sizes to an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">\n    <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-sm">.rounded-sm</div>\n    <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded">.rounded</div>\n    <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-md">.rounded-md</div>\n    <div class="p-6 bg-light-blue-500 text-white text-center font-extrabold flex items-center justify-center rounded-lg">.rounded-lg</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-sm</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-md</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"pills-and-circles",toc:!0},"Pills and circles"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"rounded-full")," utility to create pills and circles.")),Object(o.a)(d.a,{preview:'\n  <div class="flex justify-center items-center space-x-6">\n    <div class="bg-indigo-500 px-6 py-3 text-white text-center font-extrabold rounded-full">Pill Shape</div>\n    <div class="bg-indigo-500 h-24 w-24 text-white text-center font-extrabold flex items-center justify-center rounded-full">Circle</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-full</span> py-3 px-6...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Pill Shape<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-full</span> h-24 w-24 flex items-center justify-center...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Circle<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"no-rounding",toc:!0},"No rounding"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"rounded-none")," to remove an existing border radius from an element."),Object(o.a)("p",null,"This is most commonly used to remove a border radius that was applied at a smaller breakpoint.")),Object(o.a)(d.a,{preview:'\n  <div class="flex justify-center items-center">\n    <div class="bg-rose-500 p-6 text-white text-center font-extrabold rounded-none">.rounded-none</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.rounded-none<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"rounding-sides-separately",toc:!0},"Rounding sides separately"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"rounded-{t|r|b|l}{-size?}")," to only round one side an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">\n    <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-t-lg">.rounded-t-lg</div>\n    <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-r-lg">.rounded-r-lg</div>\n    <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-b-lg">.rounded-b-lg</div>\n    <div class="bg-emerald-500 p-6 text-white text-center font-extrabold rounded-l-lg">.rounded-l-lg</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-t-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.rounded-t-lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-r-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.rounded-r-lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-b-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.rounded-b-lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-l-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>.rounded-l-lg<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"rounding-corners-separately",toc:!0},"Rounding corners separately"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"rounded-{tl|tr|br|bl}{-size?}")," to only round one corner an element.")),Object(o.a)(d.a,{preview:'\n  <div class="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">\n    <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-tl-lg">.rounded-tl-lg</div>\n    <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-tr-lg">.rounded-tr-lg</div>\n    <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-br-lg">.rounded-br-lg</div>\n    <div class="bg-amber-500 p-6 text-white text-center font-extrabold rounded-bl-lg">.rounded-bl-lg</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-tl-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-tr-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-br-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">rounded-bl-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the border radius of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border radius utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:rounded-lg")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"rounded-lg")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(s.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"'),"rounded ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:rounded-lg")," ...",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"border-radiuses",toc:!0},"Border Radiuses"),Object(o.a)("p",null,"By default Tailwind provides five border radius size utilities. You can change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.borderRadius")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(s.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     borderRadius",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'none'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'0'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'sm'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'0.125rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'0.25rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'4px'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'md'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'0.375rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'lg'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'0.5rem'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'full'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'9999px'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'large'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token string"}),"'12px'"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"borderRadius",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(j.a,{plugin:"borderRadius",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=O}},[["VKa0",0,2,9,1,3,4,5,6,7]]]);