<template>
  <form
    name="web_message"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="contact__form"
    action="/thanks"
  >
    <input type="hidden" name="form-name" value="web_message" />
    <label class="contact__label--hidden hidden"
      >Don't fill this out if you're human:
      <input name="bot-field" />
    </label>
    <label class="contact__label" for="">Nombre y apellidos*</label>
    <input
      class="contact__input contact__input-text"
      name="name"
      type="text"
      required
    />
    <label class="contact__label" for="">e-mail *</label>
    <input
      class="contact__input contact__input-text"
      value="@"
      name="email"
      required
      type="email"
    />
    <label class="contact__label" for="">Mensaje</label>
    <textarea
      class="contact__input contact__textarea"
      name="message"
      required
    ></textarea>
    <main-button text="Enviar"></main-button>
  </form>
</template>

<script>
import MainButton from "@/components/MainButton.vue";

export default {
  name: "ContactForm",
  components: {
    MainButton
  }
};
</script>
