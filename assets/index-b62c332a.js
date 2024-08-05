import{C as ie,D as ke,G as me,H as be,I as G,m as Y,J as ge,r as ve,c as b,K as we,L as Ce,p as _e,o as f,e as x,M as oe,h as W,N as F,w as k,O as xe,P as Le,Q as ne,R as te,S as ce,T as ue,j as le,t as Z,U as Me,f as d,s as he,n as Ee,x as Ae,V as ze,_ as Ne,B as j,z as X,g as S,W as Ve,X as Pe,F as Q,Y as ee,E as Te,k as Fe,Z as We,$ as Re,a0 as Be,a1 as De,a2 as qe}from"./index-85da6439.js";import{a as $e,E as Oe}from"./el-form-item-9d327681.js";const He=ie({size:{type:[Number,String],values:ke,default:"",validator:t=>me(t)},shape:{type:String,values:["circle","square"],default:"circle"},icon:{type:be},src:{type:String,default:""},alt:String,srcSet:String,fit:{type:G(String),default:"cover"}}),Ue={error:t=>t instanceof Event},je=["src","alt","srcset"],Xe=Y({name:"ElAvatar"}),Ge=Y({...Xe,props:He,emits:Ue,setup(t,{emit:e}){const l=t,r=ge("avatar"),o=ve(!1),c=b(()=>{const{size:i,icon:w,shape:g}=l,p=[r.b()];return we(i)&&p.push(r.m(i)),w&&p.push(r.m("icon")),g&&p.push(r.m(g)),p}),u=b(()=>{const{size:i}=l;return me(i)?r.cssVarBlock({size:Ce(i)||""}):void 0}),h=b(()=>({objectFit:l.fit}));_e(()=>l.src,()=>o.value=!1);function I(i){o.value=!0,e("error",i)}return(i,w)=>(f(),x("span",{class:te(W(c)),style:oe(W(u))},[(i.src||i.srcSet)&&!o.value?(f(),x("img",{key:0,src:i.src,alt:i.alt,srcset:i.srcSet,style:oe(W(h)),onError:I},null,44,je)):i.icon?(f(),F(W(Le),{key:1},{default:k(()=>[(f(),F(xe(i.icon)))]),_:1})):ne(i.$slots,"default",{key:2})],6))}});var Ye=ce(Ge,[["__file","/home/runner/work/element-plus/element-plus/packages/components/avatar/src/avatar.vue"]]);const Ke=ue(Ye),Je=ie({header:{type:String,default:""},bodyStyle:{type:G([String,Object,Array]),default:""},bodyClass:String,shadow:{type:String,values:["always","hover","never"],default:"always"}}),Ze=Y({name:"ElCard"}),Qe=Y({...Ze,props:Je,setup(t){const e=ge("card");return(l,r)=>(f(),x("div",{class:te([W(e).b(),W(e).is(`${l.shadow}-shadow`)])},[l.$slots.header||l.header?(f(),x("div",{key:0,class:te(W(e).e("header"))},[ne(l.$slots,"header",{},()=>[le(Z(l.header),1)])],2)):Me("v-if",!0),d("div",{class:te([W(e).e("body"),l.bodyClass]),style:oe(l.bodyStyle)},[ne(l.$slots,"default")],6)],2))}});var et=ce(Qe,[["__file","/home/runner/work/element-plus/element-plus/packages/components/card/src/card.vue"]]);const tt=ue(et),ot=ie({zIndex:{type:Number,default:9},rotate:{type:Number,default:-22},width:Number,height:Number,image:String,content:{type:G([String,Array]),default:"Element Plus"},font:{type:G(Object)},gap:{type:G(Array),default:()=>[100,100]},offset:{type:G(Array)}});function nt(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}function st(t){return Object.keys(t).map(e=>`${nt(e)}: ${t[e]};`).join(" ")}function at(){return window.devicePixelRatio||1}const rt=(t,e)=>{let l=!1;return t.removedNodes.length&&e&&(l=Array.from(t.removedNodes).includes(e)),t.type==="attributes"&&t.target===e&&(l=!0),l},ye=3;function re(t,e,l=1){const r=document.createElement("canvas"),o=r.getContext("2d"),c=t*l,u=e*l;return r.setAttribute("width",`${c}px`),r.setAttribute("height",`${u}px`),o.save(),[o,r,c,u]}function lt(){function t(e,l,r,o,c,u,h,I){const[i,w,g,p]=re(o,c,r);if(e instanceof HTMLImageElement)i.drawImage(e,0,0,g,p);else{const{color:P,fontSize:T,fontStyle:H,fontWeight:U,fontFamily:Ie}=u,de=Number(T)*r;i.font=`${H} normal ${U} ${de}px/${c}px ${Ie}`,i.fillStyle=P,i.textAlign="center",i.textBaseline="top";const pe=Array.isArray(e)?e:[e];pe==null||pe.forEach((fe,Se)=>{i.fillText(fe??"",g/2,Se*(de+ye*r))})}const y=Math.PI/180*Number(l),E=Math.max(o,c),[v,s,L]=re(E,E,r);v.translate(L/2,L/2),v.rotate(y),g>0&&p>0&&v.drawImage(w,-g/2,-p/2);function B(P,T){const H=P*Math.cos(y)-T*Math.sin(y),U=P*Math.sin(y)+T*Math.cos(y);return[H,U]}let N=0,K=0,$=0,D=0;const J=g/2,n=p/2;[[0-J,0-n],[0+J,0-n],[0+J,0+n],[0-J,0+n]].forEach(([P,T])=>{const[H,U]=B(P,T);N=Math.min(N,H),K=Math.max(K,H),$=Math.min($,U),D=Math.max(D,U)});const _=N+L/2,O=$+L/2,C=K-N,M=D-$,V=h*r,A=I*r,z=(C+V)*2,m=M+A,[q,se]=re(z,m);function ae(P=0,T=0){q.drawImage(s,_,O,C,M,P,T,C,M)}return ae(),ae(C+V,-M/2-A/2),ae(C+V,+M/2+A/2),[se.toDataURL(),z/r,m/r]}return t}const it=Y({name:"ElWatermark"}),ct=Y({...it,props:ot,setup(t){const e=t,l={position:"relative"},r=b(()=>{var n,a;return(a=(n=e.font)==null?void 0:n.color)!=null?a:"rgba(0,0,0,.15)"}),o=b(()=>{var n,a;return(a=(n=e.font)==null?void 0:n.fontSize)!=null?a:16}),c=b(()=>{var n,a;return(a=(n=e.font)==null?void 0:n.fontWeight)!=null?a:"normal"}),u=b(()=>{var n,a;return(a=(n=e.font)==null?void 0:n.fontStyle)!=null?a:"normal"}),h=b(()=>{var n,a;return(a=(n=e.font)==null?void 0:n.fontFamily)!=null?a:"sans-serif"}),I=b(()=>e.gap[0]),i=b(()=>e.gap[1]),w=b(()=>I.value/2),g=b(()=>i.value/2),p=b(()=>{var n,a;return(a=(n=e.offset)==null?void 0:n[0])!=null?a:w.value}),y=b(()=>{var n,a;return(a=(n=e.offset)==null?void 0:n[1])!=null?a:g.value}),E=()=>{const n={zIndex:e.zIndex,position:"absolute",left:0,top:0,width:"100%",height:"100%",pointerEvents:"none",backgroundRepeat:"repeat"};let a=p.value-w.value,_=y.value-g.value;return a>0&&(n.left=`${a}px`,n.width=`calc(100% - ${a}px)`,a=0),_>0&&(n.top=`${_}px`,n.height=`calc(100% - ${_}px)`,_=0),n.backgroundPosition=`${a}px ${_}px`,n},v=he(null),s=he(),L=ve(!1),B=()=>{s.value&&(s.value.remove(),s.value=void 0)},N=(n,a)=>{var _;v.value&&s.value&&(L.value=!0,s.value.setAttribute("style",st({...E(),backgroundImage:`url('${n}')`,backgroundSize:`${Math.floor(a)}px`})),(_=v.value)==null||_.append(s.value),setTimeout(()=>{L.value=!1}))},K=n=>{let a=120,_=64;const O=e.image,C=e.content,M=e.width,V=e.height;if(!O&&n.measureText){n.font=`${Number(o.value)}px ${h.value}`;const A=Array.isArray(C)?C:[C],z=A.map(m=>{const q=n.measureText(m);return[q.width,q.fontBoundingBoxAscent+q.fontBoundingBoxDescent]});a=Math.ceil(Math.max(...z.map(m=>m[0]))),_=Math.ceil(Math.max(...z.map(m=>m[1])))*A.length+(A.length-1)*ye}return[M??a,V??_]},$=lt(),D=()=>{const a=document.createElement("canvas").getContext("2d"),_=e.image,O=e.content,C=e.rotate;if(a){s.value||(s.value=document.createElement("div"));const M=at(),[V,A]=K(a),z=m=>{const[q,se]=$(m||"",C,M,V,A,{color:r.value,fontSize:o.value,fontStyle:u.value,fontWeight:c.value,fontFamily:h.value},I.value,i.value);N(q,se)};if(_){const m=new Image;m.onload=()=>{z(m)},m.onerror=()=>{z(O)},m.crossOrigin="anonymous",m.referrerPolicy="no-referrer",m.src=_}else z(O)}};return Ee(()=>{D()}),_e(()=>e,()=>{D()},{deep:!0,flush:"post"}),Ae(()=>{B()}),ze(v,n=>{L.value||n.forEach(a=>{rt(a,s.value)&&(B(),D())})},{attributes:!0}),(n,a)=>(f(),x("div",{ref_key:"containerRef",ref:v,style:oe([l])},[ne(n.$slots,"default")],4))}});var ut=ce(ct,[["__file","/home/runner/work/element-plus/element-plus/packages/components/watermark/src/watermark.vue"]]);const dt=ue(ut);const pt={data(){return{isLoggedIn:!1,loginForm:{username:"GSK22141204xx",password:"Aa000000"},token:"",studentInfo:{},courseName:"",records:[],courseList:[],chapterList:[],excerptsList:[],videoList:[],course:[{classId:"classId1"},{classId:"classId2"}],selectedIndex:0,learnItemId:"itemId",ssoId:"ssoId",videoMilSeconds:1200,videoLength:0,learnItemId:"",statisfied:"",loading:!1}},mounted(){this.queryToken()},methods:{queryToken(){this.token=window.localStorage.getItem("token"),this.token&&(this.isLoggedIn=!0,this.getStudentInfo(),this.queryLearnCourse())},async login(){try{const t=`/api/xinwei-auth/oauth2/token?client_id=xinwei&client_secret=123456&grant_type=password&scope=all&username=${this.loginForm.username}&password=${this.loginForm.password}&platform_type=XINWEI_HOME&type=SSO&captchaVerification`,e=await j.post(t,{});e.data.code==200?(this.isLoggedIn=!0,X.success("登录成功"),this.token=e.data.data.access_token,window.localStorage.setItem("token",this.token),this.getStudentInfo(),this.queryLearnCourse()):X.error("Invalid username or password")}catch(t){console.error(t),X.error("An error occurred during login")}},logout(){this.isLoggedIn=!1,this.loginForm.username="",this.loginForm.password="",localStorage.removeItem("token"),X.success("退出成功")},async getStudentInfo(){try{if(!this.token){console.error("Token not found");return}const t="/api/xinwei-auth/user/profile",e={Authorization:this.token},l=await j.get(t,{headers:e});this.studentInfo=l.data.data.userDetail,console.log(JSON.stringify(l.data.code))}catch(t){X.success("登录信息已过期，请重新登录"),this.logout(),console.error("Error fetching student info:",t)}},async queryLearnCourse(){if(!this.token){console.error("Token not found");return}const t="/api/learning-service/student/course/queryLearnCoursePage",e={Authorization:this.token},l={courseName:"",pageNo:1,pageSize:10,teachMode:["3"],tenantId:"90003"};try{const r=await j.post(t,l,{headers:e});this.records=r.data.data.records}catch(r){console.error("查询学习课程错误:",r)}},queryCourseName(t){console.log(t),this.getChapterData(t),this.learnItemId=t},async getChapterData(t){if(!this.token){console.error("Token not found");return}const e="/api/learning-service/admin/studentLearning/getChapterData",l={Authorization:this.token},r={teachingClassId:t};try{const o=await j.post(e,r,{headers:l});this.courseList=o.data.data;const c=this.extractIdAndTitle(this.courseList);this.chapterList=c.map(u=>({id:u.id,title:u.title})),this.excerptsList=c.flatMap(u=>u.children.map(h=>({id:h.id,title:h.title}))),this.videoList=c.flatMap(u=>u.children.flatMap(h=>h.children.map(I=>({id:I.id,title:I.title}))))}catch(o){console.error("查询学习课程错误:",o)}},extractIdAndTitle(t){return t.map(e=>({id:e.id,title:e.title,children:e.children?this.extractIdAndTitle(e.children):[]}))},excerptsChange(t){console.log(t),this.getSingleChapterData(t)},async getSingleChapterData(t){const e=`api/learning-service/admin/studentLearning/getSingleChapterData/${t}`,l={Authorization:this.token};try{const r=await j.post(e,{},{headers:l});this.videoLength=r.data.data.mediaInfo.videoLength,this.statisfied=r.data.data.learnProcessInfo.statisfied,r.data.code===200?console.log("进入学习成功"):console.log("进入学习失败")}catch(r){console.error("查询学习课程错误:",r)}this.videoLearnProcessReport(t)},videoChange(t){console.log("videoChange--"+t),this.videoLearnProcessReport(t)},async videoLearnProcessReport(t){const e="/api/learning-service/admin/studentLearning/videoLearnProcessReport",l=this.token,r=t,o=this.ssoId;let{statisfied:c,videoMilSeconds:u,videoLength:h}=this;const I=200,i=30,w=Math.ceil(h/i);let g=0,p=0,y=0,E=0;this.loading=!0;try{for(let v=0;v<w;v++){new Promise(N=>setTimeout(N,v*I)),y+=i,g+=i,p+=i;const s={endPosition:p,itemId:r,platform:"web",playPosition:g,playbackRate:1,recordCount:0,startPosition:y,teachingClassId:this.learnItemId,teachingCourseId:"e15a870f3ea12ac69b348c4a910d9346",userSsoId:o,videoMilSeconds:u},L={"Content-Type":"application/json",Authorization:l},B=await j.post(e,s,{headers:L});if(B.data.code===200&&B.data.data===2){X.success("刷课成功");break}E++}this.loading=!1}catch(v){console.error("Error querying learn course:",v)}}}},R=t=>(De("data-v-a66da950"),t=t(),qe(),t),ft={id:"app"},ht=R(()=>d("p",null,"默认账号：GSK22141204xx",-1)),mt=R(()=>d("p",null,"默认密码：Aa000000",-1)),gt={key:0,class:"login-container"},vt=R(()=>d("h2",null,"芯位登录",-1)),_t={key:1,class:"main-content"},yt=R(()=>d("h2",null,"个人信息",-1)),It={class:"box"},St=R(()=>d("span",null,"课程选择：",-1)),kt=R(()=>d("span",null,"章节选择：",-1)),bt=R(()=>d("span",null,"节选选择：",-1)),wt=R(()=>d("span",null,"视频选择：",-1));function Ct(t,e,l,r,o,c){const u=Te,h=$e,I=Fe,i=Oe,w=tt,g=Ke,p=We,y=Re,E=dt,v=Be;return f(),F(E,{font:t.font,content:["开源学习","压测死妈"]},{default:k(()=>[d("div",ft,[ht,mt,o.isLoggedIn?(f(),x("div",_t,[Pe((f(),F(w,{"element-loading-text":"刷课中..."},{default:k(()=>[yt,d("p",null,"欢迎, "+Z(o.studentInfo.nickName)+" !",1),S(g,{size:75,src:o.studentInfo.avatar},null,8,["src"]),d("p",null,[d("span",null,"用户名："+Z(o.studentInfo.userNumber)+"  ",1),d("span",null,"手机号："+Z(o.studentInfo.mobile)+"  ",1),d("span",null,"身份："+Z(o.studentInfo.idType),1)]),d("div",It,[d("div",null,[St,S(y,{modelValue:o.records.courseName,"onUpdate:modelValue":e[2]||(e[2]=s=>o.records.courseName=s),clearable:"",placeholder:"Select",style:{width:"240px"},onChange:c.queryCourseName},{default:k(()=>[(f(!0),x(Q,null,ee(o.records,s=>(f(),F(p,{key:s.classId,label:s.courseName,value:s.classId},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),d("div",null,[kt,S(y,{modelValue:o.chapterList.title,"onUpdate:modelValue":e[3]||(e[3]=s=>o.chapterList.title=s),clearable:"",placeholder:"Select",style:{width:"240px"}},{default:k(()=>[(f(!0),x(Q,null,ee(o.chapterList,s=>(f(),F(p,{key:s.id,label:s.title,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),d("div",null,[bt,S(y,{modelValue:o.excerptsList.title,"onUpdate:modelValue":e[4]||(e[4]=s=>o.excerptsList.title=s),clearable:"",placeholder:"Select",style:{width:"240px"},onChange:c.excerptsChange},{default:k(()=>[(f(!0),x(Q,null,ee(o.excerptsList,s=>(f(),F(p,{key:s.id,label:s.title,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])]),d("div",null,[wt,S(y,{modelValue:o.videoList.title,"onUpdate:modelValue":e[5]||(e[5]=s=>o.videoList.title=s),clearable:"",placeholder:"Select",style:{width:"240px"},onChange:c.excerptsChange},{default:k(()=>[(f(!0),x(Q,null,ee(o.videoList,s=>(f(),F(p,{key:s.id,label:s.title,value:s.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue","onChange"])])]),S(I,{type:"primary",onClick:c.logout},{default:k(()=>[le("退出")]),_:1},8,["onClick"])]),_:1})),[[v,o.loading]])])):(f(),x("div",gt,[S(w,{class:"login-card"},{default:k(()=>[vt,S(i,{onSubmit:Ve(c.login,["prevent"]),model:o.loginForm,ref:"loginForm"},{default:k(()=>[S(h,{label:"账号",prop:"username"},{default:k(()=>[S(u,{modelValue:o.loginForm.username,"onUpdate:modelValue":e[0]||(e[0]=s=>o.loginForm.username=s)},null,8,["modelValue"])]),_:1}),S(h,{label:"密码",prop:"password"},{default:k(()=>[S(u,{type:"password",modelValue:o.loginForm.password,"onUpdate:modelValue":e[1]||(e[1]=s=>o.loginForm.password=s)},null,8,["modelValue"])]),_:1}),S(h,null,{default:k(()=>[S(I,{type:"primary",onClick:c.login,size:"default"},{default:k(()=>[le("登录")]),_:1},8,["onClick"])]),_:1})]),_:1},8,["onSubmit","model"])]),_:1})]))])]),_:1},8,["font"])}const Mt=Ne(pt,[["render",Ct],["__scopeId","data-v-a66da950"]]);export{Mt as default};