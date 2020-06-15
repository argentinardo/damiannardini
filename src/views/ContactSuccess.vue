<template>
  <div>
    <card>
      <h1 class="card__title">
        Gracias por tu mensaje, me comunicare contigo a la brevedad
      </h1>
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
  name: "SubmissionSuccess",
  components: {
    Card,
    MainButton
  }
};
</script>
