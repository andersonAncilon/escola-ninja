<template>
  <div class="mt-5">
    <v-card
      v-for="ax in axis"
      class="mb-3"
      :key="ax.id"
      @click="$store.commit('setSelectedAxis', ax.id)"
    >
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ax.id}}</div>
          <span>Varias bla bla bla bla bla bla</span>
          <router-link to="/foo">Go to Foo</router-link>
        </div>
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  components: {
    MyCard: () => import("../base/MyCard.vue")
  },
  computed: {
    ...mapGetters(["selectedAxis"])
  },
  data() {
    return {
      axis: [
        { id: 1, content: "Eixo 1" },
        { id: 2, content: "Eixo 2" },
        { id: 3, content: "Eixo 3" },
        { id: 4, content: "Eixo 4" }
      ]
    };
  },
  methods: {
    show(id) {
      alert(id);
    },
    ...mapMutations(["setSelectedAxis"])
  }
};
</script>

<style >
.v-card {
  cursor: pointer !important;
}
</style>
