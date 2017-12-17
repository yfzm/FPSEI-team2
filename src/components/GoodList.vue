<template>
  <div id="goodList">
    <ul class="goods">
      <li v-for="good, index in goods" class="good">
        <span>
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
export default {
  name: 'GoodList',
  
  data: () => ({
    // use array to save goods, here i use some examples to show the web
    goods: [{
      image: 'http://img10.360buyimg.com/n5/jfs/t3910/74/286809770/130084/6c02e960/584778f9N4cb292f8.jpg',
      name: 'Algorithms',
      price: 31.60,
      sale_volume: 50,
      g_score: 4.7
    },{
      image: 'https://img13.360buyimg.com/n5/jfs/t4531/220/483445858/300979/584172a2/58d0cf49N6c0daead.jpg',
      name:'CSAPP',
      price: 184.00,
      sale_volume: 79,
      g_score: 3.7
    }]
  })
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