import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Style.css';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const collectData = async (e) => {
    e.preventDefault();
    let result = await fetch('http://localhost:4000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    result = await result.json();
    localStorage.setItem("user", JSON.stringify(result));
    navigate('/');
  }

  useEffect(()=>{
    const auth = localStorage.getItem('user');
    if(auth){
      navigate('/')
    }
  })

  return (
    <div className='container'>
      <form onSubmit={collectData}>
        <h2 className='text-center pt-3'>SIGN UP</h2>
        <div className="mb-3">
          <label className="form-label">User Name</label>
          <input type="text" className="form-control" id="exampleInputname"
            value={name}
            onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1"
            value={email}
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1"
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-success">Submit</button>
        <p className='pt-3'>Already Have an Account <Link to='/'>SIGN IN</Link></p>
      </form>
    </div>
  );
}

