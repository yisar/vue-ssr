<template>
    <div id="app">
        <router-view></router-view>
        <p>{{msg}}</p>
        <input type="text" v-model="msg">
    </div>

</template>

<script>
  export default {
    data() {
      return {
        msg: 'hello world'
      }
    }
  }
</script>

<style>
    #app {
        background: antiquewhite;
    }

</style>