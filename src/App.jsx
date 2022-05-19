import './App.css';
import Dashboard from './pages/dashboard/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* BrowserRouter */}

      <Dashboard />
    </div>
  );
}

export default App;
