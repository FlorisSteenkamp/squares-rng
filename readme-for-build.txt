
How to build 
============
(it's a bit long, but can be made shorter in the future)

0. npm install
1. Update the source in the index.ts file in the assembly folder.
2. npm run build-wasm
3. ws -p 8282 (Note: http-server cannot serve application/json mime type yet :( )
4. Open the browser at localhost:8282
5. See the console and copy the Base64 WASM code, e.g. "AGFzbQEAAAABBgFgAX8BfA..."
6. Paste the code into the file src\index.ts
7. npm run build (the library will be copied to the ./node and ./browser folders)
8. See some results at localhost:8282/test-index.html