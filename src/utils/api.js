/**
 * API Utility Functions
 * Centralized API calls with JWT authentication support
 */

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://dog-walking-app.onrender.com';

/**
 * Base API call function
 * @param {string} url - API endpoint (relative or absolute)
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Parsed JSON response
 */
export const apiCall = async (url, options = {}) => {
  const fullUrl = url.startsWith('http') ? url : `${API_BASE_URL}${url}`;

  const response = await fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || `HTTP ${response.status}: ${response.statusText}`);
  }

  return response.json();
};

/**
 * Authenticated API call (includes JWT token)
 * @param {string} url - API endpoint
 * @param {object} options - Fetch options
 * @returns {Promise<any>} - Parsed JSON response
 */
export const authApiCall = async (url, options = {}) => {
  const token = localStorage.getItem('token');

  if (!token) {
    throw new Error('No authentication token found. Please log in.');
  }

  return apiCall(url, {
    ...options,
    headers: {
      ...options.headers,
      'Authorization': `Bearer ${token}`,
    },
  });
};

/**
 * Login helper
 * @param {string} username - Username
 * @param {string} password - Password
 * @returns {Promise<{token: string, user: object}>} - User data with token
 */
export const login = async (username, password) => {
  const data = await apiCall('/login', {
    method: 'POST',
    body: JSON.stringify({ username, password }),
  });

  if (data.token) {
    localStorage.setItem('token', data.token);
  }

  return data;
};

/**
 * Logout helper
 */
export const logout = () => {
  localStorage.removeItem('token');
};

/**
 * Check if user is authenticated
 * @returns {boolean}
 */
export const isAuthenticated = () => {
  return !!localStorage.getItem('token');
};
