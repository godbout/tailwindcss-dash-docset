(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[82],{"5xSE":function(e,t,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var a=n("q1tI"),s=n.n(a),o=n("98BF"),c=n("Zb5r"),i=n("AOjV"),l=s.a.createElement;function r(e){var{plugin:t,name:n}=e,a=o.defaultConfig.variants[t]||["responsive"];n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!a.includes(e)).slice(0,2),r="By default, ".concat(a.length?"only ".concat(Object(c.a)(a).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(n," utilities.");return l("div",{className:"prose"},l("p",{dangerouslySetInnerHTML:{__html:r}}),l("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",l("code",null,t)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),l(i.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},ABV8:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:e,variants:t}){e({".flex-row":{"flex-direction":"row"},".flex-row-reverse":{"flex-direction":"row-reverse"},".flex-col":{"flex-direction":"column"},".flex-col-reverse":{"flex-direction":"column-reverse"}},t("flexDirection"))}}},AOjV:function(e,t,n){"use strict";n.d(t,"a",(function(){return p}));var a=n("q1tI"),s=n.n(a),o=(n("Btb4"),n("AI3G")),c=n("iuhU"),i=s.a.createElement;function l(e){var{value:t}=e;return"string"===typeof t?i("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?i(s.a.Fragment,null,i("span",{className:"token punctuation"},"["),t.map((e,n)=>i(a.Fragment,{key:n},i(l,{value:e}),n===t.length-1?null:i("span",{className:"token punctuation"},", "))),i("span",{className:"token punctuation"},"]")):"boolean"===typeof t?i("span",{className:"token boolean"},t.toString()):t.toString()}function r(e){var{edits:t,indent:n="",type:s="inserted"}=e;return i("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((e,o)=>{return i(a.Fragment,{key:o},i("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:"'".concat(r,"'"),i("span",{className:"token operator"},":")," ",i(l,{value:t[e]}),i("span",{className:"token punctuation"},","),"\n");var r}))}function p(e){var{path:t,add:n,remove:s,before:c,after:l}=e;return t="string"===typeof t?t.split("."):t,i("div",{className:"prose"},i("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  ",i("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",i("span",{className:"token punctuation"},"."),i("span",{className:"token property-access"},"exports")," ",i("span",{className:"token operator"},"=")," ",i("span",{className:"token punctuation"},"{"),"\n",t.map((e,t)=>i(a.Fragment,{key:t},"  ","  ".repeat(t+1),e,i("span",{className:"token operator"},":")," ",i("span",{className:"token punctuation"},"{"),"\n")),c&&Object(o.a)(c).map((e,n)=>i(a.Fragment,{key:n},"  ".repeat(t.length+2),i("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&i(r,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),n&&i(r,{edits:n,type:"inserted",indent:"  ".repeat(t.length+1)}),i("span",{className:"token unchanged"},l&&Object(o.a)(l).map(e=>"".concat("  ".repeat(t.length+2)).concat(e,"\n")),t.map((e,n)=>i(a.Fragment,{key:n},"  ","  ".repeat(t.length-n),"}\n")),"  }")))))}},Btb4:function(e,t,n){"use strict";const a=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;e.exports=(e,t,n)=>{const c=[];return function e(t,n,i){let l;(n=n||{}).indent=n.indent||"\t",i=i||"",l=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:i,indent:i+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===n.inlineCharacterLimit)return e;const t=e.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return t.length<=n.inlineCharacterLimit?t:e.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),i).replace(new RegExp(l.indent,"g"),i+n.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||a(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const a="["+l.newLine+t.map((a,s)=>{const o=t.length-1===s?l.newLine:","+l.newLineOrSpace;let c=e(a,n,i+n.indent);return n.transform&&(c=n.transform(t,s,c)),l.indent+c+o}).join("")+l.pad+"]";return c.pop(),r(a)}if(s(t)){let a=Object.keys(t).concat(o(t));if(n.filter&&(a=a.filter(e=>n.filter(t,e))),0===a.length)return"{}";c.push(t);const s="{"+l.newLine+a.map((s,o)=>{const c=a.length-1===o?l.newLine:","+l.newLineOrSpace,r="symbol"===typeof s,p=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||p?s:e(s,n);let d=e(t[s],n,i+n.indent);return n.transform&&(d=n.transform(t,s,d)),l.indent+String(u)+": "+d+c}).join("")+l.pad+"}";return c.pop(),r(s)}return t=String(t).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===n.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,n)}},GAX2:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter(t=>Object.prototype.propertyIsEnumerable.call(e,t))},GuPV:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/flex-direction",function(){return n("sdhg")}])},Zb5r:function(e,t,n){"use strict";function a(e){return e.reduce((t,n,a)=>0===a?n:a===e.length-1?"".concat(t," and ").concat(n):"".concat(t,", ").concat(n),"")}n.d(t,"a",(function(){return a}))},ap0H:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var a=n("q1tI"),s=n.n(a),o=n("8Kt/"),c=n.n(o),i=s.a.createElement;function l(e){var{suffix:t,children:n}=e,a=n+(t?" - ".concat(t):"");return i(c.a,null,i("title",{key:"title"},a),i("meta",{key:"twitter:title",name:"twitter:title",content:a}),i("meta",{key:"og:title",property:"og:title",content:a}))}},"p+I8":function(e,t,n){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return f}));var a=n("wx14"),s=n("q1tI"),o=n.n(s),c=n("iuhU"),i=n("ZMKu"),l=o.a.createElement,r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},p={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(e){var t=Object(s.useRef)(),{0:n,1:o}=Object(s.useState)(!1),{0:c,1:i}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(n){var e=new window.ResizeObserver(a);return a(),e.observe(t.current.contentDocument.body),()=>{e.disconnect()}}function a(){i({height:t.current.contentDocument.body.scrollHeight})}},[n]),l("iframe",Object(a.a)({},e,{ref:t,onLoad:()=>o(!0),style:c}))}function m(e){var{color:t,snippet:n}=e;return l("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",r[t],{"bg-gray-800":!r[t]})},l("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[t]})},l("code",{className:"language-html",dangerouslySetInnerHTML:{__html:n}})))}function b(e){var{preview:t,src:n,snippet:a,previewClassName:s,color:o="gray"}=e;return l("div",{className:"relative overflow-hidden mb-8"},t?l("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",p[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):l(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[o])}),l(m,{color:o,snippet:a}))}function f(e){var{preview:t,src:n,previewClassName:a,snippet:o,color:r="gray",min:b=!1}=e,f=Object(s.useRef)(),v=Object(i.h)(0),k=Object(s.useRef)(),{0:h,1:x}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{v.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),l("div",{className:"relative mb-8"},l("div",{ref:f,className:"relative rounded-t-xl ".concat(u[r])},l("div",{className:b?"md:w-88":void 0},l(i.d.div,{className:"relative",style:{marginRight:Object(i.i)(v,e=>-e)}},t?l("div",{className:Object(c.a)("rounded-t-xl",a,p[r],{"p-10":!a}),dangerouslySetInnerHTML:{__html:t}}):l(g,{src:n,className:Object(c.a)("w-full rounded-t-xl",p[r],{"pointer-events-none":h})}))),l("div",{ref:k,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},l(i.d.div,{drag:"x",_dragX:v,dragMomentum:!1,dragElastic:0,dragConstraints:k,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:v},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),x(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),x(!1)}},l("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},l("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(d[r]),style:{width:"0.4375rem"}},l("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),l(m,{color:r,snippet:o}))}},sdhg:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return x}));var a=n("wx14"),s=n("Ff2n"),o=n("q1tI"),c=n.n(o),i=n("7ljp"),l=n("YFqc"),r=n.n(l),p=n("tc9R"),u=n("pOT7"),d=n("vRWG"),g=n("I6Nb"),m=n("ABV8"),b=n.n(m),f=n("8C7G"),v=n("wH44"),k=(c.a.createElement,{Layout:d.DocumentationLayout,classes:{plugin:b()},meta:{title:"Flex Direction",description:"Utilities for controlling the direction of flex items.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Row",slug:"row",children:[]},{title:"Row reversed",slug:"row-reversed",children:[]},{title:"Column",slug:"column",children:[]},{title:"Column reversed",slug:"column-reversed",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=g.ContentsLayout;function x(e){var{components:t}=e,n=Object(s.a)(e,["components"]);return Object(i.a)(h,Object(a.a)({},k,n,{components:t,mdxType:"MDXLayout"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"row",toc:!0},"Row"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row")," to position flex items horizontally in the same direction as text:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-row space-x-4">\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-amber-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"amber",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"row-reversed",toc:!0},"Row reversed"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row-reverse")," to position flex items horizontally in the opposite direction:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-row-reverse space-x-reverse space-x-4">\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="w-16 h-16 rounded-md bg-light-blue-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-row-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"lightBlue",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"column",toc:!0},"Column"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-col")," to position flex items vertically:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-col space-y-4">\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-emerald-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"emerald",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"column-reversed",toc:!0},"Column reversed"),Object(i.a)("p",null,"Use ",Object(i.a)("inlineCode",{parentName:"p"},"flex-col-reverse")," to position flex items vertically in the opposite direction:")),Object(i.a)(u.a,{preview:'\n  <div class="flex flex-col-reverse space-y-reverse space-y-4">\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">1</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">2</div>\n    <div class="h-16 rounded-md bg-rose-500 text-white flex items-center justify-center text-2xl font-extrabold">3</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>flex <span class="code-highlight bg-code-highlight">flex-col-reverse</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-4",color:"rose",min:!1}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(i.a)("p",null,"To apply a flex direction utility only at a specific breakpoint, add a ",Object(i.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to the existing class name. For example, adding the class ",Object(i.a)("inlineCode",{parentName:"p"},"md:flex-row")," to an element would apply the ",Object(i.a)("inlineCode",{parentName:"p"},"flex-row")," utility at medium screen sizes and above."),Object(i.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(i.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(i.a)("a",null,"Responsive Design"))," documentation."),Object(i.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(i.a)("pre",Object(a.a)({parentName:"div"},{className:"language-html"}),Object(i.a)("code",Object(a.a)({parentName:"pre"},{className:"language-html"}),"  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token attr-value"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"'),"flex flex-col ",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:flex-row")," ...",Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n  ",Object(i.a)("span",Object(a.a)({parentName:"code"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token tag"}),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(i.a)("span",Object(a.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(i.a)(p.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(i.a)(p.a,{level:3,id:"variants",toc:!0},"Variants")),Object(i.a)(f.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Variants"}),Object(i.a)("div",{className:"prose"},Object(i.a)(p.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(i.a)(v.a,{plugin:"flexDirection",name:"flex-direction",mdxType:"Disabling"}))}x.isMDXComponent=!0,x.layoutProps=k},vRWG:function(e,t,n){"use strict";n.r(t),n.d(t,"DocumentationLayout",(function(){return g}));var a=n("wx14"),s=n("q1tI"),o=n.n(s),c=n("ekQu"),i=n("8Kt/"),l=n.n(i),r=n("nOHt"),p=n("ap0H"),u=n("1Q1k"),d=o.a.createElement;function g(e){var t=Object(r.useRouter)();return d(o.a.Fragment,null,d(p.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),d(l.a,null,d("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),d("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),d(c.b,Object(a.a)({nav:u.a},e)))}},wH44:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));var a=n("rePB"),s=n("q1tI"),o=n.n(s),c=n("AOjV"),i=n("AI3G"),l=n("Zb5r"),r=o.a.createElement;function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(a.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e){var{plugin:t,name:n}=e,a=Object(i.a)(t);return n=n||t.replace(/([a-z])([A-Z])/g,(e,t,n)=>"".concat(t," ").concat(n.toLowerCase())),r("div",{className:"prose"},r("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(a.map(e=>"<code>".concat(e,"</code>")))}})," ",a.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(c.a,{path:"corePlugins",before:"...",add:a.reduce((e,t)=>u(u({},e),{},{[t]:!1}),{})}))}}},[["GuPV",0,2,6,1,3,4,5,7]]]);