const mongoose = require('mongoose');


const { Schema } = mongoose;
const productSchema = new Schema({
  name: String,
  price: Number,
  description: String,

});

const Product = mongoose.model('Product', productSchema);

exports.createProducts = async (req, res) => {
  const product = new Product({
    name: 'samsung',
    price: 500,
    description: 'ghatiyaa',
    email:'tester@gmail.com'
    


  });
 

  try {
    const savedProduct = await product.save();
    // console.log(savedProduct);
    res.status(201).json(savedProduct);


  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error creating product' });
  }
};


exports.deleteAllproducts = async (req, res) => {
  const products = await Product.deleteOne({ _id: req.body });
  res.status(200).json('Product deleted');
};

exports.getAllProducts = async (req, res) => {

  const products = await Product.find();
  // console.log(products);
  res.status(200).json(products);

};