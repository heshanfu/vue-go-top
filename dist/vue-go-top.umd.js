/*! @inotom/vue-go-top v1.0.1 inotom (http://www.serendip.ws/) | MIT */
!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("GoTop",[],e):"object"==typeof exports?exports.GoTop=e():t.GoTop=e()}(window,function(){return function(t){var e={};function n(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(o,r,function(e){return t[e]}.bind(null,r));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=3)}([function(t,e,n){var o=n(6);"string"==typeof o&&(o=[[t.i,o,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n(8)(o,r);o.locals&&(t.exports=o.locals)},function(t,e,n){"use strict";function o(t,e,n,o){var r,i=0;return"boolean"!=typeof e&&(o=n,n=e,e=void 0),function(){var a=this,s=Number(new Date)-i,u=arguments;function l(){i=Number(new Date),n.apply(a,u)}o&&!r&&l(),r&&clearTimeout(r),void 0===o&&s>t?l():!0!==e&&(r=setTimeout(o?function(){r=void 0}:l,void 0===o?t-s:t))}}var r=n(2);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"px";return"number"==typeof t?t+e:t},s=new(n.n(r).a),u={props:{size:{type:Number,default:70},right:{type:[String,Number],default:50},bottom:{type:[String,Number],default:100},bottomGap:{type:[String,Number],default:0},zIndex:{type:Number,default:1e3},fgColor:{type:String,default:"#ffffff"},bgColor:{type:String,default:"#ffc966"},radius:{type:[String,Number],default:"50%"},weight:{type:String,default:"normal"},rippleBg:{type:String,default:"rgba(255, 255, 255, .5)"},boundary:{type:Number,default:200},maxWidth:{type:Number,default:640},src:{type:String,default:null},alt:{type:String,default:""},hasOutline:{type:Boolean,default:!0}},data:function(){var t=this.hasOutline?{}:{outline:"0 none"};return{enabled:!1,isActive:!1,isRippleActive:!1,mainStyle:function(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},o=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),o.forEach(function(e){i(t,e,n[e])})}return t}({width:a(this.size),height:a(this.size),right:a(this.right),bottom:"calc(".concat(a(this.bottom)," - ").concat(a(this.bottomGap),")"),zIndex:this.zIndex,color:this.fgColor,backgroundColor:this.bgColor,backgroundImage:'url("'.concat(function(t,e){var n=e.replace(/^#/,"");return"bold"===t?"data:image/svg+xml;charset=utf8, %3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+n+"%27 stroke=%27none%27 points=%278.646,7.354 5,3.707 1.354,7.354 0.646,6.646 5,2.293 9.354,6.646%27 /%3E %3C/svg%3E":"data:image/svg+xml;charset=utf8,%3Csvg version=%271.1%27 xmlns=%27http://www.w3.org/2000/svg%27 width=%2710px%27 height=%2710px%27%3E %3Cpolygon fill=%27%23"+n+"%27 stroke=%27none%27 points=%278.589,6.945 5,3.22 1.413,6.945 1.052,6.598 5,2.499 8.948,6.598%27 /%3E %3C/svg%3E"}(this.weight,this.fgColor),'")'),backgroundSize:"".concat(this.size," auto"),opacity:this.opacity,borderRadius:a(this.radius)},t),rippleStyle:{top:a(-this.size),left:a(-this.size),width:"200%",height:"200%",backgroundColor:this.rippleBg}}},created:function(){this.handleResize(),window.addEventListener("resize",o(100,this.handleResize)),window.addEventListener("scroll",o(100,this.handleScroll))},beforeDestroy:function(){window.removeEventListener("resize",o(100,this.handleResize)),window.removeEventListener("scroll",o(100,this.handleScroll))},methods:{clickHandle:function(t){var e=this;if(!this.isRippleActive){var n=t.target;if(n){var o=n.getBoundingClientRect(),r=t.clientY-o.top,i=t.clientX-o.left;this.rippleStyle.top=a(r-this.size),this.rippleStyle.left=a(i-this.size)}this.isRippleActive=!0,setTimeout(function(){e.isRippleActive=!1},750)}s.to(0)},handleScroll:function(){this.isActive=window.pageYOffset>this.boundary},handleResize:function(){this.maxWidth>0?this.enabled=!window.matchMedia("(max-width: ".concat(this.maxWidth,"px)")).matches:this.enabled=!0},keyEnter:function(t){13===t.keyCode&&s.to(0)}}};n(5);var l=function(t,e,n,o,r,i,a,s){var u,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),o&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),a?(u=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(a)},l._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(l.functional){l._injectStyles=u;var c=l.render;l.render=function(t,e){return u.call(e),c(t,e)}}else{var f=l.beforeCreate;l.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:l}}(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("transition",{attrs:{name:"vue-go-top"}},[t.isActive&&t.enabled?n("div",{staticClass:"vue-go-top",style:t.mainStyle,attrs:{role:"button",tabindex:"1"},on:{click:function(e){return e.preventDefault(),t.clickHandle(e)},keydown:function(e){return e.preventDefault(),t.keyEnter(e)}}},[null!==t.src?n("div",{staticClass:"vue-go-top__icon"},[n("img",{staticClass:"vue-go-top__image",attrs:{src:t.src,alt:t.alt}}),t._v(" "),n("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}})]):n("div",{staticClass:"vue-go-top__content"},[n("div",{staticClass:"vue-go-top__ripple",style:t.rippleStyle,attrs:{"is-active":t.isRippleActive}}),t._v(" "),t._t("default")],2)]):t._e()])},[],!1,null,"cf611dfe",null);l.options.__file="GoTop.vue";e.a=l.exports},function(t,e,n){
/*! @preserve sweet-scroll v3.0.1 - tsuyoshiwada | MIT License */
t.exports=function(){"use strict";var t=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},e=!("undefined"==typeof window||!window.document||!window.document.createElement),n=!!e&&window.history&&"pushState"in window.history&&"file:"!==window.location.protocol,o=function(){var t=!1;if(!e)return t;try{window.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){t=!0}}))}catch(t){}return t}(),r=function(t){return"string"==typeof t},i=function(t){return"function"==typeof t},a=function(t){return Array.isArray(t)},s=function(t){return t instanceof Element},u=function(t,e){return t&&t.hasOwnProperty(e)},l=e?window.requestAnimationFrame.bind(window):null,c=e?window.cancelAnimationFrame.bind(window):null,f=Math.cos,p=Math.sin,d=Math.pow,h=Math.sqrt,v=Math.PI,g={linear:function(t){return t},easeInQuad:function(t,e,n,o,r){return o*(e/=r)*e+n},easeOutQuad:function(t,e,n,o,r){return-o*(e/=r)*(e-2)+n},easeInOutQuad:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e+n:-o/2*(--e*(e-2)-1)+n},easeInCubic:function(t,e,n,o,r){return o*(e/=r)*e*e+n},easeOutCubic:function(t,e,n,o,r){return o*((e=e/r-1)*e*e+1)+n},easeInOutCubic:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e+n:o/2*((e-=2)*e*e+2)+n},easeInQuart:function(t,e,n,o,r){return o*(e/=r)*e*e*e+n},easeOutQuart:function(t,e,n,o,r){return-o*((e=e/r-1)*e*e*e-1)+n},easeInOutQuart:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e*e+n:-o/2*((e-=2)*e*e*e-2)+n},easeInQuint:function(t,e,n,o,r){return o*(e/=r)*e*e*e*e+n},easeOutQuint:function(t,e,n,o,r){return o*((e=e/r-1)*e*e*e*e+1)+n},easeInOutQuint:function(t,e,n,o,r){return(e/=r/2)<1?o/2*e*e*e*e*e+n:o/2*((e-=2)*e*e*e*e+2)+n},easeInSine:function(t,e,n,o,r){return-o*f(e/r*(v/2))+o+n},easeOutSine:function(t,e,n,o,r){return o*p(e/r*(v/2))+n},easeInOutSine:function(t,e,n,o,r){return-o/2*(f(v*e/r)-1)+n},easeInExpo:function(t,e,n,o,r){return 0===e?n:o*d(2,10*(e/r-1))+n},easeOutExpo:function(t,e,n,o,r){return e===r?n+o:o*(1-d(2,-10*e/r))+n},easeInOutExpo:function(t,e,n,o,r){return 0===e?n:e===r?n+o:(e/=r/2)<1?o/2*d(2,10*(e-1))+n:o/2*(2-d(2,-10*--e))+n},easeInCirc:function(t,e,n,o,r){return-o*(h(1-(e/=r)*e)-1)+n},easeOutCirc:function(t,e,n,o,r){return o*h(1-(e=e/r-1)*e)+n},easeInOutCirc:function(t,e,n,o,r){return(e/=r/2)<1?-o/2*(h(1-e*e)-1)+n:o/2*(h(1-(e-=2)*e)+1)+n}},m={y:"scrollTop",x:"scrollLeft"},y={y:"pageYOffset",x:"pageXOffset"},b=function(t,e){return t[m[e]]},w=function(t,e,n){t[m[n]]=e},x=function(t,e){var n=t.getBoundingClientRect();if(n.width||n.height){var o={top:0,left:0},r=void 0;if(_(e))r=document.documentElement,o.top=window[y.y],o.left=window[y.x];else{var i=(r=e).getBoundingClientRect();o.top=-1*i.top+r[m.y],o.left=-1*i.left+r[m.x]}return{top:n.top+o.top-r.clientTop,left:n.left+o.left-r.clientLeft}}return n},C=function(t){return Array.prototype.slice.call(t?document.querySelectorAll(t):[])},S=function(t){return C(t).shift()||null},O=function(t,e){if(s(e))return t===e;for(var n=C(e),o=n.length;--o>=0&&n[o]!==t;);return o>-1},_=function(t){return t===document.documentElement||t===document.body},k=function(t,e){for(var n=m[e],o=s(t)?[t]:C(t),r=document.createElement("div"),i=0;i<o.length;i+=1){var a=o[i],u=null;if(a[n]>0)u=a;else{var l=window.outerWidth,c=window.innerWidth,f=l?l/c:1;r.style.width=a.clientWidth+1+"px",r.style.height=a.clientHeight+1+"px",a.appendChild(r),a[n]=Math.max(1,1.5/f),a[n]>0&&(u=a),a[n]=0,a.removeChild(r)}if(u)return u}return null},E=function(t){return Math.max(t.scrollHeight,t.clientHeight,t.offsetHeight)},j=function(t){return Math.max(t.scrollWidth,t.clientWidth,t.offsetWidth)},M=function(t){return{width:j(t),height:E(t)}},R=function(t){var e=_(t);return{viewport:{width:e?Math.min(window.innerWidth,document.documentElement.clientWidth):t.clientWidth,height:e?window.innerHeight:t.clientHeight},size:e?{width:Math.max(j(document.body),j(document.documentElement)),height:Math.max(E(document.body),E(document.documentElement))}:M(t)}},A=e?"onwheel"in document?"wheel":"mousewheel":"wheel",I=function(t,e,n,r,i){n.split(" ").forEach(function(n){t[e](function(t){return"wheel"===t?A:t}(n),r,!!o&&{passive:i})})},L=function(t,e,n,o){I(t,"addEventListener",e,n,o)},$=function(t,e,n,o){I(t,"removeEventListener",e,n,o)},z=/^(\+|-)=(\d+(?:\.\d+)?)$/,T=function(e,n){var o={top:0,left:0,relative:!1};if(u(e,"top")||u(e,"left"))o=t({},o,e);else if(a(e))if(e.length>1)o.top=e[0],o.left=e[1];else{if(1!==e.length)return null;o.top=n?e[0]:0,o.left=n?0:e[0]}else if(function(t){return!a(t)&&t-parseFloat(t)+1>=0}(e))n?o.top=e:o.left=e;else{if(!r(e))return null;var i=e.trim().match(z);if(!i)return null;var s=i[1],l=parseInt(i[2],10);"+"===s?(o.top=n?l:0,o.left=n?0:l):(o.top=n?-l:0,o.left=n?0:-l),o.relative=!0}return o},U={trigger:"[data-scroll]",header:"[data-scroll-header]",duration:1e3,easing:"easeOutQuint",offset:0,vertical:!0,horizontal:!1,cancellable:!0,updateURL:!1,preventDefault:!0,stopPropagation:!0,quickMode:!1,before:null,after:null,cancel:null,complete:null,step:null};return function(){function o(n,r){var i=this;this.ctx={$trigger:null,opts:null,progress:!1,pos:null,startPos:null,easing:null,start:0,id:0,cancel:!1,hash:null},this.loop=function(t){var e=i,n=e.$el,r=e.ctx;if(r.start||(r.start=t),r.progress&&n){var a=r.opts,s=r.pos,u=r.start,l=r.startPos,c=r.easing,f=a.duration,p={top:"y",left:"x"},d=t-u,h=Math.min(1,Math.max(d/f,0));Object.keys(s).forEach(function(t){var e=s[t],o=l[t],r=e-o;if(0!==r){var i=c(h,f*h,0,1,f);w(n,Math.round(o+r*i),p[t])}}),d<=f?(i.hook(a,"step",h),r.id=o.raf(i.loop)):i.stop(!0)}else i.stop()},this.handleClick=function(e){for(var n=i.opts,o=e.target;o&&o!==document;o=o.parentNode)if(O(o,n.trigger)){var r=JSON.parse(o.getAttribute("data-scroll-options")||"{}"),a=o.getAttribute("data-scroll"),s=a||o.getAttribute("href"),u=t({},n,r),l=u.preventDefault,c=u.stopPropagation,f=u.vertical,p=u.horizontal;l&&e.preventDefault(),c&&e.stopPropagation(),i.ctx.$trigger=o,p&&f?i.to(s,u):f?i.toTop(s,u):p&&i.toLeft(s,u)}},this.handleStop=function(t){var e=i.ctx,n=e.opts;n&&n.cancellable?(e.cancel=!0,i.stop()):t.preventDefault()};var a=t({},U,n||{}),s=a.vertical,u=a.horizontal,l=void 0===r?"body,html":r,c=null;e&&(s&&(c=k(l,"y")),!c&&u&&(c=k(l,"x"))),c&&(this.opts=a,this.$el=c,this.bind(!0,!1))}return o.create=function(t,e){return new o(t,e)},o.prototype.to=function(n,o){if(e){var i=this.$el,a=this.ctx,u=this.opts,l=a.$trigger,c=t({},u,o||{}),f=c.offset,p=c.vertical,d=c.horizontal,h=s(c.header)?c.header:S(c.header),v=r(n)&&/^#/.test(n)?n:null;if(a.opts=c,a.cancel=!1,a.hash=v,this.stop(),i){var g=T(f,p),m=T(n,p),y={top:0,left:0};if(m)if(m.relative){var w=b(i,p?"y":"x");y.top=p?w+m.top:m.top,y.left=p?m.left:w+m.left}else y=m;else if(r(n)&&"#"!==n){var C=S(n);if(!C)return;y=x(C,i)}g&&(y.top+=g.top,y.left+=g.left),h&&(y.top=Math.max(0,y.top-M(h).height));var O=R(i),_=O.viewport,k=O.size;y.top=p?Math.max(0,Math.min(k.height-_.height,y.top)):b(i,"y"),y.left=d?Math.max(0,Math.min(k.width-_.width,y.left)):b(i,"x"),!1!==this.hook(c,"before",y,l)?(a.pos=y,this.start(c),this.bind(!1,!0)):a.opts=null}}},o.prototype.toTop=function(e,n){this.to(e,t({},n||{},{vertical:!0,horizontal:!1}))},o.prototype.toLeft=function(e,n){this.to(e,t({},n||{},{vertical:!1,horizontal:!0}))},o.prototype.toElement=function(t,n){var o=this.$el;e&&o&&this.to(x(t,o),n||{})},o.prototype.stop=function(t){void 0===t&&(t=!1);var e=this.$el,n=this.ctx,r=n.pos;e&&n.progress&&(o.caf(n.id),n.progress=!1,n.start=0,n.id=0,t&&r&&(w(e,r.left,"x"),w(e,r.top,"y")),this.complete())},o.prototype.update=function(e){if(this.$el){var n=t({},this.opts,e);this.stop(),this.unbind(!0,!0),this.opts=n,this.bind(!0,!1)}},o.prototype.destroy=function(){this.$el&&(this.stop(),this.unbind(!0,!0),this.$el=null)},o.prototype.onBefore=function(t,e){return!0},o.prototype.onStep=function(t){},o.prototype.onAfter=function(t,e){},o.prototype.onCancel=function(){},o.prototype.onComplete=function(t){},o.prototype.start=function(t){var e=this.ctx;e.opts=t,e.progress=!0,e.easing=i(t.easing)?t.easing:g[t.easing];var n=this.$el,r=e.pos,a={top:b(n,"y"),left:b(n,"x")};if(t.quickMode){var s=R(n).viewport,u=s.width,l=s.height;Math.abs(a.top-r.top)>l&&(a.top=a.top>r.top?r.top+l:r.top-l),Math.abs(a.left-r.left)>u&&(a.left=a.left>r.left?r.left+u:r.left-u)}e.startPos=a,e.id=o.raf(this.loop)},o.prototype.complete=function(){var t=this.$el,o=this.ctx,r=o.hash,i=o.cancel,a=o.opts,s=o.pos,u=o.$trigger;if(t&&a){if(null!=r&&r!==window.location.hash){var l=a.updateURL;e&&n&&!1!==l&&window.history["replace"===l?"replaceState":"pushState"](null,"",r)}this.unbind(!1,!0),o.opts=null,o.$trigger=null,i?this.hook(a,"cancel"):this.hook(a,"after",s,u),this.hook(a,"complete",i)}},o.prototype.hook=function(t,e){for(var n=[],o=2;o<arguments.length;o++)n[o-2]=arguments[o];var r,a,s=t[e];return i(s)&&(r=s.apply(this,n.concat([this]))),a=this["on"+(e[0].toUpperCase()+e.slice(1))].apply(this,n),void 0!==r?r:a},o.prototype.bind=function(t,e){var n=this.$el,o=this.ctx.opts;n&&(t&&L(n,"click",this.handleClick,!1),e&&L(n,"wheel touchstart touchmove",this.handleStop,!o||o.cancellable))},o.prototype.unbind=function(t,e){var n=this.$el,o=this.ctx.opts;n&&(t&&$(n,"click",this.handleClick,!1),e&&$(n,"wheel touchstart touchmove",this.handleStop,!o||o.cancellable))},o.raf=l,o.caf=c,o}()}()},function(t,e,n){"use strict";n.r(e),function(t){n.d(e,"install",function(){return r});var o=n(1);function r(t){r.installed||(r.installed=!0,t.component("go-top",o.a))}var i={install:r},a=null;"undefined"!=typeof window?a=window.Vue:void 0!==t&&(a=t.Vue),a&&a.use(i),e.default=o.a}.call(this,n(4))},function(t,e){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";var o=n(0);n.n(o).a},function(t,e,n){(t.exports=n(7)(!1)).push([t.i,"\n.vue-go-top[data-v-cf611dfe]{overflow:hidden;position:fixed;cursor:pointer;background-repeat:no-repeat;background-position:50% 50%;background-size:70% auto;box-shadow:1px 1px 2px rgba(0,0,0,0.3);white-space:nowrap;text-indent:100%\n}\n.vue-go-top__content[data-v-cf611dfe]{position:relative;left:0;top:0;width:100%;height:100%\n}\n.vue-go-top__ripple[data-v-cf611dfe]{position:absolute;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);opacity:0;pointer-events:none\n}\n.vue-go-top__ripple[is-active][data-v-cf611dfe]{-webkit-animation:vue-go-top-ripple-animation-data-v-cf611dfe .75s ease-out;animation:vue-go-top-ripple-animation-data-v-cf611dfe .75s ease-out\n}\n.vue-go-top__icon[data-v-cf611dfe]{position:absolute;top:0;left:0;width:100%;height:100%\n}\n.vue-go-top__image[data-v-cf611dfe]{position:absolute;top:0;left:0;width:100%;height:100%;-o-object-fit:cover;object-fit:cover\n}\n.vue-go-top-enter-active[data-v-cf611dfe],.vue-go-top-leave-active[data-v-cf611dfe]{-webkit-transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, -webkit-transform .3s;transition:opacity .3s, transform .3s;transition:opacity .3s, transform .3s, -webkit-transform .3s\n}\n.vue-go-top-enter[data-v-cf611dfe],.vue-go-top-leave-to[data-v-cf611dfe]{opacity:0;-webkit-transform:translateY(50px);transform:translateY(50px)\n}\n@-webkit-keyframes vue-go-top-ripple-animation-data-v-cf611dfe{\nfrom{opacity:1\n}\nto{-webkit-transform:scale(2);transform:scale(2);opacity:0\n}\n}\n@keyframes vue-go-top-ripple-animation-data-v-cf611dfe{\nfrom{opacity:1\n}\nto{-webkit-transform:scale(2);transform:scale(2);opacity:0\n}\n}\n",""])},function(t,e){t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",o=t[3];if(!o)return n;if(e&&"function"==typeof btoa){var r=function(t){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(t))))+" */"}(o),i=o.sources.map(function(t){return"/*# sourceURL="+o.sourceRoot+t+" */"});return[n].concat(i).concat([r]).join("\n")}return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var o={},r=0;r<this.length;r++){var i=this[r][0];"number"==typeof i&&(o[i]=!0)}for(r=0;r<t.length;r++){var a=t[r];"number"==typeof a[0]&&o[a[0]]||(n&&!a[2]?a[2]=n:n&&(a[2]="("+a[2]+") and ("+n+")"),e.push(a))}},e}},function(t,e,n){var o={},r=function(t){var e;return function(){return void 0===e&&(e=t.apply(this,arguments)),e}}(function(){return window&&document&&document.all&&!window.atob}),i=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var o=function(t,e){return e?e.querySelector(t):document.querySelector(t)}.call(this,t,n);if(window.HTMLIFrameElement&&o instanceof window.HTMLIFrameElement)try{o=o.contentDocument.head}catch(t){o=null}e[t]=o}return e[t]}}(),a=null,s=0,u=[],l=n(9);function c(t,e){for(var n=0;n<t.length;n++){var r=t[n],i=o[r.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](r.parts[a]);for(;a<r.parts.length;a++)i.parts.push(g(r.parts[a],e))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(g(r.parts[a],e));o[r.id]={id:r.id,refs:1,parts:s}}}}function f(t,e){for(var n=[],o={},r=0;r<t.length;r++){var i=t[r],a=e.base?i[0]+e.base:i[0],s={css:i[1],media:i[2],sourceMap:i[3]};o[a]?o[a].parts.push(s):n.push(o[a]={id:a,parts:[s]})}return n}function p(t,e){var n=i(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=u[u.length-1];if("top"===t.insertAt)o?o.nextSibling?n.insertBefore(e,o.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),u.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=i(t.insertAt.before,n);n.insertBefore(e,r)}}function d(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=u.indexOf(t);e>=0&&u.splice(e,1)}function h(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var o=function(){0;return n.nc}();o&&(t.attrs.nonce=o)}return v(e,t.attrs),p(t,e),e}function v(t,e){Object.keys(e).forEach(function(n){t.setAttribute(n,e[n])})}function g(t,e){var n,o,r,i;if(e.transform&&t.css){if(!(i="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=i}if(e.singleton){var u=s++;n=a||(a=h(e)),o=y.bind(null,n,u,!1),r=y.bind(null,n,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",v(e,t.attrs),p(t,e),e}(e),o=function(t,e,n){var o=n.css,r=n.sourceMap,i=void 0===e.convertToAbsoluteUrls&&r;(e.convertToAbsoluteUrls||i)&&(o=l(o));r&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([o],{type:"text/css"}),s=t.href;t.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,n,e),r=function(){d(n),n.href&&URL.revokeObjectURL(n.href)}):(n=h(e),o=function(t,e){var n=e.css,o=e.media;o&&t.setAttribute("media",o);if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,n),r=function(){d(n)});return o(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;o(t=e)}else r()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=f(t,e);return c(n,e),function(t){for(var r=[],i=0;i<n.length;i++){var a=n[i];(s=o[a.id]).refs--,r.push(s)}t&&c(f(t,e),e);for(i=0;i<r.length;i++){var s;if(0===(s=r[i]).refs){for(var u=0;u<s.parts.length;u++)s.parts[u]();delete o[s.id]}}}};var m=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}();function y(t,e,n,o){var r=n?"":o.css;if(t.styleSheet)t.styleSheet.cssText=m(e,r);else{var i=document.createTextNode(r),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,o=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,e){var r,i=e.trim().replace(/^"(.*)"$/,function(t,e){return e}).replace(/^'(.*)'$/,function(t,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?t:(r=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:o+i.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}}])});
//# sourceMappingURL=vue-go-top.umd.js.map