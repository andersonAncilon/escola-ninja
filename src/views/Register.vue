<template>
    <MyCenteredContainer>
      <MyCard>
        <template v-slot:card-content>
          <h2 class="display-1">Faça seu cadastro</h2>
          <v-text-field
            class="login-btn-size mt-5"
            name="email"
            id="email"
            v-model="user.name"
            append-icon="email"
            placeholder="Digite seu e-mail"
            :rules="rules.email"
          ></v-text-field>
          <v-text-field
            class="login-btn-size"
            name="password"
            id="password"
            type="password"
            :rules="rules.password"
            v-model="user.password"
            append-icon="input"
            placeholder="Digite sua senha"
          ></v-text-field>
          <v-text-field
            class="login-btn-size"
            name="password"
            id="confirmPassword"
            type="password"
            :rules="rules.confirmPassword(user.password)"
            append-icon="input"
            ref="confirmPassword"
            placeholder="Repita sua senha"
          ></v-text-field>
          <v-btn dark class="login-btn-size mb-5" color="teal">Cadastrar</v-btn>
        </template>
      </MyCard>
    </MyCenteredContainer>
</template>

<script>
import MyCard from "../components/base/MyCard";
import MyCenteredContainer from "../components/base/MyCenteredContainer";
import rules from "../utils/Rules.js";

export default {
  components: {
    MyCard,
    MyCenteredContainer
  },
  data() {
    return {
      user: {
        name: "",
        password: ""
      },
      rules: rules
    };
  }
};
</script>

<style lang="scss">
.login-btn-size {
  width: 75% !important;
}
</style>