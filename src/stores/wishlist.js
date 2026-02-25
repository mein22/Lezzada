import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/stores/axios";
import { useAuthStore } from "@/stores/auth";

export const useWishlistStore = defineStore("wishlist", () => {
  // STATE
  const wishlist = ref([]);

  // GETTERS
  const wishlistCount = computed(() => wishlist.value.length);

  const isInWishlist = (productId) =>
    wishlist.value.some((item) => item.id === productId);

  // ACTIONS

  const fetchWishlist = async () => {
    const auth = useAuthStore();
    if (!auth.isAuthenticated) return;

    const response = await api.get("/wishlist");
    wishlist.value = response.data.data || response.data;
  };

  const addToWishlist = async (product) => {
    await api.post("/wishlist/add", { product_id: product.id });

    // prevent duplicates
    if (!isInWishlist(product.id)) {
      wishlist.value.push(product);
    }
  };

  const removeFromWishlist = async (productId) => {
    await api.delete(`/wishlist/${productId}`);
    wishlist.value = wishlist.value.filter(
      (item) => item.id !== productId
    );
  };

  const toggleWishlist = async (product) => {
    if (isInWishlist(product.id)) {
      await removeFromWishlist(product.id);
    } else {
      await addToWishlist(product);
    }
  };

  const clearWishlist = () => {
    wishlist.value = [];
  };

  return {
    wishlist,
    wishlistCount,
    isInWishlist,
    fetchWishlist,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    clearWishlist,
  };
});






// import { defineStore } from "pinia";
// import { ref, computed } from "vue";


// export const useWishlistStore = defineStore("wishlist", () => {
//   // STATE
//   const wishlist = ref(
//     JSON.parse(localStorage.getItem("wishlist")) || []
//   );

//   // GETTERS
//   const wishlistCount = computed(() => wishlist.value.length);

//   // ACTIONS
//   const addToWishlist = (product) => {
//     const exists = wishlist.value.find((p) => p.id === product.id);
//     if (!exists) {
//       wishlist.value.push(product);
//       persist();
//     }
//   };

//   const removeFromWishlist = (id) => {
//     wishlist.value = wishlist.value.filter((item) => item.id !== id);
//     persist();
//   };

//   const clearWishlist = () => {
//     wishlist.value = [];
//     persist();
//   };

//   const persist = () => {
//     localStorage.setItem("wishlist", JSON.stringify(wishlist.value));
//   };

//   // EXPOSE
//   return {
//     wishlist,
//     wishlistCount,
//     addToWishlist,
//     removeFromWishlist,
//     clearWishlist,
//   };
// });
