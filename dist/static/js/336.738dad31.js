"use strict";(self["webpackChunkboss1"]=self["webpackChunkboss1"]||[]).push([[336],{4224:function(){},4172:function(){},4257:function(){},5741:function(e,t,n){n.d(t,{w:function(){return c}});n(9512);var o=n(9835),s=n(2758);let a="/api";console.log("当前环境，生产环境"),a="http://localhost:8080/api",o.Z.defaults.headers["Content-Type"]="application/json;charset=utf-8";const i=o.Z.create({baseURL:a,method:"get"});i.interceptors.request.use((e=>(e.headers.token=localStorage.getItem("token")||"",e.headers.accid=localStorage.getItem("accid")||"",e))),i.interceptors.response.use((e=>{if(e.status&&200===e.status){const t=JSON.parse(e.data);if("0"===t.result)return t;if(-7!==t.result)return-3===t.result&&{};s.Z.push({path:"/login"})}else console.log("接口请求错误："+e.status)}),(e=>(console.log("err"+e),e)));function c(e){return new Promise(((t,n)=>{o.Z.get(e).then((e=>{t(e.data)})).catch((e=>{n(e)}))}))}},336:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var o=n(7065);function s(e,t,n,s,a,i){const c=(0,o.up)("ganxingquheader"),l=(0,o.up)("ganxingqucont");return(0,o.wg)(),(0,o.iD)("div",null,[(0,o.Wm)(c),(0,o.Wm)(l)])}var a=n(2375);n(7867);const i=e=>((0,o.dD)("data-v-74fa82a3"),e=e(),(0,o.Cn)(),e),c={class:"ganxingquheader"},l={class:"details"},u=i((()=>(0,o._)("h4",null,"我感兴趣的职位",-1))),r=i((()=>(0,o._)("div",{class:"kong"},null,-1)));function d(e,t,n,s,i,d){const g=a.JO;return(0,o.wg)(),(0,o.iD)("div",null,[(0,o._)("div",c,[(0,o._)("div",l,[(0,o.Wm)(g,{name:"arrow-left",size:".5rem",class:"el-icon-arrow-left",onClick:s.toup},null,8,["onClick"]),u])]),r])}var g=n(7440),m={name:"ganxingquheader",setup(){const e=(0,g.tv)(),t=()=>{e.go(-1)};return{toup:t}}},h=n(3169);const f=(0,h.Z)(m,[["render",d],["__scopeId","data-v-74fa82a3"]]);var p=f,v=n(1939),_=n(6850);const w=e=>((0,o.dD)("data-v-23e0325a"),e=e(),(0,o.Cn)(),e),C={class:"ganxingqucont"},k=["onTouchstart","onTouchend"],H={class:"liaotiandesc"},D={class:"htops"},q={class:"compname"},x={class:"midldesc"},z={class:"jianchengdesc"},I=w((()=>(0,o._)("div",{class:"touxiang"},[(0,o._)("img",{src:"/imgs/006.jpg"}),(0,o._)("i",{class:"iconfont zhuanshi"},"")],-1))),T={class:"chenghu"},b={class:"bottoms"},Z={class:"bot-desc"},j={class:"wenxintishi"},y={class:"details"},F=w((()=>(0,o._)("h4",{class:"details-h4"},"温馨提示",-1))),K={class:"details-p"},M={class:"details-div"};function S(e,t,n,s,a,i){return(0,o.wg)(),(0,o.iD)("div",C,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(e.HomeContent,(e=>((0,o.wg)(),(0,o.iD)("div",{class:"ganxingqulist",key:e.id,onTouchstart:t=>s.shifoushanchu(e.id),onTouchmove:t[0]||(t[0]=(...e)=>s.moves&&s.moves(...e)),onTouchend:t=>s.toup(e.id)},[(0,o._)("div",H,[(0,o._)("div",D,[(0,o._)("h4",null,(0,v.zw)(e.conttitle),1),(0,o._)("p",null,(0,v.zw)(e.contprice),1)]),(0,o._)("div",q,[(0,o._)("p",null,(0,v.zw)(e.contconp),1)]),(0,o._)("div",x,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)([e.area,e.contkeys[0],e.contkeys[1]],((e,t)=>((0,o.wg)(),(0,o.iD)("li",{key:t},(0,v.zw)(e),1)))),128))]),(0,o._)("div",z,[I,(0,o._)("div",T,(0,v.zw)(e.contp),1)]),(0,o._)("div",b,[(0,o._)("div",Z,[(0,o._)("p",null,(0,v.zw)(s.nowtimes1),1)])])])],40,k)))),128)),(0,o.wy)((0,o._)("div",{class:"confirm",onTouchmove:t[3]||(t[3]=(0,_.iM)((()=>{}),["prevent"]))},[(0,o._)("div",j,[(0,o._)("div",y,[F,(0,o._)("p",K,'确认对"'+(0,v.zw)(e.titles)+'"取消感兴趣吗？',1),(0,o._)("div",M,[(0,o._)("p",{class:"quxiao",onClick:t[1]||(t[1]=(...e)=>s.cancel&&s.cancel(...e))},"取消"),(0,o._)("p",{class:"queding",onClick:t[2]||(t[2]=(...e)=>s.sure&&s.sure(...e))},"确定")])])])],544),[[_.F8,e.confirm]])])}n(9512);var W=n(4313),J=n(5741),O=n(4411),R={name:"ganxingqucont",setup(){const e=(0,g.tv)(),t=(0,W.oR)(),n=(0,O.qj)({HomeContent:[],timer:0,confirm:!1,titles:"",fanggastate:!0,Id:""}),s=(0,o.Fl)((()=>{const e=(new Date).getMonth()+1,t=(new Date).getDate(),n=(new Date).getHours(),o=(new Date).getMinutes();return n<10?e+"月"+t+"日 0"+n+":"+o:o<10?e+"月"+t+"日 "+n+":0"+o:e+"月"+t+"日 "+n+":"+o})),a=(0,o.Fl)((()=>t.state.shoucangID)),i=()=>{(0,J.w)("/api/mock.json").then((e=>{n.HomeContent=[];for(let t=0;t<e.HomeContent.length;t++)for(let o=0;o<a.value.length;o++)e.HomeContent[t].id===a.value[o]&&n.HomeContent.push(e.HomeContent[t])}))},c=e=>{!0===n.fagnfastate&&(n.timer=setTimeout((()=>{n.timer=0,n.confirm=!0;for(let t=0;t<n.HomeContent.length;t++)n.HomeContent[t].id===e&&(n.titles=n.HomeContent[t].conttitle)}),1e3),n.Id=e)},l=()=>{n.fagnfastate=!1,n.timer=0},u=t=>{n.fagnfastate=!0,!0===n.fagnfastate&&(clearTimeout(n.timer),0!==n.timer&&e.push(`/jobsdetail/${t}`))},r=()=>{n.confirm=!1},d=()=>{n.confirm=!1;for(let e=0;e<n.HomeContent.length;e++)n.HomeContent[e].id===n.Id&&(n.HomeContent.splice(e,1),t.commit("shoucang",n.Id))};return(0,o.dl)((()=>{i()})),{...(0,O.BK)(n),nowtimes1:s,states:a,getdatas:i,shifoushanchu:c,moves:l,toup:u,cancel:r,sure:d}}};const Y=(0,h.Z)(R,[["render",S],["__scopeId","data-v-23e0325a"]]);var B=Y,L={name:"ganxingqu",components:{ganxingquheader:p,ganxingqucont:B}};const N=(0,h.Z)(L,[["render",s]]);var P=N},7867:function(e,t,n){n(4257),n(4224),n(4172)}}]);
//# sourceMappingURL=336.738dad31.js.map