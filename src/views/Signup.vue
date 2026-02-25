<template>
  <div class="w-full max-w-lg bg-[#f3f3f3] px-10 py-8 my-20">
    <h1 class="text-2xl font-semibold text-center mb-2">
      Create Account
    </h1>

    <p class="text-sm text-gray-500 text-center mb-8">
      Please register using account details below.
    </p>

    <form class="space-y-4" @submit.prevent="submit">
      <div>
        <p>First Name</p>
        <input v-model="form.first_name" type="text" class="w-full bg-white border px-4 py-3" />
      </div>

      <div>
        <p>Last Name</p>
        <input v-model="form.last_name" type="text" class="w-full bg-white border px-4 py-3" />
      </div>

      <div>
        <p>Email</p>
        <input v-model="form.email" type="email" class="w-full bg-white border px-4 py-3" />
      </div>

      <div>
        <p>Phone Number</p>
        <input v-model="form.phone" type="tel" class="w-full bg-white border px-4 py-3" />
      </div>

      <div>
        <p>Password</p>
        <input v-model="form.password" type="password" class="w-full bg-white border px-4 py-3" />
      </div>

      <!-- ✅ REAL SUBMIT BUTTON -->
      <button
        type="submit"
        class="w-full bg-[#333] text-white py-3 tracking-widest hover:bg-black transition"
      >
        CREATE
      </button>

      <p class="text-sm text-gray-700 pt-4">
        <RouterLink to="/" class="hover:underline">
          Return to store
        </RouterLink>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
});

const submit = async () => {
  try {
    await authStore.register(form.value);
    router.push("/");
  } catch (err) {
    if (err.response?.data?.errors) {
      console.error(err.response.data.errors);
      alert(Object.values(err.response.data.errors)[0][0]);
    } else {
      alert("Registration failed");
    }
  }
};
</script>







<!-- <template>
  <div class="w-full max-w-lg bg-[#f3f3f3] px-10 py-8 my-20">
    <h1 class="text-2xl font-semibold text-center mb-2">Create Account</h1>

    <p class="text-sm text-gray-500 text-center mb-8">
      Please register using account details below.
    </p>

    <form class="space-y-4">
      <p>First Name</p>
      <input
        type="name"
        placeholder="First Name"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />
      <p>Last Name</p>
      <input
        type="name"
        placeholder="Last Name"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />
      <p>Email</p>
      <input
        type="email"
        placeholder="Email"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />
      <p>Phone Number</p>
      <input
        type="tel"
        placeholder="Phone Number"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />
      <p>Password</p>
      <input
        type="password"
        placeholder="Password"
        class="w-full bg-white border border-gray-200 px-4 py-3 text-sm focus:outline-none focus:border-gray-400"
      />

      <div class="flex items-center justify-between pt-2">
        <button
          @click.prevent="submit"
          class="bg-[#333] text-white px-7 py-2 text-sm tracking-widest hover:bg-black"
        >
          CREATE
        </button>
      </div>

      <p class="text-sm text-gray-700 text-left pt-4">
        <a href="#" class="hover:underline"> Return to store </a>
      </p>
    </form>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();

const form = ref({
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  password: "",
});

const submit = async () => {
  await authStore.register(form.value);
  router.push("/");
};
</script> -->
