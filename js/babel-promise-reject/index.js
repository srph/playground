new Promise(function(resolve, reject) {
  reject();
}).then(function(...args) {
  console.log('Success: ', args);
}, function(...args) {
  console.log('Error: ', args);
  return Promise.reject(new Error('error swag'));
}).catch(function(...args) {
  console.log('Error: ', args);
  // return Promise.reject(new Error('error swag'));
});