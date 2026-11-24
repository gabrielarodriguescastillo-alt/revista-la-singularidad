/**
 * LA SINGULARIDAD - Revista de Ciencia y Física UFV
 * Client-side Application & Editorial Content Engine
 */

const ARTICLES = [
  {
    id: "stellarator-tj-ii",
    title: "Encender una estrella en la Meseta Central: El confinamiento magnético en el TJ-II",
    subtitle: "Cómo el CIEMAT en Madrid desafía la física de plasmas con una de las geometrías tridimensionales más complejas del planeta.",
    author: "Dirección Científica SF-UFV",
    role: "Equipo Científico y Editorial",
    section: "En el Horizonte",
    readTime: "7 min",
    date: "Primavera 2027",
    featured: true,
    coverBadge: "Reportaje de Portada",
    tags: ["Fusión Nuclear", "Física de Plasmas", "Stellarator", "CIEMAT"],
    lead: "Para recrear en la Tierra la energía que alimenta el Sol no basta con alcanzar temperaturas diez veces superiores a las de su núcleo. Es indispensable sostener en levitación magnética un torbellino a 100 millones de grados sin que toque jamás las paredes de la vasija de vacío.",
    boxout: {
      title: "El concepto clave en 60 segundos",
      content: `A diferencia de los reactores <em>Tokamak</em> (como ITER), que inducen una corriente eléctrica pulsada en el propio plasma para retorcer las líneas de campo, los <strong>Stellarators</strong> emplean bobinas externas tridimensionales no simétricas. Esto permite operar en régimen continuo y suprime las catastróficas <em>disrupciones de corriente</em> que amenazan la viabilidad de los reactores convencionales.`
    },
    body: `
      <h3>1. La barrera culombiana y el balance de Lawson</h3>
      <p>La fusión de núcleos ligeros representa la mayor densidad energética alcanzable por procesos no relativistas. La reacción más favorable para reactores de primera generación fusiona núcleos de deuterio y tritio:</p>
      
      <div class="math-block">
        $${^2\\text{H}} + {^3\\text{H}} \\longrightarrow {^4\\text{He}} + n + 17{,}59\\text{ MeV}$$
      </div>

      <p>Para que dos cationes cargados positivamente superen la repulsión electrostática de Coulomb y entren en el rango de acción de la interacción nuclear fuerte (aproximadamente $1\\text{ fm} = 10^{-15}\\text{ m}$), deben chocar con energías cinéticas que exceden con creces la agitación térmica ordinaria. Esto requiere temperaturas térmicas del orden de $T \\sim 10^8\\text{ K}$, donde la materia existe exclusivamente como plasma completamente ionizado.</p>

      <h3>2. La botella magnética y la ecuación de equilibrio</h3>
      <p>A esas temperaturas no existe aleación ni cerámica capaz de albergar el medio. La fuerza de Lorentz ($\mathbf{F} = q(\\mathbf{E} + \\mathbf{v} \\times \\mathbf{B})$) obliga a las partículas cargadas a enrollarse en trayectorias helicoidales alrededor de las líneas de inducción magnética. El equilibrio magnetohidrodinámico macroscópico del plasma confinado viene gobernado por la célebre ecuación de equilibrio de Grad-Shafranov y la condición estática de fuerzas:</p>

      <div class="math-block">
        $$\\nabla p = \\mathbf{J} \\times \\mathbf{B}$$
      </div>

      <p>donde $p$ es la presión escalar del plasma, $\\mathbf{J}$ es la densidad de corriente volumétrica y $\\mathbf{B}$ es el vector inducción magnética. Para que el confinamiento sea estable, las superficies de presión constante deben formar toros anidados cerrados donde las líneas magnéticas recorran la superficie de manera cuasiperiódica, generando una transformación rotacional no nula.</p>

      <h3>3. La singularidad geométrica del TJ-II en Madrid</h3>
      <p>Ubicado en las instalaciones del <strong>CIEMAT</strong> (Avenida Complutense de Madrid), el <strong>TJ-II</strong> es un *Heliac* flexible de cuatro periodos. A diferencia de las máquinas axiales, su eje magnético describe una hélice no plana en el espacio tridimensional. Sus bobinas helicoidales y circulares generan configuraciones magnéticas con un cizallamiento y pozo magnético regulables de extrema precisión.</p>
      <p>El TJ-II no solo permite calentar el plasma mediante resonancia ciclotrónica electrónica (ECRH) y neutros acelerados (NBI), sino que es pionero mundial en el estudio de barreras de transporte de turbulencia y flujos zonales autoorganizados.</p>

      <div class="takeaway-box">
        <strong>Takeaway:</strong> El dominio de la fusión magnética no es una utopía teórica, sino un problema de ingeniería geométrica de fluidos y materiales avanzados. Tener en Madrid una de las mayores instalaciones experimentales de confinamiento estelar de Europa sitúa a la investigación universitaria local en la vanguardia de la descarbonización definitiva del siglo XXI.
      </div>

      <div class="references-block">
        <h4>Referencias recomendadas:</h4>
        <ol>
          <li>Freidberg, J. P. (2007). <em>Plasma Physics and Fusion Energy</em>. Cambridge University Press.</li>
          <li>Sánchez, J., et al. (2015). <em>Overview of the TJ-II stellarator research programme towards ITER and DEMO</em>. Nuclear Fusion, 55(10), 104014.</li>
        </ol>
      </div>
    `
  },
  {
    id: "editorial-presidencia",
    title: "El deber de mirar hacia arriba en un mundo con la mirada en el suelo",
    subtitle: "Una invitación a rescatar el asombro intelectual y devolver la belleza de las leyes físicas al debate universitario cotidiano.",
    author: "Gabriela Rodrigues Castillo",
    role: "Presidenta de la Sociedad de Física UFV",
    section: "Editorial",
    readTime: "3 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Carta Fundacional",
    tags: ["Editorial", "Humanismo", "Pensamiento Crítico", "UFV"],
    lead: "Vivimos inmersos en una civilización que da por sentada la tecnología que utiliza cada microsegundo. Pulsamos una pantalla táctil sin pensar en la función de trabajo fotoeléctrica y confiamos en el GPS ignorando la curvatura espacio-temporal de Einstein.",
    boxout: {
      title: "La premisa fundacional",
      content: `"La física es como el sexo: seguro que da alguna compensación práctica, pero no es por eso por lo que lo hacemos." — Richard Feynman`
    },
    body: `
      <p>Pulsamos cada mañana la pantalla capacitiva de nuestro teléfono sin pensar en la función de trabajo fotoeléctrica y el dopaje de semiconductores; nos orientamos en la carretera mediante satélites GPS olvidando que sus relojes atómicos se desincronizarían 38 microsegundos diarios si no computásemos la Relatividad General de Einstein; y nos sometemos a una resonancia magnética en el hospital sin reparar en la precesión de Larmor de los espines nucleares de nuestros protones corporales.</p>
      
      <p>Nace <em>La Singularidad</em> con una ambición luminosa y no negociable: rescatar el asombro. Esta revista no es el boletín cerrado de un club de ciencias, sino una invitación fraternal y exigente a toda la comunidad universitaria —ingenieros, biomédicos, filósofos, juristas, comunicadores y médicos— para reencontrarnos con la asombrosa coherencia matemática que subyace a la naturaleza.</p>

      <p>En este primer número encendemos estrellas de confinamiento magnético en Madrid, desafiamos la intuición mecánica con el efecto Dzhanibekov en nuestro Physics Lab y celebramos la audacia de alumnos de grado que firman artículos científicos de primer nivel.</p>

      <div class="takeaway-box">
        <strong>Compromiso:</strong> Queremos una universidad donde el rigor científico no sea sinónimo de aridez, sino de belleza formal, libertad de pensamiento y curiosidad insobornable. Bienvenidos a la singularidad.
      </div>
    `
  },
  {
    id: "experimento-dzhanibekov",
    title: "El misterio del eje intermedio: Por qué tu móvil gira loco cuando lo lanzas al aire",
    subtitle: "Del cosmonauta soviético Vladimir Dzhanibekov a las pantallas de los smartphones: el teorema de inestabilidad de Euler explicado con matemáticas y cámaras lentas.",
    author: "Elena Morales Vidal",
    role: "Responsable de Comunicación y Redes Sociales",
    section: "Physics Lab",
    readTime: "5 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Laboratorio en Acción",
    tags: ["Mecánica Clásica", "Sólido Rígido", "Physics Lab", "Experimentos"],
    lead: "Si lanzas tu teléfono o un libro cerrado al aire haciéndolo girar sobre su cara más ancha o sobre su canto vertical, el giro es suave y estable. Pero si intentas girarlo sobre su tercer eje, sufre una desconcertante voltereta periódica de 180 grados.",
    boxout: {
      title: "El teorema de la raqueta de tenis",
      content: `Descubierto formalmente a partir de las ecuaciones de Euler para el sólido rígido, demostró que un cuerpo rígido asimétrico con tres momentos principales de inercia distintos ($I_1 < I_2 < I_3$) es dinámicamente inestable exclusivamente alrededor de su momento intermedio ($I_2$).`
    },
    body: `
      <h3>1. El descubrimiento en órbita</h3>
      <p>En 1985, durante las complejas maniobras de rescate de la estación espacial soviética Salyut 7, el cosmonauta Vladimir Dzhanibekov desenroscó una tuerca de mariposa con los dedos en microgravedad. Al salir impulsada libremente girando sobre su eje, la tuerca viajó en línea recta hasta que, de pronto, dio una voltereta instantánea de 180°, invirtió sus alas, y siguió rotando antes de volver a voltearse de forma rítmica. El Kremlin mantuvo clasificado el hallazgo durante años temiendo que la propia Tierra pudiera dar un vuelco similar de sus polos magnéticos.</p>

      <h3>2. Las ecuaciones de movimiento de Euler</h3>
      <p>La explicación no reside en ninguna anomalía gravitacional, sino en la conservación del momento angular $(\\mathbf{L})$ en un marco solidario con el cuerpo en rotación. Las ecuaciones dinámicas de Euler para los componentes del vector velocidad angular $(\\omega_1, \\omega_2, \\omega_3)$ en el sistema de ejes principales de inercia son:</p>

      <div class="math-block">
        $$I_1 \\dot{\\omega}_1 = (I_2 - I_3) \\omega_2 \\omega_3$$
        $$I_2 \\dot{\\omega}_2 = (I_3 - I_1) \\omega_3 \\omega_1$$
        $$I_3 \\dot{\\omega}_3 = (I_1 - I_2) \\omega_1 \\omega_2$$
      </div>

      <p>Asumiendo sin pérdida de generalidad que los momentos principales cumplen $I_1 < I_2 < I_3$, analicemos qué ocurre si imprimimos una rotación casi pura sobre el eje 2 con pequeñas perturbaciones $\\eta_1, \\eta_3$:</p>

      <div class="math-block">
        $$\\omega_1 = \\eta_1, \\quad \\omega_2 = \\Omega + \\eta_2, \\quad \\omega_3 = \\eta_3$$
      </div>

      <p>Derivando respecto al tiempo y despreciando términos de segundo orden en las perturbaciones, obtenemos la ecuación diferencial desacoplada:</p>

      <div class="math-block">
        $$\\ddot{\\eta}_1 = \\left[ \\frac{(I_2 - I_3)(I_1 - I_2)}{I_1 I_3} \\Omega^2 \\right] \\eta_1$$
      </div>

      <p>Dado que $I_2 - I_3 < 0$ y $I_1 - I_2 < 0$, su producto es <strong>estrictamente positivo</strong>:</p>

      <div class="math-block">
        $$\\ddot{\\eta}_1 = +k^2 \\eta_1 \\implies \\eta_1(t) = A e^{kt} + B e^{-kt}$$
      </div>

      <p>Aparece un autovalor real positivo: <strong>inestabilidad exponencial de Lyapunov</strong>. Cualquier microperturbación inicial en el aire crece exponencialmente, forzando la transición caótica de los polos de giro.</p>

      <h3>3. Recreación en el Stand 7 del Physics Lab UFV</h3>
      <p>En el stand de Dinámica Rotacional de la Sociedad hemos construido un conjunto de sólidos prismáticos calibrados mediante impresión 3D y sensores inerciales MPU-6050 vinculados por Bluetooth. Los visitantes pueden observar en tiempo real el espacio de fases trazado por las trayectorias de polhodia sobre el elipsoide de Poinsot.</p>

      <div class="takeaway-box">
        <strong>Ven a probarlo:</strong> El Physics Lab UFV permite registrar estas oscilaciones con cámaras de alta velocidad a 240 fps para cuantificar la tasa de Lyapunov empírica en el campus.
      </div>
    `
  },
  {
    id: "voces-nanofotonica",
    title: "Más allá de las ecuaciones: Nanofotónica, cuántica y el asombro científico",
    subtitle: "Conversación de fondo con investigadores punteros sobre la frontera entre la física fundamental y la tecnología transformadora.",
    author: "Redacción SF-UFV",
    role: "Comisión de Entrevistas",
    section: "Voces de la Ciencia",
    readTime: "6 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Entrevista Exclusiva",
    tags: ["Entrevistas", "Nanofotónica", "Computación Cuántica", "Investigación"],
    lead: "Hablamos con especialistas en optoelectrónica cuántica sobre el paso del sufrimiento académico al disfrute estético de las ecuaciones y el futuro de las tecnologías profundas.",
    boxout: {
      title: "El perfil del investigador",
      content: `<strong>Libro de cabecera:</strong> <em>The Character of Physical Law</em> (R. Feynman).<br><strong>Entorno de trabajo:</strong> Python / Quiskit + Comsol Multiphysics.<br><strong>Consejo al universitario:</strong> «No temas a las materias duras: el álgebra lineal es el lenguaje secreto del universo entero».`
    },
    body: `
      <h3>El salto cuántico vocacional</h3>
      <p><strong>Pregunta:</strong> <em>Muchos estudiantes viven las asignaturas de física en primer curso como un filtro temible. ¿En qué momento un alumno supera la angustia del examen y empieza a percibir la belleza del formalismo?</em></p>
      
      <p><strong>Respuesta:</strong> Ocurre casi siempre cuando descubres que una fórmula abstracta predice con decimales exactos un suceso en el laboratorio. Cuando resuelves un problema de mecánica analítica con el lagrangiano y ves que el principio de mínima acción $\\delta S = 0$ gobierna desde la trayectoria de una pelota de tenis hasta la propagación de un fotón en fibra óptica, la mente experimenta un click irreversible.</p>

      <h3>¿Burbuja o revolución cuántica?</h3>
      <p><strong>Pregunta:</strong> <em>La computación cuántica promete desde el diseño de catalizadores de nitrógeno hasta el colapso de la criptografía RSA. ¿Cuánto hay de ingeniería tangible y cuánto de especulación de capital riesgo?</em></p>

      <p><strong>Respuesta:</strong> Estamos en la era NISQ (*Noisy Intermediate-Scale Quantum*). Quienes prometen la cura inmediata del cáncer con cúbits hoy están exagerando. Pero la ventaja cuántica en simulación de física de muchos cuerpos ya es real. Simular la estructura electrónica del complejo FeMoco para producir fertilizantes sin consumir el 2% de la energía del planeta es un reto que solo un ordenador cuántico tolerante a fallos resolverá.</p>

      <div class="takeaway-box">
        <strong>Mensaje a los estudiantes:</strong> Las carreras del futuro no buscarán a quien memorice fórmulas que una IA puede recitar en un microsegundo, sino a quienes posean la intuición geométrica y crítica para formular las preguntas correctas.
      </div>
    `
  },
  {
    id: "interestelar-fisica-pop",
    title: "La relatividad en la pantalla: ¿Es científicamente exacto el agujero negro de 'Interestelar'?",
    subtitle: "El cálculo riguroso de Kip Thorne, el trazado de rayos en la métrica de Kerr y el enigma temporal del planeta de Miller.",
    author: "Redacción SF-UFV",
    role: "Comisión de Física & Cultura Pop",
    section: "Física Pop",
    readTime: "6 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Cine & Ciencia",
    tags: ["Astrofísica", "Relatividad General", "Kerr Metric", "Cine"],
    lead: "Cuando Christopher Nolan rodó 'Interestelar' (2014), no encargó al equipo de efectos visuales que 'inventase' un monstruo cósmico: recurrió al Nobel Kip Thorne para resolver por primera vez las geodésicas de luz en un agujero negro supermasivo.",
    boxout: {
      title: "La métrica de Kerr en coordenadas de Boyer-Lindquist",
      content: `Describe el espacio-tiempo curvado alrededor de una masa $M$ en rotación pura con momento angular específico $a = J/M$. La estructura de su horizonte de sucesos y ergosfera da lugar al efecto de arrastre de marco de referencia (*frame-dragging*).`
    },
    body: `
      <h3>1. El nacimiento de Gargantúa</h3>
      <p>Para renderizar el agujero negro Gargantúa, la empresa Double Negative desarrolló un motor de trazado de rayos relativista (DNGR) alimentado directamente con las ecuaciones de Einstein. En un espacio-tiempo estacionario y con simetría axial sin carga eléctrica, el intervalo diferencial viene dado por:</p>

      <div class="math-block">
        $$ds^2 = -\\left(1 - \\frac{r_s r}{\\rho^2}\\right) dt^2 - \\frac{2 r_s r a \\sin^2\\theta}{\\rho^2} dt d\\phi + \\frac{\\rho^2}{\\Delta} dr^2 + \\rho^2 d\\theta^2 + \\left(r^2 + a^2 + \\frac{r_s r a^2 \\sin^2\\theta}{\\rho^2}\\right)\\sin^2\\theta d\\phi^2$$
      </div>

      <p>donde $\\rho^2 = r^2 + a^2 \\cos^2\\theta$ y $\\Delta = r^2 - r_s r + a^2$. La simulación reveló algo inesperado: el disco de acreción no se ve como los anillos de Saturno, sino doblado sobre sí mismo. La curvatura gravitacional actúa como una gigantesca lente de aumento que refracta los rayos luminosos de la cara posterior del disco por encima y por debajo de la sombra del horizonte.</p>

      <h3>2. La paradoja del Planeta de Miller</h3>
      <p>La escena más angustiosa de la película transcurre en el planeta de Miller, donde una hora en su superficie equivale a 7 años terrestres (un factor de dilatación temporal de aproximadamente $\\gamma_{\\text{grav}} \\approx 61.320$).</p>

      <p>¿Es físicamente plausible sin que las fuerzas de marea desgarren el planeta en astillas? Kip Thorne demostró que <strong>SÍ</strong>, pero bajo una condición matemática extrema: el agujero negro debe estar rotando a una velocidad angular casi idéntica a su límite teórico máximo ($a \\approx 0{,}9999 \\frac{GM}{c^2}$), haciendo que la última órbita circular estable (ISCO) coincida prácticamente con el horizonte de sucesos.</p>

      <div class="takeaway-box">
        <strong>Conclusión científica:</strong> A diferencia de casi toda la ciencia ficción comercial, 'Interestelar' produjo código y papers astronómicos revisados por pares que enriquecieron nuestra comprensión de la óptica gravitacional.
      </div>
    `
  },
  {
    id: "tribuna-supercomputacion-cfd",
    title: "¿Por qué la simulación de fluidos (CFD) sigue requiriendo superordenadores colosales?",
    subtitle: "El milenario desafío del continuo: turbulencia de Kolmogorov, mallas de mil millones de celdas y el problema del milenio.",
    author: "David Navarro Rivas",
    role: "Ingeniería en Sistemas / Voluntario de Soporte UFV",
    section: "Tribuna Estudiantil",
    readTime: "4 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Voz Estudiantil",
    tags: ["CFD", "Supercomputación", "Navier-Stokes", "Algoritmos"],
    lead: "Diseñar un bólido de Fórmula 1 o predecir el impacto de un huracán exige centros de computación con cientos de miles de núcleos. ¿Por qué el movimiento del aire se resiste a nuestros algoritmos más sofisticados?",
    boxout: {
      title: "La escala de Kolmogorov",
      content: `En un régimen plenamente turbulento, los remolinos transfieren energía desde la escala macroscópica ($L$) hasta la escala microscópica disipativa ($\\eta \\sim (\\nu^3/\\epsilon)^{1/4}$), exigiendo mallas espaciales cuyo número de celdas escala como $N \\sim \\text{Re}^{9/4}$.`
    },
    body: `
      <p>Las ecuaciones fundamentales que describen la conservación de masa y momento en un fluido newtoniano incompresible —las célebres ecuaciones de <strong>Navier-Stokes</strong>— se conocen desde el siglo XIX:</p>

      <div class="math-block">
        $$\\frac{\\partial \\mathbf{u}}{\\partial t} + (\\mathbf{u} \\cdot \\nabla)\\mathbf{u} = -\\frac{1}{\\rho}\\nabla p + \\nu \\nabla^2 \\mathbf{u} + \\mathbf{g}$$
      </div>

      <p>El término no lineal convective $(\\mathbf{u} \\cdot \\nabla)\\mathbf{u}$ es el causante del fenómeno más fascinante y destructivo de la física clásica: la **turbulencia**. Dado que no existe una solución analítica general (uno de los siete problemas del milenio del Instituto Clay), nos vemos obligados a discretizar el espacio y el tiempo.</p>

      <p>Para resolver mediante Simulación Numérica Directa (DNS) un flujo a números de Reynolds industriales ($\text{Re} \\sim 10^7$), la resolución espacial debe capturar desde el vórtice de metros hasta el microtorbellino milimétrico donde la viscosidad transforma la energía cinética en calor. Esto exige mallas de más de $10^{15}$ puntos nodales, un coste computacional que aún tardará décadas en democratizarse.</p>
    `
  },
  {
    id: "tribuna-pinzas-opticas",
    title: "Pinzas ópticas: El rayo tractor láser con el que manipulamos virus y ADN",
    subtitle: "Cómo el impulso lineal de los fotones permite atrapar bacterias vivas sin dañarlas y medir las fuerzas nanonewtonianas de la vida.",
    author: "Lucía Fernández Martín",
    role: "Biomedicina / Directora de Contenido Científico",
    section: "Tribuna Estudiantil",
    readTime: "4 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Biofísica",
    tags: ["Biofísica", "Óptica", "ADN", "Nobel 2018"],
    lead: "La idea de un 'rayo tractor' que atrape objetos a distancia parecía confinada a Star Trek hasta que Arthur Ashkin descubrió en los laboratorios Bell que un haz láser bien enfocado puede sujetar esferas microscópicas usando solo la presión de radiación.",
    boxout: {
      title: "Fuerza de gradiente dipolar",
      content: `Cuando una partícula dieléctrica esférica con índice de refracción $n_p > n_m$ se sitúa en un campo de luz inhomogéneo, experimenta una fuerza conservativa hacia la región de máxima intensidad luminosa: $\\mathbf{F}_{\\text{grad}} = \\frac{1}{2} \\alpha \\nabla \\langle E^2 \\rangle$.`
    },
    body: `
      <p>Aunque un fotón carece de masa en reposo, transporta un momento lineal $p = h/\\lambda$. Cuando un rayo de luz refracta a través de una microesfera transparente de poliestireno o de una célula viva, cambia de dirección. Por la tercera ley de Newton, la tasa de cambio de momento de los fotones imprime sobre la partícula una fuerza contraria y proporcional:</p>

      <div class="math-block">
        $$\\mathbf{F} = -\\frac{d\\mathbf{p}_{\\text{luz}}}{dt}$$
      </div>

      <p>En el laboratorio de biofísica podemos soldar químicamente los extremos de una doble hebra de ADN a microesferas de sílice de $1\\,\\mu\\text{m}$ y estirar la molécula con dos pinzas láser simultáneas. Así es como hoy medimos la elasticidad conformacional de la polimerasa con precisiones de piconewtons ($10^{-12}\\,\\text{N}$), desvelando cómo los fármacos oncológicos interfieren en la replicación celular.</p>
    `
  },
  {
    id: "reto-fermi-fotones-movil",
    title: "Reto de Fermi: ¿Cuántos fotones de tu móvil golpean tu retina en 15 minutos de Instagram?",
    subtitle: "Aprende a estimar con rigor órdenes de magnitud cosmológicos partiendo de una simple pantalla OLED y constantes fundamentales.",
    author: "Junta Directiva SF-UFV",
    role: "Comisión de Desafíos & Retos",
    section: "Reto de Fermi",
    readTime: "3 min",
    date: "Primavera 2027",
    featured: false,
    coverBadge: "Desafío Participativo",
    tags: ["Reto de Fermi", "Física Cuántica", "Óptica", "Concurso"],
    lead: "¿Es posible calcular cuántos cuantos luminosos absorben tus fotorreceptores sin usar un detector de laboratorio? La respuesta está en el arte de la estimación dimensional ideado por Enrico Fermi.",
    boxout: {
      title: "Constantes de trabajo",
      content: `Constante de Planck: $h = 6{,}626 \\times 10^{-34}\\text{ J}\\cdot\\text{s}$<br>Velocidad de la luz: $c = 3{,}00 \\times 10^8\\text{ m/s}$<br>Energía del fotón verde: $E = \\frac{hc}{\\lambda} \\approx 3{,}6 \\times 10^{-19}\\text{ J}$`
    },
    body: `
      <h3>Planteamiento del problema</h3>
      <p>Estima el orden de magnitud del número de fotones procedentes de la pantalla de tu smartphone que inciden directamente en las retinas de tus ojos durante una sesión nocturna de 15 minutos navegando por feeds de redes sociales en una habitación a oscuras.</p>

      <h3>Suposiciones y parámetros modelo:</h3>
      <ul>
        <li><strong>Potencia óptica visible emitida:</strong> $P_{\\text{opt}} \\sim 5\\text{ mW} = 5 \\times 10^{-3}\\text{ W}$ (brillo nocturno atenuado).</li>
        <li><strong>Longitud de onda promedio:</strong> $\\lambda \\approx 550\\text{ nm}$ (sensibilidad máxima fotópica humana).</li>
        <li><strong>Distancia media ojo-pantalla:</strong> $d \\approx 25\\text{ cm} = 0{,}25\\text{ m}$.</li>
        <li><strong>Diámetro de la pupila adaptada a la oscuridad:</strong> $D_{\\text{pup}} \\approx 7\\text{ mm} \\implies r_{\\text{pup}} \\approx 3{,}5\\text{ mm}$.</li>
        <li><strong>Tiempo de exposición:</strong> $\\Delta t = 15\\text{ min} = 900\\text{ s}$.</li>
      </ul>

      <h3>Deducción paso a paso:</h3>
      <p>1. <strong>Tasa total de emisión de fotones:</strong> La energía de un fotón verde es $E = hc/\\lambda \\approx 3{,}61 \\times 10^{-19}\\text{ J}$. Por tanto, la pantalla emite:</p>
      
      <div class="math-block">
        $$\\dot{N}_{\\text{total}} = \\frac{P_{\\text{opt}}}{E} \\approx \\frac{5 \\times 10^{-3}}{3{,}61 \\times 10^{-19}} \\approx 1{,}4 \\times 10^{16} \\text{ fotones/s}$$
      </div>

      <p>2. <strong>Fracción geométrica interceptada por las dos pupilas:</strong> Suponiendo emisión lambertiana en semiesfera ($2\\pi d^2$):</p>

      <div class="math-block">
        $$f = \\frac{2 \\times \\pi r_{\\text{pup}}^2}{2\\pi d^2} = \\left( \\frac{3{,}5 \\times 10^{-3}}{0{,}25} \\right)^2 = (0{,}014)^2 \\approx 2{,}0 \\times 10^{-4}$$
      </div>

      <p>3. <strong>Fotones totales captados en 15 minutos:</strong></p>

      <div class="math-block">
        $$N = \\dot{N}_{\\text{total}} \\times f \\times \\Delta t \\approx (1{,}4 \\times 10^{16}) \\times (2{,}0 \\times 10^{-4}) \\times 900 \\approx 2{,}5 \\times 10^{15} \\text{ fotones}$$
      </div>

      <div class="takeaway-box">
        <strong>Resultado asombroso:</strong> ¡Más de dos mil billones ($2{,}5 \\times 10^{15}$) de fotones cuánticos impactan en tus retinas en solo 15 minutos! Envía tu solución con consideraciones espectrales a <code>comunicacion.fisica@ufv.es</code> para optar al premio de la edición.
      </div>
    `
  }
];

