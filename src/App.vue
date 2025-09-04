<template>
  <div class="app">
    <PermissionMatrix :categories="permissionMatrix.categories" :roles="permissionMatrix.roles" />
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
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
    sans-serif;
  background-color: #f3f4f6;
}

.app {
  padding: 24px;
  margin: 0 auto;
}
</style>
