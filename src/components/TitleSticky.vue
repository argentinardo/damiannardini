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

<style lang="scss">
.title-sticky {
  display: flex;
  height: calcRem(64px);
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 1px solid;
  margin-bottom: calcRem(16px);
}
.title-sticky__title {
  font-family: $title-font;
  font-size: calcRem(20px);
}
</style>
