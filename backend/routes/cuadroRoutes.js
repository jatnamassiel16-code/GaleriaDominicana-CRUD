const express = require("express");

const router = express.Router();

const {
    obtenerCuadros
} = require("../controllers/cuadroController");

router.get("/", obtenerCuadros);

module.exports = router;
