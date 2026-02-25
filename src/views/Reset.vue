<template>
  <div
    class="w-full max-w-lg bg-[#f3f3f3] px-10 py-8 my-20"
  >
    <h1 class="text-2xl font-semibold text-center mb-2">
      Reset your password
    </h1>

    <p class="text-sm text-gray-500 text-center mb-8">
      We would send you an email to reset your password.
    </p>

    <form class="space-y-4">
      <input
        type="email"
        placeholder="Email"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />     

      <div class="flex items-center justify-between pt-2">
        <RouterLink
          to="/shop"
          class="inline-block bg-[#333] text-white border border-[#333] px-8 py-3 text-sm tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#333]"
        >
          SUBMIT
        </RouterLink>

        <RouterLink to="/account/login" class="text-md text-gray-600 hover:underline">
            Cancel
        </RouterLink>
      </div>
    </form>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
</script>