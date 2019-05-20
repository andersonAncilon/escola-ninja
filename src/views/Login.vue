<template>
  <MyCenteredContainer>
    <MyCard>
      <template v-slot:card-content>
        <v-form style="width: 80%">
          <h2 class="display-1">Faça seu login</h2>
          <v-text-field
            class="login-btn-size mt-5"
            name="email"
            label="E-mail"
            append-icon="email"
            id="email"
            placeholder="Digite seu e-mail"
            v-model="login"
          ></v-text-field>
          <v-text-field
            class="login-btn-size"
            name="password"
            label="Senha"
            append-icon="input"
            id="password"
            type="password"
            placeholder="Digite sua senha"
            v-model="password"
            @keyup.enter="authenticate()"
          ></v-text-field>
          <v-layout column>
            <v-btn dark class color="teal" @click="authenticate()" :loading="loading">Entrar</v-btn>
            <v-btn dark flat class="mb-5" color="error">Esqueci a senha</v-btn>
          </v-layout>
        </v-form>
      </template>
    </MyCard>
  </MyCenteredContainer>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import MyCard from "../components/base/MyCard";
import MyCenteredContainer from "../components/base/MyCenteredContainer";

export default {
  components: {
    MyCard,
    MyCenteredContainer
  },
  data() {
    return {
      login: "",
      password: ""
    };
  },
  computed: {
    ...mapGetters(["user", "loading"])
  },
  methods: {
    ...mapActions(["auth"]),

    authenticate() {
      let lg = this.login;
      let pwd = this.password;

      if (lg !== "" && pwd !== "") {
        let status = this.auth({ email: lg, password: pwd });
      } else {
        alert("Favor, insira seu email e senha");
      }
    }
  }
};
</script>

<style lang="scss">
.login-btn-size {
  width: 100% !important;
}
</style>