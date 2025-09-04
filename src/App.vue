<template>
  <div class="app-wrapper">
    <div class="app">
      <PermissionMatrix
        :categories="permissionMatrix.categories"
        :roles="permissionMatrix.roles"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import PermissionMatrix from './components/PermissionMatrix.vue';
import { mockPermissionMatrix } from './data/mockPermissions';

const permissionMatrix = reactive(mockPermissionMatrix);
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  background-color: #F3F4F6;
  color: #111827;
}

.app-wrapper {
  min-width: 100%;
  min-height: 100vh;
  background-color: #F3F4F6;
  overflow-x: auto;
}

.app {
  min-width: max-content;
  padding: 24px;
  margin: 0 auto;
  background-color: #F3F4F6;
}
</style>