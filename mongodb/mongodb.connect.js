const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://localhost:27017/todo", {
      useNewUrlParser: true,
    });
  } catch (err) {
    console.log("error");
    console.log(err);
  }
}

module.exports = { connect };
