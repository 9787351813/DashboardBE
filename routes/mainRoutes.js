const express = require('express');
const router = express.Router();
const { getmainData } = require('../controllers/mainController');

router.get('/', getmainData);

module.exports = router;
