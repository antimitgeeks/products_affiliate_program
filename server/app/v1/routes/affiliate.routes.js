const express = require("express");
const controllers = require("../controllers/affiliate.controller.js");
const router = express.Router();
const validation = require("../validations/affiliate.validation.js");
const upload = require('../middleware/uploadMiddleware.js')

const { authenticate } = require('../middleware/authentication.js')

router.post('/add', authenticate,upload.single('image'),controllers.addAffiliate);
router.post('/list',authenticate,controllers.getAffiliate)
router.get('/:id', controllers.redirectShortLink);

module.exports = router;

