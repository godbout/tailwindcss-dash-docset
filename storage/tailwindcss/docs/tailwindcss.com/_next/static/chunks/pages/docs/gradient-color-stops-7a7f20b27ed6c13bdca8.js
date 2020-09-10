_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[103],{DvIO:function(a,e,t){"use strict";t.r(e),t.d(e,"Layout",(function(){return N})),t.d(e,"classes",(function(){return k})),t.d(e,"meta",(function(){return f})),t.d(e,"tableOfContents",(function(){return v})),t.d(e,"default",(function(){return C}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),p=t("7ljp"),r=t("YFqc"),l=t.n(r),i=t("tc9R"),u=t("pOT7"),b=t("vRWG"),d=t("I6Nb"),m=t("g4+i"),g=t.n(m),O=(t("Ca+n"),t("8C7G")),j=t("wH44"),N=(c.a.createElement,b.DocumentationLayout),k={plugin:g.a,transformProperties:function(a){a.selector;var e=a.properties;return delete e["--gradient-color-stops"],e},preview:function(a){return Object(p.a)("td",{className:"w-24 ".concat("transparent"===a["background-color"]?"bg-checkered":""),style:{backgroundColor:[a["--gradient-from-color"],a["--gradient-via-color"],a["--gradient-to-color"]].filter((function(a){return void 0!==a}))[0]}})}},f={title:"Gradient Color Stops",description:"Utilities for controlling the color stops in background gradients.",features:{responsive:!0,customizable:!0,hover:!0,focus:!1}},v=[{title:"Starting color",slug:"starting-color",children:[]},{title:"Ending color",slug:"ending-color",children:[]},{title:"Middle color",slug:"middle-color",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Hover",slug:"hover",children:[]},{title:"Focus",slug:"focus",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Colors",slug:"background-colors"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],h={Layout:N,classes:k,meta:f,tableOfContents:v},y=d.ContentsLayout;function C(a){var e=a.components,t=Object(s.a)(a,["components"]);return Object(p.a)(y,Object(n.a)({},h,t,{components:e,mdxType:"MDXLayout"}),Object(p.a)(i.a,{level:2,id:"starting-color",toc:!0},"Starting color"),Object(p.a)("p",null,"Set the starting color of a gradient using the ",Object(p.a)("inlineCode",{parentName:"p"},"from-{color}")," utilities."),Object(p.a)(u.a,{preview:'\n  <div class="h-24 bg-gradient-to-r from-red-500"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-24 bg-gradient-to-r from-red-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-8"}),Object(p.a)("p",null,"Gradients fade out to transparent by default."),Object(p.a)(i.a,{level:2,id:"ending-color",toc:!0},"Ending color"),Object(p.a)("p",null,"Set the ending color of a gradient using the ",Object(p.a)("inlineCode",{parentName:"p"},"to-{color}")," utilities."),Object(p.a)(u.a,{preview:'\n  <div class="h-24 bg-gradient-to-r from-teal-400 to-blue-500"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-24 bg-gradient-to-r from-teal-400 to-blue-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-8"}),Object(p.a)("p",null,"Gradients to ",Object(p.a)("strong",{parentName:"p"},"do not")," fade in from transparent by default. To fade in from transparent, reverse the gradient direction and use a ",Object(p.a)("inlineCode",{parentName:"p"},"from-{color}")," utility."),Object(p.a)(i.a,{level:2,id:"middle-color",toc:!0},"Middle color"),Object(p.a)("p",null,"Add a middle color to a gradient using the ",Object(p.a)("inlineCode",{parentName:"p"},"via-{color}")," utilities."),Object(p.a)(u.a,{preview:'\n  <div class="h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500"></div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>h-24 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:"p-8"}),Object(p.a)("p",null,"Gradients with a ",Object(p.a)("inlineCode",{parentName:"p"},"from-{color}")," and ",Object(p.a)("inlineCode",{parentName:"p"},"via-{color}")," will fade out to transparent by default if no ",Object(p.a)("inlineCode",{parentName:"p"},"to-{color}")," is present."),Object(p.a)(i.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(p.a)("p",null,"To control the gradient color stops of an element at a specific breakpoint, add a ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing gradient color stop utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"md:from-green-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"from-green-500")," utility at only medium screen sizes and above."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"bg-gradient-to-r from-purple-400 md:from-orange-500",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(p.a)(l.a,{href:"/docs/responsive-design",passHref:!0},Object(p.a)("a",null,"Responsive Design"))," documentation."),Object(p.a)(i.a,{level:2,id:"hover",toc:!0},"Hover"),Object(p.a)("p",null,"To control the gradient color stops of an element on hover, add the ",Object(p.a)("inlineCode",{parentName:"p"},"hover:")," prefix to any existing gradient color stop utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"hover:bg-blue-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"bg-blue-500")," utility on hover."),Object(p.a)(u.a,{preview:'\n  <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 text-white font-semibold px-4 py-2 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(p.a)("p",null,"Hover utilities can also be combined with responsive utilities by adding the responsive ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(p.a)("em",{parentName:"p"},"before")," the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:from-blue-500 md:hover:from-blue-700 ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Button",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)(i.a,{level:2,id:"focus",toc:!0},"Focus"),Object(p.a)("p",null,"To control the gradient color stops of an element on focus, add the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix to any existing gradient color stop utility. For example, use ",Object(p.a)("inlineCode",{parentName:"p"},"focus:bg-blue-500")," to apply the ",Object(p.a)("inlineCode",{parentName:"p"},"bg-blue-500")," utility on focus."),Object(p.a)(u.a,{preview:'\n  <button type="button" class="bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded">\n    Focus me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>button<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-gradient-to-r from-teal-400 to-blue-500 focus:from-pink-500 focus:to-orange-500 text-white font-semibold px-4 py-2 rounded<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Focus me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"text-center p-4"}),Object(p.a)("p",null,"Focus utilities can also be combined with responsive utilities by adding the responsive ",Object(p.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix ",Object(p.a)("em",{parentName:"p"},"before")," the ",Object(p.a)("inlineCode",{parentName:"p"},"focus:")," prefix."),Object(p.a)("pre",{className:"language-html"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"... md:from-blue-500 md:focus:from-blue-700 ...",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"Button",Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(p.a)(i.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(p.a)(i.a,{level:3,id:"background-colors",toc:!0},"Background Colors"),Object(p.a)("p",null,"By default Tailwind makes the entire ",Object(p.a)(l.a,{href:"/docs/customizing-colors#default-color-palette",passHref:!0},Object(p.a)("a",null,"default color palette"))," available as gradient color stops."),Object(p.a)("p",null,"You can ",Object(p.a)(l.a,{href:"/docs/colors#customizing",passHref:!0},Object(p.a)("a",null,"customize your color palette"))," by editing the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.colors")," variable in your ",Object(p.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file, or customize just your gradient color stop colors using the ",Object(p.a)("inlineCode",{parentName:"p"},"theme.gradientColorStops")," section of your Tailwind config."),Object(p.a)("pre",{className:"language-diff"},Object(p.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     gradientColorStops: theme => ({\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       ...theme('colors'),\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'primary': '#3490dc',\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'secondary': '#ffed4a',\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'danger': '#e3342f',\n"),Object(p.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     })\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(p.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(p.a)(i.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(p.a)(O.a,{plugin:"gradientColorStops",mdxType:"Variants"}),Object(p.a)(i.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(p.a)(j.a,{plugin:"gradientColorStops",mdxType:"Disabling"}))}C.isMDXComponent=!0,C.layoutProps=h},"bMy/":function(a,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/gradient-color-stops",function(){return t("DvIO")}])},"g4+i":function(a,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return function({addUtilities:a,e:e,theme:t,variants:c,target:p}){if("ie11"===p("gradientColorStops"))return;const r=(0,s.default)(t("gradientColorStops"));a((0,n.default)(r).map((a,t)=>{const s=e=>n.default.isFunction(e)?a({}):e,c=(()=>{if(n.default.isFunction(a))return a({opacityValue:0});try{const[e,t,n]=(0,o.toRgba)(a);return`rgba(${e}, ${t}, ${n}, 0)`}catch(e){return"rgba(255, 255, 255, 0)"}})();return[[`.${e(`from-${t}`)}`,{"--gradient-from-color":s(a),"--gradient-color-stops":`var(--gradient-from-color), var(--gradient-to-color, ${c})`}],[`.${e(`via-${t}`)}`,{"--gradient-via-color":s(a),"--gradient-color-stops":`var(--gradient-from-color), var(--gradient-via-color), var(--gradient-to-color, ${c})`}],[`.${e(`to-${t}`)}`,{"--gradient-to-color":s(a)}]]}).unzip().flatten().fromPairs().value(),c("gradientColorStops"))}};var n=c(t("LvDl")),s=c(t("9Jru")),o=t("kFV+");function c(a){return a&&a.__esModule?a:{default:a}}}},[["bMy/",0,2,5,1,3,4,9]]]);