<template>
    <div id="app">
        <Affix class="top-pin">
            <Search id="search_box" v-on:sendResult="getResult"></Search>
        </Affix>

        <div class="page_body">
            <Row>
                <Col span="9">
                    <GoodList id="good_list" v-bind:search-arr="search_result"
                                             v-on:sendItem="getItem"></GoodList>
                </Col>
                <Col span="14" offset="1">
                    <Description id="description" v-bind:item-detail="detail_info"
                                                  v-bind:item-comment="comment_info"></Description>
                    <CommentList id="comment_list"></CommentList>
                </Col>
            </Row>

        </div>

    </div>
</template>

<script>
    import Search from './components/Search.vue';
    import GoodList from './components/GoodList.vue';
    import Description from './components/description.vue';
    import CommentList from './components/comment_list.vue';

    export default {
        name: 'app',
        data: function() {
            return {
                search_result: [],
                detail_info: null,
                comment_info: null
            }
        },
        methods: {
            getResult: function (m_search_result) {
                this.search_result = m_search_result;
            },
            getItem: function (m_detail, m_comment) {
                this.detail_info = m_detail;
                this.comment_info = m_comment;
            }
        },
        components: {
            Search,
            GoodList,
            Description,
            CommentList
        }
    }
</script>

<style>
    #app {
        /*width: 100%;*/
    }

    .page_body {
        margin: 0 auto;
        max-width: 1300px;
        padding-top: 120px;

    }

    #search_box {
        width: 800px;
        margin: 0 auto;
    }

    .top-pin {
        text-align: center;
        padding-top: 25px;
    }

    #good_list {

    }

    #description {

    }

    #comment_list {

    }
</style>
