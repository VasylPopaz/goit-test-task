"use strict";(self.webpackChunkgoit_test_task=self.webpackChunkgoit_test_task||[]).push([[535],{8535:function(e,t,n){n.r(t),n.d(t,{default:function(){return _}});var r=n(2791),s=n(4420),i=n(7689),a=n(2564),l=n(7081),o=n(6221),c=n(4915),u=n(5926),f="Tweets_tweets__2WkJR",h="Tweets_wrapper__p5HEc",g="Tweets_title__1om6S",m="Tweets_errorTitle__ximR7",w=n(184),_=function(){var e,t,n=(0,c.U)(),_=n.isLoading,d=n.users,p=n.filteredUsers,x=n.page,j=n.filter,v=n.error,k=(0,s.I0)(),y=(0,i.TH)(),N=(0,r.useRef)(null!==(e=null===(t=y.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/"),T=(0,r.useRef)(x),R=x<5&&p.length;(0,r.useEffect)((function(){d.length<3&&k((0,o.Rf)({params:{page:1,limit:3}})).unwrap().then((function(){})).catch((function(){return a.Am.error("Sorry, something went wrong. Please try again.")}))}),[k,d.length]),(0,r.useEffect)((function(){if(T.current!==x){var e={params:{page:x,limit:3}};k((0,o.Rf)(e)).unwrap().then((function(){T.current=x})).catch((function(){return a.Am.error("Sorry, something went wrong. Please try again.")}))}}),[k,x]);return(0,w.jsxs)("section",{className:f,children:[_?(0,w.jsx)(l.aN,{}):null,(0,w.jsx)("div",{className:"container",children:v?(0,w.jsx)("h2",{className:m,children:"Sorry, something went wrong. Please try again."}):(0,w.jsxs)(w.Fragment,{children:[(0,w.jsxs)("div",{className:h,children:[(0,w.jsx)(l.II,{to:N.current}),(0,w.jsx)(l.wn,{})]}),p.length||_?null:(0,w.jsxs)("h2",{className:g,children:['No users with status "',(0,u.B)(j),'". Try choosing another filter value.']}),(0,w.jsx)(l.to,{}),R?(0,w.jsx)(l.CF,{onClick:function(){k((0,o.uO)())}}):null]})})]})}}}]);
//# sourceMappingURL=535.db1e3841.chunk.js.map