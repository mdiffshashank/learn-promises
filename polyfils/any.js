function any(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }

    let rejectionCount = 0;
    let errors = [];

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then(resolve) // If any promise resolves, resolve the entire Promise.any
        .catch((error) => {
          rejectionCount++;
          errors[index] = error; // Track each rejection
          if (rejectionCount === promises.length) {
            reject(new AggregateError(errors, "All promises were rejected"));
          }
        });
    });
  });
}

// Polyfill for AggregateError if not available in the environment
// if (typeof AggregateError === "undefined") {
//   function AggregateError(errors, message) {
//     this.name = "AggregateError";
//     this.message = message || "All promises were rejected";
//     this.errors = errors;
//     if (Error.captureStackTrace) {
//       Error.captureStackTrace(this, AggregateError);
//     }
//   }

//   AggregateError.prototype = Object.create(Error.prototype);
//   AggregateError.prototype.constructor = AggregateError;
// }

const p1 = new Promise((resolve, reject) => setTimeout(reject, 2000, 2));
const p2 = Promise.reject(4);
const p3 = Promise.reject(5);

any([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err); // check if all rejected
  });
