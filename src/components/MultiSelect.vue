<template>
  <div class="multi-select">
    <button 
      @click="isOpen = !isOpen" 
      class="multi-select__trigger"
      type="button"
    >
      <span class="multi-select__selected-text">
        {{ selectedCount }} roles selected
      </span>
      <span class="multi-select__arrow" :class="{ '__open': isOpen }">▼</span>
    </button>
    
    <div v-if="isOpen" class="multi-select__dropdown">
      <div class="multi-select__select-all">
        <label class="multi-select__option">
          <input
            type="checkbox"
            :checked="isAllSelected"
            @change="toggleAll"
            class="multi-select__checkbox"
          >
          Select All
        </label>
      </div>
      <div class="multi-select__options">
        <label 
          v-for="option in options" 
          :key="option"
          class="multi-select__option"
        >
          <input
            type="checkbox"
            :value="option"
            v-model="selectedValues"
            class="multi-select__checkbox"
            @change="emitUpdate"
          >
          {{ option }}
        </label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue';

const props = defineProps<{
  options: string[];
  modelValue: string[];
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: string[]): void;
}>();

const isOpen = ref(false);
const selectedValues = ref([...props.modelValue]);

const selectedCount = computed(() => selectedValues.value.length);
const isAllSelected = computed(() => selectedValues.value.length === props.options.length);

const toggleAll = () => {
  if (isAllSelected.value) {
    selectedValues.value = [];
  } else {
    selectedValues.value = [...props.options];
  }
  emitUpdate();
};

const emitUpdate = () => {
  emit('update:modelValue', selectedValues.value);
};

// Update internal state when prop changes
watch(() => props.modelValue, (newValue) => {
  selectedValues.value = [...newValue];
});
</script>

<style scoped>
.multi-select {
  position: relative;
  width: 200px;
}

.multi-select__trigger {
  width: 100%;
  padding: 8px 12px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-size: 14px;
  color: #111827;
}

.multi-select__trigger:hover {
  border-color: #6366F1;
}

.multi-select__selected-text {
  margin-right: 8px;
}

.multi-select__arrow {
  font-size: 10px;
  transition: transform 0.2s ease;
}

.multi-select__arrow.__open {
  transform: rotate(180deg);
}

.multi-select__dropdown {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  margin-top: 4px;
  background: white;
  border: 1px solid #E5E7EB;
  border-radius: 6px;
  box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  z-index: 10;
}

.multi-select__select-all {
  padding: 8px;
  border-bottom: 1px solid #E5E7EB;
}

.multi-select__options {
  max-height: 200px;
  overflow-y: auto;
  padding: 8px;
}

.multi-select__option {
  display: flex;
  align-items: center;
  padding: 4px 0;
  cursor: pointer;
  font-size: 14px;
  color: #111827;
}

.multi-select__checkbox {
  margin-right: 8px;
}
</style>
