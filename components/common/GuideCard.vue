<template>
  <div class="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-red-700">
    <div class="flex items-start">
      <div class="flex-shrink-0 w-12 h-12 bg-red-700 text-white rounded-full flex items-center justify-center font-bold text-xl mr-6">
        {{ number }}
      </div>
      <div class="flex-1">
        <h3 class="text-2xl font-bold text-red-900 mb-4">{{ title }}</h3>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  number: {
    type: Number,
    required: true
  },
  title: {
    type: String,
    required: true
  }
})
</script>
