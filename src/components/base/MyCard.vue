<template>
  <v-card class="black--text" width="80vh" height="auto">
    <v-card-title primary-title>
      <v-layout column justify-center align-center>
        <slot name="card-content"></slot>
      </v-layout>
    </v-card-title>
  </v-card>
</template>
