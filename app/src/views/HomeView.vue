<template>
  <div class="container">
    <h1>Squirrels in Central Park</h1>
    <div class="card-container">
      <SquirrelCard
        v-for="(squirrel, index) in squirrels"
        :key="index"
        :squirrels="squirrel"
      ></SquirrelCard>
    </div>
    <SquirrelChart :squirrels="squirrels" />
  </div>
</template>

<script setup>
import SquirrelCard from '@/components/SquirrelCard.vue'
import SquirrelChart from '@/components/SquirrelChart.vue'
import { ref, onMounted } from 'vue'
const squirrels = ref([])

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
    const data = await response.json()
    squirrels.value = data
  } catch (error) {
    console.error('Error fetching squirrel data', error)
  }
}
onMounted(() => getSquirrels())
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
