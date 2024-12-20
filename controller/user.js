const mongoose = require('mongoose');
const { Schema } = mongoose;
const userSchema = new Schema({
  name: String,
  price: Number,
  description: String
});



const user = mongoose.model('user', userSchema);

exports.createuser = async (req, res) => {
  const newuser = new user({
    name: 'tau',
    price: 0,
    description: 'mst'
    

  });
//   await newProduct.save();
//   res.status(201).json(savedProduct);
  
    const saveduser = await newuser.save();
    console.log(saveduser);
    res.status(201).json(saveduser);
 
};

exports.getAlluser = async (req, res) => {
        
    const User = await user();
    console.log(user);
    res.status(200).json(user);
  
};