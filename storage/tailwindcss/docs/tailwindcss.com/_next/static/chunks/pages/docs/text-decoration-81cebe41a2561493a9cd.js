_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[164],{"2cYW":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/text-decoration",function(){return t("unN4")}])},"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),r=t("AOjV"),i=s.a.createElement;function p({plugin:e,name:a}){const t=o.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(c.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(c.a)(n)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=(t("Btb4"),t("AI3G")),c=t("iuhU"),r=s.a.createElement;function i({value:e}){return"string"===typeof e?r("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),e.map(((a,t)=>r(n.Fragment,{key:t},r(i,{value:a}),t===e.length-1?null:r("span",{className:"token punctuation"},", ")))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof e?r("span",{className:"token boolean"},e.toString()):e.toString()}function p({edits:e,indent:a="",type:t="inserted"}){return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,o)=>{return r(n.Fragment,{key:o},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(p=s)?p:`'${p}'`,r("span",{className:"token operator"},":")," ",r(i,{value:e[s]}),r("span",{className:"token punctuation"},","),"\n");var p})))}function l({path:e,add:a,remove:t,before:s,after:c}){return e="string"===typeof e?e.split("."):e,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((a,t)=>r(n.Fragment,{key:t},"  ".repeat(e.length+2),r("span",{className:"token comment"},`// ${a}`),"\n")))),t&&r(p,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&r(p,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},c&&Object(o.a)(c).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,a,t)=>{const c=[];return function e(a,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const n="["+i.newLine+a.map(((n,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,t,r+t.indent);return t.transform&&(c=t.transform(a,s,c)),i.indent+c+o})).join("")+i.pad+"]";return c.pop(),p(n)}if(s(a)){let n=Object.keys(a).concat(o(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";c.push(a);const s="{"+i.newLine+n.map(((s,o)=>{const c=n.length-1===o?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let d=e(a[s],t,r+t.indent);return t.transform&&(d=t.transform(a,s,d)),i.indent+String(u)+": "+d+c})).join("")+i.pad+"}";return c.pop(),p(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},msGM:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:e,variants:a}){e({".underline":{"text-decoration":"underline"},".line-through":{"text-decoration":"line-through"},".no-underline":{"text-decoration":"none"}},a("textDecoration"))}}},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return g})),t.d(a,"b",(function(){return O}));var n=t("HALo"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),r=t("ZMKu"),i=o.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const a=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){r({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function b({color:e,snippet:a}){return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[s])}),i(b,{color:s,snippet:t}))}function O({preview:e,src:a,previewClassName:t,snippet:n,color:o="gray",min:p=!1}){const g=Object(s.useRef)(),O=Object(r.h)(0),h=Object(s.useRef)(),{0:j,1:f}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{O.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:g,className:`relative rounded-t-xl ${u[o]}`},i("div",{className:p?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(O,(e=>-e))}},e?i("div",{className:Object(c.a)("rounded-t-xl",t,l[o],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[o],{"pointer-events-none":j})}))),i("div",{ref:h,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:O,dragMomentum:!1,dragElastic:0,dragConstraints:h,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:O},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(b,{color:o,snippet:n}))}},unN4:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),d=t("vRWG"),m=t("I6Nb"),b=t("msGM"),g=t.n(b),O=t("8C7G"),h=t("wH44");c.a.createElement;const j={Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"Text Decoration",description:"Utilities for controlling the decoration of text.",features:{responsive:!0,customizable:!1,hover:!0,focus:!0}},tableOfContents:[{title:"Underline",slug:"underline",children:[]},{title:"Line Through",slug:"line-through",children:[]},{title:"No Underline",slug:"no-underline",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},f=m.ContentsLayout;function N(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(f,Object(n.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"underline",toc:!0},"Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility to underline text.")),Object(r.a)(u.a,{preview:'\n  <p class="underline text-xl text-fuchsia-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"line-through",toc:!0},"Line Through"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"line-through")," utility to strike out text.")),Object(r.a)(u.a,{preview:'\n  <p class="line-through text-xl text-rose-600">The quick brown fox jumped over the lazy dog.</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">line-through</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>The quick brown fox ...<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"no-underline",toc:!0},"No Underline"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"no-underline")," utility to remove underline or line-through styling.")),Object(r.a)(u.a,{preview:'\n  <div class="text-center">\n    <a href="#" class="no-underline text-purple-600 text-xl">Link with no underline</a>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">no-underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link with no underline<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the text decoration of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  The quick brown fox jumped over the lazy dog.\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"hover",toc:!0},"Hover"),Object(r.a)("p",null,"To control the text decoration of an element on hover, add the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"hover:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on hover.\t")),Object(r.a)(u.a,{preview:'\t\n  <a href="#hover" class="no-underline hover:underline text-indigo-600 text-xl">Link</a>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>no-underline <span class="code-highlight bg-code-highlight">hover:underline</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Link<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4",color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"hover:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"a")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"href"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"#",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:no-underline ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:hover:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Link",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"a"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"focus",toc:!0},"Focus"),Object(r.a)("p",null,"To control the text decoration of an element on focus, add the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing text decoration utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"focus:underline")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"underline")," utility on focus.\t")),Object(r.a)(u.a,{preview:'\t\n  <div class="max-w-xs w-full mx-auto">\t\n    <input class="bg-white focus:underline focus:shadow-outline text-emerald-900 appearance-none inline-block w-full border border-emerald-300 rounded py-3 px-4 focus:outline-none" value="Focus me" placeholder="Focus me">\t\n  </div>\t\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>input</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">focus:underline</span> ...<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Focus me<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(r.a)("em",{parentName:"p"},"before")," the ",Object(r.a)("inlineCode",{parentName:"p"},"focus:")," prefix.\t"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"input")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:focus:underline")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'))," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"value"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"Focus me",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\t"))),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(O.a,{plugin:"textDecoration",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(h.a,{plugin:"textDecoration",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("cpVT"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),p=o.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d({plugin:e,name:a}){const t=Object(r.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["2cYW",0,2,6,1,3,4,5,7]]]);