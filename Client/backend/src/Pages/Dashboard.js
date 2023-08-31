import React from 'react';
import './Style.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function Dashboard() {
  return (
    <div>
      <div class="row">
        <div class="col-2" >
          <Sidebar />
        </div>
        <div class="col-10" >
          <Navbar/>
          <div>
            Dashboard
          </div>
        </div>
      </div>
    </div>
  )
}
