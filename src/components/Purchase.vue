<template>
    <div id="purchase">
        <img id="book_cover" :src="single_item.picture" alt="cover">
        <p id="book_name">{{ single_item.bookname }}</p>
        <p id="book_price">价格：{{ single_item.price }}</p>
        <p id="book_volume">月销量：{{ single_item.sale_volume }}</p>
        <p class="buyit">
            <a href="javascript:;" role="button">进入购买页面</a>
        </p>

    </div>
</template>

<script>
    export default {
        name: "Purchase",
        props: ["single_item"],


    }
</script>

<style>
    
</style>
