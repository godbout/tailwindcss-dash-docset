_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[136],{"8C7G":function(a,n,s){"use strict";s.d(n,"a",(function(){return u}));var t=s("rePB"),e=s("q1tI"),i=s.n(e),p=s("98BF"),o=s("Zb5r"),l=s("AOjV"),c=i.a.createElement;function u(a){var n=a.plugin,s=a.name,e=p.defaultConfig.variants[n]||["responsive"];s=s||n.replace(/([a-z])([A-Z])/g,(function(a,n,s){return"".concat(n," ").concat(s.toLowerCase())}));var i=["responsive","hover","focus","active","group-hover"].filter((function(a){return!e.includes(a)})).slice(0,2),u="By default, ".concat(e.length?"only ".concat(Object(o.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(s," utilities.");return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:u}}),c("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",c("code",null,n)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(o.a)(i)," variants:"),c(l.a,{path:"variants.extend",before:"...",add:Object(t.a)({},n,i)}))}},FIvr:function(a,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n}){a({".static":{position:"static"},".fixed":{position:"fixed"},".absolute":{position:"absolute"},".relative":{position:"relative"},".sticky":{position:"sticky"}},n("position"))}}},UyA5:function(a,n,s){"use strict";s.d(n,"c",(function(){return i})),s.d(n,"a",(function(){return p})),s.d(n,"b",(function(){return o}));var t=s("q1tI"),e=s.n(t).a.createElement;function i(a){var n=a.children;return e("p",{className:"flex items-start mt-8 mb-4 space-x-2"},e("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},e("circle",{cx:"12",cy:"12",r:"12",fill:"#A7F3D0"}),e("path",{d:"M18 8l-8 8-4-4",stroke:"#047857",strokeWidth:"2"})),e("strong",{className:"text-base leading-7 font-semibold text-gray-900"},n))}function p(a){var n=a.children;return e("p",{className:"flex items-start mt-8 mb-4 space-x-2"},e("svg",{className:"w-6 h-6 flex-none mt-0.5",fill:"none"},e("circle",{cx:"12",cy:"12",r:"12",fill:"#FECDD3"}),e("path",{d:"M8 8l8 8M16 8l-8 8",stroke:"#B91C1C",strokeWidth:"2"})),e("strong",{className:"text-base leading-7 font-semibold text-gray-900"},n))}function o(a){var n=a.children;return e("div",{className:"text-sm bg-light-blue-100 text-light-blue-800 font-medium px-4 py-3 mb-4 rounded-xl"},e("div",{className:"flex items-start space-x-3"},e("svg",{width:"20",height:"20",className:"text-light-blue-500",fill:"currentColor"},e("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M6.998 2a1 1 0 00-.707 1.707l.707.707v3.758a1 1 0 01-.293.707l-4 4C.815 14.769 2.154 18 4.826 18H15.17c2.672 0 4.01-3.231 2.12-5.121l-4-4a1 1 0 01-.292-.707V4.414l.707-.707A1 1 0 0012.998 2h-6zm2 6.172V4h2v4.172a3 3 0 00.879 2.12l1.027 1.028a4 4 0 00-2.171.102l-.47.156a4 4 0 01-2.53 0l-.563-.187a1.992 1.992 0 00-.114-.035l1.063-1.063a3 3 0 00.879-2.121z"})),e("p",null,n)))}},Zb5r:function(a,n,s){"use strict";function t(a){return a.reduce((function(n,s,t){return 0===t?s:t===a.length-1?"".concat(n," and ").concat(s):"".concat(n,", ").concat(s)}),"")}s.d(n,"a",(function(){return t}))},oiiW:function(a,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return j}));var t=s("wx14"),e=s("Ff2n"),i=s("q1tI"),p=s.n(i),o=s("7ljp"),l=s("YFqc"),c=s.n(l),u=s("tc9R"),r=s("pOT7"),d=s("vRWG"),m=s("I6Nb"),g=s("FIvr"),b=s.n(g),k=s("8C7G"),v=s("wH44"),f=s("UyA5"),h=(p.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b.a},meta:{title:"Position",description:"Utilities for controlling how an element is positioned in the DOM.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Static",slug:"static",children:[]},{title:"Relative",slug:"relative",children:[]},{title:"Absolute",slug:"absolute",children:[]},{title:"Fixed",slug:"fixed",children:[]},{title:"Sticky",slug:"sticky",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),O=m.ContentsLayout;function j(a){var n=a.components,s=Object(e.a)(a,["components"]);return Object(o.a)(O,Object(t.a)({},h,s,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"static",toc:!0},"Static"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"static")," to position an element according to the normal flow of the document."),Object(o.a)("p",null,"Any offsets will be ignored and the element will not act as a position reference for absolutely positioned children.")),Object(o.a)(r.a,{preview:'\n  <div class="relative bg-fuchsia-200 p-6">\n    <div class="static h-32 bg-fuchsia-300 p-4 text-fuchsia-600 font-medium">\n      <p>Static parent</p>\n      <div class="absolute bottom-0 left-0 bg-fuchsia-500 p-4 text-fuchsia-50">\n        <p>Absolute child</p>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">static</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Static parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute bottom-0 left-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Absolute child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"relative",toc:!0},"Relative"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"relative")," to position an element according to the normal flow of the document."),Object(o.a)("p",null,"Offsets are calculated relative to the element's normal position and the element ",Object(o.a)("em",{parentName:"p"},"will")," act as a position reference for absolutely positioned children.")),Object(o.a)(r.a,{preview:'\n  <div class="relative bg-rose-200 p-6">\n    <div class="relative h-32 bg-rose-300 p-4 text-rose-600 font-medium">\n      <p>Static parent</p>\n      <div class="absolute bottom-0 left-0 bg-rose-500 p-4 text-rose-50">\n        <p>Absolute child</p>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">relative</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Static parent<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>absolute bottom-0 left-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Absolute child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"absolute",toc:!0},"Absolute"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"absolute")," to position an element ",Object(o.a)("em",{parentName:"p"},"outside")," of the normal flow of the document, causing neighboring elements to act as if the element doesn't exist."),Object(o.a)("p",null,"Offsets are calculated relative to the nearest parent that has a position other than ",Object(o.a)("inlineCode",{parentName:"p"},"static"),", and the element ",Object(o.a)("em",{parentName:"p"},"will")," act as a position reference for other absolutely positioned children.")),Object(o.a)(r.a,{preview:'\n  <div class="space-y-6">\n    <div>\n      <p class="text-sm text-indigo-900 mb-2">With static positioning</p>\n      <div class="relative bg-indigo-200 px-6 pt-2 pb-6 font-medium">\n        <p class="mb-2 text-indigo-600">Relative parent</p>\n        <div class="static bg-indigo-300 p-4 text-indigo-700">\n          <p class="mb-2">Static parent</p>\n          <div class="static bottom-0 left-0 bg-indigo-500 p-4 text-indigo-50 inline-block">\n            <p>Static child</p>\n          </div>\n          <div class="bg-indigo-200 p-4 text-indigo-600 inline-block">\n            <p>Static sibling</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div>\n      <p class="text-sm text-indigo-900 mb-2">With absolute positioning</p>\n      <div class="relative bg-indigo-200 px-6 pt-2 pb-6 font-medium">\n        <p class="mb-2 text-indigo-600">Relative parent</p>\n        <div class="static bg-indigo-300 p-4 text-indigo-700">\n          <p class="mb-2">Static parent</p>\n          <div class="absolute top-0 right-0 bg-indigo-500 p-4 text-indigo-50 inline-block">\n            <p>Absolute child</p>\n          </div>\n          <div class="bg-indigo-200 p-4 text-indigo-600 inline-block">\n            <p>Static sibling</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>static ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Static parent --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>static ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Static child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Static sibling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token comment">&lt;!-- Static parent --\x3e</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">absolute</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Absolute child<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>inline-block ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>Static sibling<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"fixed",toc:!0},"Fixed"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"fixed")," to position an element relative to the browser window."),Object(o.a)("p",null,"Offsets are calculated relative to the viewport and the element ",Object(o.a)("em",{parentName:"p"},"will")," act as a position reference for absolutely positioned children.")),Object(o.a)(r.a,{preview:'\n  <div class="overflow-hidden max-w-md mx-auto mt-4 mb-4 ring-4 ring-amber-300 rounded-xl">\n    <div class="rounded-t-xl bg-amber-200 flex px-4 py-3">\n      <div class="mr-6">\n        <span class="inline-block rounded-full bg-amber-400 h-3 w-3 mr-1"></span>\n        <span class="inline-block rounded-full bg-amber-400 h-3 w-3 mr-1"></span>\n        <span class="inline-block rounded-full bg-amber-400 h-3 w-3"></span>\n      </div>\n      <div class="flex-1 bg-amber-100 rounded mr-4"></div>\n    </div>\n    <div class="relative bg-amber-100 text-amber-600 h-64 font-medium">\n\n      \x3c!-- Hey fellow nerd! Yes, we\'re using position absolute instead of position fixed in the demo; it\'s the best way we could come up with to demonstrate how position fixed works without totally jacking up the layout of the entire documentation site. Forgive us! \ud83d\ude04 --\x3e\n\n      <div class="absolute left-0 right-0 top-0 bg-amber-300 text-amber-700 z-10 px-4 py-3">\n        Fixed child\n      </div>\n      <div class="absolute inset-0 overflow-auto pt-16 px-6 pb-4 space-y-4 font-flow">\n        <p class="font-sans">Scroll me!</p>\n        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. </p>\n        <p>Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. </p>\n        <p>Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices. Suspendisse in justo eu magna luctus suscipit. Sed lectus. Integer euismod lacus luctus magna. </p>\n        <p>Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>\n        <p>Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>\n        <p>Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>\n        <p>Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. </p>\n        <p>Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in, nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. </p>\n      </div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">fixed</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    Fixed child\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n  Scroll me!\n\n  Lorem ipsum...\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"sticky",toc:!0},"Sticky")),Object(o.a)(f.b,{mdxType:"TipCompat"},"Note that sticky positioning is not supported in IE11."),Object(o.a)("div",{className:"prose"},Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"sticky")," to position an element as ",Object(o.a)("inlineCode",{parentName:"p"},"relative")," until it crosses a specified threshold, then treat it as fixed until its parent is off screen."),Object(o.a)("p",null,"Offsets are calculated relative to the element's normal position and the element ",Object(o.a)("em",{parentName:"p"},"will")," act as a position reference for absolutely positioned children.")),Object(o.a)(r.a,{preview:'\n  <div class="h-64 overflow-auto">\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 1</div>\n      <p class="py-4 font-medium text-emerald-500">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>\n    </div>\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 2</div>\n      <p class="py-4 font-medium text-emerald-500">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>\n    </div>\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 3</div>\n      <p class="py-4 font-medium text-emerald-500">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>\n    </div>\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 4</div>\n      <p class="py-4 font-medium text-emerald-500">Quisque cursus, metus vitae pharetra auctor, sem massa mattis sem, at interdum magna augue eget diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Morbi lacinia molestie dui. Praesent blandit dolor. Sed non quam. In vel mi sit amet augue congue elementum. Morbi in ipsum sit amet pede facilisis laoreet. Donec lacus nunc, viverra nec, blandit vel, egestas et, augue. Vestibulum tincidunt malesuada tellus. Ut ultrices ultrices enim. Curabitur sit amet mauris. Morbi in dui quis est pulvinar ullamcorper. Nulla facilisi. </p>\n    </div>\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 5</div>\n      <p class="py-4 font-medium text-emerald-500">Integer lacinia sollicitudin massa. Cras metus. Sed aliquet risus a tortor. Integer id quam. Morbi mi. Quisque nisl felis, venenatis tristique, dignissim in, ultrices sit amet, augue. Proin sodales libero eget ante. Nulla quam. Aenean laoreet. Vestibulum nisi lectus, commodo ac, facilisis ac, ultricies eu, pede. Ut orci risus, accumsan porttitor, cursus quis, aliquet eget, justo. Sed pretium blandit orci. Ut eu diam at pede suscipit sodales. Aenean lectus elit, fermentum non, convallis id, sagittis at, neque. </p>\n    </div>\n    <div>\n      <div class="sticky top-0 bg-emerald-200 px-2 py-1 font-semibold text-emerald-600 rounded-md">Sticky Heading 6</div>\n      <p class="py-4 font-medium text-emerald-500">Nullam mauris orci, aliquet et, iaculis et, viverra vitae, ligula. Nulla ut felis in purus aliquam imperdiet. Maecenas aliquet mollis lectus. Vivamus consectetuer risus et tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. </p>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sticky top-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sticky Heading 1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Quisque cursus...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sticky top-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sticky Heading 2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Integer lacinia...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>sticky top-0 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Sticky Heading 3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>py-4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Nullam mauris...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token comment">&lt;!-- etc. --\x3e</span>',previewClassName:void 0,color:"emerald"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To change how an element is positioned only at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing position utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:absolute")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"absolute")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"relative h-32 ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"inset-x-0 bottom-0 relative ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:absolute"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(c.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(k.a,{plugin:"position",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(v.a,{plugin:"position",mdxType:"Disabling"}))}j.isMDXComponent=!0,j.layoutProps=h},pOT7:function(a,n,s){"use strict";s.d(n,"a",(function(){return c}));var t=s("q1tI"),e=s.n(t),i=s("iuhU"),p=e.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function c(a){var n=a.preview,s=a.snippet,t=a.previewClassName,e=a.color,c=void 0===e?"gray":e;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(i.a)("rounded-t-xl overflow-hidden",l[c],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}),p("div",{className:Object(i.a)("overflow-hidden rounded-b-xl",o[c],{"bg-gray-800":!o[c]})},p("pre",{className:Object(i.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[c]})},p("code",{className:"language-html",dangerouslySetInnerHTML:{__html:s}}))))}},"q+2C":function(a,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/position",function(){return s("oiiW")}])},wH44:function(a,n,s){"use strict";s.d(n,"a",(function(){return d}));var t=s("rePB"),e=s("q1tI"),i=s.n(e),p=s("AOjV"),o=s("AI3G"),l=s("Zb5r"),c=i.a.createElement;function u(a,n){var s=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),s.push.apply(s,t)}return s}function r(a){for(var n=1;n<arguments.length;n++){var s=null!=arguments[n]?arguments[n]:{};n%2?u(Object(s),!0).forEach((function(n){Object(t.a)(a,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(s,n))}))}return a}function d(a){var n=a.plugin,s=a.name,e=Object(o.a)(n);return s=s||n.replace(/([a-z])([A-Z])/g,(function(a,n,s){return"".concat(n," ").concat(s.toLowerCase())})),c("div",{className:"prose"},c("p",null,"If you don't plan to use the ",s," utilities in your project, you can disable them entirely by setting the"," ",c("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(e.map((function(a){return"<code>".concat(a,"</code>")})))}})," ",e.length>1?"properties":"property"," to ",c("code",null,"false")," in the"," ",c("code",null,"corePlugins")," section of your config file:"),c(p.a,{path:"corePlugins",before:"...",add:e.reduce((function(a,n){return r(r({},a),{},Object(t.a)({},n,!1))}),{})}))}}},[["q+2C",0,2,1,3,4,5,6]]]);