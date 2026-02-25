import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/stores/axios";
import { useCartStore } from "@/stores/cart";
import { useWishlistStore } from "@/stores/wishlist";

export const useAuthStore = defineStore("auth", () => {
  // STATE
  const token = ref(localStorage.getItem("authToken") || null);
  const user = ref(JSON.parse(localStorage.getItem("user")) || null);

  // GETTERS
  const isAuthenticated = computed(() => token.value !== null);
  const currentUser = computed(() => user.value);

  // HELPERS
  const setAuthCredentials = (data) => {
    token.value = data.token;
    user.value = data.user;

    localStorage.setItem("authToken", data.token);
    localStorage.setItem("user", JSON.stringify(data.user));
  };

  const clearAuth = () => {
    token.value = null;
    user.value = null;
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
  };

  // ACTIONS
  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      setAuthCredentials(response.data);

      const cartStore = useCartStore();
      await cartStore.fetchCartItems();
    } catch (error) {
      console.error("Login failed:", error.response?.data || error);
      throw error;
    }
    const wishlistStore = useWishlistStore();
    await wishlistStore.fetchWishlist();
  };

  const register = async (payload) => {
    await api.post("/register", {
      name: `${payload.first_name} ${payload.last_name}`,
      email: payload.email,
      password: payload.password,
      phone_number: payload.phone,
      address: "N/A",
    });

    await login(payload.email, payload.password);
  };
  
  const logout = () => {
  clearAuth();

  const cartStore = useCartStore();
  cartStore.clearCart();

  const wishlistStore = useWishlistStore();
  wishlistStore.clearWishlist();
};

  return {
    token,
    user,
    isAuthenticated,
    currentUser,
    login,
    register,
    logout,
  };
});

// import { defineStore } from "pinia";
// import { ref, computed } from "vue";
// import api from "@/stores/axios";
// import { useCartStore } from "@/stores/cart";

// export const useAuthStore = defineStore("auth", () => {
//   // STATE
//   const token = ref(localStorage.getItem("authToken"));
//   const user = ref(
//     localStorage.getItem("user")
//       ? JSON.parse(localStorage.getItem("user"))
//       : null
//   );

//   // GETTERS
//   const isAuthenticated = computed(() => !!token.value);
//   const currentUser = computed(() => user.value);

//   // MUTATIONS
//   const setAuth = (authToken, userData) => {
//     token.value = authToken;
//     user.value = userData;

//     localStorage.setItem("authToken", authToken);
//     localStorage.setItem("user", JSON.stringify(userData));
//   };

//   const clearAuth = () => {
//     token.value = null;
//     user.value = null;

//     localStorage.removeItem("authToken");
//     localStorage.removeItem("user");
//   };

//   // ACTIONS

//   const login = async (email, password) => {
//     const res = await api.post("/login", { email, password });

//     setAuth(res.data.data.token, res.data.data.user);

//     const cartStore = useCartStore();
//     await cartStore.fetchCart();
//   };

//   const register = async (payload) => {
//     const res = await api.post("/register", {
//       name: `${payload.first_name} ${payload.last_name}`,
//       email: payload.email,
//       password: payload.password,
//       phone_number: payload.phone,
//       address: "N/A",
//     });

//     setAuth(res.data.token, res.data.user);

//     const cartStore = useCartStore();
//     await cartStore.fetchCart();
//   };

//   const logout = () => {
//     clearAuth();

//     const cartStore = useCartStore();
//     cartStore.clearCart();
//   };

//   return {
//     token,
//     user,
//     isAuthenticated,
//     currentUser,
//     login,
//     register,
//     logout,
//   };
// });
