<template>
    <div>
        <h1>hello</h1>
      <button @click="$router.push('/')">Back to Home</button>
      <SquirrelChart :squirrels="filteredSquirrels" />
    </div>
  </template>
  
  <script setup>
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
  
  <style scoped>
  button {
    margin-top: 20px;
    padding: 10px;
    background: red;
    color: white;
    border: none;
    cursor: pointer;
  }
  </style>
  