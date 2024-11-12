<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { get } from 'svelte/store';
  import { isAuthenticated } from '../../stores/auth';

  let name = '';
  let email = '';
  let message = '';
  let isSubmitting = false;
  let successMessage = '';
  let errorMessage = '';

  // Redirect to login if not authenticated
  onMount(() => {
    if (!get(isAuthenticated)) {
      goto('/');  // Redirect to login page
    }
  });

  // Handle form submission
  /**
   * @param {{ preventDefault: () => void; }} event
   */
  function handleSubmit(event) {
    event.preventDefault();
    isSubmitting = true;
    successMessage = '';
    errorMessage = '';

    // Simulate form submission
    setTimeout(() => {
      if (name && email && message) {
        successMessage = 'Your message has been sent successfully!';
        name = '';
        email = '';
        message = '';
      } else {
        errorMessage = 'Please fill in all fields.';
      }
      isSubmitting = false;
    }, 1500);
  }

  import Navbar from '../../components/Navbar.svelte';
</script>

<Navbar />

<!-- Contact Us Page Layout -->
<div class="min-h-screen bg-gray-100">
  <div class="bg-blue-500 text-white p-6">
    <h1 class="text-3xl font-bold">Contact Us</h1>
    <p class="mt-2">We'd love to hear from you. Please fill out the form below.</p>
  </div>

  <div class="p-6 w-full mx-auto">
    <div class="bg-white p-6 rounded-lg shadow-md w-full sm:w-3/4 md:w-1/2 lg:w-1/3 mx-auto">
      <h2 class="text-xl font-semibold mb-4">Send Us a Message</h2>
      
      <!-- Success/Error Message -->
      {#if successMessage}
        <p class="text-green-500 mb-4">{successMessage}</p>
      {/if}
      {#if errorMessage}
        <p class="text-red-500 mb-4">{errorMessage}</p>
      {/if}

      <!-- Contact Form -->
      <form on:submit|preventDefault={handleSubmit} class="space-y-6">
        <div class="flex flex-col">
          <label for="name" class="text-gray-700 font-medium">Your Name</label>
          <input
            id="name"
            class="bg-gray-100 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            placeholder="Your Name"
            bind:value={name}
            required
          />
        </div>

        <div class="flex flex-col">
          <label for="email" class="text-gray-700 font-medium">Your Email</label>
          <input
            id="email"
            class="bg-gray-100 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="email"
            placeholder="you@example.com"
            bind:value={email}
            required
          />
        </div>

        <div class="flex flex-col">
          <label for="message" class="text-gray-700 font-medium">Your Message</label>
          <!-- svelte-ignore element_invalid_self_closing_tag -->
          <textarea
            id="message"
            class="bg-gray-100 p-4 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
            placeholder="Type your message here..."
            bind:value={message}
            required
          />
        </div>

        <button
          class="bg-blue-500 text-white p-4 rounded-lg w-full sm:w-1/3 mt-4 disabled:opacity-50 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 mx-auto"
          type="submit"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  </div>
</div>
