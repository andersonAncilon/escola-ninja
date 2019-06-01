<template>
  <v-container fluid grid-list-sm>
    <v-layout row wrap justify-center text-xs-center>
      <v-flex md6>
        <v-card @click="$router.push('/painel/criarQuestao')">
          <v-card-title primary-title>
            <v-card-text>
              <span class="headline">1</span>
              <h2>Criar questão</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
        <v-card class="mt-3">
          <v-card-title primary-title>
            <v-card-text>
              <span class="headline">2</span>
              <h2>Minhas questões</h2>
            </v-card-text>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<style>
.v-card {
  cursor: pointer;
  transition: 0.3s;
}
</style>