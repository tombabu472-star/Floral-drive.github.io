"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[747],{5647:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(9611),i=n(8814);function a(e,t,n){return a=(0,i.Z)()?Reflect.construct:function(e,t,n){var i=[null];i.push.apply(i,t);var a=new(Function.bind.apply(e,i));return n&&(0,r.Z)(a,n.prototype),a},a.apply(null,arguments)}},7747:function(e,t,n){n.r(t),n.d(t,{FileHandle:function(){return h},FolderHandle:function(){return d}});var r=n(7762),i=n(5647),a=n(2982),o=n(5861),s=n(5671),u=n(3144),c=n(6420),f=n(608),l=n(7757),w=n(465).errors.DISALLOWED,p=function(){function e(t,n){(0,s.Z)(this,e),this.writer=t,this.fileEntry=n}return(0,u.Z)(e,[{key:"write",value:function(){var e=(0,o.Z)(l.mark((function e(t){var n=this;return l.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("object"!==typeof t){e.next=26;break}if("write"!==t.type){e.next=13;break}if(!(Number.isInteger(t.position)&&t.position>=0)){e.next=8;break}if(this.writer.seek(t.position),this.writer.position===t.position){e.next=8;break}return e.next=7,new Promise((function(e,r){n.writer.onwriteend=e,n.writer.onerror=r,n.writer.truncate(t.position)}));case 7:this.writer.seek(t.position);case 8:if("data"in t){e.next=10;break}throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. write requires a data argument","SyntaxError");case 10:t=t.data,e.next=26;break;case 13:if("seek"!==t.type){e.next=24;break}if(!(Number.isInteger(t.position)&&t.position>=0)){e.next=21;break}if(this.writer.seek(t.position),this.writer.position===t.position){e.next=18;break}throw new DOMException("seeking position failed","InvalidStateError");case 18:return e.abrupt("return");case 21:throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. seek requires a position argument","SyntaxError");case 22:e.next=26;break;case 24:if("truncate"!==t.type){e.next=26;break}return e.abrupt("return",new Promise((function(e){if(!(Number.isInteger(t.size)&&t.size>=0))throw new DOMException("Failed to execute 'write' on 'UnderlyingSinkBase': Invalid params passed. truncate requires a size argument","SyntaxError");n.writer.onwriteend=function(t){return e()},n.writer.truncate(t.size)})));case 26:return e.next=28,new Promise((function(e,r){n.writer.onwriteend=e,n.writer.onerror=r,n.writer.write(new Blob([t]))}));case 28:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}()},{key:"close",value:function(){return new Promise(this.fileEntry.file.bind(this.fileEntry))}}]),e}(),h=function(){function e(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,s.Z)(this,e),this.file=t,this.kind="file",this.writable=n,this.readable=!0}return(0,u.Z)(e,[{key:"name",get:function(){return this.file.name}},{key:"isSameEntry",value:function(e){return this.file.toURL()===e.file.toURL()}},{key:"getFile",value:function(){return new Promise(this.file.file.bind(this.file))}},{key:"createWritable",value:function(e){var t=this;if(!this.writable)throw(0,i.Z)(DOMException,(0,a.Z)(w));return new Promise((function(n,r){return t.file.createWriter((function(r){!1===e.keepExistingData?(r.onwriteend=function(e){return n(new p(r,t.file))},r.truncate(0)):n(new p(r,t.file))}),r)}))}}]),e}(),d=function(){function e(t){var n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];(0,s.Z)(this,e),this.dir=t,this.writable=n,this.readable=!0,this.kind="directory",this.name=t.name}return(0,u.Z)(e,[{key:"isSameEntry",value:function(e){return this.dir.fullPath===e.dir.fullPath}},{key:"entries",value:function(){var t=this;return(0,f.Z)(l.mark((function n(){var i,a,o,s,u;return l.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return i=t.dir.createReader(),n.next=3,(0,c.Z)(new Promise(i.readEntries.bind(i)));case 3:a=n.sent,o=(0,r.Z)(a),n.prev=5,o.s();case 7:if((s=o.n()).done){n.next=13;break}return u=s.value,n.next=11,[u.name,u.isFile?new h(u,t.writable):new e(u,t.writable)];case 11:n.next=7;break;case 13:n.next=18;break;case 15:n.prev=15,n.t0=n.catch(5),o.e(n.t0);case 18:return n.prev=18,o.f(),n.finish(18);case 21:case"end":return n.stop()}}),n,null,[[5,15,18,21]])})))()}},{key:"getDirectoryHandle",value:function(t,n){var r=this;return new Promise((function(i,a){r.dir.getDirectory(t,n,(function(t){i(new e(t))}),a)}))}},{key:"getFileHandle",value:function(e,t){var n=this;return new Promise((function(r,i){return n.dir.getFile(e,t,(function(e){return r(new h(e))}),i)}))}},{key:"removeEntry",value:function(){var t=(0,o.Z)(l.mark((function t(n,r){var i,a=this;return l.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.getDirectoryHandle(n,{create:!1}).catch((function(e){return"TypeMismatchError"===e.name?a.getFileHandle(n,{create:!1}):e}));case 2:if(!((i=t.sent)instanceof Error)){t.next=5;break}throw i;case 5:return t.abrupt("return",new Promise((function(t,n){i instanceof e?r.recursive?i.dir.removeRecursively((function(){return t()}),n):i.dir.remove((function(){return t()}),n):i.file&&i.file.remove((function(){return t()}),n)})));case 6:case"end":return t.stop()}}),t,this)})));return function(e,n){return t.apply(this,arguments)}}()}]),e}();t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return new Promise((function(t,n){return window.webkitRequestFileSystem(e._persistent,0,(function(e){return t(new d(e.root))}),n)}))}}}]);
//# sourceMappingURL=747.df2ec069.chunk.js.map