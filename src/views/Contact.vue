<template>
  <div class="contact">
    <card v-if="true">
      <form
        class="contact__form"
        name="contact"
        method="POST"
        data-netlify="true"
      >
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

    <form
      name="ask-question"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="ask-question" />
      <label v-for="(panelist, index) in panelists" :key="index">
        <input
          type="radio"
          name="panelist"
          :value="panelist"
          @input="ev => updatePanelist"
          :checked="panelist === currentPanelist"
        />
        <span>{{ panelist }}</span>
      </label>
      ...
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import MainButton from "@/components/MainButton.vue";

export default {
  name: "Contacto",
  components: {
    Card,
    MainButton
  },
  methods: {
    updatePanelist(ev) {
      this.currentPanelist = ev.target.value;
    }
  },
  data() {
    return {
      panelists: ["damian", "nardini"],
      currentPanelist: "damian"
    };
  }
};
</script>
