"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[798],{232:function(n,e,t){t.d(e,{Ny:function(){return p},Gc:function(){return x},Wg:function(){return u},rs:function(){return l}});var r=t(861),a=t(757),c=t.n(a),s=t(243),o="da36feb63eaaa09d19d7bec78ef1c818",i="https://api.themoviedb.org/3/",p=function(){var n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"trending/movie/day?api_key=").concat(o));case 3:return e=n.sent,n.abrupt("return",e);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"movie/").concat(e,"?api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,r.Z)(c().mark((function n(e,t){var r;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"movie/").concat(e,"/").concat(t,"?api_key=").concat(o));case 3:return r=n.sent,n.abrupt("return",r);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e,t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(c().mark((function n(e){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,s.Z.get("".concat(i,"search/movie?query=").concat(e,"&api_key=").concat(o));case 3:return t=n.sent,n.abrupt("return",t);case 7:n.prev=7,n.t0=n.catch(0),alert(n.t0.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(e){return n.apply(this,arguments)}}()},798:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,c,s,o,i,p,u=t(861),x=t(439),l=t(757),d=t.n(l),f=t(791),h=t(689),v=t(232),g=t(168),m=t(444),w=m.ZP.div(r||(r=(0,g.Z)(["\n  display: flex;\n  justify-content: center;\n\n  gap: 20px;\n\n  margin-top: 20px;\n"]))),b=m.ZP.p(a||(a=(0,g.Z)(["\n  font-size: 40px;\n  font-weight: 700;\n\n  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"]))),Z=m.ZP.img(c||(c=(0,g.Z)(["\n  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n"]))),j=m.ZP.p(s||(s=(0,g.Z)(["\n  font-size: 25px;\n  font-weight: 500;\n\n  text-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"]))),k=m.ZP.div(o||(o=(0,g.Z)(["\n  width: 1160px;\n"]))),y=t(184),_=function(n){var e=n.state,t=e.genres.flatMap((function(n){return n.name}));return(0,y.jsxs)(w,{children:[(0,y.jsx)(Z,{src:e.poster_path?"https://image.tmdb.org/t/p/w500/".concat(e.poster_path):"https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700",width:250,alt:"poster"}),(0,y.jsxs)(k,{children:[(0,y.jsxs)(b,{children:[e.title," (",e.release_date,")"]}),(0,y.jsxs)("p",{children:["User scores: ",(10*e.vote_average).toFixed(0),"%"]}),(0,y.jsx)(j,{children:"OVERVIEW"}),(0,y.jsx)("span",{children:e.overview}),(0,y.jsx)(j,{children:"GENRES"}),(0,y.jsx)("span",{children:t.join(" ")})]})]})},E=t(87),P=m.ZP.div(i||(i=(0,g.Z)(["\n  display: flex;\n  margin-left: 40px;\n"]))),C=(0,m.ZP)(E.OL)(p||(p=(0,g.Z)(["\n  display: block;\n  width: 70px;\n\n  padding: 10px;\n  margin-top: 10px;\n  margin-right: 10px;\n  border: 1px solid black;\n  border-radius: 4px;\n\n  text-decoration: none;\n  text-align: center;\n  color: black;\n\n  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,\n    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,\n    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;\n  :hover {\n    background-color: orangered;\n    color: white;\n    border-color: white;\n  }\n"]))),O=function(){var n,e,t=(0,h.UO)().movieId,r=(0,f.useState)([]),a=(0,x.Z)(r,2),c=a[0],s=a[1],o=null!==(n=null===(e=(0,h.TH)().state)||void 0===e?void 0:e.from)&&void 0!==n?n:"/",i=(0,f.useRef)(o);return(0,f.useEffect)((function(){if(t){var n=function(){var n=(0,u.Z)(d().mark((function n(){var e;return d().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,(0,v.Wg)(t);case 2:e=n.sent,s(e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();n()}}),[t]),(0,y.jsxs)(y.Fragment,{children:[t&&(0,y.jsxs)(y.Fragment,{children:[0!==c.length&&(0,y.jsx)(_,{state:c}),(0,y.jsxs)(P,{children:[(0,y.jsx)(C,{to:"cast",children:"CAST"}),(0,y.jsx)(C,{to:"reviews",children:"REVIEWS"}),(0,y.jsx)(C,{to:i.current,children:"GO BACK"})]})]}),(0,y.jsx)(h.j3,{})]})}}}]);
//# sourceMappingURL=798.99ba94be.chunk.js.map