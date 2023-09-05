import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  // const [image, setImage]=useState();
  const navigate = useNavigate();

  const handleClick = () => {
    axios.post('http://localhost:4000/add_product',{
      title : title,
      description : description,
      price : price
    })
    .then((res)=>{
      console.log(res.data)
    })
    .catch(err=>{
      console.log(err, "err")
    })
    navigate('/');
  }

  return (
    <div>
      <div className="row">
        <div className="col-2" >
          <Sidebar />
        </div>
        <div className="col-10" >
          <Navbar />
          <div className='container'>
            <form>
              <h2 className='text-center pt-3'>ADD NEW PRODUCT</h2>
              {/* <div className="mb-3">
                <input type="file" className="form-control"
                onChange={ (e)=> setImage(e.target.files[0]) }/>
              </div> */}
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputname"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="text" className="form-control" id="exampleInputDes"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)} />
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="int" className="form-control" id="exampleInputPassword1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)} />
              </div>
              <button type="submit" className="btn btn-success"
                onClick={handleClick}>
                ADD PRODUCT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
