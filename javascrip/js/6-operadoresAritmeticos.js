"use strict"
/*
SUMA.............+
Resta............-
Multiplicación...x
Division........./
Residuo..........% 
*/
/*Create 3 productos */
/*A los 3 productos le van a descontar el 5% */
/*Existencia de cada producto y hayar el costo del inventario */

var producto1 = 18000;
var producto2 = 13700;
var producto3 = 15500;
var cantPoducto1 = 3;
var cantPoducto2 = 5;
var cantPoducto3 = 7;

var producto1ConDesc = producto1 - (producto1* .05);
cantPoducto1 = 13600
console.log(producto1ConDesc)
var producto2ConDesc = producto2 - (producto2* .05);
console.log(producto2ConDesc)
var producto3ConDesc = producto3 - (producto3* .05);
console.log(producto3ConDesc)
var totalProducto1 = cantPoducto1 * producto1ConDesc;
var totalProducto2 = cantPoducto2 * producto2ConDesc;
var totalProducto3 = cantPoducto3 * producto3ConDesc;

var totalProductos = totalProducto1 +totalProducto2 + totalProducto3;
console.log("El valor total del inventario es de: $" + totalProductos)