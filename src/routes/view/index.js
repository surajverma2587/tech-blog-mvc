const { Router } = require("express");

const auth = require("../../middleware/auth");
const privateRouter = require("./privateRouter");
const renderHomePage = require("../../controllers/view/renderHomePage");
const renderLoginPage = require("../../controllers/view/renderLoginPage");
const renderSignupPage = require("../../controllers/view/renderSignupPage");

const router = Router();

router.get("/sign-up", renderSignupPage);
router.get("/login", renderLoginPage);
router.get("/", renderHomePage);

router.use(auth, privateRouter);

module.exports = router;
