require("../src/db/mongoose");
const Task = require("../src/models/task");

Task.findByIdAndDelete("635fa5b1a1167f76d110881c")
  .then((task) => {
    console.log(task);
    return Task.countDocuments({ completed: false });
  })
  .then((result) => {
    console.log(result);
  })
  .catch((e) => {
    console.log(e);
  });
