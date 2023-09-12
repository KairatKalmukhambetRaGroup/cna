"use strict";
exports.id = 2062;
exports.ids = [2062];
exports.modules = {

/***/ 42062:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ce: () => (/* binding */ dateConvert),
/* harmony export */   eS: () => (/* binding */ numberRearange),
/* harmony export */   i2: () => (/* binding */ createTitle),
/* harmony export */   pQ: () => (/* binding */ queryToData),
/* harmony export */   rW: () => (/* binding */ dataToQuery),
/* harmony export */   yN: () => (/* binding */ priceToMils)
/* harmony export */ });
/* unused harmony export queryToMongoose */
const months = [
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
];
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