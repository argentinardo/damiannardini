<template>
  <div id="app" class="app">
    <hero></hero>
    <router-view />
    <footer-bar></footer-bar>
  </div>
</template>
<script>
import Hero from "@/components/Hero.vue";
import FooterBar from "@/components/FooterBar.vue";
export default {
  name: "Home",
  components: {
    Hero,
    FooterBar
  }
};
</script>
