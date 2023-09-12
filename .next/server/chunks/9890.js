exports.id = 9890;
exports.ids = [9890];
exports.modules = {

/***/ 63843:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_filter_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85145);
/* harmony import */ var _styles_filter_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_filter_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Inputs_Select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(27832);
/* harmony import */ var _Inputs_MultiNumberInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(95618);
/* harmony import */ var _Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(82156);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(28483);
/* harmony import */ var _Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(28317);
/* __next_internal_client_entry_do_not_use__ default auto */ 






const housings = [
    "Кватиры",
    "Дома",
    "Коммерческие недвижимости"
];
const ApartmentFilter = ({ prefix, formData, handleChange, handleSubmit, regions, cities })=>{
    const handleHousingChange = (name, value)=>{
        switch(value){
            case "Кватиры":
                handleChange("housing", "apartment");
                break;
            case "Дома":
                handleChange("housing", "house");
                break;
            case "Коммерческие недвижимости":
                handleChange("housing", "commercial");
                break;
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        id: "filter",
        className: "apartment",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "navbar",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "active",
                                children: "Квартиры"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "house");
                                },
                                children: "Дома"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "commercial");
                                },
                                children: "Коммерческая недвижимость"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "top",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "regular-14-16",
                                        children: prefix
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "regular-14-16 not-mobile",
                                        children: "Квартиры"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "mobile",
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                            name: "housing",
                                            options: housings,
                                            value: "Квартиры",
                                            handleChange: handleHousingChange
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        name: "city",
                                        placeholder: "Не важно",
                                        options: cities,
                                        value: formData.city,
                                        handleChange: handleChange
                                    }),
                                    regions && regions.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_Select__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
                                        name: "region",
                                        placeholder: "Не важно",
                                        options: regions,
                                        value: formData.region,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_MultiNumberInput__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {
                                        name: "rooms",
                                        label: "- комн.",
                                        value: formData.rooms,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                        name: "price",
                                        label: "Цена",
                                        param: "тг",
                                        value: formData.price,
                                        handleChange: handleChange
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                name: "material",
                                                label: "Тип дома",
                                                placeholder: "Не важно",
                                                options: _constants__WEBPACK_IMPORTED_MODULE_6__/* .MATERIALS */ .gU,
                                                value: formData.material,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "year",
                                                label: "Год постройки",
                                                value: formData.year,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "floors",
                                                label: "Этажей в доме",
                                                value: formData.floors,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "floor",
                                                label: "Этаж",
                                                value: formData.floor,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_MultiSelect__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {
                                                name: "bathroom",
                                                label: "Сан узел",
                                                placeholder: "Не важно",
                                                options: _constants__WEBPACK_IMPORTED_MODULE_6__/* .BATHROOMS */ .fe,
                                                value: formData.bathroom,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "total_area",
                                                label: "Общая площадь",
                                                param: "м2",
                                                value: formData.total_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "kitchen_area",
                                                label: "Площадь кухни",
                                                param: "м2",
                                                value: formData.kitchen_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Inputs_NumberRange__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                                                name: "living_area",
                                                label: "Жилая площадь",
                                                param: "м2",
                                                value: formData.living_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "bottom",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "clear",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {}),
                                            " Очистить все"
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "submit",
                                        className: "submit-btn",
                                        value: "Показать результаты"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ApartmentFilter);


/***/ }),

