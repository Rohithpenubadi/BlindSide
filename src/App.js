import React, { useEffect } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './Components/Login/Login';
import Homepage from './Components/Homepage/Homepage';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("user")
    if (!isAuthenticated) navigate('/login')
  }, [])

  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<Homepage />} />
    </Routes>
  );
}

export default App;
