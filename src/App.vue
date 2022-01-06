<template>
  <v-app>
    <!-- 앱바 상단 -->
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <router-link :to="{ path: '/' }">
          <span style="color: white">MAIN</span>
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <!-- 네비게이션 -->
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense nav>
        <v-list-item v-for="item in items" :key="item.title" link :to="item.to">
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main app>
      <v-container>
        <router-view />
      </v-container>
    </v-main>
    <!-- 푸터 영역 -->
    <v-footer color="primary" dark>
      <v-spacer /> 2021 copyright by Spartan-Coin
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      drawer: false,
      items: [{ title: "MAIN", icon: "mdi-view-dashboard", to: "/" }],
      right: null,
    };
  },
};
</script>
