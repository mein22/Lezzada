<template>
  <div>
    <h1 class="text-2xl font-medium mb-4">
      {{ product.title }}
    </h1>

    <p class="text-sm mb-2">
      Availability:
      <span class="text-red-500 font-medium">In Stock</span>
    </p>

    <!-- PRICE -->
    <div class="flex items-center gap-3 mb-6">
      <span class="text-gray-400 line-through">$75.00</span>
      <span class="text-xl font-semibold">${{ product.price }}</span>
      <span class="text-xs bg-[#333] text-white px-2 py-1">
        Save -27%
      </span>
    </div>

    <!-- SIZE -->
    <div class="mb-6 flex justify-between items-center w-1/2">
      <p class="mb-2">Size :</p>
        <div class="flex gap-3">
        <button
          v-for="size in ['S','M','L', 'XL']"
          :key="size"
          class="border px-4 py-2 hover:border-black"
        >
          {{ size }}
        </button>
      </div>
    </div>

    <!-- COLOR -->
    <div class="mb-6 flex justify-between items-center w-1/2">
      <p class="mb-2">Color :</p>
      <div class="flex gap-3">
        <span class="w-6 h-6 rounded-full bg-red-500"></span>
        <span class="w-6 h-6 rounded-full bg-green-500"></span>
        <span class="w-6 h-6 rounded-full bg-blue-500"></span>
      </div>
    </div>

    <!-- QUANTITY -->
    <div class="grid grid-cols-1 gap-6 mb-8 w-1/2">
      <div class="flex justify-between items-center">
      <p class="mb-2">Quantity :</p>
      <div class="flex items-center border px-2 py-2">
        <button>-</button>
        <span class="mx-4">1</span>
        <button>+</button>
      </div>
       </div>
      <div class="flex gap-3">
      <button class="inline-block bg-[#333] text-white border border-[#333] px-10 py-3 text-sm tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#333]">
        ADD TO CART
      </button>
      <button class="inline-block bg-transparent text-white border border-[#333] px-4 py-4 text-sm tracking-widest transition-all duration-300 hover:bg-[#333] hover:text-[#333]">
        <img src="@/assets/icons/heart.png" alt="">
      </button>
      </div>
    </div>

    <!-- BUY NOW -->
    <button
    @click="addToTheCart" 
    class="w-full bg-[#f4e4a3] py-4 mb-6">
      BUY IT NOW
    </button>

    <div class="mb-4 border-b">
      <p class="text-lg text-gray-500 mb-2">Guaranteed safe checkout</p>
      <!-- PAYMENT ICONS -->
        <div class="flex items-center gap-3 mb-6">
          <img src="@/assets/payments/visa.png" alt="Visa" class="h-7" />
          <img
            src="@/assets/payments/mastercard.png"
            alt="Mastercard"
            class="h-7"
          />
          <img src="@/assets/payments/amex.png" alt="Amex" class="h-7" />
          <img
            src="@/assets/payments/discover.jpg"
            alt="Discover"
            class="h-7"
          />
        </div>
    </div>

    <!-- META -->
    <div class="text-sm text-gray-500 space-y-6">
      <p>SKU: <span class="text-[#f5e6aa] mb-6">204</span></p>
      <p>Vendor: <span class="text-[#f5e6aa] mb-6">Vendor 6</span></p>
      <p>Type: <span class="text-[#f5e6aa] mb-6">Type 6</span></p>
      <div class="flex items-center gap-2">
        <p>Share: </p>
        <img src="@/assets/icons/facebook.png" alt="Facebook" class="h-10 w-10" />
        <img src="@/assets/icons/pinterest.png" alt="Pinterest" class="h-10 w-10" />
        <img src="@/assets/icons/twitter.png" alt="Twitter" class="h-13 w-15" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter, useRoute } from "vue-router";
defineProps({
  product: Object,
});

const router = useRouter();
const route = useRoute();

const addToTheCart = async () => {
  await cartStore.addToCart(props.product.id, 1);
  router.push("/checkout");
};
</script>
