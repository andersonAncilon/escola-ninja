<template>
  <MyCenteredContainer>
    <MyModal
      :handleModal="modalStatus"
      @closeModal="$router.push('/questoes')"
      :modalContentText="modalText"
      :modalCloseButtonText="modalButtonText"
    />
    <MyCard>
      <template v-slot:card-content>
        <v-form lazy-validation ref="form">
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
import MyModal from "../components/base/MyModal";

import rules from "../utils/Rules";
import { Post } from "../utils/Api";

export default {
  components: {
    MyCard,
    MyCenteredContainer,
    MySnackBar,
    MyModal
  },
  data() {
    return {
      user: {
        name: "",
        email: "",
        password: "",
        flag: "student"
      },
      modalText:
        "Cadastro realizado com sucesso, clique no botão abaixo para continuarmos",
      modalButtonText: "Confirmar",
      rules: rules,
      snackbarStatus: false,
      modalStatus: false,
      loading: false
    };
  },
  methods: {
    async register() {
      var status = 0;
      this.loading = true;

      await Post("auth/register", this.user).then(res => {
        status = res.status;
      });

      if (status == 200) {
        this.snackbarStatus = false;
        this.modalStatus = true;
        this.loading = false;

        setTimeout(() => {
          this.$router.push("/questoes");
        }, 3000);
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
