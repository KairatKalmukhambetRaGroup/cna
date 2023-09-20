"use strict";
(() => {
var exports = {};
exports.id = 3889;
exports.ids = [3889];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 73292:
/***/ ((module) => {

module.exports = require("fs/promises");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 51378:
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

// NAMESPACE OBJECT: ./src/app/api/advertisements/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./src/database/models/advertisement.js
var advertisement = __webpack_require__(10785);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(73292);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
// EXTERNAL MODULE: ./node_modules/mime/index.js
var mime = __webpack_require__(99402);
var mime_default = /*#__PURE__*/__webpack_require__.n(mime);
;// CONCATENATED MODULE: ./src/app/api/advertisements/route.js






async function GET() {
    try {
        await (0,connect/* default */.Z)();
        const ads = await advertisement/* default */.Z.find();
        return next_response/* default */.Z.json(ads);
    } catch (error) {
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function POST(request) {
    const formData = await request.formData();
    var data = {};
    formData.forEach(function(value, key) {
        data[key] = value;
    });
    // upload Images
    const image = await formData.get("image");
    let imgUrl = null;
    const buffer = Buffer.from(await image.arrayBuffer());
    const relativeUploadDir = `/uploads`;
    const uploadDir = (0,external_path_.join)(process.cwd(), "public", relativeUploadDir);
    try {
        await (0,promises_.stat)(uploadDir);
    } catch (e) {
        if (e.code === "ENOENT") {
            await (0,promises_.mkdir)(uploadDir, {
                recursive: true
            });
        } else {
            console.error(e);
            return next_response/* default */.Z.json("Something went wrong.", {
                status: 500
            });
        }
    }
    try {
        const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
        const filename = `${image.name.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}.${mime_default().getExtension(image.type)}`;
        await (0,promises_.writeFile)(`${uploadDir}/${filename}`, buffer);
        imgUrl = filename;
    // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
    } catch (e) {
        console.error("Error while trying to upload a file\n", e);
        return next_response/* default */.Z.json("Something went wrong.", {
            status: 500
        });
    }
    if (imgUrl) {
        data.image = imgUrl;
    }
    try {
        await (0,connect/* default */.Z)();
        const ad = await advertisement/* default */.Z.create(data);
        return next_response/* default */.Z.json(ad);
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fadvertisements%2Froute&name=app%2Fapi%2Fadvertisements%2Froute&pagePath=private-next-app-dir%2Fapi%2Fadvertisements%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fadvertisements%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/advertisements/route","pathname":"/api/advertisements","filename":"route","bundlePath":"app/api/advertisements/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\advertisements\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/advertisements/route"

    

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

/***/ 10785:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const advertisementSchema = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    name: String,
    description: String,
    image: String,
    link: String
}, {
    timestamps: true
});
const Advertisement = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Advertisement || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Advertisement", advertisementSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Advertisement);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,9402], () => (__webpack_exec__(51378)));
module.exports = __webpack_exports__;

})();