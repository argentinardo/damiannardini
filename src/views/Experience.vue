<template>
  <div class="experience">
    <card :paragraph="true">
      <template slot="paragraph">
        Experiencia
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Experience",
  components: {
    Card
  }
};
</script>
