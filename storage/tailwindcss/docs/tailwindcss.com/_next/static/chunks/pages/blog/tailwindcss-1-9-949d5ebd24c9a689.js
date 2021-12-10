(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4063],{46463:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/tailwindcss-1-9",function(){return c(43489)}])},43489:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return k},"default":function(){return l}}),c(67294);var d=c(3905);c(41664);var e=c(59533);c(5679);var f=c(85225),g=c(30429),h=c(98749),i={meta:{title:"Tailwind CSS v1.9.0",description:"We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS grid utilities, extended border radius, rotate, and skew scales, helpful accessibility improvements, and more!",date:"2020-10-13T18:30:00.000Z",authors:[g.Oq],image:h.Z},slug:"tailwindcss-1-9",tableOfContents:[]},j=f.B,k=!0;function l(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.mdx)(j,Object.assign({},i,c,{components:b,mdxType:"MDXLayout"}),(0,d.mdx)("p",null,"We just released Tailwind CSS v1.9 which adds support for configuration presets, useful new CSS grid utilities, extended border radius, rotate, and skew scales, helpful accessibility improvements, and more!"),(0,d.mdx)("p",null,"Let’s dig in to the highlights…"),(0,d.mdx)("ul",Object.assign({},{role:"list"}),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",Object.assign({parentName:"li"},{href:"#configuration-presets"}),"Configuration presets")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",Object.assign({parentName:"li"},{href:"#utilities-for-grid-auto-columns-and-grid-auto-rows"}),"Utilities for ",(0,d.mdx)("inlineCode",{parentName:"a"},"grid-auto-columns")," and ",(0,d.mdx)("inlineCode",{parentName:"a"},"grid-auto-rows"))),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",Object.assign({parentName:"li"},{href:"#focus-indicator-improvements-and-configurable-outlines"}),"Focus indicator improvements and configurable outlines")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",Object.assign({parentName:"li"},{href:"#extended-border-radius-rotate-and-skew-scales"}),"Extended border radius, rotate, and skew scales")),(0,d.mdx)("li",{parentName:"ul"},(0,d.mdx)("a",Object.assign({parentName:"li"},{href:"#upgrading"}),"Upgrading to v1.9"))),(0,d.mdx)("p",null,"For the complete summary of changes ",(0,d.mdx)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/tailwindcss/releases/tag/v1.9.0"}),"check out the release notes on GitHub"),"."),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"configuration-presets"},"Configuration presets"),(0,d.mdx)("p",null,"Tailwind CSS v1.9 adds a new ",(0,d.mdx)("inlineCode",{parentName:"p"},"presets")," key to the ",(0,d.mdx)("inlineCode",{parentName:"p"},"tailwind.config.js")," file that makes it possible to configure a custom “base configuration” for your projects."),(0,d.mdx)(e.Editor,{filename:"tailwind.config.js"},(0,d.mdx)("pre",Object.assign({},{className:"language-js"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  presets",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@my-company/tailwind-base'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  theme",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Project specific overrides..."),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.mdx)("p",null,"Whatever you provide under ",(0,d.mdx)("inlineCode",{parentName:"p"},"presets")," ",(0,d.mdx)("em",{parentName:"p"},"replaces")," the default Tailwind base configuration, so you can define your own totally custom starting point. This is really helpful if you’re part of a team that works on multiple different Tailwind projects that all need to share the same brand colors, font customizations, or spacing scale."),(0,d.mdx)("p",null,"You can even list multiple presets, which are merged together from top to bottom:"),(0,d.mdx)(e.Editor,{filename:"tailwind.config.js"},(0,d.mdx)("pre",Object.assign({},{className:"language-js"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  presets",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@my-company/tailwind-base'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"require"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"("),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'@my-company/tailwind-marketing'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),")"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  theme",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"// Project specific overrides..."),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.mdx)("p",null,"The logic to merge your project-specific configuration with your custom base configuration is exactly the same as how things work with the default configuration, so all of the features you’re used to like ",(0,d.mdx)("inlineCode",{parentName:"p"},"extend")," still work exactly the way you’d expect."),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"utilities-for-grid-auto-columns-and-grid-auto-rows"},"Utilities for grid-auto-columns and grid-auto-rows"),(0,d.mdx)("p",null,"We’ve added new ",(0,d.mdx)("inlineCode",{parentName:"p"},"gridAutoColumns")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"gridAutoRows")," core plugins that add new utilities for the ",(0,d.mdx)("inlineCode",{parentName:"p"},"grid-auto-columns")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"grid-auto-rows")," CSS properties respectively."),(0,d.mdx)("p",null,"These utilities let you control the size of implicitly-created grid columns and rows. Use them to set a default column/row size whenever you don’t specify a number of columns/rows for your grid."),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"grid grid-flow-col auto-cols-max",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"1",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"2",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"3",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)("p",null,"Here’s a list of the new utilities that are included out of the box:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Class"),(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"CSS"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-cols-auto")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-columns: auto;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-cols-min")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-columns: min-content;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-cols-max")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-columns: max-content;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-cols-fr")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-columns: minmax(0, 1fr);"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-rows-auto")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-rows: auto;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-rows-min")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-rows: min-content;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-rows-max")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-rows: max-content;"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"auto-rows-fr")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"grid-auto-rows: minmax(0, 1fr);"))))),(0,d.mdx)("p",null,"We include ",(0,d.mdx)("inlineCode",{parentName:"p"},"responsive")," variants for these utilities by default, and they can be configured just like you’d expect under the ",(0,d.mdx)("inlineCode",{parentName:"p"},"gridAutoColumns")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"gridAutoRows")," sections of your ",(0,d.mdx)("inlineCode",{parentName:"p"},"tailwind.config.js")," file."),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"focus-indicator-improvements-and-configurable-outlines"},"Focus indicator improvements and configurable outlines"),(0,d.mdx)("p",null,"We’ve updated the ",(0,d.mdx)("inlineCode",{parentName:"p"},"outline-none")," class to render a ",(0,d.mdx)("em",{parentName:"p"},"transparent")," outline by default instead of rendering ",(0,d.mdx)("em",{parentName:"p"},"no")," outline. This is really helpful for people who use ",(0,d.mdx)("a",Object.assign({parentName:"p"},{href:"https://blogs.windows.com/msedgedev/2020/09/17/styling-for-windows-high-contrast-with-new-standards-for-forced-colors/"}),"Windows high contrast mode"),", where custom box-shadow-based focus styles are completely invisible."),(0,d.mdx)("p",null,"Now you can create custom focus styles using box shadows ",(0,d.mdx)("em",{parentName:"p"},"safely"),", without making your sites difficult to use for people with low vision."),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"... focus:outline-none focus:shadow-outline",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)("p",null,"We’ve also added two new outline styles: ",(0,d.mdx)("inlineCode",{parentName:"p"},"outline-white")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"outline-black"),"."),(0,d.mdx)("p",null,"These utilities render a 2px dotted outline in their respective color, with a 2px offset. They work great as general purpose unobtrusive focus indicators that make it easy for keyboard users to see which element on the screen is selected, without clashing too much with your design."),(0,d.mdx)("p",null,"We’ve included both ",(0,d.mdx)("inlineCode",{parentName:"p"},"white")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"black")," variations so you can always be sure to have an option available that has sufficient contrast against whatever background color you’re using."),(0,d.mdx)("pre",Object.assign({},{className:"language-html"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Use `outline-white` on dark backgrounds -->"),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-gray-900",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"... focus:outline-white",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Use `outline-black` on light backgrounds -->"),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-white",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"... focus:outline-black",(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.mdx)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.mdx)("p",null,"Of course, you’re also free to create whatever custom focus styles you like using background colors, box shadows, borders, whatever. These are great if you don’t want to get too fancy though."),(0,d.mdx)("p",null,"We’ve made the ",(0,d.mdx)("inlineCode",{parentName:"p"},"outline")," property configurable as well, so you can now define custom outlines in your ",(0,d.mdx)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),(0,d.mdx)(e.Editor,{filename:"tailwind.config.js"},(0,d.mdx)("pre",Object.assign({},{className:"language-js"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      outline",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        blue",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.mdx)("p",null,"You can also provide an ",(0,d.mdx)("inlineCode",{parentName:"p"},"outline-offset")," value for any custom outline utilities using a tuple of the form ",(0,d.mdx)("inlineCode",{parentName:"p"},"[outline, outlineOffset]"),":"),(0,d.mdx)(e.Editor,{filename:"tailwind.config.js"},(0,d.mdx)("pre",Object.assign({},{className:"language-js"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-js"}),"module",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"."),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token property-access"}),"exports")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),"=")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n  theme",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n      outline",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"{"),"\n        blue",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token operator"}),":")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"["),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'2px solid #0000ff'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),",")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token string"}),"'1px'"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"]"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n      ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n    ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n  ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}"),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),","),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token punctuation"}),"}")))),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"extended-border-radius-rotate-and-skew-scales"},"Extended border radius, rotate, and skew scales"),(0,d.mdx)("p",null,"We’ve added three new border radius utilities by default:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Class"),(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rounded-xl")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"0.75rem")," ",(0,d.mdx)("em",{parentName:"td"},"(12px)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rounded-2xl")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"1rem")," ",(0,d.mdx)("em",{parentName:"td"},"(16px)"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rounded-3xl")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"1.5rem"),(0,d.mdx)("em",{parentName:"td"},"(24px)"))))),(0,d.mdx)("p",null,"…and an extended set of smaller values for both the ",(0,d.mdx)("inlineCode",{parentName:"p"},"rotate")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"skew")," utilities:"),(0,d.mdx)("table",null,(0,d.mdx)("thead",{parentName:"table"},(0,d.mdx)("tr",{parentName:"thead"},(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Class"),(0,d.mdx)("th",Object.assign({parentName:"tr"},{align:null}),"Value"))),(0,d.mdx)("tbody",{parentName:"table"},(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rotate-1")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"1deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rotate-2")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"2deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rotate-3")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"3deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rotate-6")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"6deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"rotate-12")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"12deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"skew-1")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"1deg"))),(0,d.mdx)("tr",{parentName:"tbody"},(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"skew-2")),(0,d.mdx)("td",Object.assign({parentName:"tr"},{align:null}),(0,d.mdx)("inlineCode",{parentName:"td"},"2deg"))))),(0,d.mdx)("p",null,"Negative versions are included for all of these as well. Super handy for more subtle rotate and skew effects!"),(0,d.mdx)("hr",null),(0,d.mdx)("h2",{id:"upgrading"},"Upgrading"),(0,d.mdx)("p",null,"Tailwind CSS v1.9 is a non-breaking minor release, so to upgrade all you need to do is run:"),(0,d.mdx)("pre",Object.assign({},{className:"language-bash"}),(0,d.mdx)("code",Object.assign({parentName:"pre"},{className:"language-bash"}),(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# npm"),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"npm")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"install")," tailwindcss@^1.9\n\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token comment"}),"# yarn"),"\n",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"yarn")," ",(0,d.mdx)("span",Object.assign({parentName:"code"},{className:"token function"}),"add")," tailwindcss@^1.9")),(0,d.mdx)("p",null,"We have promoted two previously experimental features (",(0,d.mdx)("inlineCode",{parentName:"p"},"defaultLineHeights")," and ",(0,d.mdx)("inlineCode",{parentName:"p"},"standardFontWeights"),") to ",(0,d.mdx)("inlineCode",{parentName:"p"},"future"),", so we also recommend ",(0,d.mdx)("a",Object.assign({parentName:"p"},{href:"https://tailwindcss.com/docs/upcoming-changes#default-line-heights-for-font-size-utilities"}),"opting-in to those changes now")," to simplify the upgrade to Tailwind CSS v2.0 later this fall."),(0,d.mdx)(function(a){return console.warn("Component Footer was not imported, exported, or provided by MDXProvider as global scope"),(0,d.mdx)("div",Object.assign({},a))},{mdxType:"Footer"},"Want to talk about this post? ",(0,d.mdx)("a",{href:"https://github.com/tailwindcss/tailwindcss/discussions/2552"},"Discuss this on GitHub →")))}l.isMDXComponent=!0,l.layoutProps=i}},function(a){a.O(0,[9774,3430,6401,4756,6259,6852,1350,3942,5225,2888,179],function(){return a(a.s=46463)}),_N_E=a.O()}])