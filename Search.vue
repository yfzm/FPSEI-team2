<template>
  <div id="search">
    <input type="text" placeholder="请输入关键字" id="input_type"/>
    <button v-on:click="showNextpage" id="button_type">搜索</button>
  </div>
</template>

<script>
import HelloWorld from './HelloWorld';
export default {
  name: 'Search',

  methods: {
     showNextpage: function(){
       this.$router.go('./HelloWorld')
     }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#search {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  background: #cccccccc;
}
#input_type {
  position: relative;
  top: 10px;
  left: 10px;
  width: 400px;
  height: 30px;
  font-size:20px;
}
#button_type{
  position:relative;
  top: 10px;
  left: 10px;
  width: 70px;
  height:35px;
  font-size:20px;
}
</style>
