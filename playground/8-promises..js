const doWorkPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve([8, 5, 3]);
    // reject("this went wrong!");
  }, 2000);
});
doWorkPromise
  .then((result) => {
    console.log("Success!", result);
  })
  .catch((error) => {
    console.log("Error!", error);
  });

//                             fulfilled
//                            /
//   promise    -- pending -->
//                            \
//                             rejected
