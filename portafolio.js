var trabajos = [{

  /*2019*/
  figure: "media/trabajo-01-linea-NoFear-MO.gif",
  alt: "Logo de la marca de indumentaria deportiva NO FEAR",
  año:"2019",
  title: "Línea NO FEAR",
  about: "Línea de indumentaria deportiva enfocada a deportistas universitarios. Incluye un bolso acoplable a una mochila para la indumentaria deportiva, además de una renovación del logotipo de la marca MO Sport",
  url: "https://vimeo.com/355779618",
  autor:"Arribas, Azócar, Morales, Silva",
  contexto: "Taller Calidad I"
}, {
  /*2019*/
  figure: "media/trabajo-02-parlante-cadcam.gif",
  alt: "Imágenes en movimiento de un parlante de tamaño pequeño y sus detalles constructivos, hecho de madera y plástico",
  año:"2019",
  title: "Parlante CAD/CAM",
  about: "Construido con mdf cortado con láser e impresión 3D con filamento ABS",
  url: "https://flic.kr/s/aHsmGsXPEQ",
  autor:"Hip, Saldivia",
  contexto: "Diseno y Manufactura Digital Cad/Cam"
}, {
  /*2019*/
  figure: "media/trabajo-04-plisa.png",
  alt: "Logo del producto Plisa",
  año:"2019",
  title: "Plisa",
  about: "Es una superficie desplegable de planchado rápido, que estabiliza y protege el lugar de planchado, favoreciendo la velocidad de la actividad",
  url: "https://vimeo.com/355672349",
  autor:"Azócar, Lobos, Morales, Silva",
  contexto: "Taller Calidad I"
}, {
  /*2019*/
  figure: "media/trabajo-06-luminaria-jabon.jpg",
  alt: "Fotografía de plano contrapicado de una luminaria hecha a partir de la manipulación del jabón de glicerina.",
  año:"2019",
  title: "Luminaria de Jabón",
  about: "Luminaria led de 30x90 cm hecha de jabón de glicerina de tonos azules",
  url: "https://www.flickr.com/photos/183780596@N02/48615133327/in/dateposted-public/",
  autor:"Azócar, Lobos, Vicuña, Gajardo",
  contexto: "Estructuras y Materiales"
}, {
  /*2019*/
  figure: "media/trabajo-07-banca-time.jpg",
  alt: "Fotografía de cuatro bancas de terciado, una persona y sillas en el fondo; en el patio de luz del edificio de Diseño en el campus Lo Contador, en el contexto de exposición para el Open day.",
  año:"2019",
  title: "Banca Time",
  about: "Banca para tres personas, hecha con terciado de 3 mm que incluye un manual de armado",
  url: "https://www.flickr.com/photos/183780596@N02/48614654768/in/dateposted-public/",
  autor: "Azócar, Morales, Silva",
  contexto: "Estructuras y Materiales"
}, {
  /*2018*/
   figure: "media/trabajo-03-dogbeat.png",
   alt: "Logo del producto Dogbeat",
   año:"2018",
   title: "Dogbeat",
   about: "Es un dispositivo que le permite al duseño sentir los latidos de su perro, por medio de la memoria háptica, y al mismo tiempo otorgarle la posibilidad de relajar a su perro",
   url: "https://vimeo.com/355672585",
   autor: "Azócar, Lobos, Morales, Peirano",
   contexto: "Taller Identidad"
}, {
   /*2018*/
   figure: "media/trabajo-08-tenek.png",
   alt: "Logo del producto Tenek",
   año:"2018",
   title: "Tenek",
   about: "Es un implemento para jugar tenis de mesa con el pie, el cual permite a personas con falta de extremidades superiores, jugar tenis de mesa en un contexto cotidiano y de recreación",
   url: "https://vimeo.com/304869950",
   autor: "Hillman, Lobos, Ujevic, Valencia",
   contexto: "Taller Producto"
}, {
     /*2018*/
     figure: "media/trabajo-05-novum-juego.jpg",
     alt: "En la foto se ve un packaging tipo caja rectangular de cartón con el logo del juego NOVUM sobre un fondo estrellado con planetas en la tapa, además de la modalidad de juego. A los costados se ven algunos de los personajes del juego",
     año:"2018",
     title: "NOVUM",
     about: "Juego de mesa que busca enseñar metodologías de investigación",
     url: "https://flic.kr/s/aHsmGsKUuF",
     autor: "Carrasco, Saldivia, Torres",
     contexto: "Taller Producto"
}, {
  /*2017*/
    figure: "media/trabajo-09-gigante-de-hierro.gif",
    alt: "Imágenes en movimiento que muestran detalles del modelado 3D del personaje Gigante de hierro",
    año:"2017",
    title: "Gigante de hierro",
    about: "Modelado 3D en Rhinoceros de un personaje ficticio",
    autor: "Saldivia",
    url: "https://flic.kr/s/aHsmGsULaV",
    contexto: "Diseño por computación"


}];
// LUEGO CREAMOS PARTES DEL SITIO CON CADA DATO CONTENIDO EN LA VARIABLE
$.each(trabajos, function(i, val) {
    var uno = '<figure><img src="' + trabajos[i].figure + '" alt="' + trabajos[i].alt + '"/></figure>';
    var dos = '<h4>' + trabajos[i].title + '</h4>';
    var tres = '<p>' + trabajos[i].about + '</p>';
    var cuatro = '<p>' + trabajos[i].año + '</p>';
    var cinco = '<p>' + trabajos[i].autor + '</p>';
    var seis = '<p>' + trabajos[i].contexto + '</p>';
    var siete = '<p><a href="' + trabajos[i].url + '">Ver más</a></p>';

    $('#portafolio').append('<div class="item">' + uno + dos + tres + cuatro + cinco + seis + siete + '</div>')
});
