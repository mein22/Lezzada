<template>
  <div class="group relative cursor-pointer">
    <!-- IMAGE WRAPPER -->
    <RouterLink
      :to="`/product/${product.id}`"
      class="group relative cursor-pointer block"
    >
      <div class="relative bg-[#f5f5f5] overflow-hidden">
        <!-- BADGES -->
        <div
          v-if="product.isSale"
          class="absolute top-4 left-4 flex flex-col gap-2 z-10"
          @click.stop
        >
          <span
            class="w-12 h-12 rounded-full bg-[#98d8ca] text-white text-xs font-semibold tracking-widest flex items-center justify-center"
          >
            SALE
          </span>

          <span
            class="w-12 h-12 rounded-full bg-[#98d8ca] text-white text-xs font-semibold flex items-center justify-center"
          >
            {{ product.discount }}
          </span>
        </div>

        <!-- ACTION ICONS -->
        <div
          class="absolute top-4 right-4 flex flex-col gap-3 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 z-10"
        >
          <!-- WISHLIST -->
          <div class="relative group/wishlist" @click.stop>
            <!-- LABEL -->
            <span
              class="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#333] text-white text-xs px-3 py-1 rounded whitespace-nowrap opacity-0 translate-x-2 group-hover/wishlist:opacity-100 group-hover/wishlist:translate-x-0 transition-all duration-200"
            >
              {{ isInWishlist ? "Remove from wishlist" : "Add to wishlist" }}
            </span>

            <!-- BUTTON -->
            <button
              @click.stop.prevent="toggleWishlist"
              class="w-10 h-10 bg-white flex items-center justify-center shadow transition"
            >
              <!-- HEART -->
              <svg
                v-if="!isInWishlist"
                class="w-5 h-5"
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

              <!-- REMOVE (X) -->
              <svg
                v-else
                class="w-5 h-5 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <!-- COMPARE -->
          <button
            class="w-10 h-10 bg-white flex items-center justify-center shadow hover:text-black transition"
          >
            <img
              src="../assets/icons/shuffle.png"
              alt="search-icon"
              class="w-5 h-5"
            />
          </button>

          <!-- QUICK VIEW -->
          <button
            class="w-10 h-10 bg-white flex items-center justify-center shadow hover:text-black transition"
          >
            <img
              src="../assets/icons/search.png"
              alt="search-icon"
              class="w-5 h-5"
            />
          </button>
        </div>

        <!-- PRODUCT IMAGE -->
        <!-- <img
          :src="product.image"
          :alt="product.name"
          class="w-full h-[360px] object-contain transition-transform duration-500 group-hover:scale-105"
        /> -->
        <!-- IMAGE CONTAINER -->
        <div class="relative w-full h-[360px] bg-[#f5f5f5] overflow-hidden">
          <!-- MAIN IMAGE -->
          <img
            :src="product.image"
            :alt="product.name"
            class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-100 group-hover:opacity-0"
          />

          <!-- HOVER IMAGE -->
          <img
            v-if="product.hoverImage"
            :src="product.hoverImage"
            :alt="product.name"
            class="absolute inset-0 w-full h-full object-contain transition-opacity duration-300 opacity-0 group-hover:opacity-100"
          />
        </div>

        <!-- HOVER DETAILS PANEL -->
        <div
          v-if="product.showHoverPanel"
          class="absolute left-5 right-5 bottom-5 bg-white px-4 py-4 opacity-0 translate-y-6 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out"
          @click.stop
        >
          <!-- SIZES -->
          <div class="flex justify-center gap-4 text-xs text-gray-500 mb-3">
            <span class="hover:text-black cursor-pointer">S</span>
            <span class="hover:text-black cursor-pointer">M</span>
            <span class="hover:text-black cursor-pointer">L</span>
            <span class="hover:text-black cursor-pointer">XL</span>
          </div>

          <!-- SIMILAR PRODUCTS -->
          <div class="flex justify-center gap-3">
            <img
              v-for="(img, i) in product.similarImages"
              :key="i"
              :src="img"
              class="w-10 h-10 rounded-full object-cover border border-gray-200 hover:border-black transition"
            />
          </div>
        </div>
      </div>
    </RouterLink>

    <!-- TEXT AREA -->
    <div class="mt-4 text-sm relative">
      <!-- TITLE -->
      <p
        class="text-gray-800 transition-opacity duration-300 group-hover:opacity-0"
      >
        {{ product.title }}
      </p>

      <p
        class="absolute left-0 top-0 text-red-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
        @click.stop.prevent="addToCart"
      >
        + Add to cart
      </p>

      <!-- PRICE -->
      <p class="mt-2 font-semibold text-black">${{ product.price }}</p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useWishlistStore } from "@/stores/wishlist";
import { useCartStore } from "@/stores/cart";
import { useCartModalStore } from "@/stores/cartModal";
import { useAuthStore } from "@/stores/auth";
import { useRouter } from "vue-router";

const props = defineProps({
  product: Object,
});

const wishlistStore = useWishlistStore();
const cartStore = useCartStore();
const cartModal = useCartModalStore();
const authStore = useAuthStore();

const router = useRouter();

/**
 * Add to cart with auth guard
 */
const addToCart = async () => {
  if (!authStore.isAuthenticated) {
    router.push("/account/login");
    return;
  }

  const result = await cartStore.addToCart(props.product.id, 1);

  if (result.success) {
    cartModal.openModal(props.product);
  } else {
    alert(result.message); // friendly message for demo
  }
};

// const addToCart = async () => {
//   // Not logged in → send to login
//   if (!authStore.isAuthenticated) {
//     router.push("/account/login");
//     return;
//   }

//   try {
//     await cartStore.addToCart(props.product.id, 1);
//     cartModal.openModal(props.product);
//   } catch (e) {
//     console.error("Add to cart failed:", e?.response?.data || e);
//   }
// };

// Wishlist state
const isInWishlist = computed(() =>
  wishlistStore.isInWishlist(props.product.id),
);

//Toggle wishlist
const toggleWishlist = () => {
  if (isInWishlist.value) {
    wishlistStore.removeFromWishlist(props.product.id);
  } else {
    wishlistStore.addToWishlist(props.product);
  }
};
</script>
