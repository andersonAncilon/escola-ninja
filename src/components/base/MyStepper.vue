<template>
  <v-stepper v-model="e6" vertical>
    <v-stepper-step :complete="e6 > 1" step="1">
      Digite a fonte da questão
      <small>Ex: ENEM - 2018</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-text-field
        name="font"
        label="Fonte"
        append-icon="input"
        id="font"
        type="text"
        placeholder
        @keyup.enter="e6 = 2"
      ></v-text-field>
      <v-btn color="primary" @click="test()">Próximo</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 2" step="2">
      Digite os conteudos relacionados da questão
      <small>Ex: Algoritmos, Geometria</small>
    </v-stepper-step>

    <v-stepper-content step="2">
      <v-text-field
        name="tag"
        label="Conteúdo"
        append-icon="input"
        id="tag"
        type="text"
        placeholder
        @keyup.enter="e6 = 3"
      ></v-text-field>
      <v-btn color="primary" @click="e6 = 3">Próximo</v-btn>
      <v-btn color="error" @click="e6 = 1">Voltar</v-btn>
    </v-stepper-content>

    <v-stepper-step :complete="e6 > 3" step="3">Digite o enunciado</v-stepper-step>

    <v-stepper-content step="3">
      <v-text-field
        name="statement"
        label="Enunciado"
        append-icon="input"
        id="statement"
        type="text"
        placeholder
        @keyup.enter="e6 = 4"
      ></v-text-field>
      <v-btn color="primary" @click="e6 = 4">Próximo</v-btn>
      <v-btn color="error" @click="e6 = 2">Voltar</v-btn>
    </v-stepper-content>

    <v-stepper-step step="4">Digite o gabarito</v-stepper-step>
    <v-stepper-content step="4">
      <v-text-field
        name="answer"
        label="Gabarito"
        append-icon="input"
        id="answer"
        type="text"
        placeholder
        @keyup.enter="e6 = 1"
      ></v-text-field>
      <v-btn color="primary" @click="test()">Finalizar</v-btn>
      <v-btn color="error" @click="e6 = 3">Voltar</v-btn>
    </v-stepper-content>
  </v-stepper>
</template>

<script>

import Axios from 'axios';

export default {
  data() {
    return {
      e6: 1
    }
  },
  methods: {
    async test() {
      var config = {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjZGVmOWY0NGJhMDk2MDAwNDkwNTExYyIsImlhdCI6MTU1OTM0MTczNSwiZXhwIjoxNTU5NDI4MTM1fQ.HhN0eksg0W2d-1p9aoaBWhNMvqjsXOPJqPTqYj30Cas"
        }
      };

      var bodyParameters = {
        font: "TESTE - AXIOS",
        statement: "Qual o método de estudo que você utiliza para conseguir maior eficiência de aprendizado?",
        matter: "desenvolvimento pessoal",
        tags: ["estudo"],
        answer: "Teste"
      }

      await Axios.post(
        'https://donatello-testing.herokuapp.com/questionAuth',
        bodyParameters,
        config
      ).then((response) => {
        console.log(response)
      }).catch((error) => {
        console.log(error)
      });
    }
  }
}
</script>