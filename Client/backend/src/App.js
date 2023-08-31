import './App.css';
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Sidebar/>
        <div id="content">
          {/* Main content of your app */}
        </div>
      </div>
    </div>
  );
}

export default App;
