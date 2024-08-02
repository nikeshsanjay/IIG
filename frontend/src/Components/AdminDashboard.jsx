// src/AdminDashboard.jsx
import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaGooglePlus } from 'react-icons/fa';
import '../assets/Styles/AdminDashboard.css';
import AdminNavigationBar2 from './AdminNavbar2';

const AdminDashboard = () => {
  return (
    <div>
      <AdminNavigationBar2 />
    <div className="container-fluid admin-dashboard">
      <div className="row">
        <div className="col-md-2 bg-dark text-white sidebar">
          <h2 className="sidebar-title"> Admin</h2>
          <ul className="nav flex-column">
            <li className="nav-item">
              <a className="nav-link active" href="#">Dashboard</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">UI Elements</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Icons</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Extras</a>
            </li>
          </ul>
        </div>
        <div className="col-md-10 main-content">
          <div className="row top-header">
            <div className="col-12">
              <h2 className="dashboard-title">Dashboard</h2>
              <p className="alert alert-success">You successfully read this important alert message.</p>
            </div>
          </div>
          <div className="row stats-cards">
            <div className="col-md-3 mb-4">
              <div className="card bg-primary text-white">
                <div className="card-body">
                  <h5 className="card-title">Members Online</h5>
                  <p className="card-text">10,468</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card bg-info text-white">
                <div className="card-body">
                  <h5 className="card-title">New Accounts</h5>
                  <p className="card-text">10,468</p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card bg-warning text-white">
                <div className="card-body">
                  <h5 className="card-title">Social Media</h5>
                  <p className="card-text"><FaFacebook /> <FaTwitter /> <FaLinkedin /> <FaGooglePlus /></p>
                </div>
              </div>
            </div>
            <div className="col-md-3 mb-4">
              <div className="card bg-danger text-white">
                <div className="card-body">
                  <h5 className="card-title">Total Profit</h5>
                  <p className="card-text">$1,012</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row charts">
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Traffic</h5>
                  <p className="card-text">Traffic Chart</p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">User Statistics</h5>
                  <p className="card-text">User Statistics Chart</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default AdminDashboard;
