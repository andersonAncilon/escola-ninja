<template>
  <MyCenteredContainer>
    <MyCard>
      <template v-slot:card-content>
        <v-form lazy-validation ref="form" style="width: 80%">
          <h2 class="display-1">Faça seu cadastro</h2>
          <v-text-field
            class="login-btn-size mt-5"
            name="name"
            id="name"
            v-model="user.name"
            append-icon="person"
            placeholder="Como podemos te chamar ?"
            :rules="rules.name"
          ></v-text-field>
          <v-text-field
            class="login-btn-size"
            name="email"
            id="email"
            v-model="user.email"
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
          <v-btn dark class="mb-5" color="teal" @click="validate()" :loading="loading">Cadastrar</v-btn>
          <v-btn outline dark class="mb-5" color="error" @click="$refs.form.reset()">Limpar dados</v-btn>
        </v-form>
      </template>
    </MyCard>
    <MySnackBar :showSnackBarProp="snackbarStatus" @closeSnack="snackbarStatus = !snackbarStatus"/>
  </MyCenteredContainer>
</template>

<script>
import MyCard from "../components/base/MyCard";
import MyCenteredContainer from "../components/base/MyCenteredContainer";
import MySnackBar from "../components/base/MySnackBar";

import rules from "../utils/Rules";
import { Post } from "../utils/Api";
import { mapActions } from "vuex";

export default {
  components: {
    MyCard,
    MyCenteredContainer,
    MySnackBar
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        flag: "student"
      },
      rules: rules,
      snackbarStatus: false,
      loading: false
    };
  },
  methods: {
    ...mapActions(["auth"]),
    async register() {
      var status = 0;
      this.loading = true;

      await Post("auth/register", this.user).then(res => {
        status = res.status;
      });

      if (status == 200) {
        this.snackbarStatus = false;

        this.loading = false;

        this.auth({ email: this.user.email, password: this.user.password });
      } else {
        alert("Ops, algo deu errado");
        this.loading = false;
      }
    },
    validate() {
      if (this.$refs.form.validate()) {
        this.register();
      } else this.snackbarStatus = true;
    }
  }
};
</script>
