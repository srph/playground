// to transpile: `babel index.js --stage=0`
// to run transpiled: `babel index.js --stage=0 | node`

function x(obj) {
  // doesn't work
  const { ['S' + 'X'] } = obj;
  console.log(obj);
}

x({ SX: 'Hello '});