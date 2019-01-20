"use strict";function _defineProperty(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var _createClass=function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,i,n){return i&&t(e.prototype,i),n&&t(e,n),e}}(),TypeMoneky=function(){function t(e){var i=this;_classCallCheck(this,t);var n={debug:!1,box:"",list:[],fontSize:16,lineHeight:1.1,letterSpacing:0,blockIndex:0,rowIndex:0,conPercent:.8,color:"#fff",background:"#000",beforeCreate:function(t,e,i){t()}};return this.opts=Object.assign(n,e),e.debug&&e.box.addEventListener("click",function(t){i.next()}),this}return _createClass(t,[{key:"init",value:function(){var t=this.opts;this.opts=Object.assign(t,{width:t.box.offsetWidth,height:t.box.offsetHeight,conWidth:t.box.offsetWidth*this.opts.conPercent,total:t.list.reduce(function(t,e,i,n){return 0===i&&t.l.push([]),"rotate"===e.type?(t.r++,t.l.push(e),t.l.push([])):"text"===e.type&&(t.t++,t.l[t.l.length-1].push(e)),t},{r:0,t:0,l:[]}),index:0,blockIndex:0,rowIndex:0}),this.killIe=/msie [6|7|8|9]/i.test(navigator.userAgent),this.prefix=this.getPrefix(),this.$box=t.box,this.$blocks=[],this.start()}},{key:"start",value:function(){var t=this.h("div",{"class":"tm-wrap"}),e=this.h("div",{"class":"tm-inner",style:{"font-size":this.opts.fontSize+"px",lineHeight:this.opts.lineHeight,background:this.opts.background,color:this.opts.color}});t.appendChild(e),this.$box.appendChild(t),this.$wrap=t,this.$inner=e}},{key:"createRow",value:function(){var t=this,e=this.opts,i=e.list,n=e.total,r=e.rowIndex,o=e.blockIndex,s=(e.index,i[e.index]),l=0;"rotate"===s.type?(e.blockIndex++,s=e.list[++e.index],l=o+3,e.rowIndex=1,r=0,e.index++,o++):"text"===s.type&&(e.rowIndex++,e.index++,l=e.blockIndex+1);var a=void 0;if(0===r){var c=n.l[l],u="",h={};u=c&&"rotate"===c.type&&"rb"===c.value?"right bottom":"left bottom",h=_defineProperty({},this.prefix+"transform-origin",u),a=this.h("div",{"class":"tm-block tm-block-"+(o+1),style:h}),a.opts={},c&&"rotate"===c.type&&(a.opts.rotate=c.value)}else a=this.$blocks[o];var p={};s.color&&(p.color=s.color);var f=this.h("div",{"class":"tm-row tm-row-"+(r+1),style:p}),d=document.createDocumentFragment();s.value.split("").forEach(function(e,i){var n=t.createCol(e,i,r);d.appendChild(n)});var b=s.value.length*e.fontSize,v=e.fontSize*e.lineHeight,y=e.conWidth/b,x=b*y,g=v*y,k=_defineProperty({left:(e.width-x)/2+"px",top:(e.height-v*(r+1))/2+(g-v*(r+1))/2+"px"},this.prefix+"transform","scale("+y+")");this.setStyle(a,k),this.$blocks.slice(0,e.blockIndex).forEach(function(e){var i=void 0,n=e.opts;"lb"===n.rotate&&(i="-90"),"rb"===n.rotate&&(i="90");var o=_defineProperty({},t.prefix+"transform","scale("+y+") rotate("+i+"deg)");r>0&&(o.top=Number(n.top.replace("px",""))-g*r+"px"),t.setStyle(e,o)}),f.appendChild(d),a.appendChild(f),Object.assign(a.opts,{scale:y,top:k.top,left:k.left}),0===r&&(a.opts.firstTop=k.top,this.$inner.appendChild(a),this.$blocks.push(a))}},{key:"createCol",value:function(t,e,i){return this.h("span",{"class":"tm-col tm-col-"+(e+1)},t)}},{key:"next",value:function(){var t=this.opts;if(t.index===t.list.length)this.isEnd=!0;else{var e=void 0;e=0===t.index?0:t.index,this.opts.beforeCreate(this._next.bind(this),e,this.opts)}}},{key:"_next",value:function(){this.createRow()}},{key:"h",value:function(t,e,i){return this._createElement(t,e,i)}},{key:"_createElement",value:function(t,e,i){var n=this,r=document.createElement(t);return Object.keys(e).forEach(function(t){"style"===t?r.setAttribute(t,n.getStyleStr(e[t])):r.setAttribute(t,e[t])}),this.isType(i,"String")&&(r.innerHTML=i),r}},{key:"getStyleStr",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).map(function(i){return t.str2label(i)+":"+e[i]+";"}).join("")}},{key:"setStyle",value:function(t,e){var i=(t.getAttribute("style")||"").split(";").reduce(function(t,e,i,n){var r=e.split(":");return r.toString()&&(t[r[0].trim()]=r[1].trim()),t},{}),n=Object.assign(i,e);return t.setAttribute("style",this.getStyleStr(n))}},{key:"isType",value:function(t,e){return Object.prototype.toString.call(t)==="[object "+e+"]"}},{key:"str2label",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"-",i="";if(t[0].match(/[A-Z]+/))i=t.toLowerCase();else{var n=t.split(/[A-Z]+/);n.forEach(function(r,o){if(o>0){for(var s=0,l=o;l>0;l--)s+=n[l-1].length;i+=e+(n[o]=t.substr(s,1)+r).toLowerCase()}else i+=n[o].toLowerCase()})}return i}},{key:"getPrefix",value:function(){return function(){var t=window.getComputedStyle(document.documentElement,""),e=(Array.prototype.slice.call(t).join("").match(/-(moz|webkit|ms)-/)||""===t.OLink&&["","o"])[1],i="WebKit|Moz|MS|O".match(new RegExp("("+e+")","i"))[1];return{dom:i,lowercase:e,css:"-"+e+"-",js:e[0].toUpperCase()+e.substr(1)}.css}()}}]),t}();