<template>
  <div class="main-button">
    <button :href="link" class="main-button__link">{{ text }}</button>
  </div>
</template>

<script>
export default {
  props: ["text", "link"]
};
</script>
