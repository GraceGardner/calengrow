import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import CatalogueView from './Components/CatalogueView'
import './App.css';

const App = () => {
  return (
    <main>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
        <Route exact path='/dashboard' element={<Dashboard/>}/>
        <Route exact path='/catalogue' element={<CatalogueView/>}/>
      </Routes>
    </main>

  );
}

export default App;
