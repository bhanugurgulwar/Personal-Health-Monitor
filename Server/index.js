const url = "mongodb://localhost:27017/personal-health-monitor";
const mongoose = require("mongoose");
const app = require("./app");
let server;

// try {
//   mongoose
//     .connect(url, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .then(() => {})
//     .catch((err) => {
//       console.log(err);
//     });

//   app.listen(8008, () => {
//     console.log("running on port 8008");
//   });
// } catch (e) {
//   console.log(e.message);
// }

mongoose.connect(url).then((db) => {
  console.log("Connected to DB");
  server = app.listen(8008, () => {
    console.log("Server is up on 8008");
  });
});
