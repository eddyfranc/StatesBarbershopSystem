import { useState } from 'react';
import './index.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // <-- added Route

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;