(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[40],{"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("98BF"),o=n("Zb5r"),l=n("AOjV"),p=s.a.createElement;function i(a){var{plugin:e,name:n}=a,t=c.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2),i="By default, ".concat(t.length?"only ".concat(Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:i}}),p("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",p("code",null,e)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),p(l.a,{path:"variants.extend",before:"...",add:{[e]:s}}))}},"9AdG":function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,variants:e}){a({".bg-fixed":{"background-attachment":"fixed"},".bg-local":{"background-attachment":"local"},".bg-scroll":{"background-attachment":"scroll"}},e("backgroundAttachment"))}}},KhL8:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-attachment",function(){return n("w7aB")}])},Zb5r:function(a,e,n){"use strict";function t(a){return a.reduce((e,n,t)=>0===t?n:t===a.length-1?"".concat(e," and ").concat(n):"".concat(e,", ").concat(n),"")}n.d(e,"a",(function(){return t}))},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),c=n("iuhU"),o=s.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var{preview:e,snippet:n,previewClassName:t,color:s="gray"}=a;return o("div",{className:"relative overflow-hidden mb-8"},o("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}),o("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",l[s],{"bg-gray-800":!l[s]})},o("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[s]})},o("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}}))))}},w7aB:function(a,e,n){"use strict";n.r(e),n.d(e,"default",(function(){return O}));var t=n("wx14"),s=n("Ff2n"),c=n("q1tI"),o=n.n(c),l=n("7ljp"),p=n("YFqc"),i=n.n(p),r=n("tc9R"),u=n("pOT7"),g=n("vRWG"),d=n("I6Nb"),b=n("9AdG"),m=n.n(b),h=n("8C7G"),k=n("wH44"),v=(o.a.createElement,{Layout:g.DocumentationLayout,classes:{plugin:m()},meta:{title:"Background Attachment",description:"Utilities for controlling how a background image behaves when scrolling.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Fixed",slug:"fixed",children:[]},{title:"Local",slug:"local",children:[]},{title:"Scroll",slug:"scroll",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=d.ContentsLayout;function O(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(l.a)(f,Object(t.a)({},v,n,{components:e,mdxType:"MDXLayout"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"fixed",toc:!0},"Fixed"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"bg-fixed")," to fix the background image relative to the viewport.")),Object(l.a)(u.a,{preview:'\n  <div class="w-full h-48 bg-fixed bg-contain bg-center overflow-y-scroll" style="background-image:url(\'/img/placeholder-light-blue.svg\');">\n    <div class="h-64"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-fixed</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"local",toc:!0},"Local"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"bg-local")," to scroll the background image with the container and the viewport.")),Object(l.a)(u.a,{preview:'\n  <div class="w-full h-72 bg-local bg-cover bg-center overflow-y-scroll" style="background-image:url(\'/img/placeholder-indigo.svg\');">\n    <div class="h-96"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-local</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"scroll",toc:!0},"Scroll"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"bg-scroll")," to scroll the background image with the viewport, but not with the container.")),Object(l.a)(u.a,{preview:'\n  <div class="w-full h-72 bg-scroll bg-cover overflow-y-scroll" style="background-image:url(\'/img/placeholder-fuchsia.svg\');">\n    <div class="h-96"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">bg-scroll</span> ...<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(l.a)("p",null,"To control the background attachment of an element at a specific breakpoint, add a ",Object(l.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background attachment utility. For example, use ",Object(l.a)("inlineCode",{parentName:"p"},"md:bg-fixed")," to apply the ",Object(l.a)("inlineCode",{parentName:"p"},"bg-fixed")," utility at only medium screen sizes and above."),Object(l.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(l.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(l.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(l.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-local ",Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:bg-fixed")," ...",Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(l.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(l.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(l.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(l.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(l.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(l.a)("a",null,"Responsive Design"))," documentation."),Object(l.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(l.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(l.a)(h.a,{plugin:"backgroundAttachment",mdxType:"Variants"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(l.a)(k.a,{plugin:"backgroundAttachment",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=v},wH44:function(a,e,n){"use strict";n.d(e,"a",(function(){return g}));var t=n("rePB"),s=n("q1tI"),c=n.n(s),o=n("AOjV"),l=n("AI3G"),p=n("Zb5r"),i=c.a.createElement;function r(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){Object(t.a)(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function g(a){var{plugin:e,name:n}=a,t=Object(l.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase())),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(t.map(a=>"<code>".concat(a,"</code>")))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(o.a,{path:"corePlugins",before:"...",add:t.reduce((a,e)=>u(u({},a),{},{[e]:!1}),{})}))}}},[["KhL8",0,2,1,3,4,5,6]]]);