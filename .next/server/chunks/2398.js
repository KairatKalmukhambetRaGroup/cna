"use strict";
exports.id = 2398;
exports.ids = [2398];
exports.modules = {

/***/ 12398:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GET: () => (/* binding */ GET),
/* harmony export */   POST: () => (/* binding */ POST),
/* harmony export */   getPostsByHousing: () => (/* binding */ getPostsByHousing)
/* harmony export */ });
/* harmony import */ var _database_models_post__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(96784);
/* harmony import */ var _database_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8000);
/* harmony import */ var _database_models_housing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60113);
/* harmony import */ var _database_models_city__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(62159);
/* harmony import */ var _database_models_region__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37245);
/* harmony import */ var _utilFunctions_dateConvert__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(25509);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(73292);
/* harmony import */ var fs_promises__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(fs_promises__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(71017);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(99402);
/* harmony import */ var mime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(mime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(89335);










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
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json("housing", {
            status: 401
        });
    }
    if (!data.city) {
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json("city", {
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
        const uploadDir = (0,path__WEBPACK_IMPORTED_MODULE_6__.join)(process.cwd(), "public", relativeUploadDir);
        try {
            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.stat)(uploadDir);
        } catch (e) {
            if (e.code === "ENOENT") {
                await (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.mkdir)(uploadDir, {
                    recursive: true
                });
            } else {
                console.error(e);
                return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json("Something went wrong.", {
                    status: 500
                });
            }
        }
        try {
            const uniqueSuffix = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
            const filename = `${image.name.replace(/\.[^/.]+$/, "")}-${uniqueSuffix}.${mime__WEBPACK_IMPORTED_MODULE_7___default().getExtension(image.type)}`;
            await (0,fs_promises__WEBPACK_IMPORTED_MODULE_5__.writeFile)(`${uploadDir}/${filename}`, buffer);
            imgUrls.push(filename);
        // return NextResponse.json({ fileUrl: `${relativeUploadDir}/${filename}` });
        } catch (e) {
            console.error("Error while trying to upload a file\n", e);
            return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json("Something went wrong.", {
                status: 500
            });
        }
    }
    data.images = imgUrls;
    // save to DB
    try {
        await (0,_database_connect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        const housing = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            slug: data.housing
        });
        data.housing = housing._id;
        const city = await _database_models_city__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findOne({
            name: data.city
        });
        data.city = city._id;
        if (data.region) {
            const region = await _database_models_region__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.findOne({
                name: data.region
            });
            data.region = region._id;
        }
        if (data.posttype === "sell") {
            data.rentPeriod = null;
        }
        const post = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.create(data);
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json(post);
    } catch (error) {
        console.log(error);
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json(null, {
            status: 500
        });
    }
}
async function GET(request) {
    const params = request.nextUrl.searchParams.toString();
    const data = (0,_utilFunctions_dateConvert__WEBPACK_IMPORTED_MODULE_9__/* .queryToMongoose */ .hY)(params);
    try {
        await (0,_database_connect__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z)();
        if (data.count) return getPostCounts();
        if (data.size) return getAllPosts(data);
        else return getPostsByHousing(data);
    } catch (error) {
        console.log(error);
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json(null, {
            status: 500
        });
    }
}
async function getPostCounts() {
    const apartment = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
        slug: "apartment"
    });
    const house = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
        slug: "house"
    });
    const commercial = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
        slug: "commercial"
    });
    const apartments = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.countDocuments({
        housing: apartment._id
    });
    const houses = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.countDocuments({
        housing: house._id
    });
    const commercials = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.countDocuments({
        housing: commercial._id
    });
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json({
        apartments,
        houses,
        commercials
    });
}
async function getAllPosts(data) {
    const city = await _database_models_city__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findById("64db879cb7ba2c6cf87eaae2");
    if (data.size && data.size === "sm") {
        const page = parseInt(data.page) || 1;
        const limit = 5;
        const skip = (page - 1) * limit;
        const posts = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find({
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
        }).sort("-createdAt").skip(skip).limit(limit);
        const total = Math.ceil(await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.countDocuments({
            city: city._id
        }) / limit);
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json({
            posts,
            currentPage: page,
            totalPages: total
        });
    } else {
        let limit = 8;
        const apartment = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            slug: "apartment"
        });
        const house = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            slug: "house"
        });
        const commercial = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            slug: "commercial"
        });
        const apartments = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find({
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
        const houses = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find({
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
        const commercials = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find({
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
        return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json({
            apartments: apartments,
            houses: houses,
            commercials: commercials
        });
    }
}
async function getPostsByHousing(data) {
    if (data.housing) {
        const housing = await _database_models_housing__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z.findOne({
            slug: data.housing
        });
        data.housing = housing._id;
    }
    if (data.city) {
        const city = await _database_models_city__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.findOne({
            name: data.city
        });
        data.city = city._id;
    }
    if (data.region) {
        const region = await _database_models_region__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.findOne({
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
    const post = await _database_models_post__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.find(data).populate({
        path: "city",
        select: "name"
    }).populate({
        path: "region",
        select: "name"
    }).populate({
        path: "housing",
        select: "slug"
    }).sort(sort);
    return next_dist_server_web_exports_next_response__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.json(post);
}


/***/ })

};
;