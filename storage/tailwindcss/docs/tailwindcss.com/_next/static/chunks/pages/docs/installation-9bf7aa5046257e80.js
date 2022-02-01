(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4442],{74159:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/installation",function(){return c(6341)}])},64673:function(a,b,c){"use strict";c.d(b,{"_":function(){return f}});var d=c(85893),e=c(46675);function f(a){var b=a.description,c=a.href,f=a.label;return(0,d.jsxs)("p",{className:"flex flex-wrap sm:flex-nowrap lg:flex-wrap xl:flex-nowrap items-center py-6 px-4 sm:p-6 lg:p-10 ring-1 ring-slate-900/5 shadow rounded-lg dark:bg-slate-800 dark:shadow-none dark:ring-0 dark:highlight-white/5",children:[(0,d.jsxs)("span",{className:"flex-auto flex items-start mb-8 sm:mb-0 lg:mb-8 xl:mb-0",children:[(0,d.jsx)("svg",{viewBox:"0 -4 16 24",fill:"currentColor",className:"flex-none w-4 h-6 mr-4","aria-hidden":"true",children:(0,d.jsx)("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4H4Zm5 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 7a2 2 0 0 1 2 2v2a1 1 0 1 1-2 0V7Z"})}),(0,d.jsx)("span",{className:"flex-auto text-sm leading-6 text-slate-600 xl:max-w-2xl dark:text-slate-400",children:b})]}),(0,d.jsx)("span",{className:"flex-none flex justify-center w-full sm:w-auto sm:ml-6 md:ml-8 lg:w-full lg:ml-0 xl:w-auto xl:ml-8",children:(0,d.jsx)(e.z,{href:c,darkColor:"sky",children:f})})]})}},6341:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},"default":function(){return j}});var d=c(85893),e=c(53339),f=c(44794);c(64673);var g=c(62223),h=[{title:"Install Tailwind CSS",body:function(){return(0,d.jsxs)("p",{children:["Install ",(0,d.jsx)("code",{children:"tailwindcss"})," via npm, and create your ",(0,d.jsx)("code",{children:"tailwind.config.js"})," ","file."]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss\nnpx tailwindcss init"}},{title:"Configure your template paths",body:function(){return(0,d.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,d.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  module.exports = {\n>   content: [\"./src/**/*.{html,js}\"],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,d.jsxs)("p",{children:["Add the ",(0,d.jsx)("code",{children:"@tailwind"})," directives for each of Tailwind’s layers to your main CSS file."]})},code:{name:"src/input.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Start the Tailwind CLI build process",body:function(){return(0,d.jsx)("p",{children:"Run the CLI tool to scan your template files for classes and build your CSS."})},code:{name:"Terminal",lang:"terminal",code:"npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch"}},{title:"Start using Tailwind in your HTML",body:function(){return(0,d.jsxs)("p",{children:["Add your compiled CSS file to the ",(0,d.jsx)("code",{children:"<head>"})," and start using Tailwind’s utility classes to style your content."]})},code:{name:"src/index.html",lang:"html",code:"  <!doctype html>\n  <html>\n  <head>\n    <meta charset=\"UTF-8\">\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n>   <link href=\"/dist/output.css\" rel=\"stylesheet\">\n  </head>\n  <body>\n>   <h1 class=\"text-3xl font-bold underline\">\n>     Hello world!\n>   </h1>\n  </body>\n  </html>"}},],i=!0;function j(a){var b=a.code;return(0,d.jsxs)(f.l,{children:[(0,d.jsxs)("div",{id:"content",className:"relative z-10 prose prose-slate mb-16 max-w-3xl dark:prose-dark",children:[(0,d.jsx)("h3",{className:"sr-only",children:"Installing Tailwind CLI"}),(0,d.jsx)("p",{children:"The simplest and fastest way to get up and running with Tailwind CSS from scratch is with the Tailwind CLI tool."})]}),(0,d.jsx)(g.R,{level:4,steps:h,code:b})]})}j.layoutProps={meta:{title:"Installation: Tailwind CLI"},Layout:e.L,allowOverflow:!1}}},function(a){a.O(0,[9840,6852,4713,8055,4794,9774,2888,179],function(){return a(a.s=74159)}),_N_E=a.O()}])