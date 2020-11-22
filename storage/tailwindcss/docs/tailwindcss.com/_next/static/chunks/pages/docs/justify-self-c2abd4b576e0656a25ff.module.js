(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[110],{"8C7G":function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var n=s("q1tI"),a=s.n(n),i=s("98BF"),p=s("Zb5r"),l=s("AOjV"),o=a.a.createElement;function c(t){var{plugin:e,name:s}=t,n=i.defaultConfig.variants[e]||["responsive"];s=s||e.replace(/([a-z])([A-Z])/g,(t,e,s)=>"".concat(e," ").concat(s.toLowerCase()));var a=["responsive","hover","focus","active","group-hover"].filter(t=>!n.includes(t)).slice(0,2),c="By default, ".concat(n.length?"only ".concat(Object(p.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(s," utilities.");return o("div",{className:"prose"},o("p",{dangerouslySetInnerHTML:{__html:c}}),o("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",o("code",null,e)," property in the ",o("code",null,"variants")," section of your"," ",o("code",null,"tailwind.config.js")," file."),o("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(p.a)(a)," variants:"),o(l.a,{path:"variants.extend",before:"...",add:{[e]:a}}))}},"GR+v":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:t,variants:e}){t({".justify-self-auto":{"justify-self":"auto"},".justify-self-start":{"justify-self":"start"},".justify-self-end":{"justify-self":"end"},".justify-self-center":{"justify-self":"center"},".justify-self-stretch":{"justify-self":"stretch"}},e("justifySelf"))}}},"Ju+c":function(t,e,s){"use strict";s.r(e),s.d(e,"default",(function(){return h}));var n=s("wx14"),a=s("Ff2n"),i=s("q1tI"),p=s.n(i),l=s("7ljp"),o=s("YFqc"),c=s.n(o),r=s("tc9R"),u=s("pOT7"),d=s("vRWG"),f=s("I6Nb"),g=s("GR+v"),m=s.n(g),x=s("8C7G"),b=s("wH44"),v=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:m()},meta:{title:"Justify Self",description:"Utilities for controlling how an individual grid item is aligned along its inline axis."},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"Center",slug:"center",children:[]},{title:"End",slug:"end",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),k=f.ContentsLayout;function h(t){var{components:e}=t,s=Object(a.a)(t,["components"]);return Object(l.a)(k,Object(n.a)({},v,s,{components:e,mdxType:"MDXLayout"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-auto")," to align an item based on the value of the grid's ",Object(l.a)("inlineCode",{parentName:"p"},"justify-items")," property:")),Object(l.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-auto text-white text-2xl font-extrabold bg-purple-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-purple-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-auto</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"purple"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-start")," to align a grid item to the start its inline axis:")),Object(l.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-start text-white text-2xl font-extrabold bg-emerald-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-emerald-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-start</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-center")," to align a grid item along the center its inline axis:")),Object(l.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-center text-white text-2xl font-extrabold bg-amber-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-amber-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-center</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-end")," to align a grid item to the end its inline axis:")),Object(l.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-stretch auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-end text-white text-2xl font-extrabold bg-rose-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-rose-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-stretch ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-end</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-stretch")," to stretch a grid item to fill the grid area on its inline axis:")),Object(l.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 gap-4 justify-items-start auto-rows-fr h-32">\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="justify-self-stretch text-white text-2xl font-extrabold bg-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2">1</div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n    <div class="text-white text-2xl font-extrabold bg-stripes bg-stripes-fuchsia-500 rounded-md flex justify-center items-center px-4 py-2"></div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid justify-items-start ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">justify-self-stretch</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n  <span class="token comment">&lt;!-- ... --\x3e</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"fuchsia"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(l.a)("p",null,"To control the alignment of a grid item inside its grid area at a specific breakpoint, add a ",Object(l.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing utility class. For example, use ",Object(l.a)("inlineCode",{parentName:"p"},"md:justify-self-end")," to apply the ",Object(l.a)("inlineCode",{parentName:"p"},"justify-self-end")," utility at only medium screen sizes and above."),Object(l.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(l.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(l.a)("a",null,"Responsive Design"))," documentation."),Object(l.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(l.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(l.a)(x.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Variants"}),Object(l.a)("div",{className:"prose"},Object(l.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(l.a)(b.a,{plugin:"justifySelf",name:"justify-self",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=v},Zb5r:function(t,e,s){"use strict";function n(t){return t.reduce((e,s,n)=>0===n?s:n===t.length-1?"".concat(e," and ").concat(s):"".concat(e,", ").concat(s),"")}s.d(e,"a",(function(){return n}))},fEWL:function(t,e,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/justify-self",function(){return s("Ju+c")}])},pOT7:function(t,e,s){"use strict";s.d(e,"a",(function(){return c}));var n=s("q1tI"),a=s.n(n),i=s("iuhU"),p=a.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},o={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function c(t){var{preview:e,snippet:s,previewClassName:n,color:a="gray"}=t;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",o[a],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",l[a],{"bg-gray-800":!l[a]})},p("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[a]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:s}}))))}},wH44:function(t,e,s){"use strict";s.d(e,"a",(function(){return d}));var n=s("rePB"),a=s("q1tI"),i=s.n(a),p=s("AOjV"),l=s("AI3G"),o=s("Zb5r"),c=i.a.createElement;function r(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,n)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?r(Object(s),!0).forEach((function(e){Object(n.a)(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):r(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function d(t){var{plugin:e,name:s}=t,n=Object(l.a)(e);return s=s||e.replace(/([a-z])([A-Z])/g,(t,e,s)=>"".concat(e," ").concat(s.toLowerCase())),c("div",{className:"prose"},c("p",null,"If you don't plan to use the ",s," utilities in your project, you can disable them entirely by setting the"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(o.a)(n.map(t=>"<code>".concat(t,"</code>")))}})," ",n.length>1?"properties":"property"," to ",c("code",null,"false")," in the"," ",c("code",null,"corePlugins")," section of your config file:"),c(p.a,{path:"corePlugins",before:"...",add:n.reduce((t,e)=>u(u({},t),{},{[e]:!1}),{})}))}}},[["fEWL",0,2,1,3,4,5,6]]]);