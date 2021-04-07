_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[129],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),o=t("98BF"),i=t("Zb5r"),r=t("AOjV"),p=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=o.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(i.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:l}}),p("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",p("code",null,e)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(i.a)(c)," variants:"),p(r.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var t={},n=0;n<a.length;n++){var s=a[n],c=e(s),o=t[c];Array.isArray(o)?t[c].push(s):t[c]=[s]}return t}},DVEO:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("maxWidth",[["max-w",["maxWidth"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},Qtp6:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/max-width",function(){return t("rOsi")}])},"cOG/":function(a,e,t){"use strict";t.d(e,"a",(function(){return o})),t.d(e,"b",(function(){return i}));var n=t("KQm4"),s=t("C4b9"),c=t.n(s);function o(a){return Object(n.a)(a).sort((function(a,e){var t=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);t=null===t?NaN:parseFloat(t[1]);var n=e.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return n=null===n?NaN:parseFloat(n[1]),isNaN(t)&&isNaN(n)?0:isNaN(t)?1:isNaN(n)?-1:t-n}))}function i(a){return Object.values(c()(a,(function(a){return a.match(/^(.*?)[^-]+$/)[1]}))).flatMap(o)}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return g})),t.d(e,"b",(function(){return j}));var n=t("wx14"),s=t("q1tI"),c=t.n(s),o=t("iuhU"),i=t("ZMKu"),r=c.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(a){var e=Object(s.useRef)(),t=Object(s.useState)(!1),c=t[0],o=t[1],i=Object(s.useState)({}),p=i[0],l=i[1];return Object(s.useEffect)((function(){if(c){var a=new window.ResizeObserver(t);return t(),a.observe(e.current.contentDocument.body),function(){a.disconnect()}}function t(){l({height:e.current.contentDocument.body.scrollHeight})}}),[c]),r("iframe",Object(n.a)({},a,{ref:e,onLoad:function(){return o(!0)},style:p}))}function b(a){var e=a.color,t=a.snippet;return r("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},r("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g(a){var e=a.preview,t=a.src,n=a.snippet,s=a.previewClassName,c=a.color,i=void 0===c?"gray":c;return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",l[i],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:e}}):r(d,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[i])}),r(b,{color:i,snippet:n}))}function j(a){var e=a.preview,t=a.src,n=a.previewClassName,c=a.snippet,p=a.color,g=void 0===p?"gray":p,j=a.min,O=void 0!==j&&j,h=Object(s.useRef)(),N=Object(i.h)(0),f=Object(s.useRef)(),v=Object(s.useState)(!1),k=v[0],x=v[1];return Object(s.useEffect)((function(){var a=new window.ResizeObserver((function(){N.set(0)}));return a.observe(h.current),function(){a.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:h,className:"relative rounded-t-xl ".concat(u[g])},r("div",{className:O?"md:w-88":void 0},r(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(N,(function(a){return-a}))}},e?r("div",{className:Object(o.a)("rounded-t-xl",n,l[g],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(d,{src:t,className:Object(o.a)("w-full rounded-t-xl",l[g],{"pointer-events-none":k})}))),r("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(i.d.div,{drag:"x",_dragX:N,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(O?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:N},onDragStart:function(){document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:function(){document.body.classList.remove("cursor-grabbing"),x(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[g]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:g,snippet:c}))}},rOsi:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return v}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),o=t.n(c),i=t("7ljp"),r=t("YFqc"),p=t.n(r),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),b=t("DVEO"),g=t.n(b),j=t("8C7G"),O=t("wH44"),h=t("cOG/"),N=(o.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:g.a,sort:h.a},meta:{title:"Max-Width",description:"Utilities for setting the maximum width of an element"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Prose",slug:"prose",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Max-Width Scale",slug:"max-width-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=d.ContentsLayout;function v(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(i.a)(f,Object(n.a)({},N,t,{components:e,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(i.a)("p",null,"Set the maximum width of an element using the ",Object(i.a)("inlineCode",{parentName:"p"},"max-w-{size}")," utilities.")),Object(i.a)(u.a,{preview:'\n  <div class="max-w-md mx-auto rounded-md bg-emerald-500 text-white text-2xl font-extrabold flex items-center justify-center py-3">\n    max-w-md\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-md</span> mx-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  max-w-md\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:2,id:"prose",toc:!0},"Prose"),Object(i.a)("p",null,"We added a new max-width by default called ",Object(i.a)("inlineCode",{parentName:"p"},"max-w-prose"),". If you are familiar with the ",Object(i.a)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss-typography"}),"typography plugin")," you might recognize this one. The idea behind this class is that it allows you to have an optimal reading width.")),Object(i.a)(u.a,{preview:'\n  <div class="max-w-prose text-sm text-purple-700 p-6">\n    <p class="font-bold">Why do you never see elephants hiding in trees?</p>\n    <p>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">max-w-prose</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>font-bold<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Why do you never see elephants hiding in trees?<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Because they\'re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)("hr",null),Object(i.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the max-width of an element at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing max-width utility."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"max-w-sm ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:max-w-lg")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)("hr",null),Object(i.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(l.a,{level:3,id:"max-width-scale",toc:!0},"Max-Width Scale"),Object(i.a)("p",null,"Customize Tailwind's default max-width scale in the ",Object(i.a)("inlineCode",{parentName:"p"},"theme.maxWidth")," section of your ",Object(i.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     maxWidth",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/4'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'25%'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/2'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'50%'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3/4'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'75%'"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(i.a)("p",null,"Learn more about customizing the default theme in the ",Object(i.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(i.a)("a",null,"theme customization documentation")),"."),Object(i.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(j.a,{plugin:"maxWidth",name:"max-width",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(O.a,{plugin:"maxWidth",name:"max-width",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=N}},[["Qtp6",0,2,6,1,3,4,5,7,8,9]]]);