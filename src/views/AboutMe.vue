<template>
  <div class="about-me">
    <card :paragraph="true">
      <template slot="paragraph">
        Sobre mí
      </template>
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
