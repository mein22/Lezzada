<template>
  <header class="w-full border-b border-gray-100">
    <div class="max-w-7xl mx-auto flex items-center justify-between px-6 py-6">
      <!-- LOGO -->
      <div class="text-2xl font-semibold tracking-widest">
        <img
          src="https://lezada-demo.myshopify.com/cdn/shop/files/logo_300x300.png?v=1613746425"
          alt=""
        />
      </div>

      <!-- NAVIGATION -->
      <nav class="hidden lg:flex items-center gap-10 text-sm">
        <RouterLink to="/" class="text-[#7e7e7e] hover:underline transition">
          Home
        </RouterLink>

        <RouterLink
          to="/collections"
          class="text-[#7e7e7e] hover:underline transition"
        >
          Shop
        </RouterLink>

        <div
          class="relative"
          @mouseenter="openCatalog"
          @mouseleave="closeCatalog"
        >
          <!-- Catalog Trigger -->
          <span
            class="flex items-center gap-1 text-[#7e7e7e] hover:underline transition cursor-pointer"
          >
            Catalog
            <img src="../assets/icons/down.png" class="h-3 w-3" />
          </span>

          <!-- MEGA MENU -->
          <div
            v-if="showCatalog"
            class="absolute left-1/2 top-full -translate-x-1/2 mt-8 w-screen max-w-5xl bg-white shadow-xl z-50"
          >
            <div class="grid grid-cols-4 gap-10 px-12 py-10 text-sm">
              <!-- COLUMN 1 -->
              <div>
                <h4 class="font-medium mb-4">Popular</h4>
                <ul class="space-y-4 text-gray-600">
                  <li>
                    <RouterLink to="/category/casual"
                      >Casual
                      <span class="ml-2 text-xs bg-red-500 text-white px-1"
                        >NEW</span
                      ></RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/category/exclusive">Exclusive</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/aligori">Aligori</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/churidar">Churidar</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/shalwar">Shalwar</RouterLink>
                  </li>
                  <li><RouterLink to="/category/jeans">Jeans</RouterLink></li>
                  <li><RouterLink to="/category/dress">Dress</RouterLink></li>
                </ul>
              </div>

              <!-- COLUMN 2 -->
              <div>
                <h4 class="font-medium mb-4">Best Selling</h4>
                <ul class="space-y-4 text-gray-600">
                  <li>
                    <RouterLink to="/category/sandals">Sandals</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/best-shoe">
                      Best shoe
                      <span class="ml-2 text-xs bg-red-500 text-white px-1"
                        >NEW</span
                      >
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/blucher">Blucher shoe</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/boat">Boat shoe</RouterLink>
                  </li>
                  <li><RouterLink to="/category/brogan">Brogan</RouterLink></li>
                  <li>
                    <RouterLink to="/category/chelsea">Chelsea boot</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/creeper"
                      >Brothel creeper</RouterLink
                    >
                  </li>
                </ul>
              </div>

              <!-- COLUMN 3 -->
              <div>
                <h4 class="font-medium mb-4">New Product</h4>
                <ul class="space-y-4 text-gray-600">
                  <li><RouterLink to="/category/belt">Belt</RouterLink></li>
                  <li>
                    <RouterLink to="/category/wallets">Wallets</RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/card-holders"
                      >Card Holders</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/category/bags">
                      Bags
                      <span class="ml-2 text-xs bg-green-400 text-white px-1"
                        >SALE</span
                      >
                    </RouterLink>
                  </li>
                  <li>
                    <RouterLink to="/category/executive-bag"
                      >Executive bag</RouterLink
                    >
                  </li>
                  <li>
                    <RouterLink to="/category/cufflinks">Cufflinks</RouterLink>
                  </li>
                  <li><RouterLink to="/category/cap">Cap</RouterLink></li>
                </ul>
              </div>

              <!-- COLUMN 4 (Product Slider) -->
              <div class="relative group">
                <!-- LEFT ARROW -->
                <button
                  @click.stop="prev"
                  class="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  ‹
                </button>

                <!-- RIGHT ARROW -->
                <button
                  @click.stop="next"
                  class="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white shadow flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                >
                  ›
                </button>

                <!-- SLIDE -->
                <RouterLink :to="sliderItems[currentIndex].link">
                  <img
                    :src="sliderItems[currentIndex].image"
                    class="w-full object-contain mb-4"
                  />

                  <h5 class="text-sm hover:underline">
                    {{ sliderItems[currentIndex].title }}
                  </h5>

                  <p class="text-sm font-medium">
                    {{ sliderItems[currentIndex].price }}
                    <span class="text-gray-400 line-through ml-2">
                      {{ sliderItems[currentIndex].oldPrice }}
                    </span>
                  </p>
                </RouterLink>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <span
            class="flex items-center gap-1 text-[#7e7e7e] hover:underline transition cursor-pointer"
          >
            Blog
            <span class="text-xs"
              ><img src="../assets/icons/down.png" class="h-3 w-3"
            /></span>
          </span>
        </div>

        <div class="relative group">
          <span
            class="flex items-center gap-1 text-[#7e7e7e] hover:underline transition cursor-pointer"
          >
            Pages
            <span class="text-xs"
              ><img src="../assets/icons/down.png" class="h-3 w-3"
            /></span>
          </span>
        </div>
      </nav>

      <!-- ICONS -->
      <div class="flex items-center gap-6 text-lg">
        <!-- Search -->
        <button class="hover:opacity-70 transition">
          <img src="../assets/icons/search.png" alt="search-icon" />
        </button>

        <!-- Account -->
        <!-- <RouterLink to="/account/login" class="relative"> -->
        <RouterLink
          :to="authStore.isAuthenticated ? '/dashboard' : '/account/login'"
        >
          <div class="relative group">
            <button class="hover:opacity-70 transition relative">
              <img src="../assets/icons/user.png" class="h-4 w-4" />

              <span
                v-if="authStore.isAuthenticated"
                class="absolute -top-2 -right-2 w-4 h-4 text-black text-xs font-bold flex items-center justify-center"
              >
                +
              </span>
            </button>

            <div
              v-if="authStore.isAuthenticated"
              class="absolute right-0 mt-3 w-40 bg-white shadow-md opacity-0 group-hover:opacity-100 transition pointer-events-none group-hover:pointer-events-auto"
            ></div>
          </div>
        </RouterLink>

        <!-- Wishlist -->
        <RouterLink
          to="/wishlist"
          class="relative w-10 h-10 flex items-center justify-center"
        >
          <!-- HEART ICON -->
          <svg
            class="w-6 h-6 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1.5"
              d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"
            />
          </svg>

          <!-- BADGE -->
          <span
            v-if="wishlistStore.wishlistCount > 0"
            class="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 text-white text-xs font-semibold flex items-center justify-center"
          >
            {{ wishlistStore.wishlistCount }}
          </span>
        </RouterLink>

        <!-- Cart -->
        <div class="relative">
          <button @click="openCart" class="hover:opacity-70 transition">
            <img src="../assets/icons/cart.png" class="h-4" />
          </button>

          <span
            v-if="cartStore.cartCount > 0"
            class="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
          >
            {{ cartStore.cartCount }}
          </span>
        </div>
      </div>
    </div>
  </header>

  <!-- OVERLAY -->
  <div
    v-if="isCartOpen"
    class="fixed inset-0 bg-black/40 z-40"
    @click="closeCart"
  />

  <!-- SIDE CART -->
  <transition name="slide">
    <div
      v-if="isCartOpen"
      class="fixed top-0 right-0 h-full w-[380px] bg-white z-50 shadow-xl flex flex-col"
    >
      <!-- HEADER -->
      <div class="flex items-center justify-between px-6 py-5 border-b">
        <h2 class="text-lg font-semibold">Cart</h2>
        <button @click="closeCart" class="text-xl">✕</button>
      </div>

      <!-- CART ITEMS -->
      <div class="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <div
          v-for="item in cartStore.cartItems"
          :key="item.id"
          class="flex gap-4 items-center"
        >
          <img :src="item.image" class="w-16 h-16 object-cover rounded" />

          <div class="flex-1">
            <p class="text-sm font-medium">{{ item.title }}</p>
            <p class="text-sm text-gray-500">
              {{ item.quantity }} × ${{ item.price }}
            </p>
          </div>

          <button
            @click="cartStore.deleteCartItem(item.id)"
            class="text-gray-400 hover:text-black"
          >
            ✕
          </button>
        </div>

        <p v-if="!cartStore.cartItems.length" class="text-sm text-gray-500">
          Your cart is empty
        </p>
      </div>

      <!-- FOOTER -->
      <div class="border-t px-6 py-5 space-y-4">
        <div class="flex justify-between font-medium">
          <span>Total:</span>
          <span>${{ cartStore.cartTotal.toFixed(2) }}</span>
        </div>

        <label class="flex items-center gap-2 text-sm">
          <input type="checkbox" />
          I agree with the terms and conditions
        </label>

        <button
          class="w-full bg-red-500 text-white py-3 uppercase text-sm tracking-widest"
        >
          Checkout
        </button>

        <RouterLink
          to="/cart"
          class="block w-full text-center bg-black text-white py-3 uppercase text-sm tracking-widest"
        >
          View Cart
        </RouterLink>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useWishlistStore } from "@/stores/wishlist";
