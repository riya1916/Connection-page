import React from 'react';
import './App.css';
import Header from "./Header";
import Search from './Search';
import Notification from './Notification';
import  {Route, Routes, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <div className='App'>
    <BrowserRouter >
    <Header />
    <Routes>

      <Route path='/search' element={<Search />} /> 
      <Route path='/notification' element={<Notification />} /> 
      

    </Routes>
    </BrowserRouter>
    </div>

  );
}

export default App;
