<template>
  <div class="container__slider" v-if="show">
    <div
      v-for="imageItem in imagesData"
      :key="imageItem.title"
      class="slider__image"
    >
      <div class="image__title">{{ imageItem.title }}</div>
      <img class="image" :src="imageItem.url()" :alt="imageItem.title" />
      <a href="#" class="image__button image__prev">anterior</a>
      <a href="#" class="image__button image__next active">siguiente</a>
      <div class="image__description">{{ imageItem.description }}</div>
      <!-- <tag
        class="tag__text--small"
        v-for="el in tags"
        :key="el.title"
        :text="el"
        size="normal"
      ></tag> -->
    </div>
  </div>
</template>

<script>
// import Tag from "../components/Tag";
export default {
  data() {
    return {
      show: true
    };
  },
  name: "ImageSlides",
  // components: { Tag },
  props: ["imagesData", "currentPosition"]
};
</script>
