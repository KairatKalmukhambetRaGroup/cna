(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[910],{7617:function(e,a,t){"use strict";var s=t(7437);t(4741),a.Z=e=>{let{ad:a}=e;return(0,s.jsxs)("a",{className:"advertcard",href:a.link,children:[(0,s.jsx)("div",{className:"adimage",children:a.image?(0,s.jsx)("img",{loading:"lazy",src:"https://cna.kz/uploads/".concat(a.image),alt:"preview"}):(0,s.jsx)("img",{loading:"lazy",src:"/noimage.png",alt:"noimage"})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsx)("div",{className:"title",children:a.name}),a.description&&(0,s.jsx)("div",{className:"description",children:a.description}),(0,s.jsx)("div",{className:"tag",children:"Реклама"})]})]})}},3428:function(e,a,t){"use strict";var s=t(7437);t(5159),t(2265);let n=[1,2,3,4,5];a.Z=e=>{let{name:a="",label:t="",value:i=[],handleChange:r}=e,l=e=>{e.preventDefault();let t=e.currentTarget.dataset.value,s=[];Array.isArray(i)?s=[...i]:s.push(Number(i)),s.includes(Number(t))?s=s.filter(e=>Number(e)!==Number(t)):s.push(Number(t)),r(a,s)};return(0,s.jsxs)("div",{className:"input multinumber",children:[(0,s.jsx)("div",{className:"numbers",children:n.map((e,a)=>(0,s.jsx)("div",{className:"number ".concat(i.includes(Number(e))?"active":""),"data-value":e,onClick:l,children:e},a))}),(0,s.jsx)("label",{children:t})]})}},5794:function(e,a,t){"use strict";var s=t(7437);a.Z=e=>{let{name:a="",label:t="",value:n,param:i,handleChange:r,labeled:l=!1}=e,c=e=>{if(e){var a=e.toString().split(".");a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e=a.join(".")}return e},o=e=>{e.preventDefault();let t=e.currentTarget.dataset.pref,s=e.currentTarget.value.replace(/\s+/g,""),i="";for(let e=0;e<s.length;e++){let a=s[e];i+=a}r(a,{...n,[t]:i})};return(0,s.jsxs)("div",{className:"input number-range ".concat(l?"labeled":""),children:[t&&(0,s.jsx)("label",{children:t}),(0,s.jsx)("input",{type:"text",name:"".concat(a,"1"),"data-pref":"from",placeholder:"от",value:c(n.from),onChange:o}),(0,s.jsx)("div",{className:"hl"}),(0,s.jsx)("input",{type:"text",name:"".concat(a,"2"),"data-pref":"to",placeholder:"до",value:c(n.to),onChange:o}),i&&(0,s.jsx)("label",{className:"last",children:"м2"===i?(0,s.jsxs)(s.Fragment,{children:["м",(0,s.jsx)("sup",{children:"2"})]}):i})]})}},3950:function(e,a,t){"use strict";var s=t(7437),n=t(2265);t(5159);let i=(e,a)=>{(0,n.useEffect)(()=>{function t(t){e.current&&!e.current.contains(t.target)&&a(!1)}return document.addEventListener("mousedown",t),()=>{document.removeEventListener("mousedown",t)}},[e])};a.Z=e=>{let{mobile:a=!1,name:t="",placeholder:r=null,label:l="",value:c="",options:o=[],handleChange:d,labeled:u=!1}=e,[m,p]=n.useState(!1),h=e=>{e.preventDefault();let a=e.currentTarget.dataset.value;d(t,a),p(!1)},v=(0,n.useRef)(null);return i(v,p),(0,s.jsxs)("div",{className:"input select ".concat(u?"labeled":""," ").concat(a?"mobile":""),children:[l&&(0,s.jsx)("label",{children:l}),(0,s.jsxs)("div",{className:"select",ref:v,children:[(0,s.jsxs)("div",{className:"selected",onClick:e=>{p(!m)},children:[(0,s.jsx)("span",{className:"val",children:c||r}),(0,s.jsx)("i",{})]}),(0,s.jsxs)("div",{className:"options ".concat(m?"active":""),children:[r&&(0,s.jsx)("div",{className:"option ".concat(""===c?"active":""),"data-value":null,onClick:h,children:r}),o&&o.length>0&&o.map((e,a)=>(0,s.jsx)("div",{className:"option ".concat(e===c?"active":""),"data-value":e,onClick:h,children:e},a))]})]})]})}},73:function(e,a,t){"use strict";var s=t(7437);t(3733),a.Z=e=>{let{small:a=!1}=e;return(0,s.jsx)("div",{className:"loading ".concat(a?"small":""),children:(0,s.jsxs)("div",{className:"lds-roller",children:[(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{}),(0,s.jsx)("div",{})]})})}},1415:function(e,a,t){"use strict";var s=t(7437),n=t(1396),i=t.n(n);t(3698),a.Z=()=>(0,s.jsx)("div",{id:"menu",children:(0,s.jsxs)("nav",{className:"bottom",children:[(0,s.jsxs)(i(),{href:"/",className:"menu-item",children:[(0,s.jsx)("i",{className:"home"}),"Главная"]}),(0,s.jsxs)(i(),{href:"/posts",className:"menu-item",children:[(0,s.jsx)("i",{className:"post"}),"Купить"]}),(0,s.jsxs)(i(),{href:"/rent",className:"menu-item",children:[(0,s.jsx)("i",{className:"rent"}),"Арендовать"]}),(0,s.jsxs)(i(),{href:"/phonebook",className:"menu-item",children:[(0,s.jsx)("i",{className:"phonebook"}),"Справочник"]})]})})},1463:function(e,a,t){"use strict";var s=t(7437);t(5781),a.Z=e=>{let{page:a=1,setPage:t,totalPages:n=1}=e,i=e=>{e.preventDefault(),t(e.currentTarget.dataset.page)};if(1!==n)return(0,s.jsxs)("div",{className:"pagination",children:[(0,s.jsx)("div",{className:"pagination-item prev",onClick:e=>{e.preventDefault(),t(e=>Number(e)>1?Number(e)-1:e)},children:(0,s.jsx)("i",{})}),a>1&&(0,s.jsx)("div",{className:"pagination-item","data-page":1,onClick:i,children:1}),a>4&&(0,s.jsx)("div",{className:"pagination-item ellipsis",children:(0,s.jsx)("i",{})}),a>3&&(0,s.jsx)("div",{className:"pagination-item","data-page":a-2,onClick:i,children:a-2}),a>2&&(0,s.jsx)("div",{className:"pagination-item","data-page":a-1,onClick:i,children:a-1}),(0,s.jsx)("div",{className:"pagination-item current",children:a}),n-a>1&&(0,s.jsx)("div",{className:"pagination-item","data-page":a+1,onClick:i,children:a+1}),n-a>2&&(0,s.jsx)("div",{className:"pagination-item","data-page":a+2,onClick:i,children:a+2}),n-a>3&&(0,s.jsx)("div",{className:"pagination-item ellipsis",children:(0,s.jsx)("i",{})}),a<n&&(0,s.jsx)("div",{className:"pagination-item","data-page":n,onClick:i,children:n}),(0,s.jsx)("div",{className:"pagination-item next",onClick:e=>{e.preventDefault(),t(e=>Number(e)<n?Number(e)+1:e)},children:(0,s.jsx)("i",{})})]})}},891:function(e,a,t){"use strict";var s=t(7437),n=t(8758),i=t(5330),r=t.n(i),l=t(4033);a.Z=e=>{var a;let{post:t}=e,i=(0,l.useRouter)();return(0,s.jsxs)("div",{className:"postcard",onClick:e=>{e.preventDefault(),i.push("/posts/".concat(t._id))},children:[(0,s.jsx)("div",{className:"postimage",children:t.images&&t.images.length>0?(0,s.jsx)("img",{loading:"lazy",src:"https://cna.kz/uploads/".concat(t.images[0]),alt:"preview"}):(0,s.jsx)("img",{loading:"lazy",src:"/noimage.png",alt:"noimage"})}),(0,s.jsxs)("div",{className:"info",children:[(0,s.jsxs)("div",{className:"top",children:[(0,s.jsx)("div",{className:"title",children:(0,n.i2)(t)}),(0,s.jsxs)("div",{className:"price",children:[(0,n.eS)(t.price)," 〒"]})]}),(0,s.jsxs)("div",{className:"addres",children:[t.region.name,", ",t.adress]}),t.description&&(0,s.jsx)("div",{className:"description",dangerouslySetInnerHTML:{__html:r()(null===(a=JSON)||void 0===a?void 0:a.parse(null==t?void 0:t.description))}}),(0,s.jsxs)("div",{className:"date",children:[(0,s.jsx)("span",{children:t.city.name}),(0,n.ce)(t.createdAt)]})]})]})}},8758:function(e,a,t){"use strict";t.d(a,{ce:function(){return n},eS:function(){return l},i2:function(){return d},nu:function(){return i},pQ:function(){return o},rW:function(){return c},yN:function(){return r}});let s=["янв.","февр.","март","апр.","май","июнь","июль","авг.","сент.","окт.","нояб.","дек."],n=e=>{let a=new Date().getFullYear(),t=new Date(e),n=t.getDate(),i=t.getMonth(),r=t.getFullYear();return r===a?n+" "+s[i]:n+" "+s[i]+" "+r},i=e=>{let a=new Date().getFullYear(),t=new Date(e),n=t.getDate(),i=t.getMonth(),r=t.getFullYear(),l=10>t.getHours()?"0"+t.getHours():t.getHours(),c=10>t.getMinutes()?"0"+t.getMinutes():t.getMinutes();return r===a?n+" "+s[i]+" "+l+":"+c:n+" "+s[i]+" "+r},r=e=>e>1e6?Math.round(e/1e5)/10+" млн.":e,l=e=>{if(e){var a=e.toString().split(".");a[0]=a[0].replace(/\B(?=(\d{3})+(?!\d))/g," "),e=a.join(".")}return e},c=e=>{let a="?";for(let t in e)if(Object.hasOwnProperty.call(e,t)){let s=e[t];s&&t&&("object"==typeof s?Array.isArray(s)?s.forEach(e=>{a.length>1&&(a+="&"),a+=t+"="+e}):(s.from&&(a.length>1&&(a+="&"),a+=t+"_from="+s.from),s.to&&(a.length>1&&(a+="&"),a+=t+"_to="+s.to)):(a.length>1&&(a+="&"),a+=t+"="+s))}return a},o=e=>{let a=decodeURI(e).replace(/\+/g," ").split("&"),t={};return a.forEach(e=>{let a=e.split("=");if(a[0].includes("_")){let e=a[0].split("_");t[e[0]]||(t[e[0]]={}),t[e[0]][e[1]]=a[1]}else if(t[a[0]]){if(!Array.isArray(t[a[0]])){let e=isNaN(t[a[0]])?t[a[0]]:Number(t[a[0]]);t[a[0]]=[],t[a[0]].push(e)}t[a[0]].push(isNaN(a[1])?a[1]:Number(a[1]))}else t[a[0]]=a[1]}),t},d=e=>{let a="";switch(e.housing.slug){case"apartment":a+="".concat(e.rooms,"-комнатная квартира"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.floor&&(a+=", ".concat(e.floor),e.floors&&(a+="/".concat(e.floors)),a+=" этаж");break;case"house":a+="".concat(e.rooms,"-комнатый дом"),e.area&&e.area.total&&(a+=", ".concat(e.area.total," м\xb2")),e.plot&&(a+=", ".concat(e.plot," сот."));break;case"commercial":a+="".concat(e.commercial.purpose),e.area&&e.area.total&&(a+=" - ".concat(e.area.total," м\xb2"))}return"rent"===e.posttype&&(a+=", "+e.rentPeriod.toLowerCase()),a}},4741:function(){},3556:function(){},7652:function(){},5159:function(){},3733:function(){},3698:function(){},5781:function(){},201:function(){},1396:function(e,a,t){e.exports=t(6685)},4033:function(e,a,t){e.exports=t(8165)}}]);