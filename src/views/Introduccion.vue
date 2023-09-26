<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-right")
        p.mb-0 Los elementos epistemológicos, teóricos, conceptuales y enfoques ecosistémico, interseccional, de curso de vida, entre otros, fundamentan la apuesta estratégica de Mi Familia: brindar un acompañamiento psicosocial personalizado - ajustado a cada familia, movilizado y dinamizado con las herramientas metodológicas de la modalidad. En el siguiente video se exponen con mayor claridad, las temáticas a desarrollar en este componente.

    figure(data-aos="zoom-in").mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/jREGcKtjMfA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        
    .bg1
      .row.align-items-center.p-3
        .col-lg-auto
          figure
            img.mb-3(src='@/assets/curso/temas/img01.svg', style="width: 80px").m-auto
        .col-lg.mb-4.mb-lg-0
          p.mb-0 <b>Objetivo:</b> desarrollar habilidades para el diseño e implementación de estrategias de acompañamiento psicosocial a las familias beneficiarias.
      
          
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
