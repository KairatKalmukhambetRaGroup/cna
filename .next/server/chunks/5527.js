exports.id = 5527;
exports.ids = [5527];
exports.modules = {

/***/ 9362:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 33496))

/***/ }),

/***/ 33496:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UserContext: () => (/* binding */ UserContext),
  "default": () => (/* binding */ layout),
  metadata: () => (/* binding */ metadata),
  useUserContext: () => (/* binding */ useUserContext)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/styles/admin/sidebar.scss
var sidebar = __webpack_require__(25241);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(11440);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);
;// CONCATENATED MODULE: ./src/components/Admin/Sidebar.jsx





const AdminSidebar = ()=>{
    const { logout } = useUserContext();
    const [showMenu, setShowMenu] = (0,react_.useState)(true);
    const toggleMenu = (e)=>{
        e.preventDefault();
        setShowMenu(!showMenu);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "sidebar",
        className: `${showMenu ? "" : "hide"}`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "header",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        className: "logo",
                        children: "CNA"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("i", {
                        onClick: toggleMenu
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "content",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin",
                                children: "Панель администратора"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/advertisements",
                                children: "Рекламные баннеры"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/posts",
                                children: "Объявления"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/cities",
                                children: "Города"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/admin/phonebook",
                                children: "Справочник"
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "logout",
                        onClick: logout,
                        children: "Выйти"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Sidebar = (AdminSidebar);

// EXTERNAL MODULE: ./src/styles/admin/index.scss
var admin = __webpack_require__(73231);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(57114);
// EXTERNAL MODULE: ./src/styles/admin/login.scss
var login = __webpack_require__(10751);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
;// CONCATENATED MODULE: ./src/components/Admin/Login.jsx





const initFormData = {
    email: "",
    password: ""
};
const Login = ()=>{
    const { login } = useUserContext();
    const [formData, setFormData] = (0,react_.useState)(initFormData);
    const [error, setError] = (0,react_.useState)("");
    const loginApi = async ()=>{
        try {
            const { data, status } = await axios/* default */.Z.post(`/api/login`, formData, {
                validateStatus: function(status) {
                    return true;
                },
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
                }
            });
            console.log(data);
            if (status === 200) login(data);
            else if (status === 404 || status === 401) setError("Неправильно введен логин или пароль");
            else setError("Что-то пошло не так, попробуйте еще раз");
        } catch (error) {
            console.log(error);
            setError("Что-то пошло не так, попробуйте еще раз");
        }
    };
    const handleChange = (e)=>{
        e.preventDefault();
        const value = e.currentTarget.value;
        const name = e.currentTarget.name;
        setFormData({
            ...formData,
            [name]: value
        });
        setError("");
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        let err = null;
        if (!formData.email || !formData.password) {
            err = "Заполните объязательные поля";
        }
        if (err) {
            setError(err);
        } else {
            loginApi();
        }
    };
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        id: "login",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
            onSubmit: handleSubmit,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "title",
                    children: "Войти в систему"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "inputs",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "E-mail"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "text",
                                    name: "email",
                                    value: formData.email,
                                    onChange: handleChange
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "form-group",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    children: "Пароль"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                    type: "password",
                                    name: "password",
                                    value: formData.password,
                                    onChange: handleChange
                                })
                            ]
                        }),
                        error && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "error",
                            children: error
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                    type: "submit",
                    value: "Войти",
                    className: "submit"
                })
            ]
        })
    });
};
/* harmony default export */ const Admin_Login = (Login);

;// CONCATENATED MODULE: ./src/app/(admin)/admin/layout.js
/* __next_internal_client_entry_do_not_use__ UserContext,useUserContext,metadata,default auto */ 






const UserContext = /*#__PURE__*/ react_default().createContext();
const useUserContext = ()=>{
    return (0,react_.useContext)(UserContext);
};
const metadata = {
    title: "CNA - Панель Администратора"
};
const AdminLayout = ({ children })=>{
    const router = (0,navigation.useRouter)();
    const [userData, setUserData] = (0,react_.useState)(null);
    const logout = ()=>{
        setUserData(null);
        localStorage.removeItem("userdata");
    };
    const login = (data)=>{
        setUserData(data);
        localStorage.setItem("userdata", JSON.stringify(data));
    };
    (0,react_.useEffect)(()=>{
        if (!userData && localStorage.getItem("userdata")) {
            const data = JSON.parse(localStorage.getItem("userdata"));
            setUserData(data);
        }
    }, [
        userData
    ]);
    const value = {
        userdata: userData,
        login: login,
        logout: logout
    };
    return /*#__PURE__*/ jsx_runtime_.jsx(UserContext.Provider, {
        value: value,
        children: userData && userData.user ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(Sidebar, {}),
                /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    children: children
                })
            ]
        }) : /*#__PURE__*/ jsx_runtime_.jsx(Admin_Login, {})
    });
};
/* harmony default export */ const layout = (AdminLayout);


/***/ }),

/***/ 76068:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   UserContext: () => (/* binding */ e0),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   metadata: () => (/* binding */ e2),
/* harmony export */   useUserContext: () => (/* binding */ e1)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61363);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\personal projects\krisha-next\src\app\(admin)\admin\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["UserContext"];

const e1 = proxy["useUserContext"];

const e2 = proxy["metadata"];


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ }),

/***/ 73231:
/***/ (() => {



/***/ }),

/***/ 10751:
/***/ (() => {



/***/ }),

/***/ 25241:
/***/ (() => {



/***/ })

};
;