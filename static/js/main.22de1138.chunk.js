(this.webpackJsonphonnest_control=this.webpackJsonphonnest_control||[]).push([[0],[,,,,,function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t){},,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(10),a(1)),s=(a(11),a(12),a(4)),i=a.n(s),u=new(a(14).SHA256),d=function(e){return new Uint8Array(e.match(/.{1,2}/g).map((function(e){return parseInt(e,16)})))},m=function(e,t){var a=Math.floor(e.rand_roll_num/32),n=e.rand_roll_num%32;if(console.log(a),console.log(n),0==n){var r="".concat(e.signature,",").concat(a);console.log(r),console.log(u.hex(r)),e.signature_hash=d(u.hex(r))}var o=e.signature_hash[n]%t;return console.log("rand: ".concat(o)),e.rand_roll_num++,o},f=function(e,t){for(var a=t.length-1;a>0;--a){var n=m(e,a),r=t[a];t[a]=t[n],t[n]=r}};var v=function(){var e=Object(n.useState)(""),t=Object(c.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)("bf8c2cb74701e8a5e7eeab2fd95478c957f0fb0d5fd3795d5219b0182f46fb2d"),s=Object(c.a)(l,2),u=s[0],v=s[1],g=Object(n.useState)(""),h=Object(c.a)(g,2),p=h[0],b=h[1],E=d(u),w=null;try{w=i.a.sign.open(d(p),E)}catch(j){console.log("sign.open error: ".concat(j))}var y=w?new TextDecoder("utf-8").decode(w):"",_=""!=a&&y===a,x="";if(_&&""!=p){var k={signature:p,rand_roll_num:0};x=JSON.stringify(function(e,t){for(var a=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],n=0;n<4;n++)a[n]=1;for(var r=4;r<7;r++)a[r]=2;var o=[12,13,14];f(e,o),a[7]=o[0];var l=m(e,100)<1;return f(e,a),{field:a,jack:l}}(k))}return r.a.createElement("div",{class:"container"},r.a.createElement("div",{class:"panel panel-default"},r.a.createElement("div",{class:"panel-heading"},r.a.createElement("h1",null,r.a.createElement("a",{href:"https://digger888.github.io/",target:"_blank"},"Digger888")," result verify"),r.a.createElement("h2",null,'paste "input" and "signature" from "nulldivision - resolve" transaction and check result')),r.a.createElement("div",{class:"panel-body"},r.a.createElement("div",{class:"row"},r.a.createElement("label",{class:"row-head"},"Input (bet, tile1, tile2, ... tapos, taposn) : "),r.a.createElement("input",{type:"text",name:"input",value:a,class:"form-de form-control",onChange:function(e){return o(e.target.value)}})),r.a.createElement("div",{class:"row"},r.a.createElement("label",{class:"row-head"},"Signature : "),r.a.createElement("input",{type:"text",name:"signature",value:p,onChange:function(e){return b(e.target.value)},class:"form-de form-control"})),r.a.createElement("div",{class:"row"},r.a.createElement("label",{class:"row-head"},"Public Key* : "),r.a.createElement("input",{type:"text",name:"public_key",class:"form-de form-control",readonly:"true",value:u,onChange:function(e){return v(e.target.value)}})),r.a.createElement("div",{class:"row"},r.a.createElement("label",{class:"row-head"},"Verify : "),r.a.createElement("input",{readonly:"true",type:"text",name:"Verify_Result",value:_,class:"form-de form-control"})),r.a.createElement("div",{class:"row"},r.a.createElement("label",{class:"row-head"},"Result : "),r.a.createElement("input",{readonly:"true",type:"text",name:"Result",value:x,class:"form-de form-control"})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[5,1,2]]]);
//# sourceMappingURL=main.22de1138.chunk.js.map