<template>
  <div class="contact">
    <card v-if="true">
      <form name="simple-form" hidden method="post">
        <input type="hidden" name="form-name" value="simple-form" /><input
          type="text"
          name="name"
        />
        <input type="email" name="email" />
        <input type="textarea" name="message" />
        <button type="submit">Send</button>
      </form>
    </card>
    <card v-else>
      <p class="card__paragraph card__paragraph--centered">
        Gracias, su mensaje ha sido enviado.
      </p>
      <p class="card__paragraph card__paragraph--centered">
        Me comunicaré contigo a la brevedad.
      </p>
      <p class="card__paragraph card__paragraph--centered">Hasta entonces.</p>
      <main-button text="Volver" link="#"></main-button>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "Contact",
  components: {
    Card,
    MainButton
  }
};
</script>
