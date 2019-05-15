<template>
  <v-container text-xs-center mt-5>
    <v-layout v-if="$router.currentRoute.path != '/'" class="hidden-lg-and-up">
      <v-btn outline @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>
    <h2 v-if="$router.currentRoute.path === '/questoes'">Selecione uma área de conhecimento</h2>
    <h2 v-else>Selecione um conteúdo</h2>
    <v-layout row wrap justify-center>
      <transition name="list" :appear="true" mode="out-in">
        <router-view></router-view>
      </transition>
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