export default {
  global: {
    componenteFormativo:
      'Implementación del acompañamiento psicosocial familiar',
    descripcionCurso:
      'En este componente se expone en qué consiste el proceso de acompañamiento familiar, desde el ejercicio de focalización hasta su cierre y despedida.  ',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.jpg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '¿Cómo inicia el proceso de acompañamiento? ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo:
              'Focalización de familias por criterios de identificación y selección',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Búsqueda y vinculación de familias',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Identificación tipo de acompañamiento psicosocial (preventivo, intensivo o discapacidad) ',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: '¿Qué sucede durante el acompañamiento psicosocial? ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Encuadre ¿cómo nos acercamos a las familias? ',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              '¿Cómo acompañamos desde el ciclo básico y de profundización a las familias? Desarrollo del acompañamiento psicosocial ',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Definición del Plan Familiar',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Visitas en el hogar',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Encuentros familiares y comunitarios ',
            hash: 't_2_5',
          },

          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Convergencia de oferta y gestión de redes ',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo:
          '¿Con qué otras herramientas se cuentan para el acompañamiento psicosocial? Acciones adicionales en el acompañamiento psicosocial ',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Gestión de caso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Articulación con protección ?',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Articulación con primera infancia ',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo:
          'Cierre del acompañamiento psicosocial familiar, con cada despedida llegan nuevos comienzos ',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Articulación con protección',
      referencia:
        'ICBF & USAID. (2021). Los primeros pasos hacia la reunificación familiar.',
      tipo: 'Cartilla',
      descarga: '/downloads/anexo1.pdf',
    },
    {
      tema: 'Articulación con protección',
      referencia: 'ICBF & USAID. (2021). Pensarnos en Familia.',
      tipo: 'Cartilla',
      descarga: '/downloads/anexo2.pdf',
    },
    {
      tema: 'Articulación con protección',
      referencia: 'ICBF & USAID. (2021). Proyectándonos en Familia.',
      tipo: 'Cartilla',
      descarga: '/downloads/anexo3.pdf',
    },
    {
      tema: 'Articulación con protección',
      referencia: 'ICBF & USAID. (2021). Fortaleciéndonos en familia.',
      tipo: 'Cartilla',
      descarga: '/downloads/anexo4.pdf',
    },
  ],
  glosario: [
    {
      termino: 'UAFU',
      significado: ' Unidad de Acompañamiento Familiar Urbana.',
    },
    {
      termino: 'UAFR',
      significado: ' Unidad de Acompañamiento Familiar Rural.',
    },
    {
      termino: 'NNAcD',
      significado: 'abreviatura de niños, niñas y adolescentes.',
    },
    {
      termino: 'PAF',
      significado: ' abreviatura de Profesional de Acompañamiento Familiar.',
    },
    {
      termino: 'PcD',
      significado: 'abreviatura de persona con discapacidad.',
    },
  ],
  referencias: [
    {
      referencia:
        'CEPAL. (2018). Panorama Social de América Latina. Comisión Económica para América Latina y el Caribe.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2019). Guía para el registro de las variables de discapacidad en los sistemas de información del ICBF. Bogotá, D.C.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2021). Guía de Articulación entre las direcciones de Protección y Familias y Comunidades. Bogotá.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2021). Guía de articulación entre las direcciones de protección y familias y comunidades modalidad mi familia. 55. Colombia.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2021). Guía de focalización y microfocalización modalidad Mi Familia. Bogotá, D.C.: ICBF.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2021). Lineamiento Técnico Modalidad Mi Familia, 48. Bogotá, Colombia. Obtenido de',
      link: 'https://www.icbf.gov.co/misionales/promocion-y-prevencion/familia',
    },
    {
      referencia:
        'ICBF. (2022). Guía de Orientaciones Metodológicas Mi Familia. Guía de Orientaciones Metodológicas Mi Familia.',
      link: '',
    },
    {
      referencia: 'ICBF. (2022). Manual Operativo Mi Familia. Colombia.',
      link: '',
    },
    {
      referencia:
        'ICBF. (2022). Guía de Orientaciones Metodológicas Mi Familia.',
      link: '',
    },
    {
      referencia:
        'UNESCO. (2005). Convención sobre la protección y la promoción de la diversidad de las expresiones culturales',
      link: '',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Responsable equipo desarrollo curricular',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Sonia Milena Moreno Páez',
        cargo: 'Experta temática',
        centro: 'ICBF',
      },
      {
        nombre: 'Mayra Alexandra Pacheco Montealegre',
        cargo: 'Experta temática',
        centro: 'ICBF',
      },
      {
        nombre: 'Diego Fernando Ramírez Bermúdez',
        cargo: 'Experto temático',
        centro: 'ICBF',
      },
      {
        nombre: 'Miroslava González Hernández',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro:
          'Regional Norte de Santander - Centro de la Industria, la Empresa y los Servicios',
      },
      {
        nombre: 'Ana Catalina Córdoba Sus',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y metrología',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Corrector de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Natalia Maldonado Delgado',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruíz Torres',
        cargo: 'Revisión de guion audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'María Carolina Tamayo López ',
        cargo: 'Locución',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Estefani Daniela Gallo Cortés',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yeimmy Bibiana Barrera Maldonado',
        cargo: 'Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Lina Marcela Pérez Manchego ',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ángela María Maldonado Jaime ',
        cargo: 'Validación Ilustración',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Oleg Litvin ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes ',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Mary Jeans Palacio Camacho',
        cargo: 'Producción audiovisual ',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez ',
        cargo: 'Validación audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Sandra Milena Triana Pinto',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gomez',
        cargo: 'Validación de  contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Responsable del equipo de gestión de repositorio',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
