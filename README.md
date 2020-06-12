# Squares: A Fast Counter-Based RNG (Random Number Generator)
* **Original author** (of paper and original C code) → Bernard Widynski (squaresrng@gmail.com) 
* [**arXiv paper**](https://arxiv.org/pdf/2004.06278v2.pdf) (May 5, 2020)
* [**Website with original C code**](https://squaresrng.wixsite.com/rand)
## Advantages
* **Predictive (pure function)** → For any integer, n, squares(n) will always produce the
same 'random' number.
* **Counter-based (think mappable)** → Each next random number is *not* based on a previous one; 
rather, a random number is simply a function of the non-negative integers
(*ℕ₀* ≡ (0, 1, 2, 3, ... )), i.e. `squares` ≡ f: *ℕ₀* → *ℕ₀* but limited to the
range [0,0xffffffff] (=== [0,2^32-1] === [0,4294967295]). Note that this limitation
is due to JavaScript's limitation being unable to handle unsigned 64-bit integers,
but may be overcome in many ways (e.g. BigNum, low/high 32-bit nibbles, etc) if 
really needed - it is not a limitation of the original algorithm.
* **Fast** → From the arXiv paper: "...one of the fastest counter-based RNGs". It 
produces about 50 million 'random' numbers on my 1st gen. Intel i7 per second, but
the original algorithm can do about 1000 million / second - the reason for the slowdown
is probably due to WASM having to convert from u32 to f64 on each call (again, necessary for
compatibility with JavaScript).
* **Crush-proof** → Passes statistical [BigCrush](https://en.wikipedia.org/wiki/TestU01) tests
* **Synchronous WASM** → no `Promise`s or `async` required! (due to the WASM Module 
being read from a static Base64 string and not from a file or url)

## Browser support

Basically any browser supporting WebAssembly - most major browsers since October 2017.

* **No** → IE 11
* **Yes** → Chrome 57+, Edge 16+, Firefox 53+, Safari 11+, Opera 44+

## Credits
All credit goes to Bernard Widynski (author of the original paper).

# Installation

```cli
npm install squares-rng
```

## TypeScript

In your project
```typescript
import { squares, squares4 } from "squares-rng";
```

## Node

```javascript
let { squares, squares4 } = require('squares-rng');
```

## Browser (using global var)

After the npm installation simply include the script in your project:
```html
<script src='node_modules/squares-rng/browser/index.min.js'></script>
```
A new global object will be available called `SquaresRNG`.

```javascript
const { squares, squares4 } = SquaresRNG; 
```

# Usage

```javascript
squares(100);   //=> 1083911291
squares(100);   //=> 1083911291
squares4(100);  //=> 843037697
squares4(100);  //=> 843037697

// Need random numbers (as double floats) in [0,1] (including 0, but excluding 1)
squares(1) / 0xffff_ffff;  //=> 0.846250728435407
squares(2) / 0xffff_ffff;  //=> 0.08598547803377395
squares(3) / 0xffff_ffff;  //=> 0.4883159516584864
squares(4) / 0xffff_ffff;  //=> 0.3198446904588129
squares(5) / 0xffff_ffff;  //=> 0.23406353551756207
```

# License
The MIT License (MIT)

Copyright © 2020 Floris Steenkamp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.