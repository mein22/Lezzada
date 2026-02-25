import { defineStore } from "pinia";
import { ref, computed } from "vue";
import api from "@/stores/axios";

export const useProductsStore = defineStore("products", () => {
  // STATE
  const products = ref([]);
  const activeProduct = ref(null);
  const loading = ref(false);
  const error = ref(null);
  const activeFilter = ref("new");

  // PAGINATION STATE
  const currentPage = ref(1);
  const perPage = ref(10);
  const total = ref(0);
  const lastPage = ref(1);

  // GETTERS
  const allProducts = computed(() => products.value);

  const pages = computed(() =>
    Array.from({ length: lastPage.value }, (_, i) => i + 1),
  );

  const getProductById = (id) =>
    products.value.find((p) => p.id === Number(id));

  const filteredProducts = computed(() => {
    if (activeFilter.value === "sale") {
      return products.value.filter((p) => p.isSale);
    }

    if (activeFilter.value === "popular") {
      // example logic — replace with backend field if you have one
      return [...products.value].slice(0, 6);
    }

    // default "new"
    return products.value;
  });

  // HELPERS
  const normalizeProduct = (product) => ({
    id: product.id,
    title: product.name,
    description: product.description,
    price: Number(product.price),
    stock: product.stock,
    category: product.category,

    image: product.image,
    hoverImage: product.hover_image,

    // UI-only fields
    isSale: false,
    discount: null,
    showHoverPanel: false,
    similarImages: [],
  });

  const markRandomSaleProducts = (items, count = 3) => {
    const shuffled = [...items].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0, count);

    selected.forEach((product) => {
      product.isSale = true;
      product.discount = "-15%";
      product.showHoverPanel = true;

      product.similarImages = [
        product.image,
        product.hoverImage,
        product.image,
        product.hoverImage,
      ];
    });
  };

  // ACTIONS

  /**
   * Fetch all products
   */
  const fetchProducts = async (page = currentPage.value) => {
    loading.value = true;
    error.value = null;

    try {
      const res = await api.get("/products", {
        params: {
          page,
          per_page: perPage.value,
        },
      });

      const normalized = res.data.data.map(normalizeProduct);

      markRandomSaleProducts(normalized, 3);

      products.value = normalized;

      // pagination data from backend
      currentPage.value = res.data.current_page;
      total.value = res.data.total;
      lastPage.value = res.data.last_page;
    } catch (err) {
      console.error(err);
      error.value = "Failed to load products";
    } finally {
      loading.value = false;
    }
  };

  /**
   * Fetch single product
   * - Uses store if already available
   * - Falls back to API if not
   */
  const fetchProductById = async (id) => {
    loading.value = true;
    error.value = null;

    try {
      // Check if product already exists
      const existing = getProductById(id);

      if (existing) {
        activeProduct.value = existing;
        return;
      }

      // Fetch from backend
      const res = await api.get(`/products/${id}`);

      const normalized = normalizeProduct(res.data.data);

      activeProduct.value = normalized;

      // Optional: cache it
      products.value.push(normalized);
    } catch (err) {
      console.error(err);
      error.value = "Failed to load product";
    } finally {
      loading.value = false;
    }
  };

  const clearActiveProduct = () => {
    activeProduct.value = null;
  };

  const setFilter = (filter) => {
    activeFilter.value = filter;
  };

  const setPerPage = async (value) => {
    perPage.value = value;
    currentPage.value = 1; // reset to first page
    await fetchProducts(1);
  };

  const goToPage = async (page) => {
    if (page < 1 || page > lastPage.value) return;
    await fetchProducts(page);
  };

  // EXPOSE
  return {
    products,
    activeProduct,
    loading,
    error,

    // pagination
    currentPage,
    perPage,
    total,
    lastPage,

    // filtering
    activeFilter,
    filteredProducts,
    setFilter,

    allProducts,
    getProductById,

    fetchProducts,
    fetchProductById,
    clearActiveProduct,

    setPerPage,
    goToPage,
    pages,
  };
});
