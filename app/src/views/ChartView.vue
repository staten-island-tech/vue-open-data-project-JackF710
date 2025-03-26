<template>
  <div>
    <h1>Chart View</h1>
    <button @click="$router.push('/')">Back to Home</button>
    <SquirrelChart :squirrels="filteredSquirrels" />
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SquirrelChart from '@/components/SquirrelChart.vue';

const squirrels = ref([]);

async function getSquirrels() {
  try {
    const response = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json');
    const data = await response.json();
    squirrels.value = data;
  } catch (error) {
    console.error('Error fetching squirrel data', error);
  }
}

onMounted(() => getSquirrels());

const filteredSquirrels = computed(() =>
  squirrels.value.filter(squirrel =>
    squirrel.primary_fur_color &&
    squirrel.age &&
    squirrel.specific_location &&
    squirrel.running !== undefined
  )
);
</script>
