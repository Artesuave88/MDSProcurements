<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';
    import { isAuthenticated } from '../../stores/auth';
  
    // Redirect to login if not authenticated
    onMount(() => {
      if (!get(isAuthenticated)) {
        goto('/');
      }
    });
  
// Mock list of wholesale products for a hotel (replace with actual data from an API or store)
let products = [
  { name: "Organic Ground Coffee Beans", category: "Beverages", price: "£40 per 2.5 kg", stock: 200, imageUrl: "https://via.placeholder.com/200" },
  { name: "Premium Olive Oil", category: "Pantry Essentials", price: "£25 per 4 kg", stock: 100, imageUrl: "https://via.placeholder.com/200" },
  { name: "Frozen Atlantic Salmon Fillets", category: "Seafood", price: "£100 per 4.5 kg pack", stock: 75, imageUrl: "https://via.placeholder.com/200" },
  { name: "Mixed Salad Greens", category: "Produce", price: "£15 per 1 kg bag", stock: 150, imageUrl: "https://via.placeholder.com/200" },
  { name: "Bottled Sparkling Water", category: "Beverages", price: "£12 per case of 24 x 500 ml bottles", stock: 300, imageUrl: "https://via.placeholder.com/200" },
  { name: "Assorted Bread Rolls", category: "Bakery", price: "£18 per dozen", stock: 100, imageUrl: "https://via.placeholder.com/200" },
  { name: "Imported Cheese Selection", category: "Dairy", price: "£60 per 2.5 kg assortment", stock: 60, imageUrl: "https://via.placeholder.com/200" },
  { name: "Bulk Chicken Breast Fillets", category: "Poultry", price: "£80 per 4 kg pack", stock: 120, imageUrl: "https://via.placeholder.com/200" },
];

  
    // Search term bound to the input field
    let searchTerm = '';
  
    // Filtered products based on the search term
    $: filteredProducts = products.filter(product =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Basket to store added products
    /**
   * @type {any[]}
   */
    let basket = [];

    // Function to add product to basket
    /**
   * @param {{ name: string; category: string; price: string; stock: number; imageUrl: string; }} product
   */
    function addToBasket(product) {
      basket = [...basket, product];
    }
    
    import Navbar from '../../components/Navbar.svelte';
  </script>
  
  <Navbar />
  
  <div class="min-h-screen bg-gray-100">
    <div class="bg-blue-500 text-white p-6">
      <h1 class="text-3xl font-bold">Product Management</h1>
    </div>
  
    <div class="p-6">
      <!-- Search Input Field -->
      <input
        type="text"
        bind:value={searchTerm}
        placeholder="Search products..."
        class="w-full p-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
      />
  
      <!-- Product Grid Section -->
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {#each filteredProducts as product}
          <div class="bg-white p-4 rounded-lg shadow-md">
            <img src={product.imageUrl} alt={product.name} class="w-full h-48 object-cover rounded-md mb-4" />
            <h3 class="text-xl font-semibold">{product.name}</h3>
            <p class="text-sm text-gray-500">{product.category}</p>
            <p class="text-lg font-semibold text-blue-500 mt-2">{product.price}</p>
            <p class="text-sm text-gray-400">Stock: {product.stock}</p>
            <button
              class="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
              on:click={() => addToBasket(product)}
            >
              Add to basket
            </button>
          </div>
        {/each}
      </div>
    </div>
  </div>