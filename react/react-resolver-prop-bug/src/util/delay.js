/**
 * Promise-wrapped setTimeout
 * @return Promise
 */
export default function(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}