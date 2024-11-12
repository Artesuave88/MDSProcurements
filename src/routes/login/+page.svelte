<script>
    import { onMount } from 'svelte';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';
    import { isAuthenticated } from '../../stores/auth';
    
    let email = '';
    let password = '';
    let errorMessage = '';
    let isSubmitting = false;
    
    onMount(() => {
      if (get(isAuthenticated)) {
        goto('/dashboard');
      }
    });
    
    /**
   * @param {{ preventDefault: () => void; }} event
   */
    function handleLogin(event) {
      event.preventDefault();
      isSubmitting = true;
    
      // Mock login validation
      if (email === 'michaeldstevenson1@outlook.com' && password === 'password123') {
        isAuthenticated.set(true);
        goto('/dashboard');
      } else {
        errorMessage = 'Invalid credentials';
      }
      isSubmitting = false;
    }
  </script>
  
  <div class="w-full mt-12 flex justify-center">
    <!-- Logo section -->
    <h1 class="text-3xl font-semibold text-center">Sign In to your MDS Procurements account</h1>

  </div>
  
  <!-- Main container -->
  <div class="flex flex-col lg:flex-row items-center max-w-5xl w-full mx-auto px-6 lg:px-12 py-12">
    <!-- Left side with form -->
     
    <div class="w-full lg:w-1/2 flex justify-center lg:justify-end mb-12 lg:mb-0">
      <form class="flex flex-col w-3/4 max-w-md space-y-6" on:submit|preventDefault={handleLogin}>
        <div class="flex flex-col gap-4">
          <div>
            <label for="email" class="text-gray-700 font-medium">Email</label>
            <input
              class="bg-gray-100 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              name="email"
              placeholder="you@example.com"
              type="email"
              required
              bind:value={email}
            />
          </div>
          <div>
            <label for="password" class="text-gray-700 font-medium">Password</label>
            <input
              class="bg-gray-100 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              name="password"
              placeholder="Your password"
              required
              bind:value={password}
            />
          </div>
          {#if errorMessage}
            <p class="text-red-500 text-sm">{errorMessage}</p>
          {/if}
          <a class="text-xs text-gray-600 underline hover:text-gray-800" href="/forgot-password">
            Forgot Password?
          </a>
        </div>
        <button
          class="bg-blue-500 text-white p-4 rounded-lg w-full mt-4 disabled:opacity-50 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Signing In...' : 'Sign In'}
        </button>
      </form>
    </div>
  
    <!-- Right side with informational text -->
    <div class="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-4 lg:px-12">
      <h1 class="text-3xl font-semibold mb-4">
        A new way for your procurement needs
      </h1>
      <p class="text-lg mb-4">
        If you don’t have an account, please <span class="underline decoration-orange-500">request one</span> at our procurement department.
      </p>
    </div>
  </div>
  