_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[28],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),r=t.n(n),c=t("98BF"),s=t("Zb5r"),o=t("AOjV"),i=r.a.createElement;function p({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),r=`By default, ${t.length?`only ${Object(s.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:r}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(s.a)(n)," variants:"),i(o.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),r=t.n(n),c=(t("Btb4"),t("AI3G")),s=t("iuhU"),o=r.a.createElement;function i({value:e}){return"string"===typeof e?o("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?o(r.a.Fragment,null,o("span",{className:"token punctuation"},"["),e.map(((a,t)=>o(n.Fragment,{key:t},o(i,{value:a}),t===e.length-1?null:o("span",{className:"token punctuation"},", ")))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof e?o("span",{className:"token boolean"},e.toString()):e.toString()}function p({edits:e,indent:a="",type:t="inserted"}){return o("span",{className:Object(s.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((r,c)=>{return o(n.Fragment,{key:c},o("span",{className:Object(s.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(p=r)?p:`'${p}'`,o("span",{className:"token operator"},":")," ",o(i,{value:e[r]}),o("span",{className:"token punctuation"},","),"\n");var p})))}function l({path:e,add:a,remove:t,before:r,after:s}){return e="string"===typeof e?e.split("."):e,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>o(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n"))),r&&Object(c.a)(r).map(((a,t)=>o(n.Fragment,{key:t},"  ".repeat(e.length+2),o("span",{className:"token comment"},`// ${a}`),"\n")))),t&&o(p,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&o(p,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),o("span",{className:"token unchanged"},s&&Object(c.a)(s).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>o(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),r=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const s=[];return function e(a,t,o){let i;(t=t||{}).indent=t.indent||"\t",o=o||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),o).replace(new RegExp(i.indent,"g"),o+t.indent)};if(-1!==s.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";s.push(a);const n="["+i.newLine+a.map(((n,r)=>{const c=a.length-1===r?i.newLine:","+i.newLineOrSpace;let s=e(n,t,o+t.indent);return t.transform&&(s=t.transform(a,r,s)),i.indent+s+c})).join("")+i.pad+"]";return s.pop(),p(n)}if(r(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";s.push(a);const r="{"+i.newLine+n.map(((r,c)=>{const s=n.length-1===c?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof r,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(r),u=p||l?r:e(r,t);let d=e(a[r],t,o+t.indent);return t.transform&&(d=t.transform(a,r,d)),i.indent+String(u)+": "+d+s})).join("")+i.pad+"}";return s.pop(),p(r)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},BuUr:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return f}));var n=t("HALo"),r=t("dhJC"),c=t("q1tI"),s=t.n(c),o=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("vRWG"),d=t("I6Nb"),b=t("8C7G"),m=t("wH44");s.a.createElement;const g={Layout:u.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".backdrop-filter":{"backdrop-filter":"var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia)"},".backdrop-filter-none":{"backdrop-filter":"none"}})}}},meta:{title:"Backdrop Filter",description:"Utilities for enabling and disabling backdrop filters on an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},O=d.ContentsLayout;function f(e){let{components:a}=e,t=Object(r.a)(e,["components"]);return Object(o.a)(O,Object(n.a)({},g,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to enable backdrop filters (in combination with other backdrop filter utilities like ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-blur")," or ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-grayscale"),"), and the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter-none")," utility to remove filters."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-grayscale backdrop-blur-md backdrop-contrast-200 ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control backdrop filters at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop filter utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:backdrop-filter-none")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter-none")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-blur-lg ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-filter-none")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(o.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(b.a,{plugin:"backdropFilter",name:"backdrop-filter",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(m.a,{plugin:"backdropFilter",name:"backdrop-filter",mdxType:"Disabling"}))}f.isMDXComponent=!0,f.layoutProps=g},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},oymX:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-filter",function(){return t("BuUr")}])},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return d}));var n=t("cpVT"),r=t("q1tI"),c=t.n(r),s=t("AOjV"),o=t("AI3G"),i=t("Zb5r"),p=c.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function d({plugin:e,name:a}){const t=Object(o.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(s.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["oymX",0,2,1,3,4,5]]]);