<template>
  <div class="permission-row">
    <div class="permission-row__info">
      <div class="permission-row__name">{{ name }}</div>
      <div v-if="description" class="permission-row__description">{{ description }}</div>
    </div>
    <div class="permission-row__permissions">
      <div v-for="role in roles" :key="role" class="permission-row__cell" @click="togglePermission(role)">
        <Icon :type="roleAccess[role] ? 'check' : 'cross'" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Role } from '../types';
import Icon from './Icon.vue';

const props = defineProps<{
  name: string;
  description?: string;
  roles: Role[];
  roleAccess: Record<Role, boolean>;
}>();

const togglePermission = (role: Role) => {
  props.roleAccess[role] = !props.roleAccess[role];
};
</script>

<style scoped>
.permission-row {
  display: flex;
  min-height: 56px; /* Set a minimum height for the row */
  position: relative; /* For proper cell positioning */
}

.permission-row:last-child {
  border-bottom: none;
}

.permission-row__info {
  flex: 1;
  min-width: 400px;
  padding: 16px 24px 16px 0;
}

.permission-row__name {
  font-weight: 500;
  color: #111827;
  text-align: left;
}

.permission-row__description {
  margin-top: 4px;
  font-size: 14px;
  color: #6B7280;
  text-align: left;
}

.permission-row__permissions {
  display: flex;
  gap: 24px;
  height: 100%; /* Make it full height */
}

.permission-row__cell {
  width: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  padding: 16px 0;
  height: 100%; /* Make cell full height */
  cursor: pointer; /* Add pointer cursor to indicate interactivity */
}

.permission-row__cell:hover {
  background-color: #e7dffb;
}
</style>