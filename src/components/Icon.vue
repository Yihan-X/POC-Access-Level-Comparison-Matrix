<template>
  <span :class="['icon', type]">
    <span class="icon__background">
      <template v-if="type === 'check'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path d="M8.795 15.875l-3.47-3.47-2.12 2.12L8.795 20.115 19.385 9.525l-2.12-2.12z"/>
        </svg>
      </template>
      <template v-else-if="type === 'cross'">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1">
          <path d="M18 7.41L16.59 6 12 10.59 7.41 6 6 7.41 10.59 12 6 16.59 7.41 18 12 13.41 16.59 18 18 16.59 13.41 12z"/>
        </svg>
      </template>
    </span>
  </span>
</template>

<script setup lang="ts">
defineProps<{
  type: 'check' | 'cross'
}>();
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
}

.icon__background {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  transition: background-color 0.2s ease;
}

.icon svg {
  width: 16px; /* Slightly larger to accommodate thicker strokes */
  height: 16px;
}

.check .icon__background {
  background-color: #381cab;
  color: #e2e2e8;
}

.cross .icon__background {
  background-color: #8c8f94;
  color: #d1d6e0;
}

/* Optional: Add hover effect for the background */
.check:hover .icon__background {
  background-color: #a1a6f2;
}

.cross:hover .icon__background {
  background-color: #E5E7EB;
}
</style>