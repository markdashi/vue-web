<template>
  <div>
    <h1>最热电影</h1>
    <table class="table table-bordered table-striped">
        <thead>
        <tr>
        <th>电影名称</th>
        <th>电影海报</th>
        <th>评分</th>
      </tr>
        </thead>
        <tbody>
        <tr v-for="(item,index) in list" :key="item.title">
          <td><router-link :to="{name:'actor',params:{id:item.id}}">{{ item.title }}</router-link></td>
          <td><img :src="item.casts[0].avatars.small" alt=""></td>
          <td>{{ item.rating.average }}</td>
        </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
    export default {
      name: "index",
      data () {
        return {
          list:[]
        }
      },
      mounted(){
        this.getMoveis()
      },
      methods:{
        getMoveis() {
          this.$http.jsonp('https://api.douban.com/v2/movie/in_theaters')
            .then(function(res){
                console.log(res.body);
                 this.list = res.body.subjects
            })
        },
        gotoDetail(item) {
          console.log(item)
        }
      }
    }
</script>

<style scoped>

</style>
