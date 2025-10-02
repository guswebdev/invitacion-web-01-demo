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
    fecha: "16 de noviembre de 2025",
    dia: "Sabado",
    hora: "21:00 hs",
    tipo: "mis 15 años",
    salon: "nombreDelSalon",
    direccion: "Calle 4358",
    localidad: "Villa Esquivel",
    "enlace-maps": "enlaceDeGoogleMapsUbicacion",
    vestimenta: "codigoDeVestimenta",
  };

  const getDatosEvento = () => {
    return datosEvento;
  };

  return { getDatosEvento };
})();

const controlador = (function () {
  const obtenerFecha = () => {
    console.log(evento.getDatosEvento().fecha)
  };

  return {obtenerFecha}
})();

console.log(cliente.getDatosCliente());
console.log(evento.getDatosEvento());

controlador.obtenerFecha()
