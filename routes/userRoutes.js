var express = require('express');
const UserController = require("../controllers/userController")
var router = express.Router();

router.get("/", UserController.allUserList);
module.exports = router;
