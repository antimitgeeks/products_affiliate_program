const express = require("express");
const authRoutes = require("./auth.routes.js");
const affiliateRoutes = require("./affiliate.routes.js");
const clickAndPurchasesRoutes = require('./clicksAndPurchases.routes.js')
const router = express.Router();

router.use("/auth", authRoutes);
router.use("/affiliate", affiliateRoutes);
router.use('/click-and-purchases',clickAndPurchasesRoutes)

module.exports = router;
