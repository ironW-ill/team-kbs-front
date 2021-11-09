<template>
  <v-container>
    <v-row class="mt-12">
      <v-col cols="12">
        <template>
          <v-card class="px-8" color="blue lighten-2" dark>
            <v-card-title class="text-h5 blue lighten-3">
              아이템 찾기
            </v-card-title>
            <v-card-text class="mt-4">
              득템을 감별해드립니다. 아이템을 검색하세요
            </v-card-text>
            <v-card-text>
              <!-- vuetify의 태그 -->
              <v-autocomplete
                v-model="model"
                :items="items"
                :loading="isLoading"
                :search-input.sync="search"
                color="white"
                hide-no-data
                hide-selected
                item-text="Description"
                item-value="API"
                label="아이템"
                placeholder="아이템 명칭을 기입하세요"
                prepend-icon="mdi-database-search"
                return-object
              ></v-autocomplete>
            </v-card-text>
            <v-divider></v-divider>
            <v-expand-transition>
              <v-list v-if="model" class="blue lighten-3">
                <v-list-item v-for="({ value, key }, i) in fields" :key="i">
                  <v-list-item-content>
                    <v-list-item-title v-text="value"></v-list-item-title>
                    <v-list-item-subtitle v-text="key"></v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>
              </v-list>
            </v-expand-transition>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                :disabled="!model"
                color="grey darken-3"
                @click="model = null"
              >
                Clear
                <v-icon right> mdi-close-circle </v-icon>
              </v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Home",
  data: () => ({
    descriptionLimit: 60,
    entries: [],
    isLoading: false,
    model: null,
    search: null,
  }),

  computed: {
    fields() {
      if (!this.model) return [];
      // map은 foreach랑 비슷하게 동작하는듯 보이지만
      // 순회하면서 array를 만들어서 return해주는 js내장함수다.
      // map은 배열의 js내장함수니까, this.model은 객체를 여러개를 가지고 있는 array라는 걸 유츄할 수 있다.
      return Object.keys(this.model).map((key) => {
        // 객체를 리턴한다.
        /**
         * [
         *    { key: item.key, value: item.value},
         *    { key: item.key, value: item.value},
         *    { key: item.key, value: item.value}
         * ]
         */
        return {
          key,
          value: this.model[key] || "n/a",
        };
      });
    },

    items() {
      return this.entries.map((entry) => {
        const Description =
          entry.Description.length > this.descriptionLimit
            ? entry.Description.slice(0, this.descriptionLimit) + "..."
            : entry.Description;

        return Object.assign({}, entry, { Description });
      });
    },
  },

  // 변수를 지켜보고 있는 역할
  watch: {
    // search-input.sync => 키워드를 기입하자 keyboard 이벤트 발생 시
    search() {
      /** 방어 코드 로직 부분 시작 */
      // 이미 아이템이 로딩된 경우에는 바로 튕겨내준다.( return === break )
      if (this.items.length > 0) {
        return;
      }

      // 빤짝 거리면 바로 return 떤짐
      if (this.isLoading) {
        return;
      }
      /** 방어 코드 로직 부분 끝 */

      // 반짝 반짝 거리는 로딩 효과 노출 유무
      this.isLoading = true;

      // fetch 내장 인터페이스를 통해서 외부 API 서버와 통신을 했다.
      // then === 통신이 성공 되고난 후

      // Lazily load input items
      // 해당 API는 1379건의 정보를 다 내려줌
      fetch("https://api.publicapis.org/entries")
        // plain-text > json으로 변환
        .then((res) => res.json())
        .then((res) => {
          // res가 리스폰스객체
          console.log(res);

          // 구조 분해할당을해서 count(Number 숫자형 - 원시타입)와 entries(Array)
          const { count, entries } = res;

          // { count: number, entries: array }
          this.count = count;
          this.entries = entries;
          console.log(count);
          console.log(entries);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
