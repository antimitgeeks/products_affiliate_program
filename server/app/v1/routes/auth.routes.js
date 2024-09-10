const express = require("express");
const controllers = require("../controllers/auth.controller.js");
const router = express.Router();
const validation = require("../validations/auth.validation.js");
const middlewares=require('../middleware/authentication.js')

router.post('/login',validation.login, controllers.login);
router.post('/register',validation.register, controllers.register);
router.put('/updatePassword',middlewares.authenticate,validation.updatePassword,controllers.updatePassword)

module.exports = router;
 
   