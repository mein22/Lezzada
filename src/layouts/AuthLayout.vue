<template>
  <div class="min-h-screen flex flex-col">
    <Header />
    <div
      class="w-full h-20 bg-[#f3f3f3] border-t border-gray-100 text-sm text-gray-600"
    >
      <div class="max-w-7xl mx-auto h-full flex items-center px-6">
        <p class="text-gray-500 text-sm">
          Home / account /
          <span class="font-semibold text-black">
            {{ currentPath }}
          </span>
        </p>
      </div>
    </div>

    <main class="flex-1 flex items-center justify-center bg-white px-4">
      <RouterView />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import { RouterView, useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const currentPath = computed(() => {
  return route.name ?? "";
});
</script>
