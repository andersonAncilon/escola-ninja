<template>
  <v-container text-xs-center mt-5>
    <h2>Selecione uma área de conhecimento</h2>
    <v-layout row wrap justify-center>
      <TheAxis/>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  components: {
    MyCenteredContainer: () =>
      import("../components/base/MyCenteredContainer.vue"),
    TheAxis: () => import("../components/container/TheAxis.vue")
  }
};
</script>