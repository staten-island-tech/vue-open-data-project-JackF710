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
  background: #f4f4f9;
  border-radius: 16px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  font-family: 'Arial', sans-serif;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.SquirrelCard:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card-header {
  padding: 16px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: bold;
}

.card-body {
  padding: 20px;
  background: #ffffff;
  border-radius: 0 0 16px 16px;
}

.card-body p {
  margin: 10px 0;
  font-size: 16px;
  color: #191717;
}

.card-body strong {
  color: #191717;
}
</style>
