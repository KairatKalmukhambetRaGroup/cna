(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[917],{8016:function(e,s,a){Promise.resolve().then(a.bind(a,3092))},3092:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return u}});var n=a(7437),l=a(73),t=a(9222);a(4421);var i=a(1396),r=a.n(i),c=a(2265);let d={name:"",phone:"",whatsapp:"",telegram:"",email:"",address:"",description:"",category:""};var o=e=>{let{id:s}=e,[a,i]=(0,c.useState)(d),[o,u]=(0,c.useState)(null),[m,x]=(0,c.useState)(null),[p,j]=(0,c.useState)(null),v=async()=>{let{data:e}=await t.Z.get("/api/phonebook/category/".concat(s),{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});u(e.category),x(e.numbers)};(0,c.useEffect)(()=>{s&&!o&&v()},[s]);let N=e=>{i(e)},f=async e=>{if(e.preventDefault(),p){x(null);let{data:e}=await t.Z.delete("/api/phonebook/".concat(p,"?category=").concat(s),{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});j(null),x(e)}},g=e=>{e.preventDefault(),i(d)},b=async e=>{e.preventDefault();let n={...a,category:s};if(a._id){let{data:e}=await t.Z.patch("/api/phonebook",n,{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});x(e)}else{let{data:e}=await t.Z.post("/api/phonebook",n,{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});x(e)}g(e)};if(s)return(0,n.jsxs)("div",{id:"categoryNumbers",children:[o&&(0,n.jsxs)("div",{className:"heading",children:["Справочник - ",o.name]}),(0,n.jsx)(h,{formData:a,setFormData:i,clear:g,handleSubmit:b}),p&&(0,n.jsx)("div",{className:"deleteModal",children:(0,n.jsxs)("div",{className:"modal",children:[(0,n.jsx)("div",{className:"h1",children:"Удалить Контакт"}),(0,n.jsx)("div",{className:"p",children:"Вы уверены что хотите удалить этот контакт?  После удаления его будет невозможно востановить!"}),(0,n.jsxs)("div",{className:"btns",children:[(0,n.jsx)("div",{className:"btn delete",onClick:f,children:"Удалить"}),(0,n.jsx)("div",{className:"btn",onClick:e=>{e.preventDefault(),j(null)},children:"Отмена"})]})]})}),(0,n.jsxs)("table",{className:"phonenumbers",children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:"№"}),(0,n.jsx)("th",{children:"Имя"}),(0,n.jsx)("th",{children:"Телефон"}),(0,n.jsx)("th",{children:"Действие"})]})}),(0,n.jsx)("tbody",{children:m?m.length>0?m.map((e,s)=>(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:Number(s)+1}),(0,n.jsx)("td",{children:e.name}),(0,n.jsx)("td",{children:e.phone}),(0,n.jsxs)("td",{className:"actions",children:[(0,n.jsx)(r(),{className:"action",href:"/admin/phonebook/".concat(e._id),children:"Подробнее"}),(0,n.jsx)("div",{className:"action",onClick:s=>{s.preventDefault(),N(e)},children:"Изменить"}),(0,n.jsx)("div",{className:"action delete",onClick:s=>{s.preventDefault(),j(e._id)},children:"Удалить"})]})]},s)):(0,n.jsx)("tr",{children:(0,n.jsx)("td",{className:"center",colSpan:4,children:" Нет категории "})}):(0,n.jsx)("tr",{children:(0,n.jsxs)("td",{className:"center",colSpan:4,children:[" ",(0,n.jsx)(l.Z,{})," "]})})})]})]})};let h=e=>{let{formData:s,setFormData:a,clear:l,handleSubmit:t}=e,i=e=>{let{name:n,value:l}=e.currentTarget;a({...s,[n]:l})};return(0,n.jsxs)("form",{id:"phoneBookForm",className:s._id?"edit":"",onSubmit:t,children:[(0,n.jsx)("div",{className:"heading",children:s._id?"Изменить Контакт":"Добавить Контакт"}),(0,n.jsxs)("div",{className:"inputs",children:[(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Имя Фамилия"}),(0,n.jsx)("input",{type:"text",name:"name",required:!0,value:s.name,onChange:i})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Номер телефона"}),(0,n.jsx)("input",{type:"text",name:"phone",required:!0,value:s.phone,onChange:i})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Э-почта"}),(0,n.jsx)("input",{type:"email",name:"email",value:s.email,onChange:i})]})]}),(0,n.jsxs)("div",{className:"row",children:[(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Адрес"}),(0,n.jsx)("input",{type:"text",name:"address",value:s.address,onChange:i})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Whatsapp"}),(0,n.jsxs)("div",{className:"input",children:[(0,n.jsx)("div",{className:"prefix",children:"wa.me/"}),(0,n.jsx)("input",{type:"text",name:"whatsapp",value:s.whatsapp,onChange:i,placeholder:"77771234567"})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Telegram"}),(0,n.jsxs)("div",{className:"input",children:[(0,n.jsx)("div",{className:"prefix",children:"t.me/"}),(0,n.jsx)("input",{type:"email",name:"telegram",value:s.telegram,onChange:i,placeholder:"username"})]})]})]}),(0,n.jsxs)("div",{className:"form-group",children:[(0,n.jsx)("label",{children:"Описание"}),(0,n.jsx)("textarea",{rows:"3",name:"description",value:s.description,onChange:i})]})]}),(0,n.jsxs)("div",{className:"bottom",children:[(0,n.jsx)("div",{className:"btn clear",onClick:l,children:s._id?"Отменить":"Очистить"}),(0,n.jsx)("input",{className:"btn save",type:"submit",value:"".concat(s._id?"Изменить":"Добавить")})]})]})};var u=e=>{let{params:s}=e,{id:a}=s;return(0,n.jsx)(o,{id:a})}},73:function(e,s,a){"use strict";var n=a(7437);a(3733),s.Z=e=>{let{small:s=!1}=e;return(0,n.jsx)("div",{className:"loading ".concat(s?"small":""),children:(0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})})}},4421:function(){},3733:function(){},1396:function(e,s,a){e.exports=a(6685)}},function(e){e.O(0,[750,685,971,596,744],function(){return e(e.s=8016)}),_N_E=e.O()}]);