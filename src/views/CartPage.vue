<template>
          <!-- PAGE HEADER -->
    <div class="w-full bg-[#f3f3f3] border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6 py-10">
        <p class="text-sm text-gray-500">Home / <span>Your Shopping Cart</span></p>
      </div>
    </div>
        <CartTable />
        <CartExtras />
        <CartRecommendation />

</template>

<script setup>
import { onMounted } from "vue";
import { useCartStore } from "@/stores/cart";

import CartTable from "@/components/CartTable.vue";
import CartExtras from "@/components/CartExtras.vue";
import CartRecommendation from "@/components/CartRecommendation.vue";

const cartStore = useCartStore();

onMounted(() => {
  cartStore.fetchCartItems();
});
</script>
