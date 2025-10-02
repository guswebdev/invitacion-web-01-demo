const cliente = (function () {
  const datosCliente = {
    nombre: "Fiorella",
    alias: "fiorella.mp",
    whatsapp: "+54 911 25493754",
    instagram: "@fiorella.96",
    musica: "rutaDelArchivoDeMusica",
    mensaje: "Quiero invitarte a mi cumple, confirma tu asistencia",
    "imagen-uno": "rutaDelArchivoDeImagenUno",
    "imagen-dos": "rutaDelArchivoDeImagenDos",
    "imagen-tres": "rutaDelArchivoDeImagenTres",
    "imagen-cuatro": "rutaDelArchivoDeImagenCuatro",
    "imagen-cinco": "rutaDelArchivoDeImagenCinco",
  };

  const getDatosCliente = () => {
    return datosCliente;
  };

  return { getDatosCliente };
})();

const evento = (function () {
  const datosEvento = {
    fecha: "2025-11-16T21:00:00",
    "fecha-texto": "16 de noviembre de 2025",
    dia: "Sabado",
    hora: "21:00 hs",
    tipo: "mis 15 años",
    salon: "nombreDelSalon",
    direccion: "Calle 4358",
    localidad: "Villa Esquivel",
    "enlace-maps": "enlaceDeGoogleMapsUbicacion",
    vestimenta: "codigoDeVestimenta",
  };

  const datosTemporizador = () => {
    const fechaEvento = new Date(datosEvento.fecha);
    const fechaActual = new Date();

    const tiempoFaltante = fechaEvento.getTime() - fechaActual.getTime();

    const milisegundosPorSegundo = 1000;
    const milisegundosPorMinuto = milisegundosPorSegundo * 60;
    const milisegundosPorHora = milisegundosPorMinuto * 60;
    const milisegundosPorDia = milisegundosPorHora * 24;

    const dias = Math.floor(tiempoFaltante / milisegundosPorDia);
    const horas = Math.floor(
      (tiempoFaltante % milisegundosPorDia) / milisegundosPorHora
    );
    const minutos = Math.floor(
      (tiempoFaltante % milisegundosPorHora) / milisegundosPorMinuto
    );
    const segundos = Math.floor(
      (tiempoFaltante % milisegundosPorMinuto) / milisegundosPorSegundo
    );
    return { dias, horas, minutos, segundos };
  };

  const getDatosEvento = () => {
    return datosEvento;
  };

  return { getDatosEvento, datosTemporizador };
})();

const controlador = (function () {
  return {};
})();


const display = (function () {
  return {};
})();

console.log(cliente.getDatosCliente());
console.log(evento.getDatosEvento());
console.log(evento.datosTemporizador());