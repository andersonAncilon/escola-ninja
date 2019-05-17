<template>
  <v-container text-xs-center mt-5>
    <h2 v-if="user" class="display-2 font-weight-bold">Bem vindo {{ user.name }}</h2>
    <h2 v-if="$router.currentRoute.path === '/questoes'" class="display-1 mt-5">
      Selecione uma
      <strong>área de conhecimento</strong>
    </h2>
    <h2 v-else class="display-1 mt-5">
      Agora selecione um
      <strong>conteúdo</strong>
    </h2>

    <transition name="list" :appear="true" mode="out-in">
      <router-view></router-view>
    </transition>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  components: {
    MyCenteredContainer: () =>
      import("../components/base/MyCenteredContainer.vue"),
    TheAxis: () => import("../components/container/TheAxis.vue")
  },
  computed: {
    ...mapGetters(["user"])
  },

};
</script>