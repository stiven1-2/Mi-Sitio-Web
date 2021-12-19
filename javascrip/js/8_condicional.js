"use strict"

//Variables de login

var user = "diego123"
var clave = "54321"

//Variables de base de datos

var userBd = "diego1234"
var claveBd = "654321"

if(user === userBd && clave === claveBd){
    console.log("Bienvenido a nuestra plataforma")
} else{
    console.log("Usuario incorrecto, asegurese que los datos introducidos sean correctos")
}

var edadUsuario = 39;
var destinoUsuario = "bogota";
var aerolineaUsuario ="aviana";
var destinoDescuento = "bogota"
var aearolineaDescuento = "avianca"
var costoTiquete = 250000;
var descuento = .10;
var costoFinal = 0;
var descuentoUsuario = "";

if (edadUsuario <10 || edadUsuario >70) {
    
    costoTiquete = costoTiquete - (costoTiquete * descuento);
    descuentoUsuario = "por edad";
    if (destinoUsuario === destinoDescuento)
        costoTiquete = costoTiquete - (costoTiquete * descuento)
        costoTiquete = descuentoUsuario += ",por destino"
}

    if (aerolineaUsuario === aearolineaDescuento){
        costoTiquete = costoTiquete - (costoTiquete * descuento)
        descuentoUsuario += " y por aerolinea"
}
if (descuentoUsuario != "") {
    console.log("usted resivio descuentos por:" + descuentoUsuario);
    console.log("el valor final del tiquete con descuentos es: $" + costoTiquete);
}
else {
    console.log("el valor final del tiquete es: $" + costoTiquete);
    console.log("lo sentimos, no aplica para ningun descuento ");
}




     
