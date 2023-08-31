import React from 'react';
import './Style.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';
export default function AddProducts() {
  return (
    <div>
      <div class="row">
        <div class="col-2" >
          <Sidebar />
        </div>
        <div class="col-10" >
          <Navbar />
          <div className='container'>
            <form >
              <h2 className='text-center pt-3'>ADD NEW PRODUCT</h2>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputname"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="password" className="form-control" id="exampleInputPassword1"
                />
              </div>
              <button type="submit" className="btn btn-success">Save</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