/***/ 74524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ components_Filter)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Filter/ApartmentFilter.jsx
var ApartmentFilter = __webpack_require__(63843);
// EXTERNAL MODULE: ./src/styles/filter.scss
var filter = __webpack_require__(85145);
// EXTERNAL MODULE: ./src/components/Inputs/Select.jsx
var Select = __webpack_require__(27832);
// EXTERNAL MODULE: ./src/components/Inputs/NumberRange.jsx
var NumberRange = __webpack_require__(82156);
// EXTERNAL MODULE: ./src/constants/index.js
var constants = __webpack_require__(28483);
// EXTERNAL MODULE: ./src/components/Inputs/MultiSelect.jsx
var MultiSelect = __webpack_require__(28317);
;// CONCATENATED MODULE: ./src/components/Filter/ComercialFilter.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const housings = [
    "Кватиры",
    "Дома",
    "Коммерческие недвижимости"
];
const ComercialFilter = ({ prefix, formData, handleChange, regions, handleSubmit, cities })=>{
    const handleHousingChange = (name, value)=>{
        switch(value){
            case "Кватиры":
                handleChange("housing", "apartment");
                break;
            case "Дома":
                handleChange("housing", "house");
                break;
            case "Коммерческие недвижимости":
                handleChange("housing", "commercial");
                break;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "filter",
        className: "commercial",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "apartment");
                                },
                                children: "Квартиры"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "house");
                                },
                                children: "Дома"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "active",
                                children: "Коммерческая недвижимость"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "regular-14-16",
                                        children: prefix
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mobile",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                            name: "housing",
                                            options: housings,
                                            value: "Коммерческие недвижимости",
                                            handleChange: handleHousingChange
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                                        name: "purpose",
                                        placeholder: "Не важно",
                                        label: "Назначение",
                                        options: constants/* PURPOSES */.Kp,
                                        value: formData.purpose,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                        name: "city",
                                        placeholder: "Не важно",
                                        options: cities,
                                        value: formData.city,
                                        handleChange: handleChange
                                    }),
                                    regions && regions.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                        name: "region",
                                        placeholder: "Не важно",
                                        options: regions,
                                        value: formData.region,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                        name: "price",
                                        label: "Цена",
                                        param: "тг",
                                        value: formData.price,
                                        handleChange: handleChange
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                                            name: "placement",
                                            label: "Где размещен объект",
                                            placeholder: "Не важно",
                                            options: constants/* PLACEMENTS */.ky,
                                            value: formData.placement,
                                            handleChange: handleChange,
                                            labeled: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                            name: "total_area",
                                            label: "Общая площадь",
                                            param: "м2",
                                            value: formData.total_area,
                                            handleChange: handleChange,
                                            labeled: true
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "col"
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bottom",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "clear",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
                                            " Очистить все"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "submit",
                                        className: "submit-btn",
                                        value: "Показать результаты"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Filter_ComercialFilter = (ComercialFilter);

// EXTERNAL MODULE: ./src/components/Inputs/MultiNumberInput.jsx
var MultiNumberInput = __webpack_require__(95618);
;// CONCATENATED MODULE: ./src/components/Filter/HouseFilter.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 






