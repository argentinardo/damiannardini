<template>
  <div class="footer-bar">
    <span class="footer-bar__site-logo">
      <a href="/" class="footer-bar__site-link">
        <img src="@/assets/images/icons/logo.svg" alt="Damian Nardini" />
      </a>
    </span>
    <span class="footer-bar__social-logos">
      <a href="/contact" class="footer-bar__social-link">
        <img
          class="footer-bar__social-icon"
          src="@/assets/images/icons/social/social_email.svg"
          alt="e-mail"
      /></a>
      <a
        href="https://github.com/argentinardo/damiannardini"
        class="footer-bar__social-link"
        target="_blank"
      >
        <img
          class="footer-bar__social-icon"
          src="@/assets/images/icons/social/social_github.svg"
          alt="github"
      /></a>
      <a
        href="https://www.instagram.com/argentinardo/"
        class="footer-bar__social-link"
        target="_blank"
      >
        <img
          class="footer-bar__social-icon"
          src="@/assets/images/icons/social/social_instagram.svg"
          alt="instagram"
      /></a>
      <a
        href="https://www.linkedin.com/in/damiannardini/"
        class="footer-bar__social-link"
        target="_blank"
      >
        <img
          class="footer-bar__social-icon"
          src="@/assets/images/icons/social/social_linkedin.svg"
          alt="linkedin"
      /></a>
    </span>
  </div>
</template>

<script>
export default {
  name: "FooterBar"
};
</script>

<style lang="scss">
.footer-bar {
  display: flex;
  height: calcRem(56px);
  background-color: $primary;
  align-items: center;
  justify-content: space-between;
  padding-left: calcRem(16px);
  padding-right: calcRem(16px);
}
.footer-bar__social-logo {
  display: flex;
  align-items: center;
}
</style>
