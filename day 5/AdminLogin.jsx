import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../assets/Styles/Login.css'; 
import bgImage from '../assets/images/bglo.jpg';
import AdminNavigationBar from './AdminNavbar';

const AdminLogin = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success('Logged in successfully!');
    setTimeout(() => {
      navigate('/AdminDashboard');
    }, 1500); 
  };

  return (
    <div className="Login">
      <AdminNavigationBar />
      <div className="login-container">
        <div className="form-container">
          <h2>Login</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter email" required />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Password" required />
            </div>
            <button type="submit" className="btn btn-primary">Login</button>
          </form>
          <p className="signup-link">
            New to the account? <Link to="/signup">Signup</Link>
          </p>
          <p className="signup-link">
             <Link to="/signup">Login As a Admin</Link>
          </p>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default AdminLogin;
