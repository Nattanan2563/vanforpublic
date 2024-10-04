<template>
  <div>
    <h1>{{ error.statusCode }} ERROR</h1>
    <p>{{ error.message }}</p>
  </div>
</template>

<script setup>
defineProps(['error'])
</script>
