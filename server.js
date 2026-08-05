const express = require("express");
const cors = require("cors");
const conexion = require("./conexion");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.post("/productos", (req, res) => {

    const { nombre, precio } = req.body;

    conexion.query(
        "INSERT INTO productos(nombre, precio) VALUES (?, ?)",
        [nombre, precio],
        (error, resultado) => {

            if (error) {
                console.error(error);   // Mostrar el error real
                return res.status(500).json(error);
            }

            res.json({
                mensaje: "Producto registrado"
            });

        }
    );

});

app.get("/productos", (req, res) => {

    conexion.query(
        "SELECT * FROM productos",
        (error, resultado) => {

            if (error) {
                console.error(error);
                return res.status(500).json(error);
            }

            res.json(resultado);

        }
    );

});

app.listen(3000, () => {
    console.log("Servidor en puerto 3000");
});