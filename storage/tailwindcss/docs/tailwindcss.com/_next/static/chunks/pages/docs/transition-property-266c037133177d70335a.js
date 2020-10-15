_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[166],{"7F3y":function(e,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return g})),t.d(a,"classes",(function(){return f})),t.d(a,"meta",(function(){return h})),t.d(a,"tableOfContents",(function(){return v})),t.d(a,"default",(function(){return w}));var n=t("wx14"),s=t("Ff2n"),o=t("q1tI"),c=t.n(o),r=t("7ljp"),i=t("YFqc"),p=t.n(i),l=t("tc9R"),u=t("pOT7"),m=t("vRWG"),b=t("I6Nb"),d=t("I2Hb"),j=t.n(d),O=t("8C7G"),N=t("wH44"),g=(c.a.createElement,m.DocumentationLayout),f={plugin:j.a},h={title:"Transition Property",description:"Utilities for controlling which CSS properties transition.",featureVersion:"v1.2.0+"},v=[{title:"Usage",slug:"usage",children:[]},{title:"Prefers-reduced-motion",slug:"prefers-reduced-motion",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Property values",slug:"property-values"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],k={Layout:g,classes:f,meta:h,tableOfContents:v},y=b.ContentsLayout;function w(e){var a=e.components,t=Object(s.a)(e,["components"]);return Object(r.a)(y,Object(n.a)({},k,t,{components:a,mdxType:"MDXLayout"}),Object(r.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(r.a)("p",null,"Use the ",Object(r.a)("inlineCode",{parentName:"p"},"transition-{properties}")," utilities to specify which properties should transition when they change."),Object(r.a)(u.a,{preview:'\n  <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-red-500 text-white font-bold py-2 px-4 rounded">\n    Hover me\n  </button>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>transition duration-500 ease-in-out bg-blue-500 hover:bg-red-500 transform hover:-translate-y-1 hover:scale-110 ...<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  Hover me\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>',previewClassName:"bg-white text-center p-4 py-12"}),Object(r.a)(l.a,{level:2,id:"prefers-reduced-motion",toc:!0},"Prefers-reduced-motion"),Object(r.a)("p",null,"You can conditionally apply animations and transitions using the ",Object(r.a)("inlineCode",{parentName:"p"},"motion-safe")," and ",Object(r.a)("inlineCode",{parentName:"p"},"motion-reduce")," variants:"),Object(r.a)("pre",{className:"language-html"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"<"),"button")," ",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token attr-value"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"'),"transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:transform-none ...",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  Hover me\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token tag"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),"</"),"button"),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(r.a)("p",null,Object(r.a)("strong",{parentName:"p"},"These variants are not enabled by default"),", but you can enable them in the ",Object(r.a)("inlineCode",{parentName:"p"},"variants")," section of your ",Object(r.a)("inlineCode",{parentName:"p"},"tailwind.config.js")," file:"),Object(r.a)("pre",{className:"language-js"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// tailwind.config.js"),"\nmodule",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"."),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token property-access"}),"exports")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),"=")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token comment"}),"// ..."),"\n  variants",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"{"),"\n    transitionProperty",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token operator"}),":")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"["),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'responsive'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'motion-safe'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),",")," ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token string"}),"'motion-reduce'"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"]"),"\n  ",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"),"\n",Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token punctuation"}),"}"))),Object(r.a)("p",null,"Learn more in the ",Object(r.a)(p.a,{href:"/docs/pseudo-class-variants#motion-safe-v1-6-0",passHref:!0},Object(r.a)("a",null,"variants documentation")),"."),Object(r.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(r.a)("p",null,"To change which properties of an element transition at a specific breakpoint, add a ",Object(r.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing transition-property utility. For example, use ",Object(r.a)("inlineCode",{parentName:"p"},"md:transition-colors")," to apply the ",Object(r.a)("inlineCode",{parentName:"p"},"transition-colors")," utility at only medium screen sizes and above."),Object(r.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(r.a)(p.a,{href:"/docs/responsive-design",passHref:!0},Object(r.a)("a",null,"Responsive Design"))," documentation."),Object(r.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(r.a)(l.a,{level:3,id:"property-values",toc:!0},"Property values"),Object(r.a)("p",null,"By default Tailwind provides transition-property utilities for seven common property combinations. You change, add, or remove these by customizing the ",Object(r.a)("inlineCode",{parentName:"p"},"transitionProperty")," section of your Tailwind theme config."),Object(r.a)("pre",{className:"language-diff"},Object(r.a)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     extend: {\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       transitionProperty: {\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'height': 'height',\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"         'spacing': 'margin, padding',\n"),Object(r.a)("span",Object(n.a)({parentName:"code"},{className:"token unchanged"}),Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(r.a)("span",Object(n.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(r.a)("p",null,"Learn more about customizing the default theme in the ",Object(r.a)(p.a,{href:"/docs/theme#customizing-the-default-theme",passHref:!0},Object(r.a)("a",null,"theme customization documentation")),"."),Object(r.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(r.a)(O.a,{plugin:"transitionProperty",name:"transition-property",mdxType:"Variants"}),Object(r.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(r.a)(N.a,{plugin:"transitionProperty",name:"transition-property",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=k},"8C7G":function(e,a,t){"use strict";t.d(a,"a",(function(){return u}));var n=t("KQm4"),s=t("rePB"),o=t("q1tI"),c=t.n(o),r=t("98BF"),i=t("Zb5r"),p=t("AOjV"),l=c.a.createElement;function u(e){var a=e.plugin,t=e.name,o=r.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(e,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(e){return!o.includes(e)})).slice(0,2);return l(c.a.Fragment,null,l("p",null,"By default, ",o.length?"only ".concat(Object(i.a)(o)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),l(p.a,{path:"variants",before:"// ...",remove:Object(s.a)({},a,o),add:Object(s.a)({},a,[].concat(Object(n.a)(o),Object(n.a)(u)))}))}},I2Hb:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return(0,s.default)("transitionProperty",[["transition",["transitionProperty"]]])};var n,s=(n=t("y2+P"))&&n.__esModule?n:{default:n}},M6XH:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/transition-property",function(){return t("7F3y")}])},pOT7:function(e,a,t){"use strict";t.d(a,"a",(function(){return r}));var n=t("q1tI"),s=t.n(n),o=t("iuhU"),c=s.a.createElement;function r(e){var a=e.preview,t=e.snippet,n=e.previewClassName;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",n,{"p-4":!n}),dangerouslySetInnerHTML:{__html:a}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}}},[["M6XH",0,2,1,3,4,7]]]);