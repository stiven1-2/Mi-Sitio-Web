class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Mazda", "3", "Sport Touring", 2019, 71000000, 36000, 2000, "Fontibón-Bogotá D.C", "img2/mazda2-3.png");
let auto2 = new Automovil("Mazda","3",  "Sport Grand Touring", 2019, 80000000, 41000, 2000, "Usaquén-Bogotá D.C", "img2/Mazda3-3.png");
let auto3 = new Automovil("Chevrolet", "Camaro", "6.2 Ss", 2013, 118000000, 39053, 2000, "Valledupar-Cesar", "img2/camaro.png");
let auto4 = new Automovil("Mazda", "3", "2.0 Prime", 2019, 65000000, 38225, 2000, "Medellín-Antioquia", "img2/toyota-Corolla.png");
let auto5 = new Automovil("Chevrolet", "Camaro", "6.2 ZI1", 2015, 179900000, 5898, 2000, "Usaquén-Bogotá D.C", "img2/chevrolet-camaro3.png");
let auto6 = new Automovil("Ferrari","3",  "Spider", 2017, 1450000000, 13900, 2000, "Bucaramanga-Santander", "img2/ferrari-Spider.png");
let auto7 = new Automovil("Yamaha","3",  "Fz", 2016, 7100000, 7700, 2000, "Pitalito-Huila", "img2/yamaha-fz.png");
let auto8 = new Automovil("Yamaha","3",  "Fz 2.0", 2021, 84000000, 11000, 2000, "Antonio Nariño-Bogotá D.C", "img2/yamaha-fz-2.0.png");
let auto9 = new Automovil("Ferrari","3",  "", 2012, 104500000, 133900, 2000, "Mexico", "img2/ferrari.png");
let auto10 = new Automovil("Ferrari","3",  "", 2018, 145000000, 103900, 2000, "Estados Unidos", "img2/Enzo-Ferrari.jpeg");
let auto11 = new Automovil("Yamaha","3",  "Fz 150 2.0", 2022, 9100000, 16453, 2000, "Medellin-Antioquia", "img2/yamaha-fz-150.png")
let auto12 = new Automovil("Chevrolet", "Camaro", "6.2 Ss", 2011, 99999990, 34593, 2000, "Usaquén-Bogotá D.C", "img2/camaro1.png");
function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
/*     alert(auto.precio); */
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);

    /* let contenedorSeparador = document.createElement("div"); */
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "km" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);
    
    anyoVehiculo.setAttribute("class", "style-anyo");
}


window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if (event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Buscar Automoviles" ) {
            mostrarYamaha(yamaha);
            mostrarChevrolet(chevrolet);
            mostrarFerrari(ferrari);
            mostrarMazda(mazda)
        }
        
        if (busqueda == "Mazda 3") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "Chevrolet Camaro") {
            mostrarVehiculo(auto5);
            mostrarVehiculo(auto3);
            mostrarVehiculo(auto12);
        }
        else if (busqueda == "Ferrari Spider") {
            mostrarVehiculo(auto6);
            mostrarVehiculo(auto9);
            mostrarVehiculo(auto10);
        }
        else if (busqueda == "Yamaha Fz") {
            mostrarVehiculo(auto7);
            mostrarVehiculo(auto8);
            mostrarVehiculo(auto11);
        }
        else {
        this.alert("No se encontro resultados.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}