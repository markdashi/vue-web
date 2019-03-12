<template>
  <div>
    <h2>列表页面</h2>
    <!--{{ $route.params.id }}-->
    <div class="jumbotron">
      <div class="row">
        <div class="col-xs-3">
          <div class="thumbnail">
            <img src="https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29610.jpg" alt="">
          </div>
          </div>
        <div class="col-xs-9">
          <h3>动物世界 2018 7.4</h3>
          <p><span>国家:中国大陆</span><span>类型:动作 剧情 冒险</span></p>
          <h3>演员</h3>
          <div class="row">
            <div class="col-xs-3">
              <a href="#" class="thumbnail"><img src="https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p29610.jpg" alt=""></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
      name: "actor",
      data(){
          return {
            list:{}
          }
      },
      created(){
        this.getData();
      },
      //方法
      mounted(){
        //this.getData();
      },
      // 属性
      methods:{
        getData(){
          var url = 'https://api.douban.com/'+'v2/movie/subject/'+this.$route.params.id;
          this.$http.jsonp(url).then(res=>{
            console.log(res.body);
          })
        }
      }
  }
</script>

<style scoped>

</style>
