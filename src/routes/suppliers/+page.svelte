<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    import { isAuthenticated } from '../../stores/auth';

    onMount(() => {
      if (!get(isAuthenticated)) {
        // Redirect to login if not authenticated
        goto('/');
      }
    });
  
    // Mock list of suppliers (replace with actual data from an API or store)
    let suppliers = [
      { name: "Supplier A", contact: "John Doe", phone: "(123) 456-7890", address: "123 Main St, City, Country", logoUrl: "https://via.placeholder.com/100" },
      { name: "Supplier B", contact: "Jane Smith", phone: "(987) 654-3210", address: "456 Elm St, City, Country", logoUrl: "https://via.placeholder.com/100" },
      { name: "Supplier C", contact: "Mark Johnson", phone: "(555) 123-4567", address: "789 Oak St, City, Country", logoUrl: "https://via.placeholder.com/100" },
      { name: "Supplier D", contact: "Emily Davis", phone: "(333) 987-6543", address: "101 Pine St, City, Country", logoUrl: "https://via.placeholder.com/100" },
    ];
    import Navbar from '../../components/Navbar.svelte';
  </script>
  
  <Navbar />    
  <!-- Supplier Page Layout -->
  <div class="min-h-screen bg-gray-100">
    <div class="bg-blue-500 text-white p-6">
      <h1 class="text-3xl font-bold">Supplier Management</h1>
      <p class="mt-2">Manage your suppliers and procurement contacts.</p>
    </div>
  
    <div class="p-6">
      <!-- Supplier Grid Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each suppliers as supplier}
          <div class="bg-white p-4 rounded-lg shadow-md">
            <img src={supplier.logoUrl} alt={supplier.name} class="w-16 h-16 object-cover rounded-full mb-4 mx-auto" />
            <h3 class="text-xl font-semibold text-center">{supplier.name}</h3>
            <p class="text-sm text-gray-500 text-center">{supplier.contact}</p>
            <p class="text-sm text-gray-400 text-center">{supplier.phone}</p>
            <p class="text-sm text-gray-400 text-center">{supplier.address}</p>
            <div class="mt-4 text-center">
              <a href="#" class="text-blue-500 hover:underline">View Details</a>
              <br />

            </div>
          </div>
        {/each}
      </div>
  
   
    </div>
  </div>
  