const { default: mongoose } = require("mongoose");
const { router } = require("../routers/user");

const {Schema} =mongoose
const userSchema = new Schema({
    name: String,
    price: Number,
    description: String
  });

  exports.Product = router;