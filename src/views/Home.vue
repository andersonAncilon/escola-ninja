<template>
  <v-container grid-list-md text-xs-center>
    <v-layout align-center justify-center fill-height>
      <MyCard/>
    </v-layout>
  </v-container>
</template>

<script>

import MyCard from '../components/base/MyCard';

export default {
  components: {
    MyCard
  }
};
</script>

<style lang="scss">

.home-btn-size {
  width: 75% !important
}

</style>