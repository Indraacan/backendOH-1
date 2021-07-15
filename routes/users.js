var express = require('express');
var router = express.Router();

const usercontroller = require ("../controller/user")
/* GET users listing. */
router.get('/get', usercontroller.getAllData)
router.post('/post', usercontroller.createData)

module.exports = router;
