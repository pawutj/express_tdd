const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  done: {
    type: Boolean,
  },
});

const TodoModel = mongoose.model("Todo", TodoSchema);
module.exports = TodoModel;
