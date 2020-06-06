<template>
  <div class="chip">
    <div class="chip__amount">{{ amount }}</div>
    <p class="chip__text">{{ text }}</p>
    <div class="chip__icon">
      <img :src="getImgUrl()" />
    </div>
  </div>
</template>

<script>
export default {
  name: "chip",
  data() {
    return {
      chipText: String,
    }
  },
  methods: {
    getImgUrl() {
      return require(`../assets/images/icons/chips/icon-${this.icon}.svg`)
    }
  },
  props: ["amount", "text", "icon"]
}
</script>

<style lang="scss">
.chip {
  $chipHeight: calcRem(32px);
  border: calcRem(1px) solid $fourth;
  display: flex;
  height: $chipHeight;
  border-bottom-left-radius: $chipHeight;
  border-top-left-radius: $chipHeight;
  align-items: center;
  margin: 0 0 calcRem(16px) 0;
  .chip__amount {
    display: flex;
    width: calcRem(26px);
    text-align: center;
    border: aliceblue solid calcRem(3px);
    height: calcRem(26px);
    align-items: center;
    justify-content: center;
    border-radius: calcRem(26px);
    margin: calcRem(3px) calcRem(3px) calcRem(3px) calcRem(2px);
    font-size: calcRem(12px);
  }
  .chip__text {
    margin: auto;
  }
  .chip__icon {
    height: calcRem(32px);
  }
}
</style>
