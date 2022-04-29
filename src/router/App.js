

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AboutPage from '../pages/AboutPage';
import FavoritesPage from '../pages/FavoritesPage';
import HomePage from '../pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path= "/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/favs" element={<FavoritesPage />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
