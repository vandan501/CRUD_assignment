const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email must be unique"],
  },

  password: {
    type: String,
    required: true,
  },
});

const UserModel = mongoose.model("userdata", userSchema);

module.exports = { UserModel };
