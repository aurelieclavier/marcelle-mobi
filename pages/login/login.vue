<template>
  <!-- Default form login -->
    <form v-if="show">
      <p class="h4 text-center mb-4">Login</p>
      <label for="defaultFormRegisterNameEx" class="grey-text" v-model="pseudo">Pseudo</label>
      <input type="text" id="defaultFormRegisterNameEx" class="form-control"/>
      <br/>
      <label for="defaultFormRegisterPasswordEx" class="grey-text" v-model="password">Password</label>
      <input type="password" id="defaultFormRegisterPasswordEx" class="form-control"/>
      <div class="text-center mt-4">
        <b-button class="btn btn-unique-log" @click="registerVal">Log In</b-button>
        <button class="btn btn-unique" @click="show = !show">Register</button>
      </div>
    </form>

    <!-- Default form register -->

    <form v-else>
      <p class="h4 text-center mb-4">Sign up</p>
      <label for="defaultFormRegisterNameEx" class="grey-text" v-model="name">Name</label>
      <input type="text" id="defaultFormRegisterNameEx" class="form-control"/>
      <br/>
      <label for="defaultFormRegisterSurnameEx" class="grey-text" v-model="surname">Pseudo</label>
      <input type="text" id="defaultFormRegisterEmailEx" class="form-control"/>
      <br/>
      <label for="defaultFormRegisterPasswordEx" class="grey-text" v-model="password">Password</label>
      <input type="password" id="defaultFormRegisterConfirmEx" class="form-control"/>
      <br/>
      <label for="defaultFormRegisterConfirmEx" class="grey-text" v-model="confirmPassword">Confirm password</label>
      <input type="password" id="defaultFormRegisterPasswordEx" class="form-control"/>
      <div class="text-center mt-4">
        <button class="btn btn-unique-val">Validate</button>
      </div>
    </form>
  <!-- Default form register -->
</template>

<script>
  import { mdbInput, mdbBtn } from 'mdbvue';
  export default {
    name: 'Basic',
    components: {
      mdbInput,
      mdbBtn
    },
    data() {
      return {
        show: true,
        name: "",
        surname: "",
        password: "",
        confirmPassword: "",
      }
    },
    computed: {
      storePseudo() {
        return this.$store.state.login.pseudo = this.pseudo
      }
    },
    methods: {
        async registerVal() {
          try {
            this.$store.state.login.pseudo = this.pseudo
            this.$router.push({
              path: '/'
            })
          }
          catch (error) {
          }
        }
      }
  }
</script>

<style>
  form {
    width: 30%;
    margin: 50px auto;
    padding: 20px;
    background: whitesmoke;
    border-radius: 5px;
    color: black;
    box-shadow: 10px 5px 5px #66C3EF;
  }

  .form-control {
    border: 0.1px solid black;
  }

  .btn-unique {
    color: black;
  }

  .btn-unique-log, .btn-unique-val {
    background: #25A9E8;
  }
</style>
