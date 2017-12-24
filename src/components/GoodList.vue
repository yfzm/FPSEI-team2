<template>
  <div id="goodList">
    <div class="goods">

      <div class="search-result">
        <Row type="flex" align="middle" justify="space-between">
          <i-col span = 18>
            <RadioGroup v-model="selector_option" @on-change="select_data" class="radio-selector">
              <Radio label="0">全部</Radio>
              <Radio label="1">不含二手书</Radio>
              <Radio label="2">仅含二手书</Radio>
            </RadioGroup>
          </i-col>
          <i-col span=5>
            <span class="record-text">共{{ total_goods }}条记录</span>
          </i-col>
        </Row>
      </div>

      <div v-if = "showing_goods.length === 0">
        <Card style="text-align: center;" id="no-result-info">
          <p v-if="selector_option === '2'">无符合条件的二手书</p>
          <p v-else>无搜索结果</p>
        </Card>
      </div>

      <div v-else>
        <div v-for="good in showing_goods" class="good">
          <div class="item-padding">
            <div class="good-item" @click = "send_Item(good)">
              <Card>
                <Row>
                  <i-col span="6">
                    <img :src="good.picture" height="70px" width="70px">
                  </i-col>
                  <i-col span="5">
                    <p class = "good-name">
                      <span v-if="good.isUsedbooks === 1" class="good-used-tag-padding">
                        <span class="good-used-tag">二手</span>
                      </span>
                      {{ good.name }}
                    </p>
                  </i-col>
                  <i-col span="7" offset="1">
                    <p class="price">￥{{good.price.toFixed(2)}}
                        <span v-if="good.freight === 0" class="good-freight-tag">包邮</span>
                    </p>
                    <p v-if="good.freight > 0" class="keys">
                        <span>运费&nbsp;&nbsp;</span>
                        <span class="card-digit freight">￥{{ good.freight.toFixed(2) }}</span>
                    </p>
                    <p class = "keys">
                        <span>月售&nbsp;&nbsp;</span>
                        <span class="card-digit volume">{{ good.sales_volume }}</span>
                        <span>&nbsp;件</span>
                    </p>
                    <p class = "keys">
                        <span>评分&nbsp;&nbsp;</span>
                        <span class="card-digit score">{{ good.scores.good.toFixed(1) }}</span>
                    </p>
                  </i-col>
                  <i-col span="5">
                    <div class="good-seller">
                      <img :src="seller_img[good.seller]" alt="" height="20px" width="20px">
                      <span>{{ seller_name[good.seller] }}</span>
                    </div>

                    <div v-for="tag_id,index in good.tags" class="tag">
                      <Tag v-if="index < 2">{{tags_inf[tag_id]}}</Tag>
                    </div>
                  </i-col>
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
import book_data from '../assets/data.json'

export default {
  name: 'GoodList',
  props: ['searchArr'],
  mounted(){
    this.goods = this.get_arr(this.searchArr);
    this.total_goods = this.goods.length;
    this.sort_goods();
    this.operate_goods();
  },
  data: () => ({
    status : true,
    books: book_data,
    tags_inf: ["正品保证","极速退款","七天退换","有赠品"],
    seller_img: [
      "/src/assets/taobao.png",
      "/src/assets/jingdong.png",
      "/src/assets/tianmao.png",
      "/src/assets/amazon.png",
      "/src/assets/dangdang.png"
    ],
    seller_name: [
      "淘宝",
      "京东",
      "天猫",
      "亚马逊",
      "当当"
    ],

    goods: [],
    total_goods: 0,
    showing_goods: [],
    page_goods: 6,
    selector_option: '0'
  }),
  watch:{
    searchArr: function(new_Arr) {
      this.goods = this.get_arr(new_Arr);
      this.sort_goods();
      this.filter_goods(this.selector_option);
      this.total_goods = this.goods.length;
      this.operate_goods();
    }
  },
  methods: {
    send_Item: function(good) {
      this.$emit ('sendItem', good);
    },
    get_arr: function (arr) {
      if (arr.length === 0) {
        return [];
      }
      let result_arr = [];
      for (let single_book of this.books.Books) {
        for (let book_id of arr) {
          if (book_id === single_book.id) {
            result_arr.push(single_book);
            break;
          }
        }
      }
      return result_arr;
    },

    sort_goods: function(){
      let compare_strategy = function (obj1, obj2) {
        let price1 = Number(obj1.price) + Number(obj1.freight);
        let price2 = Number(obj2.price) + Number(obj2.freight);
        let volume1 = Number(obj1.sales_volume);
        let volume2 = Number(obj2.sales_volume);
        let score1 = Number(obj1.scores.good);
        let score2 = Number(obj2.scores.good);
        if (price1 !== price2) {
          return price1 - price2;
        } else {
          if (volume1 !== volume2) return volume2 - volume1;
          else return score2 - score1;
        }
      };
      this.goods.sort(compare_strategy);
    },

    filter_goods: function (cur) {
      this.goods = this.get_arr(this.searchArr);
      this.sort_goods();
      if (cur === "1") {
        this.goods = this.goods.filter((good) => { return good.isUsedbooks === 0;});
      } else if (cur === "2") {
        this.goods = this.goods.filter((good) => { return good.isUsedbooks === 1;});
      }
    },

    operate_goods: function () {
      this.total_goods = this.goods.length;
      if (this.total_goods !== 0) {
        this.send_Item(this.goods[0]);

      } else {
        this.send_Item({});
      }
      this.choose_page(1);
    },

    select_data: function (cur) {
      this.filter_goods(cur);
      this.operate_goods();
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

  .search-result {
    padding: 10px 0;
  }

  .record-text {
    /*padding-top: 30px;*/
  }

  .price{
    color: #ff6600;
    font-weight: bold;
  }

  .radio-selector {
    padding-left: 10px;
  }

  .keys {
      font-size: 10px;
  }

  .card-digit {
      font-size: 12px;
      font-weight: bold;
  }

  .good-name {
      font-weight: bold;
      color: #444
  }

  .good-freight-tag {
      font-weight: normal;
      font-size: 12px;
      color: #006400;
      border: solid 1px;
      border-radius: 3px;
      padding: 1px 2px;
  }

  .good-used-tag {
      font-weight: normal;
      font-size: 12px;
      color: #ff4500;
      border: solid 1px;
      border-radius: 3px;
      padding: 1px 2px;
  }

  .good-used-tag-padding {
  }

  .good-seller {
    padding: 0 0 3px 3px;
  }

  .good-seller img, span {
    vertical-align: middle;
  }

  .set-vertical-align {
    vertical-align: middle;
  }

  .good-seller span {
    font-size: 12px;
    color: #999999;
    padding-left: 3px;
  }

</style>
