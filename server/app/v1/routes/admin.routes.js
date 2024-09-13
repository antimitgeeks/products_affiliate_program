const express = require("express");
const controllers = require("../controllers/admin.controller.js");
const router = express.Router();
const validation = require("../validations/auth.validation.js");
const {authAdmin} = require('../middleware/authentication.js')

router.get('/allUsers',authAdmin,controllers.allUsers);
router.get('/affiliateListAssign/:id',controllers.affiliateListAssign)

module.exports = router;