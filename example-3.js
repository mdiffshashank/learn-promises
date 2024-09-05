const promise = new Promise((resolve, reject) => {
  reject(new Error("Something went wrong!!"));
});

/**
 *  promise.then(successCallback,errorCallback)
 *  successcallback will only execute once the promise is resolved
 *  errorCallback will only execute once the promise is rejected
 */
// promise.then(
//   (res) => {
//     console.log(res); //resolve with 2
//   },
//   (err) => {
//     console.log(err.message);
//   }
// );

// another way to catch the error
promise
  .then((res) => {
    console.log(res); //resolve with 2
  })
  .catch((err) => console.log(err.message));
