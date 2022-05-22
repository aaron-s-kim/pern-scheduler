import React, { Fragment } from 'react';
import Header from './components/header';
import Calendar from './components/calendar/calendar'
import './sass/main.scss';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Calendar />
        <footer className="footer">
        </footer>
      </div>
    </>
  );
}

export default App;
