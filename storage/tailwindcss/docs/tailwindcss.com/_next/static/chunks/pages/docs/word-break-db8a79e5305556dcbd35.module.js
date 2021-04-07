(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[192],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),r=a("98BF"),o=a("Zb5r"),i=a("AOjV"),c=s.a.createElement;function l(e){var{plugin:t,name:a}=e,n=r.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),l="By default, ".concat(n.length?"only ".concat(Object(o.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:l}}),c("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",c("code",null,t)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(o.a)(s)," variants:"),c(i.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),r=(a("Btb4"),a("AI3G")),o=a("iuhU"),i=s.a.createElement;function c(e){var{value:t}=e;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((e,a)=>i(n.Fragment,{key:a},i(c,{value:e}),a===t.length-1?null:i("span",{className:"token punctuation"},", "))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function l(e){var{edits:t,indent:a="",type:s="inserted"}=e;return i("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,r)=>{return i(n.Fragment,{key:r},i("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(l=e)?l:"'".concat(l,"'"),i("span",{className:"token operator"},":")," ",i(c,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var l}))}function p(e){var{path:t,add:a,remove:s,before:o,after:c}=e;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>i(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")),o&&Object(r.a)(o).map((e,a)=>i(n.Fragment,{key:a},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&i(l,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},c&&Object(r.a)(c).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,a)=>i(n.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),r=a("GAX2").default;e.exports=(e,t,a)=>{const o=[];return function e(t,a,i){let c;(a=a||{}).indent=a.indent||"\t",i=i||"",c=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const l=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),i).replace(new RegExp(c.indent,"g"),i+a.indent)};if(-1!==o.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";o.push(t);const n="["+c.newLine+t.map((n,s)=>{const r=t.length-1===s?c.newLine:","+c.newLineOrSpace;let o=e(n,a,i+a.indent);return a.transform&&(o=a.transform(t,s,o)),c.indent+o+r}).join("")+c.pad+"]";return o.pop(),l(n)}if(s(t)){let n=Object.keys(t).concat(r(t));if(a.filter&&(n=n.filter(e=>a.filter(t,e))),0===n.length)return"{}";o.push(t);const s="{"+c.newLine+n.map((s,r)=>{const o=n.length-1===r?c.newLine:","+c.newLineOrSpace,l="symbol"===typeof s,p=!l&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=l||p?s:e(s,a);let d=e(t[s],a,i+a.indent);return a.transform&&(d=a.transform(t,s,d)),c.indent+String(u)+": "+d+o}).join("")+c.pad+"}";return o.pop(),l(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},SWTh:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a("wx14"),s=a("Ff2n"),r=a("q1tI"),o=a.n(r),i=a("7ljp"),c=a("YFqc"),l=a.n(c),p=a("tc9R"),u=a("pOT7"),d=a("vRWG"),m=a("I6Nb"),b=a("Yy6n"),g=a.n(b),f=a("8C7G"),h=a("wH44"),O=(o.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"Word Break",description:"Utilities for controlling word breaks in an element."},tableOfContents:[{title:"Normal",slug:"normal",children:[]},{title:"Break Words",slug:"break-words",children:[]},{title:"Break All",slug:"break-all",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),v=m.ContentsLayout;function k(e){var{components:t}=e,a=Object(s.a)(e,["components"]);return Object(i.a)(v,Object(n.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"normal",toc:!0},"Normal"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-normal")," to only add line breaks at normal word break points.")),Object(i.a)(u.a,{preview:'\n  <p class="break-normal max-w-xs px-6 py-4 mx-auto bg-light-blue-200 text-light-blue-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-normal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"break-words",toc:!0},"Break Words"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-words")," to add line breaks mid-word if needed.")),Object(i.a)(u.a,{preview:'\n  <p class="break-words max-w-xs px-6 py-4 mx-auto bg-amber-200 text-amber-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-words</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"break-all",toc:!0},"Break All"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"break-all")," to add line breaks whenever necessary, without trying to preserve whole words.")),Object(i.a)(u.a,{preview:'\n  <p class="break-all max-w-xs px-6 py-4 mx-auto bg-emerald-200 text-emerald-500 font-medium rounded-lg">\n    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiisitaquequodpraesentiumexplicaboincidunt? Dolores beatae nam at sed dolorum ratione dolorem nisi velit cum.\n  </p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">break-all</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To control the word breaks in an element only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing word break utility. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:break-all")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"break-all")," utility at medium screen sizes and above."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"break-normal ",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:break-all")," ...",Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(i.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(i.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(f.a,{plugin:"wordBreak",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(h.a,{plugin:"wordBreak",mdxType:"Disabling"}))}k.isMDXComponent=!0,k.layoutProps=O},UYGK:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/word-break",function(){return a("SWTh")}])},Yy6n:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".break-normal":{"overflow-wrap":"normal","word-break":"normal"},".break-words":{"overflow-wrap":"break-word"},".break-all":{"word-break":"break-all"}},t("wordBreak"))}}},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce((t,a,n)=>0===n?a:n===e.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return n}))},ap0H:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("q1tI"),s=a.n(n),r=a("8Kt/"),o=a.n(r),i=s.a.createElement;function c(e){var{suffix:t,children:a}=e,n=a+(t?" - ".concat(t):"");return i(o.a,null,i("title",{key:"title"},n),i("meta",{key:"twitter:title",name:"twitter:title",content:n}),i("meta",{key:"og:title",property:"og:title",content:n}))}},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("wx14"),s=a("q1tI"),r=a.n(s),o=a("iuhU"),i=a("ZMKu"),c=r.a.createElement,l={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){var t=Object(s.useRef)(),{0:a,1:r}=Object(s.useState)(!1),{0:o,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var e=new window.ResizeObserver(n);return n(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function n(){i({height:t.current.contentDocument.body.scrollHeight})}},[a]),c("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>r(!0),style:o}))}function b(e){var{color:t,snippet:a}=e;return c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",l[t],{"bg-gray-800":!l[t]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":l[t]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g(e){var{preview:t,src:a,snippet:n,previewClassName:s,color:r="gray"}=e;return c("div",{className:"relative overflow-hidden mb-8"},t?c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",p[r],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):c(m,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[r])}),c(b,{color:r,snippet:n}))}function f(e){var{preview:t,src:a,previewClassName:n,snippet:r,color:l="gray",min:g=!1}=e,f=Object(s.useRef)(),h=Object(i.h)(0),O=Object(s.useRef)(),{0:v,1:k}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{h.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),c("div",{className:"relative mb-8"},c("div",{ref:f,className:"relative rounded-t-xl ".concat(u[l])},c("div",{className:g?"md:w-88":void 0},c(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(h,e=>-e)}},t?c("div",{className:Object(o.a)("rounded-t-xl",n,p[l],{"p-10":!n}),dangerouslySetInnerHTML:{__html:t}}):c(m,{src:a,className:Object(o.a)("w-full rounded-t-xl",p[l],{"pointer-events-none":v})}))),c("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(i.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(g?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[l]),style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(b,{color:l,snippet:r}))}},vRWG:function(e,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return m}));var n=a("wx14"),s=a("q1tI"),r=a.n(s),o=a("ekQu"),i=a("8Kt/"),c=a.n(i),l=a("nOHt"),p=a("ap0H"),u=a("1Q1k"),d=r.a.createElement;function m(e){var t=Object(l.useRouter)();return d(r.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(c.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(o.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("rePB"),s=a("q1tI"),r=a.n(s),o=a("AOjV"),i=a("AI3G"),c=a("Zb5r"),l=r.a.createElement;function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e){var{plugin:t,name:a}=e,n=Object(i.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(e,t,a)=>"".concat(t," ").concat(a.toLowerCase())),l("div",{className:"prose"},l("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",l("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"properties":"property"," to ",l("code",null,"false")," in the"," ",l("code",null,"corePlugins")," section of your config file:"),l(o.a,{path:"corePlugins",before:"...",add:n.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["UYGK",0,2,6,1,3,4,5,7]]]);