const cuadros = require("../data/cuadros.json");

const obtenerCuadros = (req, res) => {
    res.json(cuadros);
};

module.exports = {
    obtenerCuadros
};
