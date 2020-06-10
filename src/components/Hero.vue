<template>
  <div class="hero">
    <div class="hero__top--bg">
      <video
        autoplay
        loop
        muted
        poster="@/assets/images/hero-bg.jpg"
        class="hero__video"
      >
        <source src="@/assets/images/hero-bg.webm" type="video/webm" />
        <source src="@/assets/images/hero-bg.mp4" type="video/mp4" />
      </video>
      <div @click="openClose" class="hero__top">
        <main-menu :openState="openState" class="hero__menu"></main-menu>
        <div class="hero__avatar">
          <img
            src="@/assets/images/avatar--notebook.svg"
            alt="Bienvenidos!!!"
          />
        </div>
        <div class="hero__dialog">Bienvenido!!!</div>
      </div>
    </div>
    <div class="hero__bottom">
      <div class="hero__bottom--bg">
        <h1 class="hero__title">DAMIAN NARDINI</h1>
        <h2 class="hero__subtitle">&lt; Fron-tend UI developer /&gt;</h2>
      </div>
    </div>
  </div>
</template>

<script>
import MainMenu from "@/components/MainMenu.vue";
export default {
  components: { MainMenu },
  data() {
    return {
      title: "heroTitle",
      subtitle: "heroSubtitle",
      avatar: "heroAvatar",
      dialog: "dialogAvatar",
      openState: false
    };
  },
  methods: {
    openClose: function() {
      this.openState = !this.openState;
    }
  }
};
</script>
