// Mock JWT authentication using localStorage
export const authAPI = {
  register: async (userData) => {
    try {
      // Get existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Check if user already exists
      const userExists = existingUsers.find(user => user.email === userData.email);
      if (userExists) {
        throw new Error('User already exists');
      }
      
      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        password: userData.password, // In real app, this would be hashed
        role: userData.role,
        createdAt: new Date().toISOString(),
      };
      
      // Save to localStorage
      existingUsers.push(newUser);
      localStorage.setItem('users', JSON.stringify(existingUsers));
      
      // Generate mock JWT token
      const token = btoa(JSON.stringify({ userId: newUser.id, email: newUser.email }));
      
      return {
        success: true,
        user: { id: newUser.id, email: newUser.email, role: newUser.role },
        token,
        message: 'Registration successful',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  login: async (credentials) => {
    try {
      // Get users from localStorage
      const users = JSON.parse(localStorage.getItem('users')) || [];
      
      // Find user
      const user = users.find(
        u => u.email === credentials.email && u.password === credentials.password
      );
      
      if (!user) {
        throw new Error('Invalid credentials');
      }
      
      // Generate mock JWT token
      const token = btoa(JSON.stringify({ userId: user.id, email: user.email }));
      
      return {
        success: true,
        user: { id: user.id, email: user.email, role: user.role },
        token,
        message: 'Login successful',
      };
    } catch (error) {
      return {
        success: false,
        message: error.message,
      };
    }
  },

  validateToken: (token) => {
    try {
      const decoded = JSON.parse(atob(token));
      return { valid: true, userId: decoded.userId };
    } catch {
      return { valid: false };
    }
  },
};