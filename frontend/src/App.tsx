import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import BannerCookies from './components/BannerCookies';
import Footer from './components/Footer';
import Header from './components/Header';
import { useFavorito } from './hooks/favorito';

import Routes from './routes';


const App: React.FC = () => {
  const { loadFavoritos } = useFavorito();
  useEffect(() => {
    loadFavoritos()
  }, [loadFavoritos])
  return (
    <div className="h-screen">
      <Router>
        <Header />
        <Routes />
        <Footer />
        <BannerCookies />
      </Router>
    </div>
  )
};

export default App;