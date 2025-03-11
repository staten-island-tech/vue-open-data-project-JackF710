<template>
  <div class="container">
    <h1>Squirrels in Central Park</h1>
    <div class="card-container"></div>
    <SquirrelCard
      v-for="(squirrel, index) in squirrels"
      :key="index"
      :squirrel="squirrel"
    ></SquirrelCard>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const squirrels = ref([])
const BlackSquirrels = ref([])

function filterSquirrls(sq) {
  sq.forEach(((squirrel.primary_fur_color) = 'Black') => {
    console.log()
});
}

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    squirrel.value = await response.json()
    console.log(squirrel.value)
    //filterSquirrls(squirrel.value)
  } catch (error) {
    console.error('Error fetching squirrel data', error)
  }
}
onMounted(getSquirrels)
</script>

<style scoped></style>
