<script>
  import { goto } from '$app/navigation';
  import { isAuthenticated } from '../stores/auth';
  
  let basketCount = 0; // Example count, you can replace this with actual data
  let menuOpen = false; // State to toggle the menu visibility

  function handleLogout() {
    isAuthenticated.set(false); // Update the authentication state
    goto('/'); // Redirect back to the login page
  }
</script>

<nav class="bg-blue-500 text-white p-4">
  <div class="container mx-auto flex justify-between items-center flex-wrap">
    <!-- Left-aligned logo -->
    <h1 class="text-xl font-bold">MDS Procurements</h1>

    <!-- Mobile Hamburger Icon -->
    <button
      class="block lg:hidden text-white"
      on:click={() => (menuOpen = !menuOpen)}
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

    <!-- Right-aligned links and logout button (will be hidden on small screens) -->
    <div class={`lg:flex items-center space-x-6 sm:space-x-4 flex-wrap mt-2 sm:mt-0 ${menuOpen ? 'block' : 'hidden'}`}>
      <!-- Navigation links -->
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
</nav>
