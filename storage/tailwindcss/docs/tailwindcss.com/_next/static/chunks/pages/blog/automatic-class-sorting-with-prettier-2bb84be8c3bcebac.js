(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6331],{92205:function(a,b,c){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/automatic-class-sorting-with-prettier",function(){return c(66299)}])},66299:function(a,b,c){"use strict";c.r(b),c.d(b,{"__N_SSG":function(){return p},"default":function(){return q}}),c(67294);var d=c(3905);c(41664);var e,f=c(59533),g=c(5679),h=c(85225),i=c(61006),j=c(40211),k=c(9114),l={title:"Automatic Class Sorting with Prettier",description:"People have been talking about the best way to sort your utility classes in Tailwind projects for at least four years. Today we’re excited to announce that you can finally stop worrying about it with the release of our official Prettier plugin for Tailwind CSS.",date:"2022-01-24T19:00:00.000Z",authors:[i.Od,i.Oq],image:j.Z},m=(e="Footer",function(a){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,d.kt)("div",Object.assign({},a))}),n={meta:l,slug:"automatic-class-sorting-with-prettier",tableOfContents:[{title:"How classes are sorted",slug:"how-classes-are-sorted",children:[]},{title:"Customization",slug:"customization",children:[]}]},o=h.B,p=!0;function q(a){var b=a.components,c=function(a,b){if(null==a)return{};var c,d,e=function(a,b){if(null==a)return{};var c,d,e={},f=Object.keys(a);for(d=0;d<f.length;d++)c=f[d],b.indexOf(c)>=0||(e[c]=a[c]);return e}(a,b);if(Object.getOwnPropertySymbols){var f=Object.getOwnPropertySymbols(a);for(d=0;d<f.length;d++)c=f[d],!(b.indexOf(c)>=0)&&Object.prototype.propertyIsEnumerable.call(a,c)&&(e[c]=a[c])}return e}(a,["components"]);return(0,d.kt)(o,Object.assign({},n,c,{components:b,mdxType:"MDXLayout"}),(0,d.kt)("p",null,"People have been talking about the best way to sort your utility classes in Tailwind projects for ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://github.com/tailwindlabs/discuss/issues/97"}),"at least four years"),". Today we’re excited to announce that you can finally stop worrying about it with the release of our official ",(0,d.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},"Prettier plugin for Tailwind CSS"),"."),(0,d.kt)("div",{class:"my-10"},(0,d.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},(0,d.kt)("img",{src:k.Z,alt:""}))),(0,d.kt)("p",null,"This plugin scans your templates for class attributes containing Tailwind CSS classes, and then sorts those classes automatically following our ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"#how-classes-are-sorted"}),"recommended class order"),"."),(0,d.kt)(f.M,{filename:"HTML"},(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- Before -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"text-white px-4 sm:px-8 py-2 sm:py-3 bg-sky-700 hover:bg-sky-800",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- After -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"...",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"button"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">"))))),(0,d.kt)("p",null,"It works seamlessly with custom Tailwind configurations, and because it’s just a ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://prettier.io/"}),"Prettier")," plugin, it works anywhere Prettier works — including every popular editor and IDE, and of course on the command line."),(0,d.kt)("p",null,"To get started, just install ",(0,d.kt)("inlineCode",{parentName:"p"},"prettier-plugin-tailwindcss")," as a dev-dependency:"),(0,d.kt)(f.M,{filename:"Terminal"},(0,d.kt)("pre",Object.assign({},{className:"language-sh"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-sh"}),"npm install -D prettier prettier-plugin-tailwindcss"))),(0,d.kt)("p",null,"This plugin follows Prettier’s ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://prettier.io/docs/en/plugins.html"}),"autoloading convention"),", so as long as you’ve got Prettier set up in your project, it’ll start working automatically as soon as it’s installed."),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"how-classes-are-sorted",nextElement:{type:"paragraph"}},"How classes are sorted"),(0,d.kt)("p",null,"At its core, all this plugin does is organize your classes in the same order that Tailwind orders them in your CSS."),(0,d.kt)("p",null,"This means that any classes in the base layer will be sorted first, followed by classes in the components layer, and then finally classes in the utilities layer."),(0,d.kt)("pre",Object.assign({},{className:"language-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- `container` is a component so it comes first -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token attr-value"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\""),"container mx-auto px-6",(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"\"")),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token comment"}),"<!-- ... -->"),"\n",(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),"</"),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token punctuation"}),">")))),(0,d.kt)("p",null,"Utilities themselves are sorted in the same order we sort them in the CSS as well, which means that any classes that override other classes always appear later in the class list:"),(0,d.kt)("pre",Object.assign({},{className:"language-diff-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html deleted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"pt-2 p-4"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"p-4 pt-2"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"<!-- ... -->"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">")))),(0,d.kt)("p",null,"The actual order of the different utilities is loosely based on the box model, and tries to put high impact classes that affect the layout at the beginning and decorative classes at the end, while also trying to keep related utilities together:"),(0,d.kt)("pre",Object.assign({},{className:"language-diff-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html deleted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"text-gray-700 shadow-md p-3 border-gray-300 ml-4 h-24 flex border-2"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"ml-4 flex h-24 border-2 border-gray-300 p-3 text-gray-700 shadow-md"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"<!-- ... -->"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">")))),(0,d.kt)("p",null,"Modifiers like ",(0,d.kt)("inlineCode",{parentName:"p"},"hover:")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"focus:")," are grouped together and sorted after any plain utilities:"),(0,d.kt)("pre",Object.assign({},{className:"language-diff-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html deleted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"hover:opacity-75 opacity-50 hover:scale-150 scale-125"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"scale-125 opacity-50 hover:scale-150 hover:opacity-75"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"<!-- ... -->"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">")))),(0,d.kt)("p",null,"Responsive modifiers like ",(0,d.kt)("inlineCode",{parentName:"p"},"md:")," and ",(0,d.kt)("inlineCode",{parentName:"p"},"lg:")," are grouped together at the end in the same order they’re configured in your theme — which is smallest to largest by default:"),(0,d.kt)("pre",Object.assign({},{className:"language-diff-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html deleted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"lg:grid-cols-4 grid sm:grid-cols-3 grid-cols-2"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"<!-- ... -->"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">")))),(0,d.kt)("p",null,"Any custom classes that don’t come from Tailwind plugins (like classes for targeting a third-party library) are always sorted to the front, so it’s easy to see when an element is using them:"),(0,d.kt)("pre",Object.assign({},{className:"language-diff-html"}),(0,d.kt)("code",Object.assign({parentName:"pre"},{className:"language-diff-html"}),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html deleted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"p-3 shadow-xl select2-dropdown"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html inserted"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"<"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"})," "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-name"}),"class"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation attr-equals"}),"="),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value"}),"select2-dropdown p-3 shadow-xl"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag attr-value punctuation"}),"\""),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}),"  "),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token comment"}),"<!-- ... -->"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"}))),(0,d.kt)("span",Object.assign({parentName:"code"},{className:"token language-html unchanged"}),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token plain"})),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),"</"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag"}),"div"),(0,d.kt)("span",Object.assign({parentName:"span"},{className:"token tag punctuation"}),">")))),(0,d.kt)("hr",null),(0,d.kt)(g.X,{level:2,id:"customization",nextElement:{type:"paragraph"}},"Customization"),(0,d.kt)("p",null,"We think ",(0,d.kt)("a",Object.assign({parentName:"p"},{href:"https://prettier.io/docs/en/option-philosophy.html"}),"Prettier gets it right")," when it comes to being opinionated and offering little in terms of customizability — at the end of the day the biggest benefit to sorting your classes is that it’s just one less thing to argue with your team about."),(0,d.kt)("p",null,"We’ve tried really hard to come up with a sort order that is easy to understand and communicates the most important information as fast as possible."),(0,d.kt)("p",null,"The plugin ",(0,d.kt)("em",{parentName:"p"},"will")," respect your ",(0,d.kt)("inlineCode",{parentName:"p"},"tailwind.config.js")," file and work with any Tailwind plugins you’ve installed, but ",(0,d.kt)("strong",{parentName:"p"},"there is no way to change the sort order"),". Just like with Prettier, we think that the benefits of auto-formatting will quickly outweigh any stylistic preferences you have and that you’ll get used to it pretty fast."),(0,d.kt)(m,{mdxType:"Footer"},"Ready to try it out? ",(0,d.kt)("a",{href:"https://github.com/tailwindlabs/prettier-plugin-tailwindcss"},"Check out the full documentation on GitHub →")))}q.isMDXComponent=!0,q.layoutProps=n}},function(a){a.O(0,[3430,6401,4756,6259,6852,2474,3942,5225,9774,2888,179],function(){return a(a.s=92205)}),_N_E=a.O()}])