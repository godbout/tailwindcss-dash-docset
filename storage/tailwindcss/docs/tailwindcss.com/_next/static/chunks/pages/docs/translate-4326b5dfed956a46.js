(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5813],{5142:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/translate",function(){return c(48338)}])},48338:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return x}}),c(67294);var d,e=c(3905),f=c(41664),g=c(59533),h=c(5679),i=c(83434),j=c(53339),k=c(74296),l=c(24144),m=c(83629),n=c(66826),o=c(89205),p=c(62208),q=c(67822),r=c(69259),s=j.L,t={utilities:l.Z,sort:function(a){return(0,m.nR)(a)},transformProperties:function(a){var b=a.properties,c=b["--tw-translate-x"],d=b["--tw-translate-y"];return{transform:"translate".concat(c?"X":"Y","(").concat(c||d,")")}}},u=(d="Heading",function(a){return console.warn("Component "+d+" was not imported, exported, or provided by MDXProvider as global scope"),(0,e.kt)("div",Object.assign({},a))}),v={Layout:s,classes:t,meta:{title:"Translate",description:"Utilities for translating elements with transform."},slug:"translate",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Translating an element",slug:"translating-an-element",children:[]},{title:"Using negative values",slug:"using-negative-values",children:[]},{title:"Removing transforms",slug:"removing-transforms",children:[]},{title:"Hardware acceleration",slug:"hardware-acceleration",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},w=k.X_;function x(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,e.kt)(w,Object.assign({},v,c,{components:b,mdxType:"MDXLayout"}),(0,e.kt)(h.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,e.kt)(h.X,{level:3,id:"translating-an-element",nextElement:{type:"paragraph"}},"Translating an element"),(0,e.kt)("p",null,"Use the ",(0,e.kt)("inlineCode",{parentName:"p"},"translate-x-{amount}")," and ",(0,e.kt)("inlineCode",{parentName:"p"},"translate-y-{amount}")," utilities to translate an element."),(0,e.kt)(i.e,{p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex sm:block overflow-scroll sm:overflow-visible scroll-p-8\">\n  <div class=\"flex items-center justify-around gap-4 font-mono font-bold p-8 pb-12 shrink-0\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-slate-500 font-mono text-center mb-9 dark:text-slate-400\">translate-y-6</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 translate-y-6\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-slate-500 font-mono text-center mb-9 dark:text-slate-400\">-translate-y-6</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 -translate-y-6\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-slate-500 font-mono text-center mb-9 dark:text-slate-400\">translate-x-6</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-0\">\n          <img class=\"w-24 h-24 object-cover rounded-lg opacity-25\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        </div>\n        <div class=\"relative z-10 translate-x-6\">\n          <img class=\"w-24 h-24 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n          <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n  </div>\n"}),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"translate-y-6")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-translate-y-6")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"translate-x-6")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"using-negative-values",nextElement:{type:"paragraph"}},"Using negative values"),(0,e.kt)("p",null,"To use a negative translate value, prefix the class name with a dash to convert it to a negative value."),(0,e.kt)("pre",Object.assign({},{className:"language-html"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"img")," ",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"-translate-y-6")," ...",(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,e.kt)(h.X,{level:3,id:"removing-transforms",nextElement:{type:"jsx"}},"Removing transforms"),(0,e.kt)(r.R,{defaultClass:"scale-75 translate-x-4 skew-y-3",mdxType:"RemovingTransforms"}),(0,e.kt)(h.X,{level:3,id:"hardware-acceleration",nextElement:{type:"jsx"}},"Hardware acceleration"),(0,e.kt)(p.m,{defaultClass:"translate-y-6",mdxType:"HardwareAcceleration"}),(0,e.kt)("hr",null),(0,e.kt)(u,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,e.kt)(u,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,e.kt)(q.k,{featuredClass:"translate-y-12",mdxType:"HoverFocusAndOtherStates"}),(0,e.kt)(u,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,e.kt)(o.p,{featuredClass:"translate-y-12",mdxType:"BreakpointsAndMediaQueries"}),(0,e.kt)("hr",null),(0,e.kt)(h.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,e.kt)(h.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,e.kt)("p",null,"By default, Tailwind provides fixed value ",(0,e.kt)("inlineCode",{parentName:"p"},"translate")," utilities that match the ",(0,e.kt)(f.default,{href:"/docs/customizing-spacing",passHref:!0},(0,e.kt)("a",null,"default spacing scale")),", as well as 50% and 100% variations for translating relative to the element’s size.  You can customize your spacing scale by editing ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.spacing")," or ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.extend.spacing")," in your ",(0,e.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      spacing"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'4.25'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17rem'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,e.kt)("p",null,"Alternatively, you can customize just the translate scale by editing ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.translate")," or ",(0,e.kt)("inlineCode",{parentName:"p"},"theme.extend.translate")," in your ",(0,e.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,e.kt)(g.M,{filename:"tailwind.config.js"},(0,e.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,e.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      translate"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'4.25'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'17rem'"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,e.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,e.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,e.kt)("p",null,"Learn more about customizing the default theme in the ",(0,e.kt)(f.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,e.kt)("a",null,"theme customization"))," documentation."),(0,e.kt)(h.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,e.kt)(n.k,{property:"translate",featuredClass:"translate-y-[17rem]",mdxType:"ArbitraryValues"}))}x.isMDXComponent=!0,x.layoutProps=v},83629:function(a,b,c){"use strict";c.d(b,{nR:function(){return h},Pg:function(){return i}});var d=c(71407);function e(a,b){(null==b||b>a.length)&&(b=a.length);for(var c=0,d=new Array(b);c<b;c++)d[c]=a[c];return d}function f(a){return(function(a){if(Array.isArray(a))return e(a)})(a)||(function(a){if("undefined"!=typeof Symbol&&null!=a[Symbol.iterator]||null!=a["@@iterator"])return Array.from(a)})(a)||g(a)||(function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")})()}function g(a,b){if(a){if("string"==typeof a)return e(a,b);var c=Object.prototype.toString.call(a).slice(8,-1);if("Object"===c&&a.constructor&&(c=a.constructor.name),"Map"===c||"Set"===c)return Array.from(c);if("Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c))return e(a,b)}}function h(a){return f(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?1:isNaN(d)?-1:c-d})}function i(a){return f(a).sort(function(a,b){a=a.endsWith("-px")?a.replace(/-px$/,"-0.25"):a,b=b.endsWith("-px")?b.replace(/-px$/,"-0.25"):b;var c=a.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);c=null===c?NaN:parseFloat(c[1]);var d=b.split(/\s+/)[0].replace(/\\/g,"").match(/-([0-9.]+)$/);return(d=null===d?NaN:parseFloat(d[1]),isNaN(c)&&isNaN(d))?0:isNaN(c)?-1:isNaN(d)?1:c-d})}c.n(d)}},function(a){a.O(0,[3430,6401,4756,2383,6852,2474,4713,6920,3985,9774,2888,179],function(){return a(a.s=5142)}),_N_E=a.O()}])