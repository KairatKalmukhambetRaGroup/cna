"use strict";
(() => {
var exports = {};
exports.id = 2833;
exports.ids = [2833];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 55510:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/cities/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  PATCH: () => (PATCH),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./src/database/models/city.js
var city = __webpack_require__(62159);
// EXTERNAL MODULE: ./src/database/models/region.js
var region = __webpack_require__(37245);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/cities/route.js




async function GET() {
    try {
        await (0,connect/* default */.Z)();
        const cities = await city/* default */.Z.find();
        let arr = [];
        for (const city of cities){
            const regions = await region/* default */.Z.find({
                city: city._id
            });
            arr.push({
                _id: city._id,
                name: city.name,
                regions
            });
        }
        return next_response/* default */.Z.json(arr);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function POST(request) {
    const data = await request.json();
    try {
        await (0,connect/* default */.Z)();
        await city/* default */.Z.create(data);
        const cities = await city/* default */.Z.find();
        return next_response/* default */.Z.json(cities);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function PATCH(request) {
    const data = await request.json();
    try {
        await (0,connect/* default */.Z)();
        await city/* default */.Z.findByIdAndUpdate(data._id, {
            ...data
        });
        const cities = await city/* default */.Z.find();
        return next_response/* default */.Z.json(cities);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fcities%2Froute&name=app%2Fapi%2Fcities%2Froute&pagePath=private-next-app-dir%2Fapi%2Fcities%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fcities%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/cities/route","pathname":"/api/cities","filename":"route","bundlePath":"app/api/cities/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\cities\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/cities/route"

    

/***/ }),

/***/ 8000:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connectMongo = async ()=>mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGO_URI);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectMongo);


/***/ }),

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

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335], () => (__webpack_exec__(55510)));
module.exports = __webpack_exports__;

})();