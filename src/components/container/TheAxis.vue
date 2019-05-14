<template>
  <div class="mt-5">
    <v-card v-for="ax in axis" class="mb-3" :key="ax.id">
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ax.id}}</div>
          <span>Varias bla bla bla bla bla bla</span>
          <router-link :to="{ path: `/questoes/${ax.id}` }">Entrar</router-link>
        </div>
      </v-card-title>
    </v-card>
  </div>
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
