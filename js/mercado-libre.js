class Automovil {
    constructor(marca, modelo, precio, imagen) {
        this.Marca = marca;
        this.Modelo = modelo;
        this.Precio = precio;
        this.Imagen = imagen;
    }
}
let auto = new Automovil("mazda 3", " Sport Grand Touring Lx", "$ 840.000.000", "img2/2022-01-13-MZD3_SPORT_3.png");

function validarMazda() {
    alert(auto.Marca + "" + auto.Modelo + "" + " que automovil  necesitas");

    mostrarVehiculo();
}

function mostrarVehiculo() {
    let contentPrincipal = document.getElementById("main_content");
    let contentAuto = document.createElement("div");
    contentPrincipal.appendChild(contentAuto);

    let marcaAuto = document.createElement("label");
    contentAuto.appendChild(marcaAuto);
    let textMarca = document.createTextNode(auto.Marca);
    marcaAuto.appendChild(textMarca);

    let modeloAuto = document.createElement("label");
    contentAuto.appendChild(modeloAuto);
    let textModelo = document.createTextNode(auto.Modelo);
    modeloAuto.appendChild(textModelo);

    let precioAuto = document.createElement("label");
    contentAuto.appendChild(precioAuto);
    let textAuto = document.createTextNode(auto.Precio);
    precioAuto.appendChild(textAuto);

    let imagenAuto = document.createElement("img");
    contentAuto.appendChild(imagenAuto);
    imagenAuto.setAttribute("src", auto.Imagen);
}



function validarToyota() {
    alert(toyota.Marca + " " + toyota.Modelo + " " + "El auto perfecto para salir a pasear")

    mostrarToyota();
}

function mostrarToyota() {
    let contenedorPrinToyota = document.getElementById("main_content");
    let contentToyota = document.createElement("div");
    contenedorPrinToyota.appendChild(contentToyota);

    let marcaToyota = document.createElement("label");
    contentToyota.appendChild(marcaToyota);
    let textToyotaMarca = document.createTextNode(toyota.Marca);
    marcaToyota.appendChild(textToyotaMarca);

    let modeloToyota = document.createElement("label");
    contentToyota.appendChild(modeloToyota);
    let textModelToyota = document.createTextNode(toyota.Modelo);
    modeloToyota.appendChild(textModelToyota);

    let precioToyota = document.createElement("label");
    contentToyota.appendChild(precioToyota);
    let textPrecioToyota = document.createTextNode(toyota.Precio);
    precioToyota.appendChild(textPrecioToyota);

    let imgToyota = document.createElement("img");
    contentToyota.appendChild(imgToyota);
    imgToyota.setAttribute("src", toyota.Imagen)


}
let toyota = new Automovil("toyota",  "Hilux",  "$ 87.000.000",  "img2/toyota-hilux-2017-2020.jpg");

function validarChevrolet() {
    alert(chevrolet.Marca + " " + chevrolet.Modelo + " " + "El auto con buen motor¡¡")

    mostarChevrolet();
}

function mostarChevrolet() {
    let contenedorPrincChevrolet = document.getElementById("main_content");
    let contnedorChevrolet = document.createElement("div");
    contenedorPrincChevrolet.appendChild(contnedorChevrolet);

    let marcaChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(marcaChevrolet);
    let textMarcaChevrolet = document.createTextNode(chevrolet.Marca);
    marcaChevrolet.appendChild(textMarcaChevrolet);

    let modeloChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(modeloChevrolet);
    let textModeloChevrolet = document.createTextNode(chevrolet.Modelo);
    marcaChevrolet.appendChild(textModeloChevrolet);

    let precioChevrolet = document.createElement("label");
    contnedorChevrolet.appendChild(precioChevrolet);
    let textPrecioChevrolet = document.createTextNode(chevrolet.Precio);
    precioChevrolet.appendChild(textPrecioChevrolet);

    let imgChevrolet = document.createElement("img");
    contnedorChevrolet.appendChild(imgChevrolet);
    imgChevrolet.setAttribute("src", chevrolet.Imagen)
}
let chevrolet = new Automovil("chevrolet", "Camaro 6.2 Ss", "$135.900.000", "img2/2021-camaro-RED-HOT.jpg");

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Automoviles Nuevos") {
            mostrarVehiculo(auto);
            mostrarToyota(toyota);
            mostarChevrolet(chevrolet);
        } else if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto);
        }


        if (busqueda == "Toyota Hilux") {
            mostrarToyota(toyota);
        } else if (busqueda == "Chevrolet") {
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