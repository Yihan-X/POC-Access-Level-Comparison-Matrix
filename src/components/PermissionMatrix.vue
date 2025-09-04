<template>
  <div class="permission-matrix">
    <div class="permission-matrix__header">
      <div class="permission-matrix__spacer">
        <div class="permission-matrix__controls">
          <button 
            class="permission-matrix__log-button" 
            @click="logCurrentData"
          >
            Log Data
          </button>
          <MultiSelect
            v-model="visibleRoles"
            :options="roles"
            class="permission-matrix__role-selector"
          />
        </div>
      </div>
      <div class="permission-matrix__roles">
        <div v-for="role in visibleRoles" :key="role" class="permission-matrix__role">
          {{ role }}
        </div>
      </div>
    </div>
    
    <div class="permission-matrix__sections">
      <div v-for="category in categories" :key="category.id" class="permission-matrix__section">
        <Card>
          <div class="permission-matrix__section-header">
            <div class="permission-matrix__section-header-content">
              <div class="permission-matrix__icon" v-if="category.icon">  
                <span v-html="category.icon"></span>
              </div>
              <div class="permission-matrix__section-text">
                <h2 class="permission-matrix__section-title">{{ category.name }}</h2>
                <p class="permission-matrix__section-description">{{ category.description }}</p>
              </div>
            </div>
          </div>

          <div class="permission-matrix__groups">
            <div v-for="group in category.groups" :key="group.id" class="permission-matrix__group">
              <h3 class="permission-matrix__group-title">{{ group.name }}</h3>
              
              <div class="permission-matrix__permissions">
                <PermissionRow
                  v-for="permission in group.permissions"
                  :key="permission.id"
                  :name="permission.name"
                  :description="permission.description"
                  :roles="visibleRoles"
                  :role-access="permission.roleAccess"
                />
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { PermissionMatrix } from '../types';
import Card from './Card.vue';
import PermissionRow from './PermissionRow.vue';
import MultiSelect from './MultiSelect.vue';

const props = defineProps<PermissionMatrix>();
const visibleRoles = ref([...props.roles]);

const logCurrentData = () => {
  console.log('Current Permission Matrix Data:', {
    categories: props.categories,
    roles: props.roles,
    visibleRoles: visibleRoles.value
  });
};
</script>

<style scoped>
.permission-matrix {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1200px;
}

.permission-matrix__header {
  display: flex;
  margin-bottom: 24px;
  padding: 0 24px;
  gap: 24px;
}


.permission-matrix__spacer {
  min-width: 400px;
  display: flex;
  justify-content: end;
}

.permission-matrix__controls {
  display: flex;
  gap: 12px;
  align-items: center;
}

.permission-matrix__log-button {
  height: 36px;
  padding: 0 12px;
  background: #6366F1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.permission-matrix__log-button:hover {
  background: #4F46E5;
}

.permission-matrix__role-selector {
  margin-left: 0;
}

.permission-matrix__roles {
  min-width: 0;
  display: flex;
  align-items: center;
  flex: 1 1 auto;
}

.permission-matrix__role {
  flex: 1;
  min-width: 80px;
  padding: 0 10px;
  text-align: center;
  font-weight: 500;
  color: #111827;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.permission-matrix__sections {
  gap: 24px;
  display: flex;
  flex-direction: column;
}

.permission-matrix__section-header {
  margin-bottom: 24px;
  border-bottom: 1px solid #E5E7EB;
  padding-bottom: 16px;
}

.permission-matrix__section-header-content {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}

.permission-matrix__icon {
  flex-shrink: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #EEF2FF;
  border-radius: 8px;
  color: #6366F1;
}

.permission-matrix__icon :deep(svg) {
  width: 24px;
  height: 24px;
}

.permission-matrix__section-text {
  flex: 1;
}

.permission-matrix__section-title {
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 8px;
  text-align: left;
}

.permission-matrix__section-description {
  font-size: 14px;
  color: #6B7280;
  margin: 0;
  text-align: left;
}

.permission-matrix__group {
  margin-bottom: 24px;
  border-bottom: 1px solid #E5E7EB;
}

.permission-matrix__group:last-child {
  margin-bottom: 0;
}

.permission-matrix__group-title {
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 16px;
  text-align: left;
}

.permission-matrix__permissions {
  display: flex;
  flex-direction: column;
}
</style>