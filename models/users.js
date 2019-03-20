const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Create a new Task Schema to map Mongo documents to an object in our node application
 */
var UserSchema = new Schema({

  /*userId: {
    type: String,
    trim: true,
    required: "Name is Required"
  },*/
  name: {
    type: String,
    trim: true,
    required: "Name is Required"
  },
  createdAt: {
    type: Date,
    default: Date.now
  }

});

const User = mongoose.model("User", UserSchema);

module.exports = User;