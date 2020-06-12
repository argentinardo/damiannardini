<template>
  <div class="contact">
    <card>
      <label class="contact__label" for="">Nombre y apellidos*</label>
      <input class="contact__input contact__input-text" type="text" />
      <label class="contact__label" for="">e-mail *</label>
      <input class="contact__input contact__input-text" type="text" value="@" />
      <label class="contact__label" for="">Mensaje</label>
      <textarea class="contact__input contact__textarea" />
      <main-button text="Enviar" link="#"></main-button>
    </card>
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
  }
};
</script>
