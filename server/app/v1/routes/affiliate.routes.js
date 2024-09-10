const express = require("express");
const controllers = require("../controllers/affiliate.controller.js");
const router = express.Router();
// const validation = require("../validations/auth.validation.js");
const {authenticate} = require('../middleware/authentication.js')

router.post('/add', authenticate,controllers.addAffiliate);
router.post('/list',controllers.getAffiliate)
router.post('/:id', controllers.redirectShortLink);



//list affiliate 
// password update 


module.exports = router;

