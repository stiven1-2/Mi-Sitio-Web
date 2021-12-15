"use strict"


var user_BD = "stiven";
var pass_BD = 12345;

var user_input = "stiven";
var pass_input = 12345;
if (user_BD === user_input && pass_BD === pass_BD === pass_input) {
    console.log("bienvenidos");
} else {
    console.log("Bienvenidos");
}

var user = "stiven";
var pass = 12345;

var userBD = "stiven";
var passBD = 12345;
if (user === userBD && pass === passBD) {
    console.log("Bienvenidos");
} else {
    console.log("Bienvenidos");
}




var edadUsuario = 9;
var destinoUsuario = "Cartagena";
var aerolineaUsuario = "Latam";
var destinoDescuento = "cartagena"
var aerolineaDescuento = "Latam"
var costoTiquete = "250000";
var descuento = .10;
var costoFinal = 0;
var descuentousuario = ""

if (edadUsuario < 10 || edadUsuario > 70) {
    costoTiquete = costoTiquete - (costoTiquete * descuento);
    descuentousuario = "por edad";
    if (destinoUsuario === destinoDescuento)
        costoTiquete = costoTiquete - (costoTiquete * descuento)
    descuentousuario += descuentousuario + ", Por Destino"
}
if (aerolineaUsuario === aerolineaDescuento) {
    costoTiquete = costoTiquete - (costoTiquete * descuento)
    descuentousuario += " y por aerolinea"
}
if (descuentousuario != "") {
    console.log("Uste recibio un descuento por:" + descuentousuario);
    console.log("El valor final del tiquete con descuento es: $" + costoTiquete)
} else {
    console.log("El valor final del tiquete es: $" + costoTiquete)
    console.log("Lo sentimos, no aplica para ningun descuento")
}
var edadCiudadano = 18;
var edadMinima = 18;
var edadMaxima = 140;
if (edadCiudadano >= edadMinima && edadCiudadano <= edadMaxima) {
    console.log("Bienvenido. Usted cumples las condiciones")
}