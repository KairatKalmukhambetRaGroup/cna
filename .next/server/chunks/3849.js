"use strict";
exports.id = 3849;
exports.ids = [3849];
exports.modules = {

/***/ 13849:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GET: () => (/* binding */ GET),
  POST: () => (/* binding */ POST),
  getPostsByHousing: () => (/* binding */ getPostsByHousing)
});

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
;// CONCATENATED MODULE: ./src/utilFunctions/dateConvert.js
const months = (/* unused pure expression or super */ null && ([
    "янв.",
    "февр.",
    "март",
    "апр.",
    "май",
    "июнь",
    "июль",
    "авг.",
    "сент.",
    "окт.",
    "нояб.",
    "дек."
]));
const dateConvert = (dateString)=>{
    const thisYear = new Date().getFullYear();
    const date = new Date(dateString);
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    if (year === thisYear) return day + " " + months[month];
    return day + " " + months[month] + " " + year;
};
const priceToMils = (price)=>{
    if (price > 1000000) {
        const newPrice = Math.round(price / 100000) / 10;
        return newPrice + " млн.";
    }
    return price;
};
const numberRearange = (num)=>{
    if (num) {
        var parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, " ");
        num = parts.join(".");
        return num;
    }
    return num;
};
const dataToQuery = (data)=>{
    let str = "?";
    for(const key in data){
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (element && key) {
                if (typeof element === "object") {
                    if (Array.isArray(element)) {
                        element.forEach((el)=>{
                            if (str.length > 1) str += "&";
                            str += key + "=" + el;
                        });
                    } else {
                        if (element.from) {
                            if (str.length > 1) str += "&";
                            str += key + "_from=" + element.from;
                        }
                        if (element.to) {
                            if (str.length > 1) str += "&";
                            str += key + "_to=" + element.to;
                        }
                    }
                } else {
                    if (str.length > 1) str += "&";
                    str += key + "=" + element;
                }
            }
        }
    }
    return str;
};
const queryToData = (query)=>{
    const arr = decodeURI(query).replace(/\+/g, " ").split("&");
    const data = {};
    arr.forEach((element)=>{
        const els = element.split("=");
        if (els[0].includes("_")) {
            const names = els[0].split("_");
            if (!data[names[0]]) data[names[0]] = {};
            data[names[0]][names[1]] = els[1];
        } else {
            if (data[els[0]]) {
                if (!Array.isArray(data[els[0]])) {
                    const tmp = isNaN(data[els[0]]) ? data[els[0]] : Number(data[els[0]]);
                    data[els[0]] = [];
                    data[els[0]].push(tmp);
                }
                data[els[0]].push(isNaN(els[1]) ? els[1] : Number(els[1]));
            } else {
                data[els[0]] = els[1];
            }
        }
    });
    return data;
};
const queryToMongoose = (query)=>{
    const data = queryToData(query);
    for(const key in data){
        if (Object.hasOwnProperty.call(data, key)) {
            const element = data[key];
            if (!key || !data) delete data[key];
            if (typeof element === "object") {
                if (Array.isArray(element)) continue;
                let obj = {};
                if (element.from) {
                    obj["$gte"] = element.from;
                }
                if (element.to) {
                    obj["$lte"] = element.to;
                }
                data[key] = obj;
            }
        }
    }
    return data;
};
const createTitle = (post)=>{
    let title = "";
    switch(post.housing.slug){
        case "apartment":
            title += `${post.rooms}-комнатная квартира`;
            if (post.area && post.area.total) title += `, ${post.area.total} м²`;
            if (post.floor) {
                title += `, ${post.floor}`;
                if (post.floors) title += `/${post.floors}`;
                title += " этаж";
            }
            break;
        case "house":
            title += `${post.rooms}-комнатый дом`;
            if (post.area && post.area.total) title += `, ${post.area.total} м²`;
            if (post.plot) title += `, ${post.plot} сот.`;
            break;
        case "commercial":
            title += `${post.commercial.purpose}`;
            if (post.area && post.area.total) title += ` - ${post.area.total} м²`;
            break;
        default:
            break;
    }
    return title;
};

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
;// CONCATENATED MODULE: ./src/app/api/posts/route.js











async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params);
    try {
        await (0,connect/* default */.Z)();
        if (data.count) return getPostCounts();
        if (data.size) return getAllPosts(request);
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
    console.log(data);
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
        housing: apartment._id
    });
    const houses = await models_post/* default */.Z.countDocuments({
        housing: house._id
    });
    const commercials = await models_post/* default */.Z.countDocuments({
        housing: commercial._id
    });
    return next_response/* default */.Z.json({
        apartments,
        houses,
        commercials
    });
}
async function getAllPosts(request) {
    const city = await models_city/* default */.Z.findById("64db879cb7ba2c6cf87eaae2");
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params);
    if (data.size && data.size === "sm") {
        const posts = await models_post/* default */.Z.find({
            city: city._id
        }).populate({
            path: "city",
            select: "name"
        }).populate({
            path: "region",
            select: "name"
        }).populate({
            path: "housing",
            select: "slug"
        }).sort("-createdAt");
        return next_response/* default */.Z.json(posts);
    } else {
        let limit = 8;
        const apartment = await models_housing/* default */.Z.findOne({
            slug: "apartment"
        });
        const house = await models_housing/* default */.Z.findOne({
            slug: "house"
        });
        const commercial = await models_housing/* default */.Z.findOne({
            slug: "commercial"
        });
        const apartments = await models_post/* default */.Z.find({
            housing: apartment._id,
            city: city._id
        }).populate({
            path: "city",
            select: "name"
        }).populate({
            path: "region",
            select: "name"
        }).populate({
            path: "housing",
            select: "slug"
        }).limit(limit).sort("-createdAt");
        const houses = await models_post/* default */.Z.find({
            housing: house._id,
            city: city._id
        }).populate({
            path: "city",
            select: "name"
        }).populate({
            path: "region",
            select: "name"
        }).populate({
            path: "housing",
            select: "slug"
        }).limit(limit).sort("-createdAt");
        const commercials = await models_post/* default */.Z.find({
            housing: commercial._id,
            city: city._id
        }).populate({
            path: "city",
            select: "name"
        }).populate({
            path: "region",
            select: "name"
        }).populate({
            path: "housing",
            select: "slug"
        }).limit(limit).sort("-createdAt");
        return next_response/* default */.Z.json({
            apartments: apartments,
            houses: houses,
            commercials: commercials
        });
    }
}
async function getPostsByHousing(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = queryToMongoose(params);
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
    }
    if (data.region) {
        const region = await models_region/* default */.Z.findOne({
            short: data.region
        });
        data.region = region._id;
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
    delete data.sort;
    const post = await models_post/* default */.Z.find(data).populate({
        path: "city",
        select: "name"
    }).populate({
        path: "region",
        select: "name"
    }).populate({
        path: "housing",
        select: "slug"
    }).sort(sort);
    return next_response/* default */.Z.json(post);
}


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
    }
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