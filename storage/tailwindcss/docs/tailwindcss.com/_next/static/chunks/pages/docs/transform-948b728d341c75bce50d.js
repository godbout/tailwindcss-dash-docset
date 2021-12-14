_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[170],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),r=t("98BF"),o=t("Zb5r"),c=t("AOjV"),i=s.a.createElement;function l({plugin:e,name:a}){const t=r.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(o.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(o.a)(n)," variants:"),i(c.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),r=(t("Btb4"),t("AI3G")),o=t("iuhU"),c=s.a.createElement;function i({value:e}){return"string"===typeof e?c("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),e.map(((a,t)=>c(n.Fragment,{key:t},c(i,{value:a}),t===e.length-1?null:c("span",{className:"token punctuation"},", ")))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof e?c("span",{className:"token boolean"},e.toString()):e.toString()}function l({edits:e,indent:a="",type:t="inserted"}){return c("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,r)=>{return c(n.Fragment,{key:r},c("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(l=s)?l:`'${l}'`,c("span",{className:"token operator"},":")," ",c(i,{value:e[s]}),c("span",{className:"token punctuation"},","),"\n");var l})))}function p({path:e,add:a,remove:t,before:s,after:o}){return e="string"===typeof e?e.split("."):e,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>c(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(r.a)(s).map(((a,t)=>c(n.Fragment,{key:t},"  ".repeat(e.length+2),c("span",{className:"token comment"},`// ${a}`),"\n")))),t&&c(l,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&c(l,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),c("span",{className:"token unchanged"},o&&Object(r.a)(o).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>c(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),r=t("GAX2").default;e.exports=(e,a,t)=>{const o=[];return function e(a,t,c){let i;(t=t||{}).indent=t.indent||"\t",c=c||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+t.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const n="["+i.newLine+a.map(((n,s)=>{const r=a.length-1===s?i.newLine:","+i.newLineOrSpace;let o=e(n,t,c+t.indent);return t.transform&&(o=t.transform(a,s,o)),i.indent+o+r})).join("")+i.pad+"]";return o.pop(),l(n)}if(s(a)){let n=Object.keys(a).concat(r(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";o.push(a);const s="{"+i.newLine+n.map(((s,r)=>{const o=n.length-1===r?i.newLine:","+i.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,t);let m=e(a[s],t,c+t.indent);return t.transform&&(m=t.transform(a,s,m)),i.indent+String(u)+": "+m+o})).join("")+i.pad+"}";return o.pop(),l(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},TG9m:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({config:e,addBase:a,addUtilities:t,variants:n}){"jit"===e("mode")?(a({"@defaults transform":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1","--tw-transform":["translateX(var(--tw-translate-x))","translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")}}),t({".transform":{"@defaults transform":{},transform:"var(--tw-transform)"},".transform-cpu":{"--tw-transform":["translateX(var(--tw-translate-x))","translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")},".transform-gpu":{"--tw-transform":["translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")},".transform-none":{transform:"none"}},n("transform"))):t({".transform":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:["translateX(var(--tw-translate-x))","translateY(var(--tw-translate-y))","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")},".transform-gpu":{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:["translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)","rotate(var(--tw-rotate))","skewX(var(--tw-skew-x))","skewY(var(--tw-skew-y))","scaleX(var(--tw-scale-x))","scaleY(var(--tw-scale-y))"].join(" ")},".transform-none":{transform:"none"}},n("transform"))}}},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},"mX+M":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return w}));var n=t("HALo"),s=t("dhJC"),r=t("q1tI"),o=t.n(r),c=t("7ljp"),i=t("YFqc"),l=t.n(i),p=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),b=t("TG9m"),g=t.n(b),f=t("8C7G"),h=t("wH44");o.a.createElement;const O={Layout:m.DocumentationLayout,classes:{plugin:g()},meta:{title:"Transform",description:"Utilities for controlling transform behaviour."},tableOfContents:[{title:"Transform",slug:"transform",children:[]},{title:"Hardware acceleration",slug:"hardware-acceleration",children:[]},{title:"None",slug:"none",children:[]},{title:"Responsive",slug:"responsive",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},j=d.ContentsLayout;function w(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(c.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"transform",toc:!0},"Transform"),Object(c.a)("p",null,"To enable transformations you have to add the ",Object(c.a)("inlineCode",{parentName:"p"},"transform")," utility.")),Object(c.a)(u.a,{preview:'\n  <div class="flex flex-col justify-around space-y-12 md:flex-row md:space-y-0 md:space-x-12">\n    <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform rotate-45" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform skew-y-12" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform scale-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n    <div class="w-16 h-16 bg-amber-400 bg-stripes bg-stripes-white">\n      <img class="h-16 w-16 transform translate-x-4 translate-y-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80">\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transform</span> rotate-45 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transform</span> skew-y-12 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transform</span> scale-50 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">transform</span> translate-x-4 translate-y-4 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:2,id:"hardware-acceleration",toc:!0},"Hardware acceleration"),Object(c.a)("p",null,"A lot of transformations can be executed on the GPU instead of the CPU. This enables better performance. You can use the ",Object(c.a)("inlineCode",{parentName:"p"},"transform-gpu")," utility to enable GPU Acceleration."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"transform-gpu")," scale-150 ...",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)(p.a,{level:2,id:"none",toc:!0},"None"),Object(c.a)("p",null,"If you want to disable transformations, then you can use the ",Object(c.a)("inlineCode",{parentName:"p"},"transform-none")," utility."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transform rotate-45 ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"lg:transform-none")," ...",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To enable or disable transforms at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any of the transform utilities. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:transform")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"transform")," utility at only medium screen sizes and above."),Object(c.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(c.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(c.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transform ",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"sm:transform-gpu md:transform-none")," ...",Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(c.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(c.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(f.a,{plugin:"transform",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(h.a,{plugin:"transform",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=O},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return f}));var n=t("HALo"),s=t("q1tI"),r=t.n(s),o=t("iuhU"),c=t("ZMKu"),i=r.a.createElement;const l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){const a=Object(s.useRef)(),{0:t,1:r}=Object(s.useState)(!1),{0:o,1:c}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){c({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>r(!0),style:o}))}function b({color:e,snippet:a}){return i("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[e],{"bg-gray-800":!l[e]})},i("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[s])}),i(b,{color:s,snippet:t}))}function f({preview:e,src:a,previewClassName:t,snippet:n,color:r="gray",min:l=!1}){const g=Object(s.useRef)(),f=Object(c.h)(0),h=Object(s.useRef)(),{0:O,1:j}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:g,className:`relative rounded-t-xl ${u[r]}`},i("div",{className:l?"md:w-88":void 0},i(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,(e=>-e))}},e?i("div",{className:Object(o.a)("rounded-t-xl",t,p[r],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[r],{"pointer-events-none":O})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(l?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[r]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:r,snippet:n}))}},pghZ:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transform",function(){return t("mX+M")}])},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("cpVT"),s=t("q1tI"),r=t.n(s),o=t("AOjV"),c=t("AI3G"),i=t("Zb5r"),l=r.a.createElement;function p(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?p(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m({plugin:e,name:a}){const t=Object(c.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(o.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["pghZ",0,2,6,1,3,4,5,7]]]);