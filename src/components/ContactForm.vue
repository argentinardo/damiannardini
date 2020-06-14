<template>
  <form
    class="contact__form"
    name="from-name"
    method="POST"
    data-netlify="true"
    data-netlify-honeypot="bot-field"
    netlify
  >
    <input type="hidden" name="from-name" value="from-name" />
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
    <main-button text="Enviar" role="" link="#" type="submit"></main-button>
  </form>
</template>
