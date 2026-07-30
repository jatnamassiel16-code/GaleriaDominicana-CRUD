const cuadros = require("../data/cuadros.json");

const obtenerCuadros = (req, res) => {
    res.json(cuadros);
};

const crearCuadro = (req, res) => {
    const nuevoCuadro = req.body;

    cuadros.push(nuevoCuadro);

    res.status(201).json({
        mensaje: "Cuadro creado correctamente",
        cuadro: nuevoCuadro
    });
};

module.exports = {
    obtenerCuadros,
    crearCuadro
};