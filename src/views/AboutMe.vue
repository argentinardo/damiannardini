<template>
  <div class="about-me">
    <hero></hero>
    <card :paragraph="true">
      <template slot="paragraph">
        Sobre mí
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "AboutMe",
  components: {
    Card,
    Hero
  }
};
</script>
