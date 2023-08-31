import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Sidebar/>
        <Routes>
          <Route exact path="/" element={"Home Dashboard"} />
          <Route exact path="/add_product" element={"product Dashboard"} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
