import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";

// Layouts
import AuthLayout from "../layouts/AuthLayout.vue";
import GeneralLayout from "../layouts/GeneralLayout.vue";

// Views
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Reset from "../views/Reset.vue";
import Shop from "../views/Shop.vue";
import SingleProduct from "../views/SingleProduct.vue";
import Wishlist from "../views/Wishlist.vue";
import CartPage from "../views/CartPage.vue";
import CheckoutPage from "../views/CheckoutPage.vue";
import AccountPage from "../views/AccountPage.vue";
import OrderSuccess from "../views/OrderSuccess.vue";

const routes = [
  {
    path: "",
    name: "Home",
    component: Home,
  },

  // AUTH
  {
    path: "/account",
    component: AuthLayout,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login,
      },
      {
        path: "register",
        name: "Signup",
        component: Signup,
      },
      {
        path: "reset",
        name: "Reset",
        component: Reset,
      },
    ],
  },

  {
    path: "/",
    component: GeneralLayout,
    children: [
      { path: "collections", name: "Shop", component: Shop },
      { path: "product/:id", name: "Product", component: SingleProduct, meta: { requiresAuth: true }, },
      { path: "wishlist", name: "Wishlist", component: Wishlist },
      { path: "cart", name: "Cart", component: CartPage, meta: { requiresAuth: true }, },
      {
        path: "dashboard",
        name: "Account",
        component: AccountPage,
        meta: { requiresAuth: true },
      },
      {
        path: "order-success",
        name: "Orders",
        component: OrderSuccess,
        meta: { requiresAuth: true }
      },
    ],
  },
  {
    path: "/checkout",
    name: "Checkout",
    component: CheckoutPage,
    meta: { requiresAuth: true },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next({ name: "Login" });
  } else if (to.meta.requiresGuest && authStore.isAuthenticated) {
    next({ name: "Home" });
  } else {
    next();
  }
});

export default router;
