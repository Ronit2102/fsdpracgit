# Setup and Testing Guide

## Installation

1. Navigate to the project directory:
   ```bash
   cd exam-template
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and go to `http://localhost:5173`

## Testing the Features

### 1. Theme Toggle
- Click the moon/sun icon in the navbar to toggle between dark and light modes
- The preference should persist when you refresh the page

### 2. User Registration
1. Click "Register" in the navbar
2. Fill out the form with:
   - Email: test@example.com
   - Password: password123
   - Confirm Password: password123
   - User Role: Choose either "User Role 1" or "User Role 2"
3. Click "Create account"
4. You should see a success message

### 3. User Login
1. Click "Login" in the navbar
2. Enter the credentials you just registered with
3. Click "Sign in"
4. You should see:
   - Console log: "Logged in successfully!"
   - Alert message with email and role
   - Navbar updates to show your email and role
   - "Form" link appears in navbar

### 4. Generic Form
1. After logging in, click "Form" in the navbar
2. Fill out the form with sample data
3. Click "Submit Form"
4. You should see:
   - Success page with all submitted details
   - Console log with submission data
   - Data stored in localStorage (check browser dev tools > Application > Local Storage)

### 5. Data Persistence
- All user data and form submissions are stored in localStorage
- Check browser dev tools > Application > Local Storage to see:
  - `users` - Array of registered users
  - `formSubmissions` - Array of form submissions
  - `isAuthenticated` - Login status
  - `user` - Current user info
  - `token` - JWT token
  - `darkMode` - Theme preference

## Customization for Your Exam Topic

### Quick Changes for Different Topics

1. **Project Title and Description** (src/pages/Home.jsx):
   ```javascript
   const projectConfig = {
     title: "Your Exam Topic Title",
     subtitle: "Your Project Subtitle",
     description: "Description for your specific topic...",
   };
   ```

2. **Form Fields** (src/pages/GenericForm.jsx):
   ```javascript
   const formConfig = {
     title: "Your Form Title",
     fields: [
       {
         name: 'yourField',
         label: 'Your Field Label',
         type: 'text', // or 'select', 'textarea', 'date', 'number'
         required: true,
         placeholder: 'Enter your data...'
       },
       // Add more fields as needed
     ]
   };
   ```

3. **User Roles** (src/pages/Register.jsx):
   ```javascript
   <option value="Student">Student</option>
   <option value="Teacher">Teacher</option>
   // Or whatever roles fit your topic
   ```

4. **Navigation Brand** (src/components/Navbar.jsx):
   ```javascript
   <Link to="/" className="text-xl font-bold text-gray-800 dark:text-white">
     YourProjectName
   </Link>
   ```

### Example Adaptations

**For a Library Management System:**
- Title: "Library Management System"
- Form fields: Book Title, Author, ISBN, Category, Publication Date
- User roles: Librarian, Member

**For an E-commerce Platform:**
- Title: "E-commerce Management"
- Form fields: Product Name, Price, Category, Description, Stock Quantity
- User roles: Admin, Customer

**For a Hospital Management System:**
- Title: "Hospital Management System"
- Form fields: Patient Name, Age, Department, Appointment Date, Symptoms
- User roles: Doctor, Nurse

## Troubleshooting

### Common Issues

1. **Tailwind styles not loading:**
   - Make sure the dev server is running
   - Check that `@import "tailwindcss";` is in src/index.css

2. **Authentication not working:**
   - Check browser console for errors
   - Verify localStorage is enabled in your browser

3. **Form submissions not saving:**
   - Check browser dev tools > Application > Local Storage
   - Make sure you're logged in before accessing the form

4. **Dark mode not persisting:**
   - Check if localStorage is working
   - Verify the theme toggle button is connected to Redux

### Browser Compatibility
- Chrome (recommended)
- Firefox
- Safari
- Edge

All modern browsers with localStorage support will work fine.

## Production Build

To build for production:
```bash
npm run build
```

The built files will be in the `dist` directory.