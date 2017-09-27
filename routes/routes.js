const express = require('express')
const router = express.Router()
const knex = require('../db/knex')

//  Get all employees
router.get('/', (req, res) => {
	knex('employees')
		.then(employee => {
			res.json({
				employee
			})
		})
})



// Add an employee



router.post('/', (req, res) => {
	let newEmployee = {
		first_name:  req.body.first_name,
		last_name:   req.body.last_name,
		email:      req.body.email,
		phone:      req.body.phone,
		address:    req.body.address,
		city:       req.body.city,
		state:      req.body.state,
		department: req.body.department
	}
    return knex('employees').insert(newEmployee)
    .then(employee => {
      res.json(employee)
    });
});

module.exports = router