<template>
  <div class="card">
    <h2>Color: {{ squirrel.primary_fur_color }}</h2>
    <h2>Location: {{ squirrel.location }}</h2>
    <h2>Was it Running?: {{ squirrel.running }}</h2>
  </div>
</template>

<script setup>
defineProps({ squirrel: Object })
</script>

<style scoped></style>
