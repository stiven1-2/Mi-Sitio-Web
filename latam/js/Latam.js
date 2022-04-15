"use strict"
let fechaVuelo = undefined;
let jornada = undefined;
let horarioVuelo = undefined;
/* let horaSalida = new Date(2022, 02, 10, 8, 12, 0); */
let horaLlegada = new Date(2022, 02, 13, 12, 12, 0);


class Vuelos {
    constructor(horaSalida, horaLlegada, duracion, origen, destino, precio, stopping, economic) {
        this.horaSalida = horaSalida;
        this.horaLlegada = horaLlegada;
        this.duracion = duracion;
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
        this.stopping = stopping;
        this.economic = economic;
    }
}

/* window.onload = function() {
    buscarVuelos();
} */
window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
    


/* function establecerJornada(horaEvento) {
    if (horaEvento.getHours < 12) {
        jornada = "A.M.";
    }
    else {
        jornada = "P.M.";
        horaEvento.setHours = horaEvento.getHours() - 12;
    }
}


if (horaLlegada.getHours < 12) {
    jornada = "A.M.";
}
else {
    jornada = "P.M.";
    horaLlegada.setHours = horaLlegada.getHours() - 12;
} */
/* horarioSalida = fechaVuelo.getHours() + ":" + fechaVuelo.getMinutes() + " " + jornada; */
/* let vuelo1 = new Vuelo(horarioVuelo, "Bogotá", "Cartagena", 258000, 1, 1); */
/* duracion.setMinutes(35);
duracion.setHours(1);
alert(duracion); */
/* horaSalida = establecerJornada(horaSalida);
horaLlegada = establecerJornada(horaLlegada); */
function definirJornada(horaEvento) {
    if (horaEvento.getHours() < 12) {
        jornada = "a.m.";
    }
    else {
        jornada = "p.m.";
        horaEvento.setHours = horaEvento.getHours() - 12;
    } 
    let horaEventoTxt = horaEvento.getHours().toString() + ":" + horaEvento.getMinutes().toString() + " " + jornada;
    return horaEventoTxt;
}
/* function establecerHorarios() { */
    let horaSalida1 = new Date(2022, 02, 12, 10, 12, 0);
    let horaLlegada1 = new Date(2022, 02, 13, 11, 32, 0);
    let horaSalida1Str = definirJornada(horaSalida1);
    let horaLlegada1Str = definirJornada(horaLlegada1);

    let horaSalida2 = new Date(2022, 02, 12, 8, 35, 0);
    let horaLlegada2 = new Date(2022, 02, 13, 9, 45, 0);
    let horaSalida2Str = definirJornada(horaSalida2);
    let horaLlegada2Str = definirJornada(horaLlegada2);

    let horaSalida3 = new Date(2022, 02, 12, 11, 40, 0);
    let horaLlegada3 = new Date(2022, 02, 13, 12, 50, 0);
    let horaSalida3Str = definirJornada(horaSalida3);
    let horaLlegada3Str = definirJornada(horaLlegada3);

    let vuelo = [{
        "horaSalida":  horaSalida1Str,
        "horaLlegada": horaLlegada1Str,
        "duracion": "1h 20Min",
        "origen": "BOG",
        "destino": "CTG",
        "precio": 375000,
        "stopping": 1,
        "economic": 1
    },
    {
        "horaSalida":  horaSalida2Str,
        "horaLlegada": horaLlegada2Str,
        "duracion": "1h 20Min",
        "duracion": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 282000,
        "stopping": 1,
        "economic": 1
    },
    {
        "horaSalida":  horaSalida3Str,
        "horaLlegada": horaLlegada3Str,
        "duracion": "1h 20Min",
        "duracion": "1h 20Min",
        "origen": "BGT",
        "destino": "CTG",
        "precio": 420000,
        "stopping": 1,
        "economic": 1
    }];
/* } */


function buscarVuelos() {
    /* establecerHorarios(); */
    let duracionTxt = "Duración";
    for(let i = 0; i < vuelo.length; i++) {
        cargarVuelos(vuelo[i].horaSalida,  vuelo[i].horaLlegada, duracionTxt,  
            vuelo[i].origen, vuelo[i].destino, vuelo[i].duracion, vuelo[i].precio, vuelo[i].stopping, vuelo[i].economic);
    } 
    
    /* 
        alert(vuelos[i].horario);
    cargarVuelos(vuelos[1]);
    cargarVuelos(vuelos[2]); */
}

