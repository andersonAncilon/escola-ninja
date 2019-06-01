<template>
  <MyCenteredContainer>
    <template>
      <v-layout>
        <v-flex xs12 sm6 offset-sm3>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn outline color="orange">Responder</v-btn>
            </v-card-actions>
            <v-layout style="overflow-x: scroll">
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
            </v-layout>
          </v-card>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn outline color="orange">Responder</v-btn>
            </v-card-actions>
            <v-layout style="overflow-x: scroll">
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
            </v-layout>
          </v-card>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn outline color="orange">Responder</v-btn>
            </v-card-actions>
            <v-layout style="overflow-x: scroll">
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
            </v-layout>
          </v-card>
          <v-card>
            <v-card-title primary-title>
              <div>
                <h3 class="headline mb-0">Kangaroo Valley Safari</h3>
                <div>{{ card_text }}</div>
              </div>
            </v-card-title>

            <v-card-actions>
              <v-btn outline color="orange">Responder</v-btn>
            </v-card-actions>
            <v-layout style="overflow-x: scroll">
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
              <v-btn flat>Aulas</v-btn>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </template>
  </MyCenteredContainer>
</template>
  </MyCenteredContainer>
</template>

<script>
export default {
  components: {
    MyCenteredContainer: () => import('../components/base/MyCenteredContainer')
  },
  data() {
    return {
      card_text: 'Lorem ipsum dolor sit amet, brute iriure accusata ne mea. Eos suavitate referrentur ad, te duo agam libris qualisque, utroque quaestio accommodare no qui. Et percipit laboramus usu, no invidunt verterem nominati mel. Dolorem ancillae an mei, ut putant invenire splendide mel, ea nec propriae adipisci. Ignota salutandi accusamus in sed, et per malis fuisset, qui id ludus appareat.'
    }
  }
}
</script>