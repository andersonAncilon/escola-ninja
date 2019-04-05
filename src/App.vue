<template>
  <div class="escola-ninja-container">
    <v-app>
      <TheNavBar/>
      <router-view></router-view>
    </v-app>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavBar from './components/container/TheNavBar';
import TheFooter from './components/container/TheFooter';

export default {
  name: 'App',
  components: {
    TheNavBar,
    TheFooter,
  },
  data() {
    return {};
  }
};
</script>

<style>
html, body {
  padding: 0;
  height: 100vh;
  width: 100%;
}

.escola-ninja-container {
  padding: 0;
  height: 100vh;
  width: 100%;
}
</style>
