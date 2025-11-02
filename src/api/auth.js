// Real JWT authentication using Express.js backend
const API_BASE_URL = 'http://localhost:5000/api';

export const authAPI = {
  register: async (userData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Registration failed');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  login: async (credentials) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  getProfile: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/profile`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get profile');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  validateToken: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/auth/verify`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token }),
      });

      const data = await response.json();
      
      if (!response.ok) {
        return { valid: false };
      }

      return { valid: data.success, userId: data.decoded?.userId };
    } catch (error) {
      return { valid: false };
    }
  },

  // Form submission API
  submitForm: async (formData, token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/forms/submit`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Form submission failed');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  getSubmissions: async (token) => {
    try {
      const response = await fetch(`${API_BASE_URL}/forms/submissions`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Failed to get submissions');
      }

      return data;
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },
};