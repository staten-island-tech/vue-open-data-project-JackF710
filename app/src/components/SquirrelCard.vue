<template>
  <div class="SquirrelCard">
    <h2>Color: {{ squirrels.primary_fur_color }}</h2>
    <h2>Location: {{ squirrels.location }}</h2>
    <h2>Was it Running?: {{ squirrels.running }}</h2>
  </div>
</template>

<script setup>
defineProps({
  squirrels: {
    type: Object,
  },
})
</script>

<style scoped></style>
