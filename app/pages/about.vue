<script setup lang="ts">
definePageMeta({
    pageTransition:{
        name:'rotate'
    }
}) 
</script>

<template>
    <section>
        <p>this page wil be displayed at the /about route</p>
        <NuxtLink to="/">Home Page</NuxtLink>
    </section>
</template>