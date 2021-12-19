/*obtener fecha y hora
GTM del navegador */
console.log("===Fecha y Hora GTM===")
var timeGTM = new Date();
console.log(timeGTM);

/* Convertir fecha string */
console.log("===Fecha y Hora Local===");
var timeCurrentStr = new Date();
console.log(timeCurrentStr.toString());

/*Obtener Dia */
console.log("===Obtener Dia de la Semana====");
var numDiaSemana = new Date();
console.log(numDiaSemana.getDay());

/* Convertir dia con un array */
var diaSemana = new Date();
var dia = ["Domingo", "Lunes", "Martes",
           "Miercoles", "Jueves",
            "viernes", "sabado",];
var diaNum = diaSemana.getDay();
console.log("Dia: " + dia[diaNum]);

/* Metodos mas comunes */
console.log("===Fecha y Hora Local Desfragmentada===");
var currenTime = new Date();
console.log("Dia de la semana: " + currenTime.getDay());
console.log("Mes del año: " + currenTime.getMonth());
console.log("Dia del mes: " + currenTime.getDate());
console.log("Año: " + currenTime.getFullYear());
console.log("Hora: " + currenTime.getHours());
console.log("Minutos: " + currenTime.getMinutes());
console.log("Segundos: " + currenTime.getSeconds());
console.log("Milisegundos: " + currenTime.getMilliseconds());

/*  Especificando Fechas para establecer diferencias */
var newYear = new Date("January 1, 2021");
var fechaHoy = new Date ();
//hallamos los milisegundos transcurridos desde 1970
var msToday = fechaHoy.getTime();
var msNewYear = newYear.getTime();
//hallamos la diferencia en milisegundos
//entre ambas fechas 
var msDiff = msNewYear - msToday;
var diasDiff = msDiff / (1000 * 60 * 60 * 24);
console.log("Dias de diferencia sin Dec.: " + diasDiff);
diasDiff = Math.floor(diasDiff);
console.log("Dias de diferencia sin Dec.: " + diasDiff);

/* Ingresar Fecha y Hora */
var fecha_hora = new Date("May 23, 2020 18:04:00");
console.log("Año: " + fecha_hora.getFullYear());
console.log("Mes: " + fecha_hora.getMonth());
console.log("Dia: " + fecha_hora.getDate());
console.log("Horas: " + fecha_hora.getHours());
console.log("minutos: " + fecha_hora.getMinutes());

/* FECHA Y HORA QUE SE PUEDA MODIFICAR */
/* var fechaFormat =
new Date(Date.UTC(year, month, day, hour, minutes, seconds)); */
console.log("===Formatos de Fecha que se pueden modificar===");
var updateFecha = new Date(Date.UTC(2020, 0, 15, 4, 1, 0));
updateFecha.setFullYear(2022);
updateFecha.setMonth(11);
updateFecha.setDate(24);
console.log("Año actualizado: " + updateFecha.getFullYear());
console.log("Mes actulizado: " + updateFecha.getMonth());
console.log("Dia actualizado: " + updateFecha.getDate());

/* Minutos de diferencia */
/* Este ejercisio es muy practico para
establecer un limite de tiempo en lecciones */
console.log("Diferencias de horas y minutos");
var fechaActual = new Date();
var limiteleccion = new Date ();
//agregamos 30 minutos
var TiempoExamen = limiteleccion.setMinutes(limiteleccion.getMinutes() + 30);
console.log("El examen se cerrara en 30 minutos: ");
console.log("Dia: " + limiteleccion.getDate());
console.log("Hora: " + limiteleccion.getHours());
console.log("Minutos: " + limiteleccion.getMinutes());
console.log("Segundos: " + limiteleccion.getSeconds());
/* Calcular tiempo restante para el cierre del examen */
var minDiff = limiteleccion.getTime() - fechaActual.getTime();
var minRestantes = Math.floor((minDiff / 1000) / 60);
var segRestantesTotales = Math.floor(minDiff / 1000);
/* Hallamos los segundos restantes segun el minuto mostrado */
var segRestantes = segRestantesTotales - (minRestantes.toFixed(0) * 60);
console.log(minRestantes.toFixed(0) + ":" + segRestantes.toFixed(0));
var limiteleccion = new Date(2020 , 04, 25, 7, 47, 0)
//Le damos un formato a los minutos y a los segundos
if (minRestantes <10) {
    minRestantes = "0" + segRestantes.toString();
}
if (segRestantes <10) {
    segRestantes = "0" + segRestantes.toString();
}
console.log("El examen cierra en: " +
            minRestantes + ":" + segRestantes);

/* Minutos de diferencia */
/* Este ejercisio es muy practico para
establecer un limite de tiempo en lecciones */
console.log("Diferencias de horas y minutos");
var fechaActual = new Date();
var limiteleccion = new Date (2020, 04, 25, 7, 47, 0);
//agregamos 30 minutos
var TiempoExamen = limiteleccion.setMinutes(limiteleccion.getMinutes() + 30);
console.log("El examen se cerrara en 30 minutos: ");
console.log("Dia: " + limiteleccion.getDate());
console.log("Hora: " + limiteleccion.getHours());
console.log("Minutos: " + limiteleccion.getMinutes());
console.log("Segundos: " + limiteleccion.getSeconds());
/* Calcular tiempo restante para el cierre del examen */
var minDiff = limiteleccion.getTime() - fechaActual.getTime();
var minRestantes = Math.floor((minDiff / 1000) / 60);
var segRestantesTotales = Math.floor(minDiff / 1000);
/* Hallamos los segundos restantes segun el minuto mostrado */
var segRestantes = segRestantesTotales - (minRestantes.toFixed(0) * 60);
console.log(minRestantes.toFixed(0) + ":" + segRestantes.toFixed(0));
var limiteleccion = new Date(2020 , 04, 25, 7, 47, 0)
//Le damos un formato a los minutos y a los segundos
if (minRestantes <10) {
    minRestantes = "0" + segRestantes.toString();
}
if (segRestantes <10) {
    segRestantes = "0" + segRestantes.toString();
}
console.log("El examen cierra en: " +
            minRestantes + ":" + segRestantes);
