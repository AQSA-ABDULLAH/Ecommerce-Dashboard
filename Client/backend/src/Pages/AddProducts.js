import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Style.css';
import Sidebar from '../Components/Sidebar';
import Navbar from '../Components/Navbar';

export default function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState();
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!image || !title || !description || !category || !price) {
      setError(true);
      return false;
    }

    if (isNaN(price)) {
      setError(true);
      return false;
    }
  
      const formData = new FormData();
      formData.append('image', image)
      formData.append('title', title)
      formData.append('description', description)
      formData.append('category', category)
      formData.append('price', price)

      axios.post('http://localhost:4000/add_product', formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      )
        .then((res) => {
          console.log(res.data)
        })
        .catch(err => {
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

              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  onChange={(e) => setImage(e.target.files[0])}
                />
                {error && !image && <span className="text-danger">Plz Select Any Image</span>}
              </div>

              <div className="mb-3">
                <label className="form-label">Title</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputname"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
                {error && !title && <span className="text-danger">Enter Valid Title</span>}
              </div>

              <div className="mb-3">
                <label className="form-label">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputDes"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
                {error && !description && <span className="text-danger">Enter Valid Description</span>}
              </div>

              <div className="mb-3">
                <label className="form-label">Category</label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputCat"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                />
                {error && !category && <span className="text-danger">Select Category of food</span>}
              </div>

              <div className="mb-3">
                <label className="form-label">Price</label>
                <input
                  type="int"
                  className="form-control"
                  id="exampleInputPassword1"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
                {error && !price && <span className="text-danger">Enter Valid Price of Item</span>}
                {error && price && isNaN(price) && <span className="text-danger">Price must be a number</span>}
              </div>

              <button type="button" className="btn btn-success" onClick={handleClick}>
                ADD PRODUCT
              </button>
            </form>

          </div>
        </div>
      </div>
    </div>
  )
}
