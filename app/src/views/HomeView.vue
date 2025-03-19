<template>
  <div class="container">
    <h1>Squirrels in Central Park</h1>
    <div class="card-container"></div>
    <SquirrelCard
      v-for="(squirrel, index) in squirrels"
      :key="index"
      :squirrels="squirrels"
    ></SquirrelCard>
  </div>
</template>

<script setup>
import SquirrelCard from '@/components/SquirrelCard.vue'
import { ref, onMounted } from 'vue'
const squirrels = ref([])

const blackSquirrels = squirrels.value.filter((squirrels) => squirrel.primary_fur_color === 'Black')

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    const data = await response.json()
    console.log('Fetched data:', data)
    squirrels.value = data
  } catch (error) {
    console.error('Error fetching squirrel data', error)
  }
}
onMounted(() => getSquirrels())
</script>

<style scoped></style>
