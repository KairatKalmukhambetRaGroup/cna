"use strict";
exports.id = 5863;
exports.ids = [5863];
exports.modules = {

/***/ 15863:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(57990);
/* harmony import */ var draft_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(draft_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(47335);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7847);
/* harmony import */ var _styles_inputs_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_inputs_scss__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(97673);
/* harmony import */ var react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_draft_wysiwyg_dist_react_draft_wysiwyg_css__WEBPACK_IMPORTED_MODULE_5__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


// import { Editor } from 'react-draft-wysiwyg';



const DynamicEditor = next_dynamic__WEBPACK_IMPORTED_MODULE_3___default()(null, {
    loadableGenerated: {
        modules: [
            "D:\\personal projects\\krisha-next\\src\\components\\Inputs\\RichText.jsx -> " + "react-draft-wysiwyg"
        ]
    },
    ssr: false
});
const RichText = ({ value = null, handleChange })=>{
    const [val, setVal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [editorState, setEditorState] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(()=>{
        draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createEmpty();
    });
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (value && !val) {
            setVal(value);
            if (isJSON(value)) {
                setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createWithContent((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertFromRaw)(JSON.parse(value))));
            } else {
                setEditorState(draft_js__WEBPACK_IMPORTED_MODULE_2__.EditorState.createWithContent(draft_js__WEBPACK_IMPORTED_MODULE_2__.ContentState.createFromBlockArray((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertFromHTML)(`<p>${value}</p>`))));
            }
        }
    }, [
        value
    ]);
    function isJSON(str) {
        try {
            return JSON.parse(str) && !!str;
        } catch (e) {
            return false;
        }
    }
    const updateTextDescription = (state)=>{
        setEditorState(state);
        const contentState = state.getCurrentContent();
        handleChange(JSON.stringify((0,draft_js__WEBPACK_IMPORTED_MODULE_2__.convertToRaw)(contentState)));
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "textarea",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicEditor, {
            locale: "ru",
            editorState: editorState,
            onEditorStateChange: updateTextDescription,
            wrapperClassName: "wrapper-class",
            toolbarClassName: "toolbar-class",
            editorClassName: "editor-class",
            toolbar: {
                options: [
                    "inline",
                    "blockType",
                    "fontSize",
                    "fontFamily",
                    "textAlign",
                    "link",
                    "emoji",
                    "remove",
                    "history"
                ]
            }
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RichText);


/***/ })

};
;