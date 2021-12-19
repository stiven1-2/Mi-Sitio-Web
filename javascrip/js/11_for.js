"use strict"
/* FOR  imprimir los numeros del 1 al 10*/
for (var i = 1; i <= 10; i++){
    console.log(i);
}



/* 1er.forma de declara un array*/
var usuario1 = new Array ();
usuario1 [0] = 1;
usuario1 [1] = 1084330256;
usuario1 [2] = "Roberto";
usuario1 [3] = "Gomez";
usuario1 [4] = "2012-11-25";
usuario1 [5] = "Cartagena";
usuario1 [6] = "Latam";
for (var j= 0; j <=usuario1.length-1; j++) {
    console.log(usuario1[j] )
}
/*2da forma de declarar un array */
var usuario2 = new Array(2, "1034568976", "Juan Felipe", "Moreno", "2010-05-06", "San Andres", "Avianca");

/* 2er. forma de declarar un array */
var usuaruio3 = [3, "1025896874", "Kevin", "Muria", "2009-05-16", "Cartagena", "American Airlines"];

console.log ("nombre usuario 1:" + usuario1[2]);
console.log ("nombre usuario 2:" + usuario2[2]);
console.log ("nombre usuario 3:" + usuaruio3[2]);

/* sistema que me permita contar los caracteres de una frase
si el usuario supero el tope, informarle a travez de un mensaje. */


var mensajeUsuario = " no me gusto ";
var longitudMensaje = mensajeUsuario.length;

if (longitudMensaje >20) {
    console.log("el mensaje exede la longitud de caracteres permtidos");
}
else if (longitudMensaje <20) {
    console.log("el mensaje fue enviado con exito ");
}
else {
    console.log("ha surgido unerror!");
}