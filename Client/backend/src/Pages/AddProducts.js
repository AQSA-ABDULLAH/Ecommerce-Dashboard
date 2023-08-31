import React, { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import './Style.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [des, setDes] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage]=useState();
  const navigate = useNavigate();

  const uploadImage = (e) =>{
    console.log(e.target.file);
    setImage(e.target.file);
  }

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:4000/add_product', {
      method: 'post',
      body: JSON.stringify({ title, des, price }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    // localStorage.setItem("product", JSON.stringify(result));
    console.log(result)
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
            <form onSubmit={collectData}>
              <h2 className='text-center pt-3'>ADD NEW PRODUCT</h2>
              <div className="mb-3">
                <input type="file" accept='image/' className="form-control"
                onChange={uploadImage}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Title</label>
                <input type="text" className="form-control" id="exampleInputname"
                value={title}
                onChange={(e) => setTitle(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Description</label>
                <input type="email" className="form-control" id="exampleInputEmail1"
                value={des}
                onChange={(e) => setDes(e.target.value)}/>
              </div>
              <div className="mb-3">
                <label className="form-label">Price</label>
                <input type="int" className="form-control" id="exampleInputPassword1"
                value={price}
                onChange={(e) => setPrice(e.target.value)}/>
              </div>
              <button type="submit" className="btn btn-success">ADD PRODUCT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
