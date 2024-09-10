const express = require("express");
const controllers = require("../controllers/auth.controller.js");
const router = express.Router();
const validation = require("../validations/auth.validation.js");
const {authenticate} = require('../middleware/authentication.js')

router.post('/login', controllers.login);
router.post('/register', controllers.register);
router.post('/forget-password',controllers.forgetPassword)
router.post('/reset-password/:id',controllers.resetPassword)
router.get('/profile', authenticate,controllers.getProfile);
router.put('/profile-update', authenticate,controllers.updateProfile);

module.exports = router;

