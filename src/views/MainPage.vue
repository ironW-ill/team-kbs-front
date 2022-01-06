<template>
  <v-row>
    <v-col cols="12"
      ><template>
        <v-card>
          <v-card-title>
            <v-text-field append-icon="mdi-magnify" label="Search" single-line hide-details v-model="search"></v-text-field>
          </v-card-title>
          <v-data-table :headers="headers" :items="coinList" :search="search">
            <template v-slot:[`item.large`]="{ item }">
              <v-img max-width="35" :src="item.large" />
            </template>
          </v-data-table>
        </v-card>
      </template>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'MainPage',
  data() {
    return {
      coinList: [],
      search: '',
      headers: [
        { text: '#', value: 'large', align: 'left' },
        { text: '코인명', value: 'id', align: 'left' },
        { text: '심볼명', value: 'symbol', aligh: 'left' },
        { text: '현재가', value: 'price_btc', aligh: 'left' }
      ]
    }
  },

  created() {
    this.$axios.get('https://api.coingecko.com/api/v3/search/trending').then((res) => {
      const resData = res.data.coins
      for (let i = 0; i < resData.length; i++) {
        this.coinList.push(resData[i].item)
      }
    })
  }
}
</script>
