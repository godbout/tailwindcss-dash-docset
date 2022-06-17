(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6331],{17706:function(a,t){"use strict";t.Z="/_next/static/media/banner.0b2d8db3e6f1e9e306ec2ae1914da760.jpg"},88666:function(a,t){"use strict";t.Z="/_next/static/media/card.882fbab34f232e0d9a9f30126a602b8b.jpg"},90876:function(a,t,e){"use strict";e.r(t),e.d(t,{__N_SSG:function(){return g},default:function(){return d}});var n=e(159),s=e(10219),p=(e(67294),e(3905)),l=(e(41664),e(49485)),o=e(34304),r=e(29852),m=e(6953),c=e(88666),i=e(17706);const k=["components"],N={meta:{title:"Automatic Class Sorting with Prettier",description:"People have been talking about the best way to sort your utility classes in Tailwind projects for at least four years. Today we\u2019re excited to announce that you can finally stop worrying about it with the release of our official Prettier plugin for Tailwind CSS.",date:"2022-01-24T19:00:00.000Z",authors:[m.Od,m.Oq],image:c.Z},slug:"automatic-class-sorting-with-prettier",tableOfContents:[{title:"How classes are sorted",slug:"how-classes-are-sorted",children:[]},{title:"Customization",slug:"customization",children:[]}]},u=r.B;var g=!0;function d(a){let{components:t}=a,e=(0,s.Z)(a,k);return(0,p.kt)(u,(0,n.Z)({},N,e,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"People have been talking about the best way to sort your utility classes in Tailwind projects for ",(0,p.kt)("a",{parentName:"p",href:"https://github.com/tailwindlabs/discuss/issues/97"},"at least four years"),". Today we\u2019re excited to announce that you can finally stop worrying about it with the release of our official ",(0,p.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},"Prettier plugin for Tailwind CSS"),"."),(0,p.kt)("div",{class:"my-10"},(0,p.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},(0,p.kt)("img",{src:i.Z,alt:""}))),(0,p.kt)("p",null,"This plugin scans your templates for class attributes containing Tailwind CSS classes, and then sorts those classes automatically following our ",(0,p.kt)("a",{parentName:"p",href:"#how-classes-are-sorted"},"recommended class order"),"."),(0,p.kt)(l.M,{filename:"HTML"},(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- Before --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"...",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n\n",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- After --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"button")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"...",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"button"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">"))))),(0,p.kt)("p",null,"It works seamlessly with custom Tailwind configurations, and because it\u2019s just a ",(0,p.kt)("a",{parentName:"p",href:"https://prettier.io/"},"Prettier")," plugin, it works anywhere Prettier works \u2014 including every popular editor and IDE, and of course on the command line."),(0,p.kt)("p",null,"To get started, just install ",(0,p.kt)("inlineCode",{parentName:"p"},"prettier-plugin-tailwindcss")," as a dev-dependency:"),(0,p.kt)(l.M,{filename:"Terminal"},(0,p.kt)("pre",{className:"language-sh"},(0,p.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -D prettier prettier-plugin-tailwindcss"))),(0,p.kt)("p",null,"This plugin follows Prettier\u2019s ",(0,p.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/plugins.html"},"autoloading convention"),", so as long as you\u2019ve got Prettier set up in your project, it\u2019ll start working automatically as soon as it\u2019s installed."),(0,p.kt)("hr",null),(0,p.kt)(o.X,{level:2,id:"how-classes-are-sorted",nextElement:{type:"paragraph"}},"How classes are sorted"),(0,p.kt)("p",null,"At its core, all this plugin does is organize your classes in the same order that Tailwind orders them in your CSS."),(0,p.kt)("p",null,"This means that any classes in the base layer will be sorted first, followed by classes in the components layer, and then finally classes in the utilities layer."),(0,p.kt)("pre",{className:"language-html"},(0,p.kt)("code",{parentName:"pre",className:"language-html"},(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- `container` is a component so it comes first --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"<"),"div")," ",(0,p.kt)("span",{parentName:"span",className:"token attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token attr-value"},(0,p.kt)("span",{parentName:"span",className:"token punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"'),"container mx-auto px-6",(0,p.kt)("span",{parentName:"span",className:"token punctuation"},'"')),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")),"\n  ",(0,p.kt)("span",{parentName:"code",className:"token comment"},"\x3c!-- ... --\x3e"),"\n",(0,p.kt)("span",{parentName:"code",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token tag"},(0,p.kt)("span",{parentName:"span",className:"token punctuation"},"</"),"div"),(0,p.kt)("span",{parentName:"span",className:"token punctuation"},">")))),(0,p.kt)("p",null,"Utilities themselves are sorted in the same order we sort them in the CSS as well, which means that any classes that override other classes always appear later in the class list:"),(0,p.kt)("pre",{className:"language-diff-html"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-html"},(0,p.kt)("span",{parentName:"code",className:"token language-html deleted"},(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"pt-2 p-4"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"p-4 pt-2"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token comment"},"\x3c!-- ... --\x3e"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),"\n"))),(0,p.kt)("p",null,"The actual order of the different utilities is loosely based on the box model, and tries to put high impact classes that affect the layout at the beginning and decorative classes at the end, while also trying to keep related utilities together:"),(0,p.kt)("pre",{className:"language-diff-html"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-html"},(0,p.kt)("span",{parentName:"code",className:"token language-html deleted"},(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"text-gray-700 shadow-md p-3 border-gray-300 ml-4 h-24 flex border-2"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token comment"},"\x3c!-- ... --\x3e"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),"\n"))),(0,p.kt)("p",null,"Modifiers like ",(0,p.kt)("inlineCode",{parentName:"p"},"hover:")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"focus:")," are grouped together and sorted after any plain utilities:"),(0,p.kt)("pre",{className:"language-diff-html"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-html"},(0,p.kt)("span",{parentName:"code",className:"token language-html deleted"},(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"hover:opacity-75 opacity-50 hover:scale-150 scale-125"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"scale-125 opacity-50 hover:scale-150 hover:opacity-75"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token comment"},"\x3c!-- ... --\x3e"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),"\n"))),(0,p.kt)("p",null,"Responsive modifiers like ",(0,p.kt)("inlineCode",{parentName:"p"},"md:")," and ",(0,p.kt)("inlineCode",{parentName:"p"},"lg:")," are grouped together at the end in the same order they\u2019re configured in your theme \u2014 which is smallest to largest by default:"),(0,p.kt)("pre",{className:"language-diff-html"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-html"},(0,p.kt)("span",{parentName:"code",className:"token language-html deleted"},(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"lg:grid-cols-4 grid sm:grid-cols-3 grid-cols-2"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token comment"},"\x3c!-- ... --\x3e"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),"\n"))),(0,p.kt)("p",null,"Any custom classes that don\u2019t come from Tailwind plugins (like classes for targeting a third-party library) are always sorted to the front, so it\u2019s easy to see when an element is using them:"),(0,p.kt)("pre",{className:"language-diff-html"},(0,p.kt)("code",{parentName:"pre",className:"language-diff-html"},(0,p.kt)("span",{parentName:"code",className:"token language-html deleted"},(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"p-3 shadow-xl select2-dropdown"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html inserted"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"<"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag"}," "),(0,p.kt)("span",{parentName:"span",className:"token tag attr-name"},"class"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation attr-equals"},"="),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value"},"select2-dropdown p-3 shadow-xl"),(0,p.kt)("span",{parentName:"span",className:"token tag attr-value punctuation"},'"'),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"},"  "),(0,p.kt)("span",{parentName:"span",className:"token comment"},"\x3c!-- ... --\x3e"),(0,p.kt)("span",{parentName:"span",className:"token plain"}),"\n"),(0,p.kt)("span",{parentName:"code",className:"token language-html unchanged"},(0,p.kt)("span",{parentName:"span",className:"token plain"}),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},"</"),(0,p.kt)("span",{parentName:"span",className:"token tag"},"div"),(0,p.kt)("span",{parentName:"span",className:"token tag punctuation"},">"),"\n"))),(0,p.kt)("hr",null),(0,p.kt)(o.X,{level:2,id:"customization",nextElement:{type:"paragraph"}},"Customization"),(0,p.kt)("p",null,"We think ",(0,p.kt)("a",{parentName:"p",href:"https://prettier.io/docs/en/option-philosophy.html"},"Prettier gets it right")," when it comes to being opinionated and offering little in terms of customizability \u2014 at the end of the day the biggest benefit to sorting your classes is that it\u2019s just one less thing to argue with your team about."),(0,p.kt)("p",null,"We\u2019ve tried really hard to come up with a sort order that is easy to understand and communicates the most important information as fast as possible."),(0,p.kt)("p",null,"The plugin ",(0,p.kt)("em",{parentName:"p"},"will")," respect your ",(0,p.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file and work with any Tailwind plugins you\u2019ve installed, but ",(0,p.kt)("strong",{parentName:"p"},"there is no way to change the sort order"),". Just like with Prettier, we think that the benefits of auto-formatting will quickly outweigh any stylistic preferences you have and that you\u2019ll get used to it pretty fast."),(0,p.kt)("p",null,"Ready to try it out? ",(0,p.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},"Check out the full documentation on GitHub \u2192")))}d.isMDXComponent=!0,d.layoutProps=N},49485:function(a,t,e){"use strict";e.d(t,{M:function(){return p}});var n=e(79836),s=e(85893);function p({filename:a,children:t}){return(0,s.jsxs)("div",{className:"mt-5 mb-8 first:mt-0 last:mb-0 pt-2 bg-slate-800 rounded-xl shadow-lg overflow-hidden dark:ring-1 dark:ring-white/10 dark:ring-inset",children:[(0,s.jsx)(n.n,{primary:{name:a},showTabMarkers:!1}),(0,s.jsx)("div",{className:"children:my-0 children:!shadow-none children:bg-transparent",children:t})]})}},79836:function(a,t,e){"use strict";e.d(t,{n:function(){return p}});var n=e(86010),s=e(85893);function p({primary:a,secondary:t=[],showTabMarkers:e=!0,side:p,translucent:l=!1,children:o}){return(0,s.jsxs)("div",{className:"flex text-slate-400 text-xs leading-6",children:[(0,s.jsxs)("div",{className:"flex-none text-sky-300 border-t border-b border-t-transparent border-b-sky-300 px-4 py-1 flex items-center",children:[a.name,e&&(a.saved?(0,s.jsx)("svg",{viewBox:"0 0 4 4",className:"ml-2.5 flex-none w-1 h-1 text-slate-500 overflow-visible",children:(0,s.jsx)("path",{d:"M-1 -1L5 5M5 -1L-1 5",fill:"none",stroke:"currentColor",strokeLinecap:"round"})}):(0,s.jsx)("div",{className:"ml-2.5 flex-none w-1 h-1 rounded-full bg-current"}))]}),(0,s.jsxs)("div",{className:(0,n.Z)("flex-auto flex items-center bg-slate-700/50 border border-slate-500/30","left"===p?"rounded-tl lg:rounded-tr":"rounded-tl",l&&"dark:bg-slate-800/50"),children:[t.map((({name:a,open:t=!0,className:e})=>(0,s.jsx)("div",{className:(0,n.Z)("px-4 py-1 border-r border-slate-200/5",e,{italic:!t}),children:a},a))),o&&(0,s.jsx)("div",{className:"flex-auto flex items-center justify-end px-4 space-x-4",children:o})]})]})}},92205:function(a,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/automatic-class-sorting-with-prettier",function(){return e(90876)}])}},function(a){a.O(0,[9774,184,4327,489,6183,2888,179],(function(){return t=92205,a(a.s=t);var t}));var t=a.O();_N_E=t}]);