<template>
  <div>
    <h2>MAIN</h2>
  </div>
</template>

<script>
export default {
  name: "Main",

  data() {
    return {};
  },

  created() {
    // 코인게코 API 연동핑 테스트
    this.$axios.get(this.$coingecko + "/v3/ping").then((res) => {
      console.log(res.data.gecko_says); // (V3) To the Moon!
    });
  },
};
</script>
