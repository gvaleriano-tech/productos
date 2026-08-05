async function guardar() {

    const nombre = document.getElementById("nombre").value;
    const precio = document.getElementById("precio").value;

    /*const respuesta = await fetch("http://localhost:3000/productos", {*/
    const respuesta = await fetch("https://inventario-api.onrender.com/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            nombre,
            precio
        })
    });

    const resultado = await respuesta.json();

    alert(resultado.mensaje);
  /* Llamo a mi funcion listar */
    listar();
}

async function listar() {

    const respuesta = await fetch("https://inventario-api.onrender.com/productos");

    const datos = await respuesta.json();

    let fila = "";

    datos.forEach(producto => {

        fila += `
        <tr>
            <td>${producto.id}</td>
            <td>${producto.nombre}</td>
            <td>${producto.precio}</td>
        </tr>
        `;
    });

    document.getElementById("datos").innerHTML = fila;
}