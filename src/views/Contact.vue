<template>
  <div class="contact">
    <hero></hero>
    <card :paragraph="true">
      <template slot="paragraph">
        Contacto
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Contacto",
  components: {
    Card,
    Hero
  }
};
</script>
