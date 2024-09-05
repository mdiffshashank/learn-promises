if (!Promise.all) {
  Promise.all = function (promises) {
    return new Promise((resolve, reject) => {
      if (!Array.isArray(promises)) {
        return reject(new TypeError("Input must be an array"));
      }

      let resultArray = [];
      let resolvedCount = 0;

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then((value) => {
            resultArray[index] = value;
            resolvedCount++;
            if (resolvedCount === promises.length) {
              resolve(resultArray);
            }
          })
          .catch((err) => {
            reject(err); // Reject as soon as any promise fails
          });
      });
    });
  };
}
