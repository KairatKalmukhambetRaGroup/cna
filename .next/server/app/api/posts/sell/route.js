"use strict";
(() => {
var exports = {};
exports.id = 2327;
exports.ids = [2327];
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

/***/ 20623:
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

// NAMESPACE OBJECT: ./src/app/api/posts/sell/route.js
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
// EXTERNAL MODULE: external "mongoose"
var external_mongoose_ = __webpack_require__(11185);
// EXTERNAL MODULE: ./src/database/connect.js
var connect = __webpack_require__(8000);
// EXTERNAL MODULE: ./src/database/models/post.js
var models_post = __webpack_require__(96784);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(89335);
// EXTERNAL MODULE: ./src/database/models/housing.js
var models_housing = __webpack_require__(60113);
// EXTERNAL MODULE: ./src/utilFunctions/dateConvert.js
var dateConvert = __webpack_require__(25509);
// EXTERNAL MODULE: ./src/database/models/region.js
var models_region = __webpack_require__(37245);
// EXTERNAL MODULE: external "fs/promises"
var promises_ = __webpack_require__(73292);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(71017);
// EXTERNAL MODULE: ./node_modules/mime/index.js
var mime = __webpack_require__(99402);
var mime_default = /*#__PURE__*/__webpack_require__.n(mime);
// EXTERNAL MODULE: ./src/database/models/city.js
var models_city = __webpack_require__(62159);
// EXTERNAL MODULE: ./src/database/models/userpostvisit.js
var userpostvisit = __webpack_require__(91708);
;// CONCATENATED MODULE: ./src/app/api/posts/sell/route.js












async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = (0,dateConvert/* queryToMongoose */.hY)(params);
    try {
        await (0,connect/* default */.Z)();
        if (data.count) return getPostCounts();
        else return getPostsByHousing(request);
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function POST(request) {
    const formData = await request.formData();
    // check data
    var data = {};
    formData.forEach(function(value, key) {
        if (key.includes("[")) {
            let keys = key.split("[");
            if (!data[keys[0]]) data[keys[0]] = {};
            keys[1] = keys[1].split("]")[0];
            data[keys[0]][keys[1]] = value;
        } else {
            data[key] = value;
        }
    });
    if (!data.housing) {
        return next_response/* default */.Z.json("housing", {
            status: 401
        });
    }
    if (!data.city) {
        return next_response/* default */.Z.json("city", {
            status: 401
        });
    }
    // if(!data.region){
    //     return NextResponse.json("region", {status: 401});
    // }
    // upload Images
    const images = await formData.getAll("images");
    let imgUrls = [];
    for(let i = 0; i < images.length; i++){
        const image = images[i];
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
            imgUrls.push(filename);
        // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
        } catch (e) {
            console.error("Error while trying to upload a file\n", e);
            return next_response/* default */.Z.json("Something went wrong.", {
                status: 500
            });
        }
    }
    data.images = imgUrls;
    // save to DB
    try {
        await (0,connect/* default */.Z)();
        const housing = await models_housing/* default */.Z.findOne({
            slug: data.housing
        });
        data.housing = housing._id;
        const city = await models_city/* default */.Z.findOne({
            name: data.city
        });
        data.city = city._id;
        if (data.region) {
            const region = await models_region/* default */.Z.findOne({
                name: data.region
            });
            data.region = region._id;
        }
        data.posttype = "sell";
        const post = await models_post/* default */.Z.create(data);
        return next_response/* default */.Z.json(post);
    } catch (error) {
        console.log(error);
        return next_response/* default */.Z.json(null, {
            status: 500
        });
    }
}
async function getPostCounts() {
    const apartment = await models_housing/* default */.Z.findOne({
        slug: "apartment"
    });
    const house = await models_housing/* default */.Z.findOne({
        slug: "house"
    });
    const commercial = await models_housing/* default */.Z.findOne({
        slug: "commercial"
    });
    const apartments = await models_post/* default */.Z.countDocuments({
        housing: apartment._id,
        posttype: "sell"
    });
    const houses = await models_post/* default */.Z.countDocuments({
        housing: house._id,
        posttype: "sell"
    });
    const commercials = await models_post/* default */.Z.countDocuments({
        housing: commercial._id,
        posttype: "sell"
    });
    return next_response/* default */.Z.json({
        apartments,
        houses,
        commercials
    });
}
async function getPostsByHousing(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = (0,dateConvert/* queryToMongoose */.hY)(params);
    if (data.housing) {
        const housing = await models_housing/* default */.Z.findOne({
            slug: data.housing
        });
        data.housing = housing._id;
    }
    if (data.city) {
        const city = await models_city/* default */.Z.findOne({
            name: data.city
        });
        data.city = city._id;
        if (data.region) {
            const region = await models_region/* default */.Z.findOne({
                short: data.region
            });
            data.region = region._id;
        }
    } else {
        delete data.region;
    }
    const sortValue = data.sort ? data.sort : "new";
    let sort = "";
    switch(sortValue){
        case "cheap":
            sort = "price";
            break;
        case "expensive":
            sort = "-price";
            break;
        default:
            sort = "-createdAt";
    }
    const page = parseInt(data.page) || 1;
    const limit = 10;
    const skip = (page - 1) * limit;
    delete data.sort;
    delete data.page;
    data.posttype = "sell";
    const posts = await models_post/* default */.Z.find({
        ...data
    }).populate({
        path: "city",
        select: "name"
    }).populate({
        path: "region",
        select: "name"
    }).populate({
        path: "housing",
        select: "slug"
    }).sort(sort).skip(skip).limit(limit).lean();
    const postIds = posts.map((post)=>post._id);
    const visits = await userpostvisit/* default */.Z.aggregate([
        {
            $match: {
                postId: {
                    $in: postIds
                } // Match visits with the extracted post IDs
            }
        },
        {
            $group: {
                _id: "$postId",
                visits: {
                    $sum: 1
                } // Calculate the count of visits
            }
        }
    ]);
    // Map the visit count to each post
    const postsWithVisits = posts.map((post)=>{
        const matchingVisit = visits.find((visit)=>visit._id.equals(post._id));
        return {
            ...post,
            visits: matchingVisit ? matchingVisit.visits : 0
        };
    });
    const count = await models_post/* default */.Z.countDocuments(data);
    const total = Math.ceil(count / limit);
    return next_response/* default */.Z.json({
        posts: postsWithVisits,
        currentPage: page,
        totalPages: total,
        count
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2Fsell%2Froute&name=app%2Fapi%2Fposts%2Fsell%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2Fsell%2Froute.js&appDir=D%3A%5Cpersonal%20projects%5Ckrisha-next%5Csrc%5Capp&appPaths=%2Fapi%2Fposts%2Fsell%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/posts/sell/route","pathname":"/api/posts/sell","filename":"route","bundlePath":"app/api/posts/sell/route"},"resolvedPagePath":"D:\\personal projects\\krisha-next\\src\\app\\api\\posts\\sell\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/posts/sell/route"

    

/***/ }),

/***/ 91708:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(96784);


const userPostVisit = mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema({
    ip: {
        type: String,
        required: true
    },
    postId: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: _post__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,
        required: true
    },
    timestamp: {
        type: Date,
        required: true
    }
});
const UserPostVisit = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).UserPostVisit || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("UserPostVisit", userPostVisit);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UserPostVisit);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2697,5501,9335,9402,6772,6784], () => (__webpack_exec__(20623)));
module.exports = __webpack_exports__;

})();