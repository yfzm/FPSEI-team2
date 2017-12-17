<template>
    <div>
        <Row>
            <Col span="10">
                <img v-bind:src="itemDetail.picture" v-bind:alt="itemDetail.name" width="300" height="300">
            </Col>
            <Col span="13" offset="1">
                <p class="book-name">{{ itemDetail.name }}</p>
                <p class="book-author">{{ itemDetail.author }} 著</p>
                <p class="book-price book-tag">价格：<span>{{ itemDetail.price }}</span></p>
                <p class="book-tag">月销量：<span>{{ itemDetail.sales_volume }}</span></p>
                <p class="book-tag">来源：<span>{{ itemDetail.seller }}</span></p>
                <p class="book-tag">商品评分：
                    <Rate disabled show-text allow-half v-model="good_score">
                    <span style="color: #f5a623; font-size: 17px">{{ good_score }}</span>
                    </Rate>
                </p>
                <p class="book-tag">店铺评分：
                    <Rate disabled show-text allow-half v-model="credit_score">
                    <span style="color: #f5a623; font-size: 17px">{{ credit_score }}</span>
                    </Rate>
                </p>

                <Row>
                    <Col span="18">
                        <div class="book-btn">
                            <Button type="primary" size="large" icon="ios-cart" @click="openUrl" long>立即购买</Button>
                        </div>
                    </Col>
                </Row>


            </Col>
        </Row>

        <div class="book-tab">
            <Tabs value="detail">
                <TabPane label="详细信息" name="detail">
                    <Row class="set-padding-top20">
                        <Col span="5">
                            <p>出版社</p>
                        </Col>
                        <Col span="5">
                            <p>{{ itemDetail.detail.publisher }}</p>
                        </Col>
                        <Col span="5" offset="4">
                            <p>出版日期</p>
                        </Col>
                        <Col span="5">
                            <p>{{ itemDetail.detail.pub_date }}</p>
                        </Col>
                    </Row>

                    <Row class="set-padding-top20">
                        <Col span="5">
                            <p>页数</p>
                        </Col>
                        <Col span="5">
                            <p>{{ itemDetail.detail.pages }}</p>
                        </Col>
                        <Col span="5" offset="4">
                            <p>语言</p>
                        </Col>
                        <Col span="5">
                            <p>{{ itemDetail.detail.language }}</p>
                        </Col>
                    </Row>

                    <div class="book-description">
                        <Card>
                            <p slot="title">简介</p>
                            <p>{{ itemDetail.information.introduction }}</p>
                        </Card>
                    </div>

                    <div class="book-content">
                        <Collapse>
                            <Panel name="1">目录
                                <p slot="content">{{ itemDetail.information.content }}</p>
                            </Panel>
                        </Collapse>
                    </div>
                </TabPane>

                <TabPane label="用户评价" name="comment">
                    <div class="comment-list" v-for="item in itemsComment">
                        <Card>
                            <p slot="title">{{ item.user }}</p>
                            <p>{{ item.comment }}</p>
                        </Card>
                    </div>
                </TabPane>
            </Tabs>
        </div>


    </div>
</template>

<script>
    export default {
        props: ['itemDetail', 'itemsComment'],
        data: function () {
            return {
                good_score: this.itemDetail.scores.good,
                credit_score: this.itemDetail.scores.credit
            }
        },
        methods: {
            openUrl: function () {
                window.open(this.itemDetail.url);
            }
        }
    }


</script>

<style>

    .book-name {
        font: bold 30px "arial";
        color: #3c3c3c
    }

    .book-author {
        font: 15px "arial";
        color: #3399ff;
        padding-top: 10px;
    }

    .book-price {
        padding-top: 20px !important;
    }

    .book-tag {
        padding-top: 8px;
        font-size: 15px
    }

    .book-btn {
        padding-top: 20px;
    }

    .book-tab {
        padding-top: 30px;
        padding-bottom: 70px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .set-padding-top20 {
        padding-top: 20px;
    }

    .book-description {
        padding-top: 30px;
    }

    .book-content {
        padding-top: 10px;
    }

    .comment-list {
        padding-top: 15px;
    }

</style>

