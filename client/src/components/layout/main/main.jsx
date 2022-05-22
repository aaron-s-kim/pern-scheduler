import React from "react";
import Calendar from '../../calendar/calendar'
import './main.scss';

const Main = () => {
  return (
    <div className="main">
      <div className="main-details">
        {/* <Details /> */}
        <Calendar />
      </div>
      <div className="main-calendar">
        <Calendar />
      </div>
      <div className="main-booking">
        {/* <Booking /> */}
        <Calendar />
      </div>
    </div>
  );
}

export default Main;