_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[46],{"5xSE":function(n,a,s){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,s){"use strict";s.d(a,"a",(function(){return r}));var t=s("q1tI"),e=s.n(t),p=s("98BF"),o=s("Zb5r"),l=s("AOjV"),c=e.a.createElement;function r({plugin:n,name:a}){const s=p.defaultConfig.variants[n]||["responsive"];a=a||n.replace(/([a-z])([A-Z])/g,((n,a,s)=>`${a} ${s.toLowerCase()}`));const t=["responsive","hover","focus","active","group-hover"].filter((n=>!s.includes(n))).slice(0,2),e=`By default, ${s.length?`only ${Object(o.a)(s).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return c("div",{className:"prose"},c("p",{dangerouslySetInnerHTML:{__html:e}}),c("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",c("code",null,n)," property in the ",c("code",null,"variants")," section of your"," ",c("code",null,"tailwind.config.js")," file."),c("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(o.a)(t)," variants:"),c(l.a,{path:"variants.extend",before:"...",add:{[n]:t}}))}},AOjV:function(n,a,s){"use strict";s.d(a,"a",(function(){return u}));var t=s("q1tI"),e=s.n(t),p=(s("Btb4"),s("AI3G")),o=s("iuhU"),l=e.a.createElement;function c({value:n}){return"string"===typeof n?l("span",{className:"token string"},"'",n,"'"):Array.isArray(n)?l(e.a.Fragment,null,l("span",{className:"token punctuation"},"["),n.map(((a,s)=>l(t.Fragment,{key:s},l(c,{value:a}),s===n.length-1?null:l("span",{className:"token punctuation"},", ")))),l("span",{className:"token punctuation"},"]")):"boolean"===typeof n?l("span",{className:"token boolean"},n.toString()):n.toString()}function r({edits:n,indent:a="",type:s="inserted"}){return l("span",{className:Object(o.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(n).map(((e,p)=>{return l(t.Fragment,{key:p},l("span",{className:Object(o.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(r=e)?r:`'${r}'`,l("span",{className:"token operator"},":")," ",l(c,{value:n[e]}),l("span",{className:"token punctuation"},","),"\n");var r})))}function u({path:n,add:a,remove:s,before:e,after:o}){return n="string"===typeof n?n.split("."):n,l("div",{className:"prose"},l("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},l("pre",{className:"language-diff"},l("code",{className:"language-diff"},l("span",{className:"token unchanged"},"  ",l("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",l("span",{className:"token punctuation"},"."),l("span",{className:"token property-access"},"exports")," ",l("span",{className:"token operator"},"=")," ",l("span",{className:"token punctuation"},"{"),"\n",n.map(((n,a)=>l(t.Fragment,{key:a},"  ","  ".repeat(a+1),n,l("span",{className:"token operator"},":")," ",l("span",{className:"token punctuation"},"{"),"\n"))),e&&Object(p.a)(e).map(((a,s)=>l(t.Fragment,{key:s},"  ".repeat(n.length+2),l("span",{className:"token comment"},`// ${a}`),"\n")))),s&&l(r,{edits:s,type:"deleted",indent:"  ".repeat(n.length+1)}),a&&l(r,{edits:a,type:"inserted",indent:"  ".repeat(n.length+1)}),l("span",{className:"token unchanged"},o&&Object(p.a)(o).map((a=>`${"  ".repeat(n.length+2)}${a}\n`)),n.map(((a,s)=>l(t.Fragment,{key:s},"  ","  ".repeat(n.length-s),"}\n"))),"  }")))))}},Btb4:function(n,a,s){"use strict";const t=s("5xSE"),e=s("p+I8"),p=s("GAX2").default;n.exports=(n,a,s)=>{const o=[];return function n(a,s,l){let c;(s=s||{}).indent=s.indent||"\t",l=l||"",c=void 0===s.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:l,indent:l+s.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===s.inlineCharacterLimit)return n;const a=n.replace(new RegExp(c.newLine,"g"),"").replace(new RegExp(c.newLineOrSpace,"g")," ").replace(new RegExp(c.pad+"|"+c.indent,"g"),"");return a.length<=s.inlineCharacterLimit?a:n.replace(new RegExp(c.newLine+"|"+c.newLineOrSpace,"g"),"\n").replace(new RegExp(c.pad,"g"),l).replace(new RegExp(c.indent,"g"),l+s.indent)};if(-1!==o.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||t(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";o.push(a);const t="["+c.newLine+a.map(((t,e)=>{const p=a.length-1===e?c.newLine:","+c.newLineOrSpace;let o=n(t,s,l+s.indent);return s.transform&&(o=s.transform(a,e,o)),c.indent+o+p})).join("")+c.pad+"]";return o.pop(),r(t)}if(e(a)){let t=Object.keys(a).concat(p(a));if(s.filter&&(t=t.filter((n=>s.filter(a,n)))),0===t.length)return"{}";o.push(a);const e="{"+c.newLine+t.map(((e,p)=>{const o=t.length-1===p?c.newLine:","+c.newLineOrSpace,r="symbol"===typeof e,u=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(e),i=r||u?e:n(e,s);let d=n(a[e],s,l+s.indent);return s.transform&&(d=s.transform(a,e,d)),c.indent+String(i)+": "+d+o})).join("")+c.pad+"}";return o.pop(),r(e)}return a=String(a).replace(/[\r\n]/g,(n=>"\n"===n?"\\n":"\\r")),!1===s.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,s)}},GAX2:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter((a=>Object.prototype.propertyIsEnumerable.call(n,a)))},Vhtw:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return h}));var t=s("HALo"),e=s("dhJC"),p=s("q1tI"),o=s.n(p),l=s("7ljp"),c=(s("YFqc"),s("tc9R")),r=s("pOT7"),u=s("vRWG"),i=s("I6Nb"),d=s("sEq3"),g=s.n(d),k=s("8C7G"),b=s("wH44");o.a.createElement;const m={Layout:u.DocumentationLayout,classes:{plugin:g()},meta:{title:"Border Collapse",description:"Utilities for controlling whether table borders should collapse or be separated."},tableOfContents:[{title:"Separate",slug:"separate",children:[]},{title:"Collapse",slug:"collapse",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},f=i.ContentsLayout;function h(n){let{components:a}=n,s=Object(e.a)(n,["components"]);return Object(l.a)(f,Object(t.a)({},m,s,{components:a,mdxType:"MDXLayout"}),Object(l.a)("div",{className:"prose"},Object(l.a)(c.a,{level:2,id:"separate",toc:!0},"Separate"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"border-separate")," to force each cell to display its own separate borders.")),Object(l.a)(r.a,{preview:'\n  <table class="border-separate w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-separate</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(c.a,{level:2,id:"collapse",toc:!0},"Collapse"),Object(l.a)("p",null,"Use ",Object(l.a)("inlineCode",{parentName:"p"},"border-collapse")," to combine adjacent cell borders into a single border when possible. Note that this includes collapsing borders on the top-level ",Object(l.a)("inlineCode",{parentName:"p"},"<table>")," tag.")),Object(l.a)(r.a,{preview:'\n  <table class="border-collapse w-full border-2 border-emerald-800">\n    <thead class="bg-emerald-200">\n      <tr>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">State</th>\n        <th class="border-2 border-emerald-600 px-4 py-2 text-emerald-800 text-left font-flow">City</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indiana</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Indianapolis</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Ohio</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Columbus</td>\n      </tr>\n      <tr>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Michigan</td>\n        <td class="border-2 border-emerald-600 px-4 py-2 font-flow text-emerald-400">Detroit</td>\n      </tr>\n    </tbody>\n  </table>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">border-collapse</span> border border-green-800 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>State<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indiana<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Indianapolis<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Ohio<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Columbus<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Michigan<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>border border-green-600 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Detroit<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(l.a)("div",{className:"prose"},Object(l.a)(c.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(l.a)(c.a,{level:3,id:"variants",toc:!0},"Variants")),Object(l.a)(k.a,{plugin:"borderCollapse",mdxType:"Variants"}),Object(l.a)("div",{className:"prose"},Object(l.a)(c.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(l.a)(b.a,{plugin:"borderCollapse",mdxType:"Disabling"}))}h.isMDXComponent=!0,h.layoutProps=m},Zb5r:function(n,a,s){"use strict";function t(n){return n.reduce(((a,s,t)=>0===t?s:t===n.length-1?`${a} and ${s}`:`${a}, ${s}`),"")}s.d(a,"a",(function(){return t}))},dam5:function(n,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/border-collapse",function(){return s("Vhtw")}])},"p+I8":function(n,a,s){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,s){"use strict";s.d(a,"a",(function(){return b})),s.d(a,"b",(function(){return m}));var t=s("HALo"),e=s("q1tI"),p=s.n(e),o=s("iuhU"),l=s("ZMKu"),c=p.a.createElement;const r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},u={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},i={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},d={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function g(n){const a=Object(e.useRef)(),{0:s,1:p}=Object(e.useState)(!1),{0:o,1:l}=Object(e.useState)({});return Object(e.useEffect)((()=>{if(!s)return;function n(){l({height:a.current.contentDocument.body.scrollHeight})}const t=new window.ResizeObserver(n);return n(),t.observe(a.current.contentDocument.body),()=>{t.disconnect()}}),[s]),c("iframe",Object(t.a)({},n,{ref:a,onLoad:()=>p(!0),style:o}))}function k({color:n,snippet:a}){return c("div",{className:Object(o.a)("overflow-hidden rounded-b-xl",r[n],{"bg-gray-800":!r[n]})},c("pre",{className:Object(o.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[n]})},c("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b({preview:n,src:a,snippet:s,previewClassName:t,color:e="gray"}){return c("div",{className:"relative overflow-hidden mb-8"},n?c("div",{className:Object(o.a)("rounded-t-xl overflow-hidden",u[e],t,{"p-10":!t}),dangerouslySetInnerHTML:{__html:n}}):c(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",u[e])}),c(k,{color:e,snippet:s}))}function m({preview:n,src:a,previewClassName:s,snippet:t,color:p="gray",min:r=!1}){const b=Object(e.useRef)(),m=Object(l.h)(0),f=Object(e.useRef)(),{0:h,1:y}=Object(e.useState)(!1);return Object(e.useEffect)((()=>{const n=new window.ResizeObserver((()=>{m.set(0)}));return n.observe(b.current),()=>{n.disconnect()}}),[]),c("div",{className:"relative mb-8"},c("div",{ref:b,className:`relative rounded-t-xl ${i[p]}`},c("div",{className:r?"md:w-88":void 0},c(l.d.div,{className:"relative",style:{marginRight:Object(l.i)(m,(n=>-n))}},n?c("div",{className:Object(o.a)("rounded-t-xl",s,u[p],{"p-10":!s}),dangerouslySetInnerHTML:{__html:n}}):c(g,{src:a,className:Object(o.a)("w-full rounded-t-xl",u[p],{"pointer-events-none":h})}))),c("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},c(l.d.div,{drag:"x",_dragX:m,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(r?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:m},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),y(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),y(!1)}},c("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},c("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${d[p]}`,style:{width:"0.4375rem"}},c("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),c(k,{color:p,snippet:t}))}},sEq3:function(n,a,s){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,variants:a}){n({".border-collapse":{"border-collapse":"collapse"},".border-separate":{"border-collapse":"separate"}},a("borderCollapse"))}}},wH44:function(n,a,s){"use strict";s.d(a,"a",(function(){return d}));var t=s("cpVT"),e=s("q1tI"),p=s.n(e),o=s("AOjV"),l=s("AI3G"),c=s("Zb5r"),r=p.a.createElement;function u(n,a){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),s.push.apply(s,t)}return s}function i(n){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?u(Object(s),!0).forEach((function(a){Object(t.a)(n,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(s,a))}))}return n}function d({plugin:n,name:a}){const s=Object(l.a)(n);return a=a||n.replace(/([a-z])([A-Z])/g,((n,a,s)=>`${a} ${s.toLowerCase()}`)),r("div",{className:"prose"},r("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(c.a)(s.map((n=>`<code>${n}</code>`)))}})," ",s.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(o.a,{path:"corePlugins",before:"...",add:s.reduce(((n,a)=>i(i({},n),{},{[a]:!1})),{})}))}}},[["dam5",0,2,6,1,3,4,5,7]]]);