// to transpile: `babel index.js --stage=0`
// to run transpiled: `babel index.js --stage=0 | node`
// pretty awesome, because I've never read the specs,
// and tiny details like this (being able to do rest in destructured argument)
// amaze me
function x({ page, ...other }) {
  console.log(Object.keys(other));
  console.log(other.gago);
}

x({
  page: 5,
  gago: 'ikaw',
  pogi: 'kier'
});