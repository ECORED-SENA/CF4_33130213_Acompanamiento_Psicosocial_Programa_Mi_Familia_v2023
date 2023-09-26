<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 ¿Qué sucede durante el acompañamiento psicosocial? 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img1.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Este apartado describe la estructura del acompañamiento psicosocial, encaminado a movilizar procesos participativos, sensibles, flexibles, abiertos y con disposición a reconocer, valorar y ajustarse a las diferencias, particularidades y procesos de cada familia.
        p Se podrá identificar cómo estos elementos, que son transversales desde los enfoques de Mi Familia, dando forma al encuadre del proceso, delinean una perspectiva para el abordaje y la construcción del plan familiar y orientan la implementación de los ciclos de atención a través de las visitas, los encuentros y las acciones de convergencia de oferta y gestión de redes.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p El acompañamiento psicosocial propuesto por Mi Familia consiste en la atención y apoyo personalizado a las familias, que tiene como fin lograr que cada una de ellas reconozca y fortalezca sus potencialidades y recursos, para la consolidación de vínculos familiares, dinámicas y relaciones basadas en el respecto, la solidaridad, el amor, el cuidado mutuo, entre otras, para la promoción de los derechos y la prevención de cualquier vulneración o amenaza de sus integrantes y en especial hacía los niños, niñas y adolescentes 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2022, p. 45).
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img3.svg')
    p.mb-5 De acuerdo con lo anterior, el profesional de acompañamiento familiar tendrá la labor de acercarse a las familias de manera asertiva, de tal forma que pueda establecer una comunicación en doble vía con la familia, que permita el entendimiento de su situación e intereses en cuanto a su fortalecimiento, para ello se sugiere que se tengan en cuenta acciones de encuadre, en donde se presentará y establecerán las impresiones en cuanto al acompañamiento y los compromisos que este implica de acuerdo al tiempo de atención que ofrece la modalidad Mi Familia. 
    .row.justify-content-center
      .col-12.col-lg-8.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img2.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 Se invita, entonces, a que se tenga presente que el acompañamiento parte del reconocimiento de las capacidades de las familias, por mínimas que sean, por ejemplo, una familia con una perspectiva negativa o fatalista en relación con su vida presente y futura, en donde el profesional pueda identificar que pese a esta visión la familia tiene la intención (disposición) de mejorar y de incluir a todos sus integrantes en un proceso participativo.
    p.mb-5 La profesional y la familia se orientarán por la generación de un vínculo de apoyo, recuerde que, al tener el contacto con la familia, el profesional se vuelve parte del sistema de ayuda de la familia, por tanto, se deberá desarrollar a partir del respeto y el establecimiento de cooperación constante, por ello es necesario que haya claridad desde el inicio, frente a como se desarrollará el acompañamiento psicosocial.
    
    Separador
    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.1 Encuadre: ¿cómo nos acercamos a las familias? 
    .bg13
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
          .col-lg-11(data-aos="fade-left")
            p En este paso del proceso de atención, que sucede entre la primera y la segunda visita domiciliaria que realiza el PAF a la familia beneficiaria, el protagonista es el vínculo que se empieza a construir, por ello se espera que entre estos actores se desarrolle una comunicación fluida, movilizada por la experiencia conversacional del profesional que acompaña el proceso.
          .col-lg-1.mb-4.mb-lg-0
            figure
              img.img-t(src='@/assets/curso/tema2/img4.svg').mx-auto
    p.mb-5 En ese sentido, la forma de atención estará dirigida a lograr la comprensión de la situación que genera el riesgo y realizar un acompañamiento psicosocial a la familia y sus integrantes, con el fin de promover mayor apropiación de los recursos o capacidades para transformar la situación y desarrollar o fortalecer prácticas protectoras (ICBF, 2019), tal como se puede observar en el siguiente video.
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/rNIbz_sMsQQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

        
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img5.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Los profesionales deben mantener una actitud apreciativa hacia los saberes de las familias y su cultura, de manera que pueda entrar en un diálogo de saberes partiendo del enfoque diferencial de derechos; por ello, se sugiere al profesional desarrollar las visitas domiciliarias con las familias beneficiarias con metodologías acordes a sus usos y costumbres, que permitan fortalecer sus capacidades a partir del desarrollo de los temas que se definan conjuntamente, las cuales se espera que sean participativas, incluyentes, dinámicas, cálidas y respetuosas. 
    
    Separador
    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.2 ¿Cómo acompañamos desde el ciclo básico y de profundización a las familias? Desarrollo del acompañamiento psicosocial a partir del ciclo de atención
    p.mb-5 En la modalidad Mi Familia, se desarrollan dos ciclos de atención, a continuación, se describe cada uno de ellos:
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-down-right")
      .row(titulo="Ciclo básico")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Se concentra en los elementos de cuidado y protección al interior de la familia, en especial cuando están dirigidos a niños, niñas y adolescentes (capacidades parentales). 

          p El desarrollo del ciclo básico se realiza a través de una secuencia temática sugerida. Sin embargo, esta secuencia se puede ajustar de acuerdo con el criterio del profesional de acompañamiento, en respuesta a las necesidades, intereses, expectativas y/o situaciones emergentes en las familias, de tal suerte que los criterios de pertinencia y oportunidad, según la realidad familiar, conlleven a una mayor significancia e incidencia del proceso. (ICBF, Guía de Orientaciones Metodológicas Mi Familia, 2022, p. 56) 

          p La primera visita al domicilio o su equivalente no presencial corresponde a una sesión de encuadre y de reconocimiento entre la familia y el profesional la cual se ha denominado ‘Zarpando a la aventura’. La última visita constituye el cierre del proceso, se ha denominado ‘Con cada despedida llegan nuevos comienzos’ e invita a la familia a continuar avanzando en su proyecto de vida familiar e impulsando los proyectos de vida individuales de cada uno de sus integrantes. Estas dos sesiones se consideran parte del ciclo básico de acompañamiento dado que todas las familias beneficiarias las desarrollan. 
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img6.svg', alt='Texto que describa la imagen')
          a.boton.color-acento-contenido.indicador__container(@click="modal1 = true")
            span Ampliar imagen
            i.fas.fa-search
            .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal1")
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img6.svg', style="width: 900px").m-auto
      .row(titulo="Ciclo de profundización")
        .col-lg-7.mb-4.mb-lg-0.ms-lg-5
          p Se define de manera conjunta entre el PAF y la familia y considera elementos que responden a las particularidades e intereses de las mismas. Este ciclo permite profundizar en aspectos propios del sistema de cuidado y protección al interior de la familia o abordar estrategias de protección frente a los sistemas externos. Por ejemplo, frente a lo primero, en este ciclo se puede desarrollar el tema de seguridad en el hogar como complemento a los abordajes alrededor del cuidado y autocuidado o involucramiento parental como profundización de los desarrollos alrededor de la conexión - comunicación. 
          p Asimismo, en este ciclo se pueden abordar temas relacionados con las estrategias de protección frente a sistemas externos como la prevención del consumo de sustancias psicoactivas, violencia sexual, riesgos digitales, promoción de los derechos de las familias y de los niños, niñas y adolescentes, la capacidad de agencia de las familias, entre otros.
        .col-lg-4
          figure
            img.img-t.m-auto(src='@/assets/curso/tema2/img7.svg', alt='Texto que describa la imagen')
          a.boton.color-acento-contenido.indicador__container(@click="modal2 = true")
            span Ampliar imagen
            i.fas.fa-search
            .indicador--click(v-if="mostrarIndicador")
          ModalA(:abrir-modal.sync="modal2")
            .row
              .col-12
                figure
                  img(src='@/assets/curso/tema2/img7.svg', style="width: 900px").m-auto
    p.mb-5 Los siguientes videos profundizan un poco más en cada ciclo de atención:
    TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="zoom-in-down")
      .py-4.py-md-5(titulo="Ciclo básico" :icono="require('@/assets/curso/tema2/img8.svg')")
        .row
          .col-lg-12.mb-4.mb-lg-0
            h4 Ciclo básico
            figure(data-aos="zoom-in").mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/KoEWjsFzuwo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

      .py-4.py-md-5(titulo="Ciclo de profundización" :icono="require('@/assets/curso/tema2/img8.svg')")
        .row
          .col-lg-12.mb-4.mb-lg-0
            h4 Ciclo de profundización
            figure(data-aos="zoom-in").mb-5
            .video
              iframe(width="560" height="315" src="https://www.youtube.com/embed/6ecLkZt4SK8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)     
        
    p.mb-5 Para cada una de las visitas se proponen temas básicos abarcadores, que se pueden desarrollar con la familia, dependiendo de las necesidades e intereses de esta, es decir, se puede hacer énfasis según lo que evidencia el PAF en las interacciones con la familia. 
    
    .row.justify-content-center.ps-3.mb-5
      .col-lg-12
        .tarjeta.color-primario.p-4
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/tema2/img13.svg")
            .col
              .row.align-items-center
                .col.mb-3.mb-sm-0.pt-2
                  h4 Temáticas para el Acompañamiento Psicosocial Familiar
                  p Para las visitas de profundización, la modalidad Mi Familia propone una serie de temáticas, sin embargo, el PAF junto con la UAT estará en capacidad de diseñar nuevas temáticas, según el contexto territorial y realidad familiar (ICBF, 2022, p. 59).
                .col-sm-auto
                  a.boton.color-acento-botones.indicador__container(@click="modal3 = true")
                    span.text-white Ver imagen
                    i.fas.fa-search(style="color: white")
                    .indicador--click(v-if="mostrarIndicador")
                  ModalA(:abrir-modal.sync="modal3")
                    .row
                      .col-12
                        figure
                          img(src='@/assets/curso/tema2/img8.jpg', style="width: 900px").m-auto

    Separador
    #t_2_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.3	Definición del Plan Familiar                     
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img9.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Para el desarrollo adecuado del acompañamiento psicosocial a las familias beneficiarias, se debe construir un Plan Familiar, el cual que se refiere a un acuerdo entre el profesional y las familias entorno al proceso que llevará la familia como beneficiaria de la modalidad, el cual se centra en la definición del abordaje a la familia con el apoyo de las temáticas que guiarán las sesiones del acompañamiento. 
        p El Plan Familiar se construye de acuerdo con el tipo de acompañamiento, los resultados de los instrumentos de caracterización y diagnóstico, la observación y aportes del profesional de acompañamiento, y las necesidades, intereses, expectativas y/o situaciones emergentes en las familias. Cuando termina el acompañamiento, se realiza una sesión de cierre donde aplican nuevamente los Instrumentos de habilidades, lo cual permitirá conocer una aproximación a los resultados del proceso con cada una de las familias. (ICBF, 2022, p. 47).

    .bg1.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img8.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Para el buen desarrollo del acompañamiento, se deben revisar los instrumentos de caracterización presentados en el componente formativo Estructuración del acompañamiento psicosocial familiar y estudiar las especificidades de cada uno de estos consignados en las publicaciones (Ficha de Caracterización, Genograma, Ecomapa, Mapa de pertenencia y Medición de Habilidades).
        
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-6.py-4
        img.img-t.mb-3(src='@/assets/curso/tema2/img9.svg', alt='')  
        figcaption <b>Nota.</b> Plan familiar. Cartilla Zarpando a la Aventura (ICBF 2021).   
      .col-lg-6
        .row
          .col-12.p-4.bg14
            .row.align-items-center
              .col-lg-auto
                figure
                  img.mb-3(src='@/assets/curso/tema2/img10.svg', style="width: 70px").m-auto
              .col-lg-12
                p.mb-0 Para efectos del acompañamiento, el PAF y la familia tendrán un cuaderno o diario del proceso que queda en poder de la familia denominado Plan Familiar, donde se precisan los énfasis que resultan del interés de la familia para cada sesión del ciclo básico, así mismo, se identificará junto con el PAF las temáticas a trabajar en el ciclo de profundización y se registra el proceso de acompañamiento que se desarrolla durante la atención y cierre. Este cuadernillo, busca ser personalizado por la familia a partir de actividades como pintura, dibujos, fotografías, etc.
    p.mb-5 En este Plan Familiar se encuentra el cronograma de visitas y encuentros, donde la familia consigna la fecha y hora acordadas para cada visita o encuentro; espacios para la elaboración del genograma y ecomapa o mapa de pertenencia (actual y potencial), que hace parte del proceso de caracterización y diagnóstico; presenta también infografías sobre los temas abordados como insumo para las sesiones con el PAF o para análisis y revisión por parte de las familias de manera autónoma e incluye apartados para consignar los aprendizajes y compromisos de cada sesión. Adicionalmente, permite a la familia precisar información sobre los procesos de convergencia de oferta y gestión de redes que desarrolla con apoyo del talento humano del operador de la modalidad. (ICBF, 2022, p. 49).          
    Separador
    #t_2_4
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.4 Visitas en el hogar 
    p.mb-5 Son una forma de intervención psicosocial para brindar acompañamiento a las familias en su residencia, donde se busca observar y comprender las interacciones de los individuos y su sistema familiar en sus contextos cotidianos.  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Estas visitas tienen como propósito identificar y promover recursos y potencialidades en las familias a fin de lograr el reconocimiento, resignificación, resolución y abordaje de situaciones que obstaculizan o facilitan el desarrollo integral del grupo familiar, y promover cambios que contribuyan a la protección integral de los niños, niñas y adolescentes. 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2022, p. 14).
      .col-lg-4(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema2/img11.svg') 
    p Es importante que se pueda concertar con las familias los horarios más adecuados para la realización de estas visitas, así como el diseño de actividades que involucren a todos los integrantes. Las visitas o encuentros con las familias en domicilio buscan motivar la resignificación de su proyecto de vida como familia y movilizar los proyectos individuales, teniendo como punto de partida las capacidades de la familia como colectivo. Es importante mantener el lenguaje asertivo, inclusivo y respetuoso durante todo el desarrollo de las acciones de acompañamiento. 
    p.mb-5 Para la realización de las visitas en domicilio por parte del profesional de acompañamiento familiar, deben contemplarse las siguientes consideraciones: 
    .row.mb-5.justify-content-center
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bg15.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
          p La puntualidad y cumplimiento de los tiempos dispuestos para la visita.
      .col-12.col-md-6.col-lg-3.mb-3.mb-lg-0
        .bg15.p-4.h-100
          figure.d-flex.justify-content-center.mb-3
            img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
          p Los procedimientos no quirúrgicos necesarios para rehabilitación como las terapias física, respiratoria, ocupacional, de lenguaje, entre otras.
      .col-12.col-md-6.col-lg-3
          .bg15.p-4.h-100
            figure.d-flex.justify-content-center.mb-3
              img.img90(src='@/assets/curso/tema2/img13.svg', alt='Texto que describa la imagen')
            p Los profesionales deben mantener una actitud apreciativa hacia los saberes de las familias y su cultura.
    
    Separador
    #t_2_5
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.5 Encuentros familiares y comunitarios
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-7(data-aos="fade-left")
        p Son una forma de intervención psicosocial para brindar acompañamiento a las familias en su entorno comunitario, donde se busca observar y comprender las interacciones de los individuos y su sistema familiar en sus contextos cotidianos. Estos encuentros tienen como propósito identificar y promover recursos y potencialidades en las familias a fin de lograr el reconocimiento, resignificación, resolución y abordaje de situaciones que obstaculizan o facilitan el desarrollo integral del grupo familiar, y promover cambios que contribuyan a la protección integral de los NNA, a partir del encuentro con varias familias con experiencias e historias similares. (ICBF, 2022, p. 13).
        p Los encuentros familiares y comunitarios son de dos tipos:
      .col-lg-5.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img9.png').m-auto
    TabsB.color-acento-contenido.mb-5.color_img-tab(data-aos="zoom-in-down")
      .py-4.py-md-5(titulo="Encuentros familiares inclusivos" :icono="require('@/assets/curso/tema2/img12.svg')")
        .row
          .col-lg-5
            figure
              img.img-t.m-auto(src='@/assets/curso/tema2/img14.png', alt='Texto que describa la imagen')
          .col-lg-7.mb-4.mb-lg-0
            h4 Encuentros familiares inclusivos
            p Están diseñados para que participen las familias con necesidades de acompañamiento familiar preventivo, familias con necesidades de acompañamiento familiar intensivo y, familias con niños, niñas y adolescentes con discapacidad o PcD. Su objetivo es la sensibilización y concienciación, que conlleve al fortalecimiento de capacidades de las familias y la inclusión efectiva de niños, niñas, adolescentes y otros integrantes con discapacidad en los entornos sociales.    
      
      .py-4.py-md-5(titulo="Encuentros diferenciales de discapacidad" :icono="require('@/assets/curso/tema2/img14.svg')")
        .row
          .col-lg-5
            figure
              img.img-t.m-auto(src='@/assets/curso/tema2/img15.png', alt='Texto que describa la imagen')  
          .col-lg-7.mb-4.mb-lg-0
            h4 Encuentros diferenciales de discapacidad
            p Están diseñados para que participen las familias con niños, niñas y adolescentes con discapacidad o PcD y su objetivo es reunir en un solo espacio a los cuidadores o las cuidadoras con los niños, niñas y adolescentes con discapacidad o PcD de la familia para generar aprendizajes significativos que les permita reconocer y abordar situaciones que obstaculicen su desarrollo y el de cada uno de sus integrantes, promoviendo cambios que contribuyan a la protección integral de los niños, niñas y adolescentes con discapacidad o PcD, así como, la activación de redes de apoyo. 
    p.mb-5 Si bien la situación familiar que ha acompañado el desarrollo de este módulo no posee características de tipo rural o comunitario, se invita a considerar que en algún momento se deberá realizar una intervención colectiva comunitaria que pueda maximizar las capacidades familiares en este sentido, por ello el PAF deberá adaptar las actividades y metodologías a los contextos a donde llegue la modalidad y a la tipología de familias con las que se encuentre.
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema2/img15.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Es importante tener presente que los encuentros pueden tener una connotación especial, dado por algunas características particulares de las familias, entre ellas que alguno de sus integrantes se encuentre en condición de discapacidad, en ese sentido, el encuentro se denominará Inclusivo. Este tipo de encuentros están diseñados con el objetivo de sensibilizar sobre las acciones que apunten al fortalecimiento de capacidades de las familias y la inclusión efectiva de las personas con discapacidad en los entornos sociales (ICBF, 2022, p. 71).
   
    Separador
    #t_2_6 
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 2.6 Convergencia de oferta y gestión de redes

    .bg2
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p Dentro del acompañamiento psicosocial familiar, la modalidad Mi Familia, considera el desarrollo del componente de convergencia de oferta y gestión de redes a partir de las definiciones del ICBF (2021).
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema1/img4.svg').mx-auto

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-4.col-lg.my-2.my-lg-0.m-0.m-lg-2
        .row.bg16
          .col.p-4.h-100
            figure.mb-2.mb-lg-3
              img(src='@/assets/curso/tema2/img17.svg', style="width: 115px").m-auto
            p <b>Convergencia de oferta</b>
            p Considera el desarrollo de acciones para la garantía de derechos de las familias y sus integrantes a partir de la identificación, socialización, remisión, activación efectiva y seguimiento a la oferta de servicios de entidades tanto públicas como privadas de los departamentos, municipios y/o territorios de atención de la modalidad.
      .col-lg-4.col-lg.my-2.my-lg-0.m-0.m-lg-2
        .row.bg17
          .col.p-4.h-100
            figure.mb-2.mb-lg-3
              img(src='@/assets/curso/tema2/img18.svg', style="width: 115px").m-auto
            p <b>Gestión de redes</b>
            p Se entiende como las acciones destinadas a identificar, fortalecer y promover la participación en redes de apoyo sociales o comunitarias para identificar y fortalecer acciones y estrategias de protección, prevención y atención ante situaciones de dificultad, necesidad o que faciliten el logro de condiciones deseadas para mejorar la calidad de vida personal y familiar en los entornos en que habitan.
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-7(data-aos="fade-left")
        p Lo anterior implica que, desde el inicio de la implementación de la modalidad, se deba procurar por un acceso preferente de las familias (particularmente a familias con alta vulnerabilidad o con niños, niñas y adolescentes en servicios de protección (PARD- SRPA)) a la oferta de servicios tanto de programas sociales del Estado como de iniciativas privadas con cobertura nacional y territorial.
        p Todo lo anterior se considera fundamental para el fortalecimiento de capacidades, así como la gestión de redes de apoyo para generación de capital social, construcción de vínculos colectivos, participación, apoyo social y control ciudadano, factores que deben potenciarse mientras se desarrolle el acompañamiento.

      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p En este marco la inclusión cobra relevancia en el sentido que la modalidad Mi Familia considera la adopción de medidas diferenciadas que favorezcan a grupos poblacionales históricamente vulnerados por condiciones relacionadas con su género, su diversidad sexual, su pertenencia étnica, su discapacidad, u otras situaciones, y que, por ende, se encuentren en situaciones de desigualdad 
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 (ICBF, 2017, p. 5).
      
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema2/img19.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Así mismo, se acerca a la comprensión de la diversidad, no desde los márgenes y los límites con el otro que se denotan como diferente, sino desde entender que la realidad de las sociedades ocurre en múltiples y simultáneas condiciones cotidianas.
        p La modalidad entonces, reconoce la diversidad y la diferencia como oportunidad para fortalecer el ejercicio y la garantía de los derechos de todas las personas, especialmente aquellas poblaciones vulneradas. Así, mediante la participación en los procesos familiares, comunitarios, sociales y políticos, se promueve el fortalecimiento de sus habilidades y el acceso a servicios. (UNESCO, 2005) (CEPAL, 2008).
    
    .row.justify-content-center.mb-4(data-aos="zoom-in-down")
      .col-lg-8    
        .bloque-texto-a.color-secundario.p-4.p-md-5.d-none.d-lg-block
          .row.m-0.align-items-center.justify-content-between
            .col-lg-7
              .bloque-texto-a__texto.p-4
                p.m-0 El acompañamiento a las familias con una perspectiva psicosocial centra sus esfuerzos en fortalecer recursos y capacidades en el ámbito de la vida familiar buscando su cohesión y su inclusión social y productiva; de esta forma, lo psicosocial da cuenta de la interacción entre lo psíquico y lo social, lo individual y lo colectivo.

    .row.justify-content-center.mb-4.mb-lg-5(data-aos="zoom-in-down")
      .col-lg-8
        .bloque-texto-g.color-primario.color_bloque.p-3.p-sm-4.p-md-5.m_bloque.d-lg-none.d-md-block.tambq
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema2/img20.png')})`}"
          )
          .bloque-texto-g__texto.p-4.py-5
            p.m-0 En conclusión, el PAF o profesional de acompañamiento familiar debe desde la modalidad propender por la movilización del componente, según las necesidades y realidades de las familias, para lograr su fortalecimiento.
    p.mb-5 Para identificar esas realidades y necesidades, se deben tener en cuenta las indagaciones que se realicen en el primer momento de encuentro con las familias durante las conversaciones con las familias y movilizar procesos, por ejemplo: si en las primeras visitas se encuentra que uno de los integrantes de la familia es una persona con discapacidad, el PAF deberá realizar gestiones para lograr su vinculación al registro para la caracterización y localización de personas con discapacidad (RCLPCD); o si algún integrante no se encuentra vinculado al sistema de seguridad social, se realizarán gestiones para su inclusión y garantía de derecho a la salud. 
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 1]. Diagrama dimensiones y líneas de gestión - Convergencia de oferta y gestión de redes
    .row.justify-content-center
      .col-lg-12
        figure
          img(src='@/assets/curso/tema2/img21.png')
</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
