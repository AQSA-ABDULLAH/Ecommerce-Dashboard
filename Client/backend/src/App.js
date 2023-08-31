import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProducts from './Pages/AddProducts';
import Dashboard from './Pages/Dashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/add_product" element={<AddProducts/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
