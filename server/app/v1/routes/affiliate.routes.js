const express = require("express");
const controllers = require("../controllers/affiliate.controller.js");
const router = express.Router();
// const validation = require("../validations/auth.validation.js");

router.post('/add', controllers.addAffiliate);
router.get('/:id', controllers.redirectShortLink);


module.exports = router;

