_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[117],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),p=t("98BF"),o=t("Zb5r"),i=t("AOjV"),r=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=p.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:l}}),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(c)," variants:"),r(i.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var t={},n=0;n<a.length;n++){var s=a[n],c=e(s),p=t[c];Array.isArray(p)?t[c].push(s):t[c]=[s]}return t}},DVEO:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("maxWidth",[["max-w",["maxWidth"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},Qtp6:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/max-width",function(){return t("rOsi")}])},"cOG/":function(a,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return o}));var n=t("KQm4"),s=t("C4b9"),c=t.n(s);function p(a){return Object(n.a)(a).sort((function(a,e){var t=a.replace(/\\/g,"").match(/-([0-9.]+)$/);t=null===t?NaN:parseFloat(t[1]);var n=e.replace(/\\/g,"").match(/-([0-9.]+)$/);return n=null===n?NaN:parseFloat(n[1]),isNaN(t)&&isNaN(n)?0:isNaN(t)?1:isNaN(n)?-1:t-n}))}function o(a){return Object.values(c()(a,(function(a){return a.match(/^(-?.*?)[^-]+$/)[1]}))).flatMap(p)}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),c=t("iuhU"),p=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},i={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function r(a){var e=a.preview,t=a.snippet,n=a.previewClassName,s=a.color,r=void 0===s?"gray":s;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",i[r],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",o[r],{"bg-gray-800":!o[r]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[r]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},rOsi:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),o=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),b=t("DVEO"),g=t.n(b),j=t("8C7G"),O=t("wH44"),N=t("cOG/"),h=(p.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:g.a,sort:N.a},meta:{title:"Max-Width",description:"Utilities for setting the maximum width of an element"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Prose",slug:"prose",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Max-Width Scale",slug:"max-width-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=d.ContentsLayout;function k(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(o.a)(f,Object(n.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Set the maximum width of an element using the ",Object(o.a)("inlineCode",{parentName:"p"},"max-w-{size}")," utilities.")),Object(o.a)(u.a,{preview:'\n  <div class="max-w-md mx-auto rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">\n    max-w-md\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-md</span> mx-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  max-w-md\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"prose",toc:!0},"Prose"),Object(o.a)("p",null,"We added a new max-width by default called ",Object(o.a)("inlineCode",{parentName:"p"},"max-w-prose"),". If you are familiar with the ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-typography"}),"typography plugin")," you might recognize this one. The idea behind this class is that it allows you to have an optimal reading width.")),Object(o.a)(u.a,{preview:'\n  <div class="max-w-prose text-sm text-purple-700 p-6">\n    <p class="font-bold">Why do you never see elephants hiding in trees?</p>\n    <p>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-prose</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Why do you never see elephants hiding in trees?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple"}),Object(o.a)("div",{className:"prose"},Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the max-width of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing max-width utility."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"max-w-sm ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:max-w-lg")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)("hr",null),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"max-width-scale",toc:!0},"Max-Width Scale"),Object(o.a)("p",null,"Customize Tailwind's default max-width scale in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.maxWidth")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     maxWidth",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/4'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25%'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/2'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'50%'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3/4'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'75%'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(r.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(j.a,{plugin:"maxWidth",name:"max-width",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"maxWidth",name:"max-width",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=h}},[["Qtp6",0,2,1,3,4,5,6,7,8]]]);