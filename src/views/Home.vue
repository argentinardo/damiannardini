<template>
  <div class="home">
    <main-menu></main-menu>
    <card-console :paragraph="true">
      <template slot="paragraph">
        Hola; Aquí puedes encontrar información sobre mis trabajos como front
        end / UI developer y también, algunas ilustraciones ya que es mi otra
        pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card-console>
    <card-console :title="true" :chips="true">
      <template slot="title">Skills</template>
      <template slot="chips">
        <chip amount="75" text="Inglés" icon="language" />
      </template>
      <template slot="chips">
        <chip amount="80" text="Comunicación" icon="comunication" />
      </template>
      <template slot="chips">
        <chip amount="90" text="Innovación" icon="light" />
      </template>
      <template slot="chips">
        <chip amount="70" text="Team Player" icon="team" />
      </template>
    </card-console>
    <card-console :title="true" :chips="true">
      <template slot="title">Lenguajes</template>
      <template slot="chips">
        <chip amount="75" text="HTML" icon="html" />
      </template>
      <template slot="chips">
        <chip amount="75" text="CSS" icon="css" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Javascript" icon="js" />
      </template>
    </card-console>
    <card-console :title="true" :chips="true">
      <template slot="title">Librerías, frameworks y herramientas</template>
      <template slot="chips">
        <chip amount="75" text="Vue.Js" icon="vue" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Sass" icon="sass" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Webpack" icon="webpack" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Git" icon="git" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Boostrap" icon="boostrap" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Wordpress" icon="wordpress" />
      </template>
    </card-console>
    <card-console :title="true" :chips="true">
      <template slot="title">Software</template>
      <template slot="chips">
        <chip amount="75" text="Visual Studio Code" icon="vscode" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Adobe Xd" icon="adobexd" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Inkscape" icon="inkscape" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Photoshop" icon="photoshop" />
      </template>
      <template slot="chips">
        <chip amount="75" text="Blender" icon="blender" />
      </template>
    </card-console>
  </div>
</template>

<script>
import CardConsole from "@/components/CardConsole.vue";
import chip from "@/components/Chip.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    CardConsole,
    MainMenu,
    chip
  }
};
</script>
