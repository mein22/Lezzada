import { defineStore } from "pinia";

export const useRecentlyViewedStore = defineStore("recentlyViewed", {
  state: () => ({
    items: JSON.parse(localStorage.getItem("recentlyViewed")) || [],
  }),

  actions: {
    addProduct(productId) {
      // Remove duplicates
      this.items = this.items.filter(id => id !== productId);

      // Add to beginning
      this.items.unshift(productId);

      // Limit to 6 items
      this.items = this.items.slice(0, 6);

      // Persist
      localStorage.setItem("recentlyViewed", JSON.stringify(this.items));
    },
  },
});
