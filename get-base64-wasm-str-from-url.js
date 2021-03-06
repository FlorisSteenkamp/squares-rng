

getBase64WasmStrFromUrl('index.wasm').then(str => console.log(str));


/**
 * Returns a Base64 string that can be used to **SYNCHRONOUSLY** create an 
 * instantiated WASM module within JavaScript. No promises required!
 * 
 * After the string is retrieved do this:
 * @param url the WASM file url, e.g. 'index.wasm' that was generated by say
 * AssemblyScript or Emscripten, etc.
 */
async function getBase64WasmStrFromUrl(url) {
    return btoa(String.fromCharCode(...new Uint8Array(
        await (await fetch(url)).arrayBuffer()
    )));
}
