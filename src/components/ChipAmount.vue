<template>
  <div class="chip__amount">
    <span class="chip__amount amount__number">{{ amount }}</span>
    <svg class="amount__chart amount__chart--fixed">
      <path d=" M 14 26 A 12 12 90 0 1 14 2" />
    </svg>
    <svg
      class="amount__chart amount__chart--rotated"
      :style="'transform:rotate(' + percent + 'deg)'"
    >
      <path d=" M 14 26 A 12 12 90 0 1 14 2" />
    </svg>
  </div>
</template>
<script>
export default {
  name: "ChipAmount",
  props: ["amount"],
  computed: {
    percent() {
      return 180 - this.amount * 3.6;
    }
  }
};
</script>
