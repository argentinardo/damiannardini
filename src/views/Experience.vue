<template>
  <div class="experience">
    <hero></hero>
    <card :paragraph="true">
      <template slot="paragraph">
        Experiencia
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Experience",
  components: {
    Card,
    Hero
  }
};
</script>
