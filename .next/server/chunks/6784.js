"use strict";
exports.id = 6784;
exports.ids = [6784];
exports.modules = {

/***/ 62159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const citySchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    name: String
}, {
    timestamps: true
});
const City = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).City || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("City", citySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (City);


/***/ }),

/***/ 60113:
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

/***/ 96784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _region__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37245);
/* harmony import */ var _housing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60113);
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62159);




const postSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    housing: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,
        required: true
    },
    city: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _city__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,
        required: true
    },
    region: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _region__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    },
    images: [
        String
    ],
    realtor: {
        name: String,
        phone: String
    },
    rooms: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    adress: {
        type: String,
        required: true
    },
    description: String,
    material: String,
    year: String,
    floor: Number,
    floors: Number,
    state: String,
    roofing: String,
    sewerage: String,
    fencing: String,
    electricity: String,
    heating: String,
    gas: String,
    water: String,
    plot: String,
    area: {
        total: String,
        kitchen: String,
        living: String
    },
    bathroom: String,
    balcony: {
        value: String,
        glazed: Boolean
    },
    telephone: String,
    internet: String,
    furnished: String,
    commercial: {
        purpose: String,
        placement: String
    },
    posttype: String,
    rentPeriod: String
}, {
    timestamps: true
});
const Post = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Post", postSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Post);


/***/ }),

/***/ 37245:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _city__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62159);


const regionSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    short: {
        type: String,
        required: true
    },
    city: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _city__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    },
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
const Region = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Region || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Region", regionSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Region);


/***/ })

};
;