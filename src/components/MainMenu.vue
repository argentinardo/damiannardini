<template>
  <div class="main-menu">
    <div v-if="!openState" class="main-menu__icon">
      <img src="@/assets/images/icons/menu.svg" alt="menu" />
    </div>
    <div v-else class="main-menu--opened" id="nav">
      <title-sticky></title-sticky>
      <router-link to="/" class="main-menu__item">Home </router-link>
      <router-link to="/About-me" class="main-menu__item"
        >Sobre mí
      </router-link>
      <router-link to="/Drawing" class="main-menu__item"
        >Ilustraciones
      </router-link>
      <router-link to="/Experience" class="main-menu__item"
        >Experiencia
      </router-link>
      <router-link to="/Contact" class="main-menu__item">Contacto </router-link>
    </div>
  </div>
</template>
<script>
import TitleSticky from "@/components/TitleSticky.vue";
export default {
  name: "MainMenu",
  components: { TitleSticky },
  props: ["openState"]
};
</script>
