"use strict";
(() => {
var exports = {};
exports.id = 7155;
exports.ids = [7155];
exports.modules = {

/***/ 14021:
/***/ ((module) => {

module.exports = import("next/dist/compiled/@vercel/og/index.node.js");;

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 51369:
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

// NAMESPACE OBJECT: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__
var favicon_next_metadata_route_namespaceObject = {};
__webpack_require__.r(favicon_next_metadata_route_namespaceObject);
__webpack_require__.d(favicon_next_metadata_route_namespaceObject, {
  GET: () => (GET),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next/server.js
var server = __webpack_require__(20514);
;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-metadata-route-loader.js?page=%2Ffavicon.ico%2Froute&isDynamic=0!./src/app/favicon.ico?__next_metadata_route__


const contentType = "image/x-icon"
const buffer = Buffer.from("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", 'base64'
  )

function GET() {
  return new server.NextResponse(buffer, {
    headers: {
      'Content-Type': contentType,
      'Cache-Control': "public, max-age=0, must-revalidate",
    },
  })
}

const dynamic = 'force-static'

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Ffavicon.ico%2Froute&name=app%2Ffavicon.ico%2Froute&pagePath=private-next-app-dir%2Ffavicon.ico&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Ffavicon.ico&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/favicon.ico/route","pathname":"/favicon.ico","filename":"favicon","bundlePath":"app/favicon.ico/route"},"resolvedPagePath":"next-metadata-route-loader?page=%2Ffavicon.ico%2Froute&isDynamic=0!D:\\personal projects\\krisha-next\\src\\app\\favicon.ico?__next_metadata_route__","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: favicon_next_metadata_route_namespaceObject,
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

    const originalPathname = "/favicon.ico/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,514], () => (__webpack_exec__(51369)));
module.exports = __webpack_exports__;

})();