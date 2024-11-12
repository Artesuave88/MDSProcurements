<script>
    import { onMount } from 'svelte';
    import { isAuthenticated } from '../../stores/auth';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';
    
    onMount(() => {
      if (!get(isAuthenticated)) {
        // Redirect to login if not authenticated
        goto('/');
      }
    });
  
    import Navbar from '../../components/Navbar.svelte';
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
  
      <!-- Suppliers Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Suppliers</h2>
        <ul class="space-y-4">
          <li class="flex justify-between items-center">
            <span>Supplier A</span>
            <span class="text-sm text-green-600">Verified</span>
          </li>
          <li class="flex justify-between items-center">
            <span>Supplier B</span>
            <span class="text-sm text-gray-600">Pending Approval</span>
          </li>
          <li class="flex justify-between items-center">
            <span>Supplier C</span>
            <span class="text-sm text-yellow-500">Needs Attention</span>
          </li>
        </ul>
        <a href="/suppliers" class="text-blue-500 hover:underline mt-4 block">View Suppliers</a>
      </div>
  
      <!-- Product Overview Section -->
      <div class="bg-white p-6 rounded-lg shadow-md">
        <h2 class="text-xl font-semibold mb-4">Product Overview</h2>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span>Product A</span>
            <span class="text-sm text-green-600">In Stock: 120</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Product B</span>
            <span class="text-sm text-yellow-500">In Stock: 45</span>
          </div>
          <div class="flex justify-between items-center">
            <span>Product C</span>
            <span class="text-sm text-red-600">In Stock: 5</span>
          </div>
        </div>
        <a href="/products" class="text-blue-500 hover:underline mt-4 block">View All Products</a>
      </div>
    </div>
  </div>
  
  