_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[53],{"+VXr":function(e,a,n){"use strict";var t;Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({config:e,matchUtilities:a,addBase:n,addUtilities:t,theme:c,variants:p}){"jit"===e("mode")?n({"@defaults box-shadow":{"--tw-ring-offset-shadow":"0 0 #0000","--tw-ring-shadow":"0 0 #0000","--tw-shadow":"0 0 #0000"}}):t({"*, ::before, ::after":{"--tw-shadow":"0 0 #0000"}},{respectImportant:!1}),a({shadow:a=>(a=s(a),{..."jit"===e("mode")?{"@defaults box-shadow":{}}:{},"--tw-shadow":"none"===a?"0 0 #0000":a,"box-shadow":o})},{values:c("boxShadow"),variants:p("boxShadow"),type:"lookup"})}};let s=(0,((t=n("ReOs"))&&t.__esModule?t:{default:t}).default)("boxShadow"),o=["var(--tw-ring-offset-shadow, 0 0 #0000)","var(--tw-ring-shadow, 0 0 #0000)","var(--tw-shadow)"].join(", ")},"5xSE":function(e,a,n){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,n){"use strict";n.d(a,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),o=n("98BF"),c=n("Zb5r"),p=n("AOjV"),r=s.a.createElement;function i({plugin:e,name:a}){const n=o.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((e=>!n.includes(e))).slice(0,2),s=`By default, ${n.length?`only ${Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return r("div",{className:"prose"},r("p",{dangerouslySetInnerHTML:{__html:s}}),r("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(c.a)(t)," variants:"),r(p.a,{path:"variants.extend",before:"...",add:{[e]:t}}))}},AOjV:function(e,a,n){"use strict";n.d(a,"a",(function(){return l}));var t=n("q1tI"),s=n.n(t),o=(n("Btb4"),n("AI3G")),c=n("iuhU"),p=s.a.createElement;function r({value:e}){return"string"===typeof e?p("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),e.map(((a,n)=>p(t.Fragment,{key:n},p(r,{value:a}),n===e.length-1?null:p("span",{className:"token punctuation"},", ")))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof e?p("span",{className:"token boolean"},e.toString()):e.toString()}function i({edits:e,indent:a="",type:n="inserted"}){return p("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===n,"deleted-sign deleted":"inserted"!==n})},Object.keys(e).map(((s,o)=>{return p(t.Fragment,{key:o},p("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===n,deleted:"inserted"!==n})},"inserted"===n?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(i=s)?i:`'${i}'`,p("span",{className:"token operator"},":")," ",p(r,{value:e[s]}),p("span",{className:"token punctuation"},","),"\n");var i})))}function l({path:e,add:a,remove:n,before:s,after:c}){return e="string"===typeof e?e.split("."):e,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>p(t.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((a,n)=>p(t.Fragment,{key:n},"  ".repeat(e.length+2),p("span",{className:"token comment"},`// ${a}`),"\n")))),n&&p(i,{edits:n,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&p(i,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},c&&Object(o.a)(c).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,n)=>p(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n"))),"  }")))))}},Btb4:function(e,a,n){"use strict";const t=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;e.exports=(e,a,n)=>{const c=[];return function e(a,n,p){let r;(n=n||{}).indent=n.indent||"\t",p=p||"",r=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=e=>{if(void 0===n.inlineCharacterLimit)return e;const a=e.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return a.length<=n.inlineCharacterLimit?a:e.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),p).replace(new RegExp(r.indent,"g"),p+n.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const t="["+r.newLine+a.map(((t,s)=>{const o=a.length-1===s?r.newLine:","+r.newLineOrSpace;let c=e(t,n,p+n.indent);return n.transform&&(c=n.transform(a,s,c)),r.indent+c+o})).join("")+r.pad+"]";return c.pop(),i(t)}if(s(a)){let t=Object.keys(a).concat(o(a));if(n.filter&&(t=t.filter((e=>n.filter(a,e)))),0===t.length)return"{}";c.push(a);const s="{"+r.newLine+t.map(((s,o)=>{const c=t.length-1===o?r.newLine:","+r.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:e(s,n);let d=e(a[s],n,p+n.indent);return n.transform&&(d=n.transform(a,s,d)),r.indent+String(u)+": "+d+c})).join("")+r.pad+"}";return c.pop(),i(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===n.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,n)}},DxjC:function(e,a,n){"use strict";n.r(a),n.d(a,"default",(function(){return N}));var t=n("HALo"),s=n("dhJC"),o=n("q1tI"),c=n.n(o),p=n("7ljp"),r=n("YFqc"),i=n.n(r),l=n("tc9R"),u=n("pOT7"),d=n("vRWG"),m=n("I6Nb"),b=n("+VXr"),g=n.n(b),h=n("8C7G"),j=n("wH44");c.a.createElement;const O={Layout:d.DocumentationLayout,classes:{plugin:g()},meta:{title:"Box Shadow",description:"Utilities for controlling the box shadow of an element.",features:{responsive:!0,customizable:!0,hover:!1,focus:!1}},tableOfContents:[{title:"Outer shadow",slug:"outer-shadow",children:[]},{title:"Inner shadow",slug:"inner-shadow",children:[]},{title:"No shadow",slug:"no-shadow",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Box Shadows",slug:"box-shadows"},{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},f=m.ContentsLayout;function N(e){let{components:a}=e,n=Object(s.a)(e,["components"]);return Object(p.a)(f,Object(t.a)({},O,n,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"outer-shadow",toc:!0},"Outer shadow"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-sm"),", ",Object(p.a)("inlineCode",{parentName:"p"},"shadow"),", ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-md"),", ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-lg"),", ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-xl"),", or ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-2xl")," utilities to apply different sized outer box shadows to an element.")),Object(p.a)(u.a,{preview:'\n  <div class="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4">\n    <div class="shadow-sm h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-sm</div>\n    <div class="shadow h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow</div>\n    <div class="shadow-md h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-md</div>\n    <div class="shadow-lg h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-lg</div>\n    <div class="shadow-xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-xl</div>\n    <div class="shadow-2xl h-32 w-32 font-medium bg-white rounded-md flex items-center justify-center">.shadow-2xl</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-sm</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-md</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-lg</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-xl</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-2xl</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"inner-shadow",toc:!0},"Inner shadow"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-inner")," utility to apply a subtle inset box shadow to an element. This can be useful for things like form controls or wells.")),Object(p.a)(u.a,{preview:'\n  <div class="flex justify-center items-center">\n    <div class="shadow-inner h-24 w-40 font-medium bg-purple-200  text-purple-500 rounded-md flex items-center justify-center">.shadow-inner</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-inner</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"purple",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"no-shadow",toc:!0},"No shadow"),Object(p.a)("p",null,"Use ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-none")," to remove an existing box shadow from an element. This is most commonly used to remove a shadow that was applied at a smaller breakpoint.")),Object(p.a)(u.a,{preview:'\n  <div class="flex justify-center items-center">\n    <div class="shadow-none h-24 w-40 font-medium bg-rose-200 text-rose-500 rounded-md flex items-center justify-center">.shadow-none</div>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">shadow-none</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the shadow of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing shadow utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:shadow-lg")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-lg")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"shadow ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:shadow-lg")," ...",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(p.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"box-shadows",toc:!0},"Box Shadows"),Object(p.a)("p",null,"By default, Tailwind provides six drop shadow utilities, one inner shadow utility, and a utility for removing existing shadows. You can change, add, or remove these by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.boxShadow")," section of your Tailwind config."),Object(p.a)("p",null,"If a ",Object(p.a)("inlineCode",{parentName:"p"},"DEFAULT")," shadow is provided, it will be used for the non-suffixed ",Object(p.a)("inlineCode",{parentName:"p"},"shadow")," utility. Any other keys will be used as suffixes, for example the key ",Object(p.a)("inlineCode",{parentName:"p"},"'2'")," will create a corresponding ",Object(p.a)("inlineCode",{parentName:"p"},"shadow-2")," utility."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(t.a)({parentName:"div"},{className:"language-diff-js"}),Object(p.a)("code",Object(t.a)({parentName:"pre"},{className:"language-diff-js"}),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     boxShadow",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       sm",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 1px 2px 0 rgba(0, 0, 0, 0.05)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token constant"}),"DEFAULT"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       md",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       lg",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       xl",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'2xl'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 25px 50px -12px rgba(0, 0, 0, 0.25)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'3xl'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'0 35px 60px -15px rgba(0, 0, 0, 0.3)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(p.a)("span",Object(t.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       inner",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       none",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token string"}),"'none'"),Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"),"\n",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(p.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(h.a,{plugin:"boxShadow",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(j.a,{plugin:"boxShadow",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=O},GAX2:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},JNdO:function(e,a,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/box-shadow",function(){return n("DxjC")}])},ReOs:function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){if(["fontSize","outline"].includes(e))return e=>Array.isArray(e)?e[0]:e;if(["fontFamily","boxShadow","transitionProperty","transitionDuration","transitionDelay","transitionTimingFunction","backgroundImage","backgroundSize","backgroundColor","cursor","animation"].includes(e))return e=>Array.isArray(e)?e.join(", "):e;if("colors"===e)return e=>"function"===typeof e?e({}):e;return e=>e}},Zb5r:function(e,a,n){"use strict";function t(e){return e.reduce(((a,n,t)=>0===t?n:t===e.length-1?`${a} and ${n}`:`${a}, ${n}`),"")}n.d(a,"a",(function(){return t}))},"p+I8":function(e,a,n){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,n){"use strict";n.d(a,"a",(function(){return g})),n.d(a,"b",(function(){return h}));var t=n("HALo"),s=n("q1tI"),o=n.n(s),c=n("iuhU"),p=n("ZMKu"),r=o.a.createElement;const i={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function m(e){const a=Object(s.useRef)(),{0:n,1:o}=Object(s.useState)(!1),{0:c,1:p}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!n)return;function e(){p({height:a.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(e);return e(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}),[n]),r("iframe",Object(t.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function b({color:e,snippet:a}){return r("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",i[e],{"bg-gray-800":!i[e]})},r("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":i[e]})},r("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function g({preview:e,src:a,snippet:n,previewClassName:t,color:s="gray"}){return r("div",{className:"relative overflow-hidden mb-8"},e?r("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[s],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[s])}),r(b,{color:s,snippet:n}))}function h({preview:e,src:a,previewClassName:n,snippet:t,color:o="gray",min:i=!1}){const g=Object(s.useRef)(),h=Object(p.h)(0),j=Object(s.useRef)(),{0:O,1:f}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{h.set(0)}));return e.observe(g.current),()=>{e.disconnect()}}),[]),r("div",{className:"relative mb-8"},r("div",{ref:g,className:`relative rounded-t-xl ${u[o]}`},r("div",{className:i?"md:w-88":void 0},r(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(h,(e=>-e))}},e?r("div",{className:Object(c.a)("rounded-t-xl",n,l[o],{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):r(m,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[o],{"pointer-events-none":O})}))),r("div",{ref:j,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},r(p.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:j,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(i?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),f(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),f(!1)}},r("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},r("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[o]}`,style:{width:"0.4375rem"}},r("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),r(b,{color:o,snippet:t}))}},wH44:function(e,a,n){"use strict";n.d(a,"a",(function(){return d}));var t=n("cpVT"),s=n("q1tI"),o=n.n(s),c=n("AOjV"),p=n("AI3G"),r=n("Zb5r"),i=o.a.createElement;function l(e,a){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var a=1;a<arguments.length;a++){var n=null!=arguments[a]?arguments[a]:{};a%2?l(Object(n),!0).forEach((function(a){Object(t.a)(e,a,n[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))}))}return e}function d({plugin:e,name:a}){const n=Object(p.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,n)=>`${a} ${n.toLowerCase()}`)),i("div",{className:"prose"},i("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(n.map((e=>`<code>${e}</code>`)))}})," ",n.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"...",add:n.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["JNdO",0,2,6,1,3,4,5,7]]]);