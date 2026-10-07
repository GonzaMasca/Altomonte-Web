/* =========================================================
   ALTOMONTE · script.js
   ---------------------------------------------------------
   1. Diccionario de traducción (ES / EN)
   2. Barra de navegación fija al hacer scroll
   3. Menú desplegable en pantallas chicas
   4. Selector de idioma
   5. Verificación de edad
   6. Aparición de bloques al entrar en pantalla
   7. Año automático en el pie
   ========================================================= */

/* ---------- 1. Diccionario ----------
   Cada clave corresponde a un atributo data-i18n en el HTML.
   Los nombres propios (Altomonte, La sangre no se hace agua,
   nombres de fincas, de vinos y de lugares) no se traducen a
   propósito: son identidad de marca, no contenido informativo. */
const DICCIONARIO = {

  es: {
    'nav.origen': 'Origen',
    'nav.lugar': 'El lugar',
    'nav.fincas': 'Fincas',
    'nav.vinos': 'Vinos',
    'nav.bodega': 'Bodega',
    'nav.contacto': 'Contacto',
    'ui.menu': 'Menú',
    'ui.menuAbrir': 'Menú',
    'ui.menuCerrar': 'Cerrar',

    'etiqueta.bodega': 'Bodega',
    'portada.departamento': 'Departamento',
    'portada.region': 'Región',
    'portada.desde': 'Desde',
    'portada.cta': 'Conocer los vinos',

    'origen.destacado': 'Y el legado de los que alguna vez nos vieron crecer sigue vivo en nosotros.',
    'origen.p1': 'Altomonte simboliza el recuerdo de aquellas mujeres de la familia, las Nonas, sabias, profundas y llenas de matices. Como el vino guardaban historias, transmitían tradición, y su huella aún nos recuerda que las mejores cosas llevan tiempo.',
    'origen.p2': 'El nombre viene del apellido de la abuela materna de la familia. En 1945 los Altomonte llegaron a esta zona del Valle de Uco, y desde entonces el apellido quedó atado a esta tierra.',
    'origen.isotipo.rotulo': 'El isotipo',
    'origen.isotipo.h3': 'Un rosetón hecho<br>de bordados y de aes.',
    'origen.isotipo.p1': 'El símbolo de la marca está inspirado en los bordados de crochet de la abuela. Si lo mirás de cerca, está armado con la letra A repetida, la inicial de Altomonte, girada cuatro veces hasta formar una rosa.',
    'origen.isotipo.p2': 'Es lo femenino y la contención familiar, dibujados en una sola figura.',

    'lugar.h2': 'Piedra, sol<br>y noches frías.',
    'lugar.p1': 'El Valle de Uco abarca los departamentos de Tunuyán, Tupungato y San Carlos. Está a unos 95 kilómetros al suroeste de la ciudad de Mendoza, al pie de los contrafuertes de la Cordillera de los Andes.',
    'lugar.p2': 'Son suelos aluvionales, pedregosos y de muy buen drenaje. Llueve poco y la diferencia entre el calor del mediodía y el frío de la madrugada es grande. Esa combinación es la que da vinos de color intenso, buena estructura y aromas marcados.',
    'lugar.cifras.altura': 'Altura media',
    'lugar.cifras.rango': 'Rango del valle',
    'lugar.cifras.temp': 'Temperatura media',
    'lugar.cifras.amplitud': 'Amplitud térmica',
    'unidad.msnm': 'm s.n.m.',
    'lugar.nota': 'Con 1.778,8 grados día, la región se ubica entre las zonas II y III de la clasificación de Winkler.',
    'lugar.figcaption': 'El canto rodado al pie de la hilera: así drena el agua acá.',

    'fincas.rotulo': 'Nuestras fincas',
    'fincas.h2': 'Tres fincas,<br>tres alturas.',
    'fincas.bajada': 'Cada finca aporta algo distinto y por eso se vinifican por separado. La altura, la luz y la profundidad del suelo cambian de una a otra, y eso se nota en la copa.',
    'finca1.p': 'La más alta de las tres y la única fuera de La Consulta. Alta luminosidad y suelos pedregosos, pobres en materia orgánica.',
    'finca1.aporta': '<span>Aporta</span> estructura, color y marcada tipicidad del varietal.',
    'finca1.vino': 'De acá sale el Cabernet Franc',
    'finca2.p': 'Mucha luz y suelo pedregoso y pobre. La planta trabaja más y da menos, pero da mejor.',
    'finca2.aporta': '<span>Aporta</span> concentración, estructura e intenso color.',
    'finca3.p': 'La más baja. Suelos de mayor profundidad, con más material para que la raíz trabaje.',
    'finca3.aporta': '<span>Aporta</span> intensidad aromática, fruta y suavidad.',
    'finca.vinosConsulta': 'Fincas Malbec · Sangre Malbec · Sangre Cabernet Sauvignon',

    'lineaFincas.rotulo': 'Línea 1 · Altomonte Fincas',
    'lineaFincas.h2': 'Fresco, joven<br>y fácil de tomar.',
    'lineaFincas.p': 'El vino de todos los días. Sale del corte de La Mariana y La Rosita, sobre viñedo en espaldero alto de veinticinco años, con cosecha manual a mediados de marzo.',
    'fincasMalbec.cata': 'Color rojo con matices violáceos. En nariz recuerda a frutas rojas frescas, cereza y frutilla, con un dejo de hierbas. Estructura baja, fresco y fácil de tomar.',
    'tabla.procedencia': 'Procedencia',
    'tabla.vinedo': 'Viñedo',
    'tabla.cosecha': 'Cosecha',
    'tabla.maceracion': 'Maceración',
    'tabla.fermentacion': 'Fermentación',
    'tabla.vinedoValor': 'Espaldero alto, 25 años',
    'tabla.cosechaValor': 'Manual, mediados de marzo',
    'tabla.maceracionValor': '8 a 10 °C durante 24 horas',
    'tabla.fermentacionValor': '24 a 26 °C, 7 a 8 días',

    'lineaSangre.rotulo': 'Línea 2 · Altomonte de Sangre',
    'lineaSangre.h2': 'Tres uvas,<br>un apellido.',
    'lineaSangre.p': 'Cada variedad se cosecha temprano a la mañana y se vinifica por separado. Levaduras seleccionadas, remontajes abiertos y cerrados, fermentación entre 25 y 28 °C durante unos diez días, maloláctica natural y guarda en piletas subterráneas hasta el embotellado.',
    'sangreMalbec.cata': 'Mermelada de ciruela, cereza y frutilla, con el aroma a flores violetas típico de la variedad en esta zona. Color rojo con matices violeta brillante y taninos dulces que persisten.',
    'sangreCS.cata': 'Pimiento rojo y especias, con pimienta, menta y eucalipto. Color rojo rubí brillante, marcada tipicidad del varietal y taninos dulces.',
    'sangreCF.cata': 'Frutas rojas, pimiento rojo asado y hierbas aromáticas. Color rojo rubí brillante, con estructura y taninos dulces que persisten en boca.',

    'bodega.rotulo': 'La bodega',
    'bodega.h2': 'Acero, frío<br>y paciencia.',
    'bodega.p1': 'La uva entra descobajada y se muele con suavidad, para no romper el grano de más. De ahí va a tanques de acero inoxidable, donde arranca la fermentación.',
    'bodega.p2': 'Terminada la alcohólica, el vino se descuba y sobreviene la maloláctica natural, que le da delicadeza. Después se conserva en piletas subterráneas, a temperatura pareja y más baja que la del ambiente, hasta el momento de embotellar.',

    'ubicacion.rotulo': 'Cómo llegar',
    'ubicacion.p': 'La bodega está en La Consulta, departamento de San Carlos, en el corazón del Valle de Uco, a unos 95 kilómetros de la ciudad de Mendoza.',
    'ubicacion.pendiente': 'Dirección exacta a completar.',
    'ubicacion.boton': 'Cómo llegar',
    'mapa.boton': 'Abrir en Google Maps',

    'footer.direccionPendiente': 'Dirección a completar',
    'footer.ventas.titulo': 'Ventas',
    'footer.ventas.consultas': 'Consultas mayoristas',
    'footer.ventas.exportacion': 'y exportación',
    'footer.seguinos': 'Seguinos',
    'footer.estab': 'Estab. N.º',
    'footer.legal': 'Beber con moderación. Prohibida su venta a menores de 18 años. El abuso de alcohol es peligroso para la salud.',

    'edad.pregunta': '¿Sos mayor de 18 años?',
    'edad.aviso': 'Este sitio contiene información sobre bebidas alcohólicas. Necesitás ser mayor de edad para ingresar.',
    'edad.si': 'Sí, soy mayor',
    'edad.no': 'No',
  },

  en: {
    'nav.origen': 'Origin',
    'nav.lugar': 'The Place',
    'nav.fincas': 'Estates',
    'nav.vinos': 'Wines',
    'nav.bodega': 'Winery',
    'nav.contacto': 'Contact',
    'ui.menu': 'Menu',
    'ui.menuAbrir': 'Menu',
    'ui.menuCerrar': 'Close',

    'etiqueta.bodega': 'Winery',
    'portada.departamento': 'Department',
    'portada.region': 'Region',
    'portada.desde': 'Since',
    'portada.cta': 'Discover the wines',

    'origen.destacado': 'And the legacy of those who once watched us grow up is still alive in us.',
    'origen.p1': 'Altomonte stands for the memory of the women in the family, the Nonas — wise, deep, full of nuance. Like wine, they held stories and passed down tradition, and their mark still reminds us that the best things take time.',
    'origen.p2': "The name comes from the family's maternal grandmother's surname. In 1945 the Altomonte family arrived in this part of the Valle de Uco, and the name has been tied to this land ever since.",
    'origen.isotipo.rotulo': 'The Icon',
    'origen.isotipo.h3': "A rosette made<br>of embroidery and A's.",
    'origen.isotipo.p1': "The brand's symbol is inspired by our grandmother's crochet embroidery. Look closely and it's built from the letter A repeated — the initial of Altomonte — rotated four times until it forms a rose.",
    'origen.isotipo.p2': "It's the feminine and the family's sense of shelter, drawn as a single figure.",

    'lugar.h2': 'Stone, sun<br>and cold nights.',
    'lugar.p1': 'The Valle de Uco spans the departments of Tunuyán, Tupungato and San Carlos. It sits about 95 kilometers southwest of the city of Mendoza, at the foot of the Andes foothills.',
    'lugar.p2': 'The soils are alluvial, stony, and drain very well. Rain is scarce, and the gap between the midday heat and the cold of dawn is wide. That combination is what gives the wines their intense color, good structure, and pronounced aromas.',
    'lugar.cifras.altura': 'Average altitude',
    'lugar.cifras.rango': 'Valley range',
    'lugar.cifras.temp': 'Average temperature',
    'lugar.cifras.amplitud': 'Thermal range',
    'unidad.msnm': 'm a.s.l.',
    'lugar.nota': 'With 1,778.8 degree days, the region falls between zones II and III of the Winkler classification.',
    'lugar.figcaption': "River stones at the foot of the row: that's how the water drains here.",

    'fincas.rotulo': 'Our estates',
    'fincas.h2': 'Three estates,<br>three altitudes.',
    'fincas.bajada': "Each estate contributes something different, which is why they're vinified separately. Altitude, light, and soil depth all change from one to the next, and it shows in the glass.",
    'finca1.p': 'The highest of the three, and the only one outside La Consulta. High light exposure and stony soils, low in organic matter.',
    'finca1.aporta': '<span>Gives</span> structure, color, and a strong varietal character.',
    'finca1.vino': 'This is where the Cabernet Franc comes from',
    'finca2.p': 'Plenty of light, stony, poor soil. The vine works harder and yields less — but yields better.',
    'finca2.aporta': '<span>Gives</span> concentration, structure, and deep color.',
    'finca3.p': 'The lowest of the three. Deeper soils, with more material for the roots to work with.',
    'finca3.aporta': '<span>Gives</span> aromatic intensity, fruit, and smoothness.',
    'finca.vinosConsulta': 'Fincas Malbec · Sangre Malbec · Sangre Cabernet Sauvignon',

    'lineaFincas.rotulo': 'Line 1 · Altomonte Fincas',
    'lineaFincas.h2': 'Fresh, young<br>and easy to drink.',
    'lineaFincas.p': 'The everyday wine. A blend of La Mariana and La Rosita, from a twenty-five-year-old high-trellis vineyard, hand-picked in mid-March.',
    'fincasMalbec.cata': 'Red with violet hues. On the nose, fresh red fruit, cherry and strawberry, with a touch of herbs. Light-bodied, fresh, and easy to drink.',
    'tabla.procedencia': 'Source',
    'tabla.vinedo': 'Vineyard',
    'tabla.cosecha': 'Harvest',
    'tabla.maceracion': 'Maceration',
    'tabla.fermentacion': 'Fermentation',
    'tabla.vinedoValor': 'High trellis, 25 years old',
    'tabla.cosechaValor': 'By hand, mid-March',
    'tabla.maceracionValor': '8 to 10 °C for 24 hours',
    'tabla.fermentacionValor': '24 to 26 °C, 7 to 8 days',

    'lineaSangre.rotulo': 'Line 2 · Altomonte de Sangre',
    'lineaSangre.h2': 'Three grapes,<br>one surname.',
    'lineaSangre.p': 'Each variety is picked early in the morning and vinified separately. Selected yeasts, open and closed pump-overs, fermentation between 25 and 28 °C for about ten days, natural malolactic fermentation, and aging in underground tanks until bottling.',
    'sangreMalbec.cata': 'Plum jam, cherry and strawberry, with the violet-flower aroma typical of the variety in this area. Red with bright violet hues and sweet, lingering tannins.',
    'sangreCS.cata': 'Red pepper and spice, with hints of black pepper, mint, and eucalyptus. Bright ruby red, with strong varietal character and sweet tannins.',
    'sangreCF.cata': 'Red fruit, roasted red pepper, and aromatic herbs. Bright ruby red, structured, with sweet tannins that linger on the palate.',

    'bodega.rotulo': 'The winery',
    'bodega.h2': 'Steel, cold<br>and patience.',
    'bodega.p1': 'The grapes come in destemmed and are gently crushed, to avoid breaking the berries more than necessary. From there they go to stainless steel tanks, where fermentation begins.',
    'bodega.p2': "Once alcoholic fermentation ends, the wine is racked off and undergoes natural malolactic fermentation, which gives it finesse. It's then kept in underground tanks, at a steady temperature lower than ambient, until it's time to bottle.",

    'ubicacion.rotulo': 'How to get here',
    'ubicacion.p': 'The winery is in La Consulta, San Carlos department, in the heart of the Valle de Uco, about 95 kilometers from the city of Mendoza.',
    'ubicacion.pendiente': 'Exact address to be added.',
    'ubicacion.boton': 'Get directions',
    'mapa.boton': 'Open in Google Maps',

    'footer.direccionPendiente': 'Address to be added',
    'footer.ventas.titulo': 'Sales',
    'footer.ventas.consultas': 'Wholesale inquiries',
    'footer.ventas.exportacion': 'and export',
    'footer.seguinos': 'Follow us',
    'footer.estab': 'Estab. No.',
    'footer.legal': 'Drink in moderation. Sale to minors under 18 is prohibited. Alcohol abuse is dangerous to your health.',

    'edad.pregunta': 'Are you over 18?',
    'edad.aviso': 'This site contains information about alcoholic beverages. You must be of legal drinking age to enter.',
    'edad.si': 'Yes, I am',
    'edad.no': 'No',
  }
};

