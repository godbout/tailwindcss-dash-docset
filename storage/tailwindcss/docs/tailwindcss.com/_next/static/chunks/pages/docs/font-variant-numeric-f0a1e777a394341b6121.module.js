(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[99],{"5xSE":function(a,e,n){"use strict";a.exports=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},"8C7G":function(a,e,n){"use strict";n.d(e,"a",(function(){return i}));var t=n("q1tI"),s=n.n(t),o=n("98BF"),p=n("Zb5r"),c=n("AOjV"),r=s.a.createElement;function i(a){var{plugin:e,name:n}=a,t=o.defaultConfig.variants[e]||["responsive"];n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(a=>!t.includes(a)).slice(0,2);return r(s.a.Fragment,null,r("p",null,"By default, ",t.length?"only ".concat(Object(p.a)(t)):"no"," variants are generated for ",n," utilities."),r("p",null,"You can control which variants are generated for the ",n," utilities by modifying the"," ",r("code",null,e)," property in the ",r("code",null,"variants")," section of your"," ",r("code",null,"tailwind.config.js")," file."),r("p",null,"For example, this config will ",t.length>0?"also ":"","generate"," ",Object(p.a)(i)," variants:"),r(c.a,{path:"variants",before:"// ...",remove:{[e]:t},add:{[e]:[...t,...i]}}))}},AOjV:function(a,e,n){"use strict";n.d(e,"a",(function(){return u}));var t=n("q1tI"),s=n.n(t),o=n("Btb4"),p=n.n(o),c=n("AI3G"),r=n("iuhU"),i=s.a.createElement;function l(a){var{edits:e,indent:n="",type:s="inserted"}=a;return i("span",{className:Object(r.a)("token",{"inserted-sign inserted":"inserted"===s,"deleted-sign deleted":"inserted"!==s})},Object.keys(e).map((a,o)=>i(t.Fragment,{key:o},i("span",{className:Object(r.a)("token prefix",{inserted:"inserted"===s,deleted:"inserted"!==s})},"inserted"===s?"+":"-")," ",n,function(a){return/^[a-z_$][a-z0-9_$]*$/i.test(a)?a:"'".concat(a,"'")}(a),":"," ",p()(e[a],{indent:"  "}).replace(/\[([^\]]+)\]/g,(a,e)=>"[".concat(e.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((a,e)=>"".concat(0===e?"":"+ "+n).concat(a)).join("\n"),",\n")))}function u(a){var{path:e,add:n,remove:s,before:o,after:p}=a;return e="string"===typeof e?e.split("."):e,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",e.map((a,e)=>i(t.Fragment,{key:e},"  ","  ".repeat(e+1),a,": ","{\n")),o&&Object(c.a)(o).map(a=>"".concat("  ".repeat(e.length+2)).concat(a,"\n"))),s&&i(l,{edits:s,type:"deleted",indent:"  ".repeat(e.length+1)}),n&&i(l,{edits:n,type:"inserted",indent:"  ".repeat(e.length+1)}),i("span",{className:"token unchanged"},p&&Object(c.a)(p).map(a=>"".concat("  ".repeat(e.length+2)).concat(a,"\n")),e.map((a,n)=>i(t.Fragment,{key:n},"  ","  ".repeat(e.length-n),"}\n")),"  }")))}},Btb4:function(a,e,n){"use strict";const t=n("5xSE"),s=n("p+I8"),o=n("GAX2").default;a.exports=(a,e,n)=>{const p=[];return function a(e,n,c){let r;(n=n||{}).indent=n.indent||"\t",c=c||"",r=void 0===n.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+n.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=a=>{if(void 0===n.inlineCharacterLimit)return a;const e=a.replace(new RegExp(r.newLine,"g"),"").replace(new RegExp(r.newLineOrSpace,"g")," ").replace(new RegExp(r.pad+"|"+r.indent,"g"),"");return e.length<=n.inlineCharacterLimit?e:a.replace(new RegExp(r.newLine+"|"+r.newLineOrSpace,"g"),"\n").replace(new RegExp(r.pad,"g"),c).replace(new RegExp(r.indent,"g"),c+n.indent)};if(-1!==p.indexOf(e))return'"[Circular]"';if(null===e||void 0===e||"number"===typeof e||"boolean"===typeof e||"function"===typeof e||"symbol"===typeof e||t(e))return String(e);if(e instanceof Date)return`new Date('${e.toISOString()}')`;if(Array.isArray(e)){if(0===e.length)return"[]";p.push(e);const t="["+r.newLine+e.map((t,s)=>{const o=e.length-1===s?r.newLine:","+r.newLineOrSpace;let p=a(t,n,c+n.indent);return n.transform&&(p=n.transform(e,s,p)),r.indent+p+o}).join("")+r.pad+"]";return p.pop(),i(t)}if(s(e)){let t=Object.keys(e).concat(o(e));if(n.filter&&(t=t.filter(a=>n.filter(e,a))),0===t.length)return"{}";p.push(e);const s="{"+r.newLine+t.map((s,o)=>{const p=t.length-1===o?r.newLine:","+r.newLineOrSpace,i="symbol"===typeof s,l=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=i||l?s:a(s,n);let m=a(e[s],n,c+n.indent);return n.transform&&(m=n.transform(e,s,m)),r.indent+String(u)+": "+m+p}).join("")+r.pad+"}";return p.pop(),i(s)}return e=String(e).replace(/[\r\n]/g,a=>"\n"===a?"\\n":"\\r"),!1===n.singleQuotes?`"${e=e.replace(/"/g,'\\"')}"`:`'${e=e.replace(/\\?'/g,"\\'")}'`}(a,e,n)}},"Ca+n":function(a,e,n){"use strict";n.d(e,"a",(function(){return m}));var t=n("q1tI"),s=n.n(t),o=n("S5AU"),p=n.n(o),c=n("iuhU"),r=s.a.createElement,i=["","sm:","md:","lg:","xl:"];function l(a){var{children:e,active:n,onClick:t}=a;return r("button",{type:"button",className:Object(c.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":n,"text-gray-500":!n}),onClick:t},e)}var u=a=>'<div class="'.concat(a,'"></div>');function m(a){var{classNames:e,snippet:n=u,preview:s,previewClassName:o}=a,m=Array.isArray(e[0])?e.length:1,{0:d,1:g}=Object(t.useState)(0);return r("div",{className:"mt-8"},r("div",{className:"flex justify-center"},r("div",{className:"grid grid-cols-5 mb-2 bg-white"},r(l,{active:0===d,onClick:()=>g(0)},r("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"all")),r(l,{active:1===d,onClick:()=>g(1)},r("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"sm")),r(l,{active:2===d,onClick:()=>g(2)},r("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"md")),r(l,{active:3===d,onClick:()=>g(3)},r("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),r("p",{className:"text-xs"},"lg")),r(l,{active:4===d,onClick:()=>g(4)},r("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},r("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),r("p",{className:"text-xs"},"xl")))),r("div",{className:"overflow-hidden mb-8"},r("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},r("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},r("code",{className:"inline-block p-4"},p()(n(1===m?"{{CLASSNAMES}}":Array.from({length:m}).map((a,e)=>"{{CLASSNAMES[".concat(e,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((a,n)=>{if(n%2===1){var t=a.match(/\[([0-9]+)\]/);return(t?e[parseInt(t[1],10)]:e).map((a,e)=>a?r("span",{key:"".concat(n,"-").concat(e),className:d===e?"text-code-yellow":""},0===e?"":" ",a.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(a=>"".concat(i[e]).concat(a)).join(" ")):null).filter(Boolean)}return a})))),r("div",{className:Object(c.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",o,{"p-4":!o})},s(function(a){if(m>1)return e.map(e=>{for(var n=a;n>=0;n--)if(e[n])return e[n].replace(/\(([^)]+)\)/g,"$1")});for(var n=a;n>=0;n--)if(e[n])return e[n].replace(/\(([^)]+)\)/g,"$1")}(d)))))}},GAX2:function(a,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=a=>Object.getOwnPropertySymbols(a).filter(e=>Object.prototype.propertyIsEnumerable.call(a,e))},"IBu/":function(a,e,n){"use strict";const t=n("sQdO");a.exports=a=>{const e=t(a);if(0===e)return a;const n=new RegExp(`^[ \\t]{${e}}`,"gm");return a.replace(n,"")}},S5AU:function(a,e,n){"use strict";const t=n("IBu/"),s=n("S6im");a.exports=(a,e=0,n)=>s(t(a),e,n)},S6im:function(a,e,n){"use strict";a.exports=(a,e=1,n)=>{if(n={indent:" ",includeEmptyLines:!1,...n},"string"!==typeof a)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof a}\``);if("number"!==typeof e)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof e}\``);if("string"!==typeof n.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof n.indent}\``);if(0===e)return a;const t=n.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return a.replace(t,n.indent.repeat(e))}},V7N5:function(a,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/font-variant-numeric",function(){return n("nji4")}])},Zb5r:function(a,e,n){"use strict";function t(a){return a.reduce((e,n,t)=>0===t?n:t===a.length-1?"".concat(e," and ").concat(n):"".concat(e,", ").concat(n),"")}n.d(e,"a",(function(){return t}))},nji4:function(a,e,n){"use strict";n.r(e),n.d(e,"Layout",(function(){return f})),n.d(e,"classes",(function(){return O})),n.d(e,"meta",(function(){return k})),n.d(e,"tableOfContents",(function(){return h})),n.d(e,"default",(function(){return N}));var t=n("wx14"),s=n("Ff2n"),o=n("q1tI"),p=n.n(o),c=n("7ljp"),r=n("YFqc"),i=n.n(r),l=n("tc9R"),u=n("pOT7"),m=n("vRWG"),d=n("I6Nb"),g=n("8C7G"),b=n("wH44"),f=(n("Ca+n"),p.a.createElement,m.DocumentationLayout),O={plugin:function(){return function(a){var{addUtilities:e}=a;e({".normal-nums":{fontVariantNumeric:"normal"},".ordinal":{fontVariantNumeric:"ordinal"},".slashed-zero":{fontVariantNumeric:"slashed-zero"},".lining-nums":{fontVariantNumeric:"lining-nums"},".oldstyle-nums":{fontVariantNumeric:"oldstyle-nums"},".proportional-nums":{fontVariantNumeric:"proportional-nums"},".tabular-nums":{fontVariantNumeric:"tabular-nums"},".diagonal-fractions":{fontVariantNumeric:"diagonal-fractions"},".stacked-fractions":{fontVariantNumeric:"stacked-fractions"}})}}},k={title:"Font Variant Numeric",description:"Utilities for controlling the variant of numbers.",featureVersion:"v1.8.0+"},h=[{title:"Usage",slug:"usage",children:[{title:"Ordinal",slug:"ordinal"},{title:"Slashed Zero",slug:"slashed-zero"},{title:"Lining figures",slug:"lining-figures"},{title:"Oldstyle figures",slug:"oldstyle-figures"},{title:"Proportional figures",slug:"proportional-figures"},{title:"Tabular figures",slug:"tabular-figures"},{title:"Diagonal fractions",slug:"diagonal-fractions"},{title:"Stacked fractions",slug:"stacked-fractions"},{title:"Resetting numeric font variants",slug:"resetting-numeric-font-variants"}]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:f,classes:O,meta:k,tableOfContents:h},v=d.ContentsLayout;function N(a){var{components:e}=a,n=Object(s.a)(a,["components"]);return Object(c.a)(v,Object(t.a)({},j,n,{components:e,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utilities to enable additional glyphs for numbers, fractions, and ordinal markers ",Object(c.a)("em",{parentName:"p"},"(in fonts that support them)"),"."),Object(c.a)("p",null,"These utilities are composable so you can enable multiple ",Object(c.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," features by combining multiple classes in your HTML:"),Object(c.a)("pre",{className:"language-html"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"ordinal slashed-zero tabular-nums ...",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"1234567890",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(c.a)("p",null,"Note that many fonts don't support these features ",Object(c.a)("em",{parentName:"p"},"(stacked fractions support for example is especially rare)"),", so some of these utilities may have no effect depending on the font family you are using."),Object(c.a)(l.a,{level:3,id:"ordinal",toc:!0},"Ordinal"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".ordinal")," utility to enable special glyphs for the ordinal markers."),Object(c.a)(u.a,{preview:'\n  <p class="font-source ordinal text-xl text-center text-gray-800">1st</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>ordinal ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1st<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"slashed-zero",toc:!0},"Slashed Zero"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".slashed-zero")," utility to force a 0 with a slash; this is useful when a clear distinction between O and 0 is needed."),Object(c.a)(u.a,{preview:'\n  <p class="font-source slashed-zero text-xl text-center text-gray-800">0</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>slashed-zero ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>0<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"lining-figures",toc:!0},"Lining figures"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".lining-nums")," utility to use the numeric glyphs that are all aligned by their baseline. This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"lnum")," OpenType feature. This is the default for most fonts."),Object(c.a)(u.a,{preview:'\n  <p class="font-source lining-nums text-xl text-center text-gray-800">1234567890</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>lining-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"oldstyle-figures",toc:!0},"Oldstyle figures"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".oldstyle-nums")," utility to use numeric glyphs where some numbers have descenders. This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"onum")," OpenType feature."),Object(c.a)(u.a,{preview:'\n  <p class="font-source oldstyle-nums text-xl text-center text-gray-800">1234567890</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>oldstyle-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1234567890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"proportional-figures",toc:!0},"Proportional figures"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".proportional-nums")," utility to use numeric glyphs that have proportional widths (rather than uniform/tabular). This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"pnum")," OpenType feature."),Object(c.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source proportional-nums text-xl text-gray-800">12121</p>\n    <p class="font-source proportional-nums text-xl text-gray-800">90909</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>proportional-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>proportional-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"tabular-figures",toc:!0},"Tabular figures"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".tabular-nums")," utility to use numeric glyphs that have uniform/tabular widths (rather than proportional). This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"tnum")," OpenType feature."),Object(c.a)(u.a,{preview:'\n  <div class="max-w-sm text-right">\n    <p class="font-source tabular-nums text-xl text-gray-800">12121</p>\n    <p class="font-source tabular-nums text-xl text-gray-800">90909</p>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tabular-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>12121<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>tabular-nums ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>90909<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"diagonal-fractions",toc:!0},"Diagonal fractions"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".diagonal-fractions")," utility to replace numbers separated by a slash with common diagonal fractions. This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature."),Object(c.a)(u.a,{preview:'\n  <p class="font-source diagonal-fractions text-xl text-center text-gray-800">1/2 3/4 5/6</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>diagonal-fractions ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"stacked-fractions",toc:!0},"Stacked fractions"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".stacked-fractions")," utility to replace numbers separated by a slash with common stacked fractions. This corresponds to the ",Object(c.a)("inlineCode",{parentName:"p"},"frac")," OpenType feature. Very few fonts seem to support this feature \u2014 we've used Ubuntu Mono here."),Object(c.a)(u.a,{preview:'\n  <p class="font-ubuntu-mono stacked-fractions text-xl text-center text-gray-800">1/2 3/4 5/6</p>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>stacked-fractions ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1/2 3/4 5/6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:3,id:"resetting-numeric-font-variants",toc:!0},"Resetting numeric font variants"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".normal-nums")," propery to reset numeric font variants. This is usually useful for resetting a font feature at a particular breakpoint:"),Object(c.a)("pre",{className:"language-html"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"p")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"slashed-zero tabular-nums md:normal-nums ...",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"12345",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"p"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control ",Object(c.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," property of an element at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(c.a)("inlineCode",{parentName:"p"},"font-variant-numeric")," utility. For example, use ",Object(c.a)("inlineCode",{parentName:"p"},"md:tabular-nums")," to apply the ",Object(c.a)("inlineCode",{parentName:"p"},"tabular-nums")," utility at only medium screen sizes and above."),Object(c.a)("pre",{className:"language-html"},Object(c.a)("code",Object(t.a)({parentName:"pre"},{className:"language-html"}),Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token attr-value"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"'),"proportional-nums md:tabular-nums",Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(c.a)("span",Object(t.a)({parentName:"code"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token tag"}),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(c.a)("span",Object(t.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(g.a,{plugin:"fontVariantNumeric",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(b.a,{plugin:"fontVariantNumeric",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},"p+I8":function(a,e,n){"use strict";a.exports=function(a){var e=typeof a;return null!==a&&("object"===e||"function"===e)}},pOT7:function(a,e,n){"use strict";n.d(e,"a",(function(){return c}));var t=n("q1tI"),s=n.n(t),o=n("iuhU"),p=s.a.createElement;function c(a){var{preview:e,snippet:n,previewClassName:t}=a;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",t,{"p-4":!t}),dangerouslySetInnerHTML:{__html:e}}),p("div",{className:"rounded-b-lg bg-gray-800"},p("pre",{className:"scrollbar-none m-0 p-0 language-html"},p("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:n}}))))}},sQdO:function(a,e,n){"use strict";a.exports=a=>{const e=a.match(/^[ \t]*(?=\S)/gm);return e?e.reduce((a,e)=>Math.min(a,e.length),1/0):0}},wH44:function(a,e,n){"use strict";n.d(e,"a",(function(){return m}));var t=n("rePB"),s=n("q1tI"),o=n.n(s),p=n("AOjV"),c=n("AI3G"),r=n("Zb5r"),i=o.a.createElement;function l(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);e&&(t=t.filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable}))),n.push.apply(n,t)}return n}function u(a){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){Object(t.a)(a,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))}))}return a}function m(a){var{plugin:e,name:n}=a,t=Object(c.a)(e);return n=n||e.replace(/([a-z])([A-Z])/g,(a,e,n)=>"".concat(e," ").concat(n.toLowerCase())),i(o.a.Fragment,null,i("p",null,"If you don't plan to use the ",n," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(r.a)(t.map(a=>"<code>".concat(a,"</code>")))}})," ",t.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(p.a,{path:"corePlugins",before:"// ...",add:t.reduce((a,e)=>u(u({},a),{},{[e]:!1}),{})}))}}},[["V7N5",0,2,1,3,4]]]);