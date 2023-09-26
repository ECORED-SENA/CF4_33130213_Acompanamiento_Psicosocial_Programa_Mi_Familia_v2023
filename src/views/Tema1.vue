<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 ¿Cómo inicia el proceso de acompañamiento? 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema1/img1.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Este apartado retoma la relación de los tipos de acompañamiento con las familias que constituyen la población objetivo de Mi Familia y la forma como el inicio del proceso busca dar respuesta a esa priorización y a las necesidades, expectativas e intereses de las familias vinculadas.
        p Se centrará la atención en cómo la focalización, búsqueda y vinculación de la modalidad se enfocan en atender las familias priorizadas y cómo el proceso de acercamiento, caracterización, diagnóstico y construcción de acuerdos con la familia, orienta la construcción conjunta del plan de acompañamiento.  
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-2
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            p Como se ha venido señalando, Mi Familia es un programa de acompañamiento familiar psicosocial que se estructura retomando elementos conceptuales y teóricos del modelo ecosistémico, del enfoque interseccional de derechos y del enfoque de curso de vida, entre otros. El encuentro de estos tres enfoques caracteriza, ubica y limita el proceso del acompañamiento psicosocial donde participan tres actores principales: las familias que se encuentran en el centro del proceso, el profesional de acompañamiento familiar y las herramientas metodológicas que dinamizan la interacción entre los dos primeros.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            .h5.mb-0 Naciones Unidas, 2014, p. 10
      .col-lg-3(data-aos="fade-left")
        figure
          img.img-t.m-auto(src='@/assets/curso/tema1/img2.svg')
    
    .bg9.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema1/img3.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Pensando en posibilitar un acercamiento oportuno a las familias y las situaciones complejas que viven, partiendo de sus capacidades y potencialidades, así como de sus integrantes, el proceso de acompañamiento en <b>Mi Familia inicia con la identificación de las familias potenciales beneficiarias y que desean hacer parte de la modalidad. </b>
   
    Separador
    #t_1_1
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.1 Focalización de familias por criterios de identificación y selección

    .bg2
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p La modalidad Mi Familia está dirigida a las familias con niños, niñas y adolescentes (NNA) con las siguientes características, de acuerdo con el lineamiento técnico del ICBF (2021):  
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema1/img4.svg').mx-auto
  
    .row.justify-content-center.mb-4.mb-lg-5
      .col-lg-4.col-md-6.mb-5.mb-lg-0.pb-4.pb-lg-0(data-aos="fade-right")
        .bg_04.p-4
          figure
            img.img-t.mx-auto.m_top1(src='@/assets/curso/tema1/img5.svg')                     
        .bg_05.p-4
          .row.justify-content-center
            .col-lg-11 
              p.text-bold Familias con necesidades de acompañamiento familiar preventivo
              p Familias con niños, niñas y/o adolescentes con alto riesgo de vulneración de derechos que estén o hayan sido atendidos por modalidades o servicios de promoción o prevención del ICBF, en particular de las Direcciones de Primera Infancia, Infancia, Adolescencia y Juventud o Nutrición; o familias vulnerables con integrantes con discapacidad; o familias vulnerables que requieran acompañamiento y fortalecimiento para la garantía de derechos y desarrollo integral de los NNA. 
      .col-lg-4.col-md-6(data-aos="fade-left")
        .bg_06.p-4
          figure
            img.img-t.m_top2(src='@/assets/curso/tema1/img6.svg') 
        .bg_07.p-4
          .row.justify-content-center
            .col-lg-11 
              p.text-bold Familias con necesidades de acompañamiento familiar intensivo
              p Familias con niños, niñas y/o adolescentes que estén o hayan estado en las modalidades priorizadas del Proceso Administrativo de Restablecimiento de Derechos -PARD- y/o adolescentes y jóvenes que estén o hayan estado en el Sistema de Responsabilidad Penal para Adolescentes -SRPA.
      
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      
      .col-lg-8(data-aos="fade-left")
        p Para lograr ubicar a estas familias, la modalidad despliega una serie de acciones encaminadas a la focalización para la identificación y selección de la población sujeta de atención, dispuesta en el manual operativo (ICBF, Manual Operativo Mi Familia, 2022).
        p A partir de los criterios de identificación que se describen en el Manual Operativo de Mi Familia, se construye el listado de pre-focalización de familias potenciales, el cual constituye el insumo esencial para posteriormente realizar la búsqueda y vinculación de las familias en territorio por parte de los operadores y en particular de los profesionales de acompañamiento familiar.
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema1/img4.png').m-auto
    .row.justify-content-center
      .col-12.col-lg-8.p-5
        .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema1/img5.png')})`}"
          )
          .bloque-texto-g__texto.p-4
            p.mb-0 En el proceso de focalización se identifican las familias con mayores necesidades para un acompañamiento familiar psicosocial que busca la prevención y disminución de los riesgos de vulneración de derechos de los NNA, garantizando la protección integral de todos sus integrantes.  
    p.mb-5 En el caso de Mi Familia, este proceso se implementa mediante una focalización territorial, micro focalización y selección o priorización de las familias potenciales de la modalidad. A continuación, se describe brevemente el propósito de cada uno de estos pasos.  
    TabsA.color-acento-botones.mb-5
      .tarjeta.color-acento-botones--borde.p-4(titulo="1. Focalización territorial")
        h4.mb-4 1. Focalización territorial
        .col-xl-10
          p Para la focalización de Mi Familia Urbana se realiza una selección de los municipios según variables para identificar la concentración de familias y riesgos asociados a la vulneración de derechos. La focalización de Mi Familia Rural, por su parte, se seleccionan los municipios según dos variables: i) Municipios PDET y ii) variables de riesgo a nivel municipal.
      .tarjeta.color-acento-botones--borde.p-4(titulo="2. Micro focalización territorial")
       
        h4.mb-4 2. Micro focalización territorial
        .col-xl-10
        p Permite identificar aquellas áreas al interior de los municipios donde se concentran las familias que hacen parte de la población objetivo de Mi Familia. Este ejercicio tiene como objetivo principal la identificación a nivel municipal de las áreas geográficas o espacios donde se presenta mayor concentración de la población objetivo de Mi Familia Urbana o de Mi Familia Rural, según sea el caso. 

        p El operador la realiza a través de la revisión de las bases de datos, estableciendo los barrios, localidades y/o comunas donde se concentran las familias, así como el uso de mapas de los municipios que permitan a partir de zonas de calor, identificar dichas concentraciones.
          
      .tarjeta.color-acento-botones--borde.p-4(titulo="3. Selección de familias")
        h4.mb-4 3. Selección de familias
        .col-xl-10
          p Posterior a la focalización y micro focalización territorial, se seleccionan las familias, frente a las cuales se realiza previamente un análisis de necesidades de atención para ser consideradas como beneficiarias de la modalidad. Los criterios de selección de familias para la modalidad Mi Familia se encuentran en el Manual Operativo para su consulta.
    p.mb-5 En el caso de Mi Familia, este proceso se implementa mediante una focalización territorial, micro focalización y selección o priorización de las familias potenciales de la modalidad. A continuación, se describe brevemente el propósito de cada uno de estos pasos.  
    .row.justify-content-center.align-items-center.mb-5          
      .col-lg-12.py-4
        .tarjeta--azul1.p-4.p-md-5
          SlyderA(tipo="b").color_slyder-a_botones
            .row.justify-content-center.align-items-center        
              .col-lg-6.mb-4.mb-md-0
                p En el primer mapa se visualiza como se ubican familias con niñas y/o niños en servicios de primera infancia en el municipio de Villavicencio. Los puntos del mapa cambian de color y tamaño según el índice de pobreza multidimensional (IPM) que presenta cada usuario/a en la base de datos de SISBEN y del ICBF. Este mapa nos permite visualizar la ubicación donde se encuentran las familias de los niños y niñas de primera infancia que enfrentan condiciones de pobreza y vulnerabilidad mayor. 
              .col-lg-6
                img.img-t.mb-3(src='@/assets/curso/tema1/img6.png', alt='') 
                fitcaption <b>Mapa 1 - IPM por UDS en Villavicencio.</b> Fuente: Guía de focalización y microfocalización Mi Familia. ICBF, 2021.
            .row.justify-content-center.align-items-center              
              .col-lg-6.mb-4.mb-md-0
                p A partir de la identificación de las familias con niños/as de primera infancia, se establecen zonas de calor como se evidencia en el segundo mapa; es decir, se concentran zonas en el territorio donde se localizan las familias con mayores índices de pobreza multidimensional y que cumplen con los criterios de focalización de Mi Familia. Este mapa sirve para visualizar y en el momento de la búsqueda y operativos de campo, se priorice por estas zonas para encontrar a las familias. 
              .col-lg-6
                img.img-t.mb-3(src='@/assets/curso/tema1/img7.png', alt='')
                fitcaption <b>Mapa 2 - Generación de Categorías de Agrupación.</b> Fuente: Guía de focalización y microfocalización Mi Familia. ICBF, 2021.
            .row.justify-content-center.align-items-center             
              .col-lg-6.mb-4.mb-md-0
                p A partir del mapa de calor (mapa 2), se identifican unidades de servicio (UDS) y se realiza una priorización de estas, para acercarse al territorio y ofrecer la modalidad Mi Familia. Es decir, se priorizan las familias de los niños y niñas de primera infancia que asisten a hogares comunitarios, teniendo en cuenta, que este servicio no cuenta con un acompañamiento psicosocial familiar intencionado; además que estas familias presentan unas condiciones de pobreza de la familia que constituyen un estresor adicional, que puede influir en la crianza y promoción del desarrollo de los niños y las niñas al interior de la familia.  En este caso, las UDS que se encuentran en los territorios priorizados reciben el mismo nivel de prioridad que el territorio donde se ubican.
              .col-lg-6
                img.img-t.mb-3(src='@/assets/curso/tema1/img8.png', alt='')
                fitcaption <b>Mapa 3 - Asignación de las UDS de Acuerdo con Ubicación, usando las categorías territoriales.</b> Fuente: Guía de focalización y microfocalización Mi Familia. ICBF, 2021.
            .row.justify-content-center.align-items-center             
              .col-lg-6.mb-4.mb-md-0
                p La totalidad de los beneficiarios de las UDS tendrán el mismo nivel de prioridad que la UDS. Es decir, si una UDS se encuentra en un territorio cuya prioridad es MUY ALTA, la UDS quedará con nivel de priorización MUY ALTA, y todos los beneficiarios de esta UDS a su vez tendrán el mismo nivel de prioridad MUY ALTA dentro de los potenciales beneficiarios de los servicios priorizados de primera infancia. En la gráfica, se muestra un ejemplo en el caso de Villavicencio, allí se observa cómo la UDS tiene el nivel de prioridad dependiendo de su ubicación, el cual fue mapeado y graficado a partir del cruce de información como es el índice de pobreza multidimensional, puntaje Sisbén y sí se encuentra en hogar comunitario ICBF; este último al ser un servicio que no cuenta con talento humano para desarrollar acompañamiento psicosocial familiar personalizado. 
              .col-lg-6
                img.img-t.mb-3(src='@/assets/curso/tema1/img9.png', alt='')
                fitcaption <b>Ejemplo clasificación UDS.</b> Fuente: Guía de focalización y microfocalización Mi Familia. ICBF, 2021.
            .row.justify-content-center.align-items-center             
              .col-lg-6.mb-4.mb-md-0
                p Aunque se muestran solo algunas de las UDS en el municipio, se puede observar que la prioridad está asignada a la Unidad de Servicio, y así por ejemplo las familias de los niños y niñas que asisten a la UDS CARITAS FELICES UNO, tendrán nivel de prioridad MUY ALTA; mientras que los beneficiarios que asistan a la UDS MIS BURBUJITAS tendrán nivel de prioridad MEDIA.
              .col-lg-6
                img.img-t.mb-3(src='@/assets/curso/tema1/img9.png', alt='')
                fitcaption <b>Ejemplo clasificación UDS.</b> Fuente: Guía de focalización
    .row.justify-content-center.align-items-center.mb-5.py-5           
      .col-lg-10
        .bg11
          .tarjeta.position-relative.rounded-0.p-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-8.my-3
                p(data-aos="fade-down") En una lectura ecosistémica de la familia es útil explicitar el mapa completo de sus miembros a lo largo de al menos tres generaciones, en el cual se referencian los allegados significativos de cada integrante y las características de las relaciones entre ellos. En estos mapas también se desglosan los acuerdos y las prácticas del sistema familiar, y la forma cómo dan manejo a situaciones desafiantes. 
                p Para construir un genograma es necesario tener en cuenta tres fases, de acuerdo con Feixas, Muñoz & Montesano (2012):
              .col-lg-4
                .imagen-absolute2
                  img.img-t.mx-auto(data-aos="zoom-in")(src='@/assets/curso/tema1/img10.svg', alt='')
    
    Separador
    #t_1_2
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.2 Búsqueda y vinculación de familias 
    .bg2
      .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
        .col-lg-11(data-aos="fade-left")
          p En esta etapa, el operador realiza la búsqueda y vinculación de las familias en territorio. Se prevé que esta etapa transcurra en aproximadamente ocho semanas. Este proceso deviene de la focalización que realiza el operador designado para cada territorio, tal como se presenta a continuación, con base en el Manual Operativo Mi Familia del ICBF (2022, p. 40):
        .col-lg-1.mb-4.mb-lg-0
          figure
            img.img-t(src='@/assets/curso/tema1/img11.svg').mx-auto
    .bg8.mb-5 
      .row.justify-content-center.align-items-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.d-none.d-sm-flex.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img12.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
            .tarjeta.color-cuarto1.p-3(x="16.4%" y="67.3%" numero="+")
              p <b>Convocatoria</b> 
              p.mb-0 El operador tendrá que convocar a las familias reportadas en la base de datos de pre-focalización para la modalidad Mi Familia Urbana, a una jornada de socialización en articulación con las Direcciones Misionales y otras entidades del nivel territorial.
            .tarjeta.color-cuarto1.p-3(x="45%" y="5%" numero="+")
              p <b>Jornada de socialización</b> 
              p.mb-3 En estas jornadas, se presenta la modalidad y se motiva a las familias a participar y realizar el diligenciamiento y firma del Acuerdo de Vinculación.
            .tarjeta.color-cuarto1.p-3(x="77.7%" y="5%" numero="+")
              p <b>Agendamiento</b> 
              p.mb-0 Posterior a la firma, se realiza la actualización de datos de contacto y se agenda la primera visita en domicilio para el inicio del proceso de acompañamiento psicosocial. 
            .tarjeta.color-cuarto1.p-3(x="43.6%" y="94.8%" numero="+")
              p <b>Caso de inasistencia</b> 
              p.mb-0 En caso que la familia no asista a las jornadas de socialización por alguna circunstancia, el operador deberá realizar al menos dos acciones de búsqueda directa presencial en días distintos, para informarles a las familias sobre su postulación para participar en la modalidad y proponerles su vinculación a la misma.
            .tarjeta.color-cuarto1.p-3(x="77.7%" y="95%" numero="+")
              p <b>Acciones a tomar</b> 
              p.mb-0 Si no encuentra a la familia, el operador puede procurar su ubicación a través de llamadas telefónicas y mensajes de texto; en caso que no se logre ubicar a la familia una vez surtida la búsqueda, podrá ser sustituida por otra que se encuentre registrada en la base de datos.
            .tarjeta.color-cuarto1.p-3(x="98%" y="67%" numero="+")
              p <b>Registro</b> 
              p.mb-0 Las situaciones presentadas en el proceso de búsqueda y vinculación de las familias deben registrarse y reportarse por parte del operador en el Reporte Huellas.   
  
    .row.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-flex.d-sm-none.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img13.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
          .tarjeta.color-cuarto1.p-3(x="62.4%" y="7.3%" numero="+")
            p <b>Convocatoria</b> 
            p.mb-0 El operador tendrá que convocar a las familias reportadas en la base de datos de pre-focalización para la modalidad Mi Familia Urbana, a una jornada de socialización en articulación con las Direcciones Misionales y otras entidades del nivel territorial.
          .tarjeta.color-cuarto1.p-3(x="48%" y="39%" numero="+")
            p <b>Jornada de socialización</b> 
            p.mb-3 En estas jornadas, se presenta la modalidad y se motiva a las familias a participar y realizar el diligenciamiento y firma del Acuerdo de Vinculación.
          .tarjeta.color-cuarto1.p-3(x="84.7%" y="39%" numero="+")
            p <b>Agendamiento</b> 
            p.mb-0 Posterior a la firma, se realiza la actualización de datos de contacto y se agenda la primera visita en domicilio para el inicio del proceso de acompañamiento psicosocial. 
          .tarjeta.color-cuarto1.p-3(x="48.6%" y="68.8%" numero="+")
            p <b>Caso de inasistencia</b> 
            p.mb-0 En caso que la familia no asista a las jornadas de socialización por alguna circunstancia, el operador deberá realizar al menos dos acciones de búsqueda directa presencial en días distintos, para informarles a las familias sobre su postulación para participar en la modalidad y proponerles su vinculación a la misma.
          .tarjeta.color-cuarto1.p-3(x="84.7%" y="69%" numero="+")
            p <b>Acciones a tomar</b> 
            p.mb-0 Si no encuentra a la familia, el operador puede procurar su ubicación a través de llamadas telefónicas y mensajes de texto; en caso que no se logre ubicar a la familia una vez surtida la búsqueda, podrá ser sustituida por otra que se encuentre registrada en la base de datos.
          .tarjeta.color-cuarto1.p-3(x="60%" y="93%" numero="+")
            p <b>Registro</b> 
            p.mb-0 Las situaciones presentadas en el proceso de búsqueda y vinculación de las familias deben registrarse y reportarse por parte del operador en el Reporte Huellas.          
    .bg1.p-2.mb-5
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/tema1/img7.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 El Reporte Huellas corresponde a variables relacionadas en la base de datos de focalización como son actualización de datos básicos de identificación y de ubicación; esta información da cuenta del proceso de identificación, búsqueda y vinculación de cada familia, así mismo permite registrar las observaciones que se den durante esta fase.
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8(data-aos="fade-left")
        p Una vez ubicadas las familias en sus domicilios, el operador, a través de los profesionales de las UAFU y UAFR, presenta la modalidad y hace firmar el Acuerdo de Vinculación, en caso tal que la familia no lo haya firmado. Así mismo, la UAFU y UAFR presentan el enfoque diferencial de discapacidad y cómo en el proceso de atención se involucrará a familias con y sin PcD.
        p Cuando ya se tienen las familias beneficiarias, es decir, que firmaron el acuerdo de vinculación y hacen parte de la población a atender, se procede con el inicio del acompañamiento, el cual implica el desarrollo de una visita inicial en donde se espera:
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema1/img14.png').m-auto
    .row.mb-5
      .col-lg-12
      figure
          img.img-t(src='@/assets/curso/tema1/img15.svg').m-auto
    p.mb-5 Para entender el proceso de acompañamiento, a continuación, se presentará la situación de una familia, que ha sido previamente focalizada y con la cual se pretende motivar a la identificación del tipo y proceso de acompañamiento. 
    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/Dq3Hxmdf2FE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    Separador
    #t_1_3
    .titulo-segundo.color-acento-contenido(data-aos="fade-right")
      h2 1.3 Identificación tipo de acompañamiento psicosocial (preventivo, intensivo o discapacidad)
    
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema1/img18.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Una vez se ha visualizado el caso de la familia González-Villanueva, se invita a analizar y ubicar la situación presentada, un tipo de acompañamiento de acuerdo con lo identificado por la modalidad Mi Familia, por ello, es preciso que el/la profesional de acompañamiento familiar le indique a la familia el tipo de acompañamiento que recibirá durante el desarrollo de la modalidad. 
        p Para lograr lo anterior, a continuación, se presenta con precisión el alcance de cada tipo de acompañamiento considerado en la modalidad Mi Familia, y de esta manera facilitar la ubicación de la familia en el acompañamiento que más se ajusta a su situación particular.
    .bg8.mb-5 
      .row.mb-5.justify-content-center.align-items-center
        .col-lg-10
          ImagenInfografica.color-acento-botones.d-none.d-sm-flex.color-acento-botones.mb-5
            template(v-slot:imagen)
              figure
                img(src='@/assets/curso/tema1/img16.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
            .tarjeta.color-cuarto1.p-3(x="14%" y="103%" numero="+")
              p <b>Familiar intensivo</b> 
              p.mb-0 Las familias con necesidades de acompañamiento familiar intensivo Contempla 13 visitas en el domicilio, incluida la de cierre y 4 encuentros familiares. Si una vez vinculada la familia con necesidad de acompañamiento intensivo, el operador identifica que existe un integrante con discapacidad, las trece visitas deberán incluir 2 visitas diferenciales en discapacidad y se adicionan 2 encuentros diferenciales de discapacidad.
            .tarjeta.color-cuarto1.p-3(x="35%" y="104%" numero="+")
              p <b>Familiar preventivo</b> 
              p.mb-0 Las familias con necesidades de acompañamiento familiar preventivo contempla 9 visitas en domicilio incluida la de cierre y 4 encuentros familiares. Para las familias con integrantes con discapacidad, las nueve visitas incluyen 2 visitas diferenciales en discapacidad y se adicionan 2 encuentros diferenciales de discapacidad.
            .tarjeta.color-cuarto1.p-3(x="75.7%" y="103%" numero="+")
              p <b>Acompañamiento familiar</b> 
              p.mb-0 Las familias con necesidades de acompañamiento familiar contempla 9 visitas en domicilio y 6 encuentros comunitarios. Para las familias con integrantes con discapacidad, las nueve visitas incluyen 2 visitas diferenciales de discapacidad y se adiciona un encuentro comunitario diferencial de discapacidad.

    .row.justify-content-center.align-items-center
      .col-lg-10
        ImagenInfografica.color-acento-botones.d-flex.d-sm-none.color-acento-botones.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema1/img17.svg', alt='Texto que describa la imagen')(data-aos="fade-right")
          .tarjeta.color-cuarto1.p-3(x="34.4%" y="47.3%" numero="+")
            p <b>Familiar intensivo</b> 
            p.mb-0 Las familias con necesidades de acompañamiento familiar intensivo Contempla 13 visitas en el domicilio, incluída la de cierre y 4 encuentros familiares. Si una vez vinculada la familia con necesidad de acompañamiento intensivo, el operador identifica que existe un integrante con discapacidad, las trece visitas deberán incluir 2 visitas diferenciales en discapacidad y se adicionan 2 encuentros diferenciales de discapacidad.
          .tarjeta.color-cuarto1.p-3(x="66%" y="47%" numero="+")
            p <b>Familiar preventivo</b> 
            p.mb-0 Las familias con necesidades de acompañamiento familiar preventivo contempla 9 visitas en domicilio incluída la de cierre y 4 encuentros familiares. Para las familias con integrantes con discapacidad, las nueve visitas incluyen 2 visitas diferenciales en discapacidad y se adicionan 2 encuentros diferenciales de discapacidad.
          .tarjeta.color-cuarto1.p-3(x="49.7%" y="91%" numero="+")
            p <b>Acompañamiento familiar</b> 
            p.mb-0 Las familias con necesidades de acompañamiento familiar contempla 9 visitas en domicilio y 6 encuentros comunitarios. Para las familias con integrantes con discapacidad, las nueve visitas incluyen 2 visitas diferenciales de discapacidad y se adiciona un encuentro comunitario diferencial de discapacidad.
    .row.justify-content-center.align-items-center          
      .col-lg-10
        .bg10
          .tarjeta.position-relative.rounded-0.p-4(data-aos="flip-down")
            .row.justify-content-center.align-items-center
              .col-lg-4
                .imagen-absolute1
                  img.img-t.mx-auto(data-aos="zoom-in")(src='@/assets/curso/tema2/img19.svg', alt='')
              .col-lg-8.my-3
                p(data-aos="fade-down") Para el caso anterior, la profesional de acompañamiento familiar, Adriana Padilla, ha identificado que la familia requiere un acompañamiento Intensivo, el cual correspondería a trece visitas domiciliarias incluida la de cierre y cuatro encuentros familiares. Las temáticas o énfasis de cada visita dependerán de la información recopilada a partir de las dos primeras visitas y de la aplicación de los instrumentos de caracterización y diagnóstico.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
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
