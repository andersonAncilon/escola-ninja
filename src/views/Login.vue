<template>
  <MyCenteredContainer>
    <MyCard>
      <template v-slot:card-content>
        <h2 class="display-1">Faça seu login</h2>
        <v-text-field
          class="login-btn-size mt-5"
          name="email"
          label="E-mail"
          id="email"
          placeholder="Digite seu e-mail"
        ></v-text-field>
        <v-text-field
          class="login-btn-size"
          name="password"
          label="Senha"
          id="password"
          type="password"
          placeholder="Digite sua senha"
        ></v-text-field>
        <v-btn dark class="login-btn-size mb-5" color="teal">Entrar</v-btn>
      </template>
    </MyCard>
  </MyCenteredContainer>
</template>

<script>
import MyCard from "../components/base/MyCard";
import MyCenteredContainer from "../components/base/MyCenteredContainer";

export default {
  components: {
    MyCard,
    MyCenteredContainer
  }
};
</script>

<style lang="scss">
.login-btn-size {
  width: 75% !important;
}
</style>