<template>
  <div class="w-full flex justify-center bg-white py-16">
    <div class="max-w-5xl w-full text-center px-4">
      <!-- Image -->
      <div class="flex justify-center mb-8">
        <img
          src="https://lezada-demo.myshopify.com/cdn/shop/files/cabinet_360x.jpg?v=1613765140"
          alt="Shelf Sale"
          class="w-full max-w-3xl object-contain"
        />
      </div>

     
      <!-- Hashtags -->
<p class="text-sm text-gray-400 mb-4 flex gap-3 justify-center">
  <RouterLink
    to="/tags/summer"
    class="hover:underline underline-offset-4 transition hover:text-black"
  >
    #summer
  </RouterLink>

  <RouterLink
    to="/tags/shelf"
    class="hover:underline underline-offset-4 transition hover:text-black"
  >
    #shelf
  </RouterLink>

  <RouterLink
    to="/tags/sale"
    class="hover:underline underline-offset-4 transition hover:text-black"
  >
    #sale
  </RouterLink>
</p>


      <!-- Main Text -->
      <h2 class="text-3xl md:text-4xl font-light text-gray-900 mb-2">
        Up To 40% Off Final Sale Items.
      </h2>
      <p class="text-lg text-gray-600 mb-8">Caught in the moment!</p>
      <RouterLink
        to="/shop"
        class="inline-block bg-[#333] text-white border border-[#333] px-10 py-3 text-sm tracking-widest transition-all duration-300 hover:bg-transparent hover:text-[#333]"
      >
        SHOP NOW
      </RouterLink>
    </div>
  </div>
</template>

<script setup></script>
