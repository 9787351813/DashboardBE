const express = require('express');
const router = express.Router();
const {
  getEmployees,
  addEmployee,
  getEmployeeById,
  deleteEmployee,
  
} = require('../controllers/employeeController');



// Define the more general routes after the specific ones
router.get('/', getEmployees);
router.post('/', addEmployee);
router.get('/:id', getEmployeeById);
router.delete('/:id', deleteEmployee);

module.exports = router;
