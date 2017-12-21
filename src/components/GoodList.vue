<template>
  <div id="goodList">
    <div class="goods">
      <Row>
        <Col span = 8>
        <Button type="primary" size="small" @click="showUsedBooks" style="width: 150px">显示/不显示二手书</Button>
        </Col>
      </Row>
      <Row type="flex" justify="center" align="bottom" class="code-row-bg">
        <Col span = 5 offset = 1>
        <p>图片</p>
        </Col>
        <Col span = 6>
        <p>名称</p>
        </Col>
        <Col span = 4>
        <p>价格</p>
        </Col>
        <Col span = 3>
        <p>销量</p>
        </Col>
        <Col span = 5>
        <p>评分</p>
        </Col>
      </Row>
      <div v-if = "searchArr.length === 0">
        <Row>
          <Col span = 8 offset = 8>
            <Card>
              <p>无搜索结果</p>
            </Card>
          </Col>

        </Row>
      </div>
      <div v-else>
        <div v-for="good, index in showing_goods" class="good">
          <div class="item-padding">
            <div class="good-item" @click = "send_Item(good)">
              <Card>
                <Row>
                  <Col span = 6>
                    <img :src="good.picture" height="70px" width="70px">
                  </Col>
                  <Col span = 6>
                    <p class = "good_name">
                      {{ good.name }}
                    </p>
                  </Col>
                  <Col span = 5>
                    <p class="price">￥{{good.price.toFixed(2)}}</p>
                  </Col>
                  <Col span = 3>
                    <p class = "volume">{{ good.sales_volume }}</p>
                  </Col>
                  <Col span = 4>
                    <p class = "score">{{ good.scores.good }}</p>

                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </div>
        <div v-if="total_goods > page_goods" class="good-page-switch">
          <Page size="small" :total="total_goods" :page-size="page_goods" @on-change="choose_page"></Page>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import book from '../assets/data.json'

export default {
  name: 'GoodList',
  props: ['searchArr'],
  mounted(){
    this.sort_arr();
    this.total_goods = this.goods.length;
    this.choose_page(1);
  },
  data: () => ({
    status : true,
    bb: book,
    // use array to save goods, here i use some examples to show the web
    goods: [],
    total_goods: 0,
    showing_goods: [],
    current_page: 1,
    page_goods: 6
  }),
  watch:{
    searchArr: function(new_Arr) {
      this.sort_arr(new_Arr);
      this.total_goods = this.goods.length;
      this.current_page = 1;
      this.choose_page(1);
    }
  },
  methods: {
    send_Item: function(good) {
      this.$emit ('sendItem', good);
    },
    sort_arr: function(){
      if (this.searchArr.length === 0){
        this.$emit ('sendItem',[]);
      }
      this.goods.splice(this.searchArr.length);
      var i = 0;
      var j = 0;
      var save_arr = [];
      while (i < this.searchArr.length){
        j = 0;
        while (j < this.bb.Books.length){
          if (this.searchArr[i] === this.bb.Books[j].id){
            save_arr.push(this.bb.Books[j]);
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
          else if(save_arr[j].price === save_arr[i].price){
            if (save_arr[j].sales_volume > save_arr[i].sales_volume){
              var temp = save_arr[i];
              save_arr[i] = save_arr[j];
              save_arr[j] = temp;
            }
            else if (save_arr[j].sales_volume === save_arr[i].sales_volume){
              if (save_arr[j].scores.good > save_arr[i].scores.good){
                var temp = save_arr[i];
                save_arr[i] = save_arr[j];
                save_arr[j] = temp;
              }
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
    },
    showUsedBooks: function() {
      if (this.status === false) {
        this.sort_arr();
        this.status = true;
      }
      else{
        var temp = [];
        for (var i = 0; i < this.goods.length; i ++){
          if (this.goods[i].isUsedbooks === 0){
            temp.push(this.goods[i]);
          }
        }
        var k = 0;
        this.goods.splice(temp.length);
        while (k < temp.length){
          this.goods.splice(k, 1, temp[k]);
          k ++;
        }
        this.$emit ('sendItem', this.goods[0]);
        this.status = false;
      }
      return true;
    },
    choose_page: function (page) {
      if (this.total_goods <= this.page_goods * page) {
        this.showing_goods = this.goods.slice((page - 1) * this.page_goods, this.total_goods);
      } else {
        this.showing_goods = this.goods.slice((page - 1) * this.page_goods, page * this.page_goods);
      }
    }
  }
}
</script>
<style>

  .item-padding {
    padding: 8px 0;

  }

  .good-item {
    cursor: pointer;
  }

  .good-page-switch {
    padding: 20px 0;
    text-align: center;
  }

  .code-row-bg{
    padding-top : 10px;
  }
/*#goodList {*/
  /*margin: 0 auto;*/
/*}*/

/*.goods li {*/
  /*list-style: none;*/
/*}*/

/*.good {*/
  /*width: 100%;*/
  /*height: 130px;*/
  /*border-bottom: 1px solid #e7e7e7;*/
/*}*/

/*.good li{*/
  /*float: left;*/
  /*height: 100%;*/
/*}*/
/*.good .good_inf{*/
    /*width: 190px;*/
/*}*/
/*.good .good_inf .good_image{*/
    /*width: 80px;*/
    /*height: 80px;*/
    /*margin-top: 20px;*/
    /*float: left;*/
/*}*/

/*.good .good_inf .good_image img{*/
  /*width: 100%;*/
  /*vertical-align: top;*/
/*}*/

/*.good .good_inf .good_name{*/
  /*margin: 20px 0 0 10px;*/
  /*line-height: 18px;*/
  /*width: 100px;*/
  /*float: left;*/
/*}*/

/*.good .good_price{*/
  /*width: 65px;*/
/*}*/

/*.good .good_price price{*/
  /*margin-top: 20px;*/
  /*line-height: 18px;*/
  /*font-family: Verdana,Tahoma,arial;*/
  /*color: #3c3c3c;*/
  /*font-weight: bold;*/
/*}*/

/*.good .good_s_volume{*/
  /*width: 60px;*/

/*}*/
/*.good .good_s_volume volume{*/
  /*line-height: 18px;*/
  /*margin-top: 20px;*/
  /*font-family: Verdana,Tahoma,arial;*/
  /*color: #900;*/
  /*font-weight: bold;*/
/*}*/

/*.good .good_score{*/
  /*width: 60px;*/
/*}*/

/*.good .good_score .score{*/
  /*line-height: 18px;*/
  /*margin-top: 20px;*/
  /*font-family: Verdana,Tahoma,arial;*/
  /*color: #900;*/
  /*font-weight: bold;*/
/*}*/
</style>
