<template>
  <span
    :class="{ 'tag--disabled': classTagDisabled, ' tag__text': true }"
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
      classTagDisabled: false
    };
  },
  methods: {
    tagSelected() {
      this.classTagDisabled = !this.classTagDisabled;
      this.$emit("selectingTag");
    }
  }
};
</script>
