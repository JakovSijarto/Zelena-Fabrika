<template>
    <div>
    <navbar_main/>
    <PageLoader></PageLoader>
    <router-view v-slot="{ Component }" mode="out-in">
    <transition name="fade"
    >
      <component :is="Component"/>
    </transition>
    </router-view>
    <footer_main/>
  </div>
</template>
  
<script setup>
import navbar_main from "./components/nav-fot/navbar.vue";
import footer_main from "./components/nav-fot/footer.vue";
</script>

<style>
.fade-enter-from, .fade-leave-to{
  opacity:0;
}
.fade-enter-active,.fade-leave-active{
  transition: opacity 0.3s ease-out;
}
</style>