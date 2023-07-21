exports.id = 419;
exports.ids = [419];
exports.modules = {

/***/ 41613:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(27874);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_inputs_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const numbers = [
    1,
    2,
    3,
    4,
    5
];
const MultiNumberInput = ({ name = "", label = "", value = [], handleChange })=>{
    const onChange = (e)=>{
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        let tmp = [];
        if (!Array.isArray(value)) {
            tmp.push(Number(value));
        } else {
            tmp = [
                ...value
            ];
        }
        if (tmp.includes(Number(val))) {
            tmp = tmp.filter((el)=>Number(el) !== Number(val));
        } else {
            tmp.push(Number(val));
        }
        handleChange(name, tmp);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "input multinumber",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "numbers",
                children: numbers.map((number, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `number ${value.includes(Number(number)) ? "active" : ""}`,
                        "data-value": number,
                        onClick: onChange,
                        children: number
                    }, key))
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: label
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiNumberInput);


/***/ }),

/***/ 64188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NumberRange = ({ name = "", label = "", value, param, handleChange, labeled = false })=>{
    const numberRearange = (num)=>{
        if (num) {
            var parts = num.toString().split(".");
            parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
            num = parts.join(".");
            return num;
        }
        return num;
    };
    const onChange = (e)=>{
        e.preventDefault();
        let pref = e.currentTarget.dataset.pref;
        let val = e.currentTarget.value.replace(/\s+/g, "");
        let vl = "";
        for(let index = 0; index < val.length; index++){
            const element = val[index];
            if (Number(element) >= 0 && Number(element) <= 9 || ".") vl += element;
        }
        handleChange(name, {
            ...value,
            [pref]: vl
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `input number-range ${labeled ? "labeled" : ""}`,
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                name: `${name}1`,
                "data-pref": "from",
                placeholder: "от",
                value: numberRearange(value.from),
                onChange: onChange
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "hl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                name: `${name}2`,
                "data-pref": "to",
                placeholder: "до",
                value: numberRearange(value.to),
                onChange: onChange
            }),
            param && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "last",
                children: param === "м2" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                    children: [
                        "м",
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("sup", {
                            children: "2"
                        })
                    ]
                }) : param
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberRange);


/***/ }),

/***/ 64296:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27874);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const Select = ({ mobile = false, name = "", placeholder = null, label = "", value = "", options = [], handleChange, labeled = false })=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const onChange = (e)=>{
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        handleChange(name, val);
        setOpen(false);
    };
    const toggleOptions = (e)=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `input select ${labeled ? "labeled" : ""} ${mobile ? "mobile" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "select",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "selected",
                        onClick: toggleOptions,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "val",
                                children: value ? value : placeholder
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `options ${open ? "active" : ""}`,
                        children: [
                            placeholder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `option ${value === "" ? "active" : ""}`,
                                "data-value": null,
                                onClick: onChange,
                                children: placeholder
                            }),
                            options && options.length > 0 && options.map((option, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `option ${option === value ? "active" : ""}`,
                                    "data-value": option,
                                    onClick: onChange,
                                    children: option
                                }, key))
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Select);


/***/ }),

/***/ 52341:
/***/ (() => {



/***/ }),

/***/ 37788:
/***/ (() => {



/***/ })

};
;