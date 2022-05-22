import React from 'react';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';
import Main from './components/layout/main/main';
import './sass/main.scss';

function App() {
  return (
      <div className="container">
        <Header />
        <Main />
        <Footer />
      </div>
  );
}

export default App;
