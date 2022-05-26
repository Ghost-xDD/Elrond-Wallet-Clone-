import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import './style/dark.scss';
import { useContext } from 'react';
import { DarkModeContext } from './context/darkModeContext';
import AnimatedRoutes from './components/animatedRoutes/AnimatedRoutes';

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? 'app dark' : 'app'}>
      <BrowserRouter>
        <ScrollToTop>
          <AnimatedRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
