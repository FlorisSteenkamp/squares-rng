/******/ // The require scope
/******/ var __webpack_require__ = {};
/******/ 
/************************************************************************/
/******/ /* webpack/runtime/define property getters */
/******/ (() => {
/******/ 	// define getter functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ })();
/******/ 
/******/ /* webpack/runtime/hasOwnProperty shorthand */
/******/ (() => {
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ })();
/******/ 
/************************************************************************/
var __webpack_exports__ = {};
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ squares4),
/* harmony export */   "x": () => (/* binding */ squares)
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
const squares = $instance$.exports.squares;
const squares4 = $instance$.exports.squares4;
/** From https://stackoverflow.com/a/21797381 */
function browserBase64ToArrayBuffer(base64) {
    const str = window.atob(base64);
    const len = str.length;
    const bytes = new Uint8Array(len);
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
    const ab = new ArrayBuffer(buffer.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}


var __webpack_exports__squares = __webpack_exports__.x;
var __webpack_exports__squares4 = __webpack_exports__.L;
export { __webpack_exports__squares as squares, __webpack_exports__squares4 as squares4 };
