function all(promises) {
  return new Promise((resolve, reject) => {
    let output = Array.from({ length: promises.length });
    let count = promises.length;

    promises.forEach((promise, index) => {
      //For each promise, it calls Promise.resolve to ensure non-promise values
      //(if present) are handled correctly.
      Promise.resolve(promise)
        .then((result) => {
          output[index] = result;
          // console.log(result);
          count--;
          if (count === 0) resolve(output);
        })
        .catch(reject);
    });
  });
}

const p1 = new Promise((resolve) => setTimeout(resolve, 2000, 2));
const p2 = Promise.resolve(4);
const p3 = 5;

all([p1, p2, p3])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err.message);
  });
