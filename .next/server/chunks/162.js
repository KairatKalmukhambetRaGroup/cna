exports.id = 162;
exports.ids = [162];
exports.modules = {

/***/ 69428:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 81390:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 58412))

/***/ }),

/***/ 58412:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ components_Header)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/styles/header.scss
var header = __webpack_require__(40365);
var header_default = /*#__PURE__*/__webpack_require__.n(header);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/browser-cookies/src/browser-cookies.js
var browser_cookies = __webpack_require__(21041);
;// CONCATENATED MODULE: ./src/utilFunctions/useUserIp.js


const useUserIp = ()=>{
    const [ip, setUserIp] = (0,react_.useState)("");
    (0,react_.useEffect)(()=>{
        const userIp = browser_cookies.get("user-ip") ?? "";
        setUserIp(userIp);
    }, []);
    return ip;
};

// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const Header = ()=>{
    const [lastVisit, setLastVisit] = (0,react_.useState)(null);
    const today = new Date().setUTCHours(0, 0, 0, 0);
    const saveUserVisit = async ()=>{
        const { data } = await axios/* default */.Z.get(`/api`, {
            validateStatus: function(status) {
                return true;
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        });
        localStorage.setItem("lastvisit", data);
        setLastVisit(data);
    };
    console.log(useUserIp());
    (0,react_.useEffect)(()=>{
        if (false) {}
    }, [
        lastVisit
    ]);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: (header_default()).header,
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "navbar",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "logo",
                        children: "CNA"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/posts",
                                children: "Продажа"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/rent",
                                children: "Аренда"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#about",
                                children: "О нас"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/phonebook",
                                children: "Справочник"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contacts",
                                children: "Контакты"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/application",
                                target: "_blank",
                                className: "btn",
                                children: "Подать объявление"
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);


/***/ }),

/***/ 43238:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ ClientLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/styles/footer.scss
var footer = __webpack_require__(10018);
;// CONCATENATED MODULE: ./src/components/Footer.jsx


const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "container",
            children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "content",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "copyright",
                    children: "\xa92023 \xabЦентр недвижимости Аркалык\xbb"
                })
            })
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(61363);
;// CONCATENATED MODULE: ./src/components/Header.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\personal projects\krisha-next\src\components\Header.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Header = (__default__);
// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(49406);
;// CONCATENATED MODULE: ./src/app/(client)/layout.js




const metadata = {
    title: "CNA - Центр Недвижимости Аркалык"
};
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
        ]
    });
}


/***/ }),

/***/ 10018:
/***/ (() => {



/***/ }),

/***/ 40365:
/***/ (() => {



/***/ }),

/***/ 49406:
/***/ (() => {



/***/ })

};
;