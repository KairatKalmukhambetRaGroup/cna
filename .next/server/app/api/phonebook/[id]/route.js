"use strict";
(() => {
var exports = {};
exports.id = 9983;
exports.ids = [9983];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 69290:
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

// NAMESPACE OBJECT: ./src/app/api/phonebook/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./src/database/models/phonebook.js
var phonebook = __webpack_require__(20575);
// EXTERNAL MODULE: ./src/database/models/phonebookcategory.js
var phonebookcategory = __webpack_require__(59227);
// EXTERNAL MODULE: ./src/utilFunctions/dateConvert.js
var dateConvert = __webpack_require__(25509);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/phonebook/[id]/route.js





async function DELETE(request, context) {
    const { id } = context.params;
    const params = request.nextUrl.searchParams.toString();
    const data = (0,dateConvert/* queryToMongoose */.hY)(params);
    try {
        await (0,connect/* default */.Z)();
        await phonebook/* default */.Z.findByIdAndDelete(id);
        let category = await phonebookcategory/* default */.Z.findById(data.category);
        const phonebooks = await phonebook/* default */.Z.find({
            category: category._id
        }).sort("name");
        return next_response/* default */.Z.json(phonebooks);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function GET(request, context) {
    const { id } = context.params;
    try {
        await (0,connect/* default */.Z)();
        const contact = await phonebook/* default */.Z.findById(id).populate("category");
        return next_response/* default */.Z.json(contact);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fphonebook%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fphonebook%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fphonebook%2F%5Bid%5D%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fphonebook%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/phonebook/[id]/route","pathname":"/api/phonebook/[id]","filename":"route","bundlePath":"app/api/phonebook/[id]/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\phonebook\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/phonebook/[id]/route"

    

/***/ }),

/***/ 20575:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _phonebookcategory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59227);


const phonebookSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    name: String,
    phone: String,
    whatsapp: String,
    telegram: String,
    email: String,
    address: String,
    description: String,
    category: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _phonebookcategory__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    }
}, {
    timestamps: true
});
const PhoneBook = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).PhoneBook || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("PhoneBook", phonebookSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneBook);


/***/ }),

/***/ 59227:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const phonebookCategorySchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    name: String
}, {
    timestamps: true
});
const PhoneBookCategory = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).PhoneBookCategory || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("PhoneBookCategory", phonebookCategorySchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PhoneBookCategory);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,6772], () => (__webpack_exec__(69290)));
module.exports = __webpack_exports__;

})();