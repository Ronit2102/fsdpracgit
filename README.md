# Exam Template Project

A flexible React template built with Vite, Tailwind CSS, and Redux that can be easily adapted for any exam topic or case study.

## Features

- ✅ **Responsive Design** - Works on all devices
- ✅ **Dark/Light Mode** - Toggle with Redux state management
- ✅ **JWT Authentication** - Mock authentication using localStorage
- ✅ **User Roles** - Support for different user types
- ✅ **Generic Form** - Easily customizable for any topic
- ✅ **Data Persistence** - All data stored in localStorage
- ✅ **Modern Stack** - React, Vite, Tailwind CSS, Redux Toolkit

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Build for production:**
   ```bash
   npm run build
   ```

## Customization Guide

### 1. Update Project Information

Edit the `projectConfig` object in `src/pages/Home.jsx`:

```javascript
const projectConfig = {
  title: "Your Project Title",
  subtitle: "Your Project Subtitle",
  description: "Your project description...",
  features: [
    {
      title: "Feature 1",
      description: "Feature 1 description",
      icon: "🎯"
    },
    // Add more features...
  ]
};
```

### 2. Customize the Form

Edit the `formConfig` object in `src/pages/GenericForm.jsx`:

```javascript
const formConfig = {
  title: "Your Form Title",
  description: "Your form description...",
  fields: [
    {
      name: 'fieldName',
      label: 'Field Label',
      type: 'text', // text, select, textarea, date, number
      required: true,
      placeholder: 'Enter value...'
    },
    // Add more fields...
  ]
};
```

### 3. Update User Roles

Edit the role options in `src/pages/Register.jsx`:

```javascript
<option value="Your Role 1">Your Role 1</option>
<option value="Your Role 2">Your Role 2</option>
```

### 4. Customize Styling

- Update colors in `tailwind.config.js`
- Modify component styles in individual files
- Change the navbar brand name in `src/components/Navbar.jsx`

### 5. Add New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Add navigation links in `src/components/Navbar.jsx`

## Project Structure

```
src/
├── api/
│   └── auth.js          # Authentication API functions
├── components/
│   ├── Navbar.jsx       # Navigation component
│   └── Footer.jsx       # Footer component
├── context/
│   └── ThemeContext.jsx # Theme context provider
├── pages/
│   ├── Home.jsx         # Home page with hero and features
│   ├── About.jsx        # About page
│   ├── Login.jsx        # Login page
│   ├── Register.jsx     # Registration page
│   └── GenericForm.jsx  # Customizable form page
├── store/
│   ├── store.js         # Redux store configuration
│   ├── themeSlice.js    # Theme state management
│   └── authSlice.js     # Authentication state management
├── App.jsx              # Main app component with routing
└── main.jsx             # App entry point
```

## Authentication Flow

1. **Register:** Create account with email, password, and role
2. **Login:** Authenticate with email and password
3. **Token Storage:** JWT token stored in localStorage
4. **Protected Routes:** Form page requires authentication
5. **User Display:** Shows email and role in navbar when logged in

## Data Storage

All data is stored in localStorage:
- `users` - Array of registered users
- `formSubmissions` - Array of form submissions
- `isAuthenticated` - Authentication status
- `user` - Current user information
- `token` - JWT token
- `darkMode` - Theme preference

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Redux Toolkit** - State management
- **React Router** - Client-side routing
- **localStorage** - Data persistence

## Tips for Exam Use

1. **Quick Topic Change:** Update the `projectConfig` in Home.jsx and `formConfig` in GenericForm.jsx
2. **Color Scheme:** Modify Tailwind classes to match your topic theme
3. **Content Updates:** All text content is easily editable in component files
4. **Feature Addition:** The modular structure makes it easy to add new features
5. **Data Export:** Form submissions are stored in localStorage and can be viewed in browser dev tools

## Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

## License

This template is free to use for educational and exam purposes.