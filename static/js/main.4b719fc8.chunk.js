(this["webpackJsonprobofriends-app"]=this["webpackJsonprobofriends-app"]||[]).push([[0],{14:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(3),c=n.n(o),l=(n(14),n(2)),i=n(4),s=n.n(i),u=function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{src:"https://robohash.org/".concat(a,"?200x200"),alt:"Robots"}),r.a.createElement("div",null,r.a.createElement("h2",null,t),r.a.createElement("p",null," ",n)))},m=function(e){var t=e.robots;return r.a.createElement("div",null,t.map((function(e){return r.a.createElement(u,{key:e.id,id:e.id,name:e.name,email:e.email})})))},h=function(e){var t=e.handleChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t}))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",border:"1px solid black",height:"800px"}},e.children)},b=n(5),p=n(6),f=n(8),E=n(7),v=function(e){Object(f.a)(n,e);var t=Object(E.a)(n);function n(e){var a;return Object(b.a)(this,n),(a=t.call(this,e)).state={hasError:!1},a}return Object(p.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oooops! This is not good"):this.props.children}}]),n}(a.Component),g=(n(35),function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],o=t[1],c=Object(a.useState)(""),i=Object(l.a)(c,2),u=i[0],b=i[1];Object(a.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return o(e)}))}),[]);var p=n.filter((function(e){return e.name.toLowerCase().includes(u.toLowerCase())}));return n.length?r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"RoboFriends"),r.a.createElement(h,{handleChange:function(e){return b(e.target.value)}}),r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(m,{robots:p})))):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",null,"Loading"),r.a.createElement(s.a,{name:"ball-pulse-sync",color:"#0ccac4"}))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(36);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(37)}},[[9,1,2]]]);
//# sourceMappingURL=main.4b719fc8.chunk.js.map