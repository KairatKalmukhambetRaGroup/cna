(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[727],{3235:function(e,n,l){"use strict";var a=l(7437),s=l(1863);l(4664);var i=l(9222),r=l(2265),t=l(1358);let o={housing:"apartment",region:"",rooms:0,price:0,adress:"",description:"",material:"",year:"",floor:0,floors:0,state:"",roofing:"",sewerage:"",fencing:"",electricity:"",heating:"",gas:"",water:"",plot:"",realtor:{name:"",phone:""},area:{total:"",kitchen:"",living:""},bathroom:"",balcony:{value:"",glazed:!1},telephone:"",internet:"",furnished:"",commercial:{purpose:"",placement:""}},c={type:"success",title:"Объявление успешно создано"},d={type:"success",title:"Объявление успешно изменена"},u={type:"fail",title:"Что-то пошло не так",subtitle:"Попробуйте позже или обновите страницу."};n.Z=e=>{var n,l,h,p;let{post:x=null}=e,[j,v]=(0,r.useState)(o),[g,f]=(0,r.useState)(null),[b,N]=(0,r.useState)([]),[C,y]=(0,r.useState)(null),w=async()=>{let{data:e}=await i.Z.get("/api/regions",{validateStatus:function(e){return!0},headers:{"Access-Control-Allow-Origin":"*","Access-Control-Allow-Headers":"Origin, X-Requested-With, Content-Type, Accept"}});f(e)};(0,r.useEffect)(()=>{g?x&&x._id||v({...j,region:g[0].name}):w()},[g]),(0,r.useEffect)(()=>{if(x&&x._id){v({...j,...x,region:x.region.name,housing:x.housing.slug});let e=[];for(let n=0;n<x.images.length;n++)e.push("/uploads/"+x.images[n]);N([...e])}},[x]);let S=e=>{let{name:n,value:l}=e.currentTarget;if(n.includes("_")){let e=n.split("_"),a=e[0],s=e[1];v({...j,[a]:{...j[a],[s]:l}})}else v({...j,[n]:l})},_=e=>new Promise(n=>setTimeout(n,e)),k=async()=>{let e=new FormData;for(let n in j){let l=j[n];if("object"==typeof l)for(let a in l){let l=j[n][a];e.append("".concat(n,"[").concat(a,"]"),l)}else e.append(n,l)}for(let n=0;n<b.length;n++){let l=b[n].split("/uploads/")[1];x&&x.images.includes(l)&&e.append("images",l)}if(E.map(n=>{e.append("images",n)}),x&&x._id){let{data:n,status:l}=await i.Z.patch("/api/posts/".concat(x._id),e,{validateStatus:function(e){return!0},headers:{"Content-Type":"multift/form-data"}});200===l?(v({...j,...n,region:n.region.name,housing:n.housing.slug}),y(d)):y(u)}else{let{data:n,status:l}=await i.Z.post("/api/posts",e,{validateStatus:function(e){return!0},headers:{"Content-Type":"multipart/form-data"}});200===l?(y(c),await _(3e3)):y(u)}},[E,q]=(0,r.useState)([]),[D,O]=(0,r.useState)(0),T=e=>{let n=!1,l=b[e],a=b[e].split("/uploads/")[1];if(x.images&&x.images.includes(a)&&(n=!0),!n){let n=E[e];q(E.filter(e=>e!=n))}N(b.filter(e=>e!=l)),O(Math.max(0,e-1))};return(0,a.jsxs)("div",{id:"postForm",children:[(0,a.jsx)(m,{text:C,setText:y}),(0,a.jsxs)("form",{onSubmit:e=>{e.preventDefault(),k()},children:[(0,a.jsxs)("div",{className:"inputs",children:[(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"col",children:[(0,a.jsxs)("div",{className:"images-container",children:[(0,a.jsx)("div",{className:"current-image",children:b&&b.length>0&&b[D]?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("img",{src:b[D],alt:"prev"}),(0,a.jsx)("i",{className:"delete",onClick:e=>{e.preventDefault(),T(D)}})]}):(0,a.jsx)("div",{className:"noimage",children:"Нет изображения"})}),(0,a.jsx)("div",{className:"images",children:b&&b.map((e,n)=>(0,a.jsx)("div",{className:"img ".concat(D===n?"active":""," "),onClick:e=>{e.preventDefault(),O(n)},children:(0,a.jsx)("img",{src:e,alt:"prev".concat(n)})},n))})]}),(0,a.jsxs)("div",{className:"btns",children:[(0,a.jsx)("div",{className:"btn clear",onClick:e=>{e.preventDefault(),q([]),N([]),O(0)},children:"Очистить изображения"}),(0,a.jsxs)("label",{className:"btn save",children:["Загрузить",(0,a.jsx)("input",{type:"file",multiple:!0,name:"images",onChange:e=>{let n=e.target.files,l=[],a=[];for(let e=0;e<n.length;e++){let s=n[e],i=s.type,r=["image/jpeg","image/png","image/webp"];r.includes(i)&&(l.push(s),a.push(URL.createObjectURL(s)))}q([...E,...l]),N([...b,...a])}})]})]})]}),(0,a.jsxs)("div",{className:"col",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Имя Риелтора"}),(0,a.jsx)("input",{type:"text",name:"realtor_name",required:!0,value:j.realtor.name,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Тел. Номер Риелтора"}),(0,a.jsx)("input",{type:"text",name:"realtor_phone",value:j.realtor.phone,onChange:S,required:!0})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Тип недвижимости"}),(0,a.jsxs)("select",{disabled:x&&x._id,name:"housing",value:j.housing,required:!0,onChange:S,children:[(0,a.jsx)("option",{value:"apartment",children:"Квартира"}),(0,a.jsx)("option",{value:"house",children:"Дом"}),(0,a.jsx)("option",{value:"commercial",children:"Коммерческая недвижимость"})]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Район"}),(0,a.jsx)("select",{name:"region",value:j.region,onChange:S,required:!0,children:g&&g.map(e=>(0,a.jsx)("option",{value:e.name,children:e.name},e._id))})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Адрес"}),(0,a.jsx)("input",{type:"text",name:"adress",required:!0,value:j.adress,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Цена"}),(0,a.jsx)("input",{type:"number",name:"price",value:j.price,onChange:S,required:!0})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Год построки:"}),(0,a.jsx)("input",{type:"text",name:"year",value:j.year,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Количество комнат:"}),(0,a.jsx)("input",{type:"number",name:"rooms",value:j.rooms,onChange:S,required:!0})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Этаж:"}),(0,a.jsx)("input",{type:"number",name:"floor",value:j.floor,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Этажей в зданий:"}),(0,a.jsx)("input",{type:"number",name:"floors",value:j.floors,onChange:S})]})]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"form-group number",required:!0,children:[(0,a.jsx)("label",{children:"Общая площадь:"}),(0,a.jsx)("input",{type:"text",name:"area_total",inputMode:"decimal",pattern:"[0-9]*[.,]?[0-9]*",value:j.area.total,onChange:S})]}),"commercial"!==j.housing&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Жилая площадь:"}),(0,a.jsx)("input",{type:"text",name:"area_living",inputMode:"decimal",pattern:"[0-9]*[.,]?[0-9]*",value:j.area.living,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Площадь кухни:"}),(0,a.jsx)("input",{type:"text",name:"area_kitchen",inputMode:"decimal",pattern:"[0-9]*[.,]?[0-9]*",value:j.area.kitchen,onChange:S})]})]}),"apartment"!==j.housing&&(0,a.jsxs)("div",{className:"form-group number",children:[(0,a.jsx)("label",{children:"Участок (сот.):"}),(0,a.jsx)("input",{type:"text",name:"plot",inputMode:"decimal",pattern:"[0-9]*[.,]?[0-9]*",value:j.plot,onChange:S})]})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Тип строения"}),(0,a.jsxs)("select",{name:"material",value:j.material,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.gU.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Состояние"}),(0,a.jsxs)("select",{name:"state",value:j.state,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.PO.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Санузел"}),(0,a.jsxs)("select",{name:"bathroom",value:j.bathroom,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.fe.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Мебилирована"}),(0,a.jsxs)("select",{name:"furnished",value:j.furnished,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.pd.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Интернет"}),(0,a.jsxs)("select",{name:"internet",value:j.internet,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.rS.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Телефон"}),(0,a.jsxs)("select",{name:"telephone",value:j.telephone,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.Dl.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Балкон"}),(0,a.jsxs)("select",{name:"balcony",value:null===(n=j.balcony)||void 0===n?void 0:n.value,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.Yf.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsx)("div",{className:"form-group check",children:(0,a.jsxs)("label",{children:[(0,a.jsx)("input",{type:"checkbox",name:"balcony_glazed",id:"",value:null===(l=j.balcony)||void 0===l?void 0:l.glazed,onChange:S}),"Балкон остеклен"]})})]}),(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Электричество"}),(0,a.jsxs)("select",{name:"electricity",value:j.electricity,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.$5.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Канализация"}),(0,a.jsxs)("select",{name:"sewerage",value:j.sewerage,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.j$.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Газ"}),(0,a.jsxs)("select",{name:"gas",value:j.gas,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.OV.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Питьевая вода"}),(0,a.jsxs)("select",{name:"water",value:j.water,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.aU.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Отопление"}),(0,a.jsxs)("select",{name:"heating",value:j.heating,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.uJ.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Покрытие крыши"}),(0,a.jsx)("input",{type:"text",name:"roofing",value:j.roofing,onChange:S})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Как огорожен участок"}),(0,a.jsx)("input",{type:"text",name:"fencing",value:j.fencing,onChange:S})]})]}),"commercial"===j.housing&&(0,a.jsxs)("div",{className:"row",children:[(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Назначение"}),(0,a.jsxs)("select",{name:"commercial_purpose",required:!0,value:null===(h=j.commercial)||void 0===h?void 0:h.purpose,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.Kp.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]}),(0,a.jsxs)("div",{className:"form-group",children:[(0,a.jsx)("label",{children:"Где размещен объект"}),(0,a.jsxs)("select",{name:"commercial_placement",value:null===(p=j.commercial)||void 0===p?void 0:p.placement,onChange:S,children:[(0,a.jsx)("option",{value:"",children:"не важно"}),s.ky.map((e,n)=>(0,a.jsx)("option",{value:e,children:e},n))]})]})]}),(0,a.jsx)(t.Z,{value:j.description,handleChange:e=>{v({...j,description:e})}},"rich1")]}),(0,a.jsxs)("div",{className:"btns",children:[(0,a.jsx)("div",{className:"btn clear",onClick:e=>{e.preventDefault(),x&&x._id?v({...o,...x,region:x.region.name,housing:x.housing.slug}):v(o)},children:x&&x._id?"Сбросить изменения":"Очистить"}),(0,a.jsx)("input",{type:"submit",className:"btn save",value:"Сохранить"})]})]})]})};let m=e=>{let{text:n,setText:l}=e;if(n)return(0,a.jsx)("div",{className:"modal",children:(0,a.jsxs)("div",{className:"content ".concat(null==n?void 0:n.type),children:[(0,a.jsx)("i",{}),(0,a.jsxs)("div",{className:"text",children:[(0,a.jsx)("div",{className:"title",children:null==n?void 0:n.title}),n&&n.subtitle&&(0,a.jsx)("div",{className:"subtitle",children:n.subtitle})]}),(0,a.jsx)("div",{className:"btn",onClick:e=>{e.preventDefault(),l(null)},children:"ОК"})]})})}},1358:function(e,n,l){"use strict";var a=l(7437),s=l(2265),i=l(4360),r=l(8864),t=l.n(r);l(5159),l(3888);let o=t()(()=>Promise.all([l.e(335),l.e(354)]).then(l.t.bind(l,6015,23)).then(e=>e.Editor),{loadableGenerated:{webpack:()=>[6015]},ssr:!1});n.Z=e=>{let{value:n=null,handleChange:l}=e,[r,t]=(0,s.useState)(""),[c,d]=s.useState(()=>{i.EditorState.createEmpty()});return(0,s.useEffect)(()=>{n&&!r&&(t(n),function(e){try{return JSON.parse(e)&&!!e}catch(e){return!1}}(n)?d(i.EditorState.createWithContent((0,i.convertFromRaw)(JSON.parse(n)))):d(i.EditorState.createWithContent(i.ContentState.createFromBlockArray((0,i.convertFromHTML)("<p>".concat(n,"</p>"))))))},[n]),(0,a.jsx)("div",{className:"textarea",children:(0,a.jsx)(o,{locale:"ru",editorState:c,onEditorStateChange:e=>{d(e);let n=e.getCurrentContent();l(JSON.stringify((0,i.convertToRaw)(n)))},wrapperClassName:"wrapper-class",toolbarClassName:"toolbar-class",editorClassName:"editor-class",toolbar:{options:["inline","blockType","fontSize","fontFamily","textAlign","link","emoji","remove","history"]}})})}},1863:function(e,n,l){"use strict";l.d(n,{$5:function(){return p},Dl:function(){return r},Kp:function(){return d},OV:function(){return x},PO:function(){return s},Yf:function(){return t},aU:function(){return j},fe:function(){return c},gU:function(){return a},j$:function(){return h},ky:function(){return u},pd:function(){return i},rS:function(){return o},uJ:function(){return m}});let a=["кирпичный","панельный","монолитный","деревянный","каркасно-камышитовый","пеноблочный","сэндвич-панели","каркасно-щитовой","шлакоблочный","иное"],s=["хорошое","среднее","требует ремонта","свободная планировка","черновая отделка"],i=["полностью","частично","без мебели"],r=["отдельный","блокиратор","есть возможность подключения","нет"],t=["балкон","лоджия","далкон и лоджия","несколько балконов и лоджий"],o=["оптика","проводной","ADSL","через TV кабель"],c=["раздельный","совмещенный","2 с/у и более","нет","во дворе"],d=["свободное назначение","офисы","магазины и бутики","склады","автосервисы и автомойки","общепит","салон красоты"],u=["в бизнец-центре","в жилом доме или ЖК","в торговом центре","на универсальном рынке","отдельностоящее здание"],m=["центральное","на газе","на твердом топливе","на жидком топливе","смешанное","без отопления"],h=["центральная","есть возможность подведения","септик","нет"],p=["есть","есть возможность подключения","нет"],x=["магистральный","автономный","есть возможность подключения","нет"],j=["центральное водоснабжение","есть возможность подключения","скважина","нет"]},800:function(){},4664:function(){},5159:function(){}}]);