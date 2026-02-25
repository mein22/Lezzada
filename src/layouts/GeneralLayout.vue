<template>
  <div>
    <Header />

    <main>
      <router-view />
    </main>

    <Footer />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";

import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

onMounted(async () => {
  const authStore = useAuthStore();
  const cartStore = useCartStore();

  if (authStore.isAuthenticated) {
    await cartStore.fetchCartItems();

  }
});
</script>
