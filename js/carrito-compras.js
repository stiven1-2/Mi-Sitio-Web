"use-strict"

let cantidadProducto
let sumarProducto = 1;
let restarProductos = "";
let totalProductos = 226000;
let cantidadYaProducto


function funSumarProducto() {
    if (sumarProducto < 10) {
        restarProductos = document.getElementById("cantidad_producto").value = ++sumarProducto;

        cantidadProducto = document.getElementById("can_Productos");
        cantidadProducto.innerHTML = sumarProducto;

        cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto.innerHTML = sumarProducto * totalProductos;

    }

}

function funRestarProducto() {
    if (restarProductos > 1) {
        document.getElementById("cantidad_producto").value = --restarProductos;

        cantidadProducto = document.getElementById("can_Productos");
        cantidadProducto.innerHTML = restarProductos;

        cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto.innerHTML = restarProductos * totalProductos;
    }

}