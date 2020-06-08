<template>
  <div class="chip">
    <ChipAmount :amount="amount"></ChipAmount>
    <p class="chip__text">{{ text }}</p>
    <div class="chip__icon">
      <img class="chip__img" :src="getImgUrl()" />
    </div>
  </div>
</template>

<script>
import ChipAmount from "./ChipAmount.vue";
export default {
  name: "chip",
  components: { ChipAmount },
  data() {
    return {
      chipText: String
    };
  },
  methods: {
    getImgUrl() {
      return require(`../assets/images/icons/chips/icon-${this.icon}.svg`);
    }
  },
  props: ["amount", "text", "icon"]
};
</script>