/* let vuelosCartagena = () => {
    return vuelos.filter((pizza) => {
        if (vuelo.destino == "Cartagena") {
            return true;
        }
    });
} */

/* let vuelosCartagena = vuelos.filter */


function cargarVuelos(horaSalida, horaLlegada, duracionTxt, origen, destino, duracionVueloStr, precioVuelo, paradasVuelo,  economicVuelos) {
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById("main-content");
    contentPrincipal.appendChild(contentVuelo);
    contentVuelo.setAttribute("class", "style-content-vuelo");

    let horarioSalida = document.createElement("label");
    contentVuelo.appendChild(horarioSalida);
    let txtHorarioSalida = document.createTextNode(horaSalida);
    horarioSalida.setAttribute("class", "style-horario-salida");
    horarioSalida.appendChild(txtHorarioSalida);

    let horarioLlegada = document.createElement("label");
    contentVuelo.appendChild(horarioLlegada);
    let txtHorarioLlegada = document.createTextNode(horaLlegada);
    horarioLlegada.setAttribute("class", "style-horario-llegada");
    horarioLlegada.appendChild(txtHorarioLlegada);
    
    let duracionTexto = document.createElement("label");
    contentVuelo.appendChild(duracionTexto);
    let duracionStr = document.createTextNode(duracionTxt);
    duracionTexto.setAttribute("class", "style-duracion-txt");
    duracionTexto.appendChild(duracionStr);

    let duracionVuelo = document.createElement("label");
    contentVuelo.appendChild(duracionVuelo);
    let duracionVueloString = document.createTextNode(duracionVueloStr);
    duracionVuelo.setAttribute("class", "style-duracion");
    duracionVuelo.appendChild(duracionVueloString);

    let lineaDivisora = document.createElement("hr");
    contentVuelo.appendChild(lineaDivisora);
    lineaDivisora.setAttribute("class", "linea-divisora");

    let origenVuelo = document.createElement("label");
    contentVuelo.appendChild(origenVuelo);
    let txtOrigen = document.createTextNode(origen);
    origenVuelo.setAttribute("class", "style-origen");
    origenVuelo.appendChild(txtOrigen);

    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let txtDestino = document.createTextNode(destino);
    destinoVuelo.setAttribute("class", "style-destino");
    destinoVuelo.appendChild(txtDestino);

    /* let horarioLlegada = document.createElement("label");
    contentVuelo.appendChild(horarioLlegada);
    let txtHorarioLlegada = document.createTextNode(horaLlegada);
    horarioLlegada.setAttribute("class", "style-horario-llegada");
    horarioLlegada.appendChild(txtHorarioLlegada); */
    /* let duracion = document.createElement("label");
    contentVuelo.appendChild(duracion);
    let txtDuracion = document.createTextNode(vuelo.duracion);
    duracion.appendChild(txtDuracion);
    duracion.setAttribute("class", "duracion-vuelo"); */

    let valorTiquete = document.createElement("label");
    contentVuelo.appendChild(valorTiquete);
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(precioVuelo);
    let txtValorTiquete = document.createTextNode("cop " + precioFormat);
    valorTiquete.setAttribute("class", "style-valor");
    valorTiquete.appendChild(txtValorTiquete);

    let stopping = document.createElement("label");
    contentVuelo.appendChild(stopping);
    let txtStopping = document.createTextNode(paradasVuelo);
    let auxTxtStopping = undefined;
    if (txtStopping.data == 1) {
        auxTxtStopping = document.createTextNode("Directo");
    }
    else {
        auxTxtStopping = document.createTextNode("Directo");
    }
    stopping.setAttribute("class", "style-stopping");
    stopping.appendChild(auxTxtStopping);

    let economic = document.createElement("div");
    contentVuelo.appendChild(economic);
    if (economicVuelos === 1) {
        let txtEconomic = document.createTextNode("Mas Económico");
        economic.appendChild(txtEconomic);
        economic.setAttribute("class", "style-economic");
    }
}
