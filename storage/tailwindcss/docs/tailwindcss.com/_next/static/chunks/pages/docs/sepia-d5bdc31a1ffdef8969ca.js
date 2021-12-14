_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[156],{"54Zz":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/sepia",function(){return t("zwB/")}])},"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return o}));var n=t("q1tI"),s=t.n(n),c=t("98BF"),p=t("Zb5r"),r=t("AOjV"),i=s.a.createElement;function o({plugin:e,name:a}){const t=c.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(p.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(n)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),c=(t("Btb4"),t("AI3G")),p=t("iuhU"),r=s.a.createElement;function i({value:e}){return"string"===typeof e?r("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),e.map(((a,t)=>r(n.Fragment,{key:t},r(i,{value:a}),t===e.length-1?null:r("span",{className:"token punctuation"},", ")))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof e?r("span",{className:"token boolean"},e.toString()):e.toString()}function o({edits:e,indent:a="",type:t="inserted"}){return r("span",{className:Object(p.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,c)=>{return r(n.Fragment,{key:c},r("span",{className:Object(p.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(o=s)?o:`'${o}'`,r("span",{className:"token operator"},":")," ",r(i,{value:e[s]}),r("span",{className:"token punctuation"},","),"\n");var o})))}function l({path:e,add:a,remove:t,before:s,after:p}){return e="string"===typeof e?e.split("."):e,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(c.a)(s).map(((a,t)=>r(n.Fragment,{key:t},"  ".repeat(e.length+2),r("span",{className:"token comment"},`// ${a}`),"\n")))),t&&r(o,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&r(o,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),r("span",{className:"token unchanged"},p&&Object(c.a)(p).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),c=t("GAX2").default;e.exports=(e,a,t)=>{const p=[];return function e(a,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const o=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const n="["+i.newLine+a.map(((n,s)=>{const c=a.length-1===s?i.newLine:","+i.newLineOrSpace;let p=e(n,t,r+t.indent);return t.transform&&(p=t.transform(a,s,p)),i.indent+p+c})).join("")+i.pad+"]";return p.pop(),o(n)}if(s(a)){let n=Object.keys(a).concat(c(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";p.push(a);const s="{"+i.newLine+n.map(((s,c)=>{const p=n.length-1===c?i.newLine:","+i.newLineOrSpace,o="symbol"===typeof s,l=!o&&/^[a-z$_][a-z$_0-9]*$/i.test(s),m=o||l?s:e(s,t);let u=e(a[s],t,r+t.indent);return t.transform&&(u=t.transform(a,s,u)),i.indent+String(m)+": "+u+p})).join("")+i.pad+"}";return p.pop(),o(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("cpVT"),s=t("q1tI"),c=t.n(s),p=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),o=c.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function u({plugin:e,name:a}){const t=Object(r.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),o("div",{className:"prose"},o("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",o("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",o("code",null,"false")," in the"," ",o("code",null,"corePlugins")," section of your config file:"),o(p.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>m(m({},e),{},{[a]:!1})),{})}))}},"zwB/":function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return N}));var n=t("HALo"),s=t("dhJC"),c=t("q1tI"),p=t.n(c),r=t("7ljp"),i=t("YFqc"),o=t.n(i),l=t("tc9R"),m=t("vRWG"),u=t("I6Nb"),b=t("8C7G"),O=t("wH44");p.a.createElement;const j={Layout:m.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".sepia-0":{"--tw-sepia":"sepia(0)"},".sepia":{"--tw-sepia":"sepia(1)"}})}}},meta:{title:"Sepia",description:"Utilities for applying sepia filters to an element.",featureVersion:"v2.1+"},tableOfContents:[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},d=u.ContentsLayout;function N(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(d,Object(n.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"sepia")," and ",Object(r.a)("inlineCode",{parentName:"p"},"sepia-0")," utilities alongside the ",Object(r.a)("inlineCode",{parentName:"p"},"filter")," utility to whether an element should be rendered as sepia or in full color."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter sepia ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control an element\u2019s sepia filter at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing sepia utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:sepia-0")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"sepia-0")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"filter sepia ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:sepia-0")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(r.a)(o.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)("p",null,"You can customize which ",Object(r.a)("inlineCode",{parentName:"p"},"sepia")," utilities are generated using the ",Object(r.a)("inlineCode",{parentName:"p"},"sepia")," key in the ",Object(r.a)("inlineCode",{parentName:"p"},"theme")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     extend",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       sepia",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"25"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'.25'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token number"}),"75"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'.75'"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(o.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(b.a,{plugin:"sepia",name:"sepia",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(O.a,{plugin:"sepia",name:"sepia",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j}},[["54Zz",0,2,1,3,4,5]]]);