<template>
  <div class="main-menu">
    <div class="main-menu--closed">
      <img src="@/assets/images/icons/menu.svg" alt="menu" />
    </div>
    <div class="main-menu--opened" id="nav">
      <router-link to="/">Home </router-link>
      <router-link to="/AboutMe">Acerca de mi </router-link>
      <router-link to="/Drawing">Ilustraciones </router-link>
      <router-link to="/Experience">Experiencia </router-link>
      <router-link to="/Contacto">Contacto </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
};
</script>

<style lang="scss">
.main-menu--closed {
  width: calcRem(25px);
  height: calcRem(20px);
  display: block;
}
.main-menu--opened {
  display: none;
}
</style>
