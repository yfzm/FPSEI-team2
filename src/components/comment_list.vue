<template>
    <div>
        <p>{{ single_com_item.userName }}</p>
        <p>{{ single_com_item.comment }}</p>
    </div>
</template>

<script>
    export default {
        props: ['single_com_item'],
    }
</script>

<style>

</style>
