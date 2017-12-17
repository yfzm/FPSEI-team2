<template>
    <div>
        <p>{{ itemComment[0].user }}</p>
        <p>{{ itemComment[0].comment }}</p>
    </div>
</template>

<script>
    export default {
        props: ['itemComment'],
    }
</script>

<style>

</style>
