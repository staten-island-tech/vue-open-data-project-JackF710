<template>
  <canvas id="SquirrelChart"></canvas>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import Chart from 'chart.js/auto'

const squirrelChart = ref(null)

const colorsCount = ref({
  Gray: 0,
  Cinnamon: 0,
  Black: 0,
})

const props = defineProps({
  squirrels: Object,
})

const updateSquirrelColors = (squirrels) => {
  squirrels.forEach((squirrel) => {
    if (squirrel.primary_fur_color) {
      if (squirrel.primary_fur_color === 'Gray') colorsCount.value.Gray++
      if (squirrel.primary_fur_color === 'Cinnamon') colorsCount.value.Cinnamon++
      if (squirrel.primary_fur_color === 'Black') colorsCount.value.Black++
    }
  })
}

const chartData = ref({
  labels: ['Gray', 'Cinnamon', 'Black'],
  datasets: [
    {
      label: 'Squirrel Color Distribution',
      data: [colorsCount.value.Gray, colorsCount.value.Cinnamon, colorsCount.value.Black],
      backgroundColor: ['rgb(169, 169, 169)', 'rgb(210, 105, 30)', 'rgb(0, 0, 0)'],
      hoverOffset: 4,
    },
  ],
})

const updateChart = () => {
  if (squirrelChart.value) {
    new Chart(squirrelChart.value, {
      type: 'pie',
      data: chartData.value,
    })
  }
}

onMounted(() => {
  updateSquirrelColors(props.squirrels)
  updateChart()
})
</script>

<style scoped></style>
