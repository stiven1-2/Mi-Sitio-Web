"use strict"
let horaSalida1 = new Date(2022, 4, 5 , 7, 30, 0);
let horaLlegada1 = new Date(2022, 4, 5, 11, 30, 0);

let horaSalida2 = new Date(2022, 4, 5, 9, 10, 0);
let horaLlegada2 = new Date(2022, 4, 5, 1, 10, 0);

let horaSalida3 = new Date(2022, 4, 5, 0, 0, 0);
let horaLlegada3 = new Date(2022, 4, 5, 2, 1, 0);



let vuelo=[{
    "origen": "BGT",
    "destino": "MIA",
    "horaDeSalida": horaSalida1.getHours()+ ":" + horaSalida1.getMinutes(),
    "horaDeLlegada": horaLlegada1.getHours()+ ":" + horaLlegada1.getMinutes(),
    "precio": 714.84000,
    "parada": "Parada",
    "economico": "Más Económico",
    "recomendado": "Recomendado"
    
    
},
{
    "origen": "BGT",
    "destino": "MIA",
    "horaDeSalida": horaSalida2.getHours()+ ":" + horaSalida2.getMinutes(),
    "horaDeLlegada": horaLlegada2.getHours()+ ":" + horaLlegada2.getMinutes(),
    "precio": 5.71708000,
    "directo": "Directo",
    "economico": "Más Económico",
    "recomendado": "Recomendado"
    
},
{
    "origen": "BGT",
    "destino": "MIA",
    "horaDeSalida": horaSalida3.getUTCHours()+ ":" + horaLlegada3.getMinutes(),
    "horaDeLlegada": horaLlegada3.getHours()+ ":" + horaLlegada3.getMinutes(),
    "precio": 7.30829000,
    "directo": "Directo",
    "economico": "Más Económico",
    "recomendado": "Recomendado"
    

}
];
class Vuelos{
    constructor(origen, destino, precio,horaSalida,horaLlegada,directo,economico){
        this.origen= origen;
        this.destino= destino;
        this.precio= precio;
        this.horaSalida= horaSalida;
        this.horaLlegada= horaLlegada;
        this.economico= economico;
        this.recomendado=recomendado
    }
}
function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].origen, vuelo[i].destino,vuelo[i].precio,vuelo[i].horaDeSalida, vuelo[i].horaDeLlegada, vuelo[i].economico, vuelo[i].recomendado);
    }
}
function cargarVuelos(origen,destino,precio,horaDeSalida,horaDeLlegada,economico,recomendado){
    let contenedor=document.createElement("div");
    let contenMain=document.getElementById("main_content");
    contenMain.appendChild(contenedor);
    contenedor.setAttribute("class", "container");

    let origenVuelo=document.createElement("label");
    contenedor.appendChild(origenVuelo);
    let nodoOrigen = document.createTextNode(origen);
    origenVuelo.appendChild(nodoOrigen);
    origenVuelo.setAttribute("class", "css-origen");

    let destinoVuelo=document.createElement("label");
    contenedor.appendChild(destinoVuelo);
    let nodoDestino = document.createTextNode(destino);
    destinoVuelo.appendChild(nodoDestino);
    destinoVuelo.setAttribute("class", "css-destino");

    let precioVuelo=document.createElement("label");
    contenedor.appendChild(precioVuelo);
    let nodoPrecio = document.createTextNode("COP $"+ precio);
    precioVuelo.appendChild(nodoPrecio);
    precioVuelo.setAttribute("class", "css-precio");

    let salidaVuelo=document.createElement("label");
    contenedor.appendChild(salidaVuelo);
    let nodoSalida = document.createTextNode(horaDeSalida+" am");
    salidaVuelo.appendChild(nodoSalida);
    salidaVuelo.setAttribute("class", "cssSalida");

    let linea=document.createElement("hr");
    contenedor.appendChild(linea);
    linea.setAttribute("class", "linea");

    let LlegadaVuelo=document.createElement("label");
    contenedor.appendChild(LlegadaVuelo);
    let nodoLlegada = document.createTextNode(horaDeLlegada+ " " + "pm");
    LlegadaVuelo.appendChild(nodoLlegada);
    LlegadaVuelo.setAttribute("class", "cssLlegada");

    let VueloParada =document.createElement("label");
    contenedor.appendChild(VueloParada);
    let nodoVueloParada = document.createTextNode("Parada");
    VueloParada.appendChild(nodoVueloParada);
    VueloParada.setAttribute("class", "css-VueloParada");

    let VueloEconomico=document.createElement("label");
    contenedor.appendChild(VueloEconomico);
    let nodoVueloEconomico = document.createTextNode(economico);
    VueloEconomico.appendChild(nodoVueloEconomico);
    VueloEconomico.setAttribute("class", "cssEconomico");

    let VueloRecomendado=document.createElement("label");
    contenedor.appendChild(VueloRecomendado);
    let nodoVueloRecomendado=document.createTextNode(recomendado);
    VueloRecomendado.appendChild(nodoVueloRecomendado);
    VueloRecomendado.setAttribute("class", "cssRecomendado")

    let textoDuracion =document.createElement("label");
    contenedor.appendChild(textoDuracion);
    let nodotextoDuracionVuelo = document.createTextNode("Duracion");
    textoDuracion.appendChild(nodotextoDuracionVuelo);
    textoDuracion.setAttribute("class", "cssTextoDuracion");

    let DuracionVuelo =document.createElement("label");
    contenedor.appendChild(DuracionVuelo);
    let nodoDuracionVuelo = document.createTextNode("28hrs");
    DuracionVuelo.appendChild(nodoDuracionVuelo);
    DuracionVuelo.setAttribute("class", "cssDuracion");
    
}

window.onload= function(){
    mostrarVuelos();
}