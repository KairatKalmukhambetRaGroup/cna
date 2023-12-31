"use strict";
(() => {
var exports = {};
exports.id = 4678;
exports.ids = [4678];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 33755:
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

// NAMESPACE OBJECT: ./src/app/api/visits/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (GET)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(42394);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(69692);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./src/database/models/userphonebookvisit.js
var userphonebookvisit = __webpack_require__(15942);
// EXTERNAL MODULE: ./src/database/models/uservisit.js
var uservisit = __webpack_require__(39077);
// EXTERNAL MODULE: ./src/utilFunctions/dateConvert.js
var dateConvert = __webpack_require__(25509);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
;// CONCATENATED MODULE: ./src/app/api/visits/route.js





async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = (0,dateConvert/* queryToMongoose */.hY)(params);
    const timePeriod = data.timeperiod || "lastWeek";
    try {
        await (0,connect/* default */.Z)();
        const today = new Date();
        let filter = {};
        let groupByFormat = "";
        if (timePeriod === "lastWeek") {
            const lastWeekStart = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 7);
            filter = {
                timestamp: {
                    $gte: lastWeekStart
                }
            };
            groupByFormat = "%d.%m.%Y";
        } else if (timePeriod === "lastMonth") {
            const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, today.getDate());
            filter = {
                timestamp: {
                    $gte: lastMonthStart
                }
            };
            groupByFormat = "%V.%Y";
        } else if (timePeriod === "lastYear") {
            const lastYearStart = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
            filter = {
                timestamp: {
                    $gte: lastYearStart
                }
            };
            groupByFormat = "%m.%Y";
        }
        const visitCounts = await uservisit/* default */.Z.aggregate([
            {
                $match: filter
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: groupByFormat,
                            date: "$timestamp"
                        }
                    },
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]);
        const phonebookVisits = await userphonebookvisit/* default */.Z.aggregate([
            {
                $match: filter
            },
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: groupByFormat,
                            date: "$timestamp"
                        }
                    },
                    count: {
                        $sum: 1
                    }
                }
            },
            {
                $sort: {
                    _id: 1
                }
            }
        ]);
        return next_response/* default */.Z.json({
            visitCounts,
            phonebookVisits,
            timePeriod
        });
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fvisits%2Froute&name=app%2Fapi%2Fvisits%2Froute&pagePath=private-next-app-dir%2Fapi%2Fvisits%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fvisits%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/visits/route","pathname":"/api/visits","filename":"route","bundlePath":"app/api/visits/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\visits\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/visits/route"

    

/***/ }),

/***/ 15942:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

// import Post from "./post";
const userPhonebookVisit = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    ip: {
        type: String,
        required: true
    },
    // postId: {type: mongoose.Schema.Types.ObjectId, ref: Post, required: true},
    timestamp: {
        type: Date,
        required: true
    }
});
const UserPhonebookVisit = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserPhonebookVisit || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("UserPhonebookVisit", userPhonebookVisit);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPhonebookVisit);


/***/ }),

/***/ 39077:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

// import Post from "./post";
const userVisit = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    ip: {
        type: String,
        required: true
    },
    // postId: {type: mongoose.Schema.Types.ObjectId, ref: Post, required: true},
    timestamp: {
        type: Date,
        required: true
    }
});
const UserVisit = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserVisit || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("UserVisit", userVisit);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserVisit);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,6772], () => (__webpack_exec__(33755)));
module.exports = __webpack_exports__;

})();