(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[638],{9041:function(e,t,n){Promise.resolve().then(n.bind(n,9644))},9644:function(e,t,n){"use strict";n.r(t),n.d(t,{UserContext:function(){return m},default:function(){return f},metadata:function(){return x},useUserContext:function(){return h}});var s=n(7437);n(7349);var r=n(1396),a=n.n(r),l=()=>{let{logout:e}=h();return(0,s.jsxs)("div",{id:"sidebar",children:[(0,s.jsxs)("nav",{children:[(0,s.jsx)(a(),{href:"/",className:"logo",children:"CNA"}),(0,s.jsx)(a(),{href:"/admin",children:"Панель администратора"}),(0,s.jsx)(a(),{href:"/admin/advertisements",children:"Рекламные баннеры"}),(0,s.jsx)(a(),{href:"/admin/posts",children:"Объявления"}),(0,s.jsx)(a(),{href:"/admin/regions",children:"Районы"})]}),(0,s.jsx)("div",{className:"logout",onClick:e,children:"Выйти"})]})};n(2483);var i=n(4033),o=n(2265);n(9699);var u=n(9222);let c={email:"",password:""};var d=()=>{let{login:e}=h(),[t,n]=(0,o.useState)(c),[r,a]=(0,o.useState)(""),l=async()=>{try{let{data:n,status:s}=await u.Z.post("/api/login",t,{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});console.log(n),200===s?e(n):404===s||401===s?a("Неправильно введен логин или пароль"):a("Что-то пошло не так, попробуйте еще раз")}catch(e){console.log(e),a("Что-то пошло не так, попробуйте еще раз")}},i=e=>{e.preventDefault();let s=e.currentTarget.value,r=e.currentTarget.name;n({...t,[r]:s}),a("")};return(0,s.jsx)("div",{id:"login",children:(0,s.jsxs)("form",{onSubmit:e=>{e.preventDefault();let n=null;t.email&&t.password||(n="Заполните объязательные поля"),n?a(n):l()},children:[(0,s.jsx)("div",{className:"title",children:"Войти в систему"}),(0,s.jsxs)("div",{className:"inputs",children:[(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"E-mail"}),(0,s.jsx)("input",{type:"text",name:"email",value:t.email,onChange:i})]}),(0,s.jsxs)("div",{className:"form-group",children:[(0,s.jsx)("label",{children:"Пароль"}),(0,s.jsx)("input",{type:"password",name:"password",value:t.password,onChange:i})]}),r&&(0,s.jsx)("div",{className:"error",children:r})]}),(0,s.jsx)("input",{type:"submit",value:"Войти",className:"submit"})]})})};let m=o.createContext(),h=()=>(0,o.useContext)(m),x={title:"CNA - Панель Администратора"};var f=e=>{let{children:t}=e;(0,i.useRouter)();let[n,r]=(0,o.useState)(null);return(0,o.useEffect)(()=>{if(!n&&localStorage.getItem("userdata")){let e=JSON.parse(localStorage.getItem("userdata"));r(e)}},[n]),(0,s.jsx)(m.Provider,{value:{userdata:n,login:e=>{r(e),localStorage.setItem("userdata",JSON.stringify(e))},logout:()=>{r(null),localStorage.removeItem("userdata")}},children:n&&n.user?(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(l,{}),(0,s.jsx)("main",{children:t})]}):(0,s.jsx)(d,{})})}},2483:function(){},9699:function(){},7349:function(){},1396:function(e,t,n){e.exports=n(6685)},4033:function(e,t,n){e.exports=n(8165)}},function(e){e.O(0,[750,685,971,596,744],function(){return e(e.s=9041)}),_N_E=e.O()}]);