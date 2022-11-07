require("../src/db/mongoose");
const { countDocuments } = require("../src/models/task");
const User = require("../src/models/user");

// User.findByIdAndUpdate("63584c6b3875154b39110cac", { age: 1 })
//   .then((user) => {
//     console.log(user);
//     return User.countDocuments({ age: 0 });
//   })
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((e) => {
//     console.log(e);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, { age });
  const count = await User.countDocuments({ age });
  return count;
};

updateAgeAndCount("63584c6b3875154b39110cac", 2)
  .then((count) => {
    console.log(count);
  })
  .catch((e) => {
    console.log(e);
  });
