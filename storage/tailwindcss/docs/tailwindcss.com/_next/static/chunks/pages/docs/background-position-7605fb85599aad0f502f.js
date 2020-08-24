_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[61],{"13Zk":function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){return function({addUtilities:n,e:a,theme:t,variants:e}){n(s.default.fromPairs(s.default.map(t("backgroundPosition"),(n,t)=>[`.${a(`bg-${t}`)}`,{"background-position":n}])),e("backgroundPosition"))}};var e,s=(e=t("LvDl"))&&e.__esModule?e:{default:e}},"1D70":function(n,a,t){"use strict";t.r(a),t.d(a,"Layout",(function(){return v})),t.d(a,"classes",(function(){return y})),t.d(a,"meta",(function(){return x})),t.d(a,"tableOfContents",(function(){return O})),t.d(a,"default",(function(){return N}));var e=t("wx14"),s=t("Ff2n"),o=t("q1tI"),p=t.n(o),c=t("7ljp"),i=t("YFqc"),r=t.n(i),l=t("tc9R"),u=t("pOT7"),g=t("vRWG"),d=t("I6Nb"),m=t("13Zk"),b=t.n(m),k=t("Ca+n"),f=(t("AOjV"),t("8C7G")),h=t("wH44"),v=(p.a.createElement,g.DocumentationLayout),y={plugin:b.a},x={title:"Background Position",description:"Utilities for controlling the position of an element's background image.",features:{responsive:!0,customizable:!1,hover:!1,focus:!1}},O=[{title:"Usage",slug:"usage",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Background Positions",slug:"background-positions"},{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],j={Layout:v,classes:y,meta:x,tableOfContents:O},w=d.ContentsLayout;function N(n){var a=n.components,t=Object(s.a)(n,["components"]);return Object(c.a)(w,Object(e.a)({},j,t,{components:a,mdxType:"MDXLayout"}),Object(c.a)(l.a,{level:2,id:"usage",toc:!0},"Usage"),Object(c.a)("p",null,"Use the ",Object(c.a)("inlineCode",{parentName:"p"},".bg-{side}")," utilities to control the position of an element's background image."),Object(c.a)(u.a,{preview:'\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-left-top</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-left-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-top</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-right-top</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-right-top bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n  <div class="flex justify-around mb-8">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-left</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-left bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-center</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-center bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-right</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-right bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n  <div class="flex justify-around">\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-left-bottom</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-left-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-bottom</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n    <div class="flex-1">\n      <p class="text-center text-sm text-gray-600 mb-1">.bg-right-bottom</p>\n      <div class="mx-auto bg-gray-400 w-24 h-24 bg-right-bottom bg-no-repeat" style="background-image:url(\'https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=64&h=64&q=80\');"></div>\n    </div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-left-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-right-top bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-left bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-center bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-right bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-left-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>bg-no-repeat bg-right-bottom bg-gray-400 w-24 h-24<span class="token punctuation">"</span></span><span class="token style-attr language-css"><span class="token attr-name"> <span class="token attr-name">style</span></span><span class="token punctuation">="</span><span class="token attr-value"><span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span>...<span class="token punctuation">)</span></span><span class="token punctuation">;</span></span><span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(c.a)(l.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(c.a)("p",null,"To control the position of an element's background image at a specific breakpoint, add a ",Object(c.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing background position utility. For example, adding the class ",Object(c.a)("inlineCode",{parentName:"p"},"md:bg-top")," to an element would apply the ",Object(c.a)("inlineCode",{parentName:"p"},"bg-top")," utility at medium screen sizes and above."),Object(c.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(c.a)(r.a,{href:"/docs/responsive-design",passHref:!0},Object(c.a)("a",null,"Responsive Design"))," documentation."),Object(c.a)(k.a,{classNames:["bg-center","bg-top","bg-right","bg-bottom","bg-left"],snippet:function(n){return'\n    <div class="'.concat(n,' ..." style="background-image: url(...)"></div>\n  ')},preview:function(n){return Object(c.a)("div",{className:"mx-auto bg-gray-400 w-48 h-48 bg-no-repeat ".concat(n),style:{backgroundImage:"url('https://images.unsplash.com/photo-1459262838948-3e2de6c1ec80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=128&h=128&q=80')"}})},mdxType:"ResponsiveCodeSample"}),Object(c.a)(l.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(c.a)(l.a,{level:3,id:"background-positions",toc:!0},"Background Positions"),Object(c.a)("p",null,"By default Tailwind provides nine ",Object(c.a)("inlineCode",{parentName:"p"},"background-position")," utilities. You change, add, or remove these by editing the ",Object(c.a)("inlineCode",{parentName:"p"},"theme.backgroundPosition")," section of your Tailwind config."),Object(c.a)("pre",{className:"language-diff"},Object(c.a)("code",Object(e.a)({parentName:"pre"},{className:"language-diff"}),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," // tailwind.config.js\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," module.exports = {\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   theme: {\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     backgroundPosition: {\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       bottom: 'bottom',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'bottom-4': 'center bottom 1rem',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       center: 'center',\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       left: 'left',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token deleted-sign deleted"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       'left-bottom': 'left bottom',\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix deleted"}),"-"),"       'left-top': 'left top',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       right: 'right',\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'right-bottom': 'right bottom',\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       'right-top': 'right top',\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"       top: 'top',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token inserted-sign inserted"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix inserted"}),"+"),"       'top-4': 'center top 1rem',\n"),Object(c.a)("span",Object(e.a)({parentName:"code"},{className:"token unchanged"}),Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"     }\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," "),"   }\n",Object(c.a)("span",Object(e.a)({parentName:"span"},{className:"token prefix unchanged"})," ")," }"))),Object(c.a)(l.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(c.a)(f.a,{plugin:"backgroundPosition",mdxType:"Variants"}),Object(c.a)(l.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(c.a)(h.a,{plugin:"backgroundPosition",mdxType:"Disabling"}))}N.isMDXComponent=!0,N.layoutProps=j},"5xSE":function(n,a,t){"use strict";n.exports=function(n){return"[object RegExp]"===Object.prototype.toString.call(n)}},"8C7G":function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var e=t("KQm4"),s=t("rePB"),o=t("q1tI"),p=t.n(o),c=t("98BF"),i=t("Zb5r"),r=t("AOjV"),l=p.a.createElement;function u(n){var a=n.plugin,t=n.name,o=c.defaultConfig.variants[a]||["responsive"];t=t||a.replace(/([a-z])([A-Z])/g,(function(n,a,t){return"".concat(a," ").concat(t.toLowerCase())}));var u=["responsive","hover","focus","active","group-hover"].filter((function(n){return!o.includes(n)})).slice(0,2);return l(p.a.Fragment,null,l("p",null,"By default, ",o.length?"only ".concat(Object(i.a)(o)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,a)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",o.length>0?"also ":"","generate"," ",Object(i.a)(u)," variants:"),l(r.a,{path:"variants",before:"// ...",remove:Object(s.a)({},a,o),add:Object(s.a)({},a,[].concat(Object(e.a)(o),Object(e.a)(u)))}))}},AOjV:function(n,a,t){"use strict";t.d(a,"a",(function(){return u}));var e=t("q1tI"),s=t.n(e),o=t("Btb4"),p=t.n(o),c=t("AI3G"),i=t("iuhU"),r=s.a.createElement;function l(n){var a=n.edits,t=n.indent,s=void 0===t?"":t,o=n.type,c=void 0===o?"inserted":o;return r("span",{className:Object(i.a)("token",{"inserted-sign inserted":"inserted"===c,"deleted-sign deleted":"inserted"!==c})},Object.keys(a).map((function(n,t){return r(e.Fragment,{key:t},r("span",{className:Object(i.a)("token prefix",{inserted:"inserted"===c,deleted:"inserted"!==c})},"inserted"===c?"+":"-")," ",s,/^[a-z_$][a-z0-9_$]*$/i.test(o=n)?o:"'".concat(o,"'"),":"," ",p()(a[n],{indent:"  "}).replace(/\[([^\]]+)\]/g,(function(n,a){return"[".concat(a.replace(/\n\s*/g," ").trim(),"]")})).split("\n").map((function(n,a){return"".concat(0===a?"":"+ "+s).concat(n)})).join("\n"),",\n");var o})))}function u(n){var a=n.path,t=n.add,s=n.remove,o=n.before,p=n.after;return a="string"===typeof a?a.split("."):a,r("pre",{className:"language-diff"},r("code",{className:"language-diff"},r("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",a.map((function(n,a){return r(e.Fragment,{key:a},"  ","  ".repeat(a+1),n,": ","{\n")})),o&&Object(c.a)(o).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")}))),s&&r(l,{edits:s,type:"deleted",indent:"  ".repeat(a.length+1)}),t&&r(l,{edits:t,type:"inserted",indent:"  ".repeat(a.length+1)}),r("span",{className:"token unchanged"},p&&Object(c.a)(p).map((function(n){return"".concat("  ".repeat(a.length+2)).concat(n,"\n")})),a.map((function(n,t){return r(e.Fragment,{key:t},"  ","  ".repeat(a.length-t),"}\n")})),"  }")))}},Btb4:function(n,a,t){"use strict";const e=t("5xSE"),s=t("p+I8"),o=t("GAX2").default;n.exports=(n,a,t)=>{const p=[];return function n(a,t,c){let i;(t=t||{}).indent=t.indent||"\t",c=c||"",i=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:c,indent:c+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const r=n=>{if(void 0===t.inlineCharacterLimit)return n;const a=n.replace(new RegExp(i.newLine,"g"),"").replace(new RegExp(i.newLineOrSpace,"g")," ").replace(new RegExp(i.pad+"|"+i.indent,"g"),"");return a.length<=t.inlineCharacterLimit?a:n.replace(new RegExp(i.newLine+"|"+i.newLineOrSpace,"g"),"\n").replace(new RegExp(i.pad,"g"),c).replace(new RegExp(i.indent,"g"),c+t.indent)};if(-1!==p.indexOf(a))return'"[Circular]"';if(null===a||void 0===a||"number"===typeof a||"boolean"===typeof a||"function"===typeof a||"symbol"===typeof a||e(a))return String(a);if(a instanceof Date)return`new Date('${a.toISOString()}')`;if(Array.isArray(a)){if(0===a.length)return"[]";p.push(a);const e="["+i.newLine+a.map((e,s)=>{const o=a.length-1===s?i.newLine:","+i.newLineOrSpace;let p=n(e,t,c+t.indent);return t.transform&&(p=t.transform(a,s,p)),i.indent+p+o}).join("")+i.pad+"]";return p.pop(),r(e)}if(s(a)){let e=Object.keys(a).concat(o(a));if(t.filter&&(e=e.filter(n=>t.filter(a,n))),0===e.length)return"{}";p.push(a);const s="{"+i.newLine+e.map((s,o)=>{const p=e.length-1===o?i.newLine:","+i.newLineOrSpace,r="symbol"===typeof s,l=!r&&/^[a-z$_][a-z$_0-9]*$/i.test(s),u=r||l?s:n(s,t);let g=n(a[s],t,c+t.indent);return t.transform&&(g=t.transform(a,s,g)),i.indent+String(u)+": "+g+p}).join("")+i.pad+"}";return p.pop(),r(s)}return a=String(a).replace(/[\r\n]/g,n=>"\n"===n?"\\n":"\\r"),!1===t.singleQuotes?`"${a=a.replace(/"/g,'\\"')}"`:`'${a=a.replace(/\\?'/g,"\\'")}'`}(n,a,t)}},"Ca+n":function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var e=t("q1tI"),s=t.n(e),o=t("S5AU"),p=t.n(o),c=t("iuhU"),i=s.a.createElement,r=["","sm:","md:","lg:","xl:"];function l(n){var a=n.children,t=n.active,e=n.onClick;return i("button",{type:"button",className:Object(c.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:e},a)}var u=function(n){return'<div class="'.concat(n,'"></div>')};function g(n){var a=n.classNames,t=n.snippet,s=void 0===t?u:t,o=n.preview,g=n.previewClassName,d=Array.isArray(a[0])?a.length:1,m=Object(e.useState)(0),b=m[0],k=m[1];return i("div",{className:"mt-8"},i("div",{className:"flex justify-center"},i("div",{className:"grid grid-cols-5 mb-2 bg-white"},i(l,{active:0===b,onClick:function(){return k(0)}},i("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"all")),i(l,{active:1===b,onClick:function(){return k(1)}},i("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"sm")),i(l,{active:2===b,onClick:function(){return k(2)}},i("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"md")),i(l,{active:3===b,onClick:function(){return k(3)}},i("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),i("p",{className:"text-xs"},"lg")),i(l,{active:4===b,onClick:function(){return k(4)}},i("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},i("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),i("p",{className:"text-xs"},"xl")))),i("div",{className:"overflow-hidden mb-8"},i("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},i("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},i("code",{className:"inline-block p-4"},p()(s(1===d?"{{CLASSNAMES}}":Array.from({length:d}).map((function(n,a){return"{{CLASSNAMES[".concat(a,"]}}")})))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((function(n,t){if(t%2===1){var e=n.match(/\[([0-9]+)\]/);return(e?a[parseInt(e[1],10)]:a).map((function(n,a){return n?i("span",{key:"".concat(t,"-").concat(a),className:b===a?"text-code-yellow":""},0===a?"":" ",n.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map((function(n){return"".concat(r[a]).concat(n)})).join(" ")):null})).filter(Boolean)}return n}))))),i("div",{className:Object(c.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",g,{"p-4":!g})},o(function(n){if(d>1)return a.map((function(a){for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}));for(var t=n;t>=0;t--)if(a[t])return a[t].replace(/\(([^)]+)\)/g,"$1")}(b)))))}},GAX2:function(n,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=n=>Object.getOwnPropertySymbols(n).filter(a=>Object.prototype.propertyIsEnumerable.call(n,a))},"IBu/":function(n,a,t){"use strict";const e=t("sQdO");n.exports=n=>{const a=e(n);if(0===a)return n;const t=new RegExp(`^[ \\t]{${a}}`,"gm");return n.replace(t,"")}},Q8Gg:function(n,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/background-position",function(){return t("1D70")}])},S5AU:function(n,a,t){"use strict";const e=t("IBu/"),s=t("S6im");n.exports=(n,a=0,t)=>s(e(n),a,t)},S6im:function(n,a,t){"use strict";n.exports=(n,a=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof n)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof n}\``);if("number"!==typeof a)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof a}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===a)return n;const e=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return n.replace(e,t.indent.repeat(a))}},YuTi:function(n,a){n.exports=function(n){return n.webpackPolyfill||(n.deprecate=function(){},n.paths=[],n.children||(n.children=[]),Object.defineProperty(n,"loaded",{enumerable:!0,get:function(){return n.l}}),Object.defineProperty(n,"id",{enumerable:!0,get:function(){return n.i}}),n.webpackPolyfill=1),n}},Zb5r:function(n,a,t){"use strict";function e(n){return n.reduce((function(a,t,e){return 0===e?t:e===n.length-1?"".concat(a," and ").concat(t):"".concat(a,", ").concat(t)}),"")}t.d(a,"a",(function(){return e}))},"p+I8":function(n,a,t){"use strict";n.exports=function(n){var a=typeof n;return null!==n&&("object"===a||"function"===a)}},pOT7:function(n,a,t){"use strict";t.d(a,"a",(function(){return c}));var e=t("q1tI"),s=t.n(e),o=t("iuhU"),p=s.a.createElement;function c(n){var a=n.preview,t=n.snippet,e=n.previewClassName;return p("div",{className:"relative overflow-hidden mb-8"},p("div",{className:Object(o.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",e,{"p-4":!e}),dangerouslySetInnerHTML:{__html:a}}),p("div",{className:"rounded-b-lg bg-gray-800"},p("pre",{className:"scrollbar-none m-0 p-0 language-html"},p("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(n,a,t){"use strict";n.exports=n=>{const a=n.match(/^[ \t]*(?=\S)/gm);return a?a.reduce((n,a)=>Math.min(n,a.length),1/0):0}},wH44:function(n,a,t){"use strict";t.d(a,"a",(function(){return g}));var e=t("rePB"),s=t("q1tI"),o=t.n(s),p=t("AOjV"),c=t("AI3G"),i=t("Zb5r"),r=o.a.createElement;function l(n,a){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(n);a&&(e=e.filter((function(a){return Object.getOwnPropertyDescriptor(n,a).enumerable}))),t.push.apply(t,e)}return t}function u(n){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?l(Object(t),!0).forEach((function(a){Object(e.a)(n,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(a){Object.defineProperty(n,a,Object.getOwnPropertyDescriptor(t,a))}))}return n}function g(n){var a=n.plugin,t=n.name,s=Object(c.a)(a);return t=t||a.replace(/([a-z])([A-Z])/g,(function(n,a,t){return"".concat(a," ").concat(t.toLowerCase())})),r(o.a.Fragment,null,r("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",r("span",{dangerouslySetInnerHTML:{__html:Object(i.a)(s.map((function(n){return"<code>".concat(n,"</code>")})))}})," ",s.length>1?"properties":"property"," to ",r("code",null,"false")," in the"," ",r("code",null,"corePlugins")," section of your config file:"),r(p.a,{path:"corePlugins",before:"// ...",add:s.reduce((function(n,a){return u(u({},n),{},Object(e.a)({},a,!1))}),{})}))}},yLpj:function(n,a){var t;t=function(){return this}();try{t=t||new Function("return this")()}catch(e){"object"===typeof window&&(t=window)}n.exports=t}},[["Q8Gg",0,2,5,1,3,4]]]);