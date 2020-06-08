<template>
  <div class="home">
    <main-menu></main-menu>
    <card :paragraph="true">
      <template slot="paragraph">
        Hola; Aquí puedes encontrar información sobre mis trabajos como front
        end / UI developer y también, algunas ilustraciones ya que es mi otra
        pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card>
    <card :title="true" :chips="true">
      <template slot="title">Skills</template>
      <template slot="chips">
        <chip amount="70" text="Inglés" icon="language" />
      </template>
      <template slot="chips">
        <chip amount="90" text="Comunicación" icon="comunication" />
      </template>
      <template slot="chips">
        <chip amount="90" text="Innovación" icon="light" />
      </template>
      <template slot="chips">
        <chip amount="90 " text="Team Player" icon="team" />
      </template>
    </card>
    <card :title="true" :chips="true">
      <template slot="title">Lenguajes</template>
      <template slot="chips">
        <chip amount="95" text="HTML" icon="html" />
      </template>
      <template slot="chips">
        <chip amount="95" text="CSS" icon="css" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Javascript" icon="js" />
      </template>
    </card>
    <card :title="true" :chips="true">
      <template slot="title">Librerías, frameworks y herramientas</template>
      <template slot="chips">
        <chip amount="75" text="Vue.Js" icon="vue" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Sass" icon="sass" />
      </template>
      <template slot="chips">
        <chip amount="70" text="Webpack" icon="webpack" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Git" icon="git" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Boostrap" icon="boostrap" />
      </template>
      <template slot="chips">
        <chip amount="70" text="Wordpress" icon="wordpress" />
      </template>
    </card>
    <card :title="true" :chips="true">
      <template slot="title">Software</template>
      <template slot="chips">
        <chip amount="90" text="Visual Studio Code" icon="vscode" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Adobe Xd" icon="adobexd" />
      </template>
      <template slot="chips">
        <chip amount="70" text="Inkscape" icon="inkscape" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Photoshop" icon="photoshop" />
      </template>
      <template slot="chips">
        <chip amount="70" text="Blender" icon="blender" />
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";
import Chip from "@/components/Chip.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    Card,
    MainMenu,
    Chip
  }
};
</script>
