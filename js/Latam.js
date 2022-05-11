class datosVuelos {
    constructor(economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada, tipoVuelo, recomendado, pasajeros) {
        this.economia = economia;
        this.recomendado = recomendado;
        this.precio = precio;
        this.pasajeros = pasajeros;
        this.origenVuelos = origenVuelos;
        this.horaSalida = horaSalida;
        this.textDuracion = textDuracion;
        this.duracionVuelo = duracionVuelo;
        this.destinoVuelos = destinoVuelos;
        this.horaLlegada = horaLlegada;
        this.tipoVuelo = tipoVuelo
    }
}

let vuelo = [{

    "economia": "Más económico",
    "recomendado": "recomendado",
    "pasajeros": "Adulto desde",
    "precio": "COP 869.380,00",
    "origenVuelos": "BOG",
    "horaSalida": "1:41 p.m",
    "textDuracion": "Duración ",
    "duracionVuelo": "12h 48min",
    "destinoVuelos": "SLC",
    "horaLlegada": "3:29 a.m",
    "tipoVuelo": "1 parada",
}, {
    "economia": "Más económico",
    "recomendado": "Rapido",
    "pasajeros": "Adulto desde",
    "precio": "COP 869.380,00",
    "origenVuelos": "BOG",
    "horaSalida": "11:50 p.m",
    "textDuracion": "Duración ",
    "duracionVuelo": "5h 45min",
    "destinoVuelos": "SCL",
    "horaLlegada": "6:35 a.m",
    "tipoVuelo": "Directo",
}, {
    "economia": "Más económico",
    "recomendado": " recomendado",
    "pasajeros": "Adulto desde  ",
    "precio": "COP 869.380,00",
    "origenVuelos": "BOG",
    "horaSalida": "5:36 p.m",
    "textDuracion": "Duración ",
    "duracionVuelo": "8h 53min",
    "destinoVuelos": "SLC",
    "horaLlegada": "3:29 p.m",
    "tipoVuelo": "1 parada",
}, {
    "economia": "Más económico",
    "recomendado": "Recomendado",
    "pasajeros": "Adulto desde  ",
    "precio": "COP 2.772.090,00",
    "origenVuelos": "BOG",
    "horaSalida": "1:41 p.m",
    "textDuracion": "Duración ",
    "duracionVuelo": "23h 19min",
    "destinoVuelos": "SLC",
    "horaLlegada": "2:00 p.m",
    "tipoVuelo": "2 paradas",
}];

function mostrarVuelos() {
    for (let i = 0; i < vuelo.length; i++) {
        cargarVuelos(vuelo[i].economia, vuelo[i].precio, vuelo[i].origenVuelos, vuelo[i].horaSalida, vuelo[i].textDuracion, vuelo[i].duracionVuelo, vuelo[i].destinoVuelos, vuelo[i].horaLlegada, vuelo[i].tipoVuelo, vuelo[i].recomendado, vuelo[i].pasajeros, vuelo[i].tipoVuelo);
    }
}

