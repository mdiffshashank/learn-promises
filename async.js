console.log("start");

const p1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 2);
  console.log("promise 1");
});

async function fetchData() {
  console.log("promise 2");
  const value = await p1; // it waits here
  console.log(value);
}

fetchData();

console.log("end"); // this will be executed before await executes

//what is the order of console logs ?

/**
 * start
 * promise 1
 * promise 2
 * end
 * 2
 */
