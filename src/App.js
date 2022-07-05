import React from 'react';
import './App.css';
import Header from "./Header";
import Search from './Search';
import  {Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
    <BrowserRouter >
    <Header />
    <Routes>

      <Route path='/search' element={<Search />} /> 
      

    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
