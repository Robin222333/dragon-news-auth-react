import React from 'react';
import Navbar from '../Shaired/Navbar/Navbar';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
   const {signIn} = useContext(AuthContext)
    const handleLogin = e => {
        e.preventDefault()
        console.log(e.currentTarget)
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')

        signIn(email, password)
        .then(result =>{
          console.log(result)
        })
        .catch(error =>{
          console.log(error)
        })

        console.log(email, password)
    }
    return (
        <div>
            <Navbar></Navbar>
            
            <div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-10">Login Your Account</h1>
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Email Address</span>
          </label>
          <input type="email" name='email' placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-bold">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="py-1  bg-slate-900 text-white">Login</button>
        </div>
      </form>

      <p className='text-sm text-center'>Do not Have An Account ?<Link to='/register'><button className="btn btn-link">Register</button></Link></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;