function cargarVuelos(economia, precio, origenVuelos, horaSalida, textDuracion, duracionVuelo, destinoVuelos, horaLlegada, tipoVuelo, recomendado, pasajeros) {

    //contenedor principal         

    let contentPrincipal = document.getElementById("vuelos");
    let contentVuelos = document.createElement("div");
    contentPrincipal.appendChild(contentVuelos);
    contentVuelos.setAttribute("class", "content-vuelos")

    //contenedor economia

    let economico = document.createElement("div");
    economico.setAttribute("class", "cont-economico");
    contentVuelos.appendChild(economico);
    //economia
    let textEconomico = document.createElement("span");
    textEconomico.setAttribute("class", "span-economico")
    economico.appendChild(textEconomico);
    let defEconomico = document.createTextNode(economia)
    textEconomico.appendChild(defEconomico);
    //Recomendado,
    let recomendadoVuelo = document.createElement("span");
    recomendadoVuelo.setAttribute("class", "recomendado");
    economico.appendChild(recomendadoVuelo);
    let textRecomendado = document.createTextNode(recomendado);
    recomendadoVuelo.appendChild(textRecomendado);


    // contenedor descripcion del vuelo

    let descVuelo = document.createElement("div");
    descVuelo.setAttribute("class", "desc-vuelo");
    contentVuelos.appendChild(descVuelo);
    //contenedor origen hora
    let origenHora = document.createElement("div");
    origenHora.setAttribute("class", "origen-hora");
    descVuelo.appendChild(origenHora);
    //hora de salida del vuelo
    let salidaVuelo = document.createElement("span");
    salidaVuelo.setAttribute("class", "hora-salida");
    let textHoraSalida = document.createTextNode(horaSalida);
    salidaVuelo.appendChild(textHoraSalida);
    origenHora.appendChild(salidaVuelo)
        //origen del vuelo
    let origen = document.createElement("span");
    origen.setAttribute("class", "origen-vuelo");
    let textOrigen = document.createTextNode(origenVuelos);
    origen.appendChild(textOrigen);
    origenHora.appendChild(origen);
    //contenedor duracion del vuelo
    let duracionDelVuelo = document.createElement("div");
    duracionDelVuelo.setAttribute("class", "duracion-del-vuelo");
    descVuelo.appendChild(duracionDelVuelo);
    //texto de duracion 
    let tiempoVuelo = document.createElement("span");
    tiempoVuelo.setAttribute("class", "duracion-vuelo");
    let textoDuracion = document.createTextNode(textDuracion);
    tiempoVuelo.appendChild(textoDuracion);
    duracionDelVuelo.appendChild(tiempoVuelo);
    //duracion del vuelo
    let vueloDuracion = document.createElement("p");
    vueloDuracion.setAttribute("class", "vuelo-duracion");
    let testDuracion = document.createTextNode(duracionVuelo);
    vueloDuracion.appendChild(testDuracion);
    duracionDelVuelo.appendChild(vueloDuracion);
    //contenedor destino y hora llegada
    let destinoHoraLlegada = document.createElement("div");
    destinoHoraLlegada.setAttribute("class", "destino-hora-llegada");
    descVuelo.appendChild(destinoHoraLlegada)
        //hora de llegada del vuelo 
    let llegadaVuelo = document.createElement("span");
    llegadaVuelo.setAttribute("class", "llegada-vuelo");
    let textLlegada = document.createTextNode(horaLlegada);
    llegadaVuelo.appendChild(textLlegada);
    destinoHoraLlegada.appendChild(llegadaVuelo);
    //destino del vuelo
    let destino = document.createElement("span");
    destino.setAttribute("class", "destino-vuelo");
    let textDestino = document.createTextNode(destinoVuelos);
    destino.appendChild(textDestino);
    destinoHoraLlegada.appendChild(destino);



    //contenedor tipo 

    let pasajeroTipoVUelos = document.createElement("div");
    pasajeroTipoVUelos.setAttribute("class", "tipos-vuelos");
    contentVuelos.appendChild(pasajeroTipoVUelos);
    //tipo
    let tipoVuelos = document.createElement("span");
    tipoVuelos.setAttribute("class", "tipo-vuelo");
    pasajeroTipoVUelos.appendChild(tipoVuelos);
    let textTipo = document.createTextNode(tipoVuelo);
    tipoVuelos.appendChild(textTipo);

    //contenedor precio y pasajeros

    let pasajeroVuelos = document.createElement("div");
    pasajeroVuelos.setAttribute("class", "pasajero-vuelos");
    pasajeroTipoVUelos.appendChild(pasajeroVuelos);
    //pasajeros
    let vueloPasajeros = document.createElement("p");
    vueloPasajeros.setAttribute("class", "vuelo-pasajeros");
    pasajeroVuelos.appendChild(vueloPasajeros);
    let textPasajeros = document.createTextNode(pasajeros);
    vueloPasajeros.appendChild(textPasajeros);
    //precio
    let cntPrecio = document.createElement("span");
    cntPrecio.setAttribute("class", "precio");
    pasajeroVuelos.appendChild(cntPrecio);
    let textPrecio = document.createTextNode(precio)
    cntPrecio.appendChild(textPrecio);
};


window.onload = function() {
    mostrarVuelos();
};