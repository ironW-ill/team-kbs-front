<template >
    <v-form
    ref="form"
    v-model="valid"
    lazy-validation
  >
    <v-text-field
      v-model="id"
      :counter="15"
      :rules="idRules"
      label="아이디"
      required
    ></v-text-field>

    <v-text-field
      v-model="password"
      :counter="20"
      :rules="passwordRules"
      label="패스워드"
      required
    ></v-text-field>

    <v-text-field
      v-model="name"
      :counter="6"
      :rules="nameRules"
      label="이름"
      required
    ></v-text-field>

    <v-text-field
      v-model="phone"
      :counter="11"
      :rules="phoneRules"
      label="휴대폰"
      required
    ></v-text-field>

    <v-text-field
      v-model="email"
      :rules="emailRules"
      label="이메일"
      required
    ></v-text-field>

    <v-checkbox
      v-model="checkbox"
      :rules="[v => !!v || '회원가입 동의를 클릭 후 진행해주세요']"
      label="회원가입에 동의 하십니까?"
      required
    ></v-checkbox>

    <v-btn
      :disabled="!valid"
      color="success"
      class="mr-4"
      @click="validate"
    >
      회원가입
    </v-btn>

    <v-btn
      color="error"
      class="mr-4"
      @click="reset"
    >
      초기화
    </v-btn>
  </v-form>
</template>
<script>
export default {
    data: () => ({
      valid: true,
      id:'',
      idRules:[
        v => !!v || '아이디는 필수 정보입니다',
        v => (v && v.length <= 10) || '아이디는 10글자 이상 입력할 수 없습니다',
      ],
      password:'',
      passwordRules:[
        v => !!v || '패스워드는 필수 정보입니다',
        v => /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/.test(v) || '패스워드에 최소1개의 숫자 혹은 특수문자를 포함해야합니다',
      ],
      name: '',
      nameRules: [
        v => !!v || '이름은 필수 정보입니다',
        v => (v && v.length <= 6) || '이름은 6글자이상 입력할 수 없습니다',
      ],
      phone:'',
      phoneRules:[
        v => !!v || '전화번호는 필수 정보입니다',
        v => !/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|a-z]/.test(v) || '전화번호는 숫자만 입력가능합니다',
      ],
      email: '',
      emailRules: [
        v => !!v || '이메일은 필수 정보입니다',
        v => /.+@.+\..+/.test(v) || '이메일 규격을 맞춰주세요',
      ],
      checkbox: false,
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>
<style>
    
</style>