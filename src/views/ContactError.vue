<template>
  <div>
    <card>
      <h1 class="card__title">Algo fue mal, intentalo nuevamente</h1>
      <router-link to="/">
        <main-button text="volver"></main-button>
      </router-link>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";
export default {
  name: "SubmissionFail",
  components: {
    Card,
    MainButton
  }
};
</script>
