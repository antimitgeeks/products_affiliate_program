const express = require("express");
const controllers = require("../controllers/admin.controller.js");
const router = express.Router();
const validation = require("../validations/auth.validation.js");
const { authAdmin } = require('../middleware/authentication.js')

router.get('/allUsers', authAdmin, controllers.allUsers);
router.post('/affiliate/not-assigned-customers-list/:id', controllers.notAssignedCustomers)

module.exports = router;