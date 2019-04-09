
<template>
  <v-footer height="auto">
    <v-card width="100%" flat tile class="primary lighten-1 white--text text-xs-center">
      <v-card-text>
        <v-btn v-for="icon in icons" :key="icon" class="md-3 white--text" icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text 
        class="white--text pt-0"
      ><h2>Escola Ninja</h2></v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        &copy;2019 —
        <strong>Unitins</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'fab fa-facebook',
        'fab fa-twitter',
        'fab fa-google-plus',
        'fab fa-linkedin',
        'fab fa-instagram'
      ]
    })
  }
</script>