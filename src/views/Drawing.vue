<template>
  <div class="Drawing">
    <card :paragraph="true">
      <template slot="paragraph">
        Ilustraciones
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Drawing",
  components: {
    Card
  }
};
</script>
