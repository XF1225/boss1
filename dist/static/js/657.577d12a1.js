"use strict";(self["webpackChunkboss1"]=self["webpackChunkboss1"]||[]).push([[657],{5741:function(n,a,i){i.d(a,{w:function(){return o}});i(9512);var t=i(9835),c=i(2758);let s="/api";console.log("当前环境，生产环境"),s="http://localhost:8080/api",t.Z.defaults.headers["Content-Type"]="application/json;charset=utf-8";const e=t.Z.create({baseURL:s,method:"get"});e.interceptors.request.use((n=>(n.headers.token=localStorage.getItem("token")||"",n.headers.accid=localStorage.getItem("accid")||"",n))),e.interceptors.response.use((n=>{if(n.status&&200===n.status){const a=JSON.parse(n.data);if("0"===a.result)return a;if(-7!==a.result)return-3===a.result&&{};c.Z.push({path:"/login"})}else console.log("接口请求错误："+n.status)}),(n=>(console.log("err"+n),n)));function o(n){return new Promise(((a,i)=>{t.Z.get(n).then((n=>{a(n.data)})).catch((n=>{i(n)}))}))}},1997:function(n,a,i){i.d(a,{Z:function(){return f}});var t=i(7065),c=i(1939);const s={class:"ufooter"},e={class:"tabItem"},o=["onClick"];function l(n,a,i,l,u,d){return(0,t.wg)(),(0,t.iD)("div",s,[(0,t._)("ul",e,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.tabData,(a=>((0,t.wg)(),(0,t.iD)("li",{class:"tabTo",key:a.name,onClick:n=>l.tabClick(a.path)},[(0,t._)("span",{class:(0,c.C_)(a.path==n.$route.path?a.activeIcon:a.icon)},null,2),(0,t._)("p",{class:(0,c.C_)([{active:a.path==n.$route.path},"tabText"])},(0,c.zw)(a.name),3)],8,o)))),128))])])}i(9512);var u=i(4411),d=i(7440),r={setup(){const n=(0,d.tv)(),a=(0,u.qj)({tabData:[{path:"/",icon:"iconfont icon-shoutibao1",activeIcon:"iconfont icon-shoutibao",name:"职位"},{path:"/faxian",icon:"iconfont icon-faxian1",activeIcon:"iconfont icon-faxian",name:"发现"},{path:"/xiaoxi",icon:"iconfont icon-xiaoxi2",activeIcon:"iconfont icon-xiaoxi3",name:"消息"},{path:"/wode",icon:"iconfont icon-wode",activeIcon:"iconfont icon-weibiaoti-_huabanfuben",name:"我的"}]}),i=a=>{n.push(a),window.scrollTo(0,0)};return{...(0,u.BK)(a),tabClick:i}}},v=i(3169);const _=(0,v.Z)(r,[["render",l],["__scopeId","data-v-730ab8c8"]]);var f=_},657:function(n,a,i){i.r(a),i.d(a,{default:function(){return dn}});var t=i(7065);function c(n,a,i,c,s,e){const o=(0,t.up)("faxianheader"),l=(0,t.up)("faxiannav"),u=(0,t.up)("faxiancontent"),d=(0,t.up)("faxianjia"),r=(0,t.up)("uFooter");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t.Wm)(o),(0,t.Wm)(l),(0,t.Wm)(u),(0,t.Wm)(d),(0,t.Wm)(r)])}var s=i(1939);const e=n=>((0,t.dD)("data-v-e4100f5e"),n=n(),(0,t.Cn)(),n),o={class:"faxianheader"},l={class:"faxiandetail"},u=e((()=>(0,t._)("h2",{class:"faxian-h2"},"发现",-1))),d=e((()=>(0,t._)("span",{class:"iconfont icon-search"},"",-1))),r=e((()=>(0,t._)("div",{class:"userimg"},[(0,t._)("img",{src:"imgs/006.jpg"})],-1))),v=e((()=>(0,t._)("div",{class:"kong"},null,-1)));function _(n,a,i,c,e,_){const f=(0,t.up)("router-link");return(0,t.wg)(),(0,t.iD)("div",null,[(0,t._)("div",o,[(0,t._)("div",l,[u,(0,t._)("div",{class:(0,s.C_)(["faxian-search",!0===c.animates?"animated rubberBand":""])},[d,(0,t._)("input",{type:"text",class:"faxian-text",placeholder:"搜索职位/公司/知识点",onClick:a[0]||(a[0]=(...n)=>c.tosousuozhiwei&&c.tosousuozhiwei(...n))})],2),(0,t.Wm)(f,{tag:"span",to:"suoyoutongzhi",class:"iconfont icon-xiaoxi"},{default:(0,t.w5)((()=>[(0,t.Uk)("")])),_:1}),r])]),v])}i(9512);var f=i(4411),p=i(7440),h={name:"faxianheader",setup(){const n=(0,f.iH)(!1),a=(0,p.tv)(),i=()=>{n.value=!0,setTimeout((()=>{a.push("/sousuozhiwei"),n.value=!1}),500)};return{animates:n,tosousuozhiwei:i}}},w=i(3169);const m=(0,w.Z)(h,[["render",_],["__scopeId","data-v-e4100f5e"]]);var x=m;const g={class:"faxiannav"},k={class:"navcontent"};function z(n,a,i,c,e,o){return(0,t.wg)(),(0,t.iD)("div",g,[(0,t._)("div",k,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(e.navcontent,(n=>((0,t.wg)(),(0,t.iD)("li",{class:"navli",key:n.id},[(0,t._)("span",{class:(0,s.C_)(n.icon)},null,2),(0,t._)("p",null,(0,s.zw)(n.name),1)])))),128))])])}var b={name:"faxiannav",data(){return{navcontent:[{id:"N001",icon:"iconfont icon-gongsi",name:"公司"},{id:"N002",icon:"iconfont icon-hot",name:"热榜"},{id:"N003",icon:"iconfont icon-wenda1",name:"等你来答"},{id:"N004",icon:"iconfont icon-tianchongxing-",name:"职场小课"},{id:"N005",icon:"iconfont icon-qiuzhizhuangtai",name:"求职攻略"}]}}};const C=(0,w.Z)(b,[["render",z],["__scopeId","data-v-69096ab8"]]);var D=C,I=i(6850);const Z=n=>((0,t.dD)("data-v-0b9cd6b6"),n=n(),(0,t.Cn)(),n),y={class:"faxiancontent"},j={class:"faxian-desc"},H={class:"faxian-youzhi"},N={class:"faxian-title"},W={class:"title-left"},K=Z((()=>(0,t._)("span",null,"#",-1))),T={class:"userdesc"},Y={class:"userimg"},F=["src"],U={class:"userdis"},q={class:"faxian-main"},O=["onClick"],S=["onClick"],B={class:"tiwen"},$={class:"huida"},J={class:"maincontent"},L={class:"cont-bottom"},P={class:"bottom-left"},R=["onClickOnce"],A={class:"contwen"},E={class:"bottom-right"};function G(n,a,i,c,e,o){return(0,t.wg)(),(0,t.iD)("div",y,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(c.faxiancontent,((n,a)=>((0,t.wg)(),(0,t.iD)("div",{class:"faxian-detail",key:n.id},[(0,t._)("div",j,[(0,t._)("div",H,[(0,t._)("span",null,[(0,t._)("i",{class:(0,s.C_)(n.rticon)},null,2),(0,t.Uk)((0,s.zw)(n.rttitle),1)])]),(0,t._)("div",N,[(0,t._)("div",W,[K,(0,t._)("p",null,(0,s.zw)(n.titleleft),1)]),(0,t._)("span",{class:(0,s.C_)(n.iconmore)},null,2)]),(0,t._)("div",T,[(0,t._)("div",Y,[(0,t._)("img",{src:n.userimg},null,8,F),(0,t._)("span",{class:(0,s.C_)(n.iconvip)},null,2)]),(0,t._)("div",U,[(0,t._)("h4",null,(0,s.zw)(n.userdis),1),(0,t._)("span",null,(0,s.zw)(n.usertitle),1)])]),(0,t._)("div",null,[(0,t._)("div",q,[(0,t._)("p",{class:(0,s.C_)(n.chakan?"main":"main2")},(0,s.zw)(n.faxianmain),3),(0,t.wy)((0,t._)("span",{class:"chakan",onClick:n=>c.chakanclick(a)},(0,s.zw)(n.defaultcha1),9,O),[[I.F8,n.showcha]]),(0,t.wy)((0,t._)("span",{class:"chakan",onClick:n=>c.chakanclick(a)},(0,s.zw)(n.defaultcha2),9,S),[[I.F8,!n.showcha]])]),(0,t._)("div",{class:(0,s.C_)({wenda:n.iswenda})},[(0,t._)("div",B,[(0,t._)("div",null,[(0,t._)("span",null,(0,s.zw)(n.wen),1)]),(0,t._)("p",null,(0,s.zw)(n.tiwen),1)]),(0,t._)("span",$,[(0,t.Uk)((0,s.zw)(n.huida),1),(0,t._)("i",{class:(0,s.C_)(n.youbian)},null,2)])],2)]),(0,t._)("div",null,[(0,t._)("div",{class:(0,s.C_)({maintitle:n.ishas})},(0,s.zw)(n.maintitle),3),(0,t._)("div",J,[((0,t.wg)(!0),(0,t.iD)(t.HY,null,(0,t.Ko)(n.maincontent,((n,a)=>((0,t.wg)(),(0,t.iD)("li",{key:a},(0,s.zw)(n),1)))),128))])]),(0,t._)("div",L,[(0,t._)("div",P,[(0,t._)("div",{class:"dianzan",onClickOnce:a=>c.dianzan(n.dianzannum)},[(0,t._)("span",{class:(0,s.C_)(n.dianzan)},null,2),(0,t._)("p",null,(0,s.zw)(n.dianzannum),1)],40,R),(0,t._)("div",A,[(0,t._)("span",{class:(0,s.C_)(n.icondesc)},null,2),(0,t._)("p",null,(0,s.zw)(n.contwen),1)])]),(0,t._)("div",E,[(0,t._)("span",{class:(0,s.C_)(n.iconxin)},null,2),(0,t._)("p",null,(0,s.zw)(n.iconxintitle),1)])])])])))),128))])}var M=i(5741),Q={name:"faxiancontent",setup(){const n=(0,f.iH)([]),a=(0,f.iH)(!0),i=()=>{(0,M.w)("/api/mock.json").then((a=>{n.value=a.faxiancontent}))},c=a=>{n.value[a].showcha=!n.value[a].showcha,n.value[a].chakan=!n.value[a].chakan},s=a=>{for(let i=0;i<n.value.length;i++)n.value[i].dianzannum===a&&(0,t.Y3)((()=>{n.value[i].dianzannum=Number(n.value[i].dianzannum)+1}))};return(0,t.bv)((()=>{i()})),{faxiancontent:n,dianzanclick:a,getdatas:i,chakanclick:c,dianzan:s}}};const V=(0,w.Z)(Q,[["render",G],["__scopeId","data-v-0b9cd6b6"]]);var X=V;const nn=n=>((0,t.dD)("data-v-7cae239d"),n=n(),(0,t.Cn)(),n),an=nn((()=>(0,t._)("span",{class:"iconfont"},"",-1)));function tn(n,a,i,c,s,e){const o=(0,t.up)("router-link");return(0,t.wg)(),(0,t.j4)(o,{tag:"div",to:"/faxianjia",class:"faxianjia"},{default:(0,t.w5)((()=>[an])),_:1})}var cn={name:"faxianjia"};const sn=(0,w.Z)(cn,[["render",tn],["__scopeId","data-v-7cae239d"]]);var en=sn,on=i(1997),ln={name:"faxian",components:{faxianheader:x,faxiannav:D,faxiancontent:X,faxianjia:en,uFooter:on.Z}};const un=(0,w.Z)(ln,[["render",c]]);var dn=un}}]);
//# sourceMappingURL=657.577d12a1.js.map