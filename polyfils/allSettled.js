/**
 * finally block is important, set value even in catch
 */

const allSettled = function (promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Input must be an array"));
    }

    let results = Array.from({ length: promises.length }).fill({
      status: "pending",
    });
    let settledCount = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value: value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason: reason };
        })
        .finally(() => {
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        });
    });
  });
};

/**
 * TIP : finally block is important
 */
