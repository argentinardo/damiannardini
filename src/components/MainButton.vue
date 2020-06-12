<template>
  <div class="main-button">
    <button :type="type" :href="link" class="main-button__link">
      {{ text }}
    </button>
  </div>
</template>

<script>
export default {
  props: ["role", "text", "link", "type"]
};
</script>
