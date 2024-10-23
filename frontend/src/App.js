import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './Login';
import Kaydol from './Kaydol';
import Kitapal from './Kitapal';
import Kitapiade from './Kitapiade';
import Anasayfa from './Anasayfa';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/' element={<Kitapal />} />
        <Route path='/' element={<Kitapiade />} />
        <Route path='/kaydol' element={<Kaydol />} />
        <Route path='/anasayfa' element={<Anasayfa />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;