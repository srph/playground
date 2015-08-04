// to transpile: `babel index.js --stage=0`
// to run transpiled: `babel index.js --stage=0 | node`
// test spread
// random object
const x = {
  z: 1,
  y: 2
};

const a = {
  ...x,
  p: 1
};

// es5: it uses Object.assign
// a -> extend({}, x, { p: 1 });
// pretty awesome.
console.log(x, a);