const HouseFilter_housings = [
    "Кватиры",
    "Дома",
    "Коммерческие недвижимости"
];
const HouseFilter = ({ prefix, formData, handleChange, regions, handleSubmit, cities })=>{
    const handleHousingChange = (name, value)=>{
        switch(value){
            case "Кватиры":
                handleChange("housing", "apartment");
                break;
            case "Дома":
                handleChange("housing", "house");
                break;
            case "Коммерческие недвижимости":
                handleChange("housing", "commercial");
                break;
        }
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "filter",
        className: "house",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "navbar",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "nav",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "apartment");
                                },
                                children: "Квартиры"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "active",
                                children: "Дома"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                onClick: (e)=>{
                                    e.preventDefault();
                                    handleChange("housing", "commercial");
                                },
                                children: "Коммерческая недвижимость"
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("form", {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "top",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "regular-14-16",
                                        children: prefix
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "regular-14-16 not-mobile",
                                        children: "Дома"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "mobile",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                            name: "housing",
                                            options: HouseFilter_housings,
                                            value: "Дома",
                                            handleChange: handleHousingChange
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                        name: "city",
                                        placeholder: "Не важно",
                                        options: cities,
                                        value: formData.city,
                                        handleChange: handleChange
                                    }),
                                    regions && regions.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(Select/* default */.Z, {
                                        name: "region",
                                        placeholder: "Не важно",
                                        options: regions,
                                        value: formData.region,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(MultiNumberInput/* default */.Z, {
                                        name: "rooms",
                                        label: "- комн.",
                                        value: formData.rooms,
                                        handleChange: handleChange
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                        name: "price",
                                        label: "Цена",
                                        param: "тг",
                                        value: formData.price,
                                        handleChange: handleChange
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "middle",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                                                name: "material",
                                                label: "Тип строения",
                                                placeholder: "Не важно",
                                                options: constants/* MATERIALS */.gU,
                                                value: formData.material,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "floors",
                                                label: "Этажей в доме",
                                                value: formData.floors,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "year",
                                                label: "Год постройки",
                                                value: formData.year,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "plot",
                                                label: "Этаж",
                                                value: formData.plot,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                                                name: "heating",
                                                label: "Отопление",
                                                placeholder: "Не важно",
                                                options: constants/* HEATINGS */.uJ,
                                                value: formData.heating,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(MultiSelect/* default */.Z, {
                                                name: "sewerage",
                                                label: "Канализация",
                                                placeholder: "Не важно",
                                                options: constants/* SEWERAGES */.j$,
                                                value: formData.sewerage,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "col",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "total_area",
                                                label: "Общая площадь",
                                                param: "м2",
                                                value: formData.total_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "kitchen_area",
                                                label: "Площадь кухни",
                                                param: "м2",
                                                value: formData.kitchen_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx(NumberRange/* default */.Z, {
                                                name: "living_area",
                                                label: "Жилая площадь",
                                                param: "м2",
                                                value: formData.living_area,
                                                handleChange: handleChange,
                                                labeled: true
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "bottom",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "container",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "content",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "clear",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("i", {}),
                                            " Очистить все"
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "submit",
                                        className: "submit-btn",
                                        value: "Показать результаты"
                                    })
                                ]
                            })
                        })
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Filter_HouseFilter = (HouseFilter);

;// CONCATENATED MODULE: ./src/components/Filter/index.jsx




const Filter = ({ prefix = "", housing, cities, regions, formData, handleChange, handleSubmit })=>{
    if (housing === "apartment") return /*#__PURE__*/ jsx_runtime_.jsx(ApartmentFilter/* default */.Z, {
        prefix: prefix,
        cities: cities,
        regions: regions,
        formData: formData,
        handleChange: handleChange,
        handleSubmit: handleSubmit
    });
    if (housing === "house") return /*#__PURE__*/ jsx_runtime_.jsx(Filter_HouseFilter, {
        prefix: prefix,
        cities: cities,
        regions: regions,
        formData: formData,
        handleChange: handleChange,
        handleSubmit: handleSubmit
    });
    if (housing === "commercial") return /*#__PURE__*/ jsx_runtime_.jsx(Filter_ComercialFilter, {
        prefix: prefix,
        cities: cities,
        regions: regions,
        formData: formData,
        handleChange: handleChange,
        handleSubmit: handleSubmit
    });
};
/* harmony default export */ const components_Filter = (Filter);


/***/ }),

