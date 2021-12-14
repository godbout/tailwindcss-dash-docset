_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[104],{eUvF:function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/guides/nuxtjs",function(){return t("nhlg")}])},nhlg:function(a,e,t){"use strict";t.r(e),t.d(e,"default",(function(){return O}));var n=t("HALo"),c=t("dhJC"),s=t("q1tI"),p=t.n(s),o=t("7ljp"),l=t("YFqc"),r=t.n(l),i=t("tc9R"),j=t("vRWG"),m=t("I6Nb");p.a.createElement;const b={Layout:j.DocumentationLayout,meta:{title:"Install Tailwind CSS with Nuxt.js",description:"Setting up Tailwind CSS in a Nuxt.js project.",tool:"Nuxt.js"},tableOfContents:[{title:"Creating your project",slug:"creating-your-project",children:[]},{title:"Setting up Tailwind CSS",slug:"setting-up-tailwind-css",children:[{title:"Install Tailwind via npm",slug:"install-tailwind-via-npm"},{title:"Create your configuration file",slug:"create-your-configuration-file"},{title:"Configure Tailwind to remove unused styles in production",slug:"configure-tailwind-to-remove-unused-styles-in-production"},{title:"Include Tailwind in your CSS",slug:"include-tailwind-in-your-css"}]}]},u=m.ContentsLayout;function O(a){let{components:e}=a,t=Object(c.a)(a,["components"]);return Object(o.a)(u,Object(n.a)({},b,t,{components:e,mdxType:"MDXLayout"}),Object(o.a)("div",{className:"prose"},Object(o.a)(i.a,{level:2,id:"creating-your-project",toc:!0},"Creating your project"),Object(o.a)("p",null,"Start by creating a new Nuxt.js project if you don\u2019t have one set up already.\nThe most common approach is to use ",Object(o.a)("a",Object(n.a)({parentName:"p"},{href:"https://nuxtjs.org/guides/get-started/installation#using-create-nuxt-app"}),"Create Nuxt App"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx create-nuxt-app my-project\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token builtin class-name"}),"cd")," my-project"))),Object(o.a)("hr",null),Object(o.a)(i.a,{level:2,id:"setting-up-tailwind-css",toc:!0},"Setting up Tailwind CSS"),Object(o.a)("p",null,Object(o.a)("em",{parentName:"p"},"Tailwind CSS requires Node.js 12.13.0 or higher.")),Object(o.a)(i.a,{level:3,id:"install-tailwind-via-npm",toc:!0},"Install Tailwind via npm"),Object(o.a)("p",null,"Install ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," as well as Tailwind and its peer-dependencies using ",Object(o.a)("inlineCode",{parentName:"p"},"npm"),":"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"npm")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token function"}),"install")," -D @nuxtjs/tailwindcss tailwindcss@latest postcss@latest autoprefixer@latest"))),Object(o.a)("p",null,"Add the ",Object(o.a)("inlineCode",{parentName:"p"},"@nuxtjs/tailwindcss")," module to the ",Object(o.a)("inlineCode",{parentName:"p"},"buildModules")," section of your ",Object(o.a)("inlineCode",{parentName:"p"},"nuxt.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// nuxt.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"export")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token keyword module"}),"default")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  buildModules",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'@nuxtjs/tailwindcss'"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)(i.a,{level:3,id:"create-your-configuration-file",toc:!0},"Create your configuration file"),Object(o.a)("p",null,"Next, generate your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-shell"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-shell"}),"npx tailwindcss init"))),Object(o.a)("p",null,"This will create a minimal ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file at the root of your project:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  purge",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  darkMode",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// or 'media' or 'class'"),"\n  theme",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  variants",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    extend",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n  plugins",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}")))),Object(o.a)("p",null,"Learn more about configuring Tailwind in the ",Object(o.a)(r.a,{href:"/docs/configuration",passHref:!0},Object(o.a)("a",null,"configuration documentation")),"."),Object(o.a)(i.a,{level:3,id:"configure-tailwind-to-remove-unused-styles-in-production",toc:!0},"Configure Tailwind to remove unused styles in production"),Object(o.a)("p",null,"In your ",Object(o.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, configure the ",Object(o.a)("inlineCode",{parentName:"p"},"purge")," option with the paths to all of your pages and components so Tailwind can tree-shake unused styles in production builds:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-diff-js"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff-js"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// tailwind.config.js"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"."),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token property-access"}),"exports")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),"=")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   purge",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./components/**/*.{vue,js}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./layouts/**/*.vue'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./pages/**/*.vue'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./plugins/**/*.{js,ts}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"     ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token string"}),"'./nuxt.config.{js,ts}'"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n"),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged language-js"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   darkMode",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token boolean"}),"false"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),",")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token comment"}),"// or 'media' or 'class'"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   variants",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"{"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   plugins",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token operator"}),":")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"["),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"]"),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),","),"\n",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," ",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"}"))))),Object(o.a)("p",null,"Read our separate guide on ",Object(o.a)(r.a,{href:"/docs/optimizing-for-production",passHref:!0},Object(o.a)("a",null,"optimizing for production"))," to learn more about tree-shaking unused styles for best performance.\n"),Object(o.a)(i.a,{level:3,id:"include-tailwind-in-your-css",toc:!0},"Include Tailwind in your CSS"),Object(o.a)("p",null,"Open the ",Object(o.a)("inlineCode",{parentName:"p"},"./assets/css/tailwind.css")," file that Nuxt.js generates for you by default\nand use the ",Object(o.a)("inlineCode",{parentName:"p"},"@tailwind")," directive to include Tailwind\u2019s ",Object(o.a)("inlineCode",{parentName:"p"},"base"),", ",Object(o.a)("inlineCode",{parentName:"p"},"components"),", and ",Object(o.a)("inlineCode",{parentName:"p"},"utilities")," styles, replacing the original file contents:"),Object(o.a)("div",{className:"my-6 rounded-xl overflow-hidden bg-gray-800"},Object(o.a)("pre",Object(n.a)({parentName:"div"},{className:"language-css"}),Object(o.a)("code",Object(n.a)({parentName:"pre"},{className:"language-css"}),Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"/* ./assets/css/tailwind.css */"),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," base",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," components",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";")),"\n",Object(o.a)("span",Object(n.a)({parentName:"code"},{className:"token atrule"}),Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token rule"}),"@tailwind")," utilities",Object(o.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),";"))))),Object(o.a)("p",null,"Tailwind will swap these directives out at build-time with all of the styles it generates based on your configured design system."),Object(o.a)("p",null,"Read our documentation on ",Object(o.a)(r.a,{href:"/docs/adding-base-styles",passHref:!0},Object(o.a)("a",null,"adding base styles")),", ",Object(o.a)(r.a,{href:"/docs/extracting-components",passHref:!0},Object(o.a)("a",null,"extracting components")),", and ",Object(o.a)(r.a,{href:"/docs/adding-new-utilities",passHref:!0},Object(o.a)("a",null,"adding new utilities"))," for best practices on extending Tailwind with your own custom CSS.\n"),Object(o.a)("hr",null),Object(o.a)("p",null,"You\u2019re finished! Now when you run ",Object(o.a)("inlineCode",{parentName:"p"},"npm run dev"),", Tailwind CSS will be ready to use in your Nuxt.js project."),Object(o.a)("p",null,Object(o.a)(r.a,{href:"/docs/utility-first",passHref:!0},Object(o.a)("a",null,"Next learn about the utility-first workflow ","\u2192")),"\n")))}O.isMDXComponent=!0,O.layoutProps=b}},[["eUvF",0,2,1,3,4,5]]]);