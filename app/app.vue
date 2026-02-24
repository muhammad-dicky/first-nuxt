<script>
import 'animate.css'
</script>
<style>
@import url("animate.css");
</style>
<template>
  <div>
    
    <NuxtLayout>
      <!-- <img src="/assets/img/19.jpg" alt=""> -->
      <NuxtPage/>
      

    </NuxtLayout>
  </div>
</template>


<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.rotate-enter-from,
/* .rotate-leave-to {
  opacity: 0;
  transform: rotate3d(1, 1, 1, 15deg);
} */
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>