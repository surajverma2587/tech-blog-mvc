const { Router } = require("express");

const view = require("./view");
const auth = require("./auth");

const router = Router();

// router.use("/api", apiRoutes);
router.use("/auth", auth);
router.use("/", view);

module.exports = router;
