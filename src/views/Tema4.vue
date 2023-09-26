<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Cierre del acompañamiento psicosocial familiar, con cada despedida llegan nuevos comienzos 
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema4/img1.png').m-auto
      .col-lg-8(data-aos="fade-left")
        p Hasta aquí, la familia y el profesional de acompañamiento familiar han desarrollado todo el proceso de acompañamiento familiar psicosocial. La última visita constituye el cierre del proceso y se ha denominado ‘Con cada despedida llegan nuevos comienzos’ e invita a la familia a continuar avanzando en su proyecto de vida familiar e impulsar los proyectos de vida individuales de cada uno de sus integrantes.
        p Con esta cartilla finaliza el acompañamiento psicosocial familiar presencial de Mi Familia. Por esto, el propósito de esta sesión es motivar conversaciones en donde se visibilicen los avances, logros, experiencias y aprendizajes de la familia, haciendo énfasis en que las herramientas brindadas durante el acompañamiento, podrán acompañarlos para toda la vida. 
        p Los cierres y las despedidas son cruciales en el proceso de acompañamiento. 
    .row.justify-content-center.mb-5
      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img4.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.flex-center-text
              .row.justify-content-center
                .col-lg-12.mb-4
                  .bg6.p-2
                    h4.text-center.m-0 Primero
                p Es el momento para recordarle a la familia que, durante el proceso de acompañamiento, fueron los protagonistas y que los logros alcanzados durante este tiempo se consiguieron principalmente gracias a su disposición, dedicación y esfuerzo. 
      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img2.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.flex-center-text
              .row.justify-content-center
                .col-lg-12.mb-4
                  .bg6.p-2
                    h4.text-center.m-0 Segundo
                p El cierre es el momento oportuno para evidenciar los avances de la familia, esto mediante la comparación del diagnóstico (medición de habilidades) inicial y actual. 
      .col-lg-4.col-md-8.mb-4
        .tarjeta.tarjeta-flip.color-secundario(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema4/img3.png')})`}")
            .tarjeta-flip__contenido.p-4.p-xl-5.flex-center-text
              .row.justify-content-center
                .col-lg-12.mb-4
                  .bg6.p-2
                    h4.text-center.m-0 Finalmente
                p Teniendo en cuenta estos elementos, es importante que la familia reconozca su compromiso permanente en relación con seguir trabajando de manera conjunta con sus integrantes, en aras de fortalecer sus capacidades de forma sostenible en el tiempo.
    .row.mb-5.justify-content-center.align-items-center(data-aos="fade-right")
      .col-lg-8(data-aos="fade-left")
        p Asimismo, es fundamental que la familia reconozca que en cualquier momento puede vivir situaciones complejas y que siempre puede hacer uso de la caja de herramientas que brindó Mi Familia para afrontarlas. Adicionalmente, en esta visita es necesario aplicar de nuevo los instrumentos de medición de habilidades. Estos instrumentos se utilizan para medir las habilidades de las familias referentes a cuatro dimensiones: autoeficacia parental, regulación emocional, disciplina positiva y vinculación tanto de padres, madres y cuidadores como de los niños, niñas y adolescentes (mayores de 12 años); recordando que estos instrumentos fueron aplicados en la visita inicial.
        p Por último, en esta visita se deberá retomar el mapa de pertenencia o ecomapa con el propósito de identificar las redes de apoyo activadas, fortalecidas y las gestiones realizadas durante el acompañamiento, así como las acciones de la familia para seguir la movilización de su sistema de apoyo. 
      .col-lg-4.mb-4.mb-lg-0
        figure
          img.img-t(src='@/assets/curso/tema4/img5.png').m-auto
    p.mb-5 Se debe hacer énfasis en las redes de apoyo porque es en ellas que se encuentra soporte luego de la intervención, también indagar y proyectarse sobre lo que haría la familia, con los recursos que ha identificado y que ha sumado, en otro momento en que enfrente una situación de crisis familiar. Enfatizar en que la familia se proyecte a resolver por sí misma los conflictos que puedan presentarse en la convivencia en el futuro y a visualizarlos como una oportunidad de cambio positivo.
    p.mb-5.text-bold La siguiente figura es un ejemplo de la visita de cierre de acompañamiento psicosocial familiar Mi Familia.
    .titulo-sexto.color-acento-contenido
      p.mb-0 #[b Figura 3]. Visita de cierre del acompañamiento psicosocial familiar Mi Familia
    .row.justify-content-center.mb-5
      .col-lg-12
        figure
          img(src='@/assets/curso/tema4/img6.png')
   
    .bg9.p-2
      .row.align-items-center.p-3
        .col-lg.mb-4.mb-lg-0
          p.mb-0 Para el caso de familias con pertenencia étnica, con personas con discapacidad, migrantes, entre otras características, tener presente los acuerdos y ajustes razonables que se realizaron en el proceso de acompañamiento y revisar de manera conjunta con estas familias el resultado de aprendizaje del acompañamiento especializado. Para el caso de las familias étnicas se debe tener en consideración el contacto que se estableció con las autoridades propias, por tanto, con ellas también se hace pertinente socializar la metodología o pasos para el cierre de la atención brindada, según la guía con las orientaciones para la atención a familias con pertenencia étnica. 


</template>

<script>
export default {
  name: 'Tema3',
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
