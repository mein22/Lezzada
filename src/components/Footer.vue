<template>
  <footer class="w-full bg-[#F8F8F8] border-t border-gray-100 text-sm text-gray-600">
    <div
      class="max-w-7xl mx-auto px-6 py-10 flex flex-col lg:flex-row justify-between gap-8"
    >
      <!-- LEFT SIDE -->
      <div class="flex flex-col gap-4">
        <!-- TOP LINKS -->
        <div class="flex flex-wrap gap-6">
          <RouterLink to="#" class="hover:text-black transition">
            Search
          </RouterLink>
          <RouterLink to="#" class="hover:text-black transition">
            About us
          </RouterLink>
          <RouterLink to="#" class="hover:text-black transition">
            Contact
          </RouterLink>
          <RouterLink to="#" class="hover:text-black transition">
            Policy
          </RouterLink>
          <RouterLink to="#" class="hover:text-black transition">
            Faqs
          </RouterLink>
        </div>

        <!-- COPYRIGHT -->
        <p class="text-xs text-gray-500">
          © 2018 Lezada. All Rights Reserved | (+00) 123 567990 |
          contact@lezada.com
        </p>
      </div>

      <!-- RIGHT SIDE -->
      <div class="flex flex-col items-start lg:items-end gap-4">
        <!-- SOCIAL ICONS -->
        <div class="flex items-center gap-5">
          <!-- Twitter -->
          <a href="#" class="hover:text-black transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016 3a4.48 4.48 0 00-4.47 4.48c0 .35.04.7.12 1.02A12.94 12.94 0 013 4.16a4.48 4.48 0 001.39 5.98A4.4 4.4 0 012.8 9.7v.06a4.48 4.48 0 003.6 4.39 4.52 4.52 0 01-2.02.08 4.48 4.48 0 004.18 3.11A9 9 0 012 19.54 12.7 12.7 0 008.29 21c8.38 0 12.96-6.94 12.96-12.96 0-.2 0-.39-.01-.58A9.18 9.18 0 0023 3z"
              />
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" class="hover:text-black transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M12 2.2c3.2 0 3.58.01 4.85.07 1.17.06 1.97.25 2.43.42a4.9 4.9 0 011.78 1.16 4.9 4.9 0 011.16 1.78c.17.46.36 1.26.42 2.43.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.06 1.17-.25 1.97-.42 2.43a4.9 4.9 0 01-1.16 1.78 4.9 4.9 0 01-1.78 1.16c-.46.17-1.26.36-2.43.42-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.06-1.97-.25-2.43-.42a4.9 4.9 0 01-1.78-1.16 4.9 4.9 0 01-1.16-1.78c-.17-.46-.36-1.26-.42-2.43C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.06-1.17.25-1.97.42-2.43a4.9 4.9 0 011.16-1.78 4.9 4.9 0 011.78-1.16c.46-.17 1.26-.36 2.43-.42C8.42 2.21 8.8 2.2 12 2.2zm0 3.3a6.5 6.5 0 100 13 6.5 6.5 0 000-13zm0 10.7a4.2 4.2 0 110-8.4 4.2 4.2 0 010 8.4zm6.75-10.95a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
              />
            </svg>
          </a>

          <!-- LinkedIn -->
          <a href="#" class="hover:text-black transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M4.98 3.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5zM3 8.98h3.96V21H3zM9.5 8.98H13v1.64h.05a3.84 3.84 0 013.46-1.9c3.7 0 4.38 2.43 4.38 5.6V21h-3.96v-5.32c0-1.27-.02-2.9-1.77-2.9-1.77 0-2.04 1.38-2.04 2.8V21H9.5z"
              />
            </svg>
          </a>

          <!-- YouTube -->
          <a href="#" class="hover:text-black transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M23.5 6.2s-.23-1.64-.95-2.36c-.9-.95-1.9-.96-2.36-1.02C16.9 2.5 12 2.5 12 2.5h-.01s-4.9 0-8.19.32c-.46.06-1.46.07-2.36 1.02-.72.72-.95 2.36-.95 2.36S.2 8.1.2 10v1.99c0 1.9.29 3.8.29 3.8s.23 1.64.95 2.36c.9.95 2.08.92 2.61 1.02 1.9.18 8.0.32 8.0.32s4.9-.01 8.19-.33c.46-.06 1.46-.07 2.36-1.02.72-.72.95-2.36.95-2.36s.29-1.9.29-3.8V10c0-1.9-.29-3.8-.29-3.8zM9.75 14.5V7.5l6.5 3.5-6.5 3.5z"
              />
            </svg>
          </a>

          <!-- Facebook -->
          <a href="#" class="hover:text-black transition">
            <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-2.9h2V9.8c0-2 1.2-3.1 3-3.1.87 0 1.78.16 1.78.16v2h-1c-.98 0-1.28.61-1.28 1.23v1.48h2.18l-.35 2.9h-1.83v7A10 10 0 0022 12z"
              />
            </svg>
          </a>
        </div>

        <!-- PAYMENT ICONS -->
        <div class="flex items-center gap-3">
          <img src="@/assets/payments/visa.png" alt="Visa" class="h-5" />
          <img
            src="@/assets/payments/mastercard.png"
            alt="Mastercard"
            class="h-5"
          />
          <img src="@/assets/payments/amex.png" alt="Amex" class="h-5" />
          <img src="@/assets/payments/paypal.jpg" alt="Paypal" class="h-5" />
          <img
            src="@/assets/payments/discover.jpg"
            alt="Discover"
            class="h-5"
          />
        </div>

        <!-- CURRENCY & LANGUAGE -->
        <div class="flex items-center gap-3">
          <select
            class="border border-gray-300 px-3 py-1.5 text-xs focus:outline-none"
          >
            <option>USD $</option>
            <option>EUR €</option>
            <option>NGN ₦</option>
          </select>

          <select
            class="border border-gray-300 px-3 py-1.5 text-xs focus:outline-none"
          >
            <option>English</option>
            <option>French</option>
          </select>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>




