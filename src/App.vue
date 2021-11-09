<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>
        <h1>디아-득템</h1>
      </div>
    </v-app-bar>

    <v-main>
      <!-- router/index.js 기준으로 여기가 바뀐다. -->
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    //
  }),

  created() {},
};
</script>
