<template>
  <v-snackbar
    v-model="showSnackBarData"
    :bottom="y === 'bottom'"
    :left="x === 'left'"
    :multi-line="mode === 'multi-line'"
    :right="x === 'right'"
    :timeout="0"
    :top="y === 'top'"
    :vertical="mode === 'vertical'"
  >
    Preencha os campos corretamente!
    <v-btn color="pink" flat @click="changeSnackbarStatus()">
      <v-icon>close</v-icon>
    </v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  props: {
    showSnackBarProp: null
  },
  data() {
    return {
      y: 'top',
      x: null,
      mode: '',
      timeout: 6000,
      showSnackBarData: null
    }
  },
  methods: {
    ...mapMutations(['changeSnackbarStatus'])
  },
  watch: {
    showSnackBarProp: function (val) {
      this.showSnackBarData = val;
    },
  }
}
</script>
