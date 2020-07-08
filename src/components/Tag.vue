<template>
  <div class="tag">
    <span @click="tagSelected" class="tag__text">
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: "Tag",
  props: ["text", "size"],
  methods: {
    tagSelected() {
      this.$emit("selectingTag");
    }
  }
};
</script>
