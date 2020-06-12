<template>
  <div class="contact">
    <card>
      <p class="card__paragraph">
        Contacto
      </p>
      <main-button text="Enviar" link="#"></main-button>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "Contacto",
  components: {
    Card,
    MainButton
  }
};
</script>
