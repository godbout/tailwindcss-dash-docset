(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[934],{47017:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwindcss-2-1",function(){return c(16789)}])},16789:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return l},"default":function(){return m}}),c(67294);var d=c(3905);c(41664);var e=c(59533),f=c(5679),g=c(85225),h=c(30429),i=c(55929),j={meta:{title:"Tailwind CSS v2.1",description:"We just released Tailwind CSS v2.1 which brings the new JIT engine to core, adds first-class CSS filter support, and more!",date:"2021-04-05T19:00:00.000Z",authors:[h.Oq],image:i.Z},slug:"tailwindcss-2-1",tableOfContents:[{title:"JIT engine in core",slug:"jit-engine-in-core",children:[]},{title:"Composable CSS filters API",slug:"composable-css-filters-api",children:[]},{title:"New blending mode utilities",slug:"new-blending-mode-utilities",children:[]},{title:"New isolation utilities",slug:"new-isolation-utilities",children:[]},{title:"Upgrading",slug:"upgrading",children:[]}]},k=g.B,l=!0;function m(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(k,Object.assign({},j,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"The first new feature update since Tailwind CSS v2.0 is here and loaded with lots of cool stuff! We’ve merged the new JIT engine to core, added first-class support for composable CSS filters, added blending mode utilities, and a bunch more."),(0,d.kt)("p",null,"Here are some of the highlights:"),(0,d.kt)("ul",Object.assign({},{role:"list"}),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"#jit-engine-in-core"}),"JIT engine in core")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"#new-filter-and-backdrop-filter-utilities"}),"Composable CSS filters API")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"#new-blending-mode-utilities"}),"New blending mode utilities")),(0,d.kt)("li",{parentName:"ul"},(0,d.kt)("a",Object.assign({parentName:"li"},{href:"#new-isolation-utilities"}),"New isolation utilities"))),(0,d.kt)("p",null,"For the full details, ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v2.1.0"}),"check out the release notes")," on GitHub."),(0,d.kt)("hr",null),(0,d.kt)("a",{name:"jit-engine-in-core"}),(0,d.kt)(f.X,{level:2,id:"jit-engine-in-core",nextElement:{type:"paragraph"}},"JIT engine in core"),(0,d.kt)("p",null,"The ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://blog.tailwindcss.com/just-in-time-the-next-generation-of-tailwind-css"}),"brand-new JIT engine we announced in March")," has now been merged into core, and is available as an opt-in feature using a new ",(0,d.kt)("inlineCode",{parentName:"p"},"mode")," option in your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.kt)(e.M,{filename:"tailwind.config.js"},(0,d.kt)("pre",Object.assign({},{className:"language-js"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  mode",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token string"}),"'jit'"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  purge",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// ..."),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.kt)("p",null,(0,d.kt)("strong",{parentName:"p"},"This feature is still in preview")," which means some details may change as we iron out the kinks, and it’s not subject to semantic versioning."),(0,d.kt)("p",null,"If you were using ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwindcss/jit")," before, you can now migrate to Tailwind CSS v2.1 instead, as that’s where all new development on the engine will happen."),(0,d.kt)("p",null,"Read the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/just-in-time-mode"}),"Just-in-Time Mode documentation")," to learn more."),(0,d.kt)("a",{name:"new-filter-and-backdrop-filter-utilities"}),(0,d.kt)(f.X,{level:2,id:"composable-css-filters-api",nextElement:{type:"paragraph"}},"Composable CSS filters API"),(0,d.kt)("p",null,"This is a huge one — we’ve finally added first-class support for CSS filters!"),(0,d.kt)("p",null,"They work a lot like our ",(0,d.kt)("inlineCode",{parentName:"p"},"transform")," utilities, where you use ",(0,d.kt)("inlineCode",{parentName:"p"},"filter")," to enable filters, and combine it with utilities like ",(0,d.kt)("inlineCode",{parentName:"p"},"grayscale"),", ",(0,d.kt)("inlineCode",{parentName:"p"},"blur-lg"),", or ",(0,d.kt)("inlineCode",{parentName:"p"},"saturate-200")," to compose filters on the fly."),(0,d.kt)("p",null,"Here’s what ",(0,d.kt)("inlineCode",{parentName:"p"},"filter")," looks like:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"filter blur-md grayscale invert ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"…and here’s what ",(0,d.kt)("inlineCode",{parentName:"p"},"backdrop-filter")," looks like:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"backdrop-filter backdrop-blur backdrop-brightness-50 ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Check out the ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/filter"}),"filter")," and ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/backdrop-filter"}),"backdrop-filter")," to learn more. We’ll add a bunch of helpful visual examples there soon!"),(0,d.kt)("a",{name:"new-blending-mode-utilities"}),(0,d.kt)(f.X,{level:2,id:"new-blending-mode-utilities",nextElement:{type:"paragraph"}},"New blending mode utilities"),(0,d.kt)("p",null,"We’ve added brand new utilities for ",(0,d.kt)("inlineCode",{parentName:"p"},"mix-blend-mode")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"background-blend-mode"),":"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"mix-blend-multiply ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/mix-blend-mode"}),"the documentation")," to learn more."),(0,d.kt)("a",{name:"new-isolation-utilities"}),(0,d.kt)(f.X,{level:2,id:"new-isolation-utilities",nextElement:{type:"paragraph"}},"New isolation utilities"),(0,d.kt)("p",null,"We’ve added new ",(0,d.kt)("inlineCode",{parentName:"p"},"isolate")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"isolation-auto")," utilities for working with the ",(0,d.kt)("inlineCode",{parentName:"p"},"isolation")," property:"),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"isolate ...",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"This can be really helpful for scoping blending mode features or z-index adjustments and is super powerful. Check out ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/isolation"}),"the documentation")," to learn more."),(0,d.kt)("p",null,"I also highly recommend ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://www.joshwcomeau.com/css/stacking-contexts/#airtight-abstractions-with-isolation"}),"this great article by Josh Comeau")," to see it in action."),(0,d.kt)("hr",null),(0,d.kt)(f.X,{level:2,id:"upgrading",nextElement:{type:"paragraph"}},"Upgrading"),(0,d.kt)("p",null,"Tailwind CSS v2.1 is an incremental upgrade with no breaking changes, so to upgrade you just need to run:"),(0,d.kt)("pre",Object.assign({},{className:"language-bash"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," tailwindcss@latest")),(0,d.kt)("p",null,"If you were previously using ",(0,d.kt)("inlineCode",{parentName:"p"},"@tailwindcss/jit"),", you can now switch back to ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwindcss")," and update your PostCSS configuration accordingly."),(0,d.kt)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))},{mdxType:"Footer"},"Ready to upgrade? ",(0,d.kt)("a",{href:"https://npmjs.com/tailwindcss"},"Get it from npm →")))}m.isMDXComponent=!0,m.layoutProps=j}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,2474,3942,5225,2888,179],function(){return a(a.s=47017)}),_N_E=a.O()}])