import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
//pages and components
import Home from './pages/Home';
import Venues from './pages/Venues';
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar />
      <div className="pages">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/venues' element={<Venues />} />

        </Routes>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
