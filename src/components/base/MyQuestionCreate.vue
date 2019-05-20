<template>
  <v-container fluid>
    <v-layout row justify-center>
      <v-flex md8>
        <h2>Criação</h2>
        <MyStepper/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import MyStepper from '../base/MyStepper';

export default {
  components: {
    MyStepper
  }
}
</script>
