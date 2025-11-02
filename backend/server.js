const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (for demo purposes)
let users = [];
let formSubmissions = [];

// JWT Secret
const JWT_SECRET = process.env.JWT_SECRET || 'your_super_secret_jwt_key';

// Helper function to generate JWT
const generateToken = (userId, email) => {
  return jwt.sign(
    { userId, email },
    JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Middleware to verify JWT
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access token required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token'
      });
    }
    req.user = user;
    next();
  });
};

// Routes

// Health check
app.get('/', (req, res) => {
  res.json({
    success: true,
    message: 'ExamTemplate API Server is running!',
    version: '1.0.0',
    endpoints: {
      auth: {
        register: 'POST /api/auth/register',
        login: 'POST /api/auth/login',
        profile: 'GET /api/auth/profile'
      },
      forms: {
        submit: 'POST /api/forms/submit',
        getSubmissions: 'GET /api/forms/submissions'
      }
    }
  });
});

// AUTH ROUTES

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validation
    if (!email || !password || !role) {
      return res.status(400).json({
        success: false,
        message: 'Email, password, and role are required'
      });
    }

    // Check if user already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists with this email'
      });
    }

    // Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Create new user
    const newUser = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      role,
      createdAt: new Date().toISOString()
    };

    // Save user
    users.push(newUser);

    // Generate JWT token
    const token = generateToken(newUser.id, newUser.email);

    // Return response (don't send password)
    res.status(201).json({
      success: true,
      message: 'User registered successfully',
      user: {
        id: newUser.id,
        email: newUser.email,
        role: newUser.role,
        createdAt: newUser.createdAt
      },
      token
    });

  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: 'Email and password are required'
      });
    }

    // Find user
    const user = users.find(u => u.email === email);
    if (!user) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Invalid credentials'
      });
    }

    // Generate JWT token
    const token = generateToken(user.id, user.email);

    // Return response
    res.json({
      success: true,
      message: 'Login successful',
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      },
      token
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get Profile (Protected Route)
app.get('/api/auth/profile', authenticateToken, (req, res) => {
  try {
    // Find user by ID from token
    const user = users.find(u => u.id === req.user.userId);
    
    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    res.json({
      success: true,
      user: {
        id: user.id,
        email: user.email,
        role: user.role,
        createdAt: user.createdAt
      }
    });

  } catch (error) {
    console.error('Profile error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// FORM ROUTES

// Submit Form (Protected Route)
app.post('/api/forms/submit', authenticateToken, (req, res) => {
  try {
    const {
      projectTitle,
      category,
      description,
      priority,
      startDate,
      budget,
      tags,
      notes
    } = req.body;

    // Validation
    if (!projectTitle || !category || !description) {
      return res.status(400).json({
        success: false,
        message: 'Project title, category, and description are required'
      });
    }

    // Create form submission
    const formSubmission = {
      id: Date.now().toString(),
      userId: req.user.userId,
      userEmail: req.user.email,
      projectTitle,
      category,
      description,
      priority: priority || 'Medium',
      startDate,
      budget: budget ? parseFloat(budget) : null,
      tags,
      notes,
      submittedAt: new Date().toISOString()
    };

    // Save submission
    formSubmissions.push(formSubmission);

    res.status(201).json({
      success: true,
      message: 'Form submitted successfully',
      submission: formSubmission
    });

  } catch (error) {
    console.error('Form submission error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get Form Submissions (Protected Route)
app.get('/api/forms/submissions', authenticateToken, (req, res) => {
  try {
    // Get submissions for the authenticated user
    const userSubmissions = formSubmissions.filter(
      submission => submission.userId === req.user.userId
    );

    res.json({
      success: true,
      submissions: userSubmissions,
      count: userSubmissions.length
    });

  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Get All Submissions (Admin route - for testing)
app.get('/api/forms/all-submissions', authenticateToken, (req, res) => {
  try {
    res.json({
      success: true,
      submissions: formSubmissions,
      count: formSubmissions.length,
      users: users.map(u => ({ id: u.id, email: u.email, role: u.role }))
    });

  } catch (error) {
    console.error('Get all submissions error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
});

// Verify Token Route (for testing)
app.post('/api/auth/verify', (req, res) => {
  const { token } = req.body;

  if (!token) {
    return res.status(400).json({
      success: false,
      message: 'Token is required'
    });
  }

  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({
        success: false,
        message: 'Invalid or expired token',
        error: err.message
      });
    }

    res.json({
      success: true,
      message: 'Token is valid',
      decoded
    });
  });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: 'Something went wrong!'
  });
});

// 404 handler
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📡 API Documentation: http://localhost:${PORT}`);
  console.log(`🔐 JWT Secret: ${JWT_SECRET.substring(0, 10)}...`);
});

module.exports = app;