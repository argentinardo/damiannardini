<template>
  <div class="experience">
    <card :paragraph="true" :title="true">
      <template slot="title">Front-end developer</template>
      <template slot="paragraph">
        En suntransfers estuve a cargo del área de maquetación del sitio de la
        empresa, implementando la arquitectura BEMIT ( BEM + ITCSS ). El cargo
        comprendió el uso de tecnologías como: GIT, Github, Docker. Lenguajes:
        Javascript, Css (Less, Sass). Metodología Agile (Scrum, Jira, Slack).
      </template>
      <template slot="paragraph">
        Me desarrollé como front-end de la empresa GPS ubicada en el Parc
        tecnológico de Nou Barris en Barcelona. Mi trabajo consistió en el
        desarrollo front end de las aplicaciones de la empresa, a cargo del
        maquetado en Vuetify y desarrollo de componentes en Vue.js. Mis tareas
        también incluyeron desde la configuración de webpack hasta el diseño
        visual de componentes y nuevas secciones.
      </template>
    </card>
    <card :paragraph="true" :title="true">
      <template slot="title">Arquitecto CSS</template>
      <template slot="paragraph">
        <p class="paragraph__break">
          Durante este tiempo estuve a cargo de la maquetación de Beezy en las
          oficinas de Barcelona. Esta tarea incluye tanto el desarrollo en css y
          html como el manejo de tecnologías tales como sass , handlebars ,
          webpack , git , json y maquetación para e-mail.
        </p>
        <p class="paragraph__break">
          Trabajando para clientes particulares, y empresas outsourcing.
          Realizando el diseño y maquetado de themes para wordpress, proyectos
          de maquetado en less , bootstrap , WordPress
        </p>
        <p class="paragraph__break">
          Globant es una empresa multinacional argentina, con cede en Rosario,
          en está compañía me desarrollé como PLD (presentation layer developer)
          para importantes clientes como Blackberry, EMC, Mastercard,
          MercedesBenz etc. En Globant estuve a cargo de la maquetación en HTML5
          / CSS3 y del desarrollo de código javascript , trabajando con
          frameworks ( bootstrap - foundation ), preprocesadores ( sass y less )
          y librerías js( jquery ).
        </p>
      </template>
    </card>
    <card :paragraph="true" :title="true">
      <template slot="title">Maquetación web y Animación digital</template>
      <template slot="paragraph">
        <p class="paragraph__break">
          En Visiongraf realicé trabajos para presentaciones multimediales en
          distintos soportes ( cd interactivos, dvd, web), también en el
          desarrollo de páginas web para empresas de Argentina.
        </p>
        <p class="paragraph__break">
          Trabajé como maquetador para Estudio Hormiga ubicada en Rosario,para
          clientes como: La Segunda, Los Pumas, etc. Durante este tiempo estuve
          a cargo de la maquetación web de PSD a XHTML/CSS.
        </p>
        <p class="paragraph__break">
          Esta empresa se encuentra en Rosario y trabajaba para empresas
          argentinas y españolas. Mi roll en esta empresa comprendió tareas como
          maquetación, diseño web y animaciones flash.
        </p>
      </template>
    </card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue";

export default {
  name: "Experience",
  components: {
    Card
  }
};
</script>

<style lang="scss">
.paragraph__break {
  margin-top: 0;
}
</style>
