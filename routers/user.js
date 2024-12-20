var express = require('express')
var app = express()
var router = express.Router()
const { createuser, getAlluser } = require('../controller/user');

    
router
    .get('/user', getAlluser)
    .post('/user', createuser);

exports.router = router;