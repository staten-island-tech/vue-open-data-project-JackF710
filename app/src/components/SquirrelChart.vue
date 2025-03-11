<template>
  <div></div>
</template>

<script setup>
const config = {
  type: 'pie',
  data: data,
}
const data = {
  colors: [
'Gray',
'Cinnamon'
'Black',
],
  datasets: [
    {
      label: 'Squirrel Color',
      data: [300, 50, 100],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      hoverOffset: 4,
    },
  ],
}
</script>

<style scoped></style>
