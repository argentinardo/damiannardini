<template>
  <div class="Drawing">
    <card flex="row">
      <tag
        @click="tagFilter('category')"
        v-for="category in getCategoryOnce"
        :key="category.index"
        :text="category"
        size="normal"
      ></tag>
    </card>
    <card>
      <img
        class="drawing__image"
        v-for="image in images"
        :key="image.title"
        :alt="image.title"
        :src="image.url()"
      />
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Tag from "@/components/Tag.vue";

export default {
  name: "Drawing",
  components: {
    Card,
    Tag
  },
  data() {
    return {
      show: {
        images: true
      },
      images: [
        {
          url() {
            return require("@/assets/images/drawings/aladin.jpg");
          },
          tag: ["comic", "digital"],
          title: "Deseos",
          description: "Dibujo digital en tableta"
        },
        {
          url() {
            return require("@/assets/images/drawings/arcade.jpg");
          },
          tag: ["objetos", "a mano"],
          title: "Arcade",
          description: "Dibujo sobre mueble arcade"
        },
        {
          url() {
            return require("@/assets/images/drawings/gandhi.png");
          },
          tag: ["caricatura", "digital"],
          title: "Nuevos tiempos",
          description: "Caricatura en lapiz"
        }
      ]
    };
  },
  methods: {
    tagFilter(e) {
      console.log(e);
    },
    showFull(e) {
      console.log(e);
    }
  },
  computed: {
    getCategoryOnce() {
      let categories = [];
      this.images.forEach(image => {
        image.tag.forEach(tag => {
          categories.push(tag);
        });
      });
      const categoriesNoDuplicate = categories.filter(
        (el, index) => categories.indexOf(el) === index
      );
      return categoriesNoDuplicate;
    },
    filteredTag(tag) {
      return this.categories.includes(tag);
    }
  }
};
</script>
