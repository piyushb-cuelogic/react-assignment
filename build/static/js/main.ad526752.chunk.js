(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{113:function(e,t,a){e.exports={SideDrawer:"SideDrawer__SideDrawer__21TuB",Open:"SideDrawer__Open__1pVYR",Close:"SideDrawer__Close__3Yv1l",Logo:"SideDrawer__Logo__3TkPv"}},147:function(e,t,a){"use strict";var n=a(96),r=a(100),o=a.n(r),c=a(44),s=function(e,t){return{type:c.d,idToken:e,userId:t}},l=function(){return localStorage.removeItem("token"),localStorage.removeItem("expirationDate"),localStorage.removeItem("fullName"),localStorage.removeItem("userType"),{type:c.b}},i=function(e){return function(t){setTimeout(function(){t(l())},1e3*e)}},u=function(e,t){return function(a){a({type:c.c});var r=Object(n.a)({},e,{returnSecureToken:!0}),l="https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=AIzaSyATw1aKM8v2ugfIgvOWP9_K5sg5mwJfvlM";t||(l="https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=AIzaSyATw1aKM8v2ugfIgvOWP9_K5sg5mwJfvlM"),o.a.post(l,r).then(function(e){var n=new Date((new Date).getTime()+1e3*e.data.expiresIn);localStorage.setItem("token",e.data.idToken),localStorage.setItem("expirationDate",n),localStorage.setItem("userId",e.data.localId),a(s(e.data.idToken,e.data.localId)),a(i(e.data.expiresIn));var c="https://react-demo-c4f33.firebaseio.com/users/"+e.data.localId+".json";if(t){r.userType="USER";var l={fullName:r.fullName,userType:"USER",user_email:r.email,created_on:(new Date).getTime()/1e3,updated_on:(new Date).getTime()/1e3};return o.a.put(c,l)}return o.a.get(c)}).then(function(e){localStorage.setItem("fullName",e.data.fullName),localStorage.setItem("userType",e.data.userType)}).catch(function(e){var t;a((t=e.response.data.error,{type:c.a,error:t}))})}},p=function(e){return{type:c.e,path:e}},m=function(){return function(e){var t=localStorage.getItem("token");if(t){var a=new Date(localStorage.getItem("expirationDate"));if(a<=new Date)e(l());else{var n=localStorage.getItem("userId");e(s(t,n)),e(i((a.getTime()-(new Date).getTime())/1e3))}}else e(l())}};a.d(t,"a",function(){return u}),a.d(t,"c",function(){return l}),a.d(t,"d",function(){return p}),a.d(t,"b",function(){return m})},204:function(e,t,a){e.exports={Toolbar:"Toolbar__Toolbar__2JJW-",Logo:"Toolbar__Logo__1efBD",DesktopOnly:"Toolbar__DesktopOnly__WADUd"}},205:function(e,t,a){e.exports={NavigationItem:"NavigationItem__NavigationItem__23bcu",active:"NavigationItem__active__2zJdO"}},358:function(e,t,a){e.exports={Content:"Layout__Content__3pLYC"}},359:function(e,t,a){e.exports={NavigationItems:"NavigationItems__NavigationItems___yd_d"}},361:function(e,t,a){e.exports={DrawerToggle:"DrawerToggle__DrawerToggle__26to0"}},362:function(e,t,a){e.exports={Backdrop:"Backdrop__Backdrop__efy1y"}},364:function(e,t,a){e.exports={Modal:"Modal__Modal__32_-a"}},423:function(e,t,a){e.exports=a(693)},432:function(e,t,a){},44:function(e,t,a){"use strict";a.d(t,"c",function(){return n}),a.d(t,"d",function(){return r}),a.d(t,"a",function(){return o}),a.d(t,"b",function(){return c}),a.d(t,"e",function(){return s});var n="AUTH_START",r="AUTH_SUCCESS",o="AUTH_FAIL",c="AUTH_LOGOUT",s="SET_AUTH_REDIRECT_PATH"},58:function(e,t,a){"use strict";a.d(t,"b",function(){return r}),a.d(t,"a",function(){return o});var n=a(96),r=function(e,t){return Object(n.a)({},e,t)},o=function(e){return e.replace(/<{1}[^<>]{1,}>{1}/g," ")}},689:function(e,t,a){var n={"./ar":310,"./ar.js":310,"./az":311,"./az.js":311,"./be":312,"./be.js":312,"./bg":313,"./bg.js":313,"./bs":314,"./bs.js":314,"./ca":315,"./ca.js":315,"./cs":316,"./cs.js":316,"./cy":317,"./cy.js":317,"./da":318,"./da.js":318,"./de":319,"./de.js":319,"./el":320,"./el.js":320,"./en":197,"./en.js":197,"./es":321,"./es.js":321,"./et":322,"./et.js":322,"./eu":323,"./eu.js":323,"./fa":324,"./fa.js":324,"./fi":325,"./fi.js":325,"./fr":326,"./fr.js":326,"./hr":327,"./hr.js":327,"./hu":328,"./hu.js":328,"./id":329,"./id.js":329,"./it":330,"./it.js":330,"./ja":331,"./ja.js":331,"./ka":332,"./ka.js":332,"./ko":333,"./ko.js":333,"./lt":334,"./lt.js":334,"./lv":335,"./lv.js":335,"./mk":336,"./mk.js":336,"./mn":337,"./mn.js":337,"./ms":338,"./ms.js":338,"./nb_NO":339,"./nb_NO.js":339,"./nl":340,"./nl.js":340,"./pl":341,"./pl.js":341,"./pt":342,"./pt.js":342,"./pt_BR":343,"./pt_BR.js":343,"./ro":344,"./ro.js":344,"./ru":345,"./ru.js":345,"./sl":346,"./sl.js":346,"./sq":347,"./sq.js":347,"./sr":348,"./sr.js":348,"./sv":349,"./sv.js":349,"./tr":350,"./tr.js":350,"./ua":351,"./ua.js":351,"./uk":352,"./uk.js":352,"./vi":353,"./vi.js":353,"./zh":354,"./zh.js":354,"./zh_TW":355,"./zh_TW.js":355};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=689},692:function(e,t,a){e.exports={App:"App__App__1o-Fp","App-logo":"App__App-logo__3JCPt","App-logo-spin":"App__App-logo-spin__RvI1J","App-header":"App__App-header__3iH8L","App-link":"App__App-link__13fTZ"}},693:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(42),c=a.n(o),s=a(32),l=a(68),i=a(84),u=a(357),p=(a(432),a(18)),m=a(19),d=a(21),h=a(20),f=a(22),g=a(73),E=function(e){return function(t){function a(){var e,t;Object(p.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(r)))).state={component:null},t}return Object(f.a)(a,t),Object(m.a)(a,[{key:"componentDidMount",value:function(){var t=this;e().then(function(e){t.setState({component:e.default})})}},{key:"render",value:function(){var e=this.state.component;return e?r.a.createElement(e,this.props):null}}]),a}(n.Component)},v=a(358),b=a.n(v),j=a(204),y=a.n(j),O=a(359),C=a.n(O),w=a(205),k=a.n(w),A=function(e){return r.a.createElement("li",{className:k.a.NavigationItem},r.a.createElement(s.b,{to:e.link,exact:e.exact,activeClassName:k.a.active},e.children))},_=function(e){var t="ADMIN"===localStorage.getItem("userType");return r.a.createElement("ul",{className:C.a.NavigationItems},r.a.createElement(A,{link:"/",exact:!0},"Home"),r.a.createElement(A,{link:"/charts"},"Charts"),r.a.createElement(A,{link:"/about-us"},"About Us"),r.a.createElement(A,{link:"/contact-us"},"Contact Us"),t?r.a.createElement(A,{link:"/users"},"Users"):null,e.isAuthenticated?r.a.createElement(A,{link:"/logout"},"Logout"):r.a.createElement(A,{link:"/auth"},"Authenticate"))},S=a(361),D=a.n(S),P=function(e){return r.a.createElement("div",{className:D.a.DrawerToggle,onClick:e.clicked},r.a.createElement("div",null),r.a.createElement("div",null),r.a.createElement("div",null))},x=function(e){return r.a.createElement("header",{className:y.a.Toolbar},r.a.createElement(P,{clicked:e.drawerToggleClicked}),r.a.createElement("nav",{className:y.a.DesktopOnly},r.a.createElement(_,{isAuthenticated:e.isAuth})))},I=a(113),T=a.n(I),N=a(362),L=a.n(N),M=function(e){return e.show?r.a.createElement("div",{className:L.a.Backdrop,onClick:e.clicked}):null},R=function(e){var t=[T.a.SideDrawer,T.a.Close];return e.open&&(t=[T.a.SideDrawer,T.a.Open]),r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{show:e.open,clicked:e.closed}),r.a.createElement("div",{className:t.join(" "),onClick:e.closed},r.a.createElement("nav",null,r.a.createElement(_,{isAuthenticated:e.isAuth}))))},B=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={showSideDrawer:!1},a.sideDrawerClosedHandler=function(){a.setState({showSideDrawer:!1})},a.sideDrawerToggleHandler=function(){a.setState(function(e){return{showSideDrawer:!e.showSideDrawer}})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,{isAuth:this.props.isAuthenticated,drawerToggleClicked:this.sideDrawerToggleHandler}),r.a.createElement(R,{isAuth:this.props.isAuthenticated,open:this.state.showSideDrawer,closed:this.sideDrawerClosedHandler}),r.a.createElement("main",{className:b.a.Content},this.props.children))}}]),t}(n.Component),F=Object(l.b)(function(e){return{isAuthenticated:null!==e.auth.token}})(B),U=a(147),H=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onLogout()}},{key:"render",value:function(){return r.a.createElement(g.a,{to:"/"})}}]),t}(n.Component),Y=Object(l.b)(null,function(e){return{onLogout:function(){return e(U.c())}}})(H),G=a(100),z=a.n(G).a.create({baseURL:"https://react-demo-c4f33.firebaseio.com/"}),q=a(363),W=a.n(q),J=a(52),K=a.n(J),V=a(694),Z=a(703),$=a(704),Q=a(713),X=a(702),ee=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={hasError:!1,errorMessage:""},a.componentDidCatch=function(e,t){a.setState({hasError:!0,errorMessage:e})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,this.state.errorMessage):this.props.children}}]),t}(n.Component),te=a(364),ae=a.n(te),ne=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return e.show!==this.props.show||e.children!==this.props.children}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(M,{show:this.props.show,clicked:this.props.modalClosed}),r.a.createElement("div",{className:ae.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(n.Component),re=function(e,t){return function(a){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={error:null},t.errorConfirmedHandler=function(){t.setState({error:null})},t}return Object(f.a)(n,a),Object(m.a)(n,[{key:"componentWillMount",value:function(){var e=this;this.reqInterceptor=t.interceptors.request.use(function(t){return e.setState({error:null}),t}),this.resInterceptor=t.interceptors.response.use(function(e){return e},function(t){e.setState({error:t})})}},{key:"componentWillUnmount",value:function(){t.interceptors.request.eject(this.reqInterceptor),t.interceptors.response.eject(this.resInterceptor)}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(ne,{show:this.state.error,modalClosed:this.errorConfirmedHandler},this.state.error?this.state.error.message:null),r.a.createElement(e,this.props))}}]),n}(n.Component)},oe=a(710),ce=a(85),se=a(708),le=a(714),ie=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},a.closeConfigShow=function(e,t){return function(){a.setState({closeOnEscape:e,closeOnDimmerClick:t,open:!0})}},a.close=function(){return a.setState({open:!1})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(se.a,{open:this.state.open,trigger:r.a.createElement("a",{href:"#",onClick:this.closeConfigShow(!1,!0)},r.a.createElement(ce.a,{name:"remove circle",link:!0,size:"large"})),basic:!0,size:"small"},r.a.createElement(le.a,{icon:"archive",content:this.props.modalTitle}),r.a.createElement(se.a.Content,null,r.a.createElement("p",null,this.props.confirmationMessage)),r.a.createElement(se.a.Actions,null,r.a.createElement(V.a,{basic:!0,color:"red",inverted:!0,onClick:this.close},r.a.createElement(ce.a,{name:"remove"})," No"),r.a.createElement(V.a,{color:"green",inverted:!0,onClick:this.props.confirmationClick},r.a.createElement(ce.a,{name:"checkmark"})," Yes")))}}]),t}(n.Component),ue=a(103),pe=a.n(ue),me=function(e){return r.a.createElement(oe.a.Group,null,e.posts.map(function(t){var a=pe()(pe.a.utc(new Date(1e3*t.updated_on)),"YYYYMMDD").fromNow();return r.a.createElement(oe.a,{key:t.Id},r.a.createElement(oe.a.Content,null,r.a.createElement(s.b,{style:{display:"inline-block"},to:"/posts/"+t.Id},r.a.createElement(oe.a.Header,null,t.Name," \xa0")),r.a.createElement(oe.a.Meta,null,r.a.createElement("span",null,t.Author)),r.a.createElement(oe.a.Description,{content:t.Description})),r.a.createElement(oe.a.Content,{extra:!0},r.a.createElement(ie,{iconType:"remove circle",modalTitle:"Delete Post",ConfirmationMessage:"Are you sure, you want to delete this post?",rejectionClick:function(){console.log("clicked")},confirmationClick:function(){e.clicked(t.Id)}}),"\xa0",r.a.createElement(s.b,{style:{display:"inline-block"},to:"/posts/edit/"+t.Id},r.a.createElement(ce.a,{name:"edit outline",size:"large"})),r.a.createElement("span",{style:{float:"right"}},a)))}))},de=a(58),he=a(709),fe=function(e){return r.a.createElement(he.a,{boundaryRange:e.boundaryRange,defaultActivePage:e.defaultActivePage||1,siblingRange:e.siblingRange||1,totalPages:e.totalPages,onPageChange:e.onPageChange})},ge={CATEGORIES:"categories.json",POSTS:"posts.json",USERS:"users.json",getPostApi:function(e){return"posts/"+e+".json/"},getCategoriesApi:function(e){return"categories/"+e+".json/"},getUsersApi:function(e){return"users/"+e+".json/"}},Ee=function(e){return function(t){return function(a){function n(){var e,t;Object(p.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(d.a)(this,(e=Object(h.a)(n)).call.apply(e,[this].concat(r)))).state={posts:[],isLoading:!1},t.perPage=20,t.allPosts=[],t.totalPages=0,t}return Object(f.a)(n,a),Object(m.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.setState({isLoading:!0}),z.get(ge.POSTS).then(function(a){var n;for(var r in a.data)a.data[r].Id=r,a.data[r].Description=Object(de.a)(a.data[r].Description.substr(0,240))+"...","unpublished"!==e||a.data[r].isPublished?"unpublished"!==e&&a.data[r].isPublished&&t.allPosts.push(a.data[r]):t.allPosts.push(a.data[r]);t.totalPages=Math.ceil(t.allPosts.length/20),n=t.allPosts.slice(0,20),t.setState({posts:n,isLoading:!1})})}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement(t,Object.assign({},this.props,this.state)))}}]),n}(n.Component)}},ve=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoading:!1,sortBy:"created_on",isAdmin:"ADMIN"===localStorage.getItem("userType")},a.perPage=10,a.allPosts=[],a.totalPages=0,a.sortByOptions=[{key:"created_on",value:"created_on",text:"Created Time"},{key:"updated_on",value:"updated_on",text:"Updated Time"},{key:"Name",value:"Name",text:"Title"}],a.removePostHandler=function(e){a.setState({isLoading:!0}),z.delete(ge.getPostApi(e)).then(function(t){var n=a.state.posts.slice();W()(n,function(t){return t.Id===e}),a.setState({posts:n,isLoading:!1})})},a.onPageChange=function(e,t){var n=t.activePage*a.perPage,r=0;r=2===t.activePage?a.perPage:a.perPage*(t.activePage-1);var o=a.sortData(a.allPosts,a.state.sortBy).slice(r,n);a.setState({posts:o,isLoading:!1})},a.sortChangeHandler=function(e,t){var n=a.sortData(a.state.posts,t.value);a.setState({sortBy:t.value,posts:n})},a.sortData=function(e,t){return K()(e,function(e){return"updated_on"===t||"created_on"===t?new Date(1e3*parseInt(e[t])):"string"===typeof e[t]?e[t].toLowerCase():e[t]})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({posts:this.props.posts,isLoading:!1})}},{key:"render",value:function(){var e,t=this.state.posts;return e=this.state.isLoading?r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null)):t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"new-post-container"},r.a.createElement(s.b,{to:"/post/new",className:"pull-right margin-right-15"},r.a.createElement(V.a,{primary:!0},"New Post")),this.state.isAdmin?r.a.createElement(s.b,{to:"/unpublished",className:"pull-right margin-right-15"},r.a.createElement(V.a,{primary:!0},"Unpublished")):null),r.a.createElement("div",{className:"new-post-container"},r.a.createElement(Z.a,{value:this.state.sortBy,options:this.sortByOptions,onChange:this.sortChangeHandler})),r.a.createElement(me,{clicked:this.removePostHandler,posts:t}),this.totalPages>1?r.a.createElement("div",{style:{overflow:"hidden"}},r.a.createElement(fe,{onPageChange:this.onPageChange,totalPages:this.totalPages})):null):r.a.createElement($.a,{style:{margin:"0 auto",width:"400px"},textAlign:"justified"},r.a.createElement("b",null,"No Records found")),r.a.createElement(ee,null,e)}}]),t}(n.Component),be=re(Ee("published")(ve),z),je=a(705),ye=a(53),Oe=function(e){var t=Math.PI/180,a=e.cx,n=e.cy,o=e.midAngle,c=e.innerRadius,s=e.outerRadius,l=e.startAngle,i=e.endAngle,u=e.payload,p=e.percent,m=e.value,d=Math.sin(-t*o),h=Math.cos(-t*o),f=a+(s+10)*h,g=n+(s+10)*d,E=a+(s+30)*h,v=n+(s+30)*d,b=E+22*(h>=0?1:-1),j=v,y=h>=0?"start":"end";return r.a.createElement("g",null,r.a.createElement("text",{x:a,y:n,dy:8,textAnchor:"middle",fill:"#d41212"},u.name),r.a.createElement(ye.d,{cx:a,cy:n,innerRadius:c,outerRadius:s,startAngle:l,endAngle:i,fill:"#0088FE"}),r.a.createElement(ye.d,{cx:a,cy:n,startAngle:l,endAngle:i,innerRadius:s+6,outerRadius:s+10,fill:"#8884d8"}),r.a.createElement("path",{d:"M".concat(f,",").concat(g,"L").concat(E,",").concat(v,"L").concat(b,",").concat(j),stroke:"#0088FE",fill:"none"}),r.a.createElement("circle",{cx:b,cy:j,r:2,fill:"#0088FE",stroke:"none"}),r.a.createElement("text",{x:b+12*(h>=0?1:-1),y:j,textAnchor:y,fill:"#333"},"Posts count: ".concat(m)),r.a.createElement("text",{x:b+12*(h>=0?1:-1),y:j,dy:18,textAnchor:y,fill:"#999"},"(Rate ".concat((100*p).toFixed(2),"%)")))},Ce=function(e){function t(e){var a;Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).prepareChartData=function(){var e=[];for(var t in a.state.postCountByCategories)if(a.state.postCountByCategories[t]){var n={name:t,value:a.state.postCountByCategories[t]};e.push(n)}return e.length?e:[{name:"No posts",value:0}]},a.onPieEnter=function(e,t){a.setState({activeIndex:t})};var n={};return a.props.categories.forEach(function(e){n[e]=n[e]||0,a.props.posts.forEach(function(t){t.Category===e&&n[e]++})}),a.state={activeIndex:0,postCountByCategories:n},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.prepareChartData();return r.a.createElement(ye.c,{width:1200,height:500,margin:{top:50,right:5,bottom:5,left:300}},r.a.createElement(ye.b,{activeIndex:this.state.activeIndex,activeShape:Oe,data:e,cx:200,cy:200,innerRadius:120,outerRadius:160,fill:"#ff8042",dataKey:"value",onMouseEnter:this.onPieEnter}))}}]),t}(n.PureComponent),we=[{name:"Group A",value:400},{name:"Group B",value:300},{name:"Group C",value:300},{name:"Group D",value:200}],ke=["#0088FE","#00C49F","#FFBB28","#FF8042"],Ae=Math.PI/180,_e=function(e){var t=e.cx,a=e.cy,n=e.midAngle,o=e.innerRadius,c=e.outerRadius,s=e.percent,l=(e.index,o+.5*(c-o)),i=t+l*Math.cos(-n*Ae),u=a+l*Math.sin(-n*Ae);return r.a.createElement("text",{x:i,y:u,fill:"white",textAnchor:i>t?"start":"end",dominantBaseline:"central"},"".concat((100*s).toFixed(0),"%"))},Se=function(e){function t(e){var a;Object(p.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).prepareChartData=function(){var e=[];for(var t in a.state.postCountByAuthors)if(a.state.postCountByAuthors[t]){var n={name:t,value:a.state.postCountByAuthors[t]};e.push(n)}return e.length?e:[{name:"No posts",value:0}]};var n={};return a.props.posts.forEach(function(e){n[e.Author.toLowerCase()]=n[e.Author.toLowerCase()]||0,n[e.Author.toLowerCase()]++}),a.state={postCountByAuthors:n},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.prepareChartData();return r.a.createElement(ye.c,{width:1200,height:500,margin:{top:50,right:5,bottom:5,left:300}},r.a.createElement(ye.b,{data:e,cx:200,cy:200,labelLine:!1,label:_e,outerRadius:180,fill:"#8884d8",dataKey:"value"},we.map(function(e,t){return r.a.createElement(ye.a,{key:"cell-".concat(t),fill:ke[t%ke.length]})})),r.a.createElement(ye.e,null))}}]),t}(n.PureComponent),De=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={allPosts:[],categories:[],publishedPosts:[],unpublishedPosts:[],isLoading:!1},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),z.get(ge.CATEGORIES).then(function(t){var a=t.data;return e.setState({categories:a}),z.get(ge.POSTS)}).then(function(t){var a=[],n=[],r=[];for(var o in t.data)t.data[o].Id=o,t.data[o].isPublished?n.push(t.data[o]):r.push(t.data[o]),a.push(t.data[o]);e.setState({allPosts:a,publishedPosts:n,unpublishedPosts:r,isLoading:!1})})}},{key:"render",value:function(){return this.state.isLoading?r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null)):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart-title"},"Donut Chart - Posts Per Category"),r.a.createElement(Ce,{posts:this.state.allPosts,categories:this.state.categories})),r.a.createElement(je.a,null),r.a.createElement("div",{className:"chart-container"},r.a.createElement("div",{className:"chart-title"},"Pie Chart - Posts Per Author"),r.a.createElement(Se,{posts:this.state.allPosts,categories:this.state.categories}))))}}]),t}(n.Component),Pe=re(function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={users:[],sortBy:"created_on",isLoading:!1},a.sortByOptions=[{key:"created_on",value:"created_on",text:"Created Time"},{key:"fullName",value:"fullName",text:"Name"}],a.sortChangeHandler=function(e,t){var n=K()(a.state.users,function(e){return"updated_on"===t.value||"created_on"===t.value?new Date(1e3*parseInt(e[t.value])):"string"===typeof e[t.value]?e[t.value].toLowerCase():e[t.value]});a.setState({sortBy:t.value,users:n})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({isLoading:!0}),z.get(ge.USERS).then(function(t){var a=[];for(var n in t.data)t.data[n].Id=n,a.push(t.data[n]);e.setState({users:a,isLoading:!1})})}},{key:"render",value:function(){var e,t=this.state.users;return e=this.state.isLoading?r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null)):t.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"new-post-container"},r.a.createElement(Z.a,{value:this.state.sortBy,options:this.sortByOptions,onChange:this.sortChangeHandler})),r.a.createElement(oe.a.Group,null,t.map(function(e){return r.a.createElement(oe.a,{key:e.Id},r.a.createElement(oe.a.Content,null,r.a.createElement(oe.a.Header,null,e.fullName),r.a.createElement(oe.a.Meta,null,e.userType),r.a.createElement(oe.a.Description,null,e.user_email)))}))):r.a.createElement($.a,{style:{margin:"0 auto",width:"400px"},textAlign:"justified"},r.a.createElement("b",null,"No Records found")),r.a.createElement(ee,null,e)}}]),t}(n.Component),z),xe=a(51),Ie=function(e){var t=Object(n.useState)({Name:"",Author:"",Description:"",Category:""}),a=Object(xe.a)(t,2),o=a[0],c=a[1];return Object(n.useEffect)(function(){e.previewPost?c(e.post):z.get(ge.getPostApi(e.match.params.id)).then(function(e){c(e.data)})},[]),o.Name||o.Author||o.Description?r.a.createElement("div",null,r.a.createElement($.a,{textAlign:"center"},o.Name),r.a.createElement($.a,{textAlign:"right"},o.Category),r.a.createElement($.a,{textAlign:"justified"},r.a.createElement("b",null,o.Author),r.a.createElement(je.a,null),r.a.createElement("p",{dangerouslySetInnerHTML:{__html:o.Description}}))):r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null))},Te=a(146),Ne=a(711),Le=a(707),Me=a(706),Re=a(385),Be=a.n(Re),Fe=a(308),Ue=a.n(Fe),He=a(386),Ye=a.n(He),Ge=function(e){var t=Object(n.useState)(""),a=Object(xe.a)(t,2),o=a[0],c=a[1],s=Object(n.useState)(""),l=Object(xe.a)(s,2),i=l[0],u=l[1],p=Object(n.useState)(""),m=Object(xe.a)(p,2),d=m[0],h=m[1],f=Object(n.useState)("Sports"),g=Object(xe.a)(f,2),E=g[0],v=g[1],b=Object(n.useState)([]),j=Object(xe.a)(b,2),y=j[0],O=j[1],C=Object(n.useState)(!1),w=Object(xe.a)(C,2),k=w[0],A=w[1],_=Object(n.useState)(!1),S=Object(xe.a)(_,2),D=S[0],P=S[1],x=Object(n.useState)([]),I=Object(xe.a)(x,2),T=I[0],N=I[1];Object(n.useEffect)(function(){P(!0),z.get(ge.CATEGORIES).then(function(t){O(t.data),e.match.params.id?z.get(ge.getPostApi(e.match.params.id)).then(function(e){P(!1);var t=e.data;c(t.Name),u(t.Author),h(t.Description),v(t.Category)}):P(!1)})},[]);var L=function(e,t){var a=t.name,n=t.value;switch(a){case"Name":c(n);break;case"Author":u(n);break;case"Category":v(n);break;case"Description":h(n)}},M=function(e){var t=[];return Ye()(e,function(e,a){t.push(r.a.createElement(Ne.a,{key:a,error:!0,content:e[0]}))}),t},R=function(){var t={Name:o,Author:i,Category:E,Description:d,created_on:(new Date).getTime()/1e3,updated_on:(new Date).getTime()/1e3};P(!0),z.post(ge.POSTS,t).then(function(t){P(!1),e.history.push({pathname:"/",state:{newPostCreated:!0}})})},B=function(){var t={Name:o,Author:i,Category:E,Description:d,updated_on:(new Date).getTime()/1e3,isPublished:!0};z.put(ge.getPostApi(e.match.params.id),t).then(function(t){P(!1),e.history.push({pathname:"/",state:{newPostCreated:!0}})})},F=function(){A(!k)},U=function(){var e={};return T.forEach(function(t){e[t.key]={error:!0}}),e}(),H=[];y.forEach(function(e){return H.push({key:e,value:e,text:e})});var Y=e.match.params.id?"Edit post":"Create new post",G=U.Description?"field error":"field",q=e.match.params.id?"Update Post":"Create Post",W=k?r.a.createElement(Le.a.Field,{control:V.a,primary:!0,onClick:function(){return F()}},"Continue Editing"):null,J=o||i||d?r.a.createElement(Le.a.Field,{control:V.a,primary:!0,onClick:function(){return F()}},"Preview Post"):null,K=r.a.createElement(Le.a,{onSubmit:function(){c(o),u(i),v(E),h(d);var t=new Ue.a({Name:o,Author:i,Description:d},{Name:"required",Author:"required",Description:"required"});t.passes()?(P(!0),e.match.params.id?B():R()):N(M(t.errors.errors))},noValidate:!0},r.a.createElement(Le.a.Group,{widths:"equal"},r.a.createElement(Le.a.Field,Object.assign({autoComplete:"off",name:"Name",value:o,onChange:L},U.Name,{control:Me.a,label:"Name",placeholder:"Name"})),r.a.createElement(Le.a.Field,Object.assign({autoComplete:"off",name:"Author",value:i,onChange:L},U.Author,{control:Me.a,label:"Author",placeholder:"Author"})),r.a.createElement(Le.a.Field,{name:"Category",value:E,onChange:L,control:Z.a,options:H,label:"Category",placeholder:"Category"})),r.a.createElement("div",{className:G},r.a.createElement("label",null,"Description"),r.a.createElement(Be.a,Object.assign({name:"Description",value:d},U.Description,{onChange:function(e,t,a,n){h(e)}}))),r.a.createElement(Le.a.Group,null,r.a.createElement(Le.a.Field,{control:V.a,primary:!0},q),J)),ee={Name:o,Author:i,Description:d,Category:E},te=r.a.createElement(Ie,{previewPost:"true",post:ee}),ae=k?te:K;return D?r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null)):r.a.createElement($.a,{textAlign:"justified"},r.a.createElement("b",null,Y),r.a.createElement(je.a,null),Object(Te.a)(T),ae,r.a.createElement("br",null),W)},ze=function(e){var t=e.location;return r.a.createElement("div",null,r.a.createElement("h2",null,"404 Page not found"),r.a.createElement("p",null,"No match found for ",r.a.createElement("code",null,t.pathname)))},qe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{textAlign:"center"},"About Us"),r.a.createElement($.a,{textAlign:"justified"},r.a.createElement(je.a,null),r.a.createElement("p",null,"This is sample page where some static information about us would be shown.")))},We=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement($.a,{textAlign:"center"},"About Us"),r.a.createElement($.a,{textAlign:"justified"},r.a.createElement(je.a,null),r.a.createElement("p",null,"This is sample page where some static information contact us would be shown.")))},Je=a(96),Ke=function(e){function t(){var e,a;Object(p.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(d.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={posts:[],isLoading:!1},a.publish={},a.publish=function(e){a.setState({isLoading:!0});var t=Object(Je.a)({},e,{updated_on:(new Date).getTime()/1e3,isPublished:!0});z.put(ge.getPostApi(e.Id),t).then(function(t){a.setState({isLoading:!1});var n=Object(Te.a)(a.state.posts);n=n.filter(function(t){return t.Id!==e.Id}),a.setState({posts:n})})},a}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({posts:this.props.posts,isLoading:!1})}},{key:"render",value:function(){var e=this;if(this.state.isLoading)return r.a.createElement(Q.a,{active:!0},r.a.createElement(X.a,null));var t=this.props.totalPages>1?r.a.createElement("div",{style:{marginTop:"20px",marginRight:"15px",float:"right"}},r.a.createElement(fe,{onPageChange:this.onPageChange,totalPages:this.props.totalPages})):null;return this.state.posts.length?r.a.createElement(r.a.Fragment,null,r.a.createElement(oe.a.Group,null,this.state.posts.map(function(t){var a=pe()(pe.a.utc(new Date(1e3*t.updated_on)),"YYYYMMDD").fromNow();return r.a.createElement(oe.a,{key:t.Id},r.a.createElement(oe.a.Content,null,r.a.createElement(s.b,{style:{display:"inline-block"},to:"/posts/"+t.Id},r.a.createElement(oe.a.Header,null,t.Name)),r.a.createElement(s.b,{style:{display:"inline-block"},to:"/posts/edit/"+t.Id},r.a.createElement(ce.a,{name:"edit outline"})),r.a.createElement(oe.a.Meta,null,r.a.createElement("span",null,t.Author)),r.a.createElement(oe.a.Description,null,r.a.createElement(V.a,{primary:!0,onClick:function(){return e.publish(t)}},"Publish Post"))),r.a.createElement(oe.a.Content,{extra:!0},r.a.createElement(ie,{iconType:"remove circle",modalTitle:"Delete Post",ConfirmationMessage:"Are you sure, you want to delete this post?",rejectionClick:function(){console.log("clicked")},confirmationClick:function(){e.props.clicked(t.Id)}}),r.a.createElement("span",{style:{float:"right"}},a)))})),t):r.a.createElement($.a,{style:{margin:"0 auto",width:"400px"},textAlign:"justified"},r.a.createElement("b",null,"No Records found"))}}]),t}(n.Component),Ve=Ee("unpublished")(Ke),Ze=(a(692),E(function(){return a.e(3).then(a.bind(null,716))})),$e=function(e){function t(){return Object(p.a)(this,t),Object(d.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(f.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.props.onTryAutoSignup()}},{key:"render",value:function(){var e=localStorage.getItem("userType"),t=r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/",exact:!0,component:be}),r.a.createElement(g.b,{path:"/auth",component:Ze}),r.a.createElement(g.b,{path:"/charts",exact:!0,component:De}),r.a.createElement(g.b,{path:"/post",exact:!0,component:Ie}),r.a.createElement(g.b,{path:"/about-us",exact:!0,component:qe}),r.a.createElement(g.b,{path:"/contact-us",exact:!0,component:We}),r.a.createElement(g.b,{path:"/posts/:id",exact:!0,component:Ie}),r.a.createElement(g.b,{path:"/posts/edit/:id",exact:!0,component:Ge}),r.a.createElement(g.b,{path:"/post/new",exact:!0,component:Ge}),r.a.createElement(g.b,{component:ze}));return this.props.isAuthenticated&&(t=r.a.createElement(g.d,null,r.a.createElement(g.b,{path:"/",exact:!0,component:be}),r.a.createElement(g.b,{path:"/auth",component:Ze}),r.a.createElement(g.b,{path:"/about-us",exact:!0,component:qe}),r.a.createElement(g.b,{path:"/contact-us",exact:!0,component:We}),"ADMIN"===e?r.a.createElement(g.b,{path:"/unpublished",exact:!0,component:Ve}):null,"ADMIN"===e?r.a.createElement(g.b,{path:"/users",component:Pe}):null,r.a.createElement(g.b,{path:"/logout",component:Y}),r.a.createElement(g.b,{path:"/charts",exact:!0,component:De}),r.a.createElement(g.b,{path:"/post",exact:!0,component:Ie}),r.a.createElement(g.b,{path:"/posts/:id",exact:!0,component:Ie}),r.a.createElement(g.b,{path:"/posts/edit/:id",exact:!0,component:Ge}),r.a.createElement(g.b,{path:"/post/new",exact:!0,component:Ge}),r.a.createElement(g.b,{component:ze}))),r.a.createElement("div",null,r.a.createElement(F,null,t))}}]),t}(n.Component),Qe=Object(g.g)(Object(l.b)(function(e){return{isAuthenticated:null!==e.auth.token}},function(e){return{onTryAutoSignup:function(){return e(U.b())}}})($e));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Xe=a(44),et={token:null,userId:null,error:null,loading:!1,authRedirectPath:"/"},tt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:et,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Xe.c:return function(e,t){return Object(de.b)(e,{error:null,loading:!0})}(e);case Xe.d:return function(e,t){return Object(de.b)(e,{token:t.idToken,userId:t.userId,error:null,loading:!1})}(e,t);case Xe.a:return function(e,t){return Object(de.b)(e,{error:t.error,loading:!1})}(e,t);case Xe.b:return function(e,t){return Object(de.b)(e,{token:null,userId:null})}(e);case Xe.e:return function(e,t){return Object(de.b)(e,{authRedirectPath:t.path})}(e,t);default:return e}},at=i.d,nt=Object(i.c)({auth:tt}),rt=Object(i.e)(nt,at(Object(i.a)(u.a))),ot=r.a.createElement(l.a,{store:rt},r.a.createElement(s.a,null,r.a.createElement(Qe,null)));c.a.render(ot,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[423,1,2]]]);
//# sourceMappingURL=main.ad526752.chunk.js.map