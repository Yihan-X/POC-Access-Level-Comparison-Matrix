<template>
  <div class="permission-matrix">
    <div class="permission-matrix__header">
      <div class="permission-matrix__spacer"></div>
      <div class="permission-matrix__roles">
        <div v-for="role in roles" :key="role" class="permission-matrix__role">
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
                  :roles="roles"
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
import type { PermissionMatrix } from '../types';
import Card from './Card.vue';
import PermissionRow from './PermissionRow.vue';

defineProps<PermissionMatrix>();
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
}

.permission-matrix__roles {
  display: flex;
  flex: 1 1 auto;
  min-width: 0;
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