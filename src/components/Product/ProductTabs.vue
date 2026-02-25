<template>
  <div class="mt-20">
    <div class="flex justify-center gap-10 border-t pt-20 pb-5 mb-10">
      <button
        v-for="tab in tabs"
        :key="tab"
        @click="activeTab = tab"
        class="text-lg font-medium"
        :class="activeTab === tab ? 'text-black' : 'text-gray-400'"
      >
        {{ tab }}
      </button>
    </div>

    <div class="max-w-7xl mx-auto text-center text-gray-600">
      <p v-if="activeTab === 'Description'">
        {{ product.description }}
      </p>

      <p v-if="activeTab === 'Review'">
        No reviews yet.
      </p>

      <p v-if="activeTab === 'Custom Tab'">
        Custom content here.
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

defineProps({ product: Object });

const tabs = ["Description", "Review", "Custom Tab"];
const activeTab = ref("Description");
</script>
