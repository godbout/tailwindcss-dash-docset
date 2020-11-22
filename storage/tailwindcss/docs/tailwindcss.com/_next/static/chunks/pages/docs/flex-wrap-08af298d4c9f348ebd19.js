_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[78],{"8C7G":function(a,n,e){"use strict";e.d(n,"a",(function(){return r}));var t=e("rePB"),s=e("q1tI"),p=e.n(s),o=e("98BF"),c=e("Zb5r"),l=e("AOjV"),i=p.a.createElement;function r(a){var n=a.plugin,e=a.name,s=o.defaultConfig.variants[n]||["responsive"];e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!s.includes(a)})).slice(0,2),r="By default, ".concat(s.length?"only ".concat(Object(c.a)(s).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(e," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",e," utilities by modifying the"," ",i("code",null,n)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(p)," variants:"),i(l.a,{path:"variants.extend",before:"...",add:Object(t.a)({},n,p)}))}},Aunq:function(a,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n}){a({".flex-wrap":{"flex-wrap":"wrap"},".flex-wrap-reverse":{"flex-wrap":"wrap-reverse"},".flex-nowrap":{"flex-wrap":"nowrap"}},n("flexWrap"))}}},VWga:function(a,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-wrap",function(){return e("wv3D")}])},Zb5r:function(a,n,e){"use strict";function t(a){return a.reduce((function(n,e,t){return 0===t?e:t===a.length-1?"".concat(n," and ").concat(e):"".concat(n,", ").concat(e)}),"")}e.d(n,"a",(function(){return t}))},pOT7:function(a,n,e){"use strict";e.d(n,"a",(function(){return i}));var t=e("q1tI"),s=e.n(t),p=e("iuhU"),o=s.a.createElement,c={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var n=a.preview,e=a.snippet,t=a.previewClassName,s=a.color,i=void 0===s?"gray":s;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[i],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}),o("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",c[i],{"bg-gray-800":!c[i]})},o("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":c[i]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:e}}))))}},wH44:function(a,n,e){"use strict";e.d(n,"a",(function(){return d}));var t=e("rePB"),s=e("q1tI"),p=e.n(s),o=e("AOjV"),c=e("AI3G"),l=e("Zb5r"),i=p.a.createElement;function r(a,n){var e=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),e.push.apply(e,t)}return e}function u(a){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){Object(t.a)(a,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(e,n))}))}return a}function d(a){var n=a.plugin,e=a.name,s=Object(c.a)(n);return e=e||n.replace(/([a-z])([A-Z])/g,(function(a,n,e){return"".concat(n," ").concat(e.toLowerCase())})),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",e," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map((function(a){return"<code>".concat(a,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(o.a,{path:"corePlugins",before:"...",add:s.reduce((function(a,n){return u(u({},a),{},Object(t.a)({},n,!1))}),{})}))}},wv3D:function(a,n,e){"use strict";e.r(n),e.d(n,"default",(function(){return j}));var t=e("wx14"),s=e("Ff2n"),p=e("q1tI"),o=e.n(p),c=e("7ljp"),l=e("YFqc"),i=e.n(l),r=e("tc9R"),u=e("pOT7"),d=e("vRWG"),g=e("I6Nb"),m=e("Aunq"),b=e.n(m),f=e("8C7G"),v=e("wH44"),k=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Flex Wrap",description:"Utilities for controlling how flex items wrap.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Don't wrap",slug:"don-t-wrap",children:[]},{title:"Wrap normally",slug:"wrap-normally",children:[]},{title:"Wrap reversed",slug:"wrap-reversed",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function j(a){var n=a.components,e=Object(s.a)(a,["components"]);return Object(c.a)(h,Object(t.a)({},k,e,{components:n,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"don-t-wrap",toc:!0},"Don't wrap"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"flex-nowrap")," to prevent flex items from wrapping, causing inflexible items to overflow the container if necessary:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-nowrap space-x-4">\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 w-2/5 rounded-md text-white flex-none bg-emerald-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-nowrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"wrap-normally",toc:!0},"Wrap normally"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap")," to allow flex items to wrap:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-wrap -m-2">\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-light-blue-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"wrap-reversed",toc:!0},"Wrap reversed"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap-reverse")," to wrap flex items in the reverse direction:")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-wrap-reverse -m-2">\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">1</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">2</div>\n    <div class="h-12 m-2 w-2/5 rounded-md text-white bg-purple-500 flex items-center justify-center text-2xl font-semibold ">3</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-wrap-reverse</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control how flex items wrap at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:flex-wrap-reverse")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"flex-wrap-reverse")," utility at only medium screen sizes and above."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-wrap ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-wrap-reverse")," ...",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(f.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(v.a,{plugin:"flexWrap",name:"flex-wrap",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=k}},[["VWga",0,2,1,3,4,5,6]]]);