<template>
  <div class="home">
    <main-menu></main-menu>
    <card-console :paragraph="true">
      <template slot="paragraph">
        Hola;
        Aquí podés encontrar información sobre mis trabajos como front end / UI developer y también, algunas ilustraciones ya que es mi otra pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card-console>
        <card-console :paragraph="true">
      <template slot="paragraph">
        Hola;
        Aquí podés encontrar información sobre mis trabajos como front end / UI developer y también, algunas ilustraciones ya que es mi otra pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card-console>
        <card-console :paragraph="true">
      <template slot="paragraph">
        Hola;
        Aquí podés encontrar información sobre mis trabajos como front end / UI developer y también, algunas ilustraciones ya que es mi otra pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card-console>
        <card-console :paragraph="true">
      <template slot="paragraph">
        Hola;
        Aquí podés encontrar información sobre mis trabajos como front end / UI developer y también, algunas ilustraciones ya que es mi otra pasión.<br />
        Gracias por pasar.<br />
        Damián.
      </template>
    </card-console>
  </div>
</template>

<script>
import CardConsole from "@/components/CardConsole.vue";
import MainMenu from "@/components/MainMenu.vue";

export default {
  name: "Home",
  components: {
    CardConsole,
    MainMenu
  }
};
</script>
