<template>
  <div>
    <v-layout column align-center fill-height text-xs-center ml-3 mr-3 mt-3>
      <h2 class="display-2 hidden-md-and-down">Painel de criação</h2>
      <h2 class="display-1 hidden-lg-and-up">Painel de criação</h2>
    </v-layout>
    <transition name="list" :appear="true" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  components: {},
  data() {
    return {
      question: {
        font: "",
        statement: "",
        matter: "",
        tags: [],
        answer: ""
      }
    };
  },
  methods: {
    ...mapActions(["sendQuestion"])
  }
};
</script>

<style scoped>
</style>