const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb+srv://dhimanrohit070:kI0IgVDzMbDSyRQ2@cluster0.eeu4o.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0');
app.use(cors());
const productsRoutes = require('./routers/product');
const usersRoutes = require('./routers/user');
app.use('/', productsRoutes.router)
app.use('/', usersRoutes.router)
app.use(express.static('build'));
app.use(express.static('images'));
app.use(bodyParser.json());


// Connect to MongoDB
// mongoose.connect('mongodb://localhost/myDatabase', { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Connected to MongoDB'))
//   .catch(err => console.error('Could not connect to MongoDB:', err));

// Define the schema for the data
// const dataSchema = new mongoose.Schema({
//    id: Number,
//    name: String,
//    price: Number,
//    description: String
// });


// const Data = mongoose.model('Data', dataSchema);

// app.get('/data', async (req, res) => {
//    try {
//       const data = await Data.find();
//       res.status(200).json(data);
//    } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error retrieving data' });
//    }
// });


// app.delete('/data/:id', async (req, res) => {
//    try {
//       const dataID = req.body.id;

//       const remove = await Data.deleteOne({ dataID });
//       res.json(remove);
//    } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error deleting data' });
//    }

// });

// app.patch('/data/:id', async (req, res) => {
//    try {
//       const dataID = req.params.id;
//       const data = req.body;
//       const filter = {  dataID }; 
//       const update = {  data };
//       const edit = await Data.updateOne({filter,update});
//       res.json(edit);

//    } catch (err) {
//       console.error(err);
//       res.status(500).json({ message: 'Error deleting data' });
//    }
// });

// // Define the API endpoint for creating data
// app.post('/data', async (req, res) => {
//    const data = new Data({
//       name: req.body.grocery.name,
//       price: req.body.grocery.price,
//       description: req.body.grocery.description
//    });
//    await data.save();
//    res.status(200).json('success')
// });
const dataSchema = new mongoose.Schema({
   id: Number,
   name: String,
   price: Number,
   description: String
 });
 
 const Data = mongoose.model('Data', dataSchema);
 
 app.use(express.json());
 
 app.get('/data', async (req, res) => {
   try {
     const data = await Data.find();
     res.status(200).json(data);
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error retrieving data' });
   }
 });
 
 app.delete('/data/:id', async (req, res) => {
   try {
     const dataID = req.params.id;
     const remove = await Data.deleteOne({ _id: dataID });
     res.json(remove);
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error deleting data' });
   }
 });
 
//  app.patch('/data/:id', async (req, res) => {
//    try {
//      const dataID = req.params.id;
//      const data = req.body;
//      const filter = { _id: dataID }; 
//      const update = { $set: data };
//      const edit = await Data.updateOne(filter, update);
//      res.json(edit);
//    } catch (err) {
//      console.error(err);
//      res.status(500).json({ message: 'Error updating data' });
//    }
//  });
 
 app.post('/data', async (req, res) => {
   try {
     const data = new Data({
       name: req.body.name,
       price: req.body.price,
       description: req.body.description
     });
     await data.save();
     res.status(201).json('Data created successfully');
   } catch (err) {
     console.error(err);
     res.status(500).json({ message: 'Error creating data' });
   }
 });
 
//  app.listen(3000, () => {
//    console.log('Server started on port 3000');
//  });


const postSchema = new Schema({
   name: String,
   price: Number,
   description: String
});

const Post = mongoose.model('Post', postSchema);

app.post('/Post', async (req, res) => {
   const post = new Post(req.body.postData);
   post.name = req.body.postData.name;
   post.price = req.body.postData.price;
   post.description = req.body.postData.description;
   await post.save();
   res.status(200).json('success');
});

// Start the server




const userSchema = new Schema({
   name: String,
   email: String,
   age: Number,
   password: String
});
app.post('/user', async (req, res) => {
   const User = mongoose.model('User', userSchema);

   const user = new User();
   user.name = 'tester';
   user.email = 'tester@example.com';
   user.age = 30;
   user.password = 'tester@123';

   async function saveUser() {
      const savedUser = await user.save();
      console.log(savedUser);
   }

   saveUser();
   res.status(201).json('success');
});




// const RohitSchema = new Schema({
//    name: String,
//    email: String,
//    age: Number,
//    password: String
// });
// const Rohit = mongoose.model('Rohit',RohitSchema);

// app.post('/rohit',async(req,res) =>{
//    const rohit = new Rohit();
//    rohit.name ='Rohit',
//    rohit.email ='dhimanrohit070@gmail.com',
//    rohit.age = 25,
//    rohit.password ='Rohit@123';

//    async function saverohit() {
//       const savedrohit = await rohit.save();
//       console.log(savedrohit);
//    }

//    saverohit();
//    res.status(201).json('success');

// });









// app.get('/', (req, res) => {
//    res.json({ name: 'teafdsa' });
// })

// app.get('/products', (req, res) => {
//    res.json('products here');
// });

// app.get('/product/:id', (req, res) => {
//    console.log(req.params.id);
//    console.log(req.query);
//    res.json('products here');
// });

// app.post('/submitProduct', (req, res) => {
//    res.json('products here');
// });

// app.put('/updateProduct', (req, res) => {
//    res.json('update Product here');
// });

// app.delete('/deleteProduct', (req, res) => {
//    res.json('Delete Product here');
// });
// app.get('/addproduct', (req, res) => {
//    res.json('add product here');
// })
// app.post('/submit', (req, res) => {
//    res.json('submit here');
// }
// )
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));


