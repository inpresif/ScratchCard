(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{100:function(t,n,e){},216:function(t,n,e){"use strict";var i=e(100);e.n(i).a},264:function(t,n,e){"use strict";e.r(n);var i={mounted:function(){Promise.all([e.e(1),e.e(2),e.e(3)]).then(e.bind(null,259)).then((function(){var t=document.getElementById("js--sc--container"),n=document.querySelector(".sc__infos"),e=new ScratchCard("#js--sc--container",{scratchType:SCRATCH_TYPE.BRUSH,containerWidth:t.offsetWidth,containerHeight:300,brushSrc:"../images/brush.png",imageForwardSrc:"../images/scratchcard.jpg",imageBackgroundSrc:"../images/result.png",htmlBackground:"",clearZoneRadius:0,nPoints:30,pointSize:4,callback:function(){alert("Now the window will reload !"),window.location.reload()}});e.init().then((function(){e.canvas.addEventListener("scratch.move",(function(){var t=e.getPercent().toFixed(0);n.innerHTML=t+"%"}))})).catch((function(t){alert(t.message)}))}))}},c=(e(216),e(0)),s=Object(c.a)(i,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("div",{staticClass:"sc__wrapper"},[n("div",{staticClass:"sc__container",attrs:{id:"js--sc--container"}}),this._v(" "),n("div",{staticClass:"sc__infos"},[n("p",[this._v("0%")])])]),this._v(" "),n("br"),n("br")])}],!1,null,null,null);n.default=s.exports}}]);