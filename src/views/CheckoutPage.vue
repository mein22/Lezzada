<template>
  <CheckoutHeader />
  <div class="max-w-5xl mx-auto px-4 py-10">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10">
      <!-- LEFT: FORM -->
      <div class="lg:col-span-1 space-y-10">
        <!-- CONTACT -->
        <div>
          <div class="flex justify-between items-center mb-4">
            <h2 class="text-lg font-semibold">Contact</h2>
            <RouterLink to="/login" class="text-sm underline">
              Sign in
            </RouterLink>
          </div>

          <input
            type="text"
            placeholder="Email or mobile phone number"
            class="w-full border border-gray-300 px-4 py-3 rounded mb-4"
          />

          <label class="flex items-center gap-2 text-sm">
            <input type="checkbox" />
            Email me with news and offers
          </label>
        </div>

        <!-- DELIVERY -->
        <div>
          <h2 class="text-lg font-semibold mb-4">Delivery</h2>

          <select class="w-full border border-gray-300 px-4 py-3 rounded mb-4">
            <option>Nigeria</option>
          </select>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input
              v-model="email"
              type="text"
              placeholder="Email or mobile phone number"
              class="w-full border px-4 py-3 rounded mb-4"
            />

            <input
              v-model="firstName"
              type="text"
              placeholder="First name (optional)"
              class="border border-gray-300 px-4 py-3 rounded"
            />
            <input
              v-model="lastName"
              type="text"
              placeholder="Last name"
              class="border border-gray-300 px-4 py-3 rounded"
            />
          </div>

          <input
            v-model="address"
            type="text"
            placeholder="Address"
            class="w-full border border-gray-300 px-4 py-3 rounded mb-4"
          />

          <input
            v-model="biller_address"
            type="text"
            placeholder="Apartment, suite, etc. (optional)"
            class="w-full border border-gray-300 px-4 py-3 rounded mb-4"
          />

          <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
            <input
              v-model="city"
              type="text"
              placeholder="City"
              class="border border-gray-300 px-4 py-3 rounded"
            />
            <select class="border border-gray-300 px-4 py-3 rounded">
              <option>Federal Capital Territory</option>
            </select>
            <input
              type="text"
              placeholder="Postal code (optional)"
              class="border border-gray-300 px-4 py-3 rounded"
            />
          </div>

          <label class="flex items-center gap-2 text-sm mb-6">
            <input type="checkbox" />
            Save this information for next time
          </label>

          <!-- SHIPPING METHOD -->
          <div>
            <h3 class="font-medium mb-3">Shipping method</h3>

            <div
              class="flex justify-between items-center border border-black rounded px-4 py-4"
            >
              <span>International Shipping</span>
              <span class="font-medium">$20.00</span>
            </div>
          </div>
        </div>

        <!-- PAYMENT -->
        <div class="mt-10">
          <h2 class="text-lg font-semibold mb-1">Payment</h2>
          <p class="text-sm text-gray-500 mb-4">
            All transactions are secure and encrypted.
          </p>

          <!-- PAYMENT BOX -->
          <div class="border border-gray-300 rounded">
            <!-- PAYMENT METHOD HEADER -->
            <div
              class="flex items-center justify-between px-4 py-4 border-b bg-gray-50"
            >
              <div class="flex items-center gap-3">
                <input type="radio" checked />
                <span class="text-sm font-medium">Credit card</span>
              </div>

              <div class="flex gap-2">
                <img src="https://via.placeholder.com/38x24" alt="visa" />
                <img src="https://via.placeholder.com/38x24" alt="mastercard" />
                <img src="https://via.placeholder.com/38x24" alt="amex" />
              </div>
            </div>

            <!-- CARD FORM (UI ONLY) -->
            <div class="p-4 space-y-4">
              <input
                type="text"
                placeholder="Card number"
                class="w-full border border-gray-300 px-4 py-3 rounded"
                disabled
              />

              <div class="grid grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Expiration date (MM / YY)"
                  class="border border-gray-300 px-4 py-3 rounded"
                  disabled
                />
                <input
                  type="text"
                  placeholder="Security code"
                  class="border border-gray-300 px-4 py-3 rounded"
                  disabled
                />
              </div>

              <input
                type="text"
                placeholder="Name on card"
                class="w-full border border-gray-300 px-4 py-3 rounded"
                disabled
              />
            </div>
          </div>
           <div class="flex items-center gap-3">
                <input type="radio" checked />
                <span class="text-sm font-medium">Cash on delivery</span>
              </div>

          <!-- PAY BUTTON -->
          <button
            @click="handleCheckout"
            :disabled="orderStore.isProcessing"
            class="w-full mt-6 bg-black text-white py-4 disabled:opacity-50"
          >
            {{ orderStore.isProcessing ? "Processing..." : "Pay now" }}
          </button>
        </div>
      </div>

      <!-- RIGHT: ORDER SUMMARY -->
      <div class="bg-gray-50 p-6 rounded space-y-6">
        <!-- ITEMS -->
        <div class="space-y-4">
          <div
            v-for="item in cartStore.cartItems"
            :key="item.id"
            class="flex items-center justify-between"
          >
            <div class="flex items-center gap-4">
              <div class="relative">
                <img
                  :src="item.image"
                  class="w-16 h-16 object-cover rounded border"
                />
                <span
                  class="absolute -top-2 -right-2 w-6 h-6 bg-black text-white text-xs flex items-center justify-center rounded-full"
                >
                  {{ item.quantity }}
                </span>
              </div>
              <p class="text-sm">{{ item.title }}</p>
            </div>
            <p class="text-sm font-medium">
              ${{ (item.price * item.quantity).toFixed(2) }}
            </p>
          </div>
        </div>
        <p v-if="!cartStore.cartItems.length" class="text-sm text-gray-500">
          Your cart is empty
        </p>

        <!-- TOTALS -->
        <div class="border-t pt-4 space-y-2 text-sm">
          <div class="flex justify-between">
            <span>Subtotal · {{ cartStore.cartCount }} items</span>
            <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
          </div>

          <div class="flex justify-between">
            <span>Shipping</span>
            <span>$20.00</span>
          </div>
        </div>

        <div class="flex justify-between font-semibold text-lg border-t pt-4">
          <span>Total</span>
          <span>${{ (cartStore.cartTotal + 20).toFixed(2) }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { onMounted } from "vue";
import { useRouter } from "vue-router";
import { useCartStore } from "@/stores/cart";
import { useOrderStore } from "@/stores/order";
import CheckoutHeader from "@/components/CheckoutHeader.vue";

const router = useRouter();
const cartStore = useCartStore();
const orderStore = useOrderStore();

const email = ref("");
const firstName = ref("");
const lastName = ref("");
const address = ref("");
const biller_address = ref("");
const city = ref("");

const handleCheckout = async () => {
  if (!address.value) return;

  onMounted(() => {
    if (!cartStore.cartItems.length) {
      cartStore.fetchCartItems();
    }
  });

  const payload = {
    payment_method: "card",
    shipping_address: `${address.value}, ${city.value}`,
    billing_address: biller_address.value || address.value,
  };

  try {
    await orderStore.checkout(payload);

    cartStore.clearCart();

    router.push("/order-success");
  } catch (e) {
    console.error("Checkout failed", e);
  }
};
</script>
