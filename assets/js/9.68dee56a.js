(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{394:function(t,e,n){},395:function(t,e,n){},396:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return a})),n.d(e,"a",(function(){return f}));n(17),n(21),n(23);var r={data:function(){return{comp:null}},computed:{page:function(){return this.$pagination.paginationIndex+1}},mounted:function(){var t=this;n.e(4).then(n.t.bind(null,462,7)).then((function(e){t.comp=e.default}))},methods:{clickCallback:function(t){var e=this.$pagination.getSpecificPageLink(t-1);this.$router.push(e)}}},i=(n(397),n(11)),o=Object(i.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.comp?n(t.comp,{tag:"component",attrs:{value:t.page,"page-count":t.$pagination.length,"click-handler":t.clickCallback,"prev-text":t.$pagination.prevText,"next-text":t.$pagination.nextText,"container-class":"pagination","page-class":"page-item"}}):t._e()}),[],!1,null,null,null).exports,a=(n(398),Object(i.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pagination simple-pagination"},[t.$pagination.hasPrev?n("router-link",{attrs:{to:t.$pagination.prevLink}},[t._v("\n    "+t._s(t.$pagination.prevText)+"\n  ")]):t._e(),t._v(" "),t.$pagination.hasNext?n("router-link",{attrs:{to:t.$pagination.nextLink}},[t._v("\n    "+t._s(t.$pagination.nextText)+"\n  ")]):t._e()],1)}),[],!1,null,null,null).exports),s=(n(399),n(83)),u=n.n(s),c=n(400),p=n.n(c),l={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return p()(this.$props,u.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},f=Object(i.a)(l,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports},397:function(t,e,n){"use strict";n(394)},398:function(t,e,n){"use strict";n(395)},399:function(t,e,n){"use strict";var r=n(12),i=n(6),o=n(82),a=n(18),s=n(14),u=n(34),c=n(221),p=n(58),l=n(5),f=n(41),m=n(59).f,g=n(31).f,v=n(13).f,h=n(220).trim,d=i.Number,_=d.prototype,b="Number"==u(f(_)),y=function(t){var e,n,r,i,o,a,s,u,c=p(t,!1);if("string"==typeof c&&c.length>2)if(43===(e=(c=h(c)).charCodeAt(0))||45===e){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===e){switch(c.charCodeAt(1)){case 66:case 98:r=2,i=49;break;case 79:case 111:r=8,i=55;break;default:return+c}for(a=(o=c.slice(2)).length,s=0;s<a;s++)if((u=o.charCodeAt(s))<48||u>i)return NaN;return parseInt(o,r)}return+c};if(o("Number",!d(" 0o1")||!d("0b1")||d("+0x1"))){for(var x,N=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof N&&(b?l((function(){_.valueOf.call(n)})):"Number"!=u(n))?c(new d(y(e)),n,N):y(e)},P=r?m(d):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),$=0;P.length>$;$++)s(d,x=P[$])&&!s(N,x)&&v(N,x,g(d,x));N.prototype=_,_.constructor=N,a(i,"Number",N)}},400:function(t,e,n){var r=n(218),i=n(211),o=n(401),a=n(405);t.exports=function(t,e){if(null==t)return{};var n=r(a(t),(function(t){return[t]}));return e=i(e),o(t,n,(function(t,n){return e(t,n[0])}))}},401:function(t,e,n){var r=n(126),i=n(402),o=n(121);t.exports=function(t,e,n){for(var a=-1,s=e.length,u={};++a<s;){var c=e[a],p=r(t,c);n(p,c)&&i(u,o(c,t),p)}return u}},402:function(t,e,n){var r=n(403),i=n(121),o=n(124),a=n(81),s=n(61);t.exports=function(t,e,n,u){if(!a(t))return t;for(var c=-1,p=(e=i(e,t)).length,l=p-1,f=t;null!=f&&++c<p;){var m=s(e[c]),g=n;if("__proto__"===m||"constructor"===m||"prototype"===m)return t;if(c!=l){var v=f[m];void 0===(g=u?u(v,m,f):void 0)&&(g=a(v)?v:o(e[c+1])?[]:{})}r(f,m,g),f=f[m]}return t}},403:function(t,e,n){var r=n(404),i=n(123),o=Object.prototype.hasOwnProperty;t.exports=function(t,e,n){var a=t[e];o.call(t,e)&&i(a,n)&&(void 0!==n||e in t)||r(t,e,n)}},404:function(t,e,n){var r=n(219);t.exports=function(t,e,n){"__proto__"==e&&r?r(t,e,{configurable:!0,enumerable:!0,value:n,writable:!0}):t[e]=n}},405:function(t,e,n){var r=n(212),i=n(406),o=n(408);t.exports=function(t){return r(t,o,i)}},406:function(t,e,n){var r=n(122),i=n(407),o=n(213),a=n(214),s=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)r(e,o(t)),t=i(t);return e}:a;t.exports=s},407:function(t,e,n){var r=n(217)(Object.getPrototypeOf,Object);t.exports=r},408:function(t,e,n){var r=n(215),i=n(409),o=n(125);t.exports=function(t){return o(t)?r(t,!0):i(t)}},409:function(t,e,n){var r=n(81),i=n(216),o=n(410),a=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=i(t),n=[];for(var s in t)("constructor"!=s||!e&&a.call(t,s))&&n.push(s);return n}},410:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var n in Object(t))e.push(n);return e}},411:function(t,e,n){},417:function(t,e,n){"use strict";n(411)},436:function(t,e,n){"use strict";n.r(e);n(60),n(3);var r=n(40),i=n.n(r),o=n(8),a=n(396),s={components:{NavigationIcon:o.n,ClockIcon:o.a,TagIcon:o.q},data:function(){return{paginationComponent:null}},computed:{pages:function(){return this.$pagination.pages}},created:function(){this.paginationComponent=this.getPaginationComponent()},methods:{getPaginationComponent:function(){return a.b},resolvePostDate:function(t){return i()(t).format(this.$themeConfig.dateFormat||"YYYY/MM/DD ")},resolvePostTags:function(t){return!t||Array.isArray(t)?t:[t]}}},u=(n(417),n(11)),c=Object(u.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"base-list-layout"}},[n("div",{staticClass:"ui-posts",attrs:{itemscope:"",itemtype:"http://schema.org/Blog"}},t._l(t.pages,(function(e){return n("article",{key:e.key,staticClass:"ui-post",attrs:{itemprop:"blogPost",itemscope:"",itemtype:"https://schema.org/BlogPosting"}},[n("meta",{attrs:{itemprop:"mainEntityOfPage",content:e.path}}),t._v(" "),n("header",{staticClass:"ui-post-title",attrs:{itemprop:"name headline"}},[n("NavLink",{attrs:{link:e.path}},[t._v(t._s(e.title))])],1),t._v(" "),n("div",{staticClass:"book-report-item"},[n("router-link",{attrs:{to:e.path}},[n("img",{staticClass:"br-item-cover",attrs:{src:e.frontmatter.cover,alt:e.title,srcset:""}})]),t._v(" "),n("div",{staticClass:"br-item-summary"},[n("p",[n("time",{attrs:{pubdate:"",itemprop:"datePublished",datetime:e.frontmatter.date}},[t._v("\n              "+t._s(t.resolvePostDate(e.frontmatter.date))+"\n            ")])]),t._v(" "),n("p",[t._v("My rating:   "),n("strong",[t._v(t._s(e.frontmatter.rating))]),t._v(" / 10")]),t._v(" "),n("p",{staticClass:"br-item-summary-text"},[t._v(t._s(e.frontmatter.summary||e.summary))])])],1)])})),0),t._v(" "),t.$pagination.length>1&&t.paginationComponent?n(t.paginationComponent,{tag:"component"}):t._e()],1)}),[],!1,null,"0ccc1f94",null);e.default=c.exports}}]);