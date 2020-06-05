<template>
  <div class="card">
    <h1 class="card__title" v-if="title">
      <slot name="title"></slot>
    </h1>
    <p v-if="paragraph" class="card__paragraph">
      <slot name="paragraph"></slot>
    </p>
    <slot v-if="skills" name="skills"></slot>
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["title", "paragraph", "skills"]
};
</script>

<style lang="scss">
.card {
  background-color: $gray--darker;
  width: calcRem(360px);
  margin: 0 auto calcRem(8px);
  border-radius: calcRem(3px);
  padding: calcRem(16px) calcRem(16px) calcRem(25px) calcRem(16px);
}
.card__title {
  font-size: calcRem(16px);
  color: $secondary--light;
  margin: 0;
  font-weight: 400;
}
.card__paragraph {
  margin-top: 0;
  margin-bottom: 0;
  font-size: calcRem(14px);
}
</style>
