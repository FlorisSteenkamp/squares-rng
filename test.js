
const { squares, squares4 } = SquaresRNG; 


test();


function test() {
    const len = 10;
    {
        let vs = [];
        for (let i=0; i<len; i++) { 
            //vs.push(squares(i) / 0xffff_ffff); 
            vs.push(squares(i));
        }
        console.log(vs);
        //console.log(vs.map(toHex));
    }
    {
        let vs = [];
        for (let i=0; i<len; i++) { 
            //vs.push(squares4(i) / 0xffff_ffff); 
            vs.push(squares4(i));
        }
        console.log(vs);
        //console.log(vs.map(toHex));
    }


    {
        // Performance test for squares
        // Takes about 1 second to generate 50 million random numbers on
        // my 1st gen. (yes, 1st gen.) Intel i7.
        let t0 = performance.now();
        let total = 10_000_000;
        for (let i=0; i<total; i++) {
            squares(i);
        }    
        let t1 = performance.now();
        console.log(`Took ${t1 - t0} milliseconds to generate ${total} random numbers (using squares).`)
    }

    {
        // Performance test for squares4 
        // (also) takes about 1 second to generate 50 million random numbers on
        // my 1st gen. (yes, 1st gen.) Intel i7.
        let t0 = performance.now();
        let total = 10_000_000;
        for (let i=0; i<total; i++) {
            squares4(i);
        }    
        let t1 = performance.now();
        console.log(`Took ${t1 - t0} milliseconds to generate ${total} random numbers (using squares4).`)
    }
}


/** From https://stackoverflow.com/a/21797381 */
function base64ToArrayBuffer(base64) {
    let str = window.atob(base64);
    let len = str.length;
    let bytes = new Uint8Array(len);
    for (let i=0; i<len; i++) {
        bytes[i] = str.charCodeAt(i);
    }

    return bytes.buffer;
}


/** Helper function - used during test */
function toHex(n) {
    return n < 0
        ? '-' + (-1*n).toString(16).padStart(8, "0") 
        : n.toString(16).padStart(8, "0");
}
