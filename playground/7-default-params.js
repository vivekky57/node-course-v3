const greeter = (name = "user") => {
  console.log("hello " + name);
};

greeter("Andrew");
greeter();

const transaction = (type, { label, stock } = {}) => {
  console.log(type, label, stock);
};
transaction("order");
