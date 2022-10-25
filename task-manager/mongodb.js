//CRUD create read update  delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient;
const { MongoClient, ObjectId } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";
//Object ID creation
// const id = new ObjectId();
// console.log(id.id);

// console.log(id.id.length);
// console.log(id.toHexString().length);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database!");
    }

    const db = client.db(databaseName);
    // CREATE a database then create a collection and insert some keys and values with insertOne and insertMany method
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

    // READ or Querying a Document into database and then collection

    // db.collection("users").findOne(
    //   {
    //     _id: new ObjectId("63582ad9870d4f0ed8011654"),
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log("Unable to fetch");
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection("users")
    //   .find({ age: 25 })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // Update the fields

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectId("634f40832146a13886d6209b"),
    //     },
    //     {
    //       $inc: {
    //         age: 1,
    //       },
    //     }
    //   )
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    db.collection("tasks")
      .updateMany(
        {
          completed: false,
        },
        {
          $set: {
            completed: true,
          },
        }
      )
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
