import React from 'react';
import './App.css'
import RandomCatPictures from './RandomCatPictures';
import ChooseCatCategory from './ChooseCatCategory';
import Login from './Login';
import UploadCatImage from './UploadCatImage';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import './App.css'

function App() {
  return (
    <div className="App">
      <h1>The Cat API</h1>
      <Router>
        <nav>
          <Link to="/randomCatPictures" className="cat-image-link">Random Cat Pictures</Link>
          <Link to="/ChooseCatCategory" className="cat-image-link">Choose Cat Category</Link>
          <Link to="/login" className="cat-image-link">Login</Link> 
         
        </nav>
        <Routes>
          <Route path="/randomCatPictures" element={<RandomCatPictures />} />
          <Route path="/ChooseCatCategory" element={<ChooseCatCategory />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div> 
  );
}

export default App;
