<template>
  <div class="home">
    <card>
      <h1 class="card__title">Hola;</h1>
      <p class="card__paragraph">
        Aquí puedes encontrar información sobre mis trabajos como front end / UI
        developer y también, algunas ilustraciones ya que es mi otra pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </p>
    </card>
    <card>
      <h1 class="card__title">Skills</h1>
      <chip amount="70" text="Inglés" icon="language" />
      <chip amount="90" text="Comunicación" icon="comunication" />
      <chip amount="90" text="Innovación" icon="light" />
      <chip amount="90 " text="Team Player" icon="team" />
    </card>
    <card>
      <h1 class="card__title">Lenguajes</h1>
      <chip amount="95" text="HTML" icon="html" />
      <chip amount="95" text="CSS" icon="css" />
      <chip amount="80" text="Javascript" icon="js" />
    </card>
    <card>
      <h1 class="card__title">Librerías, frameworks y herramientas</h1>
      <chip amount="75" text="Vue.Js" icon="vue" />
      <chip amount="80" text="Sass" icon="sass" />
      <chip amount="70" text="Webpack" icon="webpack" />
      <chip amount="80" text="Git" icon="git" />
      <chip amount="75" text="Boostrap" icon="boostrap" />
      <chip amount="70" text="Wordpress" icon="wordpress" />
    </card>
    <card>
      <h1 class="card__title">Software</h1>
      <chip amount="90" text="Visual Studio Code" icon="vscode" />
      <chip amount="80" text="Adobe Xd" icon="adobexd" />
      <chip amount="70" text="Inkscape" icon="inkscape" />
      <chip amount="80" text="Photoshop" icon="photoshop" />
      <chip amount="70" text="Blender" icon="blender" />
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Chip from "@/components/Chip.vue";

export default {
  name: "Home",
  components: {
    Card,
    Chip
  }
};
</script>
