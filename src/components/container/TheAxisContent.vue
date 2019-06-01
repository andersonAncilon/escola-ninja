<template>
  <div class="mt-5">
    <template v-for="(ct, index) in contents[$route.params.conteudo]">
      <v-card class="mb-3" :key="index">
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ct.toLowerCase()}}</div>
            <span></span>
            <router-link :to="{ path: `/listagem/${ct.toLowerCase()}` }">Entrar</router-link>
          </div>
        </v-card-title>
      </v-card>
    </template>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contents: [
        ["Teste 1", "Teste 2", "Teste 3", "Teste 4"],
        ["Teste 5", "Teste 6", "Teste 7", "Teste 8"],
        ["Teste 9", "Teste 10", "Teste 11", "Teste 12"],
        ["Teste 13", "Teste 14", "Teste 15", "Teste 16"]
      ]
    };
  }
};
</script>
