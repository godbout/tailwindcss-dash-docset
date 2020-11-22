(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[51],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),r=s.a.createElement;function l(a){var{plugin:e,name:n}=a,t=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),l="By default, ".concat(t.length?"only ".concat(Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),r(o.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},PTvt:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("borderOpacity",[["border-opacity",["--tw-border-opacity"]]])};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},hPEg:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),r=n("YFqc"),l=n.n(r),i=n("tc9R"),b=n("pOT7"),u=n("vRWG"),m=n("I6Nb"),d=n("PTvt"),j=n.n(d),O=n("8C7G"),N=n("wH44"),g=(p.a.createElement,{Layout:u.DocumentationLayout,classes:{plugin:j()},meta:{title:"Border Opacity",description:"Utilities for controlling the opacity of an element's border color."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=m.ContentsLayout;function h(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(k,Object(t.a)({},g,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Control the opacity of an element's border color using the ",Object(o.a)("inlineCode",{parentName:"p"},"border-opacity-{amount}")," utilities.")),Object(o.a)(b.a,{preview:'\n  <div class="grid grid-cols-2 gap-2 sm:grid-cols-5">\n    <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-100 font-extrabold text-light-blue-600 flex justify-center items-center">100%</div>\n    <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-75 font-extrabold text-light-blue-600 flex justify-center items-center">75%</div>\n    <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-50 font-extrabold text-light-blue-600 flex justify-center items-center">50%</div>\n    <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-25 font-extrabold text-light-blue-600 flex justify-center items-center">25%</div>\n    <div class="h-16 rounded border-4 border-light-blue-500 border-opacity-0 font-extrabold text-light-blue-600 flex justify-center items-center">0%</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-100</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-75</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-50</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-25</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>border-4 border-light-blue-500 <span class="code-highlight bg-code-highlight">border-opacity-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element's border color opacity at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing border color opacity utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:border-opacity-50")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"border-opacity-50")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"border-2 border-blue-500 border-opacity-75 md:border-opacity-50",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"To customize the opacity values for all opacity-related utilities at once, use the ",Object(o.a)("inlineCode",{parentName:"p"},"opacity")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," theme configuration:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       opacity",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'10'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.1'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'20'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.2'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'95'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.95'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"If you want to customize only the border opacity utilities, use the ",Object(o.a)("inlineCode",{parentName:"p"},"borderOpacity")," section:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       borderOpacity",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'10'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.1'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'20'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.2'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'95'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0.95'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(l.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(i.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(O.a,{plugin:"borderOpacity",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(N.a,{plugin:"borderOpacity",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=g},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),c=n("iuhU"),p=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function l(a){var{preview:e,snippet:n,previewClassName:t,color:s="gray"}=a;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",r[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",o[s],{"bg-gray-800":!o[s]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[s]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}},"qV+D":function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-opacity",function(){return n("hPEg")}])}},[["qV+D",0,2,1,3,4,5,6,7,8]]]);