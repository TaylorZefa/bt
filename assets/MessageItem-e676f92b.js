import{aX as f,_ as w,r as b,a as T,b as q,bq as V,y as F,h as o,o as v,e as y,f as s,g as p,w as g,F as U,Y as j,t as r,z as x,k as D,bp as L,j as h,A as X,P as Y,br as G,a1 as H,a2 as J}from"./index-85da6439.js";const K=e=>{const c=e.type;return delete e.type,f({url:`/message/list/${c}`,method:"get",data:e})},O=e=>{const{id:c,type:l}=e;return delete e.id,delete e.type,f({url:`/message/read/${l}/${c}`,method:"post",data:e})},Q=e=>{const c=e.type;return delete e.type,f({url:`/message/readAll/${c}`,method:"post",data:e})},W=e=>{const{id:c,type:l}=e;return delete e.id,delete e.type,f({url:`/message/${l}/${c}`,method:"delete",data:e})};const k=e=>(H("data-v-32c4fb97"),e=e(),J(),e),Z={key:0},ee={class:"txt-r"},te={class:"events"},se={class:"label"},ne={class:"content"},oe={class:"summary"},ae={class:"date"},ce={class:"extra text"},le={class:"actions"},ie=k(()=>s("i",{class:"el-icon-edit"},null,-1)),de=k(()=>s("i",{class:"el-icon-delete"},null,-1)),pe={class:"flex-center"},re={key:1},ue={class:"nodata txt-c"},_e={__name:"MessageItem",props:{type:String},setup(e){const c=e,l=b([]),{t:n}=T(),i=q({pageNum:1,pageSize:20}),S=b(0),m=V(c,"type"),u=()=>{const{pageNum:a,pageSize:d}=i;K({type:m.value,pageNum:a,pageSize:d}).then(_=>{l.value=_.data.content||[],S.value=_.data.totalSize||0}).catch(()=>{l.value=[]})},z=a=>{O({type:m.value,id:a}).then(()=>{x.success(n("tips.success")),u()})},C=()=>{Q({type:m.value}).then(()=>{x.success(n("tips.success")),u()})},I=a=>{X.confirm(n("tips.deleteConfirm"),n("tips.deleteTitle"),{confirmButtonTetx:n("action.confirm"),cancelmButtonTetx:n("action.cancel"),type:"warning",draggable:!0}).then(()=>{W({type:m.value,id:a}).then(()=>{x.success(n("tips.success")),u()})})};function M(a){i.pageSize=a,i.pageNum=1,u()}function N(a){i.pageNum=a,u()}return u(),(a,d)=>{const _=D,$=F("comment"),B=Y,E=G,P=L;return o(l).length?(v(),y("div",Z,[s("div",ee,[p(_,{plain:"",type:"primary",onClick:d[0]||(d[0]=t=>C())},{default:g(()=>[h(r(o(n)("action.markedAllRead")),1)]),_:1})]),s("div",te,[(v(!0),y(U,null,j(o(l),(t,R)=>(v(),y("div",{class:"event",key:R},[s("div",se,[p(E,{"is-dot":!t.isRead},{default:g(()=>[p(B,null,{default:g(()=>[p($)]),_:1})]),_:2},1032,["is-dot"])]),s("div",ne,[s("div",oe,[h(r(t.title)+" ",1),s("div",ae,r(t.date),1)]),s("div",ce,r(t.content),1),s("div",le,[p(_,{type:"text",disabled:t.isRead,class:"action a-read",onClick:A=>z(t.id)},{default:g(()=>[ie,h(" "+r(o(n)("action.markedRead")),1)]),_:2},1032,["disabled","onClick"]),p(_,{type:"text",class:"action a-delete",onClick:A=>I(t.id)},{default:g(()=>[de,h(" "+r(o(n)("action.delete")),1)]),_:2},1032,["onClick"])])])]))),128))]),s("div",pe,[p(P,{currentPage:o(i).pageNum,"onUpdate:currentPage":d[1]||(d[1]=t=>o(i).pageNum=t),"page-size":o(i).pageSize,"onUpdate:pageSize":d[2]||(d[2]=t=>o(i).pageSize=t),total:o(S)||0,layout:"prev, pager, next",onSizeChange:M,onCurrentChange:N},null,8,["currentPage","page-size","total"])])])):(v(),y("div",re,[s("div",ue,r(o(n)("nodata")),1)]))}}},me=w(_e,[["__scopeId","data-v-32c4fb97"]]);export{me as default};
