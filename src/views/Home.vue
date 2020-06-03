<template>
  <div class="home">
    <h1>Home</h1>
    <main-menu></main-menu>
    <card-console></card-console>
  </div>
</template>

<script>
import CardConsole from "@/components/CardConsole.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    CardConsole,
    MainMenu
  }
};
</script>