// App State Management
let currentFilter = "all";
let currentSearch = "";
let selectedArticle = null;

// DOM Elements
document.addEventListener("DOMContentLoaded", () => {
  renderArticles();
  setupFilterTabs();
  setupSearch();
  setupModal();
  setupStats();
});

function setupFilterTabs() {
  const tabs = document.querySelectorAll(".filter-btn");
  tabs.forEach(btn => {
    btn.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      btn.classList.add("active");
      currentFilter = btn.dataset.section;
      renderArticles();
    });
  });
}

function setupSearch() {
  const searchInput = document.getElementById("search-input");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      renderArticles();
    });
  }
}

function setupStats() {
  const totalArticlesEl = document.getElementById("stat-total-articles");
  if (totalArticlesEl) totalArticlesEl.textContent = ARTICLES.length;
}

function renderArticles() {
  const grid = document.getElementById("articles-grid");
  const featuredContainer = document.getElementById("featured-article-container");
  if (!grid) return;

  const filtered = ARTICLES.filter(art => {
    const matchesFilter = currentFilter === "all" || art.section.toLowerCase() === currentFilter.toLowerCase();
    const matchesSearch = !currentSearch || (
      art.title.toLowerCase().includes(currentSearch) ||
      art.subtitle.toLowerCase().includes(currentSearch) ||
      art.author.toLowerCase().includes(currentSearch) ||
      art.section.toLowerCase().includes(currentSearch) ||
      art.tags.some(t => t.toLowerCase().includes(currentSearch))
    );
    return matchesFilter && matchesSearch;
  });

  // Render Featured Hero if not actively searching or filtered to specific non-featured
  const featured = ARTICLES.find(a => a.featured);
  if (featuredContainer) {
    if ((currentFilter === "all" || currentFilter.toLowerCase() === featured.section.toLowerCase()) && !currentSearch) {
      featuredContainer.style.display = "block";
      featuredContainer.innerHTML = `
        <article class="featured-card" onclick="openArticleModal('${featured.id}')">
          <div class="featured-visual">
            <div class="visual-stellarator">
              <div class="stellarator-core"></div>
              <div class="stellarator-ring ring-1"></div>
              <div class="stellarator-ring ring-2"></div>
              <div class="stellarator-ring ring-3"></div>
              <div class="particle-glow"></div>
            </div>
            <div class="featured-badge">${featured.coverBadge}</div>
          </div>
          <div class="featured-content">
            <div class="card-meta">
              <span class="meta-section">${featured.section}</span>
              <span class="meta-dot">•</span>
              <span class="meta-time">${featured.readTime} de lectura</span>
              <span class="meta-dot">•</span>
              <span class="meta-date">${featured.date}</span>
            </div>
            <h2 class="featured-title">${featured.title}</h2>
            <p class="featured-subtitle">${featured.subtitle}</p>
            <p class="featured-lead">${featured.lead}</p>
            <div class="card-footer">
              <div class="author-block">
                <span class="author-name">${featured.author}</span>
                <span class="author-role">${featured.role}</span>
              </div>
              <button class="read-btn" onclick="event.stopPropagation(); openArticleModal('${featured.id}')">
                Leer Reportaje Completo →
              </button>
            </div>
          </div>
        </article>
      `;
    } else {
      featuredContainer.style.display = "none";
    }
  }

  // Render Grid Cards
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🔍</div>
        <h3>No se encontraron artículos</h3>
        <p>Intenta con otros términos de búsqueda o selecciona otra categoría.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(art => `
    <article class="article-card ${art.featured ? 'is-featured-tag' : ''}" onclick="openArticleModal('${art.id}')">
      <div class="card-top">
        <span class="card-section">${art.section}</span>
        <span class="card-time">${art.readTime}</span>
      </div>
      <h3 class="card-title">${art.title}</h3>
      <p class="card-subtitle">${art.subtitle}</p>
      <div class="card-tags">
        ${art.tags.map(t => `<span class="tag-pill">${t}</span>`).join('')}
      </div>
      <div class="card-author-row">
        <div class="card-author-info">
          <span class="card-author-name">${art.author}</span>
          <span class="card-author-role">${art.role}</span>
        </div>
        <span class="card-arrow">→</span>
      </div>
    </article>
  `).join('');

  // Re-render math if KaTeX is available
  triggerKaTeX();
}

