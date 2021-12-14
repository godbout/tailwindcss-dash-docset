_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[30],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),r=t("Zb5r"),o=t("AOjV"),p=s.a.createElement;function i({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(r.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return p("div",{className:"prose"},p("p",{dangerouslySetInnerHTML:{__html:s}}),p("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",p("code",null,e)," property in the ",p("code",null,"variants")," section of your"," ",p("code",null,"tailwind.config.js")," file."),p("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(r.a)(n)," variants:"),p(o.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=(t("Btb4"),t("AI3G")),r=t("iuhU"),o=s.a.createElement;function p({value:e}){return"string"===typeof e?o("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?o(s.a.Fragment,null,o("span",{className:"token punctuation"},"["),e.map(((a,t)=>o(n.Fragment,{key:t},o(p,{value:a}),t===e.length-1?null:o("span",{className:"token punctuation"},", ")))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof e?o("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:t="inserted"}){return o("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,c)=>{return o(n.Fragment,{key:c},o("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,o("span",{className:"token operator"},":")," ",o(p,{value:e[s]}),o("span",{className:"token punctuation"},","),"\n");var i})))}function l({path:e,add:a,remove:t,before:s,after:r}){return e="string"===typeof e?e.split("."):e,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>o(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(c.a)(s).map(((a,t)=>o(n.Fragment,{key:t},"  ".repeat(e.length+2),o("span",{className:"token comment"},`// ${a}`),"\n")))),t&&o(i,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&o(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),o("span",{className:"token unchanged"},r&&Object(c.a)(r).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>o(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const r=[];return function e(a,t,o){let p;(t=t||{}).indent=t.indent||"\t",o=o||"",p=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(p.newLine,"g"),"").replace(new RegExp(p.newLineOrSpace,"g")," ").replace(new RegExp(p.pad+"|"+p.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(p.newLine+"|"+p.newLineOrSpace,"g"),"\n").replace(new RegExp(p.pad,"g"),o).replace(new RegExp(p.indent,"g"),o+t.indent)};if(-1!==r.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";r.push(a);const n="["+p.newLine+a.map(((n,s)=>{const c=a.length-1===s?p.newLine:","+p.newLineOrSpace;let r=e(n,t,o+t.indent);return t.transform&&(r=t.transform(a,s,r)),p.indent+r+c})).join("")+p.pad+"]";return r.pop(),i(n)}if(s(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";r.push(a);const s="{"+p.newLine+n.map(((s,c)=>{const r=n.length-1===c?p.newLine:","+p.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,t);let b=e(a[s],t,o+t.indent);return t.transform&&(b=t.transform(a,s,b)),p.indent+String(u)+": "+b+r})).join("")+p.pad+"}";return r.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},ioG3:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),r=t.n(c),o=t("7ljp"),p=t("YFqc"),i=t.n(p),l=t("tc9R"),u=t("vRWG"),b=t("I6Nb"),m=t("8C7G"),d=t("wH44");r.a.createElement;const O={Layout:u.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".-backdrop-hue-rotate-180":{"--tw-backdrop-hue-rotate":"hue-rotate(-180deg)"},".-backdrop-hue-rotate-90":{"--tw-backdrop-hue-rotate":"hue-rotate(-90deg)"},".-backdrop-hue-rotate-60":{"--tw-backdrop-hue-rotate":"hue-rotate(-60deg)"},".-backdrop-hue-rotate-30":{"--tw-backdrop-hue-rotate":"hue-rotate(-30deg)"},".-backdrop-hue-rotate-15":{"--tw-backdrop-hue-rotate":"hue-rotate(-15deg)"},".backdrop-hue-rotate-0":{"--tw-backdrop-hue-rotate":"hue-rotate(0deg)"},".backdrop-hue-rotate-15":{"--tw-backdrop-hue-rotate":"hue-rotate(15deg)"},".backdrop-hue-rotate-30":{"--tw-backdrop-hue-rotate":"hue-rotate(30deg)"},".backdrop-hue-rotate-60":{"--tw-backdrop-hue-rotate":"hue-rotate(60deg)"},".backdrop-hue-rotate-90":{"--tw-backdrop-hue-rotate":"hue-rotate(90deg)"},".backdrop-hue-rotate-180":{"--tw-backdrop-hue-rotate":"hue-rotate(180deg)"}})}}},meta:{title:"Backdrop Hue Rotate",description:"Utilities for applying backdrop hue-rotate filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},j=b.ContentsLayout;function N(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(o.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-hue-rotate-{amount}")," utilities alongside the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to blur an element."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-hue-rotate-15 ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element\u2019s backdrop hue rotation at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop hue-rotate utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:backdrop-hue-rotate-60")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-hue-rotate-60")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-hue-rotate-15 ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-hue-rotate-60")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"You can customize which ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-hue-rotate")," utilities are generated using the ",Object(o.a)("inlineCode",{parentName:"p"},"backdropHueRotate")," key in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       backdropHueRotate",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'-270'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'-270deg'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"270"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'270deg'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(m.a,{plugin:"backdropHueRotate",name:"backdrop hue-rotate",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(d.a,{plugin:"backdropHueRotate",name:"backdrop hue-rotate",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},jdZq:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-hue-rotate",function(){return t("ioG3")}])},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return b}));var n=t("cpVT"),s=t("q1tI"),c=t.n(s),r=t("AOjV"),o=t("AI3G"),p=t("Zb5r"),i=c.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function b({plugin:e,name:a}){const t=Object(o.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(p.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(r.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["jdZq",0,2,1,3,4,5]]]);