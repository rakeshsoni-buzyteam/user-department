(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"/cdV":function(l,n,u){"use strict";u.r(n);var s=u("8Y7J");class t{}var a=u("pMnS");class e{constructor(l,n,u){this.uiService=l,this.message=n,this.router=u,this.showSideBar=!0}ngOnInit(){}logout(){this.message.confirm("Logout").then(l=>{l.value&&(localStorage.clear(),this.router.navigate(["/login"]))})}}var i=u("Witw"),r=u("0UgC"),c=u("iInd"),o=s.ub({encapsulation:0,styles:[[".app-sidebar__toggle[_ngcontent-%COMP%]{color:#000!important}"]],data:{}});function b(l){return s.Sb(0,[(l()(),s.wb(0,0,null,null,17,"section",[["class","start-dashboard"]],null,null,null,null,null)),(l()(),s.wb(1,0,null,null,16,"div",[["class","container-fluid p-0"]],null,null,null,null,null)),(l()(),s.wb(2,0,null,null,15,"div",[["class","top-bar"]],null,null,null,null,null)),(l()(),s.wb(3,0,null,null,14,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),s.wb(4,0,null,null,7,"div",[["class","col-md-6 col-lg-6 col-sm-12"]],null,null,null,null,null)),(l()(),s.wb(5,0,null,null,6,"ul",[["class","d-flex align-items-center"]],null,null,null,null,null)),(l()(),s.wb(6,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),s.wb(7,0,null,null,1,"a",[["href","javascript://"]],null,null,null,null,null)),(l()(),s.wb(8,0,null,null,0,"img",[["src","https://via.placeholder.com/150"],["style","height: 50px;"]],null,null,null,null,null)),(l()(),s.wb(9,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),s.wb(10,0,null,null,1,"a",[["href","javascript://"]],null,null,null,null,null)),(l()(),s.wb(11,0,null,null,0,"img",[["class","pl-4"],["src","/assets/images/ic_drawe.png"]],null,null,null,null,null)),(l()(),s.wb(12,0,null,null,5,"div",[["class","col-md-6 col-lg-6 col-sm-12"]],null,null,null,null,null)),(l()(),s.wb(13,0,null,null,4,"ul",[["class","navbar nav align-items-center pull-right"]],null,null,null,null,null)),(l()(),s.wb(14,0,null,null,3,"li",[],null,null,null,null,null)),(l()(),s.wb(15,0,null,null,2,"button",[["class","btn logout-btn"],["type","button"]],null,[[null,"click"]],(function(l,n,u){var s=!0;return"click"===n&&(s=!1!==l.component.logout()&&s),s}),null,null)),(l()(),s.wb(16,0,null,null,0,"img",[["class","pr-1"],["src","/assets/images/outline.png"]],null,null,null,null,null)),(l()(),s.Qb(-1,null,[" Logout "]))],null,null)}var d=u("SVse");class g{constructor(l){this.uiService=l,this.role=""}ngOnInit(){this.role=this.uiService.getRole()}}var m=s.ub({encapsulation:0,styles:[[""]],data:{}});function v(l){return s.Sb(0,[(l()(),s.wb(0,0,null,null,9,"li",[["routerLinkActive","active"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==s.Ib(l,1).onClick()&&t),t}),null,null)),s.vb(1,16384,[[1,4]],0,c.m,[c.l,c.a,[8,null],s.I,s.n],{routerLink:[0,"routerLink"]},null),s.Jb(2,1),s.vb(3,1720320,null,2,c.n,[c.l,s.n,s.I,[2,c.m],[2,c.o]],{routerLinkActive:[0,"routerLinkActive"]},null),s.Ob(603979776,1,{links:1}),s.Ob(603979776,2,{linksWithHrefs:1}),(l()(),s.wb(6,0,null,null,3,"a",[["href","javascript://"]],null,null,null,null,null)),(l()(),s.wb(7,0,null,null,0,"img",[["class","pr-3 show"],["src","/assets/images/ic_bstats.png"]],null,null,null,null,null)),(l()(),s.wb(8,0,null,null,0,"img",[["class","pr-3 hide"],["src","/assets/images/ic_bstats2.png"]],null,null,null,null,null)),(l()(),s.Qb(-1,null,[" User Management"]))],(function(l,n){var u=l(n,2,0,"/user-management");l(n,1,0,u),l(n,3,0,"active")}),null)}function p(l){return s.Sb(0,[(l()(),s.wb(0,0,null,null,11,"div",[["class","left-dashboard"]],null,null,null,null,null)),(l()(),s.wb(1,0,null,null,6,"div",[["class","row m-0 align-items-center"]],null,null,null,null,null)),(l()(),s.wb(2,0,null,null,2,"div",[["class","col-md-6 col-lg-4 col-sm-6 col-3"]],null,null,null,null,null)),(l()(),s.wb(3,0,null,null,1,"a",[["href","javascript://"]],null,null,null,null,null)),(l()(),s.wb(4,0,null,null,0,"img",[["class","image-fluid mx-auto d-block"],["src","/assets/images/fav.png"],["style","border-radius: 100px;"]],null,null,null,null,null)),(l()(),s.wb(5,0,null,null,2,"div",[["class","col-md-6 col-lg-8 col-sm-6 col-8"]],null,null,null,null,null)),(l()(),s.wb(6,0,null,null,1,"h2",[["class","dominos"]],null,null,null,null,null)),(l()(),s.Qb(-1,null,["Test"])),(l()(),s.wb(8,0,null,null,0,"hr",[],null,null,null,null,null)),(l()(),s.wb(9,0,null,null,2,"ul",[["class","left-side-bar mb-3"]],null,null,null,null,null)),(l()(),s.lb(16777216,null,null,1,null,v)),s.vb(11,16384,null,0,d.k,[s.T,s.Q],{ngIf:[0,"ngIf"]},null)],(function(l,n){l(n,11,0,"USER"!=n.component.role)}),null)}class w{constructor(){}ngOnInit(){}}var h=s.ub({encapsulation:0,styles:[[""]],data:{}});function f(l){return s.Sb(0,[(l()(),s.wb(0,0,null,null,1,"app-header",[],null,null,null,b,o)),s.vb(1,114688,null,0,e,[i.a,r.a,c.l],null,null),(l()(),s.wb(2,0,null,null,8,"section",[["class","dashboard-body"]],null,null,null,null,null)),(l()(),s.wb(3,0,null,null,7,"div",[["class","container-fluid"]],null,null,null,null,null)),(l()(),s.wb(4,0,null,null,6,"div",[["class","row"]],null,null,null,null,null)),(l()(),s.wb(5,0,null,null,2,"div",[["class","col-md-3 col-lg-3 col-sm-3 pr-0"]],null,null,null,null,null)),(l()(),s.wb(6,0,null,null,1,"app-side-bar",[],null,null,null,p,m)),s.vb(7,114688,null,0,g,[i.a],null,null),(l()(),s.wb(8,0,null,null,2,"div",[["class","col-md-9 col-lg-9 col-sm-9 bg-right"]],null,null,null,null,null)),(l()(),s.wb(9,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),s.vb(10,212992,null,0,c.q,[c.b,s.T,s.l,[8,null],s.i],null,null)],(function(l,n){l(n,1,0),l(n,7,0),l(n,10,0)}),null)}function k(l){return s.Sb(0,[(l()(),s.wb(0,0,null,null,1,"app-layout",[],null,null,null,f,h)),s.vb(1,114688,null,0,w,[],null,null)],(function(l,n){l(n,1,0)}),null)}var S=s.sb("app-layout",w,k,{},{},[]);let y=(()=>{class l{constructor(l,n,u,s){this.router=l,this.message=n,this.uiService=u,this.activeRoute=s}canActivate(l,n){let u=this.uiService.getRole();return!!(u&&l.data.permission.indexOf(u)>-1)||(this.router.navigate(["/not-found"]),!1)}}return l.ngInjectableDef=s.Wb({factory:function(){return new l(s.Xb(c.l),s.Xb(r.a),s.Xb(i.a),s.Xb(c.a))},token:l,providedIn:"root"}),l})();const A={breadcrumbs:"Dashboard",title:"Dashboard",permission:"MANAGER,ADMIN,USER"},I={breadcrumbs:"User Management",title:"User Management",permission:"MANAGER,ADMIN"};class M{}u.d(n,"LayoutModuleNgFactory",(function(){return G}));var G=s.tb(t,[],(function(l){return s.Fb([s.Gb(512,s.l,s.eb,[[8,[a.a,S]],[3,s.l],s.A]),s.Gb(4608,d.m,d.l,[s.w,[2,d.y]]),s.Gb(1073742336,d.c,d.c,[]),s.Gb(1073742336,c.p,c.p,[[2,c.u],[2,c.l]]),s.Gb(1073742336,M,M,[]),s.Gb(1073742336,t,t,[]),s.Gb(1024,c.j,(function(){return[[{path:"",component:w,children:[{path:"user-dashboard",loadChildren:"./dashboard/dashboard.module#DashboardModule",data:A,canActivate:[y]},{path:"user-management",loadChildren:"./user-management/user-management.module#UserManagementModule",data:I,canActivate:[y]}]}]]}),[])])}))}}]);