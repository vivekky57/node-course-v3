const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (a < 0 || b < 0) {
        return reject("Numbersmust be non-negative");
      }
      resolve(a + b);
    }, 3000);
  });
};

const doWork = async () => {
  const sum = await add(1, 2);
  console.log(sum);
  const sum2 = await add(sum, 2);
  console.log(sum2);
  const sum3 = await add(sum2, -99);
  return sum3;
};

doWork()
  .then((result) => {
    console.log("result", result);
  })
  .catch((e) => {
    console.log("e", e);
  });
