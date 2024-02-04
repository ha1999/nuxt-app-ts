<script setup>
import { ref } from 'vue'

const value = ref('')
const items = ref([])

function search(event) {
  items.value = [...Array(10).keys()].map(item => `${event.query}-${item}`)
}
</script>

<template>
  <div class="card flex justify-content-center">
    <p-auto-complete v-model="value" :suggestions="items" @complete="search" />
  </div>
</template>
