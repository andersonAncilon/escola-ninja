<template>
  <div>
    <v-layout column align-center fill-height text-xs-center ml-3 mr-3 mt-3>
      <h2 class="display-2 hidden-md-and-down">Painel de criação</h2>
      <h2 class="display-1 hidden-lg-and-up">Painel de criação</h2>
    </v-layout>
    <v-layout ml-3 mr-3>
      <v-flex md6 offset-sm3>
        <v-card class="mt-2 mb-5">
          <v-card-actions></v-card-actions>
          <v-card-text>
            <form>
              <v-text-field label="Fonte" v-model="question.font" required></v-text-field>
              <v-text-field label="Enunciado" v-model="question.statement" required></v-text-field>
              <v-text-field label="Eixo" v-model="question.matter" required></v-text-field>
              <v-text-field label="Conteúdos relacionados" v-model="question.tags" required></v-text-field>
              <v-text-field label="Gabarito" v-model="question.answer" required></v-text-field>
              <v-btn color="teal" dark @click="sendQuestion()">Cria questão</v-btn>
              <v-btn color="error">Limpar dados</v-btn>
            </form>
          </v-card-text>
        </v-card>
        <v-btn outline color="error">Listar minhas questões</v-btn>
      </v-flex>
    </v-layout>
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

<style lang="scss" scoped>
</style>