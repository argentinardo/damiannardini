<template>
  <form
    name="web_message"
    method="post"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    class="contact__form"
  >
    <input type="hidden" name="form-name" value="web_message" />
    <label class="contact__label--hidden hidden"
      >Don't fill this out if you're human:
      <input name="bot-field" />
    </label>
    <label class="contact__label" for="">Nombre y apellidos*</label>
    <input class="contact__input contact__input-text" name="name" type="text" />
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
    <!-- <main-button text="Enviar"></main-button> -->
    <div class="main-button">
      <button class="main-button__link">Enviar</button>
    </div>
  </form>
</template>

<script>
// import MainButton from "@/components/MainButton.vue";

export default {
  name: "ContactForm",
  components: {
    // MainButton
  }
};
</script>
