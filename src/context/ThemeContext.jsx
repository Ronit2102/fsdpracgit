import { createContext, useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setTheme } from '../store/themeSlice';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.theme.isDarkMode);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      console.log('Dark mode applied');
    } else {
      document.documentElement.classList.remove('dark');
      console.log('Light mode applied');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Initialize theme from localStorage on mount
    const savedTheme = localStorage.getItem('darkMode');
    if (savedTheme !== null) {
      dispatch(setTheme(savedTheme === 'true'));
    }
  }, [dispatch]);

  return (
    <ThemeContext.Provider value={{ isDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};