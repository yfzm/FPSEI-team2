<template>
    <div id="footer">
        <div class="nav-footer">
            <Row>
                <i-col span="5" offeset="2">
                   <p class="icon1">
                      <Icon type="wand" size="20" color="#2d8cf0"></Icon>
                      相关推荐
                   </p>
                </i-col>
                <i-col span="5" offset="3">
                   <p class="icon2">
                       <Icon type="social-github" size="20" color="#2d8cf0"></Icon>
                       GitHub
                   </p>
                </i-col>
                <i-col span="5" offset="4">
                   <p class="icon3">
                       <Icon type="chatbubbles" size="20" color="#2d8cf0"></Icon>
                       社区
                   </p>
                </i-col>>
            </Row>
            <Row>
                <i-col span="6" offset="0">
                    <p>Vue快速入门</p>
                </i-col>
                    <i-col span="6" offset="2">
                    <a href="javascript:void(0)" v-on:click="git1">FPSEI-group2-dev---master</a>
                </i-col>
                    <i-col span="5" offset="3">
                    <p>使用教程</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="7" offset="0">
                    <a href="javascript:void(0)" v-on:click="iview_show">iView - A UI Toolkit based on Vue.js</a>
                </i-col>
                <i-col span="7" offset="1">
                    <a href="javascript:void(0)" v-on:click="git2">FPSEI-group2-dev---dev</a>
                </i-col>
                <i-col span="5" offset="2">
                    <p>用户体验</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="7" offset="0">
                    <p>HTML5+CSS教程</p>
                </i-col>
                <i-col span="7" offset="1">
                    <a href="javascript:void(0)" v-on:click="git3">FPSEI-group2-dev---feature</a>
                </i-col>
                <i-col span="5" offset="2">
                    <p>关于我们</p>
                </i-col>
            </Row>
            <Row>
                <i-col span="5" offset="0">
                    <p>jQuery教程</p>
                </i-col>
            </Row>
            <Row>
                <i-col>
                    <p>JSON文件介绍</p>
                </i-col>
            </Row>
        </div>
    </div>
</template>

<script>
    export default{
        name:'footer',
        data:function(){
            return{
                pos1:"https://github.com/yfzm/FPSEI-group2/tree/master",
                pos2:"https://www.iviewui.com/",
                pos3:"https://github.com/yfzm/FPSEI-group2/tree/dev",
                pos4:"https://github.com/yfzm/FPSEI-group2/tree/dev"
            }
        },
        methods:{
            git1:function(){
                window.open(this.pos1);
            },
            git2:function(){
                window.open(this.pos3);
            },
            iview_show:function(){
                window.open(this.pos2);
            },
            git3:function(){
                window.open(this.pos4);
            }
        }

    }
</script>

<style>
    .nav-footer{
        padding-top:10px;
        padding-left:180px;
    }
    .icon1{
        font-size:15px;
        font-weight:bold;
        color:#80848f;
    }
    .icon2{
        font-size:15px;
        font-weight:bold;
        color:#80848f;
    }
    .icon3{
        font-size:15px;
        font-weight:bold;
        color:#80858f;
    }

</style>
