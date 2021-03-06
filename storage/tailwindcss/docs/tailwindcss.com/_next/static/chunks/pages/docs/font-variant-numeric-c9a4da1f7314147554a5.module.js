(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[91],{"5xSE":function(e,a,t){"use strict";e.exports=function(e){return"[object RegExp]"===Object.prototype.toString.call(e)}},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return p}));var n=t("q1tI"),s=t.n(n),o=t("98BF"),c=t("Zb5r"),r=t("AOjV"),i=s.a.createElement;function p(e){var{plugin:a,name:t}=e,n=o.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase()));var s=["responsive","hover","focus","active","group-hover"].filter(e=>!n.includes(e)).slice(0,2),p="By default, ".concat(n.length?"only ".concat(Object(c.a)(n).replace("dark","dark mode <em>(if enabled)</em>")):"no"," variants are generated for ").concat(t," utilities.");return i("div",{className:"prose"},i("p",{dangerouslySetInnerHTML:{__html:p}}),i("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",i("code",null,a)," property in the ",i("code",null,"variants")," section of your"," ",i("code",null,"tailwind.config.js")," file."),i("p",null,"For example, this config will ",n.length>0?"also ":"","generate"," ",Object(c.a)(s)," variants:"),i(r.a,{path:"variants.extend",before:"...",add:{[a]:s}}))}},AOjV:function(e,a,t){"use strict";t.d(a,"a",(function(){return l}));var n=t("q1tI"),s=t.n(n),o=(t("Btb4"),t("AI3G")),c=t("iuhU"),r=s.a.createElement;function i(e){var{value:a}=e;return"string"===typeof a?r("span",{className:"token string"},"'",a,"'"):Array.isArray(a)?r(s.a.Fragment,null,r("span",{className:"token punctuation"},"["),a.map((e,t)=>r(n.Fragment,{key:t},r(i,{value:e}),t===a.length-1?null:r("span",{className:"token punctuation"},", "))),r("span",{className:"token punctuation"},"]")):"boolean"===typeof a?r("span",{className:"token boolean"},a.toString()):a.toString()}function p(e){var{edits:a,indent:t="",type:s="inserted"}=e;return r("span",{className:Object(c.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(a).map((e,o)=>{return r(n.Fragment,{key:o},r("span",{className:Object(c.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",t,/^[a-z_$][a-z0-9_$]*$/i.test(p=e)?p:"'".concat(p,"'"),r("span",{className:"token operator"},":")," ",r(i,{value:a[e]}),r("span",{className:"token punctuation"},","),"\n");var p}))}function l(e){var{path:a,add:t,remove:s,before:c,after:i}=e;return a="string"===typeof a?a.split("."):a,r("div",{className:"prose"},r("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  ",r("span",{className:"token comment"},"// tailwind.config.js"),"\n","  module",r("span",{className:"token punctuation"},"."),r("span",{className:"token property-access"},"exports")," ",r("span",{className:"token operator"},"=")," ",r("span",{className:"token punctuation"},"{"),"\n",a.map((e,a)=>r(n.Fragment,{key:a},"  ","  ".repeat(a+1),e,r("span",{className:"token operator"},":")," ",r("span",{className:"token punctuation"},"{"),"\n")),c&&Object(o.a)(c).map((e,t)=>r(n.Fragment,{key:t},"  ".repeat(a.length+2),r("span",{className:"token comment"},"// ".concat(e)),"\n"))),s&&r(p,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&r(p,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},i&&Object(o.a)(i).map(e=>"".concat("  ".repeat(a.length+2)).concat(e,"\n")),a.map((e,t)=>r(n.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")),"  }")))))}},Btb4:function(e,a,t){"use strict";const n=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;e.exports=(e,a,t)=>{const c=[];return function e(a,t,r){let i;(t=t||{}).indent=t.indent||"\t",r=r||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:r,indent:r+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const p=e=>{if(void 0===t.inlineCharacterLimit)return e;const a=e.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:e.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),r).replace(new RegExp(i.indent,"g"),r+t.indent)};if(-1!==c.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||n(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";c.push(a);const n="["+i.newLine+a.map((n,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace;let c=e(n,t,r+t.indent);return t.transform&&(c=t.transform(a,s,c)),i.indent+c+o}).join("")+i.pad+"]";return c.pop(),p(n)}if(s(a)){let n=Object.keys(a).concat(o(a));if(t.filter&&(n=n.filter(e=>t.filter(a,e))),0===n.length)return"{}";c.push(a);const s="{"+i.newLine+n.map((s,o)=>{const c=n.length-1===o?i.newLine:","+i.newLineOrSpace,p="symbol"===typeof s,l=!p&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=p||l?s:e(s,t);let m=e(a[s],t,r+t.indent);return t.transform&&(m=t.transform(a,s,m)),i.indent+String(u)+": "+m+c}).join("")+i.pad+"}";return c.pop(),p(s)}return a=String(a).replace(/[\r\n]/g,e=>"\n"===e?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(e,a,t)}},GAX2:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=e=>Object.getOwnPropertySymbols(e).filter(a=>Object.prototype.propertyIsEnumerable.call(e,a))},V7N5:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-variant-numeric",function(){return t("nji4")}])},Zb5r:function(e,a,t){"use strict";function n(e){return e.reduce((a,t,n)=>0===n?t:n===e.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t),"")}t.d(a,"a",(function(){return n}))},ap0H:function(e,a,t){"use strict";t.d(a,"a",(function(){return i}));var n=t("q1tI"),s=t.n(n),o=t("8Kt/"),c=t.n(o),r=s.a.createElement;function i(e){var{suffix:a,children:t}=e,n=t+(a?" - ".concat(a):"");return r(c.a,null,r("title",{key:"title"},n),r("meta",{key:"twitter:title",name:"twitter:title",content:n}),r("meta",{key:"og:title",property:"og:title",content:n}))}},nji4:function(e,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return O}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),d=t("I6Nb"),g=t("8C7G"),b=t("wH44"),f=(c.a.createElement,{Layout:m.DocumentationLayout,classes:{plugin:function(){return function(e){var{addUtilities:a}=e;a({".normal-nums":{fontVariantNumeric:"normal"},".ordinal":{fontVariantNumeric:"ordinal"},".slashed-zero":{fontVariantNumeric:"slashed-zero"},".lining-nums":{fontVariantNumeric:"lining-nums"},".oldstyle-nums":{fontVariantNumeric:"oldstyle-nums"},".proportional-nums":{fontVariantNumeric:"proportional-nums"},".tabular-nums":{fontVariantNumeric:"tabular-nums"},".diagonal-fractions":{fontVariantNumeric:"diagonal-fractions"},".stacked-fractions":{fontVariantNumeric:"stacked-fractions"}})}}},meta:{title:"Font Variant Numeric",description:"Utilities for controlling the variant of numbers."},tableOfContents:[{title:"Usage",slug:"usage",children:[{title:"Ordinal",slug:"ordinal"},{title:"Slashed Zero",slug:"slashed-zero"},{title:"Lining figures",slug:"lining-figures"},{title:"Oldstyle figures",slug:"oldstyle-figures"},{title:"Proportional figures",slug:"proportional-figures"},{title:"Tabular figures",slug:"tabular-figures"},{title:"Diagonal fractions",slug:"diagonal-fractions"},{title:"Stacked fractions",slug:"stacked-fractions"},{title:"Resetting numeric font variants",slug:"resetting-numeric-font-variants"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Variants",slug:"variants"},{title:"Disabling",slug:"disabling"}]}]}),h=d.ContentsLayout;function O(e){var{components:a}=e,t=Object(s.a)(e,["components"]);return Object(r.a)(h,Object(n.a)({},f,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utilities to enable additional glyphs for numbers, fractions, and ordinal markers ",Object(r.a)("em",{parentName:"p"},"(in fonts that support them)"),"."),Object(r.a)("p",null,"These utilities are composable so you can enable multiple ",Object(r.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," features by combining multiple classes in your HTML:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"ordinal slashed-zero tabular-nums")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"1234567890",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"Note that many fonts don't support these features ",Object(r.a)("em",{parentName:"p"},"(stacked fractions support for example is especially rare)"),", so some of these utilities may have no effect depending on the font family you are using."),Object(r.a)(l.a,{level:3,id:"ordinal",toc:!0},"Ordinal"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"ordinal")," utility to enable special glyphs for the ordinal markers.")),Object(r.a)(u.a,{preview:'\n  <p class="font-source ordinal text-3xl text-center text-emerald-600">1st</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">ordinal</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"slashed-zero",toc:!0},"Slashed Zero"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"slashed-zero")," utility to force a 0 with a slash; this is useful when a clear distinction between O and 0 is needed.")),Object(r.a)(u.a,{preview:'\n  <p class="font-source slashed-zero text-3xl text-center text-light-blue-600">0</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">slashed-zero</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"lining-figures",toc:!0},"Lining figures"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"lining-nums")," utility to use the numeric glyphs that are all aligned by their baseline. This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"lnum")," OpenType feature. This is the default for most fonts.")),Object(r.a)(u.a,{preview:'\n  <p class="font-source lining-nums text-3xl text-center text-rose-600">1234567890</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">lining-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"rose",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"oldstyle-figures",toc:!0},"Oldstyle figures"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"oldstyle-nums")," utility to use numeric glyphs where some numbers have descenders. This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"onum")," OpenType feature.")),Object(r.a)(u.a,{preview:'\n  <p class="font-source oldstyle-nums text-3xl text-center text-fuchsia-600">1234567890</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">oldstyle-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"fuchsia",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"proportional-figures",toc:!0},"Proportional figures"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"proportional-nums")," utility to use numeric glyphs that have proportional widths (rather than uniform/tabular). This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"pnum")," OpenType feature.")),Object(r.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source proportional-nums text-3xl text-indigo-600">12121</p>\n    <p class="font-source proportional-nums text-3xl text-indigo-600">90909</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">proportional-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">proportional-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"indigo",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"tabular-figures",toc:!0},"Tabular figures"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"tabular-nums")," utility to use numeric glyphs that have uniform/tabular widths (rather than proportional). This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"tnum")," OpenType feature.")),Object(r.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source tabular-nums text-3xl text-amber-600">12121</p>\n    <p class="font-source tabular-nums text-3xl text-amber-600">90909</p>\n  </div>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tabular-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">tabular-nums</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"amber",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"diagonal-fractions",toc:!0},"Diagonal fractions"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"diagonal-fractions")," utility to replace numbers separated by a slash with common diagonal fractions. This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature.")),Object(r.a)(u.a,{preview:'\n  <p class="font-source diagonal-fractions text-3xl text-center text-emerald-600">1/2 3/4 5/6</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">diagonal-fractions</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"emerald",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"stacked-fractions",toc:!0},"Stacked fractions"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"stacked-fractions")," utility to replace numbers separated by a slash with common stacked fractions. This corresponds to the ",Object(r.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature. Very few fonts seem to support this feature \u2014 we've used Ubuntu Mono here.")),Object(r.a)(u.a,{preview:'\n  <p class="font-ubuntu-mono stacked-fractions text-3xl text-center text-light-blue-600">1/2 3/4 5/6</p>\n',src:void 0,snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="code-highlight bg-code-highlight">stacked-fractions</span> ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0,color:"lightBlue",min:!1}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"resetting-numeric-font-variants",toc:!0},"Resetting numeric font variants"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"normal-nums")," propery to reset numeric font variants. This is usually useful for resetting a font feature at a particular breakpoint:"),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"slashed-zero tabular-nums ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:normal-nums")," ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"12345",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To control ",Object(r.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," property of an element at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(r.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:tabular-nums")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"tabular-nums")," utility at only medium screen sizes and above."),Object(r.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(r.a)("pre",Object(n.a)({parentName:"div"},{className:"language-html"}),Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation attr-equals"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"proportional-nums ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"md:tabular-nums"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">"))))),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"variants",toc:!0},"Variants")),Object(r.a)(g.a,{plugin:"fontVariantNumeric",mdxType:"Variants"}),Object(r.a)("div",{className:"prose"},Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling")),Object(r.a)(b.a,{plugin:"fontVariantNumeric",mdxType:"Disabling"}))}O.isMDXComponent=!0,O.layoutProps=f},"p+I8":function(e,a,t){"use strict";e.exports=function(e){var a=typeof e;return null!==e&&("object"===a||"function"===a)}},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return f}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("iuhU"),r=t("ZMKu"),i=o.a.createElement,p={amber:"bg-amber-500",emerald:"bg-emerald-500",fuchsia:"bg-fuchsia-400",indigo:"bg-indigo-400",lightBlue:"bg-light-blue-500",purple:"bg-purple-400",rose:"bg-rose-400"},l={amber:"bg-gradient-to-r from-amber-50 to-amber-100",emerald:"bg-gradient-to-r from-emerald-50 to-teal-100",fuchsia:"bg-gradient-to-r from-fuchsia-50 to-fuchsia-100",gray:"bg-gradient-to-r from-gray-50 to-gray-100",indigo:"bg-gradient-to-r from-indigo-50 to-indigo-100",lightBlue:"bg-gradient-to-r from-light-blue-50 to-light-blue-100",purple:"bg-gradient-to-r from-purple-50 to-purple-100",rose:"bg-gradient-to-r from-rose-50 to-rose-100"},u={amber:"bg-stripes bg-stripes-amber-500 bg-amber-100",emerald:"bg-stripes bg-stripes-emerald-500 bg-emerald-100",fuchsia:"bg-stripes bg-stripes-fuchsia-500 bg-fuchsia-100",indigo:"bg-stripes bg-stripes-indigo-500 bg-indigo-100",lightBlue:"bg-stripes bg-stripes-light-blue-500 bg-light-blue-100",purple:"bg-stripes bg-stripes-purple-500 bg-purple-100",rose:"bg-stripes bg-stripes-rose-500 bg-rose-100"},m={amber:"text-amber-700",emerald:"text-emerald-700",fuchsia:"text-fuchsia-700",indigo:"text-indigo-700",lightBlue:"text-light-blue-700",purple:"text-purple-700",rose:"text-rose-700"};function d(e){var a=Object(s.useRef)(),{0:t,1:o}=Object(s.useState)(!1),{0:c,1:r}=Object(s.useState)({});return Object(s.useEffect)(()=>{if(t){var e=new window.ResizeObserver(n);return n(),e.observe(a.current.contentDocument.body),()=>{e.disconnect()}}function n(){r({height:a.current.contentDocument.body.scrollHeight})}},[t]),i("iframe",Object(n.a)({},e,{ref:a,onLoad:()=>o(!0),style:c}))}function g(e){var{color:a,snippet:t}=e;return i("div",{className:Object(c.a)("overflow-hidden rounded-b-xl",p[a],{"bg-gray-800":!p[a]})},i("pre",{className:Object(c.a)("scrollbar-none overflow-x-auto p-6 text-sm leading-snug language-html text-white",{"bg-black bg-opacity-75":p[a]})},i("code",{className:"language-html",dangerouslySetInnerHTML:{__html:t}})))}function b(e){var{preview:a,src:t,snippet:n,previewClassName:s,color:o="gray"}=e;return i("div",{className:"relative overflow-hidden mb-8"},a?i("div",{className:Object(c.a)("rounded-t-xl overflow-hidden",l[o],s,{"p-10":!s}),dangerouslySetInnerHTML:{__html:a}}):i(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[o])}),i(g,{color:o,snippet:n}))}function f(e){var{preview:a,src:t,previewClassName:n,snippet:o,color:p="gray",min:b=!1}=e,f=Object(s.useRef)(),h=Object(r.h)(0),O=Object(s.useRef)(),{0:j,1:k}=Object(s.useState)(!1);return Object(s.useEffect)(()=>{var e=new window.ResizeObserver(()=>{h.set(0)});return e.observe(f.current),()=>{e.disconnect()}},[]),i("div",{className:"relative mb-8"},i("div",{ref:f,className:"relative rounded-t-xl ".concat(u[p])},i("div",{className:b?"md:w-88":void 0},i(r.d.div,{className:"relative",style:{marginRight:Object(r.i)(h,e=>-e)}},a?i("div",{className:Object(c.a)("rounded-t-xl",n,l[p],{"p-10":!n}),dangerouslySetInnerHTML:{__html:a}}):i(d,{src:t,className:Object(c.a)("w-full rounded-t-xl",l[p],{"pointer-events-none":j})}))),i("div",{ref:O,className:"absolute inset-y-0 -right-4 left-80 ml-4 pointer-events-none"},i(r.d.div,{drag:"x",_dragX:h,dragMomentum:!1,dragElastic:0,dragConstraints:O,className:"pointer-events-auto absolute top-1/2 -mt-4 w-8 hidden md:flex items-center justify-center cursor-grab active:cursor-grabbing ".concat(b?"right-0 md:left-0 md:right-auto":"right-0"),style:{x:h},onDragStart:()=>{document.body.classList.add("cursor-grabbing"),k(!0)},onDragEnd:()=>{document.body.classList.remove("cursor-grabbing"),k(!1)}},i("div",{className:"flex-none rounded bg-white shadow flex items-center justify-center h-8",style:{width:"0.9375rem"}},i("svg",{viewBox:"0 0 14 24",fill:"none",strokeWidth:"2",stroke:"currentColor",className:"h-3 flex-none ".concat(m[p]),style:{width:"0.4375rem"}},i("path",{d:"M 1 0 V 24 M 7 0 V 24 M 13 0 V 24"})))))),i(g,{color:p,snippet:o}))}},vRWG:function(e,a,t){"use strict";t.r(a),t.d(a,"DocumentationLayout",(function(){return d}));var n=t("wx14"),s=t("q1tI"),o=t.n(s),c=t("ekQu"),r=t("8Kt/"),i=t.n(r),p=t("nOHt"),l=t("ap0H"),u=t("1Q1k"),m=o.a.createElement;function d(e){var a=Object(p.useRouter)();return m(o.a.Fragment,null,m(l.a,{suffix:"/"===a.pathname?void 0:"Tailwind CSS"},e.layoutProps.meta.metaTitle||e.layoutProps.meta.title),m(i.a,null,m("meta",{key:"twitter:card",name:"twitter:card",content:"summary"}),m("meta",{key:"twitter:image",name:"twitter:image",content:"https://tailwindcss.com".concat("/_next/static/media/twitter-square.daf77586b35e90319725e742f6e069f9.jpg")})),m(c.b,Object(n.a)({nav:u.a},e)))}},wH44:function(e,a,t){"use strict";t.d(a,"a",(function(){return m}));var n=t("rePB"),s=t("q1tI"),o=t.n(s),c=t("AOjV"),r=t("AI3G"),i=t("Zb5r"),p=o.a.createElement;function l(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(n.a)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function m(e){var{plugin:a,name:t}=e,n=Object(r.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(e,a,t)=>"".concat(a," ").concat(t.toLowerCase())),p("div",{className:"prose"},p("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",p("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(n.map(e=>"<code>".concat(e,"</code>")))}})," ",n.length>1?"properties":"property"," to ",p("code",null,"false")," in the"," ",p("code",null,"corePlugins")," section of your config file:"),p(c.a,{path:"corePlugins",before:"...",add:n.reduce((e,a)=>u(u({},e),{},{[a]:!1}),{})}))}}},[["V7N5",0,2,6,1,3,4,5,7]]]);