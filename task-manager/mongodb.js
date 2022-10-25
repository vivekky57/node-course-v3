//CRUD create read update  delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectId();
console.log(id.id);

console.log(id.id.length);
console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);

    // db.collection("users").insertOne(
    //   {
    //     name: "vivek",
    //     age: 27,
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to insert user");
    //     }
    //     console.log("   testing");
    //     console.log(result.ops);
    //   }
    // );

    // db.collection("users").insertMany(
    //   [
    //     {
    //       name: "Jen",
    //       age: 28,
    //     },
    //     {
    //       name: "Gunther",
    //       age: 25,
    //     },
    //   ],
    //   (error, res) => {
    //     if (error) {
    //       return console.log("Unable to insert documents!");
    //     }
    //     console.log(res);
    //   }
    // );

    // db.collection("tasks").insertMany(
    //   [
    //     {
    //       description: "Clean the house",
    //       completed: true,
    //     },
    //     {
    //       description: "Renew inspection",
    //       completed: false,
    //     },
    //     {
    //       description: "Pot plants",
    //       completed: false,
    //     },
    //   ],
    //   (error, res) => {
    //     if (error) {
    //       return console.log("Unable to insert tasks!");
    //     }
    //     console.log(res.acknowledged);
    //     console.log(res.insertedCount);
    //     console.log(res.insertedIds);
    //     console.log(res.insertedIds[0]);
    //   }
    // );
  }
);
