<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const squirrel = ref('')
async function getSquirrels() {
  let res = await fetch('https://data.cityofnewyork.us/resource/vfnx-vebw.json')
  let data = await res.json()
  squirrel.color = data.results
}
onMounted(() => {
  getSquirrels
})
</script>

<template>
  <h1>hello boi</h1>
</template>
