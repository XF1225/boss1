"use strict";(self["webpackChunkboss1"]=self["webpackChunkboss1"]||[]).push([[952],{4224:function(){},4172:function(){},8514:function(){},4257:function(){},3251:function(e,l,n){n.d(l,{Z:function(){return o}});var a=n(7065);function o(){const e=(0,a.FN)(),l=e.appContext.config.globalProperties.emitter;return l}},1472:function(e,l,n){n.d(l,{Z:function(){return h}});var a=n(7065),o=n(1939);const i=e=>((0,a.dD)("data-v-338d74cf"),e=e(),(0,a.Cn)(),e),t={class:"shezhiheader"},s={class:"header-desc"},r={class:"header-h4"},c=i((()=>(0,a._)("div",{class:"kong"},null,-1)));function d(e,l,n,i,d,u){return(0,a.wg)(),(0,a.iD)("div",null,[(0,a._)("div",t,[(0,a._)("div",s,[(0,a._)("img",{class:"el-icon-arrow-left",src:"/imgs/down.png",onClick:l[0]||(l[0]=(...e)=>i.shezhigoback&&i.shezhigoback(...e))}),(0,a._)("h4",r,(0,o.zw)(n.title),1)])]),c])}var u=n(7440),v={name:"shezhiheader",props:{title:String},setup(e,l){const n=(0,u.tv)(),a=()=>{n.go(-1)};return{shezhigoback:a}}},m=n(3169);const p=(0,m.Z)(v,[["render",d],["__scopeId","data-v-338d74cf"]]);var h=p},2952:function(e,l,n){n.r(l),n.d(l,{default:function(){return Ee}});var a=n(7065);function o(e,l,n,o,i,t){const s=(0,a.up)("shezhiheader"),r=(0,a.up)("contents");return(0,a.wg)(),(0,a.iD)("div",null,[(0,a.Wm)(s,{title:o.title},null,8,["title"]),(0,a.Wm)(r)])}var i=n(1472),t=n(5875),s=n(2560),r=n(8014),c=n(512);const[d,u]=(0,s["do"])("radio-group"),v={disabled:Boolean,iconSize:r.Or,direction:String,modelValue:r.Vg,checkedColor:String},m=Symbol(d);var p=(0,a.aZ)({name:d,props:v,emits:["change","update:modelValue"],setup(e,{emit:l,slots:n}){const{linkChildren:o}=(0,c.$E)(m),i=e=>l("update:modelValue",e);return(0,a.YP)((()=>e.modelValue),(e=>l("change",e))),o({props:e,updateValue:i}),(0,c.aM)((()=>e.modelValue)),()=>{var l;return(0,a.Wm)("div",{class:u([e.direction]),role:"radiogroup"},[null==(l=n.default)?void 0:l.call(n)])}}});const h=(0,t.n)(p);n(4257);var w=n(57),b=n(4411),f=n(4106),g=n(2375);const z={name:r.Vg,shape:(0,r.SQ)("round"),disabled:Boolean,iconSize:r.Or,modelValue:r.Vg,checkedColor:String,labelPosition:String,labelDisabled:Boolean};var _=(0,a.aZ)({props:(0,w.l7)({},z,{bem:(0,r.ir)(Function),role:String,parent:Object,checked:Boolean,bindGroup:r.J5}),emits:["click","toggle"],setup(e,{emit:l,slots:n}){const o=(0,b.iH)(),i=l=>{if(e.parent&&e.bindGroup)return e.parent.props[l]},t=(0,a.Fl)((()=>i("disabled")||e.disabled)),s=(0,a.Fl)((()=>i("direction"))),r=(0,a.Fl)((()=>{const l=e.checkedColor||i("checkedColor");if(l&&e.checked&&!t.value)return{borderColor:l,backgroundColor:l}})),c=n=>{const{target:a}=n,i=o.value,s=i===a||(null==i?void 0:i.contains(a));t.value||!s&&e.labelDisabled||l("toggle"),l("click",n)},d=()=>{const{bem:l,shape:s,checked:c}=e,d=e.iconSize||i("iconSize");return(0,a.Wm)("div",{ref:o,class:l("icon",[s,{disabled:t.value,checked:c}]),style:{fontSize:(0,f.Nn)(d)}},[n.icon?n.icon({checked:c,disabled:t.value}):(0,a.Wm)(g.JO,{name:"success",style:r.value},null)])},u=()=>{if(n.default)return(0,a.Wm)("span",{class:e.bem("label",[e.labelPosition,{disabled:t.value}])},[n.default()])};return()=>{const l="left"===e.labelPosition?[u(),d()]:[d(),u()];return(0,a.Wm)("div",{role:e.role,class:e.bem([{disabled:t.value,"label-disabled":e.labelDisabled},s.value]),tabindex:t.value?void 0:0,"aria-checked":e.checked,onClick:c},[l])}}});const[y,V]=(0,s["do"])("radio");var C=(0,a.aZ)({name:y,props:z,emits:["update:modelValue"],setup(e,{emit:l,slots:n}){const{parent:o}=(0,c.NB)(m),i=()=>{const l=o?o.props.modelValue:e.modelValue;return l===e.name},t=()=>{o?o.updateValue(e.name):l("update:modelValue",e.name)};return()=>(0,a.Wm)(_,(0,a.dG)({bem:V,role:"radio",parent:o,checked:i(),onToggle:t},e),(0,w.ei)(n,["default","icon"]))}});const k=(0,t.n)(C);n(4224),n(4172);var x=n(1937);const[S,j]=(0,s["do"])("switch"),W={size:r.Or,loading:Boolean,disabled:Boolean,modelValue:r.Vg,activeColor:String,inactiveColor:String,activeValue:{type:r.Vg,default:!0},inactiveValue:{type:r.Vg,default:!1}};var D=(0,a.aZ)({name:S,props:W,emits:["change","update:modelValue"],setup(e,{emit:l,slots:n}){const o=()=>e.modelValue===e.activeValue,i=()=>{if(!e.disabled&&!e.loading){const n=o()?e.inactiveValue:e.activeValue;l("update:modelValue",n),l("change",n)}},t=()=>{if(e.loading){const l=o()?e.activeColor:e.inactiveColor;return(0,a.Wm)(x.gb,{class:j("loading"),color:l},null)}if(n.node)return n.node()};return(0,c.aM)((()=>e.modelValue)),()=>{var l;const{size:s,loading:r,disabled:c,activeColor:d,inactiveColor:u}=e,v=o(),m={fontSize:(0,f.Nn)(s),backgroundColor:v?d:u};return(0,a.Wm)("div",{role:"switch",class:j({on:v,loading:r,disabled:c}),style:m,tabindex:c?void 0:0,"aria-checked":v,onClick:i},[(0,a.Wm)("div",{class:j("node")},[t()]),null==(l=n.background)?void 0:l.call(n)])}}});const O=(0,t.n)(D);n(8514),n(7867);var A=n(1939),B=n(6850);const F=e=>((0,a.dD)("data-v-13429bd0"),e=e(),(0,a.Cn)(),e),P={class:"contents"},U={class:"contents01"},Z={class:"detail"},H={class:"contents02"},N={class:"main01"},Y={class:"detail02"},E={class:"yjmdr"},T=F((()=>(0,a._)("p",null,"夜间免打扰",-1))),L=F((()=>(0,a._)("span",null,"功能开启后，夜间消息正常接收但不推送",-1))),q={class:"mdrsd"},J=F((()=>(0,a._)("p",null,"免打扰时段",-1))),M=F((()=>(0,a._)("span",null,"22:00-08:00",-1))),G={class:"syyzd"},K=F((()=>(0,a._)("p",null,"声音与震动",-1))),I={class:"main02"},Q={class:"detail02"},$={class:"wxtz"},R=F((()=>(0,a._)("p",{class:"wxtz-p"},"微信通知",-1))),X={class:"wxtz-div"},ee=F((()=>(0,a._)("span",null,"推荐开启",-1))),le=F((()=>(0,a._)("span",{class:"wxtz-apsn"},"在微信上接收面试通知等重要消息",-1))),ne={class:"dbtx"},ae=F((()=>(0,a._)("p",null,"APP内顶部提醒",-1))),oe=F((()=>(0,a._)("span",null,"在使用APP过程中，重要消息回收到顶部提醒",-1))),ie={class:"dxtz"},te=F((()=>(0,a._)("p",null,"短信通知",-1))),se={class:"gxhfwsz"},re=F((()=>(0,a._)("p",null,"个性化服务设置",-1))),ce={class:"contents03"},de={class:"detail03"},ue={class:"pbgs"},ve=F((()=>(0,a._)("p",null,"屏蔽公司",-1))),me={class:"ycjl"},pe=F((()=>(0,a._)("p",null,"对BOSS隐藏简历",-1))),he=F((()=>(0,a._)("p",null,"对人才经纪人隐藏简历",-1))),we=F((()=>(0,a._)("span",null,"人才经纪人是中介公司的招聘中",-1))),be={class:"ycjl"},fe=F((()=>(0,a._)("p",null,"不看代招职位",-1))),ge={class:"pbgs"},ze=F((()=>(0,a._)("p",null,"权限管理",-1))),_e={class:"contents04"},ye={class:"zzhb-row"},Ve=F((()=>(0,a._)("p",null,"自动接收直直红包",-1))),Ce=F((()=>(0,a._)("div",{class:"zzhb-desc"},[(0,a._)("p",null,"自动接收直直发来的红包，并授权直直将您的联系方式发送对您有意的BOSS，每接收1个红包仅授权发送1次"),(0,a._)("span",null,"注：如当前无求职意向，请勿开启此功能，以减少无效沟通；开启该功能后如连续 7天未使用APP，系统将自动为您关闭")],-1))),ke={class:"contents05"},xe={class:"dzhy"},Se={class:"dzhy-desc"},je=F((()=>(0,a._)("p",null,"打招呼语",-1))),We=F((()=>(0,a._)("span",null,"选中的打招呼将在下次与新BOSS沟通时生效",-1))),De={class:"dzhy-contents"},Oe={class:"dzhy-detail"};function Ae(e,l,n,o,i,t){const s=g.JO,r=O,c=k,d=h;return(0,a.wg)(),(0,a.iD)("div",P,[(0,a.wy)((0,a._)("div",U,[(0,a._)("div",Z,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.contents01,((e,l)=>((0,a.wg)(),(0,a.iD)("div",{class:"detail-row",key:l},[(0,a._)("p",null,(0,A.zw)(e.title),1),(0,a._)("div",null,[(0,a._)("span",null,(0,A.zw)(e.desc),1),(0,a.Wm)(s,{name:"arrow",size:".5rem"})])])))),128))])],512),[[B.F8,e.show01]]),(0,a.wy)((0,a._)("div",H,[(0,a._)("div",N,[(0,a._)("div",Y,[(0,a._)("div",E,[(0,a._)("div",null,[T,(0,a.Wm)(r,{size:"22px",modelValue:e.yjmdrvalue,"onUpdate:modelValue":l[0]||(l[0]=l=>e.yjmdrvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),L]),(0,a._)("div",q,[J,(0,a._)("div",null,[M,(0,a.Wm)(s,{name:"arrow",size:".5rem"})])]),(0,a._)("div",G,[K,(0,a.Wm)(r,{size:"22px",modelValue:e.syyzdvalue,"onUpdate:modelValue":l[1]||(l[1]=l=>e.syyzdvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])])])]),(0,a._)("div",I,[(0,a._)("div",Q,[(0,a._)("div",$,[(0,a._)("div",null,[R,(0,a._)("div",X,[ee,(0,a.Wm)(s,{name:"arrow",size:".5rem"})])]),le]),(0,a._)("div",ne,[(0,a._)("div",null,[ae,(0,a.Wm)(r,{size:"22px",modelValue:e.dbtxvalue,"onUpdate:modelValue":l[2]||(l[2]=l=>e.dbtxvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),oe]),(0,a._)("div",ie,[te,(0,a.Wm)(r,{size:"22px",modelValue:e.dxtzvalue,"onUpdate:modelValue":l[3]||(l[3]=l=>e.dxtzvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),(0,a._)("div",se,[re,(0,a.Wm)(s,{name:"arrow",size:".5rem"})])])])],512),[[B.F8,e.show02]]),(0,a.wy)((0,a._)("div",ce,[(0,a._)("div",de,[(0,a._)("div",ue,[ve,(0,a.Wm)(s,{name:"arrow",size:".5rem"})]),(0,a._)("div",me,[pe,(0,a.Wm)(r,{size:"22px",modelValue:e.ycjlvalue,"onUpdate:modelValue":l[4]||(l[4]=l=>e.ycjlvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),(0,a._)("div",{class:"rcjjr",onClick:l[6]||(l[6]=(...e)=>o.rcjjrclick&&o.rcjjrclick(...e))},[(0,a._)("div",null,[he,(0,a.Wm)(r,{size:"22px",modelValue:e.rcjjrvalue,"onUpdate:modelValue":l[5]||(l[5]=l=>e.rcjjrvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),we]),(0,a._)("div",be,[fe,(0,a.Wm)(r,{size:"22px",modelValue:e.dzzwvalue,"onUpdate:modelValue":l[7]||(l[7]=l=>e.dzzwvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),(0,a._)("div",ge,[ze,(0,a.Wm)(s,{name:"arrow",size:".5rem"})])])],512),[[B.F8,e.show03]]),(0,a.wy)((0,a._)("div",_e,[(0,a._)("div",ye,[Ve,(0,a.Wm)(r,{style:{"margin-right":".2rem"},size:"22px",modelValue:e.zzhbvalue,"onUpdate:modelValue":l[8]||(l[8]=l=>e.zzhbvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),Ce],512),[[B.F8,e.show04]]),(0,a.wy)((0,a._)("div",ke,[(0,a._)("div",xe,[(0,a._)("div",Se,[(0,a._)("div",null,[je,(0,a.Wm)(r,{size:"22px",modelValue:e.dzhyvalue,"onUpdate:modelValue":l[9]||(l[9]=l=>e.dzhyvalue=l),"active-color":"rgb(18,173,165)","inactive-color":"#C0CCDA"},null,8,["modelValue"])]),We])]),(0,a._)("div",De,[(0,a._)("div",Oe,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(e.dzhydetail,((n,o)=>((0,a.wg)(),(0,a.j4)(d,{modelValue:e.radio2,"onUpdate:modelValue":l[10]||(l[10]=l=>e.radio2=l),class:"dzhy-radios",key:o},{default:(0,a.w5)((()=>[(0,a.Wm)(c,{name:n.index,class:"el-radio"},{default:(0,a.w5)((()=>[(0,a.Uk)((0,A.zw)(n.title),1)])),_:2},1032,["name"])])),_:2},1032,["modelValue"])))),128))])])],512),[[B.F8,e.show05]])])}var Be=n(3251),Fe=n(7440),Pe={name:"contents",setup(){const e=(0,Fe.yj)(),l=(0,Be.Z)(),n=(0,b.qj)({contents01:[{title:"修改手机号",desc:"158****4627"},{title:"修改密码",desc:"去修改"},{title:"绑定微信号",desc:"未绑定"}],dzhydetail:[{index:"0",title:"你好"},{index:"1",title:"BOSS，您好"},{index:"2",title:"你好，可以聊聊么"},{index:"3",title:"我对产品经理职位(示例职位)很感兴趣，希望可以深聊，谢谢！"},{index:"4",title:"请问产品经理职位(示例职位)还在招吗，谢谢！"},{index:"5",title:"你好，对贵公司很感兴趣，希望能和您聊聊"},{index:"6",title:"你好，可以聊聊吗？您这个职位我很有兴趣，希望进一步了解"},{index:"7",title:"你好，我想应聘贵公司的产品经理职位(示例职位)，期盼回复，谢谢！"},{index:"8",title:"你好，我对这个职位很有兴趣，如方便能否聊聊？"},{index:"9",title:"请问贵公司的产品经理职位(示例职位)还有空缺么？我个人挺感兴趣的😀"}],yjmdrvalue:!0,syyzdvalue:!0,dbtxvalue:!0,dxtzvalue:!0,ycjlvalue:!0,rcjjrvalue:!0,dzzwvalue:!0,zzhbvalue:!1,dzhyvalue:!0,show01:!1,show02:!1,show03:!1,show04:!1,show05:!1,radio2:0});(0,a.dl)((()=>{switch(e.params.id){case"S001":n.show01=!0,n.show05=n.show02=n.show03=n.show04=!1;break;case"S002":n.show02=!0,n.show01=n.show03=n.show04=n.show05=!1;break;case"S003":n.show03=!0,n.show01=n.show02=n.show04=n.show05=!1;break;case"S004":n.show04=!0,n.show01=n.show02=n.show03=n.show05=!1;break;case"S005":n.show05=!0,n.show01=n.show02=n.show03=n.show04=!1;break;default:n.show01=n.show02=n.show03=n.show04=n.show05=!1;break}}));const o=()=>{n.rcjjrvalue=!n.rcjjrvalue,!0===n.rcjjrvalue?l.emit("changercjjr",!0):l.emit("changercjjr",!1)};return{...(0,b.BK)(n),rcjjrclick:o}}},Ue=n(3169);const Ze=(0,Ue.Z)(Pe,[["render",Ae],["__scopeId","data-v-13429bd0"]]);var He=Ze,Ne={name:"shezhidetail",components:{shezhiheader:i.Z,contents:He},setup(){const e=(0,b.iH)(""),l=(0,Fe.yj)();return(0,a.dl)((()=>{(0,a.Y3)((()=>{switch(l.params.id){case"S001":e.value="账号与绑定";break;case"S002":e.value="通知与提醒";break;case"S003":e.value="隐私设置";break;case"S004":e.value="直直红包设置";break;case"S005":e.value="打招呼语";break;case"S006":e.value="帮助与反馈";break;case"S007":e.value="版本更新";break;case"S008":e.value="切换身份";break}}))})),{title:e}}};const Ye=(0,Ue.Z)(Ne,[["render",o]]);var Ee=Ye},512:function(e,l,n){n.d(l,{$E:function(){return u},NB:function(){return r},OR:function(){return h},aM:function(){return k},d1:function(){return s},d9:function(){return V},eo:function(){return y},iP:function(){return w}});n(9512);var a=n(7065),o=n(4411),i="undefined"!==typeof window;function t(e){return i?requestAnimationFrame(e):-1}function s(e){t((()=>t(e)))}function r(e){const l=(0,a.f3)(e,null);if(l){const e=(0,a.FN)(),{link:n,unlink:o,internalChildren:i}=l;n(e),(0,a.Ah)((()=>o(e)));const t=(0,a.Fl)((()=>i.indexOf(e)));return{parent:l,index:t}}return{parent:null,index:(0,o.iH)(-1)}}function c(e){const l=[],n=e=>{Array.isArray(e)&&e.forEach((e=>{var o;(0,a.lA)(e)&&(l.push(e),(null==(o=e.component)?void 0:o.subTree)&&(l.push(e.component.subTree),n(e.component.subTree.children)),e.children&&n(e.children))}))};return n(e),l}function d(e,l,n){const a=c(e.subTree.children);n.sort(((e,l)=>a.indexOf(e.vnode)-a.indexOf(l.vnode)));const o=n.map((e=>e.proxy));l.sort(((e,l)=>{const n=o.indexOf(e),a=o.indexOf(l);return n-a}))}function u(e){const l=(0,o.qj)([]),n=(0,o.qj)([]),i=(0,a.FN)(),t=o=>{const t=e=>{e.proxy&&(n.push(e),l.push(e.proxy),d(i,l,n))},s=e=>{const a=n.indexOf(e);l.splice(a,1),n.splice(a,1)};(0,a.JJ)(e,Object.assign({link:t,unlink:s,children:l,internalChildren:n},o))};return{children:l,linkChildren:t}}var v,m;function p(e){let l;(0,a.bv)((()=>{e(),(0,a.Y3)((()=>{l=!0}))})),(0,a.dl)((()=>{l&&e()}))}function h(e,l,n={}){if(!i)return;const{target:t=window,passive:s=!1,capture:r=!1}=n;let c;const d=n=>{const a=(0,o.SU)(n);a&&!c&&(a.addEventListener(e,l,{capture:r,passive:s}),c=!0)},u=n=>{const a=(0,o.SU)(n);a&&c&&(a.removeEventListener(e,l,r),c=!1)};(0,a.Ah)((()=>u(t))),(0,a.se)((()=>u(t))),p((()=>d(t))),(0,o.dq)(t)&&(0,a.YP)(t,((e,l)=>{u(l),d(e)}))}function w(){if(!v&&(v=(0,o.iH)(0),m=(0,o.iH)(0),i)){const e=()=>{v.value=window.innerWidth,m.value=window.innerHeight};e(),window.addEventListener("resize",e,{passive:!0}),window.addEventListener("orientationchange",e,{passive:!0})}return{width:v,height:m}}var b,f=/scroll|auto|overlay/i,g=i?window:void 0;function z(e){const l=1;return"HTML"!==e.tagName&&"BODY"!==e.tagName&&e.nodeType===l}function _(e,l=g){let n=e;while(n&&n!==l&&z(n)){const{overflowY:e}=window.getComputedStyle(n);if(f.test(e))return n;n=n.parentNode}return l}function y(e,l=g){const n=(0,o.iH)();return(0,a.bv)((()=>{e.value&&(n.value=_(e.value,l))})),n}function V(){if(!b&&(b=(0,o.iH)("visible"),i)){const e=()=>{b.value=document.hidden?"hidden":"visible"};e(),window.addEventListener("visibilitychange",e)}return b}var C=Symbol("van-field");function k(e){const l=(0,a.f3)(C,null);l&&!l.customValue.value&&(l.customValue.value=e,(0,a.YP)(e,(()=>{l.resetValidation(),l.validateWithTrigger("onChange")})))}},7867:function(e,l,n){n(4257),n(4224),n(4172)},1937:function(e,l,n){n.d(l,{gb:function(){return h}});var a=n(5875),o=n(7065),i=n(2560),t=n(8014),s=n(57),r=n(4106);const[c,d]=(0,i["do"])("loading"),u=Array(12).fill(null).map(((e,l)=>(0,o.Wm)("i",{class:d("line",String(l+1))},null))),v=(0,o.Wm)("svg",{class:d("circular"),viewBox:"25 25 50 50"},[(0,o.Wm)("circle",{cx:"50",cy:"50",r:"20",fill:"none"},null)]),m={size:t.Or,type:(0,t.SQ)("circular"),color:String,vertical:Boolean,textSize:t.Or,textColor:String};var p=(0,o.aZ)({name:c,props:m,setup(e,{slots:l}){const n=(0,o.Fl)((()=>(0,s.l7)({color:e.color},(0,r.Xn)(e.size)))),a=()=>{const a="spinner"===e.type?u:v;return(0,o.Wm)("span",{class:d("spinner",e.type),style:n.value},[l.icon?l.icon():a])},i=()=>{var n;if(l.default)return(0,o.Wm)("span",{class:d("text"),style:{fontSize:(0,r.Nn)(e.textSize),color:null!=(n=e.textColor)?n:e.color}},[l.default()])};return()=>{const{type:l,vertical:n}=e;return(0,o.Wm)("div",{class:d([l,{vertical:n}]),"aria-live":"polite","aria-busy":!0},[a(),i()])}}});const h=(0,a.n)(p)}}]);
//# sourceMappingURL=952.5b695fc6.js.map