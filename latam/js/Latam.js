/* >Clase constructora */
class Vuelos {
    constructor(origen, destino, precio) {
        this.origen = origen;
        this.destino = destino;
        this.precio = precio;
    }
}
let vuelos = new vuelos("vuelos", "12:41 p.m", "BOG", "1:36 pm MDE", "cop 103.600,000")

function validarLatam() {
    alert(vuelos.origen + "" + vuelos.destino + "" + "Que vuelo necesitas");

    mostrarVuelos();
}


function mostrarVuelos() {
    let contentPrincipal = document.getElementById("main_content");
    let contentVuelo = document.createElement("div");
    contentPrincipal.appendChild(contentVuelo);

    let origenVuelo = document.createElement("label");
    contentAuto.appendChild(origenVuelo);
    let textVuelos = document.createTextNode(vuelo.origen);
    marcaAuto.appendChild(textVuelos);

    let destinoVuelo = document.createElement("label");
    contentVuelo.appendChild(destinoVuelo);
    let textModelo = document.createTextNode(vuelo.destino);
    modeloAuto.appendChild(textModelo);

    let precioVuelo = document.createElement("label");
    contentAuto.appendChild(precioVuelo);
    let textVuelo = document.createTextNode(vuelo.precio);
    precioAuto.appendChild(textVuelo);


}
for (let i = 0; i < vuelo.length; i++) {
    cargarVuelos(vuelo[i].horaSalida, vuelo[i].horaLlegada, precio);
}

function cargarVuelos(horaSalida, horaLlegada, precio) {
    let contentVuelo = document.createElement("div");
    let contentPrincipal = document.getElementById(contentVuelo);
    contentPrincipal.appendChild(contentVuelo)
}






window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Buscar Vuelos") {
            mostrarLatam(latam);
            mostrarVuelo(vuelo);
            mostrarVuelos(vuelos);
        } else if (busqueda == "Latam") {
            mostrarVehiculo(auto);
        }


        if (busqueda == "Vuelo") {
            mostrarToyota(toyota);
        } else if (busqueda == "Vuelos") {
            mostarChevrolet(chevrolet);
        } else {
            this.true;
        }
        return this.false.alert("no se  encontro resultados.");

    }
})


function limpiarVentana() {
    document.getElementById("main_content").innerHTML = "";
}

let vuelo = [{
        "origen": "BGT",
        "destino": "CTG",
        "precio": 375444,
    },
    {
        "origen": "BGT",
        "destino": "CTG",
        "precio": 375444,
    }
];