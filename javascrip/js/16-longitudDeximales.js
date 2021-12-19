"use strict"

var numero1 =25.447896524;
var numero1Dec = numero1.toFixed(3);
console.log(numero1Dec);


/* Metodo slice */

var numero1str = numero1.toString();
var digitosAntesPunto = 0;
for (var i = 0; i < numero1str.length; i++ ){
    if (numero1str [i] ==="."){
        digitosAntesPunto =i;
    }
}
console.log(numero1str)
console.log(numero1str.slice(0, (digitosAntesPunto + 4)));