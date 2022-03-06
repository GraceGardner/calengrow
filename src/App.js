import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Dashboard from './Components/Dashboard'
import CatalogueView from './Components/CatalogueView'
import ErrorModal from './Components/ErrorModal'
import {UserProvider} from './Contexts/UserContext'
import {ErrorProvider} from './Contexts/ErrorContext'
import './App.scss';

const App = () => {
  return (
    <ErrorProvider>
      <UserProvider>
        <ErrorModal/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/catalogue' element={<CatalogueView/>}/>
        </Routes>
      </UserProvider>
    </ErrorProvider>
  );
}

export default App;
