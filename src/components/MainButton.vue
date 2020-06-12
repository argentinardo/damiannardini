<template>
  <div class="main-button">
    <a :href="link" class="main-button__link">{{ text }}</a>
  </div>
</template>

<script>
export default {
  props: ["text", "link"]
};
</script>
