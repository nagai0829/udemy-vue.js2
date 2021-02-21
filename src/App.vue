<template>
  <div style="width: 700px; margin: auto; padding-top: 50px;">
    
    <router-view name="header"></router-view>
    <transision name="fade" mode="out-in">
      <router-view></router-view>
    </transision>

  </div>
</template>

<style scoped>
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s;
}
</style>
