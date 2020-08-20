<template>
  <div class="Drawing">
    <card flex="row">
      <tag
        @selectingTag="tagFilter(category)"
        v-for="category in getCategoryOnce"
        :key="category.index"
        :text="category"
        size="normal"
      ></tag>
    </card>
    <card>
      <img
        class="drawing__image"
        v-for="image in filteredImages"
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
      shownCategory: [],
      images: [
        {
          url() {
            return require("@/assets/images/drawings/aladin.jpg");
          },
          tags: ["comic", "digital"],
          title: "Deseos",
          description: "Dibujo digital en tableta"
        },
        {
          url() {
            return require("@/assets/images/drawings/arcade.jpg");
          },
          tags: ["objetos", "a mano"],
          title: "Arcade",
          description: "Dibujo sobre mueble arcade"
        },
        {
          url() {
            return require("@/assets/images/drawings/gandhi.png");
          },
          tags: ["caricatura", "digital"],
          title: "Nuevos tiempos",
          description: "Caricatura en lapiz"
        }
      ]
    };
  },
  methods: {
    tagFilter(element) {
      if (!this.shownCategory.includes(element)) {
        this.shownCategory.push(element);
      } else {
        let currentIndex = this.shownCategory.indexOf(element);
        this.shownCategory.splice(currentIndex, 1);
      }
    },
    showFull(e) {
      console.log(e);
    }
  },
  computed: {
    getCategoryOnce() {
      let categories = ["Mostrar todas"];
      this.images.forEach(image => {
        image.tags.forEach(tag => {
          categories.push(tag);
        });
      });
      const categoriesNoDuplicate = categories.filter(
        (el, index) => categories.indexOf(el) === index
      );
      return categoriesNoDuplicate;
    },
    filteredImages() {
      var hola = this.images.filter( image => {
        // image.tags.forEach(tag => {
        //   return tag == "caricatura";
        // })
        image.tags.filter(tag => {
          return tag == "caricatura";
        })
      })
      return hola;
    }
  }
}
</script>