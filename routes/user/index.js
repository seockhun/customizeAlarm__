const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

const kakao = require('./kakao');

router.use("/", kakao);

module.exports = router;