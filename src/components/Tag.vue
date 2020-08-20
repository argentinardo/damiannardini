<template>
  <span
    :class="{ 'tag--active': classTagActive, ' tag__text': true }"
    @click="tagSelected"
  >
    {{ text }}
  </span>
</template>
<script>
export default {
  name: "Tag",
  props: ["text", "size"],
  data() {
    return {
      classTagActive: false
    };
  },
  methods: {
    tagSelected() {
      this.classTagActive = !this.classTagActive;
      this.$emit("selectingTag");
    }
  }
};
</script>
