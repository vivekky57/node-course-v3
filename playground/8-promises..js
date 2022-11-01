// const doWorkPromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve([8, 5, 3]);
//     // reject("this went wrong!");
//   }, 2000);
// });
// doWorkPromise
//   .then((result) => {
//     console.log("Success!", result);
//   })
//   .catch((error) => {
//     console.log("Error!", error);
//   });

// //                             fulfilled
// //                            /
// //   promise    -- pending -->
// //                            \
// //                             rejected

const add = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 3000);
  });
};

// add(1, 2).then((sum) => {
//   console.log(sum);
//   add(sum, 5)
//     .then((sum2) => {
//       console.log(sum2);
//     })
//     .catch((e) => {
//       console.log(e);
//     });
// });

add(1, 1)
  .then((sum) => {
    console.log(sum);
    return add(sum, 4);
  })
  .then((sum2) => {
    console.log(sum2);
  })
  .catch((e) => {
    console.log(e);
  });
