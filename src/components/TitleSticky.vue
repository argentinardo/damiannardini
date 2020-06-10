<template>
  <div class="title-sticky">
    <!-- <h1 class="title-sticky__title">{{ sectionTitle }}</h1> -->
    <h1 class="title-sticky__title">{{ this.$route.name }}</h1>
    <img
      class="title-sticky__icon"
      src="@/assets/images/icons/menu-close.svg"
      alt="close menu"
    />
  </div>
</template>

<script>
export default {
  name: "TitleSticky",
  props: ["sectionTitle"]
};
</script>
