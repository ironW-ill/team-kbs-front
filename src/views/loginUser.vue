<template >
<v-container>
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="id"
      label="아이디"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      label="패스워드"
      required
    ></v-text-field>

    <v-btn
      color="error"
      class="mr-4"
      @click="login"
    >
      로그인
    </v-btn>
  </v-form>
</v-container>
</template>
<script>
export default {
    data: () => ({
      valid: true,
      id:'',
      password:'',
    }),

    methods: {
      login(e){
          console.log(e.valid.traget);
      }
    },
}
</script>
<style>
    
</style>