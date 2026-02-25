<template>
  <div>
    <!-- Main Image -->
    <div class="bg-[#f5f5f5] mb-8 flex justify-center items-center">
      <img
        :src="activeImage"
        class="w-full max-h-screen object-contain"
      />
    </div>

    <!-- Thumbnails -->
    <div class="flex gap-4">
      <img
        v-for="(img, i) in images"
        :key="i"
        :src="img"
        @click="activeImage = img"
        class="w-20 h-20 object-contain bg-[#f5f5f5] cursor-pointer border"
        :class="activeImage === img ? 'border-black' : 'border-transparent'"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from "vue";

const props = defineProps({
  product: Object,
});

const images = computed(() => [
  props.product?.image,
  ...(props.product?.similarImages || []),
]);

const activeImage = ref("");

watch(
  () => props.product,
  (val) => {
    if (val) activeImage.value = val.image;
  },
  { immediate: true }
);
</script>
