<template>
  <!-- Default form login -->
  <form v-if="show">
    <p class="h4 text-center mb-4">Login</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Pseudo</label>
    <input type="text" id="defaultFormRegisterNameEx" v-model="pseudo" class="form-control" />
    <br />
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Password</label>
    <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
    <div class="text-center mt-4">
      <b-button class="btn btn-unique-log" @click="registerVal">Log In</b-button>
      <button class="btn btn-unique" @click="show = !show">Register</button>
    </div>
  </form>

  <!-- Default form register -->

  <form v-else>
    <p class="h4 text-center mb-4">Sign up</p>
    <label for="defaultFormRegisterNameEx" class="grey-text">Name</label>
    <input type="text" id="defaultFormRegisterNameEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterSurnameEx" class="grey-text">Pseudo</label>
    <input type="text" id="defaultFormRegisterEmailEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterPasswordEx" class="grey-text">Password</label>
    <input type="password" id="defaultFormRegisterConfirmEx" class="form-control" />
    <br />
    <label for="defaultFormRegisterConfirmEx" class="grey-text">Confirm password</label>
    <input type="password" id="defaultFormRegisterPasswordEx" class="form-control" />
    <div class="text-center mt-4">
      <button class="btn btn-unique-val">Validate</button>
    </div>
  </form>
  <!-- Default form register -->
</template>

<script>
import { mdbInput, mdbBtn } from 'mdbvue'
export default {
  name: 'Basic',
  components: {
    mdbInput,
    mdbBtn
  },
  data() {
    return {
      show: true,
      name: '',
      surname: '',
      password: '',
      confirmPassword: '',
      pseudo: ''
    }
  },
  methods: {
    async registerVal() {
      try {
        localStorage.setItem('username', this.pseudo)
        this.$store.dispatch('login/setPseudo', this.pseudo)
        this.$router.push({
          path: '/userPage'
        })
      } catch (error) {
        console.log(error)
      }
    }
  }
}
</script>

<style>
form {
  width: 80%;
  margin: 60px auto;
  padding: 20px;
  background: whitesmoke;
  border-radius: 5px;
  color: black;
  box-shadow: 10px 5px 5px #66c3ef;
}

.form-control {
  border: 0.1px solid black;
}

.btn-unique {
  color: black;
}

.btn-unique-log,
.btn-unique-val {
  background: #25a9e8;
}
</style>
