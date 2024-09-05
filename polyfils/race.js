function race(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }

    promises.forEach((promise) => {
      Promise.resolve(promise)
        .then(resolve) // Resolve as soon as the first promise resolves
        .catch(reject); // Reject as soon as the first promise rejects
    });
  });
}

const p1 = new Promise((resolve) => setTimeout(resolve, 2000, 2));
const p2 = Promise.reject(4);
const p3 = 5;

race([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
