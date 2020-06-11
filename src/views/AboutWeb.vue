<template>
  <div class="home">
    <card>
      <h1 class="card__title">Sobre este proyecto</h1>
      <p class="card__paragraph">
        Durante los últimos años de mi carrera he estado trabajando en equipos
        de trabajo donde el proyecto al cual colaboré no era de mi autoría sino
        de la empresa que me contrataba.<br />> Ya que mi aporte fue siempre una
        tarea especifica del proyecto, no cuento con un porfolio propio para
        mostrar mis trabajos.<br />
        Es por eso que he decidido hacer esta web, para mostrar mi metodología
        de trabajo puedes ver todo el código y el proceso en
        <a href="https://github.com/argentinardo/damiannardini" target="_blank"
          >github</a
        >.<br />
        Pretendí plasmar todo lo que aprendí estos años de trabajo más nuevos
        conocimientos que fui adquiriendo en el proceso.<br />
        Espero que te agrade.<br />
      </p>
      <p class="card__paragraph">
        Software utilizado: adobe XD, Visual Studio Code<br />
        Arquitectura css: Bemit (BEM + itcss)<br />
        Desarrrollo Javascript: Vue.js + vanilla js, eslint y prettify<br />
        Empaquetador: Webpack<br />
        Manejo de versiones: Git + github<br />
        Hosting: Netifly<br />

        Damián. agregar algo sobre el diseño y ver si es posible compartir el
        archivo XD
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
