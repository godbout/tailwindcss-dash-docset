(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[121],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),p=n("Zb5r"),o=n("AOjV"),l=s.a.createElement;function i(a){var{plugin:e,name:n}=a,t=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),i="By default, ".concat(t.length?"only ".concat(Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:i}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,e)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),l(o.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},KM9i:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/object-position",function(){return n("dyt1")}])},dyt1:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return h}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),p=n.n(c),o=n("7ljp"),l=n("YFqc"),i=n.n(l),r=n("tc9R"),b=n("pOT7"),m=n("vRWG"),u=n("I6Nb"),g=n("mvUL"),j=n.n(g),d=n("8C7G"),O=n("wH44"),k=(p.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:j()},meta:{title:"Object Position",description:"Utilities for controlling how a replaced element's content should be positioned within its container.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Object Positioning",slug:"object-positioning"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),N=u.ContentsLayout;function h(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(o.a)(N,Object(t.a)({},k,n,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"object-{side}")," utilities to specify how a replaced element's content should be positioned within its container.")),Object(o.a)(b.a,{preview:'\n  <div class="grid grid-cols-3 gap-4">\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right Top</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right-top object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Center</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-center object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div>\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Left Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-left-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-amber-600 font-medium mb-1">Right Bottom</p>\n      <img class="mx-auto bg-amber-300 bg-stripes bg-stripes-white w-24 h-24 rounded-md overflow-hidden object-right-bottom object-none" src="/img/placeholder-square-amber.svg">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right-top</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-center</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-left-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>object-none <span class="code-highlight bg-code-highlight">object-right-bottom</span> bg-yellow-300 w-24 h-24 ...<span class="token punctuation">"</span></span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To position an object only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing object position utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:object-top")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"object-top")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"object-center ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:object-top")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"src"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"object-positioning",toc:!0},"Object Positioning"),Object(o.a)("p",null,"By default Tailwind provides nine object position utilities. You can change, add, or remove these by editing the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.objectPosition")," section of your Tailwind config."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     objectPosition",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       bottom",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       center",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'center'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       left",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'left'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'left-bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'left bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'left-top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'left top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       right",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'right'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'right-bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'right bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'right-top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'right top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       top",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'center-bottom'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'center bottom'"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'center-top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'center top'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(d.a,{plugin:"objectPosition",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(O.a,{plugin:"objectPosition",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=k},mvUL:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("objectPosition",[["object",["objectPosition"]]])};var t,s=(t=n("y2+P"))&&t.__esModule?t:{default:t}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("iuhU"),p=s.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var{preview:e,snippet:n,previewClassName:t,color:s="gray"}=a;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",o[s],{"bg-gray-800":!o[s]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[s]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}}},[["KM9i",0,2,1,3,4,5,6,7,8]]]);