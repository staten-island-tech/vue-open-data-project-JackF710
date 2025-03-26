<script setup>
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/"></router-link>
      <router-link to="/chartview"></router-link>
    </nav>
    <router-view />
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
