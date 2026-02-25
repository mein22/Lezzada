# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about IDE Support for Vue in the [Vue Docs Scaling up Guide](https://vuejs.org/guide/scaling-up/tooling.html#ide-support).


## 🛍️ E-Commerce Frontend (Vue 3 + Pinia)

A modern, responsive e-commerce frontend built with Vue 3, Pinia, and Axios, designed to integrate with a REST API.

This project demonstrates a complete shopping flow including authentication, product browsing, wishlist management, cart operations, and UI state management.

⚠️ This project is actively being developed and will continue to evolve with new features and improvements.



## ✨ Features
🧭 Core Functionality

Product listing with dynamic data

Product detail pages

Add to cart with backend sync

Cart quantity updates and removal

Clear cart endpoint integration

Wishlist management

Authentication (login flow)

Auth guard for protected actions



## 🧠 State Management

Global state handled with Pinia

Separate stores for:

Auth

Cart

Wishlist

UI (cart modal)

## 🎨 UI/UX

Responsive layout

Hover interactions for product cards

Cart modal feedback

Friendly error handling (e.g., insufficient stock)

Smooth transitions and micro-interactions

## 🏗️ Tech Stack
Layer	Technology
Framework	Vue 3 (Composition API)
State	Pinia
HTTP Client	Axios
Routing	Vue Router
Styling	Tailwind CSS
Build Tool	Vite
📂 Project Structure
src/
│
├── components/        # Reusable UI components
│   ├── ProductCard.vue
│   ├── Header.vue
│   └── ...
│
├── pages/             # Route pages
│   ├── Home.vue
│   ├── ProductDetail.vue
│   ├── Login.vue
│   └── ...
│
├── stores/            # Pinia stores
│   ├── auth.js
│   ├── cart.js
│   ├── wishlist.js
│   └── cartModal.js
│
├── router/            # Vue Router config
│
├── assets/            # Images & icons
│
└── main.js



## 🔐 Authentication Flow

User attempts a protected action (e.g., Add to Cart)

If not authenticated → redirected to login

After login → user returns to app and can proceed normally

This ensures:

Secure API interaction

Predictable UX

Clean separation of concerns




## 🛒 Cart Logic Overview

The cart is fully synchronized with the backend API.

Key Behaviors

Add item → POST request → refresh cart

Update quantity → PUT request → refresh cart

Remove item → DELETE request → refresh cart

Clear cart → dedicated endpoint

Error Handling

If backend validation fails (e.g., insufficient stock):

Error is captured in store

Friendly message shown to user

UI remains stable



## ⚙️ Setup & Installation
1️⃣ Clone repository
git clone https://github.com/your-username/your-repo.git
cd your-repo

2️⃣ Install dependencies
npm install

3️⃣ Run development server
npm run dev



## 🔌 Environment Configuration

Create a .env file:

VITE_API_BASE_URL=https://your-api-url.com/api


Make sure your Axios instance reads from this variable.


## 🧪 Future Improvements (Roadmap)

This project is intentionally structured for scalability.
Planned enhancements include:

✅ Toast notification system

✅ Product search & filtering

✅ Pagination / infinite scroll

✅ Checkout flow

✅ Order history

✅ Admin dashboard

✅ Performance optimizations

✅ Unit & integration tests

✅ Accessibility improvements




## 🧱 Architecture Principles

This project follows:

Separation of concerns

Store-driven state management

API-first design

Reusable component architecture

Predictable data flow

These decisions make the codebase easy to extend and maintain.



## 🤝 Contributing (Future)

Contributions, ideas, and refactors are welcome once the core feature set stabilizes.

Suggested workflow:

Fork repository

Create feature branch

Commit changes

Open pull request



## 📌 Project Status

# 🚧 Active Development

This project is not feature-complete and will continue to evolve as new functionality is added and the backend expands.


## 📄 License

This project is currently for educational and portfolio purposes.
License may be added later as the project matures.


## 👨‍💻 Author

Yahaya Joseph
Built with focus on real-world architecture, scalability, and clean UX.