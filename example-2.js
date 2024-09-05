const promise = new Promise((resolve, reject) => {
  resolve(2);
  console.log("second"); // STATEMENT WILL execute
  setTimeout(resolve, 100, 2); //ignored
  reject(new Error("Promise error")); //ignored
});

promise.then((res) => {
  console.log(res); //resolve with 2
});
