<template>
  <div class="Drawing">
    <hero></hero>
    <card :paragraph="true">
      <template slot="paragraph">
        Ilustraciones
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "Drawing",
  components: {
    Card,
    Hero
  }
};
</script>
