

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from '../components/Header';
import AboutPage from '../pages/AboutPage';
import FavoritesPage from '../pages/FavoritesPage';
import HomePage from '../pages/HomePage';
import SingleMoviePage from '../pages/SingleMoviePage';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <main>
          <Routes>
            <Route path= "/" element={<HomePage sort='popular' />} />
              <Route path="/sort/top-rated" element={<HomePage sort='top_rated'/>} />
              <Route path="/sort/popular" element={<HomePage sort='popular'/>} />
              <Route path="/sort/upcoming" element={<HomePage sort='upcoming' />} />
              <Route path="/sort/now-playing" element={<HomePage sort='now_playing' />} />
              <Route path="/movie/:id" element={<SingleMoviePage/>} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/favs" element={<FavoritesPage />} />

          </Routes>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
