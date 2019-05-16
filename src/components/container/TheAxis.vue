<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap>
      <v-flex v-for="ax in axis" :key="ax.id" md6>
        <v-card>
          <v-card-title primary-title>
            <v-card-text>
              <span class="headline">{{ax.id}}</span>
              <p>Varias bla bla bla bla bla bla</p>
              <router-link :to="{ path: `/questoes/${ax.id}` }">Entrar</router-link>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      axis: [
        { id: 0, content: "Eixo 1" },
        { id: 1, content: "Eixo 2" },
        { id: 2, content: "Eixo 3" },
        { id: 3, content: "Eixo 4" }
      ]
    };
  },
  methods: {
    show(id) {
      alert(id);
    }
  }
};
</script>

<style >
</style>
