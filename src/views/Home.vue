<template>
  <div class="home">
    <main-menu></main-menu>
    <card-console :paragraph="true">
      <template slot="paragraph">
        Hola; Aquí puedes encontrar información sobre mis trabajos como front end
        / UI developer y también, algunas ilustraciones ya que es mi otra
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
