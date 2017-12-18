<template>
  <div id="goodList">
    <ul class="goods">
      <li v-for="good, index in goods" class="good">
        <span
        @click = "send_Item(good)"
        >
          <li class = "good_inf">
            <div class = "good_image">
              <img :src="good.image">
            </div>
            <div class = "good_name">
              {{ good.name }}
            </div>
           </li>
           <li class = "good_price">
              <p class="price">￥{{good.price}}</p>
           </li>
           <li class = "good_s_volume">
             <p class = "volume">{{ good.sale_volume }}</p>
           </li>
           <li class = "good_score">
             <p class = "score">{{ good.g_score }}</p>
           </li>
          </span>
      </li>
    </ul>
  </div>
</template>
<script>
import book from '/assets/data.json'

export default {
  name: 'GoodList',
  props: ['searchArr'],
  data: () => ({
    bb: book,
    // use array to save goods, here i use some examples to show the web
    goods: []
  }),
  mounted(){
    this.sort_arr(searchArr);
  },
  watch:{
    searchArr: function(new_Arr) {
      this.sort_arr(new_Arr);
    }
  },
  methods: {
    send_Item: function(good) {
      this.$emit ('sendItem', good);
    },
    sort_arr: function(searchArr){
      this.goods.splice(searchArr.length);
      var i = 0;
      var j = 0;
      var save_arr = [];
      while (i < searchArr.length){
        j = 0;
        while (j < bb.Books.length){
          if (searchArr[i].id === bb.Books[j].id){
            save_arr.push(bb.Books[j]);
            break;
          }
          j ++;
        }
        i ++;
      }
      for (i = 0; i < save_arr.length-1; i ++){
        for(j = i + 1; j < save_arr.length; j ++){
          if (save_arr[j].price < save_arr[i].price){
            var temp = save_arr[j];
            save_arr[j] = save_arr[i];
            save_arr[i] = temp;
          }
          else if(save_arr[j].price === save_arr[i].price]){
            if (save_arr[j].sale_volume > save_arr[i].sale_volume){
              var temp = save_arr[i];
              save_arr[i] = save_arr[j];
              save_arr[j] = temp; 
            }
          }
        }
      }
      var k = 0;
      while (k < save_arr.length){
        this.goods.splice(k, 1 ,save_arr[k]);
        k ++;
      }
      this.$emit ('sendItem', this.goods[0]);
      return true;
    }
  } 
}
</script>
<style scoped>
#goodList {
  margin: 0 auto;
}

.goods li {
  list-style: none;
}

.good {
  width: 100%;
  height: 130px;
  border-bottom: 1px solid #e7e7e7;
}

.good li{
  float: left;
  height: 100%;
}
.good .good_inf{
    width: 342px;
}
.good .good_inf .good_image{
    width: 80px;
    height: 80px;
    margin-top: 20px;
    float: left;
}

.good .good_inf .good_image img{
  width: 100%;
  vertical-align: top;
}

.good .good_inf .good_name{
  margin: 20px 0 0 10px;
  line-height: 18px;
  width: 200px;
  float: left;
}

.good .good_price{
  width: 130px;
}

.good .good_price price{
  margin-top: 20px;
  line-height: 18px;
  font-family: Verdana,Tahoma,arial;
  color: #3c3c3c;
  font-weight: bold;
}

.good .good_s_volume{
  width: 120px;

}
.good .good_s_volume volume{
  line-height: 18px;
  margin-top: 20px;
  font-family: Verdana,Tahoma,arial;
  color: #900;
  font-weight: bold;
}

.good .good_score{
  width: 120px;
}

.good .good_score .score{
  line-height: 18px;
  margin-top: 20px;
  font-family: Verdana,Tahoma,arial;
  color: #900;
  font-weight: bold;
}
</style>