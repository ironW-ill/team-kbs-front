<template>
  <v-row>
    <v-col cols="12"
      ><template>
        <v-card>
          <v-card-title>
            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="coinList" :search="search"></v-data-table>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CoinList',
  data() {
    return {
      search: '',
      coinList: [],
      headers: [
        { text: '코인명', value: 'id', align: 'left' },
        { text: '심볼명', value: 'symbol', aligh: 'left' }
      ]
    }
  },
  created() {
    this.$axios.get(this.$coingecko + '/v3/coins/list').then((res) => {
      const resData = res.data
      this.coinList = resData
    })
  }
}
</script>

<style></style>
