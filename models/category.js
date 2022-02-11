const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      maxlength: 32,
      unique: true,
    },
  },
  { timestamps: true } // whenever making new entry through this schema it will store the time it created in database
);

module.exports = mongoose.model("Category", categorySchema);
