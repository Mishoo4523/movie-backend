const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("db is connected!");
  })
  .catch((ex) => {
    console.log("db connection failed: ", ex);
  });

//   const mongoose = require("mongoose");

// mongoose
//  //.connect("mongodb://localhost:27017/review_app")
// .connect("mongodb+srv://admin:1qaz2wsx3edc@movieapp.gul7hz0.mongodb.net/?retryWrites=true&w=majority")
  
//   .then(() => {
//     console.log("db is connected!");
//   })
//   .catch((ex) => {
//     console.log("db connection failed: ", ex);
//   });
