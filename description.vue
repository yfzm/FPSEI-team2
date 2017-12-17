
<template>

    <ul td align="left">
      <h2>desctiptions</h2>
      <img v-bind:src="description.picture" v-bind:alt="description.bookname"/>

      <!--
      <li v-for="(value, key) in description">
      <h3>{{ key }}</h3>
      <div class="content">{{ value }}</div>
      </li>
      -->

          <ul class="disc-card">

          <div class="main-card">
          <div class="card">
            <h3>Book name</h3>
            <div class="content">{{ description.bookname }}</div>
          </div>
          <div class="card">
            <h3>Price</h3>
            <div class="content">{{ description.price }}</div>
          </div>
          <div class="card">
            <h3>Writer</h3>
            <div class="content">{{ description.writer }}</div>
          </div>
          <div class="card">
            <h3>Seller</h3>
            <div class="content"><a v-bind:href="description.address">{{ description.seller }}</a></div>
          </div>
        </div>
          <div class="detail-card">
            <h3>Details</h3>
            <li v-for="(value, key) in description.detail">
              <h4>{{ key }}</h4>
              <div class="content">{{ value }}</div>
            </li>
          </div>

        </ul>
    </ul>
</template>

<script>



export default {
  data () {
    return {
      description: {
        "bookname": "Algorithms",
        "price": 31.60,
        "sale_volume": 50,
        "writer": "Sanjoy",
        "seller": "fasfasf-XXXXX",
        "address": "http://item.jd.com/10079570.html",
        "picture": "http://img10.360buyimg.com/n5/jfs/t3910/74/286809770/130084/6c02e960/584778f9N4cb292f8.jpg",
        "detail": {
          "Publisher": "�廪��ѧ������",
          "Pub_date": "2008-07-01",
          "Pages": "345",
          "Language": "Chinese"
        },
        "information": {
          "Introduction": "��Ϊһ�������㷨������˼�����鼮�����鲻����������Ϣѧ�ƴ�ѧ���������̲ģ����ο��飩�����ǽ��κξ��г�����ѧ�������������㷨Ӧ�����о����õ�һ����·ʯ������ѭ�򽥽�������ǳ����չʾ���㷨�о���Ӧ�������У���ģ�ͷ������㷨���쵽�����Է������㷨�Ż��ķ������档�漰���ݴӹ��ϵ������㷨�������㷨�������㷨�����Թ滮����̬�滮�������㷨�Լ�NP�������ۣ���������δ��ȫ����ȫò�����Ӽ��㣬�����˾��䡢�ִ���δ���㷨��չ���ڶ������Գɹ���",
          "index": "��0��\n��һ��\n�ڶ���\n"
        },
        "scores": {
          "credit": 4.5,
          "good": 4.7
        },
      },

    }
  }
}




</script>

<style>
img {
max-width: 25%;
max-height: 25%;
}


.main-card{
  float:left;
}
.detail-card{
float:right;
margin-right: 400px;
}
</style>

<custom1>
  例えばコンポーネントのドキュメントを書くことが出来ます
</custom1>
