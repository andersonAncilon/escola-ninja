<template>
  <div class="escola-ninja-container">
    <v-app>
      <TheNavBar/>
      <v-layout v-if="$router.currentRoute.path != '/'" class="hidden-lg-and-up">
        <v-btn outline @click="$router.back()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
      </v-layout>
      <transition name="list" :appear="true" mode="out-in">
        <router-view></router-view>
      </transition>
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
html,
body {
  padding: 0;
  height: 100vh;
  width: 100%;
}

.escola-ninja-container {
  padding: 0;
  height: 100vh;
  width: 100%;
}

.list-enter,
.list-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
.list-enter-active,
.list-leave-active {
  transition: all 0.5s;
}
</style>
