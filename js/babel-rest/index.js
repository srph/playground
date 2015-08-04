// to transpile: `babel index.js --stage=0`
// to run transpiled: `babel index.js --stage=0 | node`

// basic rest
const x = () => {
  return (...args) => {
    // still worth looking in transpiled
    console.log(args);
    console.log(...args);
    console.log('----------------');
  }
}

x()('try', 'out');
x()(['try', 'out']);