import { useAuthStore } from "@/stores/auth";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
const wishlistStore = useWishlistStore();
const authStore = useAuthStore();

const isCartOpen = ref(false);

const openCart = () => {
  isCartOpen.value = true;
};

const closeCart = () => {
  isCartOpen.value = false;
};

const showCatalog = ref(false);
let closeTimer = null;

const sliderItems = [
  {
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/products/per1_1024x1024.jpg?v=1551249474",
    title: "Organic Moon Fruit",
    price: "$39.00",
    oldPrice: "$60.00",
    link: "/product/organic-moon-fruit",
  },
  {
    image:
      "https://lezada-demo.myshopify.com/cdn/shop/products/per5_1024x1024.jpg?v=1551249634",
    title: "Cocoa Rose Body",
    price: "$55.00",
    oldPrice: "$75.00",
    link: "/product/cocoa-rose-body",
  },
];

const currentIndex = ref(0);

const openCatalog = () => {
  clearTimeout(closeTimer);
  showCatalog.value = true;
};

const closeCatalog = () => {
  closeTimer = setTimeout(() => {
    showCatalog.value = false;
  }, 250); // delay (ms)
};

const next = () => {
  currentIndex.value =
    currentIndex.value === sliderItems.length - 1 ? 0 : currentIndex.value + 1;
};

const prev = () => {
  currentIndex.value =
    currentIndex.value === 0 ? sliderItems.length - 1 : currentIndex.value - 1;
};
</script>

<style scoped>
.slide-enter-from {
  transform: translateX(100%);
}
.slide-enter-to {
  transform: translateX(0);
}
.slide-enter-active {
  transition: transform 0.3s ease;
}

.slide-leave-from {
  transform: translateX(0);
}
.slide-leave-to {
  transform: translateX(100%);
}
.slide-leave-active {
  transition: transform 0.3s ease;
}
</style>
