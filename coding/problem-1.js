/**
 *  Write a async function AsyncAdd that gives a sum of fullfilled promises
 *
 */

async function asyncAdd(promises) {
  return new Promise((resolve, reject) => {
    let sum = 0;
    let count = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          sum += result;
        })
        .catch((err) => {})
        .finally(() => {
          count++;
          if (count === promises.length) {
            resolve(sum);
          }
        });
    });
  });
}

asyncAdd([Promise.resolve(1), Promise.reject(2), Promise.resolve(3)])
  .then((x) => {
    console.log(x);
  })
  .catch((err) => {
    console.log(err);
  });
