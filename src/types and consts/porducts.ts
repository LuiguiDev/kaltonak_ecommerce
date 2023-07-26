import { AboutCourseTypes } from "./types";

export const products: AboutCourseTypes[] = [
  {
    image: {
      src: './src/images/AMOXTLI_cover.png',
      alt: 'Portada de presentación del curso Amoxtli, de arriba a abajo aparece el nombre de la escuela Kalnokak, el titulo del curso y una dexcripción breve'
    },
    title: 'AMOXTLI',
    description: 'Introducción al estudio de los documentos pictóricos del México ancestral.',
    teacher: 'Gerardo Ingram',
    schedules: 'miércoles de 7 a 9 pm.',
    startingDate: '19 julio',
    sesions: 6,
    cost: 850
  },
  {
    image: {
      src: './src/images/Mitos_1_cover.png',
      alt: `Portada de presentación del curso Mitos:1, de arriba a abajo aparece el nombre de la escuela Kalnokak, el titulo del curso y una dexcripción breve`
    },
    title: 'MITOS 1',
    description: 'La tradición oral como vía de acceso a la sabiduría, la cultura y el autoconocimiento.',
    teacher: 'Liliana Martínez',
    schedules: 'lunes de 7 a 9 pm.',
    startingDate: '24 de julio',
    sesions: 6,
    cost: 850
  }
]