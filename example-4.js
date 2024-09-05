/**
 * Promise chaining
 */

const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, 2);
});

promise
  .then((result) => {
    console.log(result);
    // either you can return a new promise or just normal value
    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, result * 2);
    });
  })
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, result * 2);
    });
  })
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, result * 2);
    });
  })
  .then((result) => {
    console.log(result);

    return new Promise((resolve, reject) => {
      setTimeout(resolve, 1000, result * 2);
    });
  })
  .then((result) => {
    console.log(result);
  });
