"use strict";(self["webpackChunkboss1"]=self["webpackChunkboss1"]||[]).push([[637,0,788],{5741:function(n,a,t){t.d(a,{w:function(){return c}});t(9512);var i=t(9835),e=t(2758);let o="/api";console.log("当前环境，生产环境"),o="http://localhost:8080/api",i.Z.defaults.headers["Content-Type"]="application/json;charset=utf-8";const s=i.Z.create({baseURL:o,method:"get"});s.interceptors.request.use((n=>(n.headers.token=localStorage.getItem("token")||"",n.headers.accid=localStorage.getItem("accid")||"",n))),s.interceptors.response.use((n=>{if(n.status&&200===n.status){const a=JSON.parse(n.data);if("0"===a.result)return a;if(-7!==a.result)return-3===a.result&&{};e.Z.push({path:"/login"})}else console.log("接口请求错误："+n.status)}),(n=>(console.log("err"+n),n)));function c(n){return new Promise(((a,t)=>{i.Z.get(n).then((n=>{a(n.data)})).catch((n=>{t(n)}))}))}},1997:function(n,a,t){t.d(a,{Z:function(){return h}});var i=t(7065),e=t(1939);const o={class:"ufooter"},s={class:"tabItem"},c=["onClick"];function l(n,a,t,l,u,r){return(0,i.wg)(),(0,i.iD)("div",o,[(0,i._)("ul",s,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.tabData,(a=>((0,i.wg)(),(0,i.iD)("li",{class:"tabTo",key:a.name,onClick:n=>l.tabClick(a.path)},[(0,i._)("span",{class:(0,e.C_)(a.path==n.$route.path?a.activeIcon:a.icon)},null,2),(0,i._)("p",{class:(0,e.C_)([{active:a.path==n.$route.path},"tabText"])},(0,e.zw)(a.name),3)],8,c)))),128))])])}t(9512);var u=t(4411),r=t(7440),d={setup(){const n=(0,r.tv)(),a=(0,u.qj)({tabData:[{path:"/",icon:"iconfont icon-shoutibao1",activeIcon:"iconfont icon-shoutibao",name:"职位"},{path:"/faxian",icon:"iconfont icon-faxian1",activeIcon:"iconfont icon-faxian",name:"发现"},{path:"/xiaoxi",icon:"iconfont icon-xiaoxi2",activeIcon:"iconfont icon-xiaoxi3",name:"消息"},{path:"/wode",icon:"iconfont icon-wode",activeIcon:"iconfont icon-weibiaoti-_huabanfuben",name:"我的"}]}),t=a=>{n.push(a),window.scrollTo(0,0)};return{...(0,u.BK)(a),tabClick:t}}},v=t(3169);const p=(0,v.Z)(d,[["render",l],["__scopeId","data-v-730ab8c8"]]);var h=p},2e3:function(n,a,t){t.r(a),t.d(a,{default:function(){return U}});var i=t(7065),e=t(1939);const o={class:"ltcontent"},s=(0,i.uE)('<div class="xinfabu" data-v-34e8b56a><div class="xinfabucont" data-v-34e8b56a><span class="iconfont" data-v-34e8b56a></span><div class="xinfabudetail" data-v-34e8b56a><p class="xinzhiwei" data-v-34e8b56a><span data-v-34e8b56a>成都宇创科技</span>发布了新职位</p><span class="xfb" data-v-34e8b56a><i data-v-34e8b56a>25</i>位Boss新发布</span></div><i class="timei" data-v-34e8b56a>16:27</i></div></div>',1),c={class:"contents"},l=["onClick"],u={class:"conts-img"},r=["src"],d={class:"conts-main"},v={class:"conts-name"},p={class:"conts-zhaohu"},h={class:"conts-time"};function m(n,a,t,m,f,w){const x=(0,i.up)("searchnav");return(0,i.wg)(),(0,i.iD)("div",o,[(0,i.Wm)(x),s,(0,i._)("div",c,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(m.contents,(n=>((0,i.wg)(),(0,i.iD)("div",{class:"conts-detail",key:n.id,onClick:a=>m.liaotiandesc(n.id)},[(0,i._)("div",u,[(0,i._)("img",{src:n.touxiaoicon},null,8,r)]),(0,i._)("div",d,[(0,i._)("p",v,[(0,i.Uk)((0,e.zw)(n.name),1),(0,i._)("span",null,(0,e.zw)(n.zhaopinzhe),1)]),(0,i._)("p",p,[(0,i._)("span",null,(0,e.zw)(n.zhaohu),1),(0,i.Uk)((0,e.zw)(n.liaotiancont),1)])]),(0,i._)("span",h,(0,e.zw)(n.contstime),1)],8,l)))),128))])])}t(9512);var f=t(6850);const w=n=>((0,i.dD)("data-v-e56658b8"),n=n(),(0,i.Cn)(),n),x={class:"searchnav"},g=w((()=>(0,i._)("div",{class:"search"},[(0,i._)("div",{class:"searchcont"},[(0,i._)("span",{class:"iconfont"},""),(0,i._)("input",{type:"text",class:"searhtext",placeholder:"通过姓名或公司搜索联系人"})])],-1))),_={class:"nav"},b={class:"navli"},k=["onClick"],C={class:"jisu"},D={class:"jisunum"},z=w((()=>(0,i._)("div",{class:"kong"},null,-1)));function I(n,a,t,o,s,c){return(0,i.wg)(),(0,i.iD)("div",x,[g,(0,i._)("div",_,[(0,i._)("div",null,[(0,i._)("div",b,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.navli,((a,t)=>((0,i.wg)(),(0,i.iD)("li",{key:a.id,class:(0,e.C_)(n.num==t?"active":""),onClick:n=>o.changenavli(t)},(0,e.zw)(a.name),11,k)))),128))]),(0,i._)("p",C,[(0,i.Uk)("极速处理"),(0,i.wy)((0,i._)("i",D,".1",512),[[f.F8,n.jisunum]])])]),z])])}var Z=t(4411),j={name:"searchnav",setup(){const n=(0,Z.qj)({jisunum:!1,navli:[{id:"n001",name:"全部"},{id:"n002",name:"招呼"},{id:"n003",name:"沟通中"}],num:0}),a=a=>{n.num=a};return{...(0,Z.BK)(n),changenavli:a}}},y=t(3169);const T=(0,y.Z)(j,[["render",I],["__scopeId","data-v-e56658b8"]]);var K=T,q=t(5741),H=t(7440),W={name:"contentdetail",components:{searchnav:K},setup(){const n=(0,H.tv)(),a=(0,Z.iH)([]),t=()=>{(0,q.w)("/api/mock.json").then((n=>{a.value=n.contents}))},e=a=>{n.push(`/liaotiandetail/${a}`),window.scrollTo(0,0)};return(0,i.bv)((()=>{t()})),{contents:a,getdatas:t,liaotiandesc:e}}};const B=(0,y.Z)(W,[["render",m],["__scopeId","data-v-34e8b56a"]]);var U=B},1406:function(n,a,t){t.r(a),t.d(a,{default:function(){return q}});var i=t(7065);function e(n,a,t,e,o,s){const c=(0,i.up)("xiaoxiheader"),l=(0,i.up)("xiaoxicontent"),u=(0,i.up)("uFooter");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(c),(0,i.Wm)(l),(0,i.Wm)(u)])}var o=t(1939);const s=n=>((0,i.dD)("data-v-b1faff8c"),n=n(),(0,i.Cn)(),n),c={class:"xiaoxiheader"},l={class:"headermain"},u={class:"xiaoxicontent"},r=["onClick"],d=s((()=>(0,i._)("div",{class:"kong"},null,-1)));function v(n,a,t,e,s,v){const p=(0,i.up)("router-link");return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",l,[(0,i._)("div",u,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.xiaoxili,((a,t)=>((0,i.wg)(),(0,i.iD)("li",{class:(0,o.C_)([n.num==t?"active":"","xiaoxili"]),key:t,onClick:n=>e.xiaoxiclick(t)},(0,o.zw)(a.name),11,r)))),128))]),(0,i.Wm)(p,{tag:"span",to:"suoyoutongzhi",class:"iconfont icon-xiaoxi"},{default:(0,i.w5)((()=>[(0,i.Uk)("")])),_:1})]),d])}var p=t(3251),h=t(4411),m={name:"xiaoxiheader",setup(){const n=(0,p.Z)(),a=(0,h.qj)({xiaoxili:[{id:"x001",name:"聊天"},{id:"x002",name:"互动"}],num:0}),t=t=>{a.num=t,n.emit("changeTab",t),window.scrollTo(0,0)};return(0,i.bv)((()=>{n.on("slide",(n=>{a.num=n}))})),{...(0,h.BK)(a),xiaoxiclick:t}}},f=t(3169);const w=(0,f.Z)(m,[["render",v],["__scopeId","data-v-b1faff8c"]]);var x=w,g=t(6794),_=(t(905),t(4500));t(2065);const b={class:"wrapper"},k={class:"liaotiancont"};function C(n,a,t,e,o,s){const c=_.j,l=g.oF;return(0,i.wg)(),(0,i.iD)("div",b,[(0,i.Wm)(l,{"lazy-render":"","show-indicators":!1,ref:"refItem","initial-swipe":"0",onChange:e.swipeChange},{default:(0,i.w5)((()=>[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(n.list,((n,a)=>((0,i.wg)(),(0,i.j4)(c,{key:a},{default:(0,i.w5)((()=>[(0,i._)("div",k,[((0,i.wg)(),(0,i.j4)((0,i.LL)(n.component)))])])),_:2},1024)))),128))])),_:1},8,["onChange"])])}var D=t(2e3),z=t(4863),I={name:"xiaoxicontent",components:{contentdetail:D["default"],ganxingqu:z["default"]},setup(){const n=(0,p.Z)(),a=(0,h.iH)(null),t=(0,h.qj)({list:[{path:"/components/contentdetail",component:(0,h.Xl)(D["default"])},{path:"/components/ganxingqu",component:(0,h.Xl)(z["default"])}]}),e=a=>{n.emit("slide",a),window.scrollTo(0,0)};return(0,i.bv)((()=>{n.on("changeTab",(n=>{a.value.swipeTo(n)}))})),{...(0,h.BK)(t),refItem:a,swipeChange:e}}};const Z=(0,f.Z)(I,[["render",C],["__scopeId","data-v-45099d68"]]);var j=Z,y=t(1997),T={name:"xiaoxi",components:{xiaoxiheader:x,xiaoxicontent:j,uFooter:y.Z}};const K=(0,f.Z)(T,[["render",e]]);var q=K}}]);
//# sourceMappingURL=637.3b7f87da.js.map