<template>
  <div class="contact">
    <card v-if="true">
      <contact-form></contact-form>
    </card>
    <card v-else>
      <p class="card__paragraph card__paragraph--centered">
        Gracias, su mensaje ha sido enviado.
      </p>
      <p class="card__paragraph card__paragraph--centered">
        Me comunicaré contigo a la brevedad.
      </p>
      <p class="card__paragraph card__paragraph--centered">Hasta entonces.</p>
      <main-button type="submit" text="Volver" link="#"></main-button>
      <button type="submit"></button>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contact",
  components: {
    Card,
    MainButton,
    ContactForm
  }
};
</script>
