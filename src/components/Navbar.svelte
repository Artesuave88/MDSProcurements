<script>
  import { goto } from '$app/navigation';
  import { isAuthenticated } from '../stores/auth';

  let basketCount = 0;
  let menuOpen = false;

  function handleLogout() {
    isAuthenticated.set(false);
    goto('/');
  }
</script>

<nav class="bg-blue-500 text-white p-4">
  <div class="container mx-auto flex justify-between items-center">
    <!-- Left-aligned logo -->
    <h1 class="text-xl font-bold">MDS Procurements</h1>

    <!-- Mobile Hamburger Icon -->
    <button
      class="block lg:hidden text-white"
      on:click={() => (menuOpen = !menuOpen)}
      aria-label="Toggle menu"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        class="w-6 h-6"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Right-aligned links and logout button for large screens -->
    <div class="hidden lg:flex items-center space-x-6">
      <a href="/" class="hover:text-gray-200">Home</a>
      <a href="/products" class="hover:text-gray-200">Products</a>
      <a href="/suppliers" class="hover:text-gray-200">Suppliers</a>
      <a href="/orders" class="hover:text-gray-200">Orders</a>
      <a href="/contact" class="hover:text-gray-200">Contact Us</a>
      <div class="basket flex items-center space-x-2">
        <span>Basket</span>
        <span class="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{basketCount}</span>
      </div>

      {#if $isAuthenticated}
        <button
          on:click={handleLogout}
          class="px-2 py-1 bg-gray-200 rounded hover:bg-gray-400 text-gray-800 hover:text-white focus:outline-none"
        >
          Logout
        </button>
      {/if}
    </div>
  </div>

  <!-- Full-screen overlay for mobile navigation -->
  {#if menuOpen}
    <div class="fixed inset-0 bg-blue-500 bg-opacity-95 flex flex-col items-center justify-center z-50 transition duration-300 ease-in-out">
      <!-- Close Button -->
      <button
        class="absolute top-4 right-4 text-white text-3xl"
        on:click={() => (menuOpen = false)}
        aria-label="Close menu"
      >
        &times;
      </button>

      <a href="/" class="text-white text-2xl py-2 hover:text-gray-200" on:click={() => (menuOpen = false)}>Home</a>
      <a href="/products" class="text-white text-2xl py-2 hover:text-gray-200" on:click={() => (menuOpen = false)}>Products</a>
      <a href="/suppliers" class="text-white text-2xl py-2 hover:text-gray-200" on:click={() => (menuOpen = false)}>Suppliers</a>
      <a href="/orders" class="text-white text-2xl py-2 hover:text-gray-200" on:click={() => (menuOpen = false)}>Orders</a>
      <a href="/contact" class="text-white text-2xl py-2 hover:text-gray-200" on:click={() => (menuOpen = false)}>Contact Us</a>
      <div class="basket flex items-center space-x-2 text-2xl py-2">
        <span class="text-white">Basket</span>
        <span class="bg-red-500 text-white rounded-full px-2 py-1 text-xs">{basketCount}</span>
      </div>
      {#if $isAuthenticated}
        <button
          on:click={() => { handleLogout(); menuOpen = false; }}
          class="mt-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-400 text-gray-800 hover:text-white focus:outline-none"
        >
          Logout
        </button>
      {/if}
    </div>
  {/if}
</nav>
