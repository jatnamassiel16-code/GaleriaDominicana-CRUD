const express = require("express");
const cors = require("cors");

const cuadroRoutes = require("./routes/cuadroRoutes");

const app = express();
const PORT = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.json({
        mensaje: "Bienvenido a la API de Galería Dominicana"
    });
});

// Rutas de cuadros
app.use("/api/cuadros", cuadroRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor ejecutándose en http://localhost:${PORT}`);
});