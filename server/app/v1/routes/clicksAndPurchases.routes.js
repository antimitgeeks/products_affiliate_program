const express = require("express");
const controllers = require("../controllers/clicksAndPurchases.controller.js");
const router = express.Router();

//add click and purchases
router.post('/add/:id',controllers.addClickAndPurchases);
router.post('/list',controllers.getClickAndPurchasesList)

module.exports = router;

