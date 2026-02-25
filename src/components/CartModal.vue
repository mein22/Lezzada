<template>
  <div
    v-if="modal.isOpen"
    class="fixed inset-0 bg-black/60 z-50 flex items-center justify-center"
  >
    <div class="bg-white w-full max-w-4xl p-10 relative">
      <!-- CLOSE -->
      <button
        class="absolute top-5 right-5 text-gray-500 hover:text-black text-xl"
        @click="modal.closeModal"
      >
        ✕
      </button>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
        <!-- LEFT -->
        <div>
          <div class="flex items-center gap-3 text-green-600 mb-6">
            ✔
            <p class="font-semibold">
              Product Successfully Added To Your Shopping Cart
            </p>
          </div>

          <img
            :src="modal.lastAddedProduct.image"
            class="w-40 mb-4"
          />

          <p class="font-medium">
            {{ modal.lastAddedProduct.title }}
          </p>
        </div>

        <!-- RIGHT -->
        <div>
          <p class="uppercase text-sm mb-4">
            There are {{ cart.cartCount }} items in your cart.
          </p>

          <p class="text-lg mb-6">
            <span class="font-semibold">Total Price:</span>
            ${{ cart.cartTotal.toFixed(2) }} USD
          </p>

          <div class="space-y-4">
            <RouterLink
              to="/collections"
              class="w-full border py-3 text-center block"
              @click="modal.closeModal"
            >
              Continue Shopping
            </RouterLink>

            <RouterLink
              to="/cart"
              class="block w-full border py-3 text-center"
              @click="modal.closeModal"
            >
              View Cart
            </RouterLink>

            <label class="flex items-center gap-2 text-sm">
              <input type="checkbox" v-model="agreed" />
              I agree with the terms and conditions
            </label>

            <button
              @click="goToCheckout"
              :disabled="!agreed"
              class="w-full py-3 text-white transition"
              :class="agreed ? 'bg-[#d3122a]' : 'bg-red-300 cursor-not-allowed'"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useCartModalStore } from "@/stores/cartModal";

const cart = useCartStore();
const modal = useCartModalStore();
const router = useRouter();

const agreed = ref(false);

const goToCheckout = () => {
  modal.closeModal();
  router.push("/checkout");
};
</script>
