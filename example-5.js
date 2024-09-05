/**
 *  Promise.all
 *
 */

const p1 = new Promise((resolve) => setTimeout(resolve, 2000, 2));
const p2 = Promise.resolve(4);
const p3 = 5;

Promise.all([p1, p2, p3]).then((result) => {
  console.log(result);
});
