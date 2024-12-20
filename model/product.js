const { default: mongoose } = require("mongoose");
const { router } = require("../routers/product");

const {Schema} =mongoose
const productSchema = new Schema({
    name: String,
    price: Number,
    description: String
  });



  const PostSchema =new Schema({
    name: String,
    price: Number,
    description: String
  });
  const Post = mongoose.model('Post',postSchema)

  exports.Product = router;