<script setup lang="ts">
const route = useRoute()
const id = route.params.id

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id)

// const {data:posts} await useFetch()


</script>
<template>
    <h1>ini adalah posts dengan id</h1>
    $route
</template>