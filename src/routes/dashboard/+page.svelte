<script>
  import { onMount } from 'svelte';
  import { isAuthenticated } from '../../stores/auth';
  import { goto } from '$app/navigation';
  import Navbar from '../../components/Navbar.svelte';
  import { get } from 'svelte/store';

  // Mock list of wholesale products for a hotel (hardcoded data)
  let products = [
    { name: "Organic Ground Coffee Beans", category: "Beverages", price: "£40 per 2.5 kg", stock: 200, imageUrl: "https://via.placeholder.com/200" },
    { name: "Premium Olive Oil", category: "Pantry Essentials", price: "£25 per 4 kg", stock: 100, imageUrl: "https://via.placeholder.com/200" },
    { name: "Frozen Atlantic Salmon Fillets", category: "Seafood", price: "£100 per 4.5 kg pack", stock: 75, imageUrl: "https://via.placeholder.com/200" },
    { name: "Mixed Salad Greens", category: "Produce", price: "£15 per 1 kg bag", stock: 28, imageUrl: "https://via.placeholder.com/200" },
    { name: "Bottled Sparkling Water", category: "Beverages", price: "£12 per case of 24 x 500 ml bottles", stock: 300, imageUrl: "https://via.placeholder.com/200" },
    { name: "Assorted Bread Rolls", category: "Bakery", price: "£18 per dozen", stock: 100, imageUrl: "https://via.placeholder.com/200" },
    { name: "Imported Cheese Selection", category: "Dairy", price: "£60 per 2.5 kg assortment", stock: 10, imageUrl: "https://via.placeholder.com/200" },
    { name: "Bulk Chicken Breast Fillets", category: "Poultry", price: "£80 per 4 kg pack", stock: 0, imageUrl: "https://via.placeholder.com/200" },
  ];

  onMount(() => {
    if (!get(isAuthenticated)) {
      // Redirect to login if not authenticated
      goto('/');
    }
  });
</script>

<Navbar />

<!-- Main Dashboard Layout -->
<div class="min-h-screen bg-gray-100">
  <!-- Dashboard Header Section -->
  <div class="bg-blue-500 text-white p-6">
    <h1 class="text-3xl font-bold">Welcome to Your Procurement Dashboard</h1>
  </div>

  <!-- Main Dashboard Content -->
  <div class="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
    <!-- Recent Orders Section -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Recent Orders</h2>
      <ul class="space-y-4">
        <li class="flex justify-between items-center">
          <span>Order #12345</span>
          <span class="text-sm text-gray-600">Pending</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Order #12344</span>
          <span class="text-sm text-green-600">Completed</span>
        </li>
        <li class="flex justify-between items-center">
          <span>Order #12343</span>
          <span class="text-sm text-yellow-500">In Progress</span>
        </li>
      </ul>
      <a href="/orders" class="text-blue-500 hover:underline mt-4 block">View All Orders</a>
    </div>

    <!-- Product Overview Section -->
    <div class="bg-white p-6 rounded-lg shadow-md">
      <h2 class="text-xl font-semibold mb-4">Products for you</h2>
      <div class="space-y-4">
        {#each products as product}
          <div class="flex justify-between items-center">
            <span>{product.name}</span>
            {#if product.stock > 0}
              <span class="text-sm {product.stock > 50 ? 'text-green-600' : (product.stock > 20 ? 'text-yellow-500' : 'text-red-600')}">
              In Stock: {product.stock}
            </span>
            {:else}
              <span class="text-sm text-red-600">Out of Stock</span>
            {/if}
          </div>
        {/each}
      </div>
      <a href="/products" class="text-blue-500 hover:underline mt-4 block">View All Products</a>
    </div>
  </div>
</div>
