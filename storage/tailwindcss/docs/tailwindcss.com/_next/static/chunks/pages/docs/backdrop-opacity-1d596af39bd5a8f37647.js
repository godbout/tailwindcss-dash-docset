_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[32],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),c=t.n(n),s=t("98BF"),p=t("Zb5r"),o=t("AOjV"),r=c.a.createElement;function i({plugin:e,name:a}){const t=s.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),c=`By default, ${t.length?`only ${Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:c}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(n)," variants:"),r(o.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),c=t.n(n),s=(t("Btb4"),t("AI3G")),p=t("iuhU"),o=c.a.createElement;function r({value:e}){return"string"===typeof e?o("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?o(c.a.Fragment,null,o("span",{className:"token punctuation"},"["),e.map(((a,t)=>o(n.Fragment,{key:t},o(r,{value:a}),t===e.length-1?null:o("span",{className:"token punctuation"},", ")))),o("span",{className:"token punctuation"},"]")):"boolean"===typeof e?o("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:t="inserted"}){return o("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((c,s)=>{return o(n.Fragment,{key:s},o("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=c)?i:`'${i}'`,o("span",{className:"token operator"},":")," ",o(r,{value:e[c]}),o("span",{className:"token punctuation"},","),"\n");var i})))}function l({path:e,add:a,remove:t,before:c,after:p}){return e="string"===typeof e?e.split("."):e,o("div",{className:"prose"},o("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},o("pre",{className:"language-diff"},o("code",{className:"language-diff"},o("span",{className:"token unchanged"},"  ",o("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",o("span",{className:"token punctuation"},"."),o("span",{className:"token property-access"},"exports")," ",o("span",{className:"token operator"},"=")," ",o("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>o(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,o("span",{className:"token operator"},":")," ",o("span",{className:"token punctuation"},"{"),"\n"))),c&&Object(s.a)(c).map(((a,t)=>o(n.Fragment,{key:t},"  ".repeat(e.length+2),o("span",{className:"token comment"},`// ${a}`),"\n")))),t&&o(i,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&o(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),o("span",{className:"token unchanged"},p&&Object(s.a)(p).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>o(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),c=t("p+I8"),s=t("GAX2").default;e.exports=(e,a,t)=>{const p=[];return function e(a,t,o){let r;(t=t||{}).indent=t.indent||"\t",o=o||"",r=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),o).replace(new RegExp(r.indent,"g"),o+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const n="["+r.newLine+a.map(((n,c)=>{const s=a.length-1===c?r.newLine:","+r.newLineOrSpace;let p=e(n,t,o+t.indent);return t.transform&&(p=t.transform(a,c,p)),r.indent+p+s})).join("")+r.pad+"]";return p.pop(),i(n)}if(c(a)){let n=Object.keys(a).concat(s(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";p.push(a);const c="{"+r.newLine+n.map(((c,s)=>{const p=n.length-1===s?r.newLine:","+r.newLineOrSpace,i="symbol"===typeof c,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(c),b=i||l?c:e(c,t);let m=e(a[c],t,o+t.indent);return t.transform&&(m=t.transform(a,c,m)),r.indent+String(b)+": "+m+p})).join("")+r.pad+"}";return p.pop(),i(c)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},SbPd:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-opacity",function(){return t("ebfQ")}])},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},ebfQ:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),c=t("dhJC"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),r=t("YFqc"),i=t.n(r),l=t("tc9R"),b=t("vRWG"),m=t("I6Nb"),u=t("8C7G"),d=t("wH44");p.a.createElement;const O={Layout:b.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".backdrop-opacity-0":{"--tw-backdrop-opacity":"opacity(0)"},".backdrop-opacity-5":{"--tw-backdrop-opacity":"opacity(0.05)"},".backdrop-opacity-10":{"--tw-backdrop-opacity":"opacity(0.1)"},".backdrop-opacity-20":{"--tw-backdrop-opacity":"opacity(0.2)"},".backdrop-opacity-25":{"--tw-backdrop-opacity":"opacity(0.25)"},".backdrop-opacity-30":{"--tw-backdrop-opacity":"opacity(0.3)"},".backdrop-opacity-40":{"--tw-backdrop-opacity":"opacity(0.4)"},".backdrop-opacity-50":{"--tw-backdrop-opacity":"opacity(0.5)"},".backdrop-opacity-60":{"--tw-backdrop-opacity":"opacity(0.6)"},".backdrop-opacity-70":{"--tw-backdrop-opacity":"opacity(0.7)"},".backdrop-opacity-75":{"--tw-backdrop-opacity":"opacity(0.75)"},".backdrop-opacity-80":{"--tw-backdrop-opacity":"opacity(0.8)"},".backdrop-opacity-90":{"--tw-backdrop-opacity":"opacity(0.9)"},".backdrop-opacity-95":{"--tw-backdrop-opacity":"opacity(0.95)"},".backdrop-opacity-100":{"--tw-backdrop-opacity":"opacity(1)"}})}}},meta:{title:"Backdrop Opacity",description:"Utilities for applying backdrop opacity filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},j=m.ContentsLayout;function N(e){let{components:a}=e,t=Object(c.a)(e,["components"]);return Object(o.a)(j,Object(n.a)({},O,t,{components:a,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(o.a)("p",null,"Use the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-opacity-{amount}")," utilities alongside the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-filter")," utility to control the opacity of other backdrop filters applied to an element."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-opacity-80 ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To control an element\u2019s backdrop opacity at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing backdrop opacity utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:backdrop-opacity-lg")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-opacity-lg")," utility at only medium screen sizes and above."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"backdrop-filter backdrop-opacity-sm ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:backdrop-opacity-lg")," ...",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(o.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)("p",null,"You can customize which ",Object(o.a)("inlineCode",{parentName:"p"},"backdrop-opacity")," utilities are generated using the ",Object(o.a)("inlineCode",{parentName:"p"},"backdropOpacity")," key in the ",Object(o.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       backdropOpacity",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"15"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'.15'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Learn more about customizing the default theme in the ",Object(o.a)(i.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(o.a)("a",null,"theme customization documentation")),"."),Object(o.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(o.a)(u.a,{plugin:"backdropOpacity",name:"backdrop opacity",mdxType:"Variants"}),Object(o.a)("div",{className:"prose"},Object(o.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(o.a)(d.a,{plugin:"backdropOpacity",name:"backdrop opacity",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("cpVT"),c=t("q1tI"),s=t.n(c),p=t("AOjV"),o=t("AI3G"),r=t("Zb5r"),i=s.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function b(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m({plugin:e,name:a}){const t=Object(o.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(p.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>b(b({},e),{},{[a]:!1})),{})}))}}},[["SbPd",0,2,1,3,4,5]]]);