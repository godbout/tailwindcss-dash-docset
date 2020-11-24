_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[176],{"/VXm":function(a,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/width",function(){return s("Fx3Z")}])},"8C7G":function(a,n,s){"use strict";s.d(n,"a",(function(){return u}));var t=s("rePB"),e=s("q1tI"),p=s.n(e),c=s("98BF"),o=s("Zb5r"),l=s("AOjV"),i=p.a.createElement;function u(a){var n=a.plugin,s=a.name,e=c.defaultConfig.variants[n]||["responsive"];s=s||n.replace(/([a-z])([A-Z])/g,(function(a,n,s){return"".concat(n," ").concat(s.toLowerCase())}));var p=["responsive","hover","focus","active","group-hover"].filter((function(a){return!e.includes(a)})).slice(0,2),u="By default, ".concat(e.length?"only ".concat(Object(o.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(s," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:u}}),i("p",null,"You can control which variants are generated for the ",s," utilities by modifying the"," ",i("code",null,n)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(o.a)(p)," variants:"),i(l.a,{path:"variants.extend",before:"...",add:Object(t.a)({},n,p)}))}},C4b9:function(a,n){a.exports=function(a,n){if(!Array.isArray(a))throw new Error("expected an array for first argument");if("function"!==typeof n)throw new Error("expected a function for second argument");for(var s={},t=0;t<a.length;t++){var e=a[t],p=n(e),c=s[p];Array.isArray(c)?s[p].push(e):s[p]=[e]}return s}},Fx3Z:function(a,n,s){"use strict";s.r(n),s.d(n,"default",(function(){return v}));var t=s("wx14"),e=s("Ff2n"),p=s("q1tI"),c=s.n(p),o=s("7ljp"),l=s("YFqc"),i=s.n(l),u=s("tc9R"),r=s("pOT7"),m=s("vRWG"),d=s("I6Nb"),b=s("SV4S"),k=s.n(b),g=s("8C7G"),j=s("wH44"),O=s("cOG/"),N=(c.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:k.a,sort:O.a},meta:{title:"Width",description:"Utilities for setting the width of an element",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Auto",slug:"auto",children:[]},{title:"Screen Width",slug:"screen-width",children:[]},{title:"Fixed Width",slug:"fixed-width",children:[]},{title:"Fluid Width",slug:"fluid-width",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Width scale",slug:"width-scale"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=d.ContentsLayout;function v(a){var n=a.components,s=Object(e.a)(a,["components"]);return Object(o.a)(h,Object(t.a)({},N,s,{components:n,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"w-auto")," to let the browser calculate and select the width for the element. You can use it to unset a specific width:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"w-24 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:w-auto")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(u.a,{level:2,id:"screen-width",toc:!0},"Screen Width"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"w-screen")," to make an element span the entire width of the viewport."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')," h-12 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"w-screen"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(u.a,{level:2,id:"fixed-width",toc:!0},"Fixed Width"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"w-{number}")," or ",Object(o.a)("inlineCode",{parentName:"p"},"w-px")," to set an element to a fixed width.")),Object(o.a)(r.a,{preview:'\n  <div class="flex flex-col space-y-8 mx-auto w-64">\n    <div class="flex items-center space-x-4">\n      <p class="text-sm text-light-blue-600 w-12 text-right">w-8</p>\n      <div class="h-8 w-8 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>\n    </div>\n    <div class="flex items-center space-x-4">\n      <p class="text-sm text-light-blue-600 w-12 text-right">w-12</p>\n      <div class="h-8 w-12 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>\n    </div>\n    <div class="flex items-center space-x-4">\n      <p class="text-sm text-light-blue-600 w-12 text-right">w-16</p>\n      <div class="h-8 w-16 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>\n    </div>\n    <div class="flex items-center space-x-4">\n      <p class="text-sm text-light-blue-600 w-12 text-right">w-24</p>\n      <div class="h-8 w-24 rounded-md bg-light-blue-500 text-white text-2xl font-extrabold"></div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-8</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-12</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-16</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-24</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"fluid-width",toc:!0},"Fluid Width"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"w-{fraction}")," or ",Object(o.a)("inlineCode",{parentName:"p"},"w-full")," to set an element to a percentage based width.")),Object(o.a)(r.a,{preview:'\n  <div class="space-y-6">\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-1/2 px-2 py-4 bg-rose-400 text-center">w-1/2</div>\n      <div class="w-1/2 px-2 py-4 bg-rose-500 text-center">w-1/2</div>\n    </div>\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-2/5 px-2 py-4 bg-rose-400 text-center">w-2/5</div>\n      <div class="w-3/5 px-2 py-4 bg-rose-500 text-center">w-3/5</div>\n    </div>\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-1/3 px-2 py-4 bg-rose-400 text-center">w-1/3</div>\n      <div class="w-2/3 px-2 py-4 bg-rose-500 text-center">w-2/3</div>\n    </div>\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-1/4 px-2 py-4 bg-rose-400 text-center">w-1/4</div>\n      <div class="w-3/4 px-2 py-4 bg-rose-500 text-center">w-3/4</div>\n    </div>\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-1/5 px-2 py-4 bg-rose-400 text-center">w-1/5</div>\n      <div class="w-4/5 px-2 py-4 bg-rose-500 text-center">w-4/5</div>\n    </div>\n    <div class="flex rounded-md overflow-hidden text-white font-mono">\n      <div class="w-1/6 px-2 py-4 bg-rose-400 text-center">w-1/6</div>\n      <div class="w-5/6 px-2 py-4 bg-rose-500 text-center">w-5/6</div>\n    </div>\n    <div class="rounded-md w-full px-2 py-4 bg-rose-500 text-center text-white font-mono">w-full</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/2</span> ... <span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-1/2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/2</span> ...<span class="token punctuation">"</span></span><span class="token attr-name">"</span><span class="token punctuation">></span></span>w-1/2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-2/5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-2/5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-3/5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-3/5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/3</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-1/3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-2/3</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-2/3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-1/4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-3/4</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-3/4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-1/5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-4/5</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-4/5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>flex ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-1/6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-1/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-5/6</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">w-full</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>w-full<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control the width of an element at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing width utility. For example, adding the class ",Object(o.a)("inlineCode",{parentName:"p"},"md:w-full")," to an element would apply the ",Object(o.a)("inlineCode",{parentName:"p"},"w-full")," utility at medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"w-1/2 ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:w-full")," ...",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(u.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(u.a,{level:3,id:"width-scale",toc:!0},"Width scale"),Object(o.a)("p",null,"By default, Tailwind's width scale is a combination of the ",Object(o.a)(i.a,{href:"/docs/customizing-spacing#default-spacing-scale",passHref:!0},Object(o.a)("a",null,"default spacing scale"))," as well as some additional values specific to widths."),Object(o.a)("p",null,"You can customize the spacing scale for padding, margin, width, and height all at once in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.spacing")," or ",Object(o.a)("inlineCode",{parentName:"p"},"theme.extend.spacing")," sections of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       spacing",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'72'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'18rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'84'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'21rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'96'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'24rem'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"To customize width separately, use the ",Object(o.a)("inlineCode",{parentName:"p"},"theme.width")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       width",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'1/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'14.2857143%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'28.5714286%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'42.8571429%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'4/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'57.1428571%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'5/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'71.4285714%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'6/7'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'85.7142857%'"),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(u.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(g.a,{plugin:"width",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(u.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(j.a,{plugin:"width",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=N},SV4S:function(a,n,s){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return(0,e.default)("width",[["w",["width"]]])};var t,e=(t=s("y2+P"))&&t.__esModule?t:{default:t}},"cOG/":function(a,n,s){"use strict";s.d(n,"a",(function(){return c})),s.d(n,"b",(function(){return o}));var t=s("KQm4"),e=s("C4b9"),p=s.n(e);function c(a){return Object(t.a)(a).sort((function(a,n){var s=a.replace(/\\/g,"").match(/-([0-9.]+)$/);s=null===s?NaN:parseFloat(s[1]);var t=n.replace(/\\/g,"").match(/-([0-9.]+)$/);return t=null===t?NaN:parseFloat(t[1]),isNaN(s)&&isNaN(t)?0:isNaN(s)?1:isNaN(t)?-1:s-t}))}function o(a){return Object.values(p()(a,(function(a){return a.match(/^(-?.*?)[^-]+$/)[1]}))).flatMap(c)}},pOT7:function(a,n,s){"use strict";s.d(n,"a",(function(){return i}));var t=s("q1tI"),e=s.n(t),p=s("iuhU"),c=e.a.createElement,o={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"};function i(a){var n=a.preview,s=a.snippet,t=a.previewClassName,e=a.color,i=void 0===e?"gray":e;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[i],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",o[i],{"bg-gray-800":!o[i]})},c("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":o[i]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:s}}))))}}},[["/VXm",0,2,1,3,4,5,6,7,8]]]);