<template>
  <div
      class="w-full h-20 bg-[#f3f3f3] border-t border-gray-100 text-sm text-gray-600"
    >
      <div class="max-w-7xl mx-auto h-full flex items-center px-6">
        <p class="text-gray-500 text-sm">
          Home / dashboard 
        </p>
      </div>
    </div>
  <div class="mx-auto max-w-7xl min-h-screen">
    <!-- FULL WIDTH HEADER -->
    <div class="w-full border-b my-10">
      <div class="px-6 py-4 flex items-center justify-between">
        <h1 class="text-3xl font-semibold text-gray-800">
          My Account
        </h1>

        <button
          @click="handleLogout"
          class="text-md text-gray-600 hover:text-black"
        >
          Logout
        </button>
      </div>
    </div>

    <!-- LEFT ALIGNED CONTENT -->
    <div class="px-6 py-10 max-w-3xl">
      <!-- Order History -->
      <section class="mb-10">
        <h2 class="text-xl font-semibold text-gray-800 mb-2">
          Order History
        </h2>

        <p class="text-gray-500">
          You haven't placed any orders yet.
        </p>
      </section>

      <!-- Account Details -->
      <section>
        <h2 class="text-xl font-semibold text-gray-800 mb-4">
          Account Details
        </h2>

        <div class="space-y-6 text-gray-700">
          <p class="text-lg font-medium">
            {{ authStore.currentUser?.name }}
          </p>

          <p>{{ authStore.currentUser?.email }}</p>

          <p>Nigeria</p>

          <button class="text-sm underline hover:text-black">
            View Addresses (1)
          </button>
        </div>
      </section>
    </div>
  </div>
</template>


<script setup>
import { useAuthStore } from "@/stores/auth"
import { useRouter } from "vue-router"

const authStore = useAuthStore()
const router = useRouter()

const handleLogout = () => {
  authStore.logout()
  router.push("/account/login")
}
</script>
