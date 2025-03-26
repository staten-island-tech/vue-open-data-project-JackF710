<template>
  <div class="chart-container">
    <div class="chart-box">
      <canvas id="squirrelColorChart"></canvas>
    </div>
    <div class="chart-box">
      <canvas id="squirrelAgeChart"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const props = defineProps({
  squirrels: Array,
});

const colorChartInstance = ref(null);
const ageChartInstance = ref(null);

function processColorData(squirrels) {
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

function processAgeData(squirrels) {
  const ageCounts = { 'Juvenile': 0, 'Adult': 0, 'Unknown': 0 };

  squirrels.forEach(squirrel => {
    const age = squirrel.age || 'Unknown';
    if (ageCounts[age] !== undefined) {
      ageCounts[age]++;
    }
  });

  return {
    labels: Object.keys(ageCounts),
    data: Object.values(ageCounts),
    backgroundColors: ['#FFD700', '#FF4500', '#A9A9A9'], 
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

function createChart(chartId, data, chartInstance, title) {
  setTimeout(() => {
    if (chartInstance.value) {
      chartInstance.value.destroy();
    }

    const ctx = document.getElementById(chartId);
    if (!ctx) return; 

    chartInstance.value = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: data.labels,
        datasets: [{
          data: data.data,
          backgroundColor: data.backgroundColors,
        }],
      },
      options: {
        responsive: true,
        plugins: {
          legend: { position: 'top' },
          title: { display: true, text: title },
        },
      },
    });
  }, 500); 
}

onMounted(() => {
  if (props.squirrels.length) {
    createChart('squirrelColorChart', processColorData(props.squirrels), colorChartInstance, 'Squirrel Fur Colors Distribution');
    createChart('squirrelAgeChart', processAgeData(props.squirrels), ageChartInstance, 'Squirrel Age Distribution');
  }
});

watch(() => props.squirrels, () => {
  createChart('squirrelColorChart', processColorData(props.squirrels), colorChartInstance, 'Squirrel Fur Colors Distribution');
  createChart('squirrelAgeChart', processAgeData(props.squirrels), ageChartInstance, 'Squirrel Age Distribution');
}, { deep: true });
</script>


<style scoped>
.chart-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 30px;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 1000px;
  margin: 0 auto;
}

.chart-box {
  flex: 1;
  min-width: 400px;
  max-width: 450px;
  text-align: center;
}

canvas {
  width: 100%;
  height: 400px;
  max-height: 450px;
}

</style>
