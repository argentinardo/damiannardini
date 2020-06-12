<template>
  <div class="home">
    <card>
      <h1 class="card__title">Sobre este proyecto</h1>
      <p class="card__paragraph">
        Durante los últimos años de mi carrera he estado trabajando en equipos
        de trabajo donde el proyecto al cual colaboré no era de mi autoría sino
        de la empresa que me contrataba.<br />
        Ya que mi aporte fue siempre una tarea especifica del proyecto, no
        cuento con un porfolio propio para mostrar mis trabajos.<br />
        Es por eso que he decidido hacer esta web desde el diseño hasta el
        desarrollo, para mostrar mi metodología de trabajo puedes ver todo el
        código y el proceso en
        <a
          class="card__link"
          href="https://github.com/argentinardo/damiannardini"
          target="_blank"
          >github</a
        >.<br />
        Pretendí plasmar todo lo aprendido estos años de trabajo más nuevos
        conocimientos que fui adquiriendo durante proceso.<br />
        Espero que te agrade.<br />
      </p>
      <p class="card__cluster">
        <span class="card__emphasis"> Software utilizado:</span> Adobe XD, VS
        Code<br />
        <span class="card__emphasis"> Arquitectura css:</span> Bemit (BEM +
        itcss)<br />
        <span class="card__emphasis"> Desarrollo:</span> Vue.js + vanilla js<br />
        <span class="card__emphasis"> Empaquetador:</span> Webpack<br />
        <span class="card__emphasis"> Versionado:</span> Git + github<br />
        <span class="card__emphasis"> Hosting:</span> Netifly<br />
        <!-- agregar algo sobre el diseño y ver si es posible compartir el archivo XD -->
      </p>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Home",
  components: {
    Card
  }
};
</script>
