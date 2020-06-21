<template>
  <div @click="activate" class="tag">
    <span class="tag__text">
      {{ text }}
    </span>
  </div>
</template>
<script>
export default {
  name: "Tag",
  props: ["text", "size"],
  methods: {
    activate() {
      this.$emit("changeState(text)");
    }
  }
};
</script>