function openArticleModal(articleId) {
  const article = ARTICLES.find(a => a.id === articleId);
  if (!article) return;
  selectedArticle = article;

  const modal = document.getElementById("article-modal");
  const modalBody = document.getElementById("modal-article-body");
  if (!modal || !modalBody) return;

  modalBody.innerHTML = `
    <header class="modal-header-hero">
      <div class="modal-category-strip">
        <span class="modal-sec-badge">${article.section}</span>
        <span>•</span>
        <span>${article.date}</span>
        <span>•</span>
        <span>${article.readTime}</span>
      </div>
      <h1 class="modal-title">${article.title}</h1>
      <p class="modal-subtitle">${article.subtitle}</p>
      
      <div class="modal-byline">
        <div class="byline-avatar">⚛</div>
        <div class="byline-info">
          <div class="byline-name">${article.author}</div>
          <div class="byline-role">${article.role} — Sociedad de Física UFV</div>
        </div>
        <div class="modal-actions-bar">
          <button class="action-btn" onclick="copyArticleLink('${article.id}')" title="Copiar enlace">
            📋 Copiar Enlace
          </button>
          <button class="action-btn" onclick="window.print()" title="Imprimir artículo">
            🖨️ Imprimir
          </button>
        </div>
      </div>
    </header>

    <div class="modal-article-prose">
      <div class="article-lead-paragraph">
        ${article.lead}
      </div>

      ${article.boxout ? `
        <div class="editorial-boxout">
          <h4>${article.boxout.title}</h4>
          <div>${article.boxout.content}</div>
        </div>
      ` : ''}

      <div class="article-rich-body">
        ${article.body}
      </div>
    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Trigger math formatting in modal
  triggerKaTeX(modalBody);
}

function closeModal() {
  const modal = document.getElementById("article-modal");
  if (modal) {
    modal.classList.remove("active");
    document.body.style.overflow = "";
    selectedArticle = null;
  }
}

function setupModal() {
  const modal = document.getElementById("article-modal");
  const closeBtn = document.getElementById("modal-close-btn");
  const overlay = document.getElementById("modal-overlay");

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  if (overlay) overlay.addEventListener("click", closeModal);

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
}

function copyArticleLink(id) {
  const url = `${window.location.origin}${window.location.pathname}#article-${id}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(url).then(() => {
      showToast("¡Enlace copiado al portapapeles!");
    }).catch(() => {
      showToast("Enlace: " + url);
    });
  } else {
    showToast("Enlace: " + url);
  }
}

function showToast(msg) {
  let toast = document.getElementById("app-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "app-toast";
    toast.className = "app-toast";
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function triggerKaTeX(container = document) {
  if (window.renderMathInElement) {
    try {
      window.renderMathInElement(container, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    } catch (e) {
      console.warn("KaTeX rendering warning:", e);
    }
  }
}
