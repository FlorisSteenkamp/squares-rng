
const key: u64 = 0xea3742c76bf95d47;


/** 
 * Returns a predictable counter-based random number in [0,0xffffffff] using
 * Bernard Widynski's **squares** algorithm, a.k.a **three round counter-based 
 * middle square**.
 * 
 * This algorithm uses 3 rounds and is already crush-proof. The other alogorithm 
 * (**squares4**) is even 'more random' and may pass future statistical tests 
 * still to be devised that this algorithm might not pass.
 * 
 * This implementation uses a single key (see the original paper by Widynski 
 * https://arxiv.org/pdf/2004.06278v2.pdf) and is thus limited to 2^64 
 * inputs, however since we want this function to be called from JavaScript and
 * don't have a 64-bit unsigned integer type in JavaScript we further limit the 
 * input range to the 2^32 numbers in [0..2^32-1], i.e. [0..4,294,967,295‬] which 
 * should still be enough for typical applications.
 * 
 * Example usage: 
 * * squares(0)  //→ 2892b263
 * * squares(1)  //→ d8a3e342
 * * etc.
 * @param n the index counter, e.g. 0,1,2,..., that maps to a 'random' number
 * in the range [0,0xffffffff]
 */
function squares(n: u32): f64 {
    let x: u64;
    let y: u64;
    let z: u64;

    y = x = u64(n)*key; 
    z = y + key;

    x = x*x + y; x = (x>>32) | (x<<32);  // round 1
    x = x*x + z; x = (x>>32) | (x<<32);  // round 2

    //return u32((x*x + y) >> 32);  // round 3
    return f64((x*x + y) >> 32);  // round 3
}


/** 
 * Returns a predictable counter-based random number in [0,0xffffffff] using
 * Bernard Widynski's **squares** algorithm, a.k.a **four round counter-based 
 * middle square**.
 * 
 * This algorithm uses 4 rounds and is crush-proof. The other alogorithm 
 * (**squares**) is presumably 'less random' but still passes all BigCrush 
 * statistical tests (see https://en.wikipedia.org/wiki/TestU01)
 * 
 * This implementation uses a single key (see the original paper by Widynski 
 * https://arxiv.org/pdf/2004.06278v2.pdf) and is thus limited to 2^64 
 * inputs, however since we want this function to be called from JavaScript and
 * don't have a 64-bit unsigned integer type in JavaScript we further limit the 
 * input range to the 2^32 numbers in [0..2^32-1], i.e. [0..4,294,967,295‬] which 
 * should still be enough for typical applications.
 * 
 * Example usage: 
 * * squares4(0)  //→ 0e0fdf7c
 * * squares4(1)  //→ d7e13bb9
 * * etc.
 * @param n the index counter, e.g. 0,1,2,..., that maps to a 'random' number
 * in the range [0,0xffffffff]
 */
function squares4(n: u32): f64 {
    let x: u64;
    let y: u64;
    let z: u64;

    y = x = u64(n)*key; 
    z = y + key;

    x = x*x + y; x = (x>>32) | (x<<32);  // round 1
    x = x*x + z; x = (x>>32) | (x<<32);  // round 2
    x = x*x + y; x = (x>>32) | (x<<32);  // round 3

    return f64((x*x + z) >> 32);  // round 4
    
}


export { squares, squares4 }
