<template>
  <div id="goodList">
    <ul class="goods">
      <p>商品图片，商品名字，商品价格，商品销量，商家信誉</p>
      <li v-for="good, index in goods" class="good">
        <span  
          @click=""
        >
        <p><img :src="good.image">,  {{ good.name }},  {{ good.price }},  {{ good.sale_volume }},{{good.g_score}}</p>
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
  max-width: 500px;
}

.goods li {
  list-style: none;
}

.good {
  text-align: left;
  cursor: pointer;
}
</style>