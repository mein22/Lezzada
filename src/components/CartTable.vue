<template>
  <div class="w-full max-w-6xl mx-auto px-4 py-10">
    <!-- TABLE -->
    <div class="border border-gray-200">
      <!-- HEADER -->
      <div
        class="grid grid-cols-[2fr_1fr_1fr_1fr_60px] text-xs uppercase tracking-widest text-gray-500 border-b border-gray-200"
      >
        <div class="p-6 border-r border-gray-200">Product</div>
        <div class="p-6 border-r border-gray-200">Price</div>
        <div class="p-6 text-center border-r border-gray-200">Quantity</div>
        <div class="p-6 border-r border-gray-200">Total</div>
        <div class="p-6"></div>
      </div>

      <div
        v-for="item in cartStore.getCartItems"
        :key="item.cart_id"
        class="grid grid-cols-[2fr_1fr_1fr_1fr_60px] items-center border-b border-gray-200"
      >
        <!-- PRODUCT -->
        <div class="flex items-center gap-4 p-6 border-r border-gray-200">
          <img :src="item.image" alt="" class="w-16 h-16 object-cover" />
          <div>
            <p class="text-sm font-medium text-gray-800">
              {{ item.name }}
            </p>
          </div>
        </div>

        <!-- PRICE -->
        <div class="p-6 text-sm text-gray-800 border-r border-gray-200">
          ${{ Number(item.price).toFixed(2) }}
        </div>

        <!-- QUANTITY -->
        <div class="p-6 border-r border-gray-200">
          <div class="flex items-center justify-center gap-4">
            <button
              @click="cartStore.updateCartQuantity(item.id, 'decrement')"
              class="text-gray-400 hover:text-black text-lg"
            >
              –
            </button>

            <span class="text-sm text-gray-800">
              {{ item.quantity }}
            </span>

            <button
              @click="cartStore.updateCartQuantity(item.id, 'increment')"
              class="text-gray-400 hover:text-black text-lg"
            >
              +
            </button>
          </div>

          <div class="h-px bg-gray-300 mt-2 mx-auto w-24"></div>
        </div>

        <!-- TOTAL -->
        <div
          class="p-6 text-sm font-medium text-gray-800 border-r border-gray-200"
        >
          ${{ (Number(item.price) * item.quantity).toFixed(2) }}
        </div>

        <!-- REMOVE -->
        <div class="p-6 flex justify-center">
          <button
            @click="cartStore.deleteCartItem(item.id)"
            class="w-10 h-8 border border-gray-300 flex items-center justify-center text-gray-400 hover:text-black"
          >
            ×
          </button>
        </div>
      </div>
    </div>

    <!-- ACTION BUTTONS -->
    <div class="flex justify-end gap-4 mt-8">
      <button
        class="bg-neutral-800 text-white uppercase tracking-widest text-xs px-6 py-4 hover:bg-black transition"
      >
        Update cart
      </button>

      <RouterLink
        to="/collections"
        class="bg-neutral-800 text-white uppercase tracking-widest text-xs px-6 py-4 hover:bg-black transition"
      >
        Continue shopping
      </RouterLink>

      <button
        @click="cartStore.clearCart"
        class="bg-neutral-800 text-white uppercase tracking-widest text-xs px-6 py-4 hover:bg-black transition"
      >
        Clear cart
      </button>
    </div>
  </div>
</template>

<script setup>
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
</script>
