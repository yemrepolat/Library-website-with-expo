import React, { useState } from 'react';
import './BookActions.css';
import Kitapal from './Kitapal';
import Kitapiade from './Kitapiade';

function Anasayfa() {
  const [currentView, setCurrentView] = useState(''); // Durum değişkeni

  const handleKitapAl = () => {
    setCurrentView('kitapal'); // Kitapal bileşenini göstermek için durumu güncelle
  }

  const handleKitapIade = () => {
    setCurrentView('kitapiade'); // Kitapiade bileşenini göstermek için durumu güncelle
  }

  return (
    <div className="container">
      <div className="header">
        <h1>Kitap İşlemleri</h1>
      </div>
      <div className="buttons">
        <div className="button-item">
          <button onClick={handleKitapAl}>Kitap Al</button>
        </div>
        <div className="button-item">
          <button onClick={handleKitapIade}>Kitap İade</button>
        </div>
        <div className="button-item">
          <button>Çıkış Yap</button>
        </div>
      </div>
      <div className="content">
        {currentView === 'kitapal' && <Kitapal />}
        {currentView === 'kitapiade' && <Kitapiade />}
      </div>
    </div>
  )
}

export default Anasayfa;
