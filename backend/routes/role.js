const express = require("express");
const router = express.Router();
const RoleController = require("../controllers/role")

// GET POST PUT DELETE
//http://localhost:3001/api/role/registerRole
router.post("/registerDiegoRole",RoleController.registerDiegoRole);
//http://localhost:3001/api/role/listRole
router.get("/listDiegoRole",RoleController.listDiegoRole);

module.exports = router;