import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/stores/axios";

export const useCartStore = defineStore("cart", () => {
  // STATE
  const cartItems = ref([]);
  const loading = ref(false);
  const error = ref(null);

  // GETTERS
  const getCartItems = computed(() => cartItems.value);

  const cartCount = computed(() =>
    cartItems.value.reduce((total, item) => total + item.quantity, 0),
  );

  const cartTotal = computed(() =>
    cartItems.value.reduce(
      (total, item) => total + Number(item.price) * item.quantity,
      0,
    ),
  );

  // ACTIONS

  /** Fetch Cart Items */
  const fetchCartItems = async () => {
    loading.value = true;
    error.value = null;

    try {
      const response = await api.get("/cart");
      cartItems.value = response.data.data;
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to fetch cart";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  /** Add To Cart */
  const addToCart = async (productId, quantity = 1) => {
  loading.value = true;
  error.value = null;

  try {
    await api.post("/cart/add", {
      product_id: productId,
      quantity,
    });

    await fetchCartItems();
    return { success: true };

  } catch (err) {
    error.value = err.response?.data?.message || "Could not add item";

    return {
      success: false,
      message: error.value,
    };
  } finally {
    loading.value = false;
  }
};

  // const addToCart = async (productId, quantity = 1) => {
  // console.log("Payload:", {
  //   product_id: productId,
  //   quantity,
  // });

  //   loading.value = true;
  //   error.value = null;

  //   try {
  //     await api.post("/cart/add", {
  //       product_id: productId,
  //       quantity,
  //     });

  //     await fetchCartItems();
  //   } catch (err) {
  //     error.value = err.response?.data?.message || "Failed to add to cart";
  //     console.error(err);
  //   } finally {
  //     loading.value = false;
  //   }
  // };

  /** Update Cart (increment / decrement) */
  const updateCart = async (cartId, type) => {
    loading.value = true;
    error.value = null;

    try {
      await api.put(`/cart/${cartId}`, {
        type, // "increment" or "decrement"
      });

      await fetchCartItems();
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to update cart";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  /** Update Cart Quantity */
  const updateCartQuantity = async (cartId, type) => {
    loading.value = true;
    error.value = null;

    try {
      await api.put(`/cart/${cartId}`, {
        type: type, // "increment" or "decrement"
      });

      await fetchCartItems(); // refresh cart after update
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to update quantity";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  /** Delete Cart Item */
  const deleteCartItem = async (cartId) => {
    loading.value = true;
    error.value = null;

    try {
      await api.delete(`/cart/${cartId}`);
      await fetchCartItems();
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to delete item";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  /** Clear Cart */
  const clearCart = async () => {
    loading.value = true;
    error.value = null;

    try {
      await api.delete("/cart/all");

      // only reset source state
      cartItems.value = [];
    } catch (err) {
      error.value = err.response?.data?.message || "Failed to clear cart";
      console.error(err);
    } finally {
      loading.value = false;
    }
  };

  return {
    // state
    cartItems,
    loading,
    error,

    // getters
    getCartItems,
    cartCount,
    cartTotal,

    // actions
    fetchCartItems,
    addToCart,
    updateCart,
    deleteCartItem,
    clearCart,
    updateCartQuantity,
  };
});
