import React, { useState } from 'react'
import './Signup.css';

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const collectData = async (e) => {
    e.preventDefault(); // Prevent the default form submission
    const result = await fetch('http://localhost:4000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(await result.json());
  }

  return (
    <div className='container'>
      <form onSubmit={collectData}>
        <h2 className='text-center'>SIGN UP</h2>
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
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
}

