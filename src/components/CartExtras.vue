<template>
  <div class="w-full max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16">
    <!-- LEFT: DELIVERY + SHIPPING -->
    <div>
      <!-- DELIVERY DATE -->
      <h3 class="text-lg font-medium mb-6">
        Pick a delivery date and Time
      </h3>

      <div class="space-y-4 max-w-sm">
        <input
          type="date"
          class="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none"
        />

        <input
          type="text"
          placeholder="Write delivery time"
          class="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none"
        />
      </div>

      <p class="text-sm text-gray-500 mt-4 max-w-sm leading-relaxed">
        Pick delivery date and time as you choose. Delivery Time takes place
        between 12PM – 4PM MON–FRI AND 8AM–11AM SAT.
      </p>

      <!-- SHIPPING ESTIMATE -->
      <h3 class="text-lg font-medium mt-12 mb-6">
        Get shipping estimates
      </h3>

      <div class="space-y-4 max-w-sm">
        <select
          class="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none"
        >
          <option>---</option>
          <option>Nigeria</option>
          <option>United States</option>
          <option>United Kingdom</option>
        </select>

        <input
          type="text"
          placeholder="Zip/Postal Code"
          class="w-full border border-gray-200 px-4 py-3 text-sm focus:outline-none"
        />

        <button
          class="bg-neutral-800 text-white uppercase tracking-widest text-xs px-6 py-4 hover:bg-black transition"
        >
          Calculate shipping
        </button>
      </div>
    </div>

    <!-- RIGHT: CART TOTALS -->
    <div class="bg-[#fafafa] p-10 h-fit">
      <h3 class="text-xl font-medium text-center mb-8">
        Cart Totals
      </h3>

      <div class="border border-gray-200">
        <div class="grid grid-cols-2 border-b border-gray-200">
          <div class="p-4 text-xs uppercase tracking-widest text-gray-500">
            Subtotal
          </div>
          <div class="p-4 text-sm text-right font-medium">
            ${{ cartTotal.toFixed(2) }}
          </div>
        </div>

        <div class="grid grid-cols-2">
          <div class="p-4 text-xs uppercase tracking-widest text-gray-500">
            Total
          </div>
          <div class="p-4 text-sm text-right font-semibold">
            ${{ cartTotal.toFixed(2) }}
          </div>
        </div>
      </div>

      <!-- TERMS -->
      <label class="flex items-center gap-3 text-sm text-gray-600 mt-6">
        <input type="checkbox" />
        I agree with the terms and conditions
      </label>

      <!-- CHECKOUT -->
      <button
        href="/checkout"
        class="w-full bg-[#e76f7a] text-white uppercase tracking-widest text-xs py-4 mt-6 hover:opacity-90 transition"
      >
        Proceed to checkout
      </button>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const { cartTotal } = storeToRefs(cartStore);
</script>
