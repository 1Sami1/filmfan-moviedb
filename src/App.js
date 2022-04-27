
import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Main from './components/Main';
import HomePage from './pages/HomePage';


function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header />
        <Main>
          
        </Main>

        
      </div>
    </BrowserRouter>
  );
}

export default App;
