<template>
  <div class="w-full max-w-md bg-[#f3f3f3] px-10 py-8 my-20">
    <h1 class="text-2xl font-semibold text-center mb-2">Login</h1>

    <p class="text-sm text-gray-500 text-center mb-8">
      Please Login using account detail below.
    </p>

    <form class="space-y-4" @submit.prevent="submit">
      <!-- EMAIL -->
      <input
        v-model="email"
        type="email"
        placeholder="Email"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />

      <!-- PASSWORD -->
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />

      <!-- ERROR -->
      <p v-if="error" class="text-sm text-red-500">
        {{ error }}
      </p>

      <div class="flex items-center justify-between pt-2">
        <!-- LOGIN BUTTON -->
        <button
          type="submit"
          :disabled="loading"
          class="inline-block bg-[#333] text-white border border-[#333] px-7 py-2 text-sm tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#333] disabled:opacity-50"
        >
          {{ loading ? "Signing in..." : "SIGN IN" }}
        </button>

        <!-- RESET -->
        <RouterLink
          to="/account/reset"
          class="text-sm text-gray-600 hover:underline"
        >
          Forgot your password?
        </RouterLink>
      </div>

      <p class="text-sm text-gray-700 text-left pt-4">
        <RouterLink to="/account/register" class="hover:underline">
          Create account
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter, useRoute } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const email = ref("");
const password = ref("");
const loading = ref(false);
const error = ref(null);

const submit = async () => {
  error.value = null;
  loading.value = true;

  try {
    await authStore.login(email.value, password.value);

    // Always go to homepage after login
    router.replace("/");
  } catch (err) {
    error.value = "Invalid email or password";
  } finally {
    loading.value = false;
  }
};
</script>

