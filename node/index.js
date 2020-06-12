"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squares4 = exports.squares = void 0;
const isBrowser = new Function("try {return this===window;}catch(e){ return false;}");
//const isNode = new Function("try {return this===global;}catch(e){return false;}");
const base64ToArrayBuffer = isBrowser()
    ? browserBase64ToArrayBuffer
    : nodeBase64ToArrayBuffer;
const arrayBuffer = base64ToArrayBuffer(
// The WASM code (from .wasm file) that is Base64 encoded
`AGFzbQEAAAABBgFgAX8BfAMDAgAABQMBAAAHHwMGbWVtb3J5AgAHc3F1YXJlcwAA\
CHNxdWFyZXM0AAEKuAECTwECfiAArULHuuXf9tjQm2p+IgIgAiACfnwiAUIgiCAB\
QiCGhCIBIAF+IAJCx7rl3/bY0JtqfHwiAUIgiCABQiCGhCIBIAF+IAJ8QiCIugtm\
AQJ+IACtQse65d/22NCban4iAiACIAJ+fCEBIAIgAkLHuuXf9tjQm2p8IgIgAUIg\
hiABQiCIhCIBIAF+fCIBQiCIIAFCIIaEIgEgAX58IgFCIIggAUIghoQiASABfiAC\
fEIgiLoL`);
const $module$ = new WebAssembly.Module(arrayBuffer);
const $instance$ = new WebAssembly.Instance($module$);
let squares = $instance$.exports.squares;
exports.squares = squares;
let squares4 = $instance$.exports.squares4;
exports.squares4 = squares4;
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
//# sourceMappingURL=index.js.map