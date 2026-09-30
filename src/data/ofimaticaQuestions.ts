import { Question } from '../types/quiz';

export const OFIMATICA_QUESTIONS: Question[] = [
  // ==========================================
  // PARTE 1: 10 PREGUNTAS DE VERDADERO O FALSO
  // ==========================================
  {
    id: 1,
    type: 'true_false',
    topic: 'Conceptos Generales',
    prompt: 'El término "Ofimática" es un acrónimo que nace de la unión de las palabras "Oficina" e "Informática".',
    correctAnswer: true,
    explanation: '¡Correcto! La ofimática engloba el conjunto de técnicas, aplicaciones y herramientas informáticas que se utilizan en funciones de oficina para optimizar, mejorar y automatizar los procedimientos cotidianos.',
    pedagogicalTip: 'Recuerda: Ofi (de oficina) + Mática (de informática). Representa las herramientas digitales que usamos para hacer tareas y trabajos.',
    competencyStandard: 'Reconozco los principios y conceptos fundamentales de la tecnología y la información en el entorno escolar y cotidiano.'
  },
  {
    id: 2,
    type: 'true_false',
    topic: 'Procesador de Texto',
    prompt: 'El procesador de texto (como Microsoft Word o Google Docs) está diseñado principalmente para realizar cálculos matemáticos complejos mediante fórmulas numéricas.',
    correctAnswer: false,
    explanation: 'Falso. El procesador de texto sirve para redactar, editar y dar formato a textos (cuentos, cartas, ensayos). La herramienta especializada en cálculos y fórmulas numéricas es la hoja de cálculo (como Excel o Google Sheets).',
    pedagogicalTip: 'Asocia siempre: "Texto = Word o Docs" y "Cálculos / Tablas de números = Excel o Sheets".',
    competencyStandard: 'Identifico y selecciono la herramienta ofimática adecuada según la tarea o producto requerido.'
  },
  {
    id: 3,
    type: 'true_false',
    topic: 'Hoja de Cálculo',
    prompt: 'En una hoja de cálculo (como Excel), las columnas están identificadas verticalmente por letras (A, B, C...) y las filas horizontalmente por números (1, 2, 3...).',
    correctAnswer: true,
    explanation: '¡Verdadero! Las hojas de cálculo tienen una cuadrícula donde las columnas llevan letras del abecedario y las filas llevan números. Su cruce forma una "celda" (por ejemplo, B5 o A1).',
    pedagogicalTip: 'Visualiza una columna como las columnas de un edificio (verticales con letras) y las filas como los renglones de tu libreta (horizontales con números).',
    competencyStandard: 'Comprendo la estructura básica de filas, columnas y celdas para la organización de datos en hojas de cálculo.'
  },
  {
    id: 4,
    type: 'true_false',
    topic: 'Atajos y Archivos',
    prompt: 'El atajo de teclado Ctrl + Z sirve para deshacer la última acción o cambio realizado por error en la mayoría de programas.',
    correctAnswer: true,
    explanation: '¡Verdadero! "Ctrl + Z" es considerado el atajo de oro del estudiante: revierte el último cambio, restaurando párrafos o imágenes que se hayan borrado accidentalmente.',
    pedagogicalTip: 'Si te equivocas borrando algo en tu documento, ¡no entres en pánico! Presiona de inmediato Ctrl + Z.',
    competencyStandard: 'Utilizo atajos de teclado y comandos del sistema para mejorar la eficiencia al crear documentos digitales.'
  },
  {
    id: 5,
    type: 'true_false',
    topic: 'Atajos y Archivos',
    prompt: 'La combinación de teclas Ctrl + C se utiliza para pegar un texto que previamente habíamos seleccionado.',
    correctAnswer: false,
    explanation: 'Falso. Ctrl + C sirve para Copiar (Copy). Para Pegar el contenido copiado en otro lugar se utiliza la combinación de teclas Ctrl + V.',
    pedagogicalTip: 'La tríada clásica: Ctrl + C (Copiar), Ctrl + X (Cortar) y Ctrl + V (Pegar).',
    competencyStandard: 'Distingo las funciones básicas de edición: copiar, cortar y pegar mediante comandos directos.'
  },
  {
    id: 6,
    type: 'true_false',
    topic: 'Presentaciones',
    prompt: 'En un programa de presentaciones multimedia (como PowerPoint o Google Slides), a cada una de las páginas individuales de trabajo se le denomina "diapositiva".',
    correctAnswer: true,
    explanation: '¡Verdadero! A diferencia de los procesadores de texto que usan "páginas" y de las hojas de cálculo que usan "hojas/libros", las presentaciones se organizan en "diapositivas" (en inglés, slides).',
    pedagogicalTip: 'Las diapositivas permiten proyectar ideas de forma secuencial con textos breves, gráficos y animaciones para exposiciones.',
    competencyStandard: 'Reconozco los elementos estructurales de una presentación digital para exposiciones pedagógicas.'
  },
  {
    id: 7,
    type: 'true_false',
    topic: 'Atajos y Archivos',
    prompt: 'Guardar continuamente un documento utilizando el comando Guardar (Ctrl + G en programas en español o Ctrl + S en inglés) previene perder el avance si el equipo se apaga repentinamente.',
    correctAnswer: true,
    explanation: '¡Verdadero! Aunque muchos programas modernos tienen autoguardado en la nube, presionar frecuentemente Guardar asegura que el archivo local conserve todos los últimos párrafos trabajados.',
    pedagogicalTip: 'Hazlo un hábito reflejo: cada vez que escribas un párrafo importante o agregues una imagen, presiona Ctrl + G.',
    competencyStandard: 'Aplico medidas preventivas de respaldo y almacenamiento seguro de la información escolar.'
  },
  {
    id: 8,
    type: 'true_false',
    topic: 'Atajos y Archivos',
    prompt: 'La manera más ordenada y segura de organizar los trabajos del colegio en el computador es guardarlos todos sueltos directamente en la pantalla del Escritorio (Desktop).',
    correctAnswer: false,
    explanation: 'Falso. Guardar todos los archivos dispersos en el Escritorio causa desorden visual y lentitud para encontrar tareas. La mejor práctica es crear carpetas ordenadas por año y por materia (por ejemplo: "Grado 6 > Informática", "Grado 6 > Matemáticas").',
    pedagogicalTip: 'Una estructura de carpetas clara es como una mochila bien organizada: sabes exactamente dónde está cada cuaderno sin perder tiempo.',
    competencyStandard: 'Organizo información en el computador mediante la creación de carpetas y jerarquías lógicas de almacenamiento.'
  },
  {
    id: 9,
    type: 'true_false',
    topic: 'Conceptos Generales',
    prompt: 'El formato de archivo PDF es ideal para entregar tareas finales porque conserva el diseño, los márgenes y las fuentes fijas sin desconfigurarse al abrirlo en otro computador o celular.',
    correctAnswer: true,
    explanation: '¡Verdadero! PDF significa "Portable Document Format" (Formato de Documento Portable). Su gran ventaja es que congela el diseño exactamente como tú lo creaste, impidiendo que el texto se mueva o las fotos cambien de lugar.',
    pedagogicalTip: 'Editas en Word o Docs (.docx), pero cuando vayas a imprimir o enviar el trabajo definitivo al profesor, expórtalo o guárdalo como PDF.',
    competencyStandard: 'Selecciono formatos de archivo estándar apropiados para la presentación y entrega formal de tareas.'
  },
  {
    id: 10,
    type: 'true_false',
    topic: 'Ergonomía y Seguridad',
    prompt: 'Sentarse con la espalda recta apoyada en el respaldo de la silla y colocar el monitor a la altura de los ojos forma parte de la ergonomía al utilizar herramientas ofimáticas.',
    correctAnswer: true,
    explanation: '¡Verdadero! La ergonomía informática estudia la postura correcta frente al computador para evitar dolores musculares, fatiga visual y lesiones de muñeca o columna durante las jornadas de estudio.',
    pedagogicalTip: 'Recuerda además la regla 20-20-20: cada 20 minutos, mira un objeto a 20 pies (unos 6 metros) durante 20 segundos para relajar la vista.',
    competencyStandard: 'Adopto hábitos posturales y de salud ergonómica durante el uso prolongado de dispositivos informáticos.'
  },

  // ==============================================================
  // PARTE 2: 5 PREGUNTAS DE SELECCIÓN MÚLTIPLE (TIPO A, B, C, D)
  // ==============================================================
  {
    id: 11,
    type: 'multiple_choice',
    topic: 'Procesador de Texto',
    prompt: '¿Cuál de las siguientes herramientas de ofimática es la más indicada para redactar una autobiografía, un cuento o un informe escolar con títulos, párrafos corregidos ortográficamente e imágenes insertadas?',
    options: [
      { id: 'A', text: 'Microsoft Excel (Hoja de cálculo para tablas y operaciones contables)' },
      { id: 'B', text: 'Microsoft Word o Google Docs (Procesador de texto para redacción y maquetación)' },
      { id: 'C', text: 'Google Chrome (Navegador web para visitar sitios de internet)' },
      { id: 'D', text: 'Reproductor de Windows Media (Software para escuchar canciones y videos)' }
    ],
    correctAnswer: 'B',
    explanation: 'La respuesta correcta es la B. Los procesadores de texto como Microsoft Word, Google Docs o LibreOffice Writer cuentan con corrector ortográfico, alineación de párrafos, tipos de letra (fuentes), numeración de páginas y herramientas para insertar ilustraciones.',
    pedagogicalTip: 'Si tu objetivo principal es escribir y dar formato a un documento para imprimir o leer, el procesador de texto es la herramienta indicada.',
    competencyStandard: 'Identifico las funciones de los procesadores de texto y su utilidad en la producción de documentos escritos académicos.'
  },
  {
    id: 12,
    type: 'multiple_choice',
    topic: 'Hoja de Cálculo',
    prompt: 'En una hoja de cálculo (como Excel o Google Sheets), ¿cómo se llama el elemento específico donde se intersecan la Columna C y la Fila 7?',
    options: [
      { id: 'A', text: 'Rango C-7' },
      { id: 'B', text: 'Diapositiva 7C' },
      { id: 'C', text: 'Celda C7' },
      { id: 'D', text: 'Pestaña 7' }
    ],
    correctAnswer: 'C',
    explanation: 'La respuesta correcta es la C. Cada cuadro individual de la cuadrícula se denomina "celda", y su dirección se forma indicando primero la letra de la columna y luego el número de la fila: "C7".',
    pedagogicalTip: 'Siempre se nombra primero la letra y luego el número: Columna C + Fila 7 = Celda C7. ¡Igual que el juego de Batalla Naval!',
    competencyStandard: 'Localizo y referencio celdas en la cuadrícula de una hoja de cálculo mediante coordenadas alfanuméricas.'
  },
  {
    id: 13,
    type: 'multiple_choice',
    topic: 'Presentaciones',
    prompt: 'Mateo y su equipo de 6° grado deben exponer en clase de Ciencias Naturales sobre el Sistema Solar. Desean mostrar imágenes grandes de los planetas, poco texto con viñetas y transiciones de apoyo visual. ¿Qué software ofimático es el ideal?',
    options: [
      { id: 'A', text: 'Microsoft PowerPoint o Google Slides (Software de presentaciones multimedia)' },
      { id: 'B', text: 'Bloc de Notas (Editor de texto plano sin colores ni imágenes)' },
      { id: 'C', text: 'Microsoft Access (Sistema de gestión de bases de datos relacionales)' },
      { id: 'D', text: 'Calculadora de Windows (Accesorio del sistema para operaciones aritméticas)' }
    ],
    correctAnswer: 'A',
    explanation: 'La respuesta correcta es la A. Los programas de presentaciones como PowerPoint, Google Slides, Keynote o Canva permiten estructurar contenidos visuales mediante diapositivas, incrustar fotografías, audios, videos y proyectarlos en el salón.',
    pedagogicalTip: 'Para exposiciones orales, la regla de oro es "menos es más": pocas palabras clave y buenas imágenes ilustrativas.',
    competencyStandard: 'Diseño apoyos visuales y exposiciones multimedia aplicando pautas pedagógicas de síntesis y comunicación.'
  },
  {
    id: 14,
    type: 'multiple_choice',
    topic: 'Hoja de Cálculo',
    prompt: 'En una hoja de cálculo, ¿con qué carácter o símbolo debe comenzar SIEMPRE cualquier fórmula u operación para que el programa sepa que debe calcular un resultado matemático?',
    options: [
      { id: 'A', text: 'Con el signo de interrogación ( ? )' },
      { id: 'B', text: 'Con el signo numeral o almohadilla ( # )' },
      { id: 'C', text: 'Con el signo igual ( = )' },
      { id: 'D', text: 'Con la arroba ( @ )' }
    ],
    correctAnswer: 'C',
    explanation: 'La respuesta correcta es la C. En hojas de cálculo como Excel o Sheets, el signo igual (=) le indica al programa que lo que sigue no es un texto ordinario sino una fórmula que debe calcularse, por ejemplo: =A1+B1 o =SUMA(C1:C10).',
    pedagogicalTip: 'Sin el signo igual (=) al inicio, el programa simplemente mostrará las letras y números tal cual, sin resolver la suma o multiplicación.',
    competencyStandard: 'Escribo y ejecuto fórmulas matemáticas elementales en la hoja de cálculo respetando la sintaxis adecuada.'
  },
  {
    id: 15,
    type: 'multiple_choice',
    topic: 'Atajos y Archivos',
    prompt: 'Si estás trabajando en un documento extenso y necesitas seleccionar TODO el texto y las imágenes de una sola vez para cambiar la letra o copiarlo, ¿cuál es el atajo de teclado en español?',
    options: [
      { id: 'A', text: 'Ctrl + E (en software en español, o Ctrl + A en inglés)' },
      { id: 'B', text: 'Alt + F4 (que sirve para cerrar la ventana activa)' },
      { id: 'C', text: 'Shift + Espacio (que crea una sangría rápida)' },
      { id: 'D', text: 'Ctrl + P (que abre el menú de imprimir)' }
    ],
    correctAnswer: 'A',
    explanation: 'La respuesta correcta es la A. Presionar Ctrl + E (Seleccionar Todo en español) o Ctrl + A ("Select All" en inglés) resalta de inmediato todo el contenido del documento sin tener que arrastrar el ratón durante varias páginas.',
    pedagogicalTip: 'Aprender este atajo te ahorra minutos valiosos al maquetar trabajos largos de varias hojas.',
    competencyStandard: 'Empleo comandos avanzados de selección y edición en la administración de documentos escolares.'
  }
];

export const TOPIC_COLORS: Record<Question['topic'], { bg: string; text: string; border: string }> = {
  'Conceptos Generales': { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
  'Procesador de Texto': { bg: 'bg-indigo-50', text: 'text-indigo-700', border: 'border-indigo-200' },
  'Hoja de Cálculo': { bg: 'bg-emerald-50', text: 'text-emerald-700', border: 'border-emerald-200' },
  'Presentaciones': { bg: 'bg-amber-50', text: 'text-amber-700', border: 'border-amber-200' },
  'Atajos y Archivos': { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
  'Ergonomía y Seguridad': { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' }
};
