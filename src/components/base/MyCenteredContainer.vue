<template>
  <v-app>
    <v-layout v-if="$router.currentRoute.path != '/'">
      <v-btn outline @click="$router.back()">
        <v-icon>arrow_back</v-icon>
      </v-btn>
    </v-layout>
    <v-container grid-list-md text-xs-center class="mb-3">
      <v-layout align-center justify-center fill-height>
        <slot></slot>
      </v-layout>
    </v-container>
  </v-app>
</template>

