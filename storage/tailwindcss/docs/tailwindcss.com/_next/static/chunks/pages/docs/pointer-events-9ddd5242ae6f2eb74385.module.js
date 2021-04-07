(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[148],{"5xSE":function(n,t,a){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,t,a){"use strict";a.d(t,"a",(function(){return i}));var e=a("q1tI"),s=a.n(e),o=a("98BF"),p=a("Zb5r"),c=a("AOjV"),r=s.a.createElement;function i(n){var{plugin:t,name:a}=n,e=o.defaultConfig.variants[t]||["responsive"];a=a||t.replace(/([a-z])([A-Z])/g,(n,t,a)=>"".concat(t," ").concat(a.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(n=>!e.includes(n)).slice(0,2),i="By default, ".concat(e.length?"only ".concat(Object(p.a)(e).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(a," utilities.");return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:i}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,t)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",e.length>0?"also ":"","generate"," ",Object(p.a)(s)," variants:"),r(c.a,{path:"variants.extend",before:"...",add:{[t]:s}}))}},AOjV:function(n,t,a){"use strict";a.d(t,"a",(function(){return l}));var e=a("q1tI"),s=a.n(e),o=(a("Btb4"),a("AI3G")),p=a("iuhU"),c=s.a.createElement;function r(n){var{value:t}=n;return"string"===typeof t?c("span",{className:"token string"},"'",t,"'"):Array.isArray(t)?c(s.a.Fragment,null,c("span",{className:"token punctuation"},"["),t.map((n,a)=>c(e.Fragment,{key:a},c(r,{value:n}),a===t.length-1?null:c("span",{className:"token punctuation"},", "))),c("span",{className:"token punctuation"},"]")):"boolean"===typeof t?c("span",{className:"token boolean"},t.toString()):t.toString()}function i(n){var{edits:t,indent:a="",type:s="inserted"}=n;return c("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(t).map((n,o)=>{return c(e.Fragment,{key:o},c("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=n)?i:"'".concat(i,"'"),c("span",{className:"token operator"},":")," ",c(r,{value:t[n]}),c("span",{className:"token punctuation"},","),"\n");var i}))}function l(n){var{path:t,add:a,remove:s,before:p,after:r}=n;return t="string"===typeof t?t.split("."):t,c("div",{className:"prose"},c("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},c("pre",{className:"language-diff"},c("code",{className:"language-diff"},c("span",{className:"token unchanged"},"  ",c("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",c("span",{className:"token punctuation"},"."),c("span",{className:"token property-access"},"exports")," ",c("span",{className:"token operator"},"=")," ",c("span",{className:"token punctuation"},"{"),"\n",t.map((n,t)=>c(e.Fragment,{key:t},"  ","  ".repeat(t+1),n,c("span",{className:"token operator"},":")," ",c("span",{className:"token punctuation"},"{"),"\n")),p&&Object(o.a)(p).map((n,a)=>c(e.Fragment,{key:a},"  ".repeat(t.length+2),c("span",{className:"token comment"},"// ".concat(n)),"\n"))),s&&c(i,{edits:s,type:"deleted",indent:"  ".repeat(t.length+1)}),a&&c(i,{edits:a,type:"inserted",indent:"  ".repeat(t.length+1)}),c("span",{className:"token unchanged"},r&&Object(o.a)(r).map(n=>"".concat("  ".repeat(t.length+2)).concat(n,"\n")),t.map((n,a)=>c(e.Fragment,{key:a},"  ","  ".repeat(t.length-a),"}\n")),"  }")))))}},BGd1:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({addUtilities:n,variants:t}){n({".pointer-events-none":{"pointer-events":"none"},".pointer-events-auto":{"pointer-events":"auto"}},t("pointerEvents"))}}},Btb4:function(n,t,a){"use strict";const e=a("5xSE"),s=a("p+I8"),o=a("GAX2").default;n.exports=(n,t,a)=>{const p=[];return function n(t,a,c){let r;(a=a||{}).indent=a.indent||"\t",c=c||"",r=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=n=>{if(void 0===a.inlineCharacterLimit)return n;const t=n.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:n.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),c).replace(new RegExp(r.indent,"g"),c+a.indent)};if(-1!==p.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||e(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";p.push(t);const e="["+r.newLine+t.map((e,s)=>{const o=t.length-1===s?r.newLine:","+r.newLineOrSpace;let p=n(e,a,c+a.indent);return a.transform&&(p=a.transform(t,s,p)),r.indent+p+o}).join("")+r.pad+"]";return p.pop(),i(e)}if(s(t)){let e=Object.keys(t).concat(o(t));if(a.filter&&(e=e.filter(n=>a.filter(t,n))),0===e.length)return"{}";p.push(t);const s="{"+r.newLine+e.map((s,o)=>{const p=e.length-1===o?r.newLine:","+r.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:n(s,a);let g=n(t[s],a,c+a.indent);return a.transform&&(g=a.transform(t,s,g)),r.indent+String(u)+": "+g+p}).join("")+r.pad+"}";return p.pop(),i(s)}return t=String(t).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(n,t,a)}},GAX2:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=n=>Object.getOwnPropertySymbols(n).filter(t=>Object.prototype.propertyIsEnumerable.call(n,t))},Zb5r:function(n,t,a){"use strict";function e(n){return n.reduce((t,a,e)=>0===e?a:e===n.length-1?"".concat(t," and ").concat(a):"".concat(t,", ").concat(a),"")}a.d(t,"a",(function(){return e}))},ap0H:function(n,t,a){"use strict";a.d(t,"a",(function(){return r}));var e=a("q1tI"),s=a.n(e),o=a("8Kt/"),p=a.n(o),c=s.a.createElement;function r(n){var{suffix:t,children:a}=n,e=a+(t?" - ".concat(t):"");return c(p.a,null,c("title",{key:"title"},e),c("meta",{key:"twitter:title",name:"twitter:title",content:e}),c("meta",{key:"og:title",property:"og:title",content:e}))}},n3tP:function(n,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/pointer-events",function(){return a("tWwp")}])},"p+I8":function(n,t,a){"use strict";n.exports=function(n){var t=typeof n;return null!==n&&("object"===t||"function"===t)}},pOT7:function(n,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return b}));var e=a("wx14"),s=a("q1tI"),o=a.n(s),p=a("iuhU"),c=a("ZMKu"),r=o.a.createElement,i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},g={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(n){var t=Object(s.useRef)(),{0:a,1:o}=Object(s.useState)(!1),{0:p,1:c}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(a){var n=new window.ResizeObserver(e);return e(),n.observe(t.current.contentDocument.body),()=>{n.disconnect()}}function e(){c({height:t.current.contentDocument.body.scrollHeight})}},[a]),r("iframe",Object(e.a)({},n,{ref:t,onLoad:()=>o(!0),style:p}))}function k(n){var{color:t,snippet:a}=n;return r("div",{className:Object(p.a)("overflow-hidden rounded-b-xl",i[t],{"bg-gray-800":!i[t]})},r("pre",{className:Object(p.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[t]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function m(n){var{preview:t,src:a,snippet:e,previewClassName:s,color:o="gray"}=n;return r("div",{className:"relative overflow-hidden mb-8"},t?r("div",{className:Object(p.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:t}}):r(d,{src:a,className:Object(p.a)("w-full rounded-t-xl",l[o])}),r(k,{color:o,snippet:e}))}function b(n){var{preview:t,src:a,previewClassName:e,snippet:o,color:i="gray",min:m=!1}=n,b=Object(s.useRef)(),f=Object(c.h)(0),v=Object(s.useRef)(),{0:h,1:w}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var n=new window.ResizeObserver(()=>{f.set(0)});return n.observe(b.current),()=>{n.disconnect()}},[]),r("div",{className:"relative mb-8"},r("div",{ref:b,className:"relative rounded-t-xl ".concat(u[i])},r("div",{className:m?"md:w-88":void 0},r(c.d.div,{className:"relative",style:{marginRight:Object(c.i)(f,n=>-n)}},t?r("div",{className:Object(p.a)("rounded-t-xl",e,l[i],{"p-10":!e}),dangerouslySetInnerHTML:{__html:t}}):r(d,{src:a,className:Object(p.a)("w-full rounded-t-xl",l[i],{"pointer-events-none":h})}))),r("div",{ref:v,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(c.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:v,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(m?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),w(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),w(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(g[i]),style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(k,{color:i,snippet:o}))}},tWwp:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return v}));var e=a("wx14"),s=a("Ff2n"),o=a("q1tI"),p=a.n(o),c=a("7ljp"),r=(a("YFqc"),a("tc9R")),i=a("pOT7"),l=a("vRWG"),u=a("I6Nb"),g=a("BGd1"),d=a.n(g),k=a("8C7G"),m=a("wH44"),b=(p.a.createElement,{Layout:l.DocumentationLayout,classes:{plugin:d()},meta:{title:"Pointer Events",description:"Utilities for controlling whether an element responds to pointer events.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),f=u.ContentsLayout;function v(n){var{components:t}=n,a=Object(s.a)(n,["components"]);return Object(c.a)(f,Object(e.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"pointer-events-auto")," to revert to the default browser behavior for pointer events (like ",Object(c.a)("inlineCode",{parentName:"p"},":hover")," and ",Object(c.a)("inlineCode",{parentName:"p"},"click"),")."),Object(c.a)("p",null,"Use ",Object(c.a)("inlineCode",{parentName:"p"},"pointer-events-none"),' to make an element ignore pointer events. The pointer events will still trigger on child elements and pass-through to elements that are "beneath" the target.')),Object(c.a)(i.a,{preview:'\n  <div class="max-w-sm">\n    <p class="text-gray-700">Try clicking the caret icon to open the dropdown</p>\n\n    <p class="mt-4 text-sm text-gray-600">pointer-events-auto (event captured)</p>\n    <div class="mt-1 relative">\n      <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">\n        <option>Indiana</option>\n        <option>Michigan</option>\n        <option>Ohio</option>\n      </select>\n      <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-purple-300 rounded-r pointer-events-auto">\n        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>\n      </div>\n    </div>\n\n    <p class="mt-4 text-sm text-gray-600">pointer-events-none (event passes through)</p>\n    <div class="mt-1 relative">\n      <select class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">\n        <option>Indiana</option>\n        <option>Michigan</option>\n        <option>Ohio</option>\n      </select>\n      <div class="absolute flex inset-y-0 items-center px-3 right-0 text-gray-700 bg-purple-300 rounded-r pointer-events-none">\n        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"></path></svg>\n      </div>\n    </div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointer-events-auto ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-current h-4 w-4<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 20 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>relative<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>select</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>option</span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>option</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>select</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pointer-events-none ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>svg</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>fill-current h-4 w-4<span class="token punctuation">"</span></span> <span class="token attr-name">xmlns</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>http://www.w3.org/2000/svg<span class="token punctuation">"</span></span> <span class="token attr-name">viewBox</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>0 0 20 20<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>path</span> <span class="token attr-name">d</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>path</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>svg</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(r.a,{level:3,id:"variants",toc:!0},"Variants")),Object(c.a)(k.a,{plugin:"pointerEvents",name:"pointer event",mdxType:"Variants"}),Object(c.a)("div",{className:"prose"},Object(c.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(c.a)(m.a,{plugin:"pointerEvents",name:"pointer event",mdxType:"Disabling"}))}v.isMDXComponent=!0,v.layoutProps=b},vRWG:function(n,t,a){"use strict";a.r(t),a.d(t,"DocumentationLayout",(function(){return d}));var e=a("wx14"),s=a("q1tI"),o=a.n(s),p=a("ekQu"),c=a("8Kt/"),r=a.n(c),i=a("nOHt"),l=a("ap0H"),u=a("1Q1k"),g=o.a.createElement;function d(n){var t=Object(i.useRouter)();return g(o.a.Fragment,null,g(l.a,{suffix:"/"===t.pathname?void 0:"Tailwind CSS"},n.layoutProps.meta.metaTitle||n.layoutProps.meta.title),g(r.a,null,g("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),g("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),g(p.b,Object(e.a)({nav:u.a},n)))}},wH44:function(n,t,a){"use strict";a.d(t,"a",(function(){return g}));var e=a("rePB"),s=a("q1tI"),o=a.n(s),p=a("AOjV"),c=a("AI3G"),r=a("Zb5r"),i=o.a.createElement;function l(n,t){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);t&&(e=e.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),a.push.apply(a,e)}return a}function u(n){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(e.a)(n,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))}))}return n}function g(n){var{plugin:t,name:a}=n,e=Object(c.a)(t);return a=a||t.replace(/([a-z])([A-Z])/g,(n,t,a)=>"".concat(t," ").concat(a.toLowerCase())),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(e.map(n=>"<code>".concat(n,"</code>")))}})," ",e.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(p.a,{path:"corePlugins",before:"...",add:e.reduce((n,t)=>u(u({},n),{},{[t]:!1}),{})}))}}},[["n3tP",0,2,6,1,3,4,5,7]]]);