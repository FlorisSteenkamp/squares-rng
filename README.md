# Squares: A Fast Counter-Based RNG (Random Number Generator)

* **Original author** (of paper and original C code) → Bernard Widynski (squaresrng@gmail.com) 
* [**arXiv paper**](https://arxiv.org/pdf/2004.06278v2.pdf) (May 5, 2020)
* [**Website with original C code**](https://squaresrng.wixsite.com/rand)

## Advantages

* **Predictive (pure function)** → For any integer, n, squares(n) will always produce the
same 'random' number.
* **Counter-based (think mappable, stateless)** → Each next random number is *not* based on a previous one; 
rather, a random number is simply a function of the non-negative integers
(*ℕ₀* ≡ (0, 1, 2, 3, ... )), i.e. `squares` ≡ f: *ℕ₀* → *ℕ₀* but limited to the
range [0,0xffffffff] (=== [0,2^32-1] === [0,4294967295]). Note that this limitation
is due to JavaScript's limitation being unable to handle unsigned 64-bit integers,
but may be overcome in many ways (e.g. BigNum, low/high 32-bit nibbles, etc) if 
really needed - it is not a limitation of the original algorithm.
* **Fast** → From the arXiv paper: "...one of the fastest counter-based RNGs". It 
produces about 50 million 'random' numbers on my 1st gen. Intel i7 per second, but
the original algorithm can do about 1000 million / second - the reason for the slowdown
is probably due to the original author's code being inlined (i.e. no function call overhead) 
and possibly to a lesser extend the fact that WASM have to convert from u32 to f64 on 
each call (again, necessary for compatibility with JavaScript).
* **Crush-proof** → Passes statistical [BigCrush](https://en.wikipedia.org/wiki/TestU01) tests
* **Synchronous WASM** → no `Promise`s or `async` required! (due to the WASM Module 
being read from a static Base64 string and not from a file or url)

## Browser support

Basically any browser supporting WebAssembly - most major browsers since October 2017.

* **No** → IE 11
* **Yes** → Chrome 57+, Edge 16+, Firefox 53+, Safari 11+, Opera 44+

## Credits
All credit goes to Bernard Widynski (author of the original paper).

Also, thanks to [Max Graey](https://github.com/MaxGraey) for pointing out some
code efficiency improvements.

🤩 Built with [**Assembly**Script](https://www.assemblyscript.org/) 🤩

# Installation

```cli
npm install squares-rng
```

This package is [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
and can be used in `Node.js` (or in a browser when bundled using e.g. Webpack).

Additionally, self-contained `ECMAScript Module` (ESM) files `index.js` and
`index.min.js` in the `./browser` folder is provided.

Or, if you need a legacy browser script there is also `index.js`
and `index.min.js` in the `./browser` folder. Either script exposes a global 
variable called SquaresRNG.

# Usage

## Node.js
```JavaScript
import { squares, squares4 } from "squares-rng";

squares(100);   //=> 1083911291
squares(100);   //=> 1083911291
squares4(100);  //=> 843037697
squares4(100);  //=> 843037697

// Need random numbers (as double floats) in [0,1] (including 0, but excluding 1)
squares(1) / 0x1_0000_0000;  //=> 0.846250728238374
squares(2) / 0x1_0000_0000;  //=> 0.08598547801375389
squares(3) / 0x1_0000_0000;  //=> 0.48831595154479146
squares(4) / 0x1_0000_0000;  //=> 0.31984469038434327
squares(5) / 0x1_0000_0000;  //=> 0.2340635354630649
```

### Browsers - directly, without a bundler, using the pre-bundled minified .js file

Please note that no tree shaking will take place in this case.

```html
<!doctype html>

<html lang="en">
<head>
    <script type="module">
        import { squares, squares4 } from "./node_modules/squares-rng/browser/index.min.js";

        squares(100);   //=> 1083911291
        squares4(100);  //=> 843037697
        // Need random numbers as double floats in [0,1]? (including 0, but excluding 1)
        squares(1) / 0x1_0000_0000;  //=> 0.846250728435407
    </script>
</head>

<body>Check the console.</body>

</html>
```

### Bundlers (Webpack, Rollup, ...)

Webpack will be taken as an example here.

Since your webpack config file might still use `CommonJS` you must rename 
`webpack.config.js` to `webpack.config.cjs`.

If you are using TypeScript:

Since this is an [ESM only](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c)
library you must use [resolve-typescript-plugin](https://www.npmjs.com/package/resolve-typescript-plugin) 
(at least until webpack catches up with ESM?) in your `webpack.config.cjs` file.

```cli
npm install --save-dev resolve-typescript-plugin
```

and follow the instructions given at [resolve-typescript-plugin](https://www.npmjs.com/package/resolve-typescript-plugin).

Additionally, follow this [guide](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c#how-can-i-make-my-typescript-project-output-esm).


# License
The MIT License (MIT)

Copyright © 2020 Floris Steenkamp

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.