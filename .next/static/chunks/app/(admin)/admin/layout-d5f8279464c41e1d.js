(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{9041:function(e,t,s){Promise.resolve().then(s.bind(s,9644))},9644:function(e,t,s){"use strict";s.r(t),s.d(t,{UserContext:function(){return m},default:function(){return f},metadata:function(){return x},useUserContext:function(){return h}});var n=s(7437);s(7349);var r=s(1396),a=s.n(r),l=s(2265),i=()=>{let{logout:e}=h(),[t,s]=(0,l.useState)(!0);return(0,n.jsxs)("div",{id:"sidebar",className:"".concat(t?"":"hide"),children:[(0,n.jsxs)("div",{className:"header",children:[(0,n.jsx)(a(),{href:"/",className:"logo",children:"CNA"}),(0,n.jsx)("i",{onClick:e=>{e.preventDefault(),s(!t)}})]}),(0,n.jsxs)("div",{className:"content",children:[(0,n.jsxs)("nav",{children:[(0,n.jsx)(a(),{href:"/admin",children:"Панель администратора"}),(0,n.jsx)(a(),{href:"/admin/advertisements",children:"Рекламные баннеры"}),(0,n.jsx)(a(),{href:"/admin/posts",children:"Объявления"}),(0,n.jsx)(a(),{href:"/admin/cities",children:"Города"})]}),(0,n.jsx)("div",{className:"logout",onClick:e,children:"Выйти"})]})]})};s(2483);var c=s(4033);s(9699);var o=s(9222);let u={email:"",password:""};var d=()=>{let{login:e}=h(),[t,s]=(0,l.useState)(u),[r,a]=(0,l.useState)(""),i=async()=>{try{let{data:s,status:n}=await o.Z.post("/api/login",t,{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});console.log(s),200===n?e(s):404===n||401===n?a("Неправильно введен логин или пароль"):a("Что-то пошло не так, попробуйте еще раз")}catch(e){console.log(e),a("Что-то пошло не так, попробуйте еще раз")}},c=e=>{e.preventDefault();let n=e.currentTarget.value,r=e.currentTarget.name;s({...t,[r]:n}),a("")};return(0,n.jsx)("div",{id:"login",children:(0,n.jsxs)("form",{onSubmit:e=>{e.preventDefault();let s=null;t.email&&t.password||(s="Заполните объязательные поля"),s?a(s):i()},children:[(0,n.jsx)("div",{className:"title",children:"Войти в систему"}),(0,n.jsxs)("div",{className:"inputs",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"E-mail"}),(0,n.jsx)("input",{type:"text",name:"email",value:t.email,onChange:c})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Пароль"}),(0,n.jsx)("input",{type:"password",name:"password",value:t.password,onChange:c})]}),r&&(0,n.jsx)("div",{className:"error",children:r})]}),(0,n.jsx)("input",{type:"submit",value:"Войти",className:"submit"})]})})};let m=l.createContext(),h=()=>(0,l.useContext)(m),x={title:"CNA - Панель Администратора"};var f=e=>{let{children:t}=e;(0,c.useRouter)();let[s,r]=(0,l.useState)(null);return(0,l.useEffect)(()=>{if(!s&&localStorage.getItem("userdata")){let e=JSON.parse(localStorage.getItem("userdata"));r(e)}},[s]),(0,n.jsx)(m.Provider,{value:{userdata:s,login:e=>{r(e),localStorage.setItem("userdata",JSON.stringify(e))},logout:()=>{r(null),localStorage.removeItem("userdata")}},children:s&&s.user?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i,{}),(0,n.jsx)("main",{children:t})]}):(0,n.jsx)(d,{})})}},2483:function(){},9699:function(){},7349:function(){},1396:function(e,t,s){e.exports=s(6685)},4033:function(e,t,s){e.exports=s(8165)}},function(e){e.O(0,[750,685,971,596,744],function(){return e(e.s=9041)}),_N_E=e.O()}]);