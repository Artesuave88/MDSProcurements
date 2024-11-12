<script>

    import { goto } from '$app/navigation';
  import { isAuthenticated } from '../stores/auth';
  
    function handleLogout() {
      isAuthenticated.set(false); // Update the authentication state
      goto('/'); // Redirect back to the login page
    }
  </script>
  
  <nav class="bg-blue-500 text-white p-4">
    <div class="container mx-auto flex justify-between items-center">
      <!-- Left-aligned logo -->
      <h1 class="text-xl font-bold">Michaels Procurements</h1>
  
      <!-- Right-aligned links and logout button -->
      <div class="flex items-center space-x-6">
        <!-- Navigation links -->
        <a href="/" class="hover:text-gray-200">Home</a>
        <a href="/products" class="hover:text-gray-200">Products</a>
        <a href="/suppliers" class="hover:text-gray-200">Suppliers</a>
        <a href="/orders" class="hover:text-gray-200">Orders</a>
        <a href="/contact" class="hover:text-gray-200">Contact Us</a>
  
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
 