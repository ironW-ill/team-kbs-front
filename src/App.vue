<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div>
        <h1>디아-득템</h1>
      </div>
    </v-app-bar>

    <v-main>
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
