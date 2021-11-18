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

type F = (n: number) => number;

let squares = $instance$.exports.squares as F;
let squares4 = $instance$.exports.squares4 as F;


/** From https://stackoverflow.com/a/21797381 */
function browserBase64ToArrayBuffer(base64: string) {
    let str = window.atob(base64);
    let len = str.length;
    let bytes = new Uint8Array(len);
    for (let i=0; i<len; i++) {
        bytes[i] = str.charCodeAt(i);
    }

    return bytes.buffer;
}


function nodeBase64ToArrayBuffer(base64: string) {
    return toArrayBuffer(Buffer.from(base64, 'base64'));
}


/** From https://stackoverflow.com/a/12101012 */
function toArrayBuffer(buffer: Buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}


export { squares, squares4 }
