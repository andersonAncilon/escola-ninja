<template>
  <div class="escola-ninja-container">
    <v-app>
      <TheNavBar/>
    </v-app>
    <TheFooter/>
  </div>
</template>

<script>
import TheNavBar from "./components/container/TheNavBar";
import TheFooter from "./components/container/TheFooter";

export default {
  name: "App",
  components: {
    TheNavBar,
    TheFooter
  },
  data() {
    return {};
  }
};
</script>

<style>
.escola-ninja-container {
  padding: 0;
  height: 100%;
}
</style>
