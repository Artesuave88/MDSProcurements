// src/stores/user.js
import { writable } from "svelte/store";

// Store to hold the logged-in user's ID and other data
export const userId = writable(null); // Store the user ID
export const userName = writable(""); // Optionally, store user's name or other details
