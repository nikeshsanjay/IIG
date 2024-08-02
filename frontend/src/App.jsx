import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home2 from './Components/Home2';
import Home3 from './Components/Home3';
import Home from './Components/Home';
import Login from './Components/Login';
import Signup from './Components/Signup';
import RandMPage from './Components/RandMPage';
import AdminDashboard from './Components/AdminDashboard';
import RandMPage2 from './Components/RandMPage2';
import './assets/Styles/RandMPage2.css';
import MaintenanceSchedules from './Components/MaintenanceSchedules';
import PartsToolsRecommendations from './Components/PartsToolsRecommendations';
import AdminLogin from './Components/AdminLogin';
import VideoTutorials from './Components/VideoTutorials';
import DiagnosticTools from './Components/DiagnosticTools';
import AboutUs from './Components/AboutUs';
import './assets/Styles/Footer.css';
import AdminNavigationBar from './Components/AdminNavbar';
import AdminNavigationBar2 from './Components/AdminNavbar2';
import PartsAndTools from './Components/PartsToolsRecommendations';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home2" element={<Home2 />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Home3" element={<Home3 />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/RandM" element={<RandMPage />} />
        <Route path="/RandMpage2" element={<RandMPage2 />} />
        <Route path="/MaintenanceSchedules" element={<MaintenanceSchedules />} />
        <Route path="/PartsToolsRecommendations" element={<PartsToolsRecommendations />} />
        <Route path="/VideoTutorials" element={<VideoTutorials/>} />
        <Route path="/DiagnosticTools" element={<DiagnosticTools />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/AdminLogin" element={<AdminLogin />} />
        <Route path="/AdminNavbar" element={<AdminNavigationBar />} />
        <Route path="/AdminDashboard" element={<AdminDashboard />} />
        <Route path="/AdminNavbar2" element={<AdminNavigationBar2 />} />
        <Route path="/PartsandTools" element={<PartsAndTools/>} />
      </Routes>
    </Router>
  );
}

export default App;
