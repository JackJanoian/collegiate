import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { AuthProvider } from './contexts/AuthContext';
import { Navigation } from './components/Navigation';
import { Schools } from './pages/lists/Schools';
import { Scholarships } from './pages/lists/Scholarships';
import { Extracurriculars } from './pages/lists/Extracurriculars';
import { Applications } from './pages/lists/Applications';
import { MyApps } from './pages/MyApps';
import { Dashboard } from './pages/MyApps/Dashboard';
import { DemoMode } from './pages/MyApps/DemoMode';
import { Login } from './pages/Auth/Login';
import { SignUp } from './pages/Auth/SignUp';
import { Mentorship } from './pages/Mentorship';
import { JoinTeam } from './pages/JoinTeam';
import { Hero } from './components/Hero';
import { Features } from './components/Features';

function Home() {
  return (
    <>
      <Hero />
      <Features />
    </>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-200">
            <Navigation />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/join-team" element={<JoinTeam />} />
              <Route path="/lists/schools" element={<Schools />} />
              <Route path="/lists/scholarships" element={<Scholarships />} />
              <Route path="/lists/extracurriculars" element={<Extracurriculars />} />
              <Route path="/lists/applications" element={<Applications />} />
              <Route path="/my-apps" element={<MyApps />} />
              <Route path="/my-apps/dashboard" element={<Dashboard />} />
              <Route path="/my-apps/demo" element={<DemoMode />} />
              <Route path="/auth/login" element={<Login />} />
              <Route path="/auth/signup" element={<SignUp />} />
              <Route path="/mentorship" element={<Mentorship />} />
            </Routes>
          </div>
        </Router>
      </ThemeProvider>
    </AuthProvider>
  );
}