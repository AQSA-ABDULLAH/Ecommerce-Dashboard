import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handelLoginData = () => {
        console.warn(email, password);
    }
    return (
        <div className='container' id="login">
            <form onSubmit={handelLoginData}>
                <h2 className='text-center pt-3'>SIGN IN</h2>
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
                <p className='pt-3'>Don't have an Account yet <Link to='/signup'>SIGN UP</Link></p>
            </form>
        </div>
    );
}
