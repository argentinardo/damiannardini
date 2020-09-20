<template>
  <div class="image-slide" v-if="show">
    <div class="image-slide__title">{{ title }}</div>
    <div class="image-slide__prev"></div>
    <img class="image-slide" :src="url" alt="" />
    <div class="image-slide__next active"></div>
    <div class="image-slide__description">{{ description }}</div>
    <tag
      class="tag__text--small"
      v-for="el in tags"
      :key="el.title"
      :text="el"
      size="normal"
    ></tag>
  </div>
</template>

<script>
import Tag from "../components/Tag";
export default {
  data() {
    return {
      show: false
    };
  },
  name: "ImageSlides",
  components: { Tag },
  props: ["visible", "tags", "title", "description", "url"]
};
</script>
