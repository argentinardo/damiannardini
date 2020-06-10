<template>
  <div class="contact">
    <card :paragraph="true">
      <template slot="paragraph">
        Contacto
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Contacto",
  components: {
    Card
  }
};
</script>
