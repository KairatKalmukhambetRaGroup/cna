(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[504],{7449:function(e,a,l){Promise.resolve().then(l.bind(l,2521))},2521:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return x}});var s=l(7437),t=l(9222),r=l(2265);l(201),l(1395);var n=e=>{let{images:a=null}=e,[l,t]=(0,r.useState)(0),[n,i]=(0,r.useState)(null),o=e=>{t(e)};if(a&&0!=a.length)return(0,s.jsxs)("div",{id:"slideshow",children:[(0,s.jsx)(c,{images:a,current:n,setCurrent:i}),(0,s.jsxs)("div",{className:"current",children:[a&&a.length>0&&(0,s.jsx)("img",{src:"https://cna.kz/public/uploads/".concat(a[l]),alt:"currentimage",onClick:e=>{e.preventDefault(),i(l)}}),(0,s.jsx)("i",{className:"crnt-left",onClick:e=>{e.preventDefault();let s=l-1;s<0&&(s=a.length-1),t(s)}}),(0,s.jsx)("i",{className:"crnt-right",onClick:e=>{e.preventDefault();let s=l+1;s>=a.length&&(s=0),t(s)}}),a&&a.length>0&&(0,s.jsxs)("div",{className:"crnt-count",children:[Number(l)+1," / ",Number(a.length)]})]}),a&&a.length>0&&(0,s.jsx)("div",{className:"previews",children:a.map((e,a)=>(0,s.jsx)("div",{className:"preview ".concat(l===a?"active":""),onMouseEnter:e=>{e.preventDefault(),o(a)},onClick:e=>{e.preventDefault(),i(a)},children:(0,s.jsx)("img",{src:"https://cna.kz/public/uploads/".concat(e),alt:"imgpreview-".concat(a)})},a))})]})};let c=e=>{let{images:a,current:l,setCurrent:t}=e;if(null!==l&&a)return(0,s.jsx)("div",{id:"modalSlideshow",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsxs)("div",{className:"count",children:[Number(l)+1," / ",Number(a.length)]}),(0,s.jsx)("i",{className:"close",onClick:e=>{e.preventDefault(),t(null)}}),(0,s.jsx)("i",{className:"prev",onClick:e=>{e.preventDefault();let s=l-1;s<0&&(s=a.length-1),t(s)}}),(0,s.jsx)("img",{src:"https://cna.kz/public/uploads/".concat(a[l]),alt:""}),(0,s.jsx)("i",{className:"next",onClick:e=>{e.preventDefault();let s=l+1;s>=a.length&&(s=0),t(s)}})]})})};var i=l(5330),o=l.n(i),u=l(8758),d=e=>{let{post:a}=e;return a&&(0,s.jsx)("div",{id:"post",children:(0,s.jsx)("div",{className:"container",children:(0,s.jsxs)("div",{className:"content",children:[(0,s.jsx)("div",{className:"title",children:(0,u.i2)(a)}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsx)("div",{className:"sidebar",children:(0,s.jsxs)("div",{className:"sidebar-content",children:[(0,s.jsxs)("div",{className:"price",children:[(0,u.eS)(a.price)," 〒"]}),(0,s.jsxs)("div",{className:"parameters",children:[a.city&&(0,s.jsx)(m,{label:"Город",value:a.city.name}),a.region&&(0,s.jsx)(m,{label:"Район",value:a.region.name}),a.year&&(0,s.jsx)(m,{label:"Год постройки",value:a.year}),a.material&&(0,s.jsx)(m,{label:"Тип дома",value:a.material}),!!a.floors&&!a.floor&&(0,s.jsx)(m,{label:"Этажей",value:a.floors}),!!a.floor&&(0,s.jsx)(m,{label:"Этаж",value:"".concat(a.floor).concat(a.floors?" из "+a.floors:"")}),!!a.state&&(0,s.jsx)(m,{label:"Состояние",value:a.state}),a.area&&a.area.total&&(0,s.jsx)(m,{label:(0,s.jsxs)("span",{children:["Площадь, м",(0,s.jsx)("sup",{children:"2"})]}),value:(0,s.jsxs)(s.Fragment,{children:[a.area.total," м",(0,s.jsx)("sup",{children:"2"})]})}),a.bathroom&&(0,s.jsx)(m,{label:"Санузел",value:a.bathroom}),a.commercial&&a.commercial.placement&&(0,s.jsx)(m,{label:"Размещение объекта",value:a.commercial.placement})]}),a.realtor&&(a.realtor.name||a.realtorPhone)&&(0,s.jsxs)("div",{className:"realtor",children:[(0,s.jsx)("div",{className:"name",children:a.realtor.name}),(0,s.jsx)("div",{className:"agent",children:"Специалист"}),(0,s.jsxs)("a",{href:"tel:".concat(a.realtor.phone.replace(" ","")),target:"_blank",className:"btn",children:[(0,s.jsx)("i",{}),a.realtor.phone]})]})]})}),a.realtor&&a.realtor.phone&&(0,s.jsx)("a",{className:"mobile-phone",target:"_blank",href:"tel:".concat(a.realtor.phone),children:"Позвонить"}),(0,s.jsxs)("div",{className:"post-content",children:[(0,s.jsx)(n,{images:a.images}),(0,s.jsxs)("div",{className:"price",children:[(0,u.eS)(a.price)," 〒"]}),(0,s.jsxs)("div",{className:"about",children:[(0,s.jsxs)("div",{className:"title",children:["apartment"===a.housing.slug&&"О квартире","house"===a.housing.slug&&"О доме","commercial"===a.housing.slug&&"Параметры"]}),(0,s.jsxs)("div",{className:"parameters",children:[(0,s.jsxs)("div",{className:"mobile",children:[a.city&&(0,s.jsx)(h,{label:"Город",value:a.city.name}),a.region&&(0,s.jsx)(h,{label:"Район",value:a.region.name}),a.year&&(0,s.jsx)(h,{label:"Год постройки",value:a.year}),a.material&&(0,s.jsx)(h,{label:"Тип дома",value:a.material}),!!a.floors&&!a.floor&&(0,s.jsx)(h,{label:"Этажей",value:a.floors}),!!a.floor&&(0,s.jsx)(h,{label:"Этаж",value:"".concat(a.floor).concat(a.floors?" из "+a.floors:"")}),!!a.state&&(0,s.jsx)(h,{label:"Состояние",value:a.state}),a.area&&a.area.total&&(0,s.jsx)(h,{label:(0,s.jsxs)("span",{children:["Площадь, м",(0,s.jsx)("sup",{children:"2"})]}),value:(0,s.jsxs)(s.Fragment,{children:[a.area.total," м",(0,s.jsx)("sup",{children:"2"})]})}),a.bathroom&&(0,s.jsx)(h,{label:"Санузел",value:a.bathroom}),a.commercial&&a.commercial.placement&&(0,s.jsx)(h,{label:"Размещение объекта",value:a.commercial.placement})]}),a.balcony&&a.balcony.value&&(0,s.jsx)(h,{label:"Балкон",value:a.balcony.value}),a.balcony&&a.balcony.value&&a.balcony.glazed&&(0,s.jsx)(h,{label:"Балкон остеклен",value:a.balcony.value?"Да":"Нет"}),!!a.furnished&&(0,s.jsx)(h,{label:"Мебелирована",value:a.furnished}),!!a.plot&&(0,s.jsx)(h,{label:"Участок",value:"".concat(a.plot," сот.")}),!!a.fencing&&(0,s.jsx)(h,{label:"Как огорожен участок",value:a.fencing}),!!a.roofing&&(0,s.jsx)(h,{label:"Покрытие крыши",value:a.roofing}),!!a.water&&(0,s.jsx)(h,{label:"Вода",value:a.water}),!!a.electricity&&(0,s.jsx)(h,{label:"Электричество",value:a.electricity}),!!a.sewerage&&(0,s.jsx)(h,{label:"Канализация",value:a.sewerage}),!!a.heating&&(0,s.jsx)(h,{label:"Отопление",value:a.heating}),!!a.gas&&(0,s.jsx)(h,{label:"Газ",value:a.gas}),!!a.telephone&&(0,s.jsx)(h,{label:"Телефон",value:a.telephone}),!!a.internet&&(0,s.jsx)(h,{label:"Интернет",value:a.internet})]})]}),(0,s.jsxs)("div",{className:"description",children:[(0,s.jsx)("div",{className:"title",children:"Описание"}),a.description&&(0,s.jsx)("div",{className:"text",dangerouslySetInnerHTML:{__html:o()(JSON.parse(a.description))}})]}),a.realtor&&(a.realtor.name||a.realtorPhone)&&(0,s.jsxs)("div",{className:"realtor",children:[(0,s.jsx)("div",{className:"name",children:a.realtor.name}),(0,s.jsx)("div",{className:"agent",children:"Специалист"})]})]})]})]})})})};let m=e=>{let{label:a,value:l}=e;return(0,s.jsxs)("div",{className:"parameter",children:[(0,s.jsxs)("div",{className:"label",children:[a,(0,s.jsx)("span",{className:"hl"})]}),(0,s.jsx)("div",{className:"value",children:l})]})},h=e=>{let{label:a,value:l}=e;return(0,s.jsxs)("div",{className:"parameter",children:[(0,s.jsx)("div",{className:"label",children:a}),(0,s.jsx)("div",{className:"value",children:l})]})};var x=e=>{let{params:a}=e,{id:l}=a,[n,c]=(0,r.useState)(null),i=async()=>{let{data:e}=await t.Z.get("/api/posts/".concat(l),{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});c(e)};return(0,r.useEffect)(()=>{l&&!n&&i()},[l]),(0,s.jsx)(d,{post:n})}},8758:function(e,a,l){"use strict";l.d(a,{ce:function(){return t},eS:function(){return n},i2:function(){return o},pQ:function(){return i},rW:function(){return c},yN:function(){return r}});let s=["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],t=e=>{let a=new Date().getFullYear(),l=new Date(e),t=l.getDate(),r=l.getMonth(),n=l.getFullYear();return n===a?t+" "+s[r]:t+" "+s[r]+" "+n},r=e=>e>1e6?Math.round(e/1e5)/10+" млн.":e,n=e=>{if(e){var a=e.toString().split(".");a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e=a.join(".")}return e},c=e=>{let a="?";for(let l in e)if(Object.hasOwnProperty.call(e,l)){let s=e[l];s&&l&&("object"==typeof s?Array.isArray(s)?s.forEach(e=>{a.length>1&&(a+="&"),a+=l+"="+e}):(s.from&&(a.length>1&&(a+="&"),a+=l+"_from="+s.from),s.to&&(a.length>1&&(a+="&"),a+=l+"_to="+s.to)):(a.length>1&&(a+="&"),a+=l+"="+s))}return a},i=e=>{let a=decodeURI(e).replace(/\+/g," ").split("&"),l={};return a.forEach(e=>{let a=e.split("=");if(a[0].includes("_")){let e=a[0].split("_");l[e[0]]||(l[e[0]]={}),l[e[0]][e[1]]=a[1]}else if(l[a[0]]){if(!Array.isArray(l[a[0]])){let e=isNaN(l[a[0]])?l[a[0]]:Number(l[a[0]]);l[a[0]]=[],l[a[0]].push(e)}l[a[0]].push(isNaN(a[1])?a[1]:Number(a[1]))}else l[a[0]]=a[1]}),l},o=e=>{let a="";switch(e.housing.slug){case"apartment":a+="".concat(e.rooms,"-комнатная квартира"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.floor&&(a+=", ".concat(e.floor),e.floors&&(a+="/".concat(e.floors)),a+=" этаж");break;case"house":a+="".concat(e.rooms,"-комнатый дом"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.plot&&(a+=", ".concat(e.plot," сот."));break;case"commercial":a+="".concat(e.commercial.purpose),e.area&&e.area.total&&(a+=" - ".concat(e.area.total," м\xb2"))}return a}},201:function(){},1395:function(){}},function(e){e.O(0,[750,330,971,596,744],function(){return e(e.s=7449)}),_N_E=e.O()}]);