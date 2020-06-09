<template>
  <div class="card">
    <h1 class="card__title" v-if="title">
      <slot name="title"></slot>
    </h1>
    <p v-if="paragraph" class="card__paragraph">
      <slot name="paragraph"></slot>
    </p>
    <slot v-if="chips" name="chips"></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["title", "paragraph", "chips"]
};
</script>
