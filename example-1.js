// Decalre a promise
/**
 * function inside promise is called executer . as soon as you declare a promise executer
 * function will execute.
 * executer should call only one resolve or reject. any stage change is final
 * All further call of resolve and reject is ignored
 */
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2);
  resolve(55);
  console.log("promise 1");
});

promise1.then((response) => {
  console.log("promise1", response);
});

console.log("end");

/**
 * promise 1
 * end
 * promise1 55
 */
