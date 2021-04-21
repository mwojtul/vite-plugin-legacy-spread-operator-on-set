# Getting started
- run `npm install`
- start vite: `npm run dev`

# Reproducing the spread operator on a Set bug
1. in `src/main.js` on line 4, note the `const uniqueValues = [...new Set([1, 1, 2, 3])]`
1. run `npm run build`
1. in `dist/assets/index-legacy[hash].js`, inspect the traspiled code: `[].concat(new Set([1, 1, 2, 3]))`
1. the transpiled code evaluates to `[Set(3)]`, but the source code evaluates to `[1, 2, 3]` in modern browsers
