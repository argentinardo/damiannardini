<template>
  <div class="card" :style="`flex-direction: ${flex}`">
    <slot></slot>
    <slot name="slide"></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["flex"]
};
</script>
