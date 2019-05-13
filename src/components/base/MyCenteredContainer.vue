<template>
  <v-app>
    <v-layout v-if="$router.currentRoute.path != '/'" class="hidden-lg-and-up">
      <v-btn outline @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>

    <v-layout align-center justify-center fill-height text-xs-center ml-3 mr-3>
      <slot></slot>
    </v-layout>
  </v-app>
</template>

