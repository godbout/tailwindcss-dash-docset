(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[132],{"5xSE":function(a,n,t){"use strict";a.exports=function(a){return"[object RegExp]"===Object.prototype.toString.call(a)}},"8C7G":function(a,n,t){"use strict";t.d(n,"a",(function(){return i}));var s=t("q1tI"),e=t.n(s),p=t("98BF"),c=t("Zb5r"),o=t("AOjV"),l=e.a.createElement;function i(a){var{plugin:n,name:t}=a,s=p.defaultConfig.variants[n]||["responsive"];t=t||n.replace(/([a-z])([A-Z])/g,(a,n,t)=>"".concat(n," ").concat(t.toLowerCase()));var i=["responsive","hover","focus","active","group-hover"].filter(a=>!s.includes(a)).slice(0,2);return l(e.a.Fragment,null,l("p",null,"By default, ",s.length?"only ".concat(Object(c.a)(s)):"no"," variants are generated for ",t," utilities."),l("p",null,"You can control which variants are generated for the ",t," utilities by modifying the"," ",l("code",null,n)," property in the ",l("code",null,"variants")," section of your"," ",l("code",null,"tailwind.config.js")," file."),l("p",null,"For example, this config will ",s.length>0?"also ":"","generate"," ",Object(c.a)(i)," variants:"),l(o.a,{path:"variants",before:"// ...",remove:{[n]:s},add:{[n]:[...s,...i]}}))}},AOjV:function(a,n,t){"use strict";t.d(n,"a",(function(){return u}));var s=t("q1tI"),e=t.n(s),p=t("Btb4"),c=t.n(p),o=t("AI3G"),l=t("iuhU"),i=e.a.createElement;function r(a){var{edits:n,indent:t="",type:e="inserted"}=a;return i("span",{className:Object(l.a)("token",{"inserted-sign inserted":"inserted"===e,"deleted-sign deleted":"inserted"!==e})},Object.keys(n).map((a,p)=>i(s.Fragment,{key:p},i("span",{className:Object(l.a)("token prefix",{inserted:"inserted"===e,deleted:"inserted"!==e})},"inserted"===e?"+":"-")," ",t,function(a){return/^[a-z_$][a-z0-9_$]*$/i.test(a)?a:"'".concat(a,"'")}(a),":"," ",c()(n[a],{indent:"  "}).replace(/\[([^\]]+)\]/g,(a,n)=>"[".concat(n.replace(/\n\s*/g," ").trim(),"]")).split("\n").map((a,n)=>"".concat(0===n?"":"+ "+t).concat(a)).join("\n"),",\n")))}function u(a){var{path:n,add:t,remove:e,before:p,after:c}=a;return n="string"===typeof n?n.split("."):n,i("pre",{className:"language-diff"},i("code",{className:"language-diff"},i("span",{className:"token unchanged"},"  // tailwind.config.js\n","  module.exports = {\n",n.map((a,n)=>i(s.Fragment,{key:n},"  ","  ".repeat(n+1),a,": ","{\n")),p&&Object(o.a)(p).map(a=>"".concat("  ".repeat(n.length+2)).concat(a,"\n"))),e&&i(r,{edits:e,type:"deleted",indent:"  ".repeat(n.length+1)}),t&&i(r,{edits:t,type:"inserted",indent:"  ".repeat(n.length+1)}),i("span",{className:"token unchanged"},c&&Object(o.a)(c).map(a=>"".concat("  ".repeat(n.length+2)).concat(a,"\n")),n.map((a,t)=>i(s.Fragment,{key:t},"  ","  ".repeat(n.length-t),"}\n")),"  }")))}},BHwf:function(a,n,t){"use strict";t.r(n),t.d(n,"Layout",(function(){return x})),t.d(n,"classes",(function(){return b})),t.d(n,"meta",(function(){return f})),t.d(n,"tableOfContents",(function(){return h})),t.d(n,"default",(function(){return w}));var s=t("wx14"),e=t("Ff2n"),p=t("q1tI"),c=t.n(p),o=t("7ljp"),l=t("YFqc"),i=t.n(l),r=t("tc9R"),u=t("pOT7"),g=t("vRWG"),k=t("I6Nb"),d=t("zmQS"),m=t.n(d),v=t("8C7G"),y=t("wH44"),x=(t("Ca+n"),c.a.createElement,g.DocumentationLayout),b={plugin:m()},f={title:"Place Items",description:"Utilities for controlling how items are justifed and aligned at the same time.",featureVersion:"v1.8.0+"},h=[{title:"Auto",slug:"auto",children:[]},{title:"Start",slug:"start",children:[]},{title:"End",slug:"end",children:[]},{title:"Center",slug:"center",children:[]},{title:"Stretch",slug:"stretch",children:[]},{title:"Responsive",slug:"responsive",children:[]},{title:"Customizing",slug:"customizing",children:[{title:"Responsive and pseudo-class variants",slug:"responsive-and-pseudo-class-variants"},{title:"Disabling",slug:"disabling"}]}],O={Layout:x,classes:b,meta:f,tableOfContents:h},j=k.ContentsLayout;function w(a){var{components:n}=a,t=Object(e.a)(a,["components"]);return Object(o.a)(j,Object(s.a)({},O,t,{components:n,mdxType:"MDXLayout"}),Object(o.a)(r.a,{level:2,id:"auto",toc:!0},"Auto"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-auto")," to place grid items automatically in their grid areas:"),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 place-items-auto bg-gray-200 h-48">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">5</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">6</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 place-items-auto bg-gray-200 h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"start",toc:!0},"Start"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-start")," to place grid items on the start of their grid areas on both axis:"),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 place-items-start bg-gray-200 h-48">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">5</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">6</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 place-items-start bg-gray-200 h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"end",toc:!0},"End"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-start")," to place grid items on the end of their grid areas on both axis:"),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 place-items-end bg-gray-200 h-48">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">5</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">6</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 place-items-end bg-gray-200 h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"center",toc:!0},"Center"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," to place grid items on the center of their grid areas on both axis:"),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 place-items-center bg-gray-200 h-48">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">5</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">6</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 place-items-center bg-gray-200 h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"stretch",toc:!0},"Stretch"),Object(o.a)("p",null,"Use ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-stretch")," to stretch items along their grid areas on both axis:"),Object(o.a)(u.a,{preview:'\n  <div class="grid grid-cols-3 place-items-stretch bg-gray-200 h-48">\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">1</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">2</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">3</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">4</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">5</div>\n    <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">6</div>\n  </div>\n',snippet:'<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>grid grid-cols-3 place-items-stretch bg-gray-200 h-48<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>2<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>4<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>5<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>text-gray-700 text-center bg-gray-400 px-4 py-2 m-2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>6<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>',previewClassName:void 0}),Object(o.a)(r.a,{level:2,id:"responsive",toc:!0},"Responsive"),Object(o.a)("p",null,"To place items at a specific breakpoint, add a ",Object(o.a)("inlineCode",{parentName:"p"},"{screen}:")," prefix to any existing ",Object(o.a)("inlineCode",{parentName:"p"},"place-items")," utility. For example, use ",Object(o.a)("inlineCode",{parentName:"p"},"md:place-items-center")," to apply the ",Object(o.a)("inlineCode",{parentName:"p"},"place-items-center")," utility at only medium screen sizes and above."),Object(o.a)("pre",{className:"language-html"},Object(o.a)("code",Object(s.a)({parentName:"pre"},{className:"language-html"}),Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"<"),"div")," ",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-name"}),"class"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token attr-value"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"="),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"'),"place-items-start md:place-items-center",Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),'"')),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")),"\n  ",Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token comment"}),"\x3c!-- ... --\x3e"),"\n",Object(o.a)("span",Object(s.a)({parentName:"code"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token tag"}),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),"</"),"div"),Object(o.a)("span",Object(s.a)({parentName:"span"},{className:"token punctuation"}),">")))),Object(o.a)("p",null,"For more information about Tailwind's responsive design features, check out the ",Object(o.a)(i.a,{href:"/docs/responsive-design",passHref:!0},Object(o.a)("a",null,"Responsive Design"))," documentation."),Object(o.a)(r.a,{level:2,id:"customizing",toc:!0},"Customizing"),Object(o.a)(r.a,{level:3,id:"responsive-and-pseudo-class-variants",toc:!0},"Responsive and pseudo-class variants"),Object(o.a)(v.a,{plugin:"placeItems",name:"place-items",mdxType:"Variants"}),Object(o.a)(r.a,{level:3,id:"disabling",toc:!0},"Disabling"),Object(o.a)(y.a,{plugin:"placeItems",name:"place-items",mdxType:"Disabling"}))}w.isMDXComponent=!0,w.layoutProps=O},Btb4:function(a,n,t){"use strict";const s=t("5xSE"),e=t("p+I8"),p=t("GAX2").default;a.exports=(a,n,t)=>{const c=[];return function a(n,t,o){let l;(t=t||{}).indent=t.indent||"\t",o=o||"",l=void 0===t.inlineCharacterLimit?{newLine:"\n",newLineOrSpace:"\n",pad:o,indent:o+t.indent}:{newLine:"@@__STRINGIFY_OBJECT_NEW_LINE__@@",newLineOrSpace:"@@__STRINGIFY_OBJECT_NEW_LINE_OR_SPACE__@@",pad:"@@__STRINGIFY_OBJECT_PAD__@@",indent:"@@__STRINGIFY_OBJECT_INDENT__@@"};const i=a=>{if(void 0===t.inlineCharacterLimit)return a;const n=a.replace(new RegExp(l.newLine,"g"),"").replace(new RegExp(l.newLineOrSpace,"g")," ").replace(new RegExp(l.pad+"|"+l.indent,"g"),"");return n.length<=t.inlineCharacterLimit?n:a.replace(new RegExp(l.newLine+"|"+l.newLineOrSpace,"g"),"\n").replace(new RegExp(l.pad,"g"),o).replace(new RegExp(l.indent,"g"),o+t.indent)};if(-1!==c.indexOf(n))return'"[Circular]"';if(null===n||void 0===n||"number"===typeof n||"boolean"===typeof n||"function"===typeof n||"symbol"===typeof n||s(n))return String(n);if(n instanceof Date)return`new Date('${n.toISOString()}')`;if(Array.isArray(n)){if(0===n.length)return"[]";c.push(n);const s="["+l.newLine+n.map((s,e)=>{const p=n.length-1===e?l.newLine:","+l.newLineOrSpace;let c=a(s,t,o+t.indent);return t.transform&&(c=t.transform(n,e,c)),l.indent+c+p}).join("")+l.pad+"]";return c.pop(),i(s)}if(e(n)){let s=Object.keys(n).concat(p(n));if(t.filter&&(s=s.filter(a=>t.filter(n,a))),0===s.length)return"{}";c.push(n);const e="{"+l.newLine+s.map((e,p)=>{const c=s.length-1===p?l.newLine:","+l.newLineOrSpace,i="symbol"===typeof e,r=!i&&/^[a-z$_][a-z$_0-9]*$/i.test(e),u=i||r?e:a(e,t);let g=a(n[e],t,o+t.indent);return t.transform&&(g=t.transform(n,e,g)),l.indent+String(u)+": "+g+c}).join("")+l.pad+"}";return c.pop(),i(e)}return n=String(n).replace(/[\r\n]/g,a=>"\n"===a?"\\n":"\\r"),!1===t.singleQuotes?`"${n=n.replace(/"/g,'\\"')}"`:`'${n=n.replace(/\\?'/g,"\\'")}'`}(a,n,t)}},"Ca+n":function(a,n,t){"use strict";t.d(n,"a",(function(){return g}));var s=t("q1tI"),e=t.n(s),p=t("S5AU"),c=t.n(p),o=t("iuhU"),l=e.a.createElement,i=["","sm:","md:","lg:","xl:"];function r(a){var{children:n,active:t,onClick:s}=a;return l("button",{type:"button",className:Object(o.a)("inline-block text-center cursor-pointer select-none px-3",{"text-gray-800":t,"text-gray-500":!t}),onClick:s},n)}var u=a=>'<div class="'.concat(a,'"></div>');function g(a){var{classNames:n,snippet:t=u,preview:e,previewClassName:p}=a,g=Array.isArray(n[0])?n.length:1,{0:k,1:d}=Object(s.useState)(0);return l("div",{className:"mt-8"},l("div",{className:"flex justify-center"},l("div",{className:"grid grid-cols-5 mb-2 bg-white"},l(r,{active:0===k,onClick:()=>d(0)},l("svg",{width:"8.57142857142857",height:"24",viewBox:"0 0 10 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 12h7a1.5 1.5 0 0 1 1.5 1.5v13A1.5 1.5 0 0 1 8.5 28h-7A1.5 1.5 0 0 1 0 26.5v-13A1.5 1.5 0 0 1 1.5 12zM1 15v10h8V15H1zm4 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM4 13v1h2v-1H4z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"all")),l(r,{active:1===k,onClick:()=>d(1)},l("svg",{width:"11.999999999999998",height:"24",viewBox:"0 0 14 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M1.5 6h11A1.5 1.5 0 0 1 14 7.5v19a1.5 1.5 0 0 1-1.5 1.5h-11A1.5 1.5 0 0 1 0 26.5v-19A1.5 1.5 0 0 1 1.5 6zM1 9v16h12V9H1zm6 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM7 8a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"sm")),l(r,{active:2===k,onClick:()=>d(2)},l("svg",{width:"22.28571428571428",height:"24",viewBox:"0 0 26 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M26 26.5a1.5 1.5 0 0 1-1.5 1.5h-23A1.5 1.5 0 0 1 0 26.5v-14A1.5 1.5 0 0 1 1.5 11h23a1.5 1.5 0 0 1 1.5 1.5v14zm-3 .5V12H3v15h20zm1.5-6.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-23-.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"md")),l(r,{active:3===k,onClick:()=>d(3)},l("svg",{width:"32.57142857142856",height:"24",viewBox:"0 0 38 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M34 26h4v1c-1.333.667-2.667 1-4 1H4c-1.333 0-2.667-.333-4-1v-1h4V7.5A1.5 1.5 0 0 1 5.5 6h27A1.5 1.5 0 0 1 34 7.5V26zM6 8v18h26V8H6z",fillRule:"evenodd"})),l("p",{className:"text-xs"},"lg")),l(r,{active:4===k,onClick:()=>d(4)},l("svg",{width:"30.85714285714285",height:"24",viewBox:"0 0 36 28",xmlns:"http://www.w3.org/2000/svg",className:"fill-current block mx-auto mb-1"},l("path",{d:"M20.857 24l.857 3H24v1H12v-1h2.286l.857-3H1.5A1.5 1.5 0 0 1 0 22.5v-21A1.5 1.5 0 0 1 1.5 0h33A1.5 1.5 0 0 1 36 1.5v21a1.5 1.5 0 0 1-1.5 1.5H20.857zM2 2v18h32V2H2z"})),l("p",{className:"text-xs"},"xl")))),l("div",{className:"overflow-hidden mb-8"},l("div",{className:"rounded-t-lg bg-gray-800 border-b border-gray-300 whitespace-pre font-mono text-gray-500 text-sm"},l("pre",{className:"scrollbar-none m-0 p-0 overflow-auto scrolling-touch"},l("code",{className:"inline-block p-4"},c()(t(1===g?"{{CLASSNAMES}}":Array.from({length:g}).map((a,n)=>"{{CLASSNAMES[".concat(n,"]}}")))).trim().split(/(\{\{CLASSNAMES(?:\[[0-9]+\])?\}\})/).flatMap((a,t)=>{if(t%2===1){var s=a.match(/\[([0-9]+)\]/);return(s?n[parseInt(s[1],10)]:n).map((a,n)=>a?l("span",{key:"".concat(t,"-").concat(n),className:k===n?"text-code-yellow":""},0===n?"":" ",a.replace(/\(([^)]+)\)/g,"").trim().split(/\s+/).map(a=>"".concat(i[n]).concat(a)).join(" ")):null).filter(Boolean)}return a})))),l("div",{className:Object(o.a)("rounded-b-lg border-l border-r border-b border-gray-400 bg-white",p,{"p-4":!p})},e(function(a){if(g>1)return n.map(n=>{for(var t=a;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")});for(var t=a;t>=0;t--)if(n[t])return n[t].replace(/\(([^)]+)\)/g,"$1")}(k)))))}},GAX2:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=a=>Object.getOwnPropertySymbols(a).filter(n=>Object.prototype.propertyIsEnumerable.call(a,n))},"IBu/":function(a,n,t){"use strict";const s=t("sQdO");a.exports=a=>{const n=s(a);if(0===n)return a;const t=new RegExp(`^[ \\t]{${n}}`,"gm");return a.replace(t,"")}},OF2o:function(a,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/place-items",function(){return t("BHwf")}])},S5AU:function(a,n,t){"use strict";const s=t("IBu/"),e=t("S6im");a.exports=(a,n=0,t)=>e(s(a),n,t)},S6im:function(a,n,t){"use strict";a.exports=(a,n=1,t)=>{if(t={indent:" ",includeEmptyLines:!1,...t},"string"!==typeof a)throw new TypeError(`Expected \`input\` to be a \`string\`, got \`${typeof a}\``);if("number"!==typeof n)throw new TypeError(`Expected \`count\` to be a \`number\`, got \`${typeof n}\``);if("string"!==typeof t.indent)throw new TypeError(`Expected \`options.indent\` to be a \`string\`, got \`${typeof t.indent}\``);if(0===n)return a;const s=t.includeEmptyLines?/^/gm:/^(?!\s*$)/gm;return a.replace(s,t.indent.repeat(n))}},Zb5r:function(a,n,t){"use strict";function s(a){return a.reduce((n,t,s)=>0===s?t:s===a.length-1?"".concat(n," and ").concat(t):"".concat(n,", ").concat(t),"")}t.d(n,"a",(function(){return s}))},"p+I8":function(a,n,t){"use strict";a.exports=function(a){var n=typeof a;return null!==a&&("object"===n||"function"===n)}},pOT7:function(a,n,t){"use strict";t.d(n,"a",(function(){return o}));var s=t("q1tI"),e=t.n(s),p=t("iuhU"),c=e.a.createElement;function o(a){var{preview:n,snippet:t,previewClassName:s}=a;return c("div",{className:"relative overflow-hidden mb-8"},c("div",{className:Object(p.a)("rounded-t-lg overflow-hidden border-t border-l border-r border-gray-400",s,{"p-4":!s}),dangerouslySetInnerHTML:{__html:n}}),c("div",{className:"rounded-b-lg bg-gray-800"},c("pre",{className:"scrollbar-none m-0 p-0 language-html"},c("code",{className:"inline-block p-4 scrolling-touch language-html",dangerouslySetInnerHTML:{__html:t}}))))}},sQdO:function(a,n,t){"use strict";a.exports=a=>{const n=a.match(/^[ \t]*(?=\S)/gm);return n?n.reduce((a,n)=>Math.min(a,n.length),1/0):0}},wH44:function(a,n,t){"use strict";t.d(n,"a",(function(){return g}));var s=t("rePB"),e=t("q1tI"),p=t.n(e),c=t("AOjV"),o=t("AI3G"),l=t("Zb5r"),i=p.a.createElement;function r(a,n){var t=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(a,n).enumerable}))),t.push.apply(t,s)}return t}function u(a){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){Object(s.a)(a,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(a,n,Object.getOwnPropertyDescriptor(t,n))}))}return a}function g(a){var{plugin:n,name:t}=a,s=Object(o.a)(n);return t=t||n.replace(/([a-z])([A-Z])/g,(a,n,t)=>"".concat(n," ").concat(t.toLowerCase())),i(p.a.Fragment,null,i("p",null,"If you don't plan to use the ",t," utilities in your project, you can disable them entirely by setting the"," ",i("span",{dangerouslySetInnerHTML:{__html:Object(l.a)(s.map(a=>"<code>".concat(a,"</code>")))}})," ",s.length>1?"properties":"property"," to ",i("code",null,"false")," in the"," ",i("code",null,"corePlugins")," section of your config file:"),i(c.a,{path:"corePlugins",before:"// ...",add:s.reduce((a,n)=>u(u({},a),{},{[n]:!1}),{})}))}},zmQS:function(a,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){return function({addUtilities:a,variants:n,target:t}){"ie11"!==t("placeItems")&&a({".place-items-auto":{"place-items":"auto"},".place-items-start":{"place-items":"start"},".place-items-end":{"place-items":"end"},".place-items-center":{"place-items":"center"},".place-items-stretch":{"place-items":"stretch"}},n("placeItems"))}}}},[["OF2o",0,2,1,3,4]]]);