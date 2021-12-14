_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[87],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),p=t("AOjV"),i=s.a.createElement;function r({plugin:e,name:a}){const t=o.defaultConfig.variants[e]||["responsive"];a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`));const n=["responsive","hover","focus","active","group-hover"].filter((e=>!t.includes(e))).slice(0,2),s=`By default, ${t.length?`only ${Object(c.a)(t).replace("dark","dark mode <em>(if enabled)</em>")}`:"no"} variants are generated for ${a} utilities.`;return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:s}}),i("p",null,"You can control which variants are generated for the ",a," utilities by modifying the"," ",i("code",null,e)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(c.a)(n)," variants:"),i(p.a,{path:"variants.extend",before:"...",add:{[e]:n}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=(t("Btb4"),t("AI3G")),c=t("iuhU"),p=s.a.createElement;function i({value:e}){return"string"===typeof e?p("span",{className:"token string"},"'",e,"'"):Array.isArray(e)?p(s.a.Fragment,null,p("span",{className:"token punctuation"},"["),e.map(((a,t)=>p(n.Fragment,{key:t},p(i,{value:a}),t===e.length-1?null:p("span",{className:"token punctuation"},", ")))),p("span",{className:"token punctuation"},"]")):"boolean"===typeof e?p("span",{className:"token boolean"},e.toString()):e.toString()}function r({edits:e,indent:a="",type:t="inserted"}){return p("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===t,"deleted-sign deleted":"inserted"!==t})},Object.keys(e).map(((s,o)=>{return p(n.Fragment,{key:o},p("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===t,deleted:"inserted"!==t})},"inserted"===t?"+":"-")," ",a,/^[a-z_$][a-z0-9_$]*$/i.test(r=s)?r:`'${r}'`,p("span",{className:"token operator"},":")," ",p(i,{value:e[s]}),p("span",{className:"token punctuation"},","),"\n");var r})))}function l({path:e,add:a,remove:t,before:s,after:c}){return e="string"===typeof e?e.split("."):e,p("div",{className:"prose"},p("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},p("pre",{className:"language-diff"},p("code",{className:"language-diff"},p("span",{className:"token unchanged"},"  ",p("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",p("span",{className:"token punctuation"},"."),p("span",{className:"token property-access"},"exports")," ",p("span",{className:"token operator"},"=")," ",p("span",{className:"token punctuation"},"{"),"\n",e.map(((e,a)=>p(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,p("span",{className:"token operator"},":")," ",p("span",{className:"token punctuation"},"{"),"\n"))),s&&Object(o.a)(s).map(((a,t)=>p(n.Fragment,{key:t},"  ".repeat(e.length+2),p("span",{className:"token comment"},`// ${a}`),"\n")))),t&&p(r,{edits:t,type:"deleted",indent:"  ".repeat(e.length+1)}),a&&p(r,{edits:a,type:"inserted",indent:"  ".repeat(e.length+1)}),p("span",{className:"token unchanged"},c&&Object(o.a)(c).map((a=>`${"  ".repeat(e.length+2)}${a}\n`)),e.map(((a,t)=>p(n.Fragment,{key:t},"  ","  ".repeat(e.length-t),"}\n"))),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,a,t)=>{const c=[];return function e(a,t,p){let i;(t=t||{}).indent=t.indent||"\t",p=p||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:p,indent:p+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),p).replace(new RegExp(i.indent,"g"),p+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const n="["+i.newLine+a.map(((n,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,t,p+t.indent);return t.transform&&(c=t.transform(a,s,c)),i.indent+c+o})).join("")+i.pad+"]";return c.pop(),r(n)}if(s(a)){let n=Object.keys(a).concat(o(a));if(t.filter&&(n=n.filter((e=>t.filter(a,e)))),0===n.length)return"{}";c.push(a);const s="{"+i.newLine+n.map(((s,o)=>{const c=n.length-1===o?i.newLine:","+i.newLineOrSpace,r="symbol"===typeof s,l=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||l?s:e(s,t);let m=e(a[s],t,p+t.indent);return t.transform&&(m=t.transform(a,s,m)),i.indent+String(u)+": "+m+c})).join("")+i.pad+"}";return c.pop(),r(s)}return a=String(a).replace(/[\r\n]/g,(e=>"\n"===e?"\\n":"\\r")),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter((a=>Object.prototype.propertyIsEnumerable.call(e,a)))},V7N5:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-variant-numeric",function(){return t("nji4")}])},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce(((a,t,n)=>0===n?t:n===e.length-1?`${a} and ${t}`:`${a}, ${t}`),"")}t.d(a,"a",(function(){return n}))},nji4:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("HALo"),s=t("dhJC"),o=t("q1tI"),c=t.n(o),p=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),g=t("8C7G"),b=t("wH44");c.a.createElement;const h={Layout:m.DocumentationLayout,classes:{plugin:function(){return function({addUtilities:e}){e({".normal-nums":{fontVariantNumeric:"normal"},".ordinal":{fontVariantNumeric:"ordinal"},".slashed-zero":{fontVariantNumeric:"slashed-zero"},".lining-nums":{fontVariantNumeric:"lining-nums"},".oldstyle-nums":{fontVariantNumeric:"oldstyle-nums"},".proportional-nums":{fontVariantNumeric:"proportional-nums"},".tabular-nums":{fontVariantNumeric:"tabular-nums"},".diagonal-fractions":{fontVariantNumeric:"diagonal-fractions"},".stacked-fractions":{fontVariantNumeric:"stacked-fractions"}})}}},meta:{title:"Font Variant Numeric",description:"Utilities for controlling the variant of numbers."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Ordinal",slug:"ordinal"},{title:"Slashed Zero",slug:"slashed-zero"},{title:"Lining figures",slug:"lining-figures"},{title:"Oldstyle figures",slug:"oldstyle-figures"},{title:"Proportional figures",slug:"proportional-figures"},{title:"Tabular figures",slug:"tabular-figures"},{title:"Diagonal fractions",slug:"diagonal-fractions"},{title:"Stacked fractions",slug:"stacked-fractions"},{title:"Resetting numeric font variants",slug:"resetting-numeric-font-variants"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]},f=d.ContentsLayout;function O(e){let{components:a}=e,t=Object(s.a)(e,["components"]);return Object(p.a)(f,Object(n.a)({},h,t,{components:a,mdxType:"MDXLayout"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utilities to enable additional glyphs for numbers, fractions, and ordinal markers ",Object(p.a)("em",{parentName:"p"},"(in fonts that support them)"),"."),Object(p.a)("p",null,"These utilities are composable so you can enable multiple ",Object(p.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," features by combining multiple classes in your HTML:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ordinal slashed-zero tabular-nums")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"1234567890",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"Note that many fonts don\u2019t support these features ",Object(p.a)("em",{parentName:"p"},"(stacked fractions support for example is especially rare)"),", so some of these utilities may have no effect depending on the font family you are using."),Object(p.a)(l.a,{level:3,id:"ordinal",toc:!0},"Ordinal"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"ordinal")," utility to enable special glyphs for the ordinal markers.")),Object(p.a)(u.a,{preview:'\n  <p class="font-source ordinal text-3xl text-center text-emerald-600">1st</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ordinal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"slashed-zero",toc:!0},"Slashed Zero"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"slashed-zero")," utility to force a 0 with a slash; this is useful when a clear distinction between O and 0 is needed.")),Object(p.a)(u.a,{preview:'\n  <p class="font-source slashed-zero text-3xl text-center text-light-blue-600">0</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">slashed-zero</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"lining-figures",toc:!0},"Lining figures"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"lining-nums")," utility to use the numeric glyphs that are all aligned by their baseline. This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"lnum")," OpenType feature. This is the default for most fonts.")),Object(p.a)(u.a,{preview:'\n  <p class="font-source lining-nums text-3xl text-center text-rose-600">1234567890</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">lining-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"oldstyle-figures",toc:!0},"Oldstyle figures"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"oldstyle-nums")," utility to use numeric glyphs where some numbers have descenders. This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"onum")," OpenType feature.")),Object(p.a)(u.a,{preview:'\n  <p class="font-source oldstyle-nums text-3xl text-center text-fuchsia-600">1234567890</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">oldstyle-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"proportional-figures",toc:!0},"Proportional figures"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"proportional-nums")," utility to use numeric glyphs that have proportional widths (rather than uniform/tabular). This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"pnum")," OpenType feature.")),Object(p.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source proportional-nums text-3xl text-indigo-600">12121</p>\n    <p class="font-source proportional-nums text-3xl text-indigo-600">90909</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">proportional-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">proportional-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"tabular-figures",toc:!0},"Tabular figures"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"tabular-nums")," utility to use numeric glyphs that have uniform/tabular widths (rather than proportional). This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"tnum")," OpenType feature.")),Object(p.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source tabular-nums text-3xl text-amber-600">12121</p>\n    <p class="font-source tabular-nums text-3xl text-amber-600">90909</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tabular-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tabular-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"diagonal-fractions",toc:!0},"Diagonal fractions"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"diagonal-fractions")," utility to replace numbers separated by a slash with common diagonal fractions. This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature.")),Object(p.a)(u.a,{preview:'\n  <p class="font-source diagonal-fractions text-3xl text-center text-emerald-600">1/2 3/4 5/6</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">diagonal-fractions</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"stacked-fractions",toc:!0},"Stacked fractions"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"stacked-fractions")," utility to replace numbers separated by a slash with common stacked fractions. This corresponds to the ",Object(p.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature. Very few fonts seem to support this feature \u2014 we\u2019ve used Ubuntu Mono here.")),Object(p.a)(u.a,{preview:'\n  <p class="font-ubuntu-mono stacked-fractions text-3xl text-center text-light-blue-600">1/2 3/4 5/6</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">stacked-fractions</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"resetting-numeric-font-variants",toc:!0},"Resetting numeric font variants"),Object(p.a)("p",null,"Use the ",Object(p.a)("inlineCode",{parentName:"p"},"normal-nums")," propery to reset numeric font variants. This is usually useful for resetting a font feature at a particular breakpoint:"),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"slashed-zero tabular-nums ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:normal-nums")," ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"12345",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control ",Object(p.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," property of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(p.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:tabular-nums")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"tabular-nums")," utility at only medium screen sizes and above."),Object(p.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(p.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"proportional-nums ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:tabular-nums"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(p.a)("p",null,"For more information about Tailwind\u2019s responsive design features, check out the ",Object(p.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(p.a)(g.a,{plugin:"fontVariantNumeric",mdxType:"Variants"}),Object(p.a)("div",{className:"prose"},Object(p.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(p.a)(b.a,{plugin:"fontVariantNumeric",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=h},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return h}));var n=t("HALo"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),p=t("ZMKu"),i=o.a.createElement;const r={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){const a=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:c,1:p}=Object(s.useState)({});return Object(s.useEffect)((()=>{if(!t)return;function e(){p({height:a.current.contentDocument.body.scrollHeight})}const n=new window.ResizeObserver(e);return e(),n.observe(a.current.contentDocument.body),()=>{n.disconnect()}}),[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function g({color:e,snippet:a}){return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",r[e],{"bg-gray-800":!r[e]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":r[e]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:a}})))}function b({preview:e,src:a,snippet:t,previewClassName:n,color:s="gray"}){return i("div",{className:"relative overflow-hidden mb-8"},e?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[s],n,{"p-10":!n}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[s])}),i(g,{color:s,snippet:t}))}function h({preview:e,src:a,previewClassName:t,snippet:n,color:o="gray",min:r=!1}){const b=Object(s.useRef)(),h=Object(p.h)(0),f=Object(s.useRef)(),{0:O,1:j}=Object(s.useState)(!1);return Object(s.useEffect)((()=>{const e=new window.ResizeObserver((()=>{h.set(0)}));return e.observe(b.current),()=>{e.disconnect()}}),[]),i("div",{className:"relative mb-8"},i("div",{ref:b,className:`relative rounded-t-xl ${u[o]}`},i("div",{className:r?"md:w-88":void 0},i(p.d.div,{className:"relative",style:{marginRight:Object(p.i)(h,(e=>-e))}},e?i("div",{className:Object(c.a)("rounded-t-xl",t,l[o],{"p-10":!t}),dangerouslySetInnerHTML:{__html:e}}):i(d,{src:a,className:Object(c.a)("w-full rounded-t-xl",l[o],{"pointer-events-none":O})}))),i("div",{ref:f,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(p.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:f,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing "+(r?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),j(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),j(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:`h-3 flex-none ${m[o]}`,style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:o,snippet:n}))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("cpVT"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),p=t("AI3G"),i=t("Zb5r"),r=o.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m({plugin:e,name:a}){const t=Object(p.a)(e);return a=a||e.replace(/([a-z])([A-Z])/g,((e,a,t)=>`${a} ${t.toLowerCase()}`)),r("div",{className:"prose"},r("p",null,"If you don't plan to use the ",a," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(t.map((e=>`<code>${e}</code>`)))}})," ",t.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(c.a,{path:"corePlugins",before:"...",add:t.reduce(((e,a)=>u(u({},e),{},{[a]:!1})),{})}))}}},[["V7N5",0,2,6,1,3,4,5,7]]]);