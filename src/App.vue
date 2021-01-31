<template>
  <div class="container" id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";

export default {
  name: 'App',
  components:{
    Navbar
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  color: #2c3e50;
  margin-top: 0px;
}
#img{
  height: 25px;
  width: 25px;
}
.navbar{
  margin-bottom: 60px;
}
.bg-light {
  background-color: #94b5d6 !important;
}
</style>