/***/ 28317:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7847);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_inputs_scss__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const MultiSelect = ({ name = "", placeholder = null, label = "", value = [], options = [], handleChange, labeled = false })=>{
    const [open, setOpen] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);
    const onChange = (e)=>{
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        if (!val) {
            handleChange(name, []);
        } else {
            let tmp = [];
            if (!Array.isArray(value)) {
                tmp.push(value);
            } else {
                tmp = [
                    ...value
                ];
            }
            if (tmp.includes(val)) {
                tmp = tmp.filter((el)=>el !== val);
            } else {
                tmp.push(val);
            }
            handleChange(name, tmp);
        }
        setOpen(false);
    };
    const toggleOptions = (e)=>{
        setOpen(!open);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `input multiselect ${labeled ? "labeled" : ""}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "select",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "selected",
                        onClick: toggleOptions,
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "val",
                                children: value && value.length > 0 ? Array.isArray(value) ? value.join(", ") : value : placeholder
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {})
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `options ${open ? "active" : ""}`,
                        children: [
                            placeholder && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `option ${value && value.length > 0 ? "" : "active"}`,
                                "data-value": null,
                                onClick: onChange,
                                children: placeholder
                            }),
                            options && options.length > 0 && options.map((option, key)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `option ${value.includes(option) ? "active" : ""}`,
                                    "data-value": option,
                                    onClick: onChange,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {
                                            className: "checkbox"
                                        }),
                                        " ",
                                        option
                                    ]
                                }, key))
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MultiSelect);


/***/ }),

/***/ 36665:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ Post_Posts)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/components/Post/PostCard.jsx
var PostCard = __webpack_require__(69476);
// EXTERNAL MODULE: ./src/styles/post.scss
var post = __webpack_require__(1978);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
;// CONCATENATED MODULE: ./src/components/Post/Sort.jsx


const Sort = ({ formData, handleChange })=>{
    const handleClick = (e)=>{
        e.preventDefault();
        const val = e.currentTarget.dataset.value;
        handleChange("sort", val);
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "sort",
        children: [
            "Сначала:",
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `${formData.sort == "new" ? "active" : ""}`,
                "data-value": "new",
                onClick: handleClick,
                children: "новые объявления"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `${formData.sort == "cheap" ? "active" : ""}`,
                "data-value": "cheap",
                onClick: handleClick,
                children: "дешевые"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: `${formData.sort == "expensive" ? "active" : ""}`,
                "data-value": "expensive",
                onClick: handleClick,
                children: "дорогие"
            })
        ]
    });
};
/* harmony default export */ const Post_Sort = (Sort);

// EXTERNAL MODULE: ./src/components/Loading.jsx
var Loading = __webpack_require__(2769);
// EXTERNAL MODULE: ./node_modules/axios/lib/axios.js + 46 modules
var axios = __webpack_require__(93258);
// EXTERNAL MODULE: ./src/components/AdvertisementCard.jsx
var AdvertisementCard = __webpack_require__(11728);
;// CONCATENATED MODULE: ./src/components/Post/Posts.jsx








const Posts = ({ posts, title = "", total = 0, formData, handleChange, loading })=>{
    const [ads, setAds] = (0,react_.useState)(null);
    const getAds = async ()=>{
        const { data } = await axios/* default */.Z.get(`/api/advertisements`, {
            validateStatus: function(status) {
                return true;
            },
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
            }
        });
        setAds(data);
    };
    (0,react_.useEffect)(()=>{
        if (!ads) getAds();
    }, [
        ads
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        id: "posts",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "heading",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "medium-24-28 text-black",
                        children: [
                            title === "apartment" && "Продажа квартир",
                            title === "house" && "Продажа домов",
                            title === "commercial" && "Продажа коммерческих недвижимостей"
                        ]
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "regular-16-20 text-black",
                        children: [
                            "Найдено объявлений: ",
                            total
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "posts",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Post_Sort, {
                        formData: formData,
                        handleChange: handleChange
                    }),
                    posts.map((post, key)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(PostCard/* default */.Z, {
                                    post: post
                                }),
                                Number(key + 1) % 5 === 0 && ads && ads.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx(AdvertisementCard/* default */.Z, {
                                    ad: ads[(Number(key + 1) / 5 - 1) % ads.length]
                                })
                            ]
                        }, key)),
                    loading ? /*#__PURE__*/ jsx_runtime_.jsx(Loading/* default */.Z, {}) : posts.length === 0 && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "none",
                        children: "По вашему запросу ничего не найдено"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const Post_Posts = (Posts);


/***/ }),

/***/ 88169:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_sidebar_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75385);
/* harmony import */ var _styles_sidebar_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_sidebar_scss__WEBPACK_IMPORTED_MODULE_1__);


const Sidebar = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "sidebar",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "content",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "banner large",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "medium-24-28 text-black",
                                children: "Ищешь покупателя для квартиры?"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "regular-16-20 text-black",
                                children: "Доверь продажу профессионалам на CNA.KZ! Максимум выгоды, минимум хлопот."
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "action",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                            href: "tel:+77055621546",
                            target: "_blank",
                            className: "btn",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("i", {}),
                                " +7 705 562 1546"
                            ]
                        })
                    })
                ]
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);


/***/ }),

/***/ 75385:
/***/ (() => {



/***/ })

};
;