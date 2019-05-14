<template>
  <div>
    <v-toolbar dark color="teal">
      <v-toolbar-side-icon class="hidden-lg-and-up" @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-avatar>
        <img src="../../assets/NinjaLogo.png">
      </v-avatar>
      <v-toolbar-title class="hidden-md-and-down">Escola Ninja</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-md-and-down">
        <v-btn
          flat
          v-for="item in items"
          :key="item.title"
          @click="$router.push(item.path)"
        >{{ item.title }}</v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" temporary absolute width="200" id="drawer">
      <v-list dense>
        <v-list-tile v-for="item in items" :key="item.title" @click="$router.push(item.path)">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: null,
      items: [
        { title: "Home", icon: "home", path: "/" },
        { title: "Questoes", icon: "dashboard", path: "/questoes" },
        { title: "Entrar", icon: "question_answer", path: "/login" },
        { title: "Cadastrar-se", icon: "question_answer", path: "/cadastro" }
      ]
    };
  }
};
</script>