const TITULO = {
  es: 'Altomonte · La sangre no se hace agua | Valle de Uco, Mendoza',
  en: 'Altomonte · La sangre no se hace agua | Valle de Uco, Mendoza',
};
const DESCRIPCION = {
  es: 'Bodega familiar en La Consulta, San Carlos, Valle de Uco. Dos líneas de vino: Altomonte Fincas y Altomonte de Sangre.',
  en: 'A family winery in La Consulta, San Carlos, Valle de Uco, Argentina. Two wine lines: Altomonte Fincas and Altomonte de Sangre.',
};

const CLAVE_STORAGE = 'altomonte-idioma';


document.addEventListener('DOMContentLoaded', () => {

  /* ---------- 2. Barra fija ---------- */
  const barra = document.getElementById('barra');
  if (barra) {
    const alScrollear = () => barra.classList.toggle('fija', window.scrollY > 60);
    alScrollear();
    addEventListener('scroll', alScrollear, { passive: true });
  }

  /* ---------- 3. Menú móvil ---------- */
  const boton = document.getElementById('navBoton');
  const nav = document.getElementById('nav');

  function sincronizarBotonMenu() {
    if (!boton || !nav) return;
    const abierto = nav.classList.contains('abierto');
    const lang = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
    boton.textContent = DICCIONARIO[lang][abierto ? 'ui.menuCerrar' : 'ui.menuAbrir'];
  }

  if (boton && nav) {
    boton.addEventListener('click', () => {
      const abierto = nav.classList.toggle('abierto');
      boton.setAttribute('aria-expanded', String(abierto));
      sincronizarBotonMenu();
    });
    nav.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        nav.classList.remove('abierto');
        boton.setAttribute('aria-expanded', 'false');
        sincronizarBotonMenu();
      }
    });
  }

  /* ---------- 4. Selector de idioma ---------- */
  const idiomaBoton = document.getElementById('idiomaBoton');
  const edadIdioma = document.getElementById('edadIdioma');

  function aplicarIdioma(lang) {
    const dic = DICCIONARIO[lang];
    if (!dic) return;

    document.documentElement.lang = (lang === 'en') ? 'en' : 'es-AR';
    document.title = TITULO[lang];
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', DESCRIPCION[lang]);

    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const clave = el.getAttribute('data-i18n');
      if (dic[clave] !== undefined) el.innerHTML = dic[clave];
    });

    // El botón del menú móvil depende del idioma Y de si está abierto,
    // así que se sincroniza aparte, después del reemplazo general.
    sincronizarBotonMenu();

    if (idiomaBoton) {
      idiomaBoton.textContent = (lang === 'en') ? 'ES' : 'EN';
      idiomaBoton.setAttribute(
        'aria-label',
        lang === 'en' ? 'Cambiar a español' : 'Switch to English'
      );
    }
    if (edadIdioma) {
      edadIdioma.textContent = (lang === 'en') ? 'ES' : 'EN';
    }

    try { localStorage.setItem(CLAVE_STORAGE, lang); } catch (err) { /* modo privado, no pasa nada */ }
  }

  if (idiomaBoton) {
    idiomaBoton.addEventListener('click', () => {
      const actual = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
      aplicarIdioma(actual === 'es' ? 'en' : 'es');
    });
  }
  if (edadIdioma) {
    edadIdioma.addEventListener('click', () => {
      const actual = document.documentElement.lang.startsWith('en') ? 'en' : 'es';
      aplicarIdioma(actual === 'es' ? 'en' : 'es');
    });
  }

  // Idioma inicial: el que haya elegido antes la persona: si no,
  // el del navegador (si es inglés); si no, español por defecto.
  let inicial = 'es';
  try {
    const guardado = localStorage.getItem(CLAVE_STORAGE);
    if (guardado === 'en' || guardado === 'es') {
      inicial = guardado;
    } else if (navigator.language && navigator.language.toLowerCase().startsWith('en')) {
      inicial = 'en';
    }
  } catch (err) { /* modo privado, se queda en español */ }

  if (inicial !== 'es') aplicarIdioma(inicial);
  else sincronizarBotonMenu();

  /* ---------- 5. Verificación de edad ---------- */
  const CLAVE_EDAD = 'altomonte-edad-verificada';
  const edadGate = document.getElementById('edadGate');
  const sitioContenido = document.getElementById('sitioContenido');
  const edadSi = document.getElementById('edadSi');
  const edadNo = document.getElementById('edadNo');

  function ocultarEdadGate() {
    if (edadGate) edadGate.classList.add('oculto');
    if (sitioContenido) sitioContenido.removeAttribute('aria-hidden');
    document.body.classList.remove('sin-scroll');
  }

  function mostrarEdadGate() {
    if (edadGate) edadGate.classList.remove('oculto');
    if (sitioContenido) sitioContenido.setAttribute('aria-hidden', 'true');
    document.body.classList.add('sin-scroll');
  }

  let yaVerificado = false;
  try { yaVerificado = sessionStorage.getItem(CLAVE_EDAD) === 'si'; } catch (err) { /* modo privado */ }

  if (yaVerificado) {
    ocultarEdadGate();
  } else {
    mostrarEdadGate();
  }

  if (edadSi) {
    edadSi.addEventListener('click', () => {
      try { sessionStorage.setItem(CLAVE_EDAD, 'si'); } catch (err) { /* modo privado, no pasa nada */ }
      ocultarEdadGate();
    });
  }
  if (edadNo) {
    edadNo.addEventListener('click', () => {
      // Se manda a la persona fuera del sitio. Cambiar esta URL
      // si prefieren mostrar otra página en vez de redirigir afuera.
      window.location.href = 'https://www.google.com';
    });
  }

  /* ---------- 6. Aparición al hacer scroll ---------- */
  const elementos = document.querySelectorAll('.aparece');
  if ('IntersectionObserver' in window && elementos.length) {
    const observador = new IntersectionObserver((entradas) => {
      entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
          entrada.target.classList.add('visible');
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -60px 0px' });

    elementos.forEach((el) => observador.observe(el));
  } else {
    elementos.forEach((el) => el.classList.add('visible'));
  }

  /* ---------- 7. Año automático ---------- */
  const anio = document.getElementById('anio');
  if (anio) anio.textContent = new Date().getFullYear();

});
