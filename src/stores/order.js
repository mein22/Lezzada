import { defineStore } from "pinia";
import { ref } from "vue";
import api from "@/stores/axios";

export const useOrderStore = defineStore("order", () => {
  const isProcessing = ref(false);
  const lastOrder = ref(null);

  const checkout = async (payload) => {
    try {
      isProcessing.value = true;

      const response = await api.post("/orders/checkout", payload);

      lastOrder.value = response.data.data || response.data;

      return lastOrder.value;
    } finally {
      isProcessing.value = false;
    }
  };

  return {
    isProcessing,
    lastOrder,
    checkout,
  };
});

