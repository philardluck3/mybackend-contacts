const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      required: [true, "Please add the contact name"],
      type: String,
    },
    email: {
      required: [true, "Please add the contact email address"],
      type: String,
    },
    phone: {
      required: [true, "Please add the contact phone number"],
      type: String,
    },
  },
  {
    timeStamp: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
