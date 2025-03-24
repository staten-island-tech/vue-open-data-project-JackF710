<template>
  <div class="chart-container">
    <canvas id="squirrelChart"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps({
  squirrels: Array,
});

const chartInstance = ref(null);

function processData(squirrels) {
  const colorCounts = squirrels.reduce((acc, squirrel) => {
    const color = squirrel.primary_fur_color || 'Unknown';
    acc[color] = (acc[color] || 0) + 1;
    return acc;
  }, {});

  return {
    labels: Object.keys(colorCounts),
    data: Object.values(colorCounts),
    backgroundColors: Object.keys(colorCounts).map(label => getColorForLabel(label)),
  };
}

function getColorForLabel(label) {
  const colorMap = {
    'Gray': '#808080',
    'Cinnamon': '#D2691E',
    'Black': '#000000',
    'Unknown': '#A9A9A9',
  };
  return colorMap[label] || '#FFFFFF';
}

function createChart() {
  if (chartInstance.value) {
    chartInstance.value.destroy();
  }
  const ctx = document.getElementById('squirrelChart').getContext('2d');
  const { labels, data, backgroundColors } = processData(props.squirrels);

  chartInstance.value = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: backgroundColors,
      }],
    },
    options: {
      responsive: true,
      plugins: {
        legend: { position: 'top' },
        title: { display: true, text: 'Squirrel Fur Colors Distribution' },
      },
    },
  });
}

onMounted(() => {
  if (props.squirrels.length) {
    createChart();
  }
});

watch(() => props.squirrels, () => {
  createChart();
}, { deep: true });
</script>

<style scoped>
.chart-container {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin: 20px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
