const promise = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2); //ignored
  resolve(2);
  console.log("second"); // STATEMENT WILL execute
  reject(new Error("Promise error")); //ignored
});

promise.then((res) => {
  console.log(res); //resolve with 2
});
