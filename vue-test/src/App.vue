<template>
  <div id="app">
    <div class="container">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </div>
    <!--<router-link to="/">首页</router-link>-->
    <!--<router-link to="/login">登录</router-link>-->
    <!--<router-link to="/">首页</router-link>-->
    <!--<router-link to="/list">列表</router-link>-->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

</style>
