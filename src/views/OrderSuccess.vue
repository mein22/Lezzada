<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-50 px-4">
    <div class="bg-white max-w-2xl w-full p-10 rounded-2xl shadow-lg text-center">
      
      <!-- ICON -->
      <div class="text-5xl mb-4">🎉</div>

      <!-- TITLE -->
      <h1 class="text-2xl font-semibold mb-2">
        Success! Your order is confirmed.
      </h1>

      <!-- MESSAGE -->
      <p class="text-gray-600 mb-8">
        Thanks for your purchase,
        <span class="font-medium">{{ customerName }}</span>!
        We’ve received your order
        <span class="font-medium">#{{ orderNumber }}</span>
        and are getting it ready to ship.
      </p>

      <!-- SUMMARY CARD -->
      <div class="bg-gray-50 rounded-lg p-6 text-left space-y-4 mb-8">
        <h2 class="font-semibold text-lg mb-2">Order Summary</h2>

        <div
          v-for="item in orderItems"
          :key="item.id"
          class="flex justify-between text-sm"
        >
          <span>{{ item.title }} x {{ item.quantity }}</span>
          <span>${{ (item.price * item.quantity).toFixed(2) }}</span>
        </div>

        <div class="border-t pt-4 text-sm space-y-1">
          <p>
            <span class="font-medium">Shipping To:</span>
            {{ shippingAddress }}
          </p>
          <p>
            <span class="font-medium">Estimated Delivery:</span>
            {{ estimatedDelivery }}
          </p>
          <p>
            <span class="font-medium">Confirmation Email:</span>
            {{ email }}
          </p>
        </div>
      </div>

      <!-- ACTION BUTTONS -->
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <button
          @click="goToOrders"
          class="px-6 py-3 bg-black text-white rounded-lg hover:opacity-90 transition"
        >
          Track My Order
        </button>

        <button
          @click="goShopping"
          class="px-6 py-3 border rounded-lg hover:bg-gray-100 transition"
        >
          Continue Shopping
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useOrderStore } from "@/stores/order";
import { useCartStore } from "@/stores/cart";

const router = useRouter();
const orderStore = useOrderStore();
const cartStore = useCartStore();

/**
 * FALLBACKS if backend doesn’t return everything yet
 */
const order = computed(() => orderStore.lastOrder || {});

const customerName = computed(() => order.value.customer_name || "Customer");
const orderNumber = computed(() => order.value.id || "0000");
const email = computed(() => order.value.email || "your email");
const shippingAddress = computed(
  () => order.value.shipping_address || "your address"
);

const orderItems = computed(() => order.value.items || cartStore.cart);

/**
 * Simple delivery estimate (5 days from now)
 */
const estimatedDelivery = computed(() => {
  const d = new Date();
  d.setDate(d.getDate() + 5);
  return d.toDateString();
});

const goToOrders = () => {
  router.push("#"); 
};

const goShopping = () => {
  router.push("/collections");
};
</script>
