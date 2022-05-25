import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ScrollToTop from './components/scrollToTop/ScrollToTop';
import AnimatedRoutes from './components/animatedRoutes/AnimatedRoutes';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop>
          <AnimatedRoutes />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
}

export default App;
