'use client'
import { useState } from 'react';
import './reservation.scss';

function getTodayDate() {
  const today = new Date();
  let month = today.getMonth() + 1;
  if (month < 10) {
    month = '0' + month;
  }
  let day = today.getDate();
  if (day < 10) {
    day = '0' + day;
  }
  return today.getFullYear() + '-' + month + '-' + day;
}

export function Reservation() {
  const [selectedDate, setSelectedDate] = useState(getTodayDate);
  const [selectedOption1, setSelectedOption1] = useState('');
  const [selectedOption2, setSelectedOption2] = useState('');

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleOption1Change = (event) => {
    setSelectedOption1(event.target.value);
  };

  const handleOption2Change = (event) => {
    setSelectedOption2(event.target.value);
  };

  return (
    <section className='reservation'>
      <div className='content'>
        <div className='reservation__text'>
          <h2 className='heading-one reservation__title'>Make a Reservation</h2>
          <p className='body-text reservation__subtitle'>Get in touch with restaurant</p>
        </div>
        <form className='reservation__form' action="">
          <div className='reservation__wrapper'>
            <input
              className='reservation__date'
              aria-label="date"
              type="date"
              value={selectedDate}
              onChange={handleDateChange}
            />
            <select
              className='reservation__select'
              value={selectedOption1}
              onChange={handleOption1Change}
            >
              <option value="">6:00 pm</option>
              <option value="option1">8:00 pm</option>
              <option value="option2">10:00 pm</option>
              <option value="option3">11:00 pm</option>
            </select>
            <select
              className='reservation__select'
              value={selectedOption2}
              onChange={handleOption2Change}
            >
              <option value="">1 Person</option>
              <option value="option1">2 Person</option>
              <option value="option2">3 Person</option>
              <option value="option3">4 Person</option>
            </select>
          </div>
          <button className='heading-five btn reservation__btn' title='Book Now'>Book Now</button>
        </form>
      </div>
    </section>
  );
}