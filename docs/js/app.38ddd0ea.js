(function(t){function a(a){for(var s,c,i=a[0],o=a[1],l=a[2],f=0,d=[];f<i.length;f++)c=i[f],Object.prototype.hasOwnProperty.call(n,c)&&n[c]&&d.push(n[c][0]),n[c]=0;for(s in o)Object.prototype.hasOwnProperty.call(o,s)&&(t[s]=o[s]);u&&u(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),e()}function e(){for(var t,a=0;a<r.length;a++){for(var e=r[a],s=!0,i=1;i<e.length;i++){var o=e[i];0!==n[o]&&(s=!1)}s&&(r.splice(a--,1),t=c(c.s=e[0]))}return t}var s={},n={app:0},r=[];function c(a){if(s[a])return s[a].exports;var e=s[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,c),e.l=!0,e.exports}c.m=t,c.c=s,c.d=function(t,a,e){c.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,a){if(1&a&&(t=c(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(c.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var s in t)c.d(e,s,function(a){return t[a]}.bind(null,s));return e},c.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(a,"a",a),a},c.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},c.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],o=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=o;r.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"034f":function(t,a,e){"use strict";var s=e("85ec"),n=e.n(s);n.a},"05a0":function(t,a,e){"use strict";var s=e("72ea"),n=e.n(s);n.a},2343:function(t,a,e){"use strict";var s=e("da5d"),n=e.n(s);n.a},3096:function(t,a,e){"use strict";var s=e("8cda"),n=e.n(s);n.a},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var s=e("2b0e"),n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("b-container",[e("b-row",{staticClass:"text-center",attrs:{"align-h":"center"}},[e("b-col",[e("h1",[t._v("SEARCH"),e("i",{staticClass:"fab fa-searchengin"}),t._v("MODULE")])])],1)],1),e("Algolia"),e("Footer")],1)},r=[],c=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ais-instant-search",{attrs:{"search-client":t.searchClient,"index-name":"games"}},[e("b-container",[e("b-row",{staticClass:"text-center",attrs:{"align-h":"center"}},[e("b-col",{attrs:{cols:"12",md:"9",lg:"6"}},[e("ais-search-box")],1)],1),e("ais-hits",{scopedSlots:t._u([{key:"default",fn:function(a){var s=a.items;return e("b-row",{staticClass:"text-center",attrs:{"align-h":"center"}},t._l(s,(function(a){return e("b-col",{key:a.objectID,attrs:{cols:"12",sm:"6",md:"6",lg:"4",xl:"3"}},[e("div",{staticClass:"hit"},[e("img",{attrs:{src:a.image,alt:a.name}}),e("h5",[e("ais-highlight",{attrs:{attribute:"title",hit:a}})],1),e("ais-highlight",{attrs:{attribute:"developer",hit:a}}),e("h5",[e("ais-highlight",{attrs:{attribute:"date",hit:a}})],1),e("b-row",{staticClass:"text-center "},[e("b-col",{attrs:{cols:"6"}},[t._v(t._s(a.genre))]),e("b-col",{attrs:{cols:"6"}},[t._v(t._s(a.storage))]),e("b-col",{attrs:{cols:"6",tag:"h4"}},[t._v(t._s(a.rating))]),e("b-col",{attrs:{cols:"6",tag:"h4"}},[t._v(t._s(a.price))])],1),e("button",[t._v("DOWNLOAD")])],1)])})),1)}}])})],1)],1)},i=[],o=e("bb29"),l=e.n(o),u={data:function(){return{searchClient:l()("8NFZ6SQ85S","5408aecf4ad888d58430845af001d6d0")}}},f=u,d=(e("05a0"),e("f354"),e("2877")),p=Object(d["a"])(f,c,i,!1,null,"1315c4a4",null),b=p.exports,v=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("b-container",[e("div",{staticClass:"footer"},[e("b-row",{staticClass:"text-center",attrs:{"align-h":"between"}},[e("b-col",{staticClass:"content",attrs:{cols:"12",md:"12",lg:"5"}},[e("h4",[t._v("CONTACT")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"far fa-envelope"}),t._v("metald847@gmail.com")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fab fa-vk"}),t._v("vk.com/id337997317")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fab fa-linkedin-in"}),t._v("linkedin.com/in/timur-ismailov-641563194")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fas fa-mobile-alt"}),t._v("+998(91)466-86-41")])]),e("b-col",{staticClass:"content",attrs:{cols:"12",md:"12",lg:"4"}},[e("h4",[t._v("TECHNOLOGY")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fab fa-vuejs"}),t._v("Vue.js, Vue CLI")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fab fa-algolia"}),t._v("Algolia")]),e("p",{staticClass:"contact"},[e("i",{staticClass:"fab fa-bootstrap"}),t._v("Bootstrap-vue")])])],1),e("b-row",{staticClass:"text-center",attrs:{"align-h":"center"}},[e("b-col",{staticClass:"rights",attrs:{cols:"12",md:"1",lg:"1"}},[t._v("2019")]),e("b-col",{staticClass:"rights",attrs:{cols:"12",md:"6",lg:"4"}},[t._v("DESIGNED AND DEVELOPED BY TIMUR")]),e("b-col",{staticClass:"rights",attrs:{cols:"12",md:"12",lg:"3"}},[t._v("ALL RIGHTS NOT RESERVED")])],1)],1)])},h=[],g=(e("f9e3"),e("2dd8"),{data:function(){}}),_=g,C=(e("3096"),Object(d["a"])(_,v,h,!1,null,"4d9fd3cc",null)),m=C.exports,O={name:"app",components:{Algolia:b,Footer:m}},y=O,w=(e("034f"),e("2343"),Object(d["a"])(y,n,r,!1,null,"4c69a66f",null)),x=w.exports,j=e("0756"),E=e("5f5b");s["default"].use(E["a"]),s["default"].use(j["a"]),s["default"].config.productionTip=!1,new s["default"]({render:function(t){return t(x)}}).$mount("#app")},"72ea":function(t,a,e){},"85ec":function(t,a,e){},"8cda":function(t,a,e){},c27f:function(t,a,e){},da5d:function(t,a,e){},f354:function(t,a,e){"use strict";var s=e("c27f"),n=e.n(s);n.a}});
//# sourceMappingURL=app.38ddd0ea.js.map