"use strict";
exports.id = 9081;
exports.ids = [9081];
exports.modules = {

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


/***/ }),

/***/ 25509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   hY: () => (/* binding */ queryToMongoose)
/* harmony export */ });
/* unused harmony exports dateConvert, priceToMils, numberRearange, dataToQuery, queryToData, createTitle */
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
    if (post.posttype === "rent") title += ", " + post.rentPeriod.toLowerCase();
    return title;
};


/***/ })

};
;