<template>
  <v-row>
    <v-col cols="12"
      ><template>
        <v-card>
          
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CoinDetail',
  props: {
    coinId: {
      type: String,
      default: 'bitcoin'
    }
  },
  data() {
    return {
      coinList: [],
      headers: [
        { text: '랭크', value: 'large', align: 'left' },
        { text: '#', value: 'large', align: 'left' },
        { text: '코인명', value: 'id', align: 'left' },
        { text: '심볼명', value: 'symbol', aligh: 'left' },
        { text: '현재가', value: 'price_btc', aligh: 'left' }
      ]
    }
  },

  created() {
    this.$axios.get(this.$coingecko + '/v3/coins/' + this.coinId).then((res) => {
      const resData = res.data
      console.log(resData)
    })
  }
}
</script>
