// ************ Require's ************

const express = require("express");
const router = express.Router();

// ************ Controller Require ************

const mainController = require("../controllers/mainController");

// ************ Rutes ************

router.get("/", mainController.index);
router.post("/procces", mainController.procces);

module.exports = router;