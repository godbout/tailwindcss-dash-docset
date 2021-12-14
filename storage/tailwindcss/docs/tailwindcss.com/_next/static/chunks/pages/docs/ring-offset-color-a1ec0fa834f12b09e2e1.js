_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[148],{"5xSE":function(e,t,a){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a("q1tI"),s=a.n(n),o=a("98BF"),c=a("Zb5r"),r=a("AOjV"),i=s.a.createElement;function p({plugin:e,name:t}){const a=o.defaultConfig.variants[e]||["responsive"];t=t||e.replace(/([a-z])([A-Z])/g,((e,t,a)=>`${t} ${a.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!a.includes(e))).slice(0,2),s=`By default, ${a.length?`only ${Object(c.a)(a).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${t} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",a.length>0?"also ":"","generate"," ",Object(c.a)(n)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},"9Jru":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;const n=e=>Object.assign({},...Object.entries(e).flatMap((([e,t])=>"object"==typeof t?Object.entries(n(t)).map((([t,a])=>({[e+("DEFAULT"===t?"":`-${t}`)]:a}))):[{[`${e}`]:t}])));var s=n;t.default=s},AOjV:function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a("q1tI"),s=a.n(n),o=(a("Btb4"),a("AI3G")),c=a("iuhU"),r=s.a.createElement;function i({value:e}){return"string"===typeof e?r("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),e.map(((t,a)=>r(n.Fragment,{key:a},r(i,{value:t}),a===e.length-1?null:r("span",{className:"token punctuation"},", ")))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof e?r("span",{className:"token boolean"},e.toString()):e.toString()}function p({edits:e,indent:t="",type:a="inserted"}){return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===a,"deleted-sign deleted":"inserted"!==a})},Object.keys(e).map(((s,o)=>{return r(n.Fragment,{key:o},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===a,deleted:"inserted"!==a})},"inserted"===a?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(p=s)?p:`'${p}'`,r("span",{className:"token operator"},":")," ",r(i,{value:e[s]}),r("span",{className:"token punctuation"},","),"\n");var p})))}function l({path:e,add:t,remove:a,before:s,after:c}){return e="string"===typeof e?e.split("."):e,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",e.map(((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(t+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((t,a)=>r(n.Fragment,{key:a},"  ".repeat(e.length+2),r("span",{className:"token comment"},`// ${t}`),"\n")))),a&&r(p,{edits:a,type:"deleted",indent:"  ".repeat(e.length+1)}),t&&r(p,{edits:t,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},c&&Object(o.a)(c).map((t=>`${"  ".repeat(e.length+2)}${t}\n`)),e.map(((t,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(e.length-a),"}\n"))),"  }")))))}},Btb4:function(e,t,a){"use strict";const n=a("5xSE"),s=a("p+I8"),o=a("GAX2").default;e.exports=(e,t,a)=>{const c=[];return function e(t,a,r){let i;(a=a||{}).indent=a.indent||"\t",r=r||"",i=void 0===a.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+a.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===a.inlineCharacterLimit)return e;const t=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return t.length<=a.inlineCharacterLimit?t:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+a.indent)};if(-1!==c.indexOf(t))return'"[Circular]"';if(null===t||void 0===t||"number"===typeof t||"boolean"===typeof t||"function"===typeof t||"symbol"===typeof t||n(t))return String(t);if(t instanceof Date)return`new Date('${t.toISOString()}')`;if(Array.isArray(t)){if(0===t.length)return"[]";c.push(t);const n="["+i.newLine+t.map(((n,s)=>{const o=t.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,a,r+a.indent);return a.transform&&(c=a.transform(t,s,c)),i.indent+c+o})).join("")+i.pad+"]";return c.pop(),p(n)}if(s(t)){let n=Object.keys(t).concat(o(t));if(a.filter&&(n=n.filter((e=>a.filter(t,e)))),0===n.length)return"{}";c.push(t);const s="{"+i.newLine+n.map(((s,o)=>{const c=n.length-1===o?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,a);let d=e(t[s],a,r+a.indent);return a.transform&&(d=a.transform(t,s,d)),i.indent+String(u)+": "+d+c})).join("")+i.pad+"}";return c.pop(),p(s)}return t=String(t).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===a.singleQuotes?`"${t=t.replace(/"/g,'\\"')}"`:`'${t=t.replace(/\\?'/g,"\\'")}'`}(e,t,a)}},DfYV:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){return function({matchUtilities:e,theme:t,variants:a}){e({"ring-offset":e=>({"--tw-ring-offset-color":(0,s.default)(e)})},{values:(0,n.default)(t("ringOffsetColor")),variants:a("ringOffsetColor"),type:"color"})}};var n=o(a("9Jru")),s=o(a("OiSs"));function o(e){return e&&e.__esModule?e:{default:e}}},GAX2:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=e=>Object.getOwnPropertySymbols(e).filter((t=>Object.prototype.propertyIsEnumerable.call(e,t)))},IdEg:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return h}));var n=a("HALo"),s=a("dhJC"),o=a("q1tI"),c=a.n(o),r=a("7ljp"),i=a("YFqc"),p=a.n(i),l=a("tc9R"),u=a("pOT7"),d=a("vRWG"),b=a("I6Nb"),m=a("DfYV"),g=a.n(m),f=a("8C7G"),O=a("wH44");c.a.createElement;const j={Layout:d.DocumentationLayout,classes:{plugin:g(),transformProperties:({selector:e,properties:t})=>(t["box-shadow"]="0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color), var(--tw-ring-shadow)",t)},meta:{title:"Ring Offset Color",description:"Utilities for setting the color of outline ring offsets."},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},N=b.ContentsLayout;function h(e){let{components:t}=e,a=Object(s.a)(e,["components"]);return Object(r.a)(N,Object(n.a)({},j,a,{components:t,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-{color}")," utilities to change the color of a ring offset. Usually this is done to try and match the offset to the parent background color, since true box-shadow offsets aren\u2019t actually possible in CSS.")),Object(r.a)(u.a,{preview:'\n  <div class="bg-violet-100 grid grid-cols-1 gap-6 justify-items-center p-8 ">\n    <p class="font-semibold text-violet-600">bg-purple-100</p>\n    <button tabindex="-1" class="focus:outline-none text-sm px-5 py-3 rounded-md font-semibold text-white bg-violet-500 ring ring-violet-600 ring-offset-4 ring-offset-violet-100">\n      ring-offset-purple-100\n    </button>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... <span class="code-highlight bg-code-highlight">bg-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>... ring ring-purple-600 <span class="code-highlight bg-code-highlight">ring-offset-4</span> <span class="code-highlight bg-code-highlight">ring-offset-purple-100</span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    ring-offset-purple-100\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-0",color:"violet",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)("hr",null),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control the ring offset color at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ring offset color utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:ring-offset-blue-500")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"ring-offset-blue-500")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ring-2 ring-offset-2 ring-offset-blue-300 ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:ring-offset-blue-500"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)("hr",null),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"You can customize which ring offset color utilities are generated by customizing your color palette under the ",Object(r.a)("inlineCode",{parentName:"p"},"colors")," key in the ",Object(r.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      gray",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"blueGray"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      indigo",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"indigo"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      red",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"rose"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      yellow",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"yellow"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"If you\u2019d like to customize only the ring offset color utilities without affecting your global color palette, use the ",Object(r.a)("inlineCode",{parentName:"p"},"ringOffsetColor")," key instead:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword"}),"const")," colors ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"require"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"("),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'tailwindcss/colors'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),")"),"\n\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    ringOffsetColor",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n      white",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"white"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n      pink",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," colors",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"fuchsia"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n    ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(f.a,{plugin:"ringOffsetColor",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(O.a,{plugin:"ringOffsetColor",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=j},LY0y:function(e,t){(function(t){e.exports=function(){var e={880:function(e){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}}},a={};function n(t){if(a[t])return a[t].exports;var s=a[t]={exports:{}},o=!0;try{e[t](s,s.exports,n),o=!1}finally{o&&delete a[t]}return s.exports}return n.ab=t+"/",n(880)}()}).call(this,"/")},OiSs:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return s.default.isFunction(e)?e({}):e};var n,s=(n=a("LvDl"))&&n.__esModule?n:{default:n}},Zb5r:function(e,t,a){"use strict";function n(e){return e.reduce(((t,a,n)=>0===n?a:n===e.length-1?`${t} and ${a}`:`${t}, ${a}`),"")}a.d(t,"a",(function(){return n}))},"dy+Q":function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/ring-offset-color",function(){return a("IdEg")}])},"p+I8":function(e,t,a){"use strict";e.exports=function(e){var t=typeof e;return null!==e&&("object"===t||"function"===t)}},pOT7:function(e,t,a){"use strict";a.d(t,"a",(function(){return g})),a.d(t,"b",(function(){return f}));var n=a("HALo"),s=a("q1tI"),o=a.n(s),c=a("iuhU"),r=a("ZMKu"),i=o.a.createElement;const p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function b(e){const t=Object(s.useRef)(),{0:a,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!a)return;function e(){r({height:t.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(t.current.contentDocument.body),()=>{n.disconnect()}}),[a]),i("iframe",Object(n.a)({},e,{ref:t,onLoad:()=>o(!0),style:c}))}function m({color:e,snippet:t}){return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[e],{"bg-gray-800":!p[e]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function g({preview:e,src:t,snippet:a,previewClassName:n,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[s])}),i(m,{color:s,snippet:a}))}function f({preview:e,src:t,previewClassName:a,snippet:n,color:o="gray",min:p=!1}){const g=Object(s.useRef)(),f=Object(r.h)(0),O=Object(s.useRef)(),{0:j,1:N}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{f.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:g,className:`relative rounded-t-xl ${u[o]}`},i("div",{className:p?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(f,(e=>-e))}},e?i("div",{className:Object(c.a)("rounded-t-xl",a,l[o],{"p-10":!a}),dangerouslySetInnerHTML:{__html:e}}):i(b,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[o],{"pointer-events-none":j})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:f,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(p?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:f},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),N(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),N(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(m,{color:o,snippet:n}))}},wH44:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a("cpVT"),s=a("q1tI"),o=a.n(s),c=a("AOjV"),r=a("AI3G"),i=a("Zb5r"),p=o.a.createElement;function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){Object(n.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d({plugin:e,name:t}){const a=Object(r.a)(e);return t=t||e.replace(/([a-z])([A-Z])/g,((e,t,a)=>`${t} ${a.toLowerCase()}`)),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(a.map((e=>`<code>${e}</code>`)))}})," ",a.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"...",add:a.reduce(((e,t)=>u(u({},e),{},{[t]:!1})),{})}))}}},[["dy+Q",0,2,6,8,1,3,4,5,7]]]);