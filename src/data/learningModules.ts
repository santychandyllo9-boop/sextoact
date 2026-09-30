export interface LearningModule {
  id: string;
  title: string;
  badge: string;
  icon: string;
  summary: string;
  content: {
    definition: string;
    keyPoints: string[];
    schoolExamples: string[];
    tipsForGradeSix: string;
    commonMistakes: string;
  };
}

export const LEARNING_MODULES: LearningModule[] = [
  {
    id: 'intro',
    title: '1. ¿Qué es la Ofimática?',
    badge: 'Fundamentos',
    icon: 'Compass',
    summary: 'El conjunto de programas y técnicas informáticas ideadas para facilitar las tareas de estudio y oficina.',
    content: {
      definition: 'La palabra Ofimática proviene de unir Oficina + Informática. Antes de los computadores, la gente usaba máquinas de escribir manuales, calculadoras de papel y archivadores pesados. Hoy, una sola suite ofimática reúne todas esas funciones de forma digital, rápida y ecológica.',
      keyPoints: [
        'Permite crear, guardar, organizar, compartir y enviar documentos.',
        'Incluye tres aplicaciones reinas: procesadores de texto, hojas de cálculo y programas de presentaciones.',
        'Se pueden trabajar de forma instalada (como Microsoft Office / LibreOffice) o en la nube (como Google Workspace: Docs, Sheets, Slides).',
        'Facilita el trabajo colaborativo en equipo en tiempo real.'
      ],
      schoolExamples: [
        'Escribir la tarea de Español en un procesador de texto.',
        'Calcular los gastos de la feria de la ciencia en una hoja de cálculo.',
        'Exponer sobre la biodiversidad de Colombia en una presentación con diapositivas.'
      ],
      tipsForGradeSix: 'En 6° grado comienzas a entregar trabajos formales. Aprender ofimática te ahorrará horas de estudio y hará que tus entregas se vean impecables.',
      commonMistakes: 'Creer que ofimática es solo jugar o navegar en internet; en realidad son herramientas productivas para transformar información.'
    }
  },
  {
    id: 'word',
    title: '2. Procesador de Textos (Word & Docs)',
    badge: 'Redacción y Formato',
    icon: 'FileText',
    summary: 'El cuaderno digital para escribir, corregir ortografía, diseñar párrafos e incluir fotos y tablas.',
    content: {
      definition: 'Un procesador de texto es un software enfocado en la creación, edición, modificación e impresión de documentos textuales con formato enriquecido (tipografías, colores, sangrías y márgenes).',
      keyPoints: [
        'Fuente tipográfica: el estilo de letra (ej. Arial, Times New Roman, Calibri) y su tamaño en puntos (ej. 12 pt).',
        'Alineación: Izquierda (estándar para leer), Centrado (títulos), Derecha (fechas), Justificado (bordes alineados como en un libro).',
        'Estilos de texto: Negrita (Ctrl+N para resaltar), Cursiva (Ctrl+K para citas o títulos de libros), Subrayado (Ctrl+S).',
        'Herramienta de revisión ortográfica: las líneas onduladas rojas indican posibles errores ortográficos, y las azules problemas de concordancia o puntuación.'
      ],
      schoolExamples: [
        'Escribir un ensayo de Historia con portada formal (Título, Nombre, Grado, Colegio, Año).',
        'Crear un poema ilustrado con letra destacada.',
        'Diseñar un folleto informativo o tríptico escolar.'
      ],
      tipsForGradeSix: 'Usa siempre títulos claros y no mezcles más de dos tipos de letra diferentes en el mismo trabajo para que mantenga un aspecto ordenado.',
      commonMistakes: 'Presionar la tecla "Enter" muchas veces para pasar a la siguiente hoja en lugar de presionar "Ctrl + Enter" (Salto de página).'
    }
  },
  {
    id: 'excel',
    title: '3. Hoja de Cálculo (Excel & Sheets)',
    badge: 'Números y Gráficos',
    icon: 'Table',
    summary: 'La libreta cuadriculada inteligente que realiza operaciones matemáticas automáticas y crea gráficos.',
    content: {
      definition: 'Una hoja de cálculo es un programa que manipula datos numéricos y alfanuméricos organizados en tablas formadas por la unión de filas y columnas, permitiendo realizar desde sumas sencillas hasta estadísticas complejas.',
      keyPoints: [
        'Filas: van en sentido horizontal y se enumeran (1, 2, 3, 4...).',
        'Columnas: van en sentido vertical y se nombran con letras (A, B, C, D...).',
        'Celda: es el punto de cruce entre una columna y una fila. Su nombre combina primero la letra y luego el número (ejemplo: B4).',
        'El signo igual (=): es el disparador obligatorio de cualquier fórmula. Si no pones =, el programa no calcula nada.',
        'Operadores básicos: Suma (+), Resta (-), Multiplicación (*), División (/).',
        'Fórmulas escolares comunes: =SUMA(A1:A5), =PROMEDIO(B2:B10).'
      ],
      schoolExamples: [
        'Llevar el control de tus calificaciones del período escolar y calcular tu promedio final.',
        'Crear una gráfica de barras con las temperaturas registradas durante una semana.',
        'Hacer el presupuesto de ahorro con la mesada semanal.'
      ],
      tipsForGradeSix: 'En una celda puedes guardar: texto (rótulos), números (valores) o fórmulas (que calculan resultados automáticamente cuando los números cambian).',
      commonMistakes: 'Escribir la letra "x" para multiplicar en vez del asterisco (*), o escribir números con letras dentro de la celda de cálculo impidiendo que la fórmula funcione.'
    }
  },
  {
    id: 'powerpoint',
    title: '4. Presentaciones Digitales (PowerPoint & Slides)',
    badge: 'Comunicación Visual',
    icon: 'Presentation',
    summary: 'Láminas digitales proyectables para exponer ideas con claridad, dinamismo e imágenes impactantes.',
    content: {
      definition: 'Software diseñado para estructurar información en una secuencia de pantallas llamadas "diapositivas", combinando texto sintetizado, esquemas, imágenes, audios y animaciones para apoyar una presentación oral frente a un auditorio.',
      keyPoints: [
        'Diapositiva (Slide): cada una de las páginas individuales que componen la presentación.',
        'Regla 6x6: no más de 6 líneas de texto por diapositiva, y no más de 6 palabras por línea. ¡La diapositiva es un apoyo, no para leer palabra por palabra!',
        'Transición: el efecto visual que ocurre cuando pasas de una diapositiva a la siguiente (ej. desvanecer, empuje).',
        'Animación: el movimiento que le aplicas a un objeto específico (una foto, un título) dentro de una misma diapositiva.'
      ],
      schoolExamples: [
        'Exponer una cartelera digital sobre las regiones naturales de Colombia.',
        'Presentar un proyecto de robótica escolar con fotos de los circuitos construidos.',
        'Jugar una trivia interactiva de preguntas y respuestas en clase.'
      ],
      tipsForGradeSix: 'Usa alto contraste: texto oscuro sobre fondo claro o texto blanco sobre fondo oscuro. Si el fondo tiene muchos colores, las letras no se podrán leer desde el fondo del salón.',
      commonMistakes: 'Copiar y pegar párrafos gigantescos de internet en una sola diapositiva y leerle la espalda a tus compañeros durante la exposición.'
    }
  },
  {
    id: 'shortcuts',
    title: '5. Atajos de Teclado y Archivos',
    badge: 'Habilidad y Eficiencia',
    icon: 'Keyboard',
    summary: 'Combinaciones mágicas de teclas y buenas prácticas para no perder nunca tus tareas escolares.',
    content: {
      definition: 'Los atajos de teclado permiten enviar instrucciones directas al computador usando teclas como Control (Ctrl), Shift y Alt sin necesidad de soltar las manos para buscar el ratón.',
      keyPoints: [
        'Ctrl + C: Copiar el texto o imagen seleccionada a la memoria (Portapapeles).',
        'Ctrl + V: Pegar el contenido del portapapeles en el lugar del cursor.',
        'Ctrl + X: Cortar (quita el texto de su lugar original y lo deja listo para pegar en otro sitio).',
        'Ctrl + Z: Deshacer el error cometido inmediatamente.',
        'Ctrl + G (o Ctrl + S): Guardar el documento actual.',
        'Ctrl + E (o Ctrl + A): Seleccionar todo el contenido del documento.',
        'Extensiones de archivo esenciales: .docx (Word), .xlsx (Excel), .pptx (PowerPoint), .pdf (Documento portátil fijo).'
      ],
      schoolExamples: [
        'Recuperar un párrafo que borraste sin querer presionando Ctrl + Z.',
        'Crear una carpeta llamada "6to_Informatica_2026" para no dejar archivos perdidos en Descargas.',
        'Guardar el trabajo en formato .PDF antes de enviarlo por correo o classroom al docente.'
      ],
      tipsForGradeSix: 'Ponle nombres claros a tus archivos: en vez de "tarea.docx" usa "Informatica_Taller1_JuanPerez_6A.docx". ¡Tu profesor te lo agradecerá!',
      commonMistakes: 'Guardar todos los archivos con nombres como "asdfgh.docx" o dejarlos en la carpeta de Descargas donde después nadie los puede encontrar.'
    }
  },
  {
    id: 'ergonomics',
    title: '6. Ergonomía y Salud Digital',
    badge: 'Bienestar Escolar',
    icon: 'HeartPulse',
    summary: 'Hábitos posturales y de descanso visual para cuidar la espalda, cuello y ojos mientras estudias.',
    content: {
      definition: 'La ergonomía es la disciplina que adapta el espacio y las herramientas de trabajo a las características del cuerpo humano, previniendo lesiones, contracturas y fatiga física y visual.',
      keyPoints: [
        'Postura de la espalda: debe permanecer erguida apoyada firmemente contra el espaldar de la silla.',
        'Pies: deben estar planos sobre el piso o sobre un reposapiés, nunca colgando sin apoyo.',
        'Brazos y codos: deben formar un ángulo de 90 grados respecto a la mesa para evitar tensión en las muñecas.',
        'Distancia de la pantalla: debe estar a una distancia de entre 50 y 60 centímetros (el largo de tu brazo extendido) y con la parte superior a la altura de tus ojos.',
        'Regla 20-20-20: cada 20 minutos de pantalla, descansa mirando hacia un punto lejano a 20 pies (6 metros) durante 20 segundos.'
      ],
      schoolExamples: [
        'Ajustar la altura de la silla en la sala de sistemas del colegio antes de comenzar la clase.',
        'Levantarse a estirar los brazos y caminar un poco entre periodos de clase de informática.',
        'Mantener una iluminación adecuada en la habitación donde haces tus tareas.'
      ],
      tipsForGradeSix: 'Parpadea con frecuencia cuando leas en pantalla; al concentrarnos en monitores parpadeamos la mitad de veces de lo normal y los ojos se resecan.',
      commonMistakes: 'Acostarse en la cama con el computador portátil sobre el estómago o con el cuello completamente doblado hacia abajo.'
    }
  }
];

export const KEYBOARD_SHORTCUTS = [
  { key: 'Ctrl + C', action: 'Copiar', desc: 'Copia lo seleccionado sin borrarlo' },
  { key: 'Ctrl + X', action: 'Cortar', desc: 'Mueve lo seleccionado quitándolo de su lugar' },
  { key: 'Ctrl + V', action: 'Pegar', desc: 'Inserta lo que copiaste o cortaste' },
  { key: 'Ctrl + Z', action: 'Deshacer', desc: 'Revierte el último error o cambio' },
  { key: 'Ctrl + Y', action: 'Rehacer', desc: 'Vuelve a aplicar lo que deshecho' },
  { key: 'Ctrl + G / S', action: 'Guardar', desc: 'Guarda los cambios en el archivo' },
  { key: 'Ctrl + P', action: 'Imprimir', desc: 'Abre la ventana para enviar a imprimir' },
  { key: 'Ctrl + E / A', action: 'Seleccionar Todo', desc: 'Sombrea todo el texto del documento' },
  { key: 'Ctrl + N / B', action: 'Negrita', desc: 'Resalta el texto en grosor oscuro' },
  { key: 'Ctrl + K / I', action: 'Cursiva', desc: 'Inclina suavemente la tipografía' }
];
