import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h2>Dashboard</h2>
        <Navbar />
      </BrowserRouter>
    </div>
  );
}

export default App;
