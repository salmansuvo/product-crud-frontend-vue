<template>
  <div id="login_form" class="col-md-6">
  <form @submit.prevent="getFormValues">
    <div class="form-group">
      <label for="email">Email address</label>
      <input type="email" class="form-control" name="email" id="email" aria-describedby="emailHelp" placeholder="Enter email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
    </div>
    <div class="form-group">
      <label for="password">Password</label>
      <input type="password" class="form-control" name="password" id="password" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary btn-submit">Submit</button><br>
  </form>
  </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
  name: "LoginForm",
  data: function () {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    ...mapActions({
      signIn: 'auth/signIn'
    }),
    getFormValues: function (submitEvent) {
      this.signIn(submitEvent).then(() => {
        this.$router.push(
           '/list'
        )
      })
    },
  }
}
</script>

<style scoped>
#login_form{
  top: 50%;
  left: 25%;
  /*text-align: center;*/
}
.btn-submit{
  top: 50%;
  left: 25%;
  /*text-align: center;*/
}
</style>