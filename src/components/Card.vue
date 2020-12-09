<template>
  <div class="card" :style="`flex-direction: ${flex}`">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["flex"]
};
</script>
