<template>
  <MyCenteredContainer>
    <MyCard>
      <template v-slot:card-content>
        <h2 class="display-2 mb-3 mt-3">Bem vindo, você é:</h2>
        <v-btn color="teal" class="white--text home-btn-size" to="/login">Sou Aluno</v-btn>
        <v-btn color="info" class="home-btn-size" to="/login">Sou Professor</v-btn>
        <v-btn outline color="error" class="home-btn-size mb-5" to="/cadastro">Não sou cadastrado</v-btn>
      </template>
    </MyCard>
  </MyCenteredContainer>
</template>

<script>
import MyCard from '../components/base/MyCard';
import MyCenteredContainer from '../components/base/MyCenteredContainer';

export default {
  components: {
    MyCard,
    MyCenteredContainer
  }
};
</script>

<style lang="scss">
.home-btn-size {
  width: 75% !important;
}
</style>