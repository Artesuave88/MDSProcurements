<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';
  import { isAuthenticated } from '../../stores/auth';
  import { userId } from '../../stores/user';
  
  import Navbar from '../../components/Navbar.svelte';
  
  // Mock data for orders (replace with actual API data fetching)
  /**
   * @type {string | any[]}
   */
  let orders = [];
  let loading = true;
  
  // Simulate order data
  const allOrders = [
    { id: "ORD123", supplier: "Supplier A", date: "2024-10-01", status: "Pending", total: "£1500.00", userId: "user123" },
    { id: "ORD124", supplier: "Supplier B", date: "2024-10-05", status: "Shipped", total: "£850.00", userId: "user123" },
    { id: "ORD125", supplier: "Supplier C", date: "2024-10-10", status: "Delivered", total: "£3200.00", userId: "user123" },
    { id: "ORD126", supplier: "Supplier D", date: "2024-10-15", status: "Pending", total: "£990.00", userId: "user124" },
  ];
  
  onMount(() => {
    if (!get(isAuthenticated)) {
      // Redirect to login if not authenticated
      goto('/');
    } else {
      // Simulate fetching user orders with a delay
      setTimeout(() => {
        const currentUserId = get(userId); // Get the logged-in user's ID from the store
        orders = allOrders;
        loading = false;
      }, 1000); // 1-second delay to simulate data fetching
    }
  });
</script>

<Navbar />

<!-- Orders Page Layout -->
<div class="min-h-screen bg-gray-100">
  <div class="bg-blue-500 text-white p-6">
    <h1 class="text-3xl font-bold">Your Orders</h1>
  </div>

  <div class="p-6">
    <!-- Loading Spinner (Show until orders are fetched) -->
    {#if loading}
      <div class="text-center py-6">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 rounded-full" role="status"></div>
      </div>
    {/if}

    <!-- Order List Section -->
    {#if !loading && orders.length > 0}
      <div class="bg-white p-6 rounded-lg shadow-md mb-6 w-full sm:w-3/4 mx-auto">
        <h2 class="text-xl font-semibold mb-4">Your Orders</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2 border-b text-left">Order ID</th>
                <th class="px-4 py-2 border-b text-left">Supplier</th>
                <th class="px-4 py-2 border-b text-left">Date</th>
                <th class="px-4 py-2 border-b text-left">Status</th>
                <th class="px-4 py-2 border-b text-left">Total</th>
                <th class="px-4 py-2 border-b text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each orders as order}
                <tr>
                  <td class="px-4 py-2 border-b">{order.id}</td>
                  <td class="px-4 py-2 border-b">{order.supplier}</td>
                  <td class="px-4 py-2 border-b">{order.date}</td>
                  <td class="px-4 py-2 border-b">{order.status}</td>
                  <td class="px-4 py-2 border-b">{order.total}</td>
                  <td class="px-4 py-2 border-b">
                    <a href={`/orders/£{order.id}`} class="text-blue-500 hover:underline">View Details</a>
                  </td>
                </tr>
              {/each}
            </tbody>
          </table>
        </div>
      </div>
    {/if}

    {#if !loading && orders.length === 0}
      <p class="text-gray-500">You have not placed any orders yet.</p>
    {/if}
  </div>
</div>
