<template>
<p></p>
</template>

<script>
import {mapActions} from "vuex";
export default {
name: "Logout",
  mounted() {
  this.signOut()
  },
  methods: {
    ...mapActions({
      signOutAction: 'auth/signOut'
    }),
    signOut () {
      this.signOutAction().then(() => {
        this.$router.replace({
          path: '/login'
        })
      })
    }
  }
}
</script>

<style scoped>

</style>