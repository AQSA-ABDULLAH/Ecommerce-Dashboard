import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProducts from './Pages/AddProducts';
import Dashboard from './Pages/Dashboard';
import ViewProducts from './Pages/ViewProducts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route exact path="/add_product" element={<AddProducts/>} />
          <Route exact path="/view_product" element={<ViewProducts/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
