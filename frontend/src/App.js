import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Signup from './Components/Signup';
import PrivateComponent from './Components/PrivateComponent';
import Login from './Components/Login';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route exact path="/" element={"Home Dashboard"} />
            <Route exact path="/add_new" element={"Add Pages"} />
            <Route exact path="/update" element={"Update Pages"} />
            <Route exact path="/profile" element={"profile"} />
            <Route exact path="/logout" element={"Logout Page"} />
          </Route>

          <Route exact path="/signup" element={<Signup />} />
          <Route exact path='/login' element={<Login/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
