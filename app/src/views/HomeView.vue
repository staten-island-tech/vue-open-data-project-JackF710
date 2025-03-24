<template>
  <div class="container">
    <h1>Squirrels in Central Park</h1>
      <SquirrelChart :squirrels="filteredSquirrels" />
    <div class="card-container">
      <SquirrelCard
        v-for="(squirrel, index) in filteredSquirrels"
        :key="index"
        :squirrels="squirrel"
      ></SquirrelCard>
    </div>
  </div>
</template>

<script setup>
import SquirrelChart from '@/components/SquirrelChart.vue'
import SquirrelCard from '@/components/SquirrelCard.vue'
import { ref, computed, onMounted } from 'vue';
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

const filteredSquirrels = computed(() =>
  squirrels.value.filter(squirrel =>
    squirrel.primary_fur_color &&
    squirrel.age &&
    squirrel.specific_location &&
    squirrel.running !== undefined
  )
);
</script>

<style scoped>
.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
}
</style>
