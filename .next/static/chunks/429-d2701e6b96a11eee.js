(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[429],{7617:function(e,a,s){"use strict";var l=s(7437);s(4741),a.Z=e=>{let{ad:a}=e;return(0,l.jsxs)("a",{className:"advertcard",href:a.link,children:[(0,l.jsx)("div",{className:"adimage",children:a.image?(0,l.jsx)("img",{loading:"lazy",src:"https://cna.kz/public/uploads/".concat(a.image),alt:"preview"}):(0,l.jsx)("img",{loading:"lazy",src:"/noimage.png",alt:"noimage"})}),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsx)("div",{className:"title",children:a.name}),a.description&&(0,l.jsx)("div",{className:"description",children:a.description}),(0,l.jsx)("div",{className:"tag",children:"Реклама"})]})]})}},7503:function(e,a,s){"use strict";var l=s(7437);s(3556);var n=s(3950),i=s(3428),c=s(5794),t=s(1863),r=s(7831);let d=["Кватиры","Дома","Коммерческие недвижимости"];a.Z=e=>{let{prefix:a,formData:s,handleChange:o,handleSubmit:h,regions:m,cities:u}=e;return(0,l.jsxs)("div",{id:"filter",className:"apartment",children:[(0,l.jsx)("div",{className:"navbar",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"nav",children:[(0,l.jsx)("div",{className:"active",children:"Квартиры"}),(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),o("housing","house")},children:"Дома"}),(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),o("housing","commercial")},children:"Коммерческая недвижимость"})]})})}),(0,l.jsxs)("form",{onSubmit:h,children:[(0,l.jsx)("div",{className:"top",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"regular-14-16",children:a}),(0,l.jsx)("div",{className:"regular-14-16 not-mobile",children:"Квартиры"}),(0,l.jsx)("span",{className:"mobile",children:(0,l.jsx)(n.Z,{name:"housing",options:d,value:"Квартиры",handleChange:(e,a)=>{switch(a){case"Кватиры":o("housing","apartment");break;case"Дома":o("housing","house");break;case"Коммерческие недвижимости":o("housing","commercial")}}})}),(0,l.jsx)(n.Z,{name:"city",placeholder:"Не важно",options:u,value:s.city,handleChange:o}),m&&m.length>0&&(0,l.jsx)(n.Z,{name:"region",placeholder:"Не важно",options:m,value:s.region,handleChange:o}),(0,l.jsx)(i.Z,{name:"rooms",label:"- комн.",value:s.rooms,handleChange:o}),(0,l.jsx)(c.Z,{name:"price",label:"Цена",param:"тг",value:s.price,handleChange:o})]})})}),(0,l.jsx)("div",{className:"middle",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(r.Z,{name:"material",label:"Тип дома",placeholder:"Не важно",options:t.gU,value:s.material,handleChange:o,labeled:!0}),(0,l.jsx)(c.Z,{name:"year",label:"Год постройки",value:s.year,handleChange:o,labeled:!0})]}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(c.Z,{name:"floors",label:"Этажей в доме",value:s.floors,handleChange:o,labeled:!0}),(0,l.jsx)(c.Z,{name:"floor",label:"Этаж",value:s.floor,handleChange:o,labeled:!0}),(0,l.jsx)(r.Z,{name:"bathroom",label:"Сан узел",placeholder:"Не важно",options:t.fe,value:s.bathroom,handleChange:o,labeled:!0})]}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(c.Z,{name:"total_area",label:"Общая площадь",param:"м2",value:s.total_area,handleChange:o,labeled:!0}),(0,l.jsx)(c.Z,{name:"kitchen_area",label:"Площадь кухни",param:"м2",value:s.kitchen_area,handleChange:o,labeled:!0}),(0,l.jsx)(c.Z,{name:"living_area",label:"Жилая площадь",param:"м2",value:s.living_area,handleChange:o,labeled:!0})]})]})})}),(0,l.jsx)("div",{className:"bottom",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"clear",children:[(0,l.jsx)("i",{})," Очистить все"]}),(0,l.jsx)("input",{type:"submit",className:"submit-btn",value:"Показать результаты"})]})})})]})]})}},5369:function(e,a,s){"use strict";s.d(a,{Z:function(){return v}});var l=s(7437),n=s(7503);s(3556);var i=s(3950),c=s(5794),t=s(1863),r=s(7831);let d=["Кватиры","Дома","Коммерческие недвижимости"];var o=e=>{let{prefix:a,formData:s,handleChange:n,regions:o,handleSubmit:h,cities:m}=e;return(0,l.jsxs)("div",{id:"filter",className:"commercial",children:[(0,l.jsx)("div",{className:"navbar",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"nav",children:[(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),n("housing","apartment")},children:"Квартиры"}),(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),n("housing","house")},children:"Дома"}),(0,l.jsx)("div",{className:"active",children:"Коммерческая недвижимость"})]})})}),(0,l.jsxs)("form",{onSubmit:h,children:[(0,l.jsx)("div",{className:"top",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"regular-14-16",children:a}),(0,l.jsx)("span",{className:"mobile",children:(0,l.jsx)(i.Z,{name:"housing",options:d,value:"Коммерческие недвижимости",handleChange:(e,a)=>{switch(a){case"Кватиры":n("housing","apartment");break;case"Дома":n("housing","house");break;case"Коммерческие недвижимости":n("housing","commercial")}}})}),(0,l.jsx)(r.Z,{name:"purpose",placeholder:"Не важно",label:"Назначение",options:t.Kp,value:s.purpose,handleChange:n}),(0,l.jsx)(i.Z,{name:"city",placeholder:"Не важно",options:m,value:s.city,handleChange:n}),o&&o.length>0&&(0,l.jsx)(i.Z,{name:"region",placeholder:"Не важно",options:o,value:s.region,handleChange:n}),(0,l.jsx)(c.Z,{name:"price",label:"Цена",param:"тг",value:s.price,handleChange:n})]})})}),(0,l.jsx)("div",{className:"middle",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(r.Z,{name:"placement",label:"Где размещен объект",placeholder:"Не важно",options:t.ky,value:s.placement,handleChange:n,labeled:!0})}),(0,l.jsx)("div",{className:"col",children:(0,l.jsx)(c.Z,{name:"total_area",label:"Общая площадь",param:"м2",value:s.total_area,handleChange:n,labeled:!0})}),(0,l.jsx)("div",{className:"col"})]})})}),(0,l.jsx)("div",{className:"bottom",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"clear",children:[(0,l.jsx)("i",{})," Очистить все"]}),(0,l.jsx)("input",{type:"submit",className:"submit-btn",value:"Показать результаты"})]})})})]})]})},h=s(3428);let m=["Кватиры","Дома","Коммерческие недвижимости"];var u=e=>{let{prefix:a,formData:s,handleChange:n,regions:d,handleSubmit:o,cities:u}=e;return(0,l.jsxs)("div",{id:"filter",className:"house",children:[(0,l.jsx)("div",{className:"navbar",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"nav",children:[(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),n("housing","apartment")},children:"Квартиры"}),(0,l.jsx)("div",{className:"active",children:"Дома"}),(0,l.jsx)("div",{onClick:e=>{e.preventDefault(),n("housing","commercial")},children:"Коммерческая недвижимость"})]})})}),(0,l.jsxs)("form",{onSubmit:o,children:[(0,l.jsx)("div",{className:"top",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsx)("div",{className:"regular-14-16",children:a}),(0,l.jsx)("div",{className:"regular-14-16 not-mobile",children:"Дома"}),(0,l.jsx)("span",{className:"mobile",children:(0,l.jsx)(i.Z,{name:"housing",options:m,value:"Дома",handleChange:(e,a)=>{switch(a){case"Кватиры":n("housing","apartment");break;case"Дома":n("housing","house");break;case"Коммерческие недвижимости":n("housing","commercial")}}})}),(0,l.jsx)(i.Z,{name:"city",placeholder:"Не важно",options:u,value:s.city,handleChange:n}),d&&d.length>0&&(0,l.jsx)(i.Z,{name:"region",placeholder:"Не важно",options:d,value:s.region,handleChange:n}),(0,l.jsx)(h.Z,{name:"rooms",label:"- комн.",value:s.rooms,handleChange:n}),(0,l.jsx)(c.Z,{name:"price",label:"Цена",param:"тг",value:s.price,handleChange:n})]})})}),(0,l.jsx)("div",{className:"middle",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(r.Z,{name:"material",label:"Тип строения",placeholder:"Не важно",options:t.gU,value:s.material,handleChange:n,labeled:!0}),(0,l.jsx)(c.Z,{name:"floors",label:"Этажей в доме",value:s.floors,handleChange:n,labeled:!0}),(0,l.jsx)(c.Z,{name:"year",label:"Год постройки",value:s.year,handleChange:n,labeled:!0})]}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(c.Z,{name:"plot",label:"Этаж",value:s.plot,handleChange:n,labeled:!0}),(0,l.jsx)(r.Z,{name:"heating",label:"Отопление",placeholder:"Не важно",options:t.uJ,value:s.heating,handleChange:n,labeled:!0}),(0,l.jsx)(r.Z,{name:"sewerage",label:"Канализация",placeholder:"Не важно",options:t.j$,value:s.sewerage,handleChange:n,labeled:!0})]}),(0,l.jsxs)("div",{className:"col",children:[(0,l.jsx)(c.Z,{name:"total_area",label:"Общая площадь",param:"м2",value:s.total_area,handleChange:n,labeled:!0}),(0,l.jsx)(c.Z,{name:"kitchen_area",label:"Площадь кухни",param:"м2",value:s.kitchen_area,handleChange:n,labeled:!0}),(0,l.jsx)(c.Z,{name:"living_area",label:"Жилая площадь",param:"м2",value:s.living_area,handleChange:n,labeled:!0})]})]})})}),(0,l.jsx)("div",{className:"bottom",children:(0,l.jsx)("div",{className:"container",children:(0,l.jsxs)("div",{className:"content",children:[(0,l.jsxs)("div",{className:"clear",children:[(0,l.jsx)("i",{})," Очистить все"]}),(0,l.jsx)("input",{type:"submit",className:"submit-btn",value:"Показать результаты"})]})})})]})]})},v=e=>{let{prefix:a="",housing:s,cities:i,regions:c,formData:t,handleChange:r,handleSubmit:d}=e;return"apartment"===s?(0,l.jsx)(n.Z,{prefix:a,cities:i,regions:c,formData:t,handleChange:r,handleSubmit:d}):"house"===s?(0,l.jsx)(u,{prefix:a,cities:i,regions:c,formData:t,handleChange:r,handleSubmit:d}):"commercial"===s?(0,l.jsx)(o,{prefix:a,cities:i,regions:c,formData:t,handleChange:r,handleSubmit:d}):void 0}},3428:function(e,a,s){"use strict";var l=s(7437);s(5159),s(2265);let n=[1,2,3,4,5];a.Z=e=>{let{name:a="",label:s="",value:i=[],handleChange:c}=e,t=e=>{e.preventDefault();let s=e.currentTarget.dataset.value,l=[];Array.isArray(i)?l=[...i]:l.push(Number(i)),l.includes(Number(s))?l=l.filter(e=>Number(e)!==Number(s)):l.push(Number(s)),c(a,l)};return(0,l.jsxs)("div",{className:"input multinumber",children:[(0,l.jsx)("div",{className:"numbers",children:n.map((e,a)=>(0,l.jsx)("div",{className:"number ".concat(i.includes(Number(e))?"active":""),"data-value":e,onClick:t,children:e},a))}),(0,l.jsx)("label",{children:s})]})}},7831:function(e,a,s){"use strict";var l=s(7437),n=s(2265);s(5159),a.Z=e=>{let{name:a="",placeholder:s=null,label:i="",value:c=[],options:t=[],handleChange:r,labeled:d=!1}=e,[o,h]=n.useState(!1),m=e=>{e.preventDefault();let s=e.currentTarget.dataset.value;if(s){let e=[];Array.isArray(c)?e=[...c]:e.push(c),e.includes(s)?e=e.filter(e=>e!==s):e.push(s),r(a,e)}else r(a,[]);h(!1)};return(0,l.jsxs)("div",{className:"input multiselect ".concat(d?"labeled":""),children:[(0,l.jsx)("label",{children:i}),(0,l.jsxs)("div",{className:"select",children:[(0,l.jsxs)("div",{className:"selected",onClick:e=>{h(!o)},children:[(0,l.jsx)("span",{className:"val",children:c&&c.length>0?Array.isArray(c)?c.join(", "):c:s}),(0,l.jsx)("i",{})]}),(0,l.jsxs)("div",{className:"options ".concat(o?"active":""),children:[s&&(0,l.jsx)("div",{className:"option ".concat(c&&c.length>0?"":"active"),"data-value":null,onClick:m,children:s}),t&&t.length>0&&t.map((e,a)=>(0,l.jsxs)("div",{className:"option ".concat(c.includes(e)?"active":""),"data-value":e,onClick:m,children:[(0,l.jsx)("i",{className:"checkbox"})," ",e]},a))]})]})]})}},5794:function(e,a,s){"use strict";var l=s(7437);a.Z=e=>{let{name:a="",label:s="",value:n,param:i,handleChange:c,labeled:t=!1}=e,r=e=>{if(e){var a=e.toString().split(".");a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e=a.join(".")}return e},d=e=>{e.preventDefault();let s=e.currentTarget.dataset.pref,l=e.currentTarget.value.replace(/\s+/g,""),i="";for(let e=0;e<l.length;e++){let a=l[e];i+=a}c(a,{...n,[s]:i})};return(0,l.jsxs)("div",{className:"input number-range ".concat(t?"labeled":""),children:[s&&(0,l.jsx)("label",{children:s}),(0,l.jsx)("input",{type:"text",name:"".concat(a,"1"),"data-pref":"from",placeholder:"от",value:r(n.from),onChange:d}),(0,l.jsx)("div",{className:"hl"}),(0,l.jsx)("input",{type:"text",name:"".concat(a,"2"),"data-pref":"to",placeholder:"до",value:r(n.to),onChange:d}),i&&(0,l.jsx)("label",{className:"last",children:"м2"===i?(0,l.jsxs)(l.Fragment,{children:["м",(0,l.jsx)("sup",{children:"2"})]}):i})]})}},3950:function(e,a,s){"use strict";var l=s(7437),n=s(2265);s(5159);let i=(e,a)=>{(0,n.useEffect)(()=>{function s(s){e.current&&!e.current.contains(s.target)&&a(!1)}return document.addEventListener("mousedown",s),()=>{document.removeEventListener("mousedown",s)}},[e])};a.Z=e=>{let{mobile:a=!1,name:s="",placeholder:c=null,label:t="",value:r="",options:d=[],handleChange:o,labeled:h=!1}=e,[m,u]=n.useState(!1),v=e=>{e.preventDefault();let a=e.currentTarget.dataset.value;o(s,a),u(!1)},x=(0,n.useRef)(null);return i(x,u),(0,l.jsxs)("div",{className:"input select ".concat(h?"labeled":""," ").concat(a?"mobile":""),children:[t&&(0,l.jsx)("label",{children:t}),(0,l.jsxs)("div",{className:"select",ref:x,children:[(0,l.jsxs)("div",{className:"selected",onClick:e=>{u(!m)},children:[(0,l.jsx)("span",{className:"val",children:r||c}),(0,l.jsx)("i",{})]}),(0,l.jsxs)("div",{className:"options ".concat(m?"active":""),children:[c&&(0,l.jsx)("div",{className:"option ".concat(""===r?"active":""),"data-value":null,onClick:v,children:c}),d&&d.length>0&&d.map((e,a)=>(0,l.jsx)("div",{className:"option ".concat(e===r?"active":""),"data-value":e,onClick:v,children:e},a))]})]})]})}},73:function(e,a,s){"use strict";var l=s(7437);s(3733),a.Z=e=>{let{small:a=!1}=e;return(0,l.jsx)("div",{className:"loading ".concat(a?"small":""),children:(0,l.jsxs)("div",{className:"lds-roller",children:[(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{}),(0,l.jsx)("div",{})]})})}},1415:function(e,a,s){"use strict";var l=s(7437),n=s(1396),i=s.n(n);s(3698),a.Z=()=>(0,l.jsxs)("div",{id:"menu",children:[(0,l.jsxs)("nav",{className:"top",children:[(0,l.jsx)(i(),{href:"/posts",className:"menu-item",children:"Купить"}),(0,l.jsx)(i(),{href:"/rent",className:"menu-item",children:"Арендовать"})]}),(0,l.jsxs)("nav",{className:"bottom",children:[(0,l.jsxs)(i(),{href:"/",className:"menu-item",children:[(0,l.jsx)("i",{className:"home"}),"Главная"]}),(0,l.jsxs)("a",{href:"tel:+77055621546",className:"menu-item new",children:[(0,l.jsx)("i",{className:"new"}),"Подать"]}),(0,l.jsxs)(i(),{href:"/about",className:"menu-item",children:[(0,l.jsx)("i",{className:"about"}),"О нас"]})]})]})},891:function(e,a,s){"use strict";var l=s(7437),n=s(8758),i=s(5330),c=s.n(i),t=s(4033);a.Z=e=>{var a;let{post:s}=e,i=(0,t.useRouter)();return(0,l.jsxs)("div",{className:"postcard",onClick:e=>{e.preventDefault(),i.push("/posts/".concat(s._id))},children:[(0,l.jsx)("div",{className:"postimage",children:s.images&&s.images.length>0?(0,l.jsx)("img",{loading:"lazy",src:"https://cna.kz/public/uploads/".concat(s.images[0]),alt:"preview"}):(0,l.jsx)("img",{loading:"lazy",src:"/noimage.png",alt:"noimage"})}),(0,l.jsxs)("div",{className:"info",children:[(0,l.jsxs)("div",{className:"top",children:[(0,l.jsx)("div",{className:"title",children:(0,n.i2)(s)}),(0,l.jsxs)("div",{className:"price",children:[(0,n.eS)(s.price)," 〒"]})]}),(0,l.jsxs)("div",{className:"addres",children:[s.region.name,", ",s.adress]}),s.description&&(0,l.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:c()(null===(a=JSON)||void 0===a?void 0:a.parse(null==s?void 0:s.description))}}),(0,l.jsxs)("div",{className:"date",children:[(0,l.jsx)("span",{children:s.city.name}),(0,n.ce)(s.createdAt)]})]})]})}},7358:function(e,a,s){"use strict";s.d(a,{Z:function(){return o}});var l=s(7437),n=s(891);s(201);var i=s(2265),c=e=>{let{formData:a,handleChange:s}=e,n=e=>{e.preventDefault();let a=e.currentTarget.dataset.value;s("sort",a)};return(0,l.jsxs)("div",{id:"sort",children:["Сначала:",(0,l.jsx)("span",{className:"".concat("new"==a.sort?"active":""),"data-value":"new",onClick:n,children:"новые объявления"}),(0,l.jsx)("span",{className:"".concat("cheap"==a.sort?"active":""),"data-value":"cheap",onClick:n,children:"дешевые"}),(0,l.jsx)("span",{className:"".concat("expensive"==a.sort?"active":""),"data-value":"expensive",onClick:n,children:"дорогие"})]})},t=s(73),r=s(9222),d=s(7617),o=e=>{let{posts:a,title:s="",total:o=0,formData:h,handleChange:m,loading:u}=e,[v,x]=(0,i.useState)(null),j=async()=>{let{data:e}=await r.Z.get("/api/advertisements",{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});x(e)};return(0,i.useEffect)(()=>{v||j()},[v]),(0,l.jsxs)("div",{id:"posts",children:[(0,l.jsxs)("div",{className:"heading",children:[(0,l.jsxs)("div",{className:"medium-24-28 text-black",children:["apartment"===s&&"Продажа квартир","house"===s&&"Продажа домов","commercial"===s&&"Продажа коммерческих недвижимостей"]}),(0,l.jsxs)("div",{className:"regular-16-20 text-black",children:["Найдено объявлений: ",o]})]}),(0,l.jsxs)("div",{className:"posts",children:[(0,l.jsx)(c,{formData:h,handleChange:m}),a.map((e,a)=>(0,l.jsxs)("div",{children:[(0,l.jsx)(n.Z,{post:e}),Number(a+1)%5==0&&v&&v.length>0&&(0,l.jsx)(d.Z,{ad:v[(Number(a+1)/5-1)%v.length]})]},a)),u?(0,l.jsx)(t.Z,{}):0===a.length&&(0,l.jsx)("div",{className:"none",children:"По вашему запросу ничего не найдено"})]})]})}},1206:function(e,a,s){"use strict";var l=s(7437);s(8561),a.Z=()=>(0,l.jsx)("div",{className:"sidebar",children:(0,l.jsx)("div",{className:"content",children:(0,l.jsxs)("div",{className:"banner large",children:[(0,l.jsxs)("div",{className:"text",children:[(0,l.jsx)("div",{className:"medium-24-28 text-black",children:"Ищешь покупателя для квартиры?"}),(0,l.jsx)("div",{className:"regular-16-20 text-black",children:"Доверь продажу профессионалам на CNA.KZ! Максимум выгоды, минимум хлопот."})]}),(0,l.jsx)("div",{className:"action",children:(0,l.jsxs)("a",{href:"tel:+77055621546",target:"_blank",className:"btn",children:[(0,l.jsx)("i",{})," +7 705 562 1546"]})})]})})})},1863:function(e,a,s){"use strict";s.d(a,{$5:function(){return v},Dl:function(){return c},Kp:function(){return o},OV:function(){return x},PO:function(){return n},Yf:function(){return t},aU:function(){return j},fe:function(){return d},gU:function(){return l},j$:function(){return u},ky:function(){return h},pd:function(){return i},rS:function(){return r},uJ:function(){return m}});let l=["кирпичный","панельный","монолитный","деревянный","каркасно-камышитовый","пеноблочный","сэндвич-панели","каркасно-щитовой","шлакоблочный","иное"],n=["хорошое","среднее","требует ремонта","свободная планировка","черновая отделка"],i=["полностью","частично","без мебели"],c=["отдельный","блокиратор","есть возможность подключения","нет"],t=["балкон","лоджия","далкон и лоджия","несколько балконов и лоджий"],r=["оптика","проводной","ADSL","через TV кабель"],d=["раздельный","совмещенный","2 с/у и более","нет","во дворе"],o=["свободное назначение","офисы","магазины и бутики","склады","автосервисы и автомойки","общепит","салон красоты"],h=["в бизнец-центре","в жилом доме или ЖК","в торговом центре","на универсальном рынке","отдельностоящее здание"],m=["центральное","на газе","на твердом топливе","на жидком топливе","смешанное","без отопления"],u=["центральная","есть возможность подведения","септик","нет"],v=["есть","есть возможность подключения","нет"],x=["магистральный","автономный","есть возможность подключения","нет"],j=["центральное водоснабжение","есть возможность подключения","скважина","нет"]},8758:function(e,a,s){"use strict";s.d(a,{ce:function(){return n},eS:function(){return c},i2:function(){return d},pQ:function(){return r},rW:function(){return t},yN:function(){return i}});let l=["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],n=e=>{let a=new Date().getFullYear(),s=new Date(e),n=s.getDate(),i=s.getMonth(),c=s.getFullYear();return c===a?n+" "+l[i]:n+" "+l[i]+" "+c},i=e=>e>1e6?Math.round(e/1e5)/10+" млн.":e,c=e=>{if(e){var a=e.toString().split(".");a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e=a.join(".")}return e},t=e=>{let a="?";for(let s in e)if(Object.hasOwnProperty.call(e,s)){let l=e[s];l&&s&&("object"==typeof l?Array.isArray(l)?l.forEach(e=>{a.length>1&&(a+="&"),a+=s+"="+e}):(l.from&&(a.length>1&&(a+="&"),a+=s+"_from="+l.from),l.to&&(a.length>1&&(a+="&"),a+=s+"_to="+l.to)):(a.length>1&&(a+="&"),a+=s+"="+l))}return a},r=e=>{let a=decodeURI(e).replace(/\+/g," ").split("&"),s={};return a.forEach(e=>{let a=e.split("=");if(a[0].includes("_")){let e=a[0].split("_");s[e[0]]||(s[e[0]]={}),s[e[0]][e[1]]=a[1]}else if(s[a[0]]){if(!Array.isArray(s[a[0]])){let e=isNaN(s[a[0]])?s[a[0]]:Number(s[a[0]]);s[a[0]]=[],s[a[0]].push(e)}s[a[0]].push(isNaN(a[1])?a[1]:Number(a[1]))}else s[a[0]]=a[1]}),s},d=e=>{let a="";switch(e.housing.slug){case"apartment":a+="".concat(e.rooms,"-комнатная квартира"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.floor&&(a+=", ".concat(e.floor),e.floors&&(a+="/".concat(e.floors)),a+=" этаж");break;case"house":a+="".concat(e.rooms,"-комнатый дом"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.plot&&(a+=", ".concat(e.plot," сот."));break;case"commercial":a+="".concat(e.commercial.purpose),e.area&&e.area.total&&(a+=" - ".concat(e.area.total," м\xb2"))}return"rent"===e.posttype&&(a+=", "+e.rentPeriod.toLowerCase()),a}},4741:function(){},3556:function(){},7652:function(){},5159:function(){},3733:function(){},3698:function(){},201:function(){},8561:function(){},1396:function(e,a,s){e.exports=s(6685)},4033:function(e,a,s){e.exports=s(8165)}}]);