import { defineStore } from "pinia";
import { ref } from "vue";

export const useCartModalStore = defineStore("cartModal", () => {
  const isOpen = ref(false);
  const lastAddedProduct = ref(null);

  const openModal = (product) => {
    lastAddedProduct.value = product;
    isOpen.value = true;
  };

  const closeModal = () => {
    isOpen.value = false;
  };

  return {
    isOpen,
    lastAddedProduct,
    openModal,
    closeModal,
  };
});
