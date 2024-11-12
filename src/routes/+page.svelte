<script>
    import { onMount } from 'svelte';
    import { isAuthenticated } from '../stores/auth';
    import { goto } from '$app/navigation';
    import { get } from 'svelte/store';

    let email = '';
    let password = '';

    // Check authentication on page load
    onMount(() => {
      if (!get(isAuthenticated)) {
        // Redirect unauthenticated users to the login page
        goto('/login');
      } else {
        // Redirect authenticated users to the dashboard
        goto('/dashboard');
      }
    });

    /**
     * @param {{ preventDefault: () => void; }} event
     */
    function handleLogin(event) {
      event.preventDefault();
      // Add your authentication logic here
      if (email && password) {
        isAuthenticated.set(true); // Set to true upon successful login
        goto('/dashboard'); // Redirect to a protected page
      } else {
        alert('Please fill in all fields');
      }
    }
</script>
