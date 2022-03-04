import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import CatalogueView from './Components/CatalogueView'
import './App.scss';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
      <Route path='/catalogue' element={<CatalogueView/>}/>
    </Routes>

  );
}

export default App;
