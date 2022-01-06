<template>
  <v-row>
    <v-col cols="12"
      ><template>
        <v-card>
          <v-card-title>
            <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="coinList" @click:row="showDialog" :search="search">
            <template v-slot:[`item.image`]="{ item }">
              <v-img max-width="35" :src="item.image" />
            </template>
          </v-data-table>
        </v-card>

        <v-dialog max-width="1500" v-model="coinDetail">
          <coin-detail @hide="hideDialog" :coinId="coinId"/>
        </v-dialog>
      </template>
    </v-col>
  </v-row>
</template>

<script>
import CoinDetail from '../../components/CoinDetail.vue';

export default {
  components: { CoinDetail },
  name: 'CoinList',


  data() {
    return {
      coinDetail: false,
      coinId: '',
      search: '',
      coinList: [],
      headers: [
        { text: '#', value: 'image', align: 'left' },
        { text: '코인명', value: 'id', align: 'left' },
        { text: '심볼명', value: 'symbol', aligh: 'left' },
        { text: '현재가', value: 'current_price', aligh: 'left' }
      ],
    }
  },

  methods: {
    showDialog(row) {
      this.coinId = row.id
      this.coinDetail = true
    },
    hideDialog() {
      this.coinId = ''
      this.coinDetail = false
    }
  },

  created() {
    this.$axios
      .get(this.$coingecko + '/v3/coins/markets', { params: { vs_currency: 'krw', per_page: '100', page: '1', sparkline: false } })
      .then((res) => {
        const resData = res.data
        //console.log(resData)
        this.coinList = resData
      })
  }
}
</script>

<style></style>
