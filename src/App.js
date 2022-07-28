import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Footer from './components/Footer';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/services' element={<Services />}></Route>
        {/* path='*' fonctionne si jamais l'url ne corresond a rien de declare au dessus */}
        <Route path='/*' element={<Home />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>

  );
};
export default App;

