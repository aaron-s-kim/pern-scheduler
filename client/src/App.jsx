import React from 'react';
import { Routes, Route } from "react-router-dom";

import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Main from './components/layout/main/main';

import './sass/main.scss';

function App() {
  return (
    <div className="app">
      <Header />
      <div className='container'>

        <Routes>
          <Route path="/"></Route>
          <Main />
        </Routes>

      </div>
      <Footer />

    </div>
  );
}


export default App;
