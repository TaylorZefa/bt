import{aX as t}from"./index-85da6439.js";const p=()=>t({url:"app/dept/listTree",method:"get"}),o=e=>t({url:"app/dept/listOtherTree",method:"get",data:e}),d=e=>t({url:"app/dept/save",method:"post",data:e}),u=e=>{const{id:r}=e;return delete e.id,t({url:`app/dept/update/${r}`,method:"post",data:e})},a=e=>t({url:"app/dept/delete",method:"post",data:e});export{o as a,p as l,a as r,d as s,u};
