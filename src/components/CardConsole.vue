<template>
  <div class="card">
    <p class="card__paragraph">
      {{ paragraph }}
    </p>
  </div>
</template>

<script>
export default {
  name: "card",
  data: function() {
    return {
      paragraph:
        "dsfasdf sdf df df adfdfsdfewrt sgf gfds gsdfg sdf gdfg fds gsfg lorem"
    };
  }
};
</script>

<style lang="scss">
.card {
  background-color: $gray--darker;
  width: calcRem(360px);
  margin: auto;
  border-radius: 3px;
}
.card__paragraph {
  padding: 1rem;
  font-size: calcRem(14px);
}
</style>
