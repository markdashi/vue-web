<template>
  <div>
    <ul>
      <li v-for="(item,index) in lists" :key="item">
        <router-link :to="{name:'detail',params:{num:item}}">{{ index }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    data(){
      return{
        lists:[1,2,3,4,5,6]
      }
    }
  }
</script>

<style scoped>

</style>
