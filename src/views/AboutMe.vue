<template>
  <div class="about-me">
    <card>
      <p class="card__paragraph">
        Nací en Argentina, actualmente resido en Barcelona. Trabajo en
        tecnologías web desde hace más de 10 años actualmente como front-end /
        UI. Esto me exigió una constante capacitación tanto a cargo de las
        empresas donde trabajé como de forma personal. He incursionado en el
        diseño gráfico y digital creando piezas de animación tanto para web, cd
        interactivos y video. También cuento con formación en ilustración y
        animación 3D y tradicional. Cada nuevo proyecto es un desafío al cual me
        gusta abordar con mi experiencia e incursionando nuevas posibilidades.
        Siempre estoy abierto a nuevos retos,<router-link
          class="card__link"
          to="/Contact"
          >hablamos?</router-link
        >
      </p>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "AboutMe",
  components: {
    Card
  }
};
</script>
