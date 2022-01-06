<template>
  <v-row>
    <v-col cols="12"
      ><template>
        <v-card>
          <v-card-title>
            <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="coinList">
            <template v-slot:[`item.image`]="{ item }">
              <v-img max-width="35" :src="item.image" />
            </template>
          </v-data-table>
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
      coinList: [],
      headers: [
        { text: '#', value: 'image', align: 'left' },
        { text: '코인명', value: 'id', align: 'left' },
        { text: '심볼명', value: 'symbol', aligh: 'left' },
        { text: '현재가', value: 'current_price', aligh: 'left' }
      ]
    }
  },
  created() {
    this.$axios
      .get(this.$coingecko + '/v3/coins/markets', { params: { vs_currency: 'krw', per_page: '100', page: '1', sparkline: false } })
      .then((res) => {
        const resData = res.data
        console.log(resData)
        this.coinList = resData
      })
  }
}
</script>

<style></style>
