<script setup>
import ChartView from './views/ChartView.vue';
import HomeView from './views/HomeView.vue'
</script>

<template>
  <div id="app">
    <ChartView />
    <HomeView />
  </div>
</template>

<style scoped>
html, body {
  height: 100%;
  margin: 0;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 200%;
  background-color: #f5f5f5; 
}
</style>
