<template>
  <div class="hero">
    <video
      autoplay
      loop
      muted
      poster="@/assets/images/hero-bg.jpg"
      class="hero__background"
    >
      <source src="@/assets/images/hero-bg.webm" type="video/webm" />
      <source src="@/assets/images/hero-bg.mp4" type="video/mp4" />
    </video>
    <div class="hero__top">
      <main-menu class="hero__menu"></main-menu>
      <div class="hero__avatar"></div>
      <div class="hero__dialog">Bienvenido!!!</div>
    </div>
    <div class="hero__bottom">
      <h1 class="hero__title">DAMIAN NARDINI</h1>
      <h2 class="hero__subtitle">&lt; Fron-tend UI developer /&gt;</h2>
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
      dialog: "dialogAvatar"
    };
  }
};
</script>

<style lang="scss">
.hero {
  width: calcRem(376px);
  height: calcRem(184px);
  margin: 0 auto calcRem(8px);
}
.hero__menu {
  width: calcRem(25px);
  height: calcRem(20px);
  display: block;
  position: absolute;
  right: calcRem(16px);
  top: calcRem(16px);
}
.hero__bottom {
  height: calcRem(72px);
  width: 100%;
  background-color: $primary;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  position: relative;
}
.hero__background {
  position: absolute;
}
.hero__top {
  position: relative;
  height: calcRem(112px);
}
.hero__avatar {
  width: calcRem(88px);
  height: calcRem(117px);
  margin-left: calcRem(24px);
  background-image: url(../assets/images/avatar--notebook.svg);
  position: relative;
  top: calcRem(56px);
  z-index: 1;
}
.hero__title {
  color: $secondary;
  font-family: $title-font;
  margin-top: 0;
  margin-bottom: 0;
  font-size: calcRem(18px);
  font-weight: 500;
  margin-top: calcRem(14px);
  margin-right: calcRem(24px);
  margin-bottom: calcRem(3px);
}
.hero__subtitle {
  font-family: $title-font;
  font-size: calcRem(12px);
  margin-top: 0;
  margin-bottom: 0;
  font-weight: 500;
  margin-right: calcRem(24px);
}
.hero__dialog {
  height: calcRem(34px);
  width: calcRem(128px);
  border-radius: calcRem(16px);
  background-color: $gray--lighter;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: calcRem(76px);
  left: calcRem(106px);
  &::after {
    top: calcRem(34px);
    position: absolute;
    content: "";
    border-style: solid;
    border-width: calcRem(10px) calcRem(10px) 0 0;
    border-color: $gray--lighter transparent transparent transparent;
    left: calcRem(14px);
  }
}
</style>
