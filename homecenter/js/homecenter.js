"user strict"
let botonForm = document.getElementById("botonForm");
let div4 = document.getElementById("div4");



let botonCerrar = document.getElementById("botonCerrar");

botonForm.addEventListener("click",mostrarform);

botonCerrar.addEventListener("click",ocultarForm );

function mostrarform() {
    div4.classList.add("transform5");
    div4.classList.remove("transform4");
    botonCerrar.classList.add("botonCerrarVisible");
    botonCerrar.classList.remove("botonCerrar");
    

    let div2 = document.createElement("div")
    let contenedor = document.getElementById("div2");
    contenedor.appendChild(div2);
    contenedor.setAttribute("class", "div2");
    let desc = document.createElement("label");
    div2.appendChild(desc);
    let text = document.createTextNode("Hola.");
    desc.appendChild(text);
    desc.setAttribute("class", "styleDesc");
}
function ocultarForm(){
    div4.classList.remove("transform5");
    div4.classList.add("transform4");
    botonCerrar.classList.remove("botonCerrarVisible");
    botonCerrar.classList.add("botonCerrar");

}

   













