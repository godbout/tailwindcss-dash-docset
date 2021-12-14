(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2560],{85334:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/backdrop-blur",function(){return c(41639)}])},41639:function(a,b,c){"use strict";c.r(b),c.d(b,{"default":function(){return s}}),c(67294);var d=c(3905),e=c(41664),f=c(59533),g=c(5679),h=c(83434),i=c(53339),j=c(74296),k=c(38139),l=c(89934),m=c(28368),n=c(77608),o=i.DocumentationLayout,p=function(a){return console.warn("Component Heading was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},q={Layout:o,classes:{utilities:{".backdrop-blur-0":{"--tw-backdrop-blur":"blur(0)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-none":{"--tw-backdrop-blur":"blur(0)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-sm":{"--tw-backdrop-blur":"blur(4px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur":{"--tw-backdrop-blur":"blur(8px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-md":{"--tw-backdrop-blur":"blur(12px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-lg":{"--tw-backdrop-blur":"blur(16px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-xl":{"--tw-backdrop-blur":"blur(24px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-2xl":{"--tw-backdrop-blur":"blur(40px)","backdrop-filter":"var(--tw-backdrop-filter)"},".backdrop-blur-3xl":{"--tw-backdrop-blur":"blur(64px)","backdrop-filter":"var(--tw-backdrop-filter)"}},filterRules:function(a){var b;return".backdrop-blur-0"!==((function(a){if(Array.isArray(a))return a})(b=a)||(function(a,b){var c=[],d=!0,e=!1,f=void 0;try{for(var g,h=a[Symbol.iterator]();!(d=(g=h.next()).done)&&(c.push(g.value),!b||c.length!==b);d=!0);}catch(a){e=!0,f=a}finally{try{d||null==h.return||h.return()}finally{if(e)throw f}}return c})(b,1)||(function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")})())[0]},transformProperties:function(a){return{"backdrop-filter":a.properties["--tw-backdrop-blur"]}}},meta:{title:"Backdrop Blur",description:"Utilities for applying backdrop blur filters to an element."},slug:"backdrop-blur",tableOfContents:[{title:"Basic usage",slug:"basic-usage",children:[{title:"Blurring behind an element",slug:"blurring-behind-an-element",children:[]},{title:"Removing backdrop filters",slug:"removing-backdrop-filters",children:[]}]},{title:"Applying conditionally",slug:"applying-conditionally",children:[{title:"Hover, focus, and other states",slug:"hover-focus-and-other-states",children:[]},{title:"Breakpoints and media queries",slug:"breakpoints-and-media-queries",children:[]}]},{title:"Using custom values",slug:"using-custom-values",children:[{title:"Customizing your theme",slug:"customizing-your-theme",children:[]},{title:"Arbitrary values",slug:"arbitrary-values",children:[]}]}]},r=j.X_;function s(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(r,Object.assign({},q,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)(g.X,{level:2,id:"basic-usage",nextElement:{type:"heading",depth:3}},"Basic usage"),(0,d.kt)(g.X,{level:3,id:"blurring-behind-an-element",nextElement:{type:"paragraph"}},"Blurring behind an element"),(0,d.kt)("p",null,"Use the ",(0,d.kt)("inlineCode",{parentName:"p"},"backdrop-blur-{amount?}")," utilities to control an element’s backdrop blur."),(0,d.kt)(h.e,{p:"none",containerClassName:"mt-4 -mb-3",html:"\n  <div class=\"flex justify-start sm:block overflow-scroll sm:overflow-visible scroll-p-8\">\n  <div class=\"flex items-center justify-around gap-6 sm:gap-4 font-mono font-bold shrink-0 p-8\">\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3\">backdrop-blur-sm</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-6 backdrop-blur-sm h-20 w-20 bg-white/30\"></div>\n        <img class=\"w-32 h-32 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3\">backdrop-blur-md</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-6 backdrop-blur-md h-20 w-20 bg-white/30\"></div>\n        <img class=\"w-32 h-32 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n      </div>\n    </div>\n    <div class=\"flex flex-col items-center shrink-0\">\n      <p class=\"font-medium text-sm text-gray-500 font-mono text-center mb-3\">backdrop-blur-xl</p>\n      <div class=\"relative\">\n        <div class=\"absolute inset-6 backdrop-blur-xl h-20 w-20 bg-white/30\"></div>\n        <img class=\"w-32 h-32 object-cover rounded-lg shadow-xl\" src=\"https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=320&h=320&q=80\" />\n        <div class=\"absolute inset-0 ring-1 ring-inset ring-black/10 rounded-lg\"></div>\n      </div>\n    </div>\n  </div>\n  </div>\n"}),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-sm")," bg-white/30 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-md")," bg-white/30 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"code-highlight bg-code-highlight"}),"backdrop-blur-xl")," bg-white/30 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)(g.X,{level:3,id:"removing-backdrop-filters",nextElement:{type:"jsx"}},"Removing backdrop filters"),(0,d.kt)(n.I,{defaultClass:"backdrop-blur-md backdrop-brightness-150",mdxType:"RemovingBackdropFilters"}),(0,d.kt)("hr",null),(0,d.kt)(p,{level:2,id:"applying-conditionally",nextElement:{type:"heading",depth:3},ignore:!0,mdxType:"Heading"},"Applying conditionally"),(0,d.kt)(p,{level:3,id:"hover-focus-and-other-states",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Hover, focus, and other states"),(0,d.kt)(m.k,{defaultClass:"backdrop-blur-sm",featuredClass:"backdrop-blur-lg",mdxType:"HoverFocusAndOtherStates"}),(0,d.kt)(p,{level:3,id:"breakpoints-and-media-queries",nextElement:{type:"jsx"},ignore:!0,mdxType:"Heading"},"Breakpoints and media queries"),(0,d.kt)(l.p,{defaultClass:"backdrop-blur-sm",featuredClass:"backdrop-blur-lg",mdxType:"BreakpointsAndMediaQueries"}),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"using-custom-values",nextElement:{type:"heading",depth:3}},"Using custom values"),(0,d.kt)(g.X,{level:3,id:"customizing-your-theme",nextElement:{type:"paragraph"}},"Customizing your theme"),(0,d.kt)("p",null,"By default, Tailwind includes a handful of general purpose ",(0,d.kt)("inlineCode",{parentName:"p"},"backdrop-blur")," utilities. You can customize these values by editing ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.backdropBlur")," or ",(0,d.kt)("inlineCode",{parentName:"p"},"theme.extend.backdropBlur")," in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,d.kt)(f.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-diff-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-js"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"module"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token property-access"}),"exports"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  theme"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    extend"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      backdropBlur"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"{"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"        xs"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token operator"}),":"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token string"}),"'2px'"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),","),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"      "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"    "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-js unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"}"))))),(0,d.kt)("p",null,"Learn more about customizing the default theme in the ",(0,d.kt)(e.default,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},(0,d.kt)("a",null,"theme customization"))," documentation."),(0,d.kt)(g.X,{level:3,id:"arbitrary-values",nextElement:{type:"jsx"}},"Arbitrary values"),(0,d.kt)(k.k,{property:"backdrop-blur",featuredClass:"backdrop-blur-[2px]",mdxType:"ArbitraryValues"}))}s.isMDXComponent=!0,s.layoutProps=q},59533:function(a,b,c){"use strict";c.d(b,{M:function(){return f}});var d=c(85893),e=c(6774);function f(a){var b=a.filename,c=a.children;return(0,d.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-gray-800 rounded-xl shadow-lg overflow-hidden",children:[(0,d.jsx)(e.n,{primary:{name:b},showTabMarkers:!1}),(0,d.jsx)("div",{className:"children:my-0",children:c})]})}},83434:function(a,b,c){"use strict";c.d(b,{e:function(){return l}});var d=c(85893),e=c(86010),f=c(3605),g=c(67294);function h(a,b,c){return b in a?Object.defineProperty(a,b,{value:c,enumerable:!0,configurable:!0,writable:!0}):a[b]=c,a}function i(a){for(var b=1;b<arguments.length;b++){var c=null!=arguments[b]?arguments[b]:{},d=Object.keys(c);"function"==typeof Object.getOwnPropertySymbols&&(d=d.concat(Object.getOwnPropertySymbols(c).filter(function(a){return Object.getOwnPropertyDescriptor(c,a).enumerable}))),d.forEach(function(b){h(a,b,c[b])})}return a}var j={none:"",md:"p-8"};function k(a){var b=a.as,c=a.style,f=a.padding,g=a.p,h=a.className,k=a.containerClassName,l=a.html,m=a.children,n=a.hint,o=null!=f?f:void 0===g?"md":g,p=j[o];if(void 0===p)throw Error("Invalid padding value: ".concat(JSON.stringify(o)));return(0,d.jsxs)("div",{className:k,children:[void 0!==n&&(0,d.jsxs)("div",{className:"not-prose mb-4 flex space-x-2",children:[(0,d.jsx)("svg",{className:"flex-none w-5 h-5 text-gray-400",viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",children:(0,d.jsx)("path",{d:"m9.813 9.25.346-5.138a1.276 1.276 0 0 0-2.54-.235L6.75 11.25 5.147 9.327a1.605 1.605 0 0 0-2.388-.085.018.018 0 0 0-.004.019l1.98 4.87a5 5 0 0 0 4.631 3.119h3.885a4 4 0 0 0 4-4v-1a3 3 0 0 0-3-3H9.813ZM3 5s.35-.47 1.25-.828m9.516-.422c2.078.593 3.484 1.5 3.484 1.5",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})}),(0,d.jsx)("p",{className:"text-gray-700 text-sm font-medium",children:n})]}),(0,d.jsxs)(void 0===b?"div":b,{style:i({backgroundPosition:"10px 10px"},c),className:"not-prose relative bg-grid-gray-100 bg-gray-50 rounded-xl overflow-hidden",children:[(0,d.jsx)("div",{className:"absolute inset-0 bg-gradient-to-b from-gray-50 opacity-60"}),(0,d.jsx)("div",i({className:(0,e.Z)("relative rounded-xl overflow-auto",p,h)},l?{dangerouslySetInnerHTML:{__html:l}}:{children:m})),(0,d.jsx)("div",{className:"absolute inset-0 pointer-events-none border border-black/5 rounded-xl"})]})]})}function l(a){return a.resizable?(0,d.jsx)(m,i({},a)):(0,d.jsx)(k,i({},a))}function m(a){var b=(0,g.useRef)(),c=(0,f.c$)(0),e=(0,g.useRef)(),h=(0,g.useRef)();return(0,g.useEffect)(function(){var a=new window.ResizeObserver(function(){c.set(0)});return a.observe(b.current),function(){a.disconnect()}},[]),(0,g.useEffect)(function(){h.current.onselectstart=function(){return!1}},[]),(0,d.jsxs)("div",{ref:b,className:"relative",children:[(0,d.jsx)(k,i({as:f.ww.div,style:{marginRight:(0,f.Hm)(c,function(a){return-a})}},a)),(0,d.jsx)("div",{ref:e,className:"absolute inset-y-0 right-[-1.375rem] left-80 ml-4 pointer-events-none",children:(0,d.jsx)(f.ww.div,{ref:h,drag:"x",_dragX:c,dragMomentum:!1,dragElastic:0,dragConstraints:e,className:"pointer-events-auto absolute top-1/2 right-0 -mt-6 p-2 hidden md:block cursor-ew-resize",style:{x:c},onDragStart:function(){document.documentElement.classList.add("dragging-ew")},onDragEnd:function(){document.documentElement.classList.remove("dragging-ew")},children:(0,d.jsx)("div",{className:"w-1.5 h-8 bg-gray-500/60 rounded-full"})})})]})}},77608:function(a,b,c){"use strict";c.d(b,{I:function(){return e}});var d=c(85893);function e(a){var b=a.defaultClass,c=a.element,e=a.children;return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{children:["To remove all of the backdrop filters on an element at once, use the"," ",(0,d.jsx)("code",{children:"backdrop-filter-none"})," utility:"]}),e||(0,d.jsx)("pre",{className:"language-html",children:(0,d.jsx)("code",{className:"language-html",dangerouslySetInnerHTML:{__html:"<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;</span>{element}</span> <span class=\"token attr-name\">class</span><span class=\"token attr-value\"><span class=\"token punctuation attr-equals\">=</span><span class=\"token punctuation\">\"</span>{defaultClass} <span class=\"code-highlight bg-code-highlight\">md:backdrop-filter-none</span><span class=\"token punctuation\">\"</span></span><span class=\"token punctuation\">></span></span>\n  <span class=\"token comment\">&lt;!-- ... --></span>\n<span class=\"token tag\"><span class=\"token tag\"><span class=\"token punctuation\">&lt;/</span>{element}</span><span class=\"token punctuation\">></span></span>\n".replace(/{element}/g,void 0===c?"div":c).replace("{defaultClass} ",b?"".concat(b," "):"")}})}),(0,d.jsx)("p",{children:"This can be useful when you want to remove backdrop filters conditionally, such as on hover or at a particular breakpoint."})]})}},6774:function(a,b,c){"use strict";c.d(b,{n:function(){return f}});var d=c(85893),e=c(86010);function f(a){var b=a.primary,c=a.secondary,f=a.showTabMarkers,g=a.side,h=a.children;return(0,d.jsxs)("div",{className:"flex text-gray-400 text-xs leading-6",children:[(0,d.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[b.name,(void 0===f||f)&&(b.saved?(0,d.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-gray-500 overflow-visible",children:(0,d.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,d.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,d.jsxs)("div",{className:(0,e.Z)("flex-auto flex items-center bg-gray-700/50 border border-gray-500/30","left"===g?"rounded-tl lg:rounded-tr":"rounded-tl"),children:[(void 0===c?[]:c).map(function(a){var b=a.name,c=a.open,f=a.className;return(0,d.jsx)("div",{className:(0,e.Z)("px-4 py-1 border-r border-gray-200/5",f,{italic:!(void 0===c||c)}),children:b},b)}),h&&(0,d.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:h})]})]})}}},function(a){a.O(0,[9774,3430,6401,4756,6852,2474,4713,2428,2888,179],function(){return a(a.s=85334)}),_N_E=a.O()}])