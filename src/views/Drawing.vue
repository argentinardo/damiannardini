<template>
  <div class="Drawing">
    <card flex="row">
      <tag
        v-for="category in categories"
        :key="category.index"
        :text="category"
        size="normal"
        @activate="changeState()"
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
      categories: [
        "ver todas",
        "historietas",
        "digital",
        "caricaturas",
        "objetos"
      ],
      images: [
        {
          url() {
            return require("@/assets/images/drawings/aladin.jpg");
          },
          tag: ["comic"],
          title: "Deseos",
          description: "Dibujo digital en tableta"
        },
        {
          url() {
            return require("@/assets/images/drawings/arcade.jpg");
          },
          tag: ["objetos"],
          title: "Arcade",
          description: "Dibujo sobre mueble arcade"
        },
        {
          url() {
            return require("@/assets/images/drawings/gandhi.png");
          },
          tag: ["caricatura"],
          title: "Nuevos tiempos",
          description: "Caricatura en lapiz"
        }
      ]
    };
  }
};
</script>
