(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[295],{9378:function(e,s,i){Promise.resolve().then(i.bind(i,721))},721:function(e,s,i){"use strict";i.r(s);var n=i(7437),l=i(9222),a=i(2265);i(3589);var t=i(73),c=i(1396),d=i.n(c);i(5423),s.default=()=>{let[e,s]=(0,a.useState)(null),i=async()=>{let{data:e}=await l.Z.get("/api/advertisements",{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});s(e)},[c,r]=(0,a.useState)(null);(0,a.useEffect)(()=>{e||i()},[e]);let o=async e=>{if(e.preventDefault(),c){let{data:e}=await l.Z.delete("/api/advertisements/".concat(c),{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});r(null),s(null),s(e)}};return(0,n.jsxs)("div",{id:"ads",children:[(0,n.jsxs)("div",{className:"heading",children:["Рекламные баннеры",(0,n.jsx)(d(),{href:"/admin/advertisements/new",className:"new-ad",children:"Добавить баннер"})]}),c&&(0,n.jsx)("div",{className:"deleteModal",children:(0,n.jsxs)("div",{className:"modal",children:[(0,n.jsx)("div",{className:"h1",children:"Удалить рекламный баннер"}),(0,n.jsx)("div",{className:"p",children:"Вы уверены что хотите удалить этот баннер?  После удаления его будет невозможно востановить!"}),(0,n.jsxs)("div",{className:"btns",children:[(0,n.jsx)("div",{className:"btn delete",onClick:o,children:"Удалить"}),(0,n.jsx)("div",{className:"btn",onClick:e=>{e.preventDefault(),r(null)},children:"Отмена"})]})]})}),(0,n.jsx)("div",{className:"content",children:e?e.length>0?e.map((e,s)=>(0,n.jsxs)("div",{className:"ad",children:[(0,n.jsx)("div",{className:"image",children:e.image&&(0,n.jsx)("img",{src:"https://cna.kz/public/uploads/".concat(e.image),alt:""})}),(0,n.jsxs)("div",{className:"info",children:[(0,n.jsx)("div",{className:"title",children:e.name}),e.description&&(0,n.jsx)("div",{className:"description",children:e.description})]}),(0,n.jsxs)("div",{className:"actions",children:[(0,n.jsx)(d(),{href:"/admin/advertisements/".concat(e._id),className:"btn edit",children:"Изменить"}),(0,n.jsx)("div",{className:"btn delete",onClick:s=>{s.preventDefault(),r(e._id)},children:"Удалить"})]})]},s)):(0,n.jsx)("div",{className:"none",children:"NONE"}):(0,n.jsx)(t.Z,{})})]})}},73:function(e,s,i){"use strict";var n=i(7437);i(3733),s.Z=e=>{let{small:s=!1}=e;return(0,n.jsx)("div",{className:"loading ".concat(s?"small":""),children:(0,n.jsxs)("div",{className:"lds-roller",children:[(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{}),(0,n.jsx)("div",{})]})})}},3589:function(){},3733:function(){},1396:function(e,s,i){e.exports=i(6685)}},function(e){e.O(0,[750,685,423,971,596,744],function(){return e(e.s=9378)}),_N_E=e.O()}]);