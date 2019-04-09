<template>
  <div class="text-xs-center">
    <v-dialog v-model="dialog" width="500">
      <v-card>
        <v-card-title dark class="teal lighten-2 display-1" primary-title>Sucesso</v-card-title>

        <v-card-text>{{ modalContentText }}</v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="primary" flat @click="$emit('closeModal')">{{ modalCloseButtonText }}</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    handleModal: null,
    modalContentText: {
        type: String,
        default: 'Card content'
    },
    modalCloseButtonText: {
        type: String,
        default: 'Close'
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  watch: {
    handleModal: function(val) {
      this.dialog = val;
    }
  }
};
</script>