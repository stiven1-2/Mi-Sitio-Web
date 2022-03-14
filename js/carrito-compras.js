"use-strict"

let cantidadProducto
let sumarProducto = "1";
let restarProductos = "1";
let totalProductos = 239900;
let cantidadYaProducto

function funSumarProducto() {
    if (sumarProducto >= 1 & sumarProducto < 10) {
        restarProductos = document.getElementById("cantidad_producto").value = ++sumarProducto;

        cantidadProducto = document.getElementById("can_Productos");
        cantidadProducto.innerHTML = sumarProducto;

        cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto.innerHTML = sumarProducto * totalProductos;

    }

}

function funRestarProducto() {
    if (restarProductos > 1) {
        sumarProducto = document.getElementById("cantidad_producto").value = --restarProductos;

        cantidadProducto = document.getElementById("can_Productos");
        cantidadProducto.innerHTML = restarProductos;

        cantidadYaProducto = document.getElementById("costo_producto");
        cantidadYaProducto.innerHTML = restarProductos * totalProductos;
    }

}