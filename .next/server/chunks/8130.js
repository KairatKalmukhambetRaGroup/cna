exports.id = 8130;
exports.ids = [8130];
exports.modules = {

/***/ 10073:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50954, 23))

/***/ }),

/***/ 3097:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/* __next_internal_client_entry_do_not_use__  cjs */ 
const { createProxy } = __webpack_require__(61363);
module.exports = createProxy("D:\\personal projects\\krisha-next\\node_modules\\next\\dist\\client\\link.js");
 //# sourceMappingURL=link.js.map


/***/ }),

/***/ 25124:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

module.exports = __webpack_require__(3097);


/***/ }),

/***/ 30726:
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

// EXTERNAL MODULE: ./src/styles/header.scss
var header = __webpack_require__(11963);
var header_default = /*#__PURE__*/__webpack_require__.n(header);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(25124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/Header.jsx



const Header = ()=>{
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
                                href: "/#about",
                                children: "О нас"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/#contacts",
                                children: "Контакты"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                                href: "tel:+77055621546",
                                target: "_blank",
                                className: "btn",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
                                    " Подать объявление"
                                ]
                            })
                        ]
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const components_Header = (Header);

// EXTERNAL MODULE: ./src/styles/menu.scss
var menu = __webpack_require__(42596);
;// CONCATENATED MODULE: ./src/components/Menu.jsx



const Menu = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "menu",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/",
                className: "menu-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "home"
                    }),
                    "Главная"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                href: "tel:+77055621546",
                className: "menu-item new",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "new"
                    }),
                    "Подать"
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                href: "/about",
                className: "menu-item",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        className: "about"
                    }),
                    "О нас"
                ]
            })
        ]
    });
};
/* harmony default export */ const components_Menu = (Menu);

// EXTERNAL MODULE: ./src/styles/index.scss
var styles = __webpack_require__(49406);
;// CONCATENATED MODULE: ./src/app/(client)/layout.js





const metadata = {
    title: "CNA - Центр Недвижимости Аркалык"
};
function ClientLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Menu, {}),
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

/***/ 11963:
/***/ (() => {



/***/ }),

/***/ 49406:
/***/ (() => {



/***/ }),

/***/ 42596:
/***/ (() => {



/***/ })

};
;