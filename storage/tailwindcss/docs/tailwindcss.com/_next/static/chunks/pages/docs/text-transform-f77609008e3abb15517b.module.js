(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[159],{"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),p=t("AOjV"),r=s.a.createElement;function i(e){var{plugin:a,name:t}=e,n=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),i="By default, ".concat(n.length?"only ".concat(Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:i}}),r("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",r("code",null,a)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),r(p.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},GoC5:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".uppercase":{"text-transform":"uppercase"},".lowercase":{"text-transform":"lowercase"},".capitalize":{"text-transform":"capitalize"},".normal-case":{"text-transform":"none"}},a("textTransform"))}}},NbsJ:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-transform",function(){return t("uuw1")}])},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((a,t,n)=>0===n?t:n===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return n}))},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),o=t("iuhU"),c=s.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},r={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(e){var{preview:a,snippet:t,previewClassName:n,color:s="gray"}=e;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",r[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}),c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",p[s],{"bg-gray-800":!p[s]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[s]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}}))))}},uuw1:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return v}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),p=t("7ljp"),r=t("YFqc"),i=t.n(r),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),b=t("I6Nb"),g=t("GoC5"),m=t.n(g),f=t("8C7G"),h=t("wH44"),O=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"Text Transform",description:"Utilities for controlling the transformation of text.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Normal Case",slug:"normal-case",children:[]},{title:"Uppercase",slug:"uppercase",children:[]},{title:"Lowercase",slug:"lowercase",children:[]},{title:"Capitalize",slug:"capitalize",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),j=b.ContentsLayout;function v(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"normal-case",toc:!0},"Normal Case"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"normal-case")," utility to preserve the original casing. This is typically used to reset capitalization at different breakpoints.")),Object(p.a)(u.a,{preview:'\n  <p class="normal-case text-xl text-emerald-600">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">normal-case</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"uppercase",toc:!0},"Uppercase"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"uppercase")," utility to uppercase text.")),Object(p.a)(u.a,{preview:'\n  <p class="uppercase text-xl text-purple-600">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">uppercase</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"lowercase",toc:!0},"Lowercase"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"lowercase")," utility to lowercase text.")),Object(p.a)(u.a,{preview:'\n  <p class="lowercase text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">lowercase</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"capitalize",toc:!0},"Capitalize"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"capitalize")," utility to capitalize text.")),Object(p.a)(u.a,{preview:'\n  <p class="capitalize text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">capitalize</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the text transformation of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text transformation utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:uppercase")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"uppercase")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"capitalize ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:uppercase")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  The quick brown fox jumped over the lazy dog.\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(f.a,{plugin:"textTransform",name:"text transformation",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(h.a,{plugin:"textTransform",name:"text transformation",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=O},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),p=t("AI3G"),r=t("Zb5r"),i=o.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d(e){var{plugin:a,name:t}=e,n=Object(p.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase())),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"...",add:n.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}}},[["NbsJ",0,2,1,3,4,5,6]]]);