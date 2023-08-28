import React from 'react'
import './Signup.css'
export default function Signup() {
  return (
    <div className='container'>
      <form>
        <h2 className='text-center'>SIGN UP</h2>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">User Name</label>
          <input type="user" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  )
}
