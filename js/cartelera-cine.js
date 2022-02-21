function verInfo() {
    /*Leyendo el contenido de un input text */
    var nombreUsuario = document.getElementById("nombre").ariaValueMax;
    /*Leyendo el contenido de pàrrafo*/
    alert("Bienvenido, sr. " + nombreUsuario);
    var texto = document.getElementById("parr").innerHTML;
    alert(texto);
}

function hacer_invisible() {
    document.getElementById("templo").className = "hidden";
}


function intercambiar() {
    document.getElementById("Naruto-Wallpaper").src = "img/Naruto-Wallpaper.jpeg"

}

function interConArg(id, ruta) {
    document.getElementById(id).src = ruta;
}

function interConArg(idPic, ruta) {
    let newpic = document.getElementById(idPic);
    newpic.src = ruta;
}