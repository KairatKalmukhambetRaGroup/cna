exports.id = 3819;
exports.ids = [3819];
exports.modules = {

/***/ 69428:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 31232, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 52987, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50831, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 56926, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 44282, 23))

/***/ }),

/***/ 48226:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_admin_advertisements_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(92063);
/* harmony import */ var _styles_admin_advertisements_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_admin_advertisements_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93258);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const initFormData = {
    name: "",
    description: "",
    link: ""
};
const modalSuccessCreation = {
    type: "success",
    title: "Баннер успешно создан"
};
const modalSuccessEdit = {
    type: "success",
    title: "Баннер успешно изменен"
};
const modalFail = {
    type: "fail",
    title: "Что-то пошло не так",
    subtitle: "Попробуйте позже или обновите страницу."
};
const AdvertisementForm = ({ ad = null })=>{
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(initFormData);
    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    const [modalText, setModalText] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (ad && ad._id) {
            setFormData({
                ...formData,
                ...ad
            });
            setPreview(`/uploads/${ad.image}`);
        }
    }, [
        ad
    ]);
    const handleChange = (e)=>{
        const { name, value } = e.currentTarget;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    const clear = (e)=>{
        e.preventDefault();
        if (ad && ad._id) {
            setFormData({
                ...initFormData,
                ...ad
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
            fd.append(i, value);
        }
        if (image) {
            fd.append("image", image);
        }
        if (ad && ad._id) {
            const { data, status } = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.patch(`/api/advertisements/${ad._id}`, fd, {
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
                    ...data
                });
                setModalText(modalSuccessEdit);
            } else {
                setModalText(modalFail);
            }
        } else {
            const { data, status } = await axios__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z.post(`/api/advertisements`, fd, {
                validateStatus: function(status) {
                    return true;
                },
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            if (status === 200) {
                setModalText(modalSuccessCreation);
            // await delay(3000);
            // router.push(`/admin/posts/${data._id}`);
            } else {
                setModalText(modalFail);
            }
        }
    };
    const handleImageUpload = (e)=>{
        const file = e.target.files[0];
        const fileType = file["type"];
        const validImageTypes = [
            "image/jpeg",
            "image/png",
            "image/webp"
        ];
        if (validImageTypes.includes(fileType)) {
            setImage(file);
            setPreview(URL.createObjectURL(file));
        }
    };
    const deleteImage = (e)=>{
        e.preventDefault();
        setImage(null);
        setPreview(null);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "adForm",
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
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "image-container",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "preview",
                                                    children: preview ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: preview,
                                                        alt: "prev"
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: "noimage",
                                                        children: "Нет изображения"
                                                    })
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "btns",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "btn clear",
                                                            onClick: deleteImage,
                                                            children: "Удалить изображение"
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", {
                                                            className: "btn save",
                                                            children: [
                                                                "Загрузить",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                    type: "file",
                                                                    name: "images",
                                                                    onChange: handleImageUpload
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Название"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "text",
                                                        name: "name",
                                                        required: true,
                                                        value: formData.name,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: "form-group",
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                                        children: "Ссылка"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        type: "url",
                                                        name: "link",
                                                        value: formData.link,
                                                        onChange: handleChange
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "row",
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                                            children: "Описание"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                            name: "description",
                                            style: {
                                                width: "100%"
                                            },
                                            rows: "10",
                                            value: formData.description,
                                            onChange: handleChange
                                        })
                                    ]
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "btns",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "btn clear",
                                onClick: clear,
                                children: ad && ad._id ? "Сбросить изменения" : "Очистить"
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvertisementForm);
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

/***/ 92063:
/***/ (() => {



/***/ }),

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ })

};
;