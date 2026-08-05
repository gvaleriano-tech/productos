const mysql = require("mysql2");

const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    port:"3306",
    password: "",
    database: "tienda"
});

conexion.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado a MySQL");
    }
});

module.exports = conexion;