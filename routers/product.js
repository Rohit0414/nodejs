var express = require('express')
var app = express()
var router = express.Router()
const { createProducts, getAllProducts, deleteAllproducts } = require('../controller/product');

router
    .get('/products', getAllProducts)
    .post('/products', createProducts)
    .delete('/products', deleteAllproducts);

    
exports.router = router;