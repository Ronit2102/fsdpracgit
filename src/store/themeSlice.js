import { createSlice } from '@reduxjs/toolkit';

// Safe localStorage access
const getInitialTheme = () => {
  try {
    const saved = localStorage.getItem('darkMode');
    return saved === 'true';
  } catch {
    return false;
  }
};

const initialState = {
  isDarkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      try {
        localStorage.setItem('darkMode', state.isDarkMode.toString());
      } catch (error) {
        console.warn('Could not save theme to localStorage:', error);
      }
    },
    setTheme: (state, action) => {
      state.isDarkMode = action.payload;
      try {
        localStorage.setItem('darkMode', action.payload.toString());
      } catch (error) {
        console.warn('Could not save theme to localStorage:', error);
      }
    },
  },
});

export const { toggleTheme, setTheme } = themeSlice.actions;
export default themeSlice.reducer;