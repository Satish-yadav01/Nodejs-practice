const express = require('express')
const router = express.Router();

const {getData} = require('../controllers/userController')

router.route('/').get(getData)

module.exports = router