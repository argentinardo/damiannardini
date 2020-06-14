<template>
  <div class="contact">
    <card>
      <contact-form></contact-form>
    </card>
  </div>
</template>
<script>
import Card from "@/components/Card.vue";
import ContactForm from "@/components/ContactForm.vue";

export default {
  name: "Contact",
  components: {
    Card,
    ContactForm
  }
};
</script>
