"use strict";
(() => {
var exports = {};
exports.id = 3569;
exports.ids = [3569];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 26247:
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

// NAMESPACE OBJECT: ./src/app/api/applications/route.js
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
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
var external_mongoose_default = /*#__PURE__*/__webpack_require__.n(external_mongoose_);
;// CONCATENATED MODULE: ./src/database/models/application.js

const applicationSchema = external_mongoose_default().Schema({
    name: String,
    phone: String,
    archive: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});
const Application = (external_mongoose_default()).models.Application || external_mongoose_default().model("Application", applicationSchema);
/* harmony default export */ const application = (Application);

// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/utilFunctions/dateConvert.js
var dateConvert = __webpack_require__(25509);
;// CONCATENATED MODULE: ./src/app/api/applications/route.js




async function POST(request) {
    const data = await request.json();
    try {
        await (0,connect/* default */.Z)();
        await application.create(data);
        return next_response/* default */.Z.json(null);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = (0,dateConvert/* queryToMongoose */.hY)(params);
    try {
        await (0,connect/* default */.Z)();
        const applications = await application.find({
            archive: data.archive
        }).sort("-createdAt");
        return next_response/* default */.Z.json(applications);
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
        await application.findByIdAndUpdate(data.id, {
            archive: true
        });
        const applications = await application.find({
            archive: data.archive
        }).sort("-createdAt");
        return next_response/* default */.Z.json(applications);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fapplications%2Froute&name=app%2Fapi%2Fapplications%2Froute&pagePath=private-next-app-dir%2Fapi%2Fapplications%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fapplications%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/applications/route","pathname":"/api/applications","filename":"route","bundlePath":"app/api/applications/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\applications\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/applications/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,6772], () => (__webpack_exec__(26247)));
module.exports = __webpack_exports__;

})();