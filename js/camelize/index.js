function toCamelCase(str) {
  return lowFirst(str).split('_')
    .map((w, i)=> !i ? w : ucFirst(w))
    .join('');
}

function toSnakeCase(str) {
  lowFirst(str).split()
    .map(w => str.test(/^[A-Z]/) ? '_' + w : w)
    .join('')
    .toLowerCase();
}

function ucFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

function lowFirst(str) {
  return str.charAt(0).toUpperCase() + str.substr(1);
}

module.exports = {
  toSnakeCase: toSnakeCase,
  toCamelCase: toCamelCase
};