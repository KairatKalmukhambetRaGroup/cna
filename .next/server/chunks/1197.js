exports.id = 1197;
exports.ids = [1197];
exports.modules = {

/***/ 46749:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28483);
/* harmony import */ var _styles_admin_postform_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41030);
/* harmony import */ var _styles_admin_postform_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_postform_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(93258);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Inputs_RichText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(15863);






const initFormData = {
    housing: "apartment",
    region: "",
    rooms: 0,
    price: 0,
    adress: "",
    description: "",
    material: "",
    year: "",
    floor: 0,
    floors: 0,
    state: "",
    roofing: "",
    sewerage: "",
    fencing: "",
    electricity: "",
    heating: "",
    gas: "",
    water: "",
    plot: "",
    realtor: {
        name: "",
        phone: ""
    },
    area: {
        total: "",
        kitchen: "",
        living: ""
    },
    bathroom: "",
    balcony: {
        value: "",
        glazed: false
    },
    telephone: "",
    internet: "",
    furnished: "",
    commercial: {
        purpose: "",
        placement: ""
    }
};
const modalSuccessCreation = {
    type: "success",
    title: "Объявление успешно создано"
};
const modalSuccessEdit = {
    type: "success",
    title: "Объявление успешно изменена"
};
const modalFail = {
    type: "fail",
    title: "Что-то пошло не так",
    subtitle: "Попробуйте позже или обновите страницу."
};
const PostForm = ({ post = null })=>{
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initFormData);
    const [regions, setRegions] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [previews, setPreviews] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [modalText, setModalText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const getRegions = async ()=>{
        const { data } = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.get(`/api/regions`, {
            validateStatus: function(status) {
                return true;
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        });
        setRegions(data);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (!regions) {
            getRegions();
        } else {
            if (!post || !post._id) {
                setFormData({
                    ...formData,
                    region: regions[0].name
                });
            }
        }
    }, [
        regions
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (post && post._id) {
            setFormData({
                ...formData,
                ...post,
                region: post.region.name,
                housing: post.housing.slug
            });
            let prevs = [];
            for(let i = 0; i < post.images.length; i++){
                prevs.push("/uploads/" + post.images[i]);
            }
            setPreviews([
                ...prevs
            ]);
        }
    }, [
        post
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.currentTarget;
        if (name.includes("_")) {
            let f = name.split("_");
            let f1 = f[0];
            let f2 = f[1];
            setFormData({
                ...formData,
                [f1]: {
                    ...formData[f1],
                    [f2]: value
                }
            });
        } else {
            setFormData({
                ...formData,
                [name]: value
            });
        }
    };
    const handleDescriptionChange = (value)=>{
        setFormData({
            ...formData,
            description: value
        });
    };
    const clear = (e)=>{
        e.preventDefault();
        if (post && post._id) {
            setFormData({
                ...initFormData,
                ...post,
                region: post.region.name,
                housing: post.housing.slug
            });
        } else {
            setFormData(initFormData);
        }
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        save();
    };
    const delay = (ms)=>new Promise((res)=>setTimeout(res, ms));
    const save = async ()=>{
        const fd = new FormData();
        for(let i in formData){
            let value = formData[i];
            if (typeof value === "object") {
                for(let j in value){
                    let subval = formData[i][j];
                    fd.append(`${i}[${j}]`, subval);
                }
            } else {
                fd.append(i, value);
            }
        }
        for(let i = 0; i < previews.length; i++){
            const prev = previews[i].split("/uploads/")[1];
            if (post && post.images.includes(prev)) {
                fd.append("images", prev);
            }
        }
        images.map((img)=>{
            fd.append("images", img);
        });
        if (post && post._id) {
            const { data, status } = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.patch(`/api/posts/${post._id}`, fd, {
                validateStatus: function(status) {
                    return true;
                },
                headers: {
                    "Content-Type": "multift/form-data"
                }
            });
            if (status === 200) {
                setFormData({
                    ...formData,
                    ...data,
                    region: data.region.name,
                    housing: data.housing.slug
                });
                setModalText(modalSuccessEdit);
            } else {
                setModalText(modalFail);
            }
        } else {
            const { data, status } = await axios__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z.post(`/api/posts`, fd, {
                validateStatus: function(status) {
                    return true;
                },
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (status === 200) {
                setModalText(modalSuccessCreation);
                await delay(3000);
            // router.push(`/admin/posts/${data._id}`);
            } else {
                setModalText(modalFail);
            }
        }
    };
    const [images, setImages] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    const [currentImage, setCurrentImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const handleImageUpload = (e)=>{
        const files = e.target.files;
        let imgList = [];
        let prevList = [];
        for(let i = 0; i < files.length; i++){
            const file = files[i];
            const fileType = file["type"];
            const validImageTypes = [
                "image/jpeg",
                "image/png",
                "image/webp"
            ];
            if (validImageTypes.includes(fileType)) {
                imgList.push(file);
                prevList.push(URL.createObjectURL(file));
            }
        }
        setImages([
            ...images,
            ...imgList
        ]);
        setPreviews([
            ...previews,
            ...prevList
        ]);
    };
    const deleteImage = (index)=>{
        let inImages = false;
        const tmpPrev = previews[index];
        const tmpPrevI = previews[index].split("/uploads/")[1];
        if (post.images && post.images.includes(tmpPrevI)) inImages = true;
        if (!inImages) {
            const tmpImg = images[index];
            setImages(images.filter((img)=>img != tmpImg));
        }
        setPreviews(previews.filter((prev)=>prev != tmpPrev));
        setCurrentImage(Math.max(0, index - 1));
    };
    const clearImages = (e)=>{
        e.preventDefault();
        setImages([]);
        setPreviews([]);
        setCurrentImage(0);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "postForm",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuccessModal, {
                text: modalText,
                setText: setModalText
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "inputs",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "images-container",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "current-image",
                                                        children: previews && previews.length > 0 && previews[currentImage] ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: previews[currentImage],
                                                                    alt: "prev"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                                                    className: "delete",
                                                                    onClick: (e)=>{
                                                                        e.preventDefault();
                                                                        deleteImage(currentImage);
                                                                    }
                                                                })
                                                            ]
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "noimage",
                                                            children: "Нет изображения"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "images",
                                                        children: previews && previews.map((image, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: `img ${currentImage === key ? "active" : ""} `,
                                                                onClick: (e)=>{
                                                                    e.preventDefault();
                                                                    setCurrentImage(key);
                                                                },
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: image,
                                                                    alt: `prev${key}`
                                                                })
                                                            }, key))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "btns",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "btn clear",
                                                        onClick: clearImages,
                                                        children: "Очистить изображения"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                        className: "btn save",
                                                        children: [
                                                            "Загрузить",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                type: "file",
                                                                multiple: true,
                                                                name: "images",
                                                                onChange: handleImageUpload
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Имя Риелтора"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "realtor_name",
                                                        required: true,
                                                        value: formData.realtor.name,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Тел. Номер Риелтора"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "realtor_phone",
                                                        value: formData.realtor.phone,
                                                        onChange: handleChange,
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Тип недвижимости"
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                        disabled: post && post._id,
                                                        name: "housing",
                                                        value: formData.housing,
                                                        required: true,
                                                        onChange: handleChange,
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "apartment",
                                                                children: "Квартира"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "house",
                                                                children: "Дом"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: "commercial",
                                                                children: "Коммерческая недвижимость"
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Район"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("select", {
                                                        name: "region",
                                                        value: formData.region,
                                                        onChange: handleChange,
                                                        required: true,
                                                        children: regions && regions.map((region)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: region.name,
                                                                children: region.name
                                                            }, region._id))
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Адрес"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "adress",
                                                        required: true,
                                                        value: formData.adress,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Цена"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        name: "price",
                                                        value: formData.price,
                                                        onChange: handleChange,
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Год построки:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "year",
                                                        value: formData.year,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Количество комнат:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        name: "rooms",
                                                        value: formData.rooms,
                                                        onChange: handleChange,
                                                        required: true
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Этаж:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        name: "floor",
                                                        value: formData.floor,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Этажей в зданий:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "number",
                                                        name: "floors",
                                                        value: formData.floors,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group number",
                                        required: true,
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Общая площадь:"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "area_total",
                                                inputMode: "decimal",
                                                pattern: "[0-9]*[.,]?[0-9]*",
                                                value: formData.area.total,
                                                onChange: handleChange
                                            })
                                        ]
                                    }),
                                    formData.housing !== "commercial" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Жилая площадь:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "area_living",
                                                        inputMode: "decimal",
                                                        pattern: "[0-9]*[.,]?[0-9]*",
                                                        value: formData.area.living,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group number",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Площадь кухни:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "area_kitchen",
                                                        inputMode: "decimal",
                                                        pattern: "[0-9]*[.,]?[0-9]*",
                                                        value: formData.area.kitchen,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    formData.housing !== "apartment" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group number",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Участок (сот.):"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "plot",
                                                inputMode: "decimal",
                                                pattern: "[0-9]*[.,]?[0-9]*",
                                                value: formData.plot,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Тип строения"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "material",
                                                value: formData.material,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .MATERIALS */ .gU.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Состояние"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "state",
                                                value: formData.state,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .STATES */ .PO.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Санузел"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "bathroom",
                                                value: formData.bathroom,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .BATHROOMS */ .fe.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Мебилирована"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "furnished",
                                                value: formData.furnished,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .FURNISHED */ .pd.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Интернет"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "internet",
                                                value: formData.internet,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .INTERNET */ .rS.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Телефон"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "telephone",
                                                value: formData.telephone,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .TELEPHONE */ .Dl.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Балкон"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "balcony",
                                                value: formData.balcony?.value,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .BALCONY */ .Yf.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "form-group check",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                    type: "checkbox",
                                                    name: "balcony_glazed",
                                                    id: "",
                                                    value: formData.balcony?.glazed,
                                                    onChange: handleChange
                                                }),
                                                "Балкон остеклен"
                                            ]
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Электричество"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "electricity",
                                                value: formData.electricity,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .ELECTRICITY */ .$5.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Канализация"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "sewerage",
                                                value: formData.sewerage,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .SEWERAGES */ .j$.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Газ"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "gas",
                                                value: formData.gas,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .GAS */ .OV.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Питьевая вода"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "water",
                                                value: formData.water,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .WATER */ .aU.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Отопление"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "heating",
                                                value: formData.heating,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .HEATINGS */ .uJ.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Покрытие крыши"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "roofing",
                                                value: formData.roofing,
                                                onChange: handleChange
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Как огорожен участок"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                type: "text",
                                                name: "fencing",
                                                value: formData.fencing,
                                                onChange: handleChange
                                            })
                                        ]
                                    })
                                ]
                            }),
                            formData.housing === "commercial" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "row",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Назначение"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "commercial_purpose",
                                                required: true,
                                                value: formData.commercial?.purpose,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .PURPOSES */ .Kp.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "form-group",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                children: "Где размещен объект"
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                name: "commercial_placement",
                                                value: formData.commercial?.placement,
                                                onChange: handleChange,
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                        value: "",
                                                        children: "не важно"
                                                    }),
                                                    _constants__WEBPACK_IMPORTED_MODULE_5__/* .PLACEMENTS */ .ky.map((el, key)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                            value: el,
                                                            children: el
                                                        }, key))
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_RichText__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                value: formData.description,
                                handleChange: handleDescriptionChange
                            }, "rich1")
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "btns",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "btn clear",
                                onClick: clear,
                                children: post && post._id ? "Сбросить изменения" : "Очистить"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "submit",
                                className: "btn save",
                                value: "Сохранить"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PostForm);
const SuccessModal = ({ text, setText })=>{
    const close = (e)=>{
        e.preventDefault();
        setText(null);
    };
    if (!text) return;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "modal",
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `content ${text?.type}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {}),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "text",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "title",
                            children: text?.title
                        }),
                        text && text.subtitle && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "subtitle",
                            children: text.subtitle
                        })
                    ]
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "btn",
                    onClick: close,
                    children: "ОК"
                })
            ]
        })
    });
};


/***/ }),

/***/ 39706:
/***/ (() => {



/***/ }),

/***/ 41030:
/***/ (() => {



/***/ })

};
;