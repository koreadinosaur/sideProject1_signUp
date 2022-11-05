const express = require('express');
const router = express.Router();
const { getData, getAllData,postData,putData} = require('../controller/userInfo');

router.get('/', getData); //query로 username 체크
router.get('/getall', getAllData); //query로 username 체크
router.post('/', postData);
router.put('/', putData);

module.exports = router;