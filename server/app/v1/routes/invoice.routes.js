const express = require("express");
const controllers = require("../controllers/invoice.controller.js");
const router = express.Router();
const validation = require("../validations/auth.validation.js");
const {authenticate} = require('../middleware/authentication.js')

router.post('/createInvoice',controllers.createInvoice);
router.post('/userInvoiceList/:id',controllers.userInvoiceList);
router.put('/updateStatus/:id',controllers.updateStatus);

module.exports = router;