import './App.css';
import { useEffect, useState } from 'react';
import { ThemeProvider } from './context/theme';
import ThemeBtn from './components/Themebtn';
import Card from './components/Cards';

function App() {
  const [themeMode, setThemeMode] = useState("light");

  const darkTheme = () => setThemeMode('dark'); // Corrected to set the mode to 'dark'
  const lightTheme = () => setThemeMode('light'); // Corrected to set the mode to 'light'

  useEffect(() => {
    const htmlElement = document.querySelector("html");
    htmlElement.classList.remove('light', 'dark');
    htmlElement.classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, darkTheme, lightTheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
