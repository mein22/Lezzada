<template>
  <button
    v-show="isVisible"
    @click="scrollToTop"
    class="
      fixed bottom-6 right-6 z-50
      w-10 h-10
      bg-[#333333] text-white
      flex items-center justify-center
      rounded-full
      shadow-lg
      hover:bg-gray-800
      transition
    "
    aria-label="Back to top"
  >
    <!-- Arrow Up Icon -->
     <img src="/icons/white-up.png" class="h-4" />
  </button>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const toggleVisibility = () => {
  isVisible.value = window.scrollY > 300;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", toggleVisibility);
});

onUnmounted(() => {
  window.removeEventListener("scroll", toggleVisibility);
});
</script>
