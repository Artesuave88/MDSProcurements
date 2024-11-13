<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';
  import { isAuthenticated } from '../../stores/auth';
  import { userId } from '../../stores/user';

  import Navbar from '../../components/Navbar.svelte';

  /**
   * @type {string | any[]}
   */
  let orders = [];
  let loading = true;

  const allOrders = [
    { id: "ORD123", supplier: "Supplier A", date: "2024-10-01", status: "Pending", total: "£1500.00", userId: "user123" },
    { id: "ORD124", supplier: "Supplier B", date: "2024-10-05", status: "Shipped", total: "£850.00", userId: "user123" },
    { id: "ORD125", supplier: "Supplier C", date: "2024-10-10", status: "Delivered", total: "£3200.00", userId: "user123" },
    { id: "ORD126", supplier: "Supplier D", date: "2024-10-15", status: "Pending", total: "£990.00", userId: "user124" },
  ];

  onMount(() => {
    if (!get(isAuthenticated)) {
      goto('/');
    } else {
      setTimeout(() => {
        const currentUserId = get(userId);
        orders = allOrders
        loading = false;
      }, 1000);
    }
  });
</script>

<Navbar />

<div class="min-h-screen bg-gray-100">
  <div class="bg-blue-500 text-white p-6">
    <h1 class="text-3xl font-bold">Your Orders</h1>
  </div>

  <div class="p-6">
    {#if loading}
      <div class="text-center py-6">
        <div class="spinner-border animate-spin inline-block w-12 h-12 border-4 border-blue-500 rounded-full" role="status"></div>
      </div>
    {/if}

    <!-- Desktop Table View -->
    {#if !loading && orders.length > 0}
      <div class="hidden sm:block bg-white p-6 rounded-lg shadow-md mb-6 w-full sm:w-3/4 mx-auto">
        <h2 class="text-xl font-semibold mb-4">Your Orders</h2>
        <div class="overflow-x-auto">
          <table class="min-w-full table-auto">
            <thead>
              <tr>
                <th class="px-4 py-2 border-b text-left">Order ID</th>

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

    <!-- Mobile Card View -->
    {#if !loading && orders.length > 0}
      <div class="block sm:hidden space-y-4">
        {#each orders as order}
          <div class="bg-white p-4 rounded-lg shadow-md">

            <p class="text-gray-600"><strong>Order ID:</strong> {order.id}</p>
            <p class="text-gray-600"><strong>Date:</strong> {order.date}</p>
            <p class="text-gray-600"><strong>Status:</strong> {order.status}</p>
            <p class="text-gray-600"><strong>Total:</strong> {order.total}</p>
            <a href={`/orders/${order.id}`} class="text-blue-500 hover:underline mt-2 inline-block">View Details</a>
          </div>
        {/each}
      </div>
    {/if}

    {#if !loading && orders.length === 0}
      <p class="text-gray-500 text-center">You have not placed any orders yet.</p>
    {/if}
  </div>
</div>
