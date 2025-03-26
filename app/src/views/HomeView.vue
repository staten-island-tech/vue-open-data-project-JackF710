<template>
  <div class="container">
    <h1>Squirrels in Central Park</h1>
  </div>
  <div class="button-container">
    <router-link to="/chartview">
      <button>View Charts</button>
    </router-link>
  </div>

    <h1>All Squirrels:</h1>

    <div class="card-container">
      <SquirrelCard
        v-for="(squirrel, index) in filteredSquirrels"
        :key="index"
        :squirrels="squirrel"
      />
    </div>

</template>

<script setup>
import { ref, onMounted, computed } from 'vue';
import SquirrelCard from '@/components/SquirrelCard.vue';

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
.container {
  text-align: center;
  padding: 20px;
}

h1 {
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: center;
  margin-bottom: 40px;
}

.chart-section {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>
