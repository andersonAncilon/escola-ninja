<template>
  <v-card class="black--text" width="80vh" height="auto">
    <v-card-title primary-title>
      <v-layout column justify-center align-center>
        <h2 class="display-2 mb-3 mt-3">Bem vindo, você é:</h2>
        <v-btn color="teal" class="white--text home-btn-size">Sou Aluno</v-btn>
        <v-btn color="info" class="home-btn-size">Sou Professor</v-btn>
        <v-btn outline color="error" class="home-btn-size">Não sou cadastrado</v-btn>
      </v-layout>
    </v-card-title>
    <v-card-actions>
      <v-btn flat dark>Listen now</v-btn>
    </v-card-actions>
  </v-card>
</template>
