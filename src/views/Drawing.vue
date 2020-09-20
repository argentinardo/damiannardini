<template>
  <div class="drawing">
    <card flex="row">
      <tag
        @selectingTag="tagFilter(category)"
        v-for="category in allCategories"
        :key="category.index"
        :text="category"
        size="normal"
      ></tag>
    </card>
    <card
      class="drawing__image-container"
      v-for="image in filteredImages"
      :key="image.title"
    >
      <template>
        <img class="drawing__image" :alt="image.title" :src="image.url()" />
      </template>
      <template v-slot:slide> </template>
      <image-slides
        :url="image.url()"
        :description="image.description"
        :tags="image.tags"
        :title="image.title"
      ></image-slides>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Tag from "@/components/Tag.vue";
import ImageSlides from "@/components/ImageSlides.vue";

export default {
  name: "Drawing",
  components: {
    Card,
    Tag,
    ImageSlides
  },
  data() {
    return {
      show: {
        images: true
      },
      shownCategory: [],
      allCategories: [],
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
            return require("@/assets/images/drawings/batman.png");
          },
          tags: ["comic", "digital"],
          title: "Batman de día",
          description: "Dibujo digital en tableta"
        },
        // {
        //   url() {
        //     return require("@/assets/images/drawings/remera.jpg");
        //   },
        //   tags: ["objetos", "a mano"],
        //   title: "Dibujo abstracto",
        //   description: "Dibujo sobre remera"
        // },
        // {
        //   url() {
        //     return require("@/assets/images/drawings/faro.jpg");
        //   },
        //   tags: ["objetos", "a mano"],
        //   title: "Faro",
        //   description: "Dibujo sobre zapatilla"
        // },
        {
          url() {
            return require("@/assets/images/drawings/emoticon.jpg");
          },
          tags: ["comic", "digital"],
          title: "La vida de un emoticon",
          description: "Dibujo digital en tablet"
        },
        {
          url() {
            return require("@/assets/images/drawings/tucan.jpg");
          },
          tags: ["comic", "digital"],
          title: "Tucan metro sexual",
          description: "Dibujo digital en tablet"
        },
        {
          url() {
            return require("@/assets/images/drawings/roboto.png");
          },
          tags: ["comic", "digital"],
          title: "Roboto",
          description: "Dibujo digital en tablet"
        },
        {
          url() {
            return require("@/assets/images/drawings/redbull.jpg");
          },
          tags: ["comic", "digital"],
          title: "Publicidad Engañosa",
          description: "Dibujo digital en tablet"
        },
        {
          url() {
            return require("@/assets/images/drawings/mandarin.jpg");
          },
          tags: ["comic", "digital"],
          title: "Mandarina y manzana",
          description: "Dibujo digital en tablet"
        },
        {
          url() {
            return require("@/assets/images/drawings/gandhi.jpg");
          },
          tags: ["caricatura", "a mano"],
          title: "Nuevos tiempos",
          description: "Dibujo en lapiz"
        },
        {
          url() {
            return require("@/assets/images/drawings/rebeco.jpg");
          },
          tags: ["caricatura", "a mano"],
          title: "Joven con doodle art",
          description: "Dibujo en lapiz"
        },
        {
          url() {
            return require("@/assets/images/drawings/sol.jpg");
          },
          tags: ["a mano"],
          title: "Paisaje",
          description: "Dibujo en tinta"
        },
        {
          url() {
            return require("@/assets/images/drawings/flor.jpg");
          },
          tags: ["a mano"],
          title: "Flor triste",
          description: "Dibujo en tinta"
        },
        {
          url() {
            return require("@/assets/images/drawings/flores.jpg");
          },
          tags: ["a mano"],
          title: "Flores astractas",
          description: "Dibujo en tinta"
        },
        {
          url() {
            return require("@/assets/images/drawings/nina.jpg");
          },
          tags: ["a mano"],
          title: "Ornamentos",
          description: "Dibujo en tinta"
        },
        {
          url() {
            return require("@/assets/images/drawings/progreso.jpg");
          },
          tags: ["a mano"],
          title: "'Progreso'",
          description: "Dibujo en tinta"
        },
        {
          url() {
            return require("@/assets/images/drawings/china.jpg");
          },
          tags: ["caricatura", "a mano"],
          title: "Yo hago puchero, ella hace puchero",
          description: "Fileteado porteño en lapiz"
        },
        {
          url() {
            return require("@/assets/images/drawings/galeano.jpg");
          },
          tags: ["caricatura", "a mano"],
          title: "Pensando latinoamerica",
          description: "Caricatura a lapiz"
        },
        {
          url() {
            return require("@/assets/images/drawings/lincoln.jpg");
          },
          tags: ["caricatura", "a mano"],
          title: "Condena a buenos presidentes",
          description: "Caricatura a lapiz"
        }
      ]
    };
  },
  methods: {
    tagFilter(element) {
      if (!this.shownCategory.includes(element)) {
        this.shownCategory.unshift(element);
      } else {
        let currentIndex = this.shownCategory.indexOf(element);
        this.shownCategory.splice(currentIndex, 1);
      }
    },
    noRepeat(e) {
      const unique = e.filter((el, index) => e.indexOf(el) === index);
      return unique;
    },
    getCategoryOnce() {
      let categories = [];
      this.images.forEach(image => {
        image.tags.forEach(tag => {
          categories.push(tag);
        });
        this.allCategories = this.noRepeat(categories);
        this.shownCategory = this.noRepeat(categories);
      });
    }
  },
  mounted() {
    this.getCategoryOnce();
  },
  computed: {
    filteredImages() {
      let showCatArray = [];
      this.images.filter(image => {
        for (let i = 0; i < image.tags.length; i++) {
          for (let c = 0; c < this.shownCategory.length; c++) {
            if (image.tags[i] == this.shownCategory[c]) {
              showCatArray.push(image);
            }
          }
        }
      });
      return this.noRepeat(showCatArray);
    }
  }
};
</script>
