var SquaresRNG;
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "squares": () => (/* binding */ squares),
/* harmony export */   "squares4": () => (/* binding */ squares4)
/* harmony export */ });
const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
//const isNode = new Function("try {return this===global;}catch(e){return false;}");
const base64ToArrayBuffer = isBrowser()
    ? browserBase64ToArrayBuffer
    : nodeBase64ToArrayBuffer;
const arrayBuffer = base64ToArrayBuffer(
// The WASM code (from .wasm file) that is Base64 encoded
`AGFzbQEAAAABBgFgAX8BfAMDAgAABQMBAAAHHwMGbWVtb3J5AgAHc3F1YXJlcwAA\
CHNxdWFyZXM0AAEKjgECPwECfiAArULHuuXf9tjQm2p+IgEgASABfnxCIIoiAiAC\
fiABQse65d/22NCbanx8QiCKIgIgAn4gAXxCIIi6C0wBAn4gAK1Cx7rl3/bY0Jtq\
fiIBQse65d/22NCbanwiAiABIAIgASABIAF+fEIgiiIBIAF+fEIgiiIBIAF+fEIg\
iiIBIAF+fEIgiLoL`);
const $module$ = new WebAssembly.Module(arrayBuffer);
const $instance$ = new WebAssembly.Instance($module$);
let squares = $instance$.exports.squares;
let squares4 = $instance$.exports.squares4;
/** From https://stackoverflow.com/a/21797381 */
function browserBase64ToArrayBuffer(base64) {
    let str = window.atob(base64);
    let len = str.length;
    let bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
        bytes[i] = str.charCodeAt(i);
    }
    return bytes.buffer;
}
function nodeBase64ToArrayBuffer(base64) {
    return toArrayBuffer(Buffer.from(base64, 'base64'));
}
/** From https://stackoverflow.com/a/12101012 */
function toArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}


SquaresRNG = __webpack_exports__;
/******/ })()
;