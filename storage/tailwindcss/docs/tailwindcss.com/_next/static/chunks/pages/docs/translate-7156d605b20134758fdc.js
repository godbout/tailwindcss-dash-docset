_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[168],{"8C7G":function(a,e,t){"use strict";t.d(e,"a",(function(){return l}));var n=t("rePB"),s=t("q1tI"),c=t.n(s),p=t("98BF"),r=t("Zb5r"),o=t("AOjV"),i=c.a.createElement;function l(a){var e=a.plugin,t=a.name,s=p.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,(function(a,e,t){return"".concat(e," ").concat(t.toLowerCase())}));var c=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),l="By default, ".concat(s.length?"only ".concat(Object(r.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:l}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(r.a)(c)," variants:"),i(o.a,{path:"variants.extend",before:"...",add:Object(n.a)({},e,c)}))}},C4b9:function(a,e){a.exports=function(a,e){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof e)throw new Error("expected a function for second argument");for(var t={},n=0;n<a.length;n++){var s=a[n],c=e(s),p=t[c];Array.isArray(p)?t[c].push(s):t[c]=[s]}return t}},GLRZ:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/translate",function(){return t("b17U")}])},b17U:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return k}));var n=t("wx14"),s=t("Ff2n"),c=t("q1tI"),p=t.n(c),r=t("7ljp"),o=t("YFqc"),i=t.n(o),l=t("tc9R"),m=t("pOT7"),b=t("vRWG"),u=t("I6Nb"),j=t("zI9L"),O=t.n(j),N=t("8C7G"),d=t("wH44"),g=t("cOG/"),f=(p.a.createElement,{Layout:b.DocumentationLayout,classes:{plugin:O.a,sort:g.b},meta:{title:"Translate",description:"Utilities for translating elements with transform."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Translate scale",slug:"translate-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=u.ContentsLayout;function k(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(r.a)(h,Object(n.a)({},f,t,{components:e,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Translate an element by first enabling transforms with the ",Object(r.a)("inlineCode",{parentName:"p"},"transform")," utility, then specifying the translate direction and distance using the ",Object(r.a)("inlineCode",{parentName:"p"},"translate-x-{amount}")," and ",Object(r.a)("inlineCode",{parentName:"p"},"translate-y-{amount}")," utilities.")),Object(r.a)(m.a,{preview:'\n  <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">\n    <div class="w-16 h-16 bg-purple-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform translate-y-6" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-purple-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform -translate-y-6" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-purple-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform translate-y-0" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform <span class="code-highlight bg-code-highlight">translate-y-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform <span class="code-highlight bg-code-highlight">-translate-y-6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transform <span class="code-highlight bg-code-highlight">translate-y-0</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple"}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Note that because Tailwind implements transforms using ",Object(r.a)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties"}),"CSS custom properties"),", ",Object(r.a)("strong",{parentName:"p"},"the transform utilities are not supported in older browsers like IE11"),". If you need transforms for your project and need to support older browsers, ",Object(r.a)(i.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(r.a)("a",null,"add your own utilities"))," or other custom CSS."),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the translation of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing translate utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:translate-x-8")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"translate-x-8")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transform translate-x-2 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:translate-x-8")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"translate-scale",toc:!0},"Translate scale"),Object(r.a)("p",null,"By default Tailwind provides fixed value translate utilities that match our ",Object(r.a)(i.a,{href:"/docs/customizing-spacing",passHref:!0},Object(r.a)("a",null,"spacing scale")),", as well as 50% and 100% variations for translating relative to the element's size."),Object(r.a)("p",null,"You can customize the global spacing scale in the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.spacing")," or ",Object(r.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," sections of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       spacing",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'72'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'18rem'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'84'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'21rem'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'96'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'24rem'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"To customize the translate scale separately, use the ",Object(r.a)("inlineCode",{parentName:"p"},"theme.translate")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       translate",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'1/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'14.2857143%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'2/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'28.5714286%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'3/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'42.8571429%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'4/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'57.1428571%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'5/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'71.4285714%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'6/7'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'85.7142857%'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(N.a,{plugin:"translate",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(d.a,{plugin:"translate",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=f},"cOG/":function(a,e,t){"use strict";t.d(e,"a",(function(){return p})),t.d(e,"b",(function(){return r}));var n=t("KQm4"),s=t("C4b9"),c=t.n(s);function p(a){return Object(n.a)(a).sort((function(a,e){var t=a.replace(/\\/g,"").match(/-([0-9.]+)$/);t=null===t?NaN:parseFloat(t[1]);var n=e.replace(/\\/g,"").match(/-([0-9.]+)$/);return n=null===n?NaN:parseFloat(n[1]),isNaN(t)&&isNaN(n)?0:isNaN(t)?1:isNaN(n)?-1:t-n}))}function r(a){return Object.values(c()(a,(function(a){return a.match(/^(-?.*?)[^-]+$/)[1]}))).flatMap(p)}},pOT7:function(a,e,t){"use strict";t.d(e,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("iuhU"),p=s.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},o={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var e=a.preview,t=a.snippet,n=a.previewClassName,s=a.color,i=void 0===s?"gray":s;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",o[i],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",r[i],{"bg-gray-800":!r[i]})},p("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[i]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},zI9L:function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,s.default)("translate",[["translate-x",["--tw-translate-x"]],["translate-y",["--tw-translate-y"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}}},[["GLRZ",0,2,1,3,4,5,6,7,8]]]);