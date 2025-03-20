<template>
  <div class="SquirrelCard">
    <h2>Color: {{ squirrels.primary_fur_color }}</h2>
    <h2>Location: {{ squirrels.specific_location }}</h2>
    <h2>Running: {{ squirrels.running }}</h2>
    <h2>Age: {{ squirrels.age }}</h2>
  </div>
</template>

<script setup>
defineProps({
  squirrels: Object,
})
</script>

<style scoped>
.SquirrelCard {
  width: 300px;
  background-color: #f4f4f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  font-family: Arial, sans-serif;
  margin: 16px;
}

.card-header {
  background-color: #4caf50;
  color: white;
  padding: 16px;
  text-align: center;
}

.title {
  font-size: 18px;
  margin: 0;
}

.card-content {
  padding: 16px;
}

.card-content p {
  margin: 8px 0;
  font-size: 16px;
}

.card-content strong {
  font-weight: bold;
  color: #333;
}

.card-content p {
  color: #555;
}

.card-content p:nth-child(odd) {
  background-color: #f0f0f0;
  padding: 8px;
  border-radius: 8px;
}
</style>
