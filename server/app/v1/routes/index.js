const express = require("express");
const authRoutes = require("./auth.routes.js");
const affiliateRoutes = require("./affiliate.routes.js");
const adminRoutes = require("./admin.routes.js");

const router = express.Router();

router.use("/auth", authRoutes);
router.use("/affiliate", affiliateRoutes);
router.use("/admin",adminRoutes)


module.exports = router;
