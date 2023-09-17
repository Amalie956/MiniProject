import React from 'react';
import './App.css'
import RandomCatPictures from './RandomCatPictures';
import ChooseCatCategory from './ChooseCatCategory';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'


function App() {
  return (
    <div className="App">
            <Router>
        <nav>
        <Link to="/randomCatPictures" className="cat-image-link">Random Cat Pictures</Link>
          <Link to="/ChooseCatCategory" className="cat-image-link">Choose Cat Category</Link>
        </nav>
        <Routes>
          <Route path="/randomCatPictures" element={<RandomCatPictures />} />
          <Route path="/ChooseCatCategory" element={<ChooseCatCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
