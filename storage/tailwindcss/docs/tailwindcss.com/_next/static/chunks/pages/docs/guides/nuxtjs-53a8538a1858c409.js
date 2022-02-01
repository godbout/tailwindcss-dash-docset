(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9623],{4576:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/nuxtjs",function(){return c(4932)}])},32079:function(a,b,c){"use strict";c.d(b,{a:function(){return f}});var d=c(85893),e=c(74903);function f(a){var b=a.title,c=a.description,f=a.children;return(0,d.jsxs)(e.i,{children:[(0,d.jsx)("header",{id:"header",className:"mb-10 md:flex md:items-start",children:(0,d.jsxs)("div",{className:"flex-auto max-w-4xl",children:[(0,d.jsx)("p",{className:"mb-4 text-sm leading-6 font-semibold text-sky-500 dark:text-sky-400",children:"Installation"}),(0,d.jsx)("h1",{className:"text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight dark:text-slate-200",children:b}),(0,d.jsx)("p",{className:"mt-4 text-lg text-slate-700 dark:text-slate-400",children:c})]})}),(0,d.jsx)("section",{className:"mb-16 relative",children:f})]})}},4932:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return i},"default":function(){return j}});var d=c(85893),e=c(53339),f=c(32079),g=c(62223),h=[{title:"Create your project",body:function(){return(0,d.jsxs)("p",{children:["Start by creating a new Nuxt.js project if you don’t have one set up already. The most common approach is to use"," ",(0,d.jsx)("a",{href:"https://nuxtjs.org/guides/get-started/installation",children:"Create Nuxt App"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npx create-nuxt-app my-project\ncd my-project"}},{title:"Install Tailwind CSS",body:function(){return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)("p",{children:["Using npm, install ",(0,d.jsx)("code",{children:"tailwindcss"})," and its peer dependencies, as well as"," ",(0,d.jsx)("code",{children:"@nuxt/postcss8"}),", and then run the init command to generate the"," ",(0,d.jsx)("code",{children:"tailwind.config.js"})," file."]}),(0,d.jsxs)("p",{className:"mt-3 text-xs italic",children:["Using ",(0,d.jsx)("code",{children:"@latest"})," is required because Nuxt installs PostCSS v7 and Autoprefixer v9 by default."]})]})},code:{name:"Terminal",lang:"terminal",code:"npm install -D tailwindcss postcss@latest autoprefixer@latest @nuxt/postcss8\nnpx tailwindcss init"}},{title:"Enable the Nuxt.js PostCSS plugin",body:function(){return(0,d.jsxs)("p",{children:["In your ",(0,d.jsx)("code",{children:"nuxt.config.js"})," file, enable the ",(0,d.jsx)("code",{children:"@nuxt/postcss8"})," plugin."]})},code:{name:"nuxt.config.js",lang:"js",code:"  export default {\n    buildModules: [\n>     '@nuxt/postcss8',\n      // ...\n    ],\n  }"}},{title:"Add Tailwind to your PostCSS configuration",body:function(){return(0,d.jsxs)("p",{children:["Add ",(0,d.jsx)("code",{children:"tailwindcss"})," and ",(0,d.jsx)("code",{children:"autoprefixer"})," to the"," ",(0,d.jsx)("code",{children:"build.postcss.plugins"})," object of your ",(0,d.jsx)("code",{children:"nuxt.config.js"})," file."]})},code:{name:"nuxt.config.js",lang:"js",code:"  export default {\n    build: {\n>     postcss: {\n>       plugins: {\n>         tailwindcss: {},\n>         autoprefixer: {},\n>       },\n>     },\n    }\n  }"}},{title:"Configure your template paths",body:function(){return(0,d.jsxs)("p",{children:["Add the paths to all of your template files in your ",(0,d.jsx)("code",{children:"tailwind.config.js"})," file."]})},code:{name:"tailwind.config.js",lang:"js",code:"  module.exports = {\n>   content: [\n>     \"./components/**/*.{js,vue,ts}\",\n>     \"./layouts/**/*.vue\",\n>     \"./pages/**/*.vue\",\n>     \"./plugins/**/*.{js,ts}\",\n>     \"./nuxt.config.{js,ts}\",\n>   ],\n    theme: {\n      extend: {},\n    },\n    plugins: [],\n  }"}},{title:"Add the Tailwind directives to your CSS",body:function(){return(0,d.jsxs)("p",{children:["Create an ",(0,d.jsx)("code",{children:"./assets/css/main.css"})," file and add the ",(0,d.jsx)("code",{children:"@tailwind"})," ","directives for each of Tailwind’s layers."]})},code:{name:"main.css",lang:"css",code:"@tailwind base;\n@tailwind components;\n@tailwind utilities;"}},{title:"Import the CSS file",body:function(){return(0,d.jsxs)("p",{children:["Add the newly-created ",(0,d.jsx)("code",{children:"./assets/css/main.css"})," file to the ",(0,d.jsx)("code",{children:"css"})," array in the ",(0,d.jsx)("code",{children:"nuxt.config.js"})," file."]})},code:{name:"nuxt.config.js",lang:"js",code:"  export default {\n    css: [\n>     '@/assets/css/main.css',\n    ],\n  }"}},{title:"Start your build process",body:function(){return(0,d.jsxs)("p",{children:["Run your build process with ",(0,d.jsx)("code",{children:"npm run dev"}),"."]})},code:{name:"Terminal",lang:"terminal",code:"npm run dev"}},{title:"Start using Tailwind in your project",body:function(){return(0,d.jsx)("p",{children:"Start using Tailwind’s utility classes to style your content."})},code:{name:"App.vue",lang:"html",code:"  <template>\n>   <h1 class=\"text-3xl font-bold underline\">\n>     Hello world!\n>   </h1>\n  </template>"}},],i=!0;function j(a){var b=a.code;return(0,d.jsx)(f.a,{title:"Install Tailwind CSS with Nuxt.js",description:"Setting up Tailwind CSS in a Nuxt.js project.",children:(0,d.jsx)(g.R,{steps:h,code:b})})}j.layoutProps={meta:{title:"Install Tailwind CSS with Nuxt.js",section:"Installation"},Layout:e.L,allowOverflow:!1}}},function(a){a.O(0,[9840,6852,4713,8055,9774,2888,179],function(){return a(a.s=4576)}),_N_E=a.O()}])