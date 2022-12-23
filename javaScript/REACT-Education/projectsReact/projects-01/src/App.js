import React from 'react'

import './App.css';

import Header from './components/Header'
import Navbar from './components/Navbar'
import MainContent from './components/MainContent'
import Dialogs from './components/Dialogs';
import { BrowserRouter, Route } from '/projects-01\package.json'


const App = (props) => {
  return (
    <BrowserRouter>
      <div id="allContent">
        <Header />
        <Navbar />
        <MainContent />
        <Route path="/Dialogs" component={Dialogs} />
        <Route path="/Profile" component={Profile} />

      </div>
    </BrowserRouter>
  )
}

export default App
