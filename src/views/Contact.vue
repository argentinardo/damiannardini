<template>
  <div class="contact">
    <card v-if="true">
      <form
        class="contact__form"
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        netlify
      >
        <label class="contact__label--hidden hidden"
          >Don't fill this out if you're human:
          <input name="bot-field" />
        </label>
        <label class="contact__label" for="">Nombre y apellidos*</label>
        <input
          class="contact__input contact__input-text"
          name="name"
          type="text"
        />
        <label class="contact__label" for="">e-mail *</label>
        <input
          class="contact__input contact__input-text"
          type="text"
          value="@"
          name="email"
        />
        <label class="contact__label" for="">Mensaje</label>
        <textarea
          class="contact__input contact__textarea"
          name="message"
        ></textarea>
        <main-button text="Enviar" role="" link="#" type="submit"></main-button>
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
