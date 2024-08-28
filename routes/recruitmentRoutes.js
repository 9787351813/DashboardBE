const express = require('express');
const router = express.Router();
const {
  getrecruitment,
  addrecruitment,
  updaterecruitment,
  deleterecruitment,
} = require('../controllers/recruitmentController');

router.get('/', getrecruitment); // Ensure getrecruitment is defined

router.post('/', addrecruitment); // Ensure addrecruitment is defined

router.patch('/:id', updaterecruitment); // Ensure updaterecruitment is defined

router.delete('/:id', deleterecruitment); // Ensure deleterecruitment is defined

module.exports = router;
