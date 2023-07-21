"use strict";
exports.id = 63;
exports.ids = [63];
exports.modules = {

/***/ 4082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongo = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);


/***/ }),

/***/ 60249:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const housingSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    slug: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});
const Housing = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Housing || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Housing", housingSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Housing);


/***/ }),

/***/ 91635:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _housing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(60249);


const regionSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    short: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
    },
    housings: [
        {
            type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
            ref: _housing__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
        }
    ]
}, {
    timestamps: true
});
const Region = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Region || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Region", regionSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Region);


/***/ })

};
;