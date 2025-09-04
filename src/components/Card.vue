<template>
  <div class="card">
    <div class="card__content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
// Component is purely presentational, no props needed
</script>

<style scoped>
.card {
  background: white;
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  min-width: 800px;
}
</style>