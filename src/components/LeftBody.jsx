import React from 'react';

const LeftBody = () => (
  <div className="leftBody">
    <ul className="leftBody__items">
      <li className="heading">Appointments</li>
      <li><input type="checkbox" /> Instant Booking</li>
    </ul>

    <ul className="leftBody__items">
      <li className="heading">Locality</li>
      <li><input type="checkbox" /> Rohini</li>
      <li><input type="checkbox" /> Janakpuri</li>
      <li><input type="checkbox" /> Kalkaji</li>
      <li><input type="checkbox" /> Gurugram</li>
    </ul>

    <ul className="leftBody__items">
      <li className="heading">Availability</li>
      <li><input type="checkbox" /> Sunday</li>
      <li><input type="checkbox" /> Monday</li>
      <li><input type="checkbox" /> Tuesday</li>
      <li><input type="checkbox" /> Thurday</li>
      <li><input type="checkbox" /> Friday</li>
      <li><input type="checkbox" /> Satuday</li>
    </ul>

    <div className="consultation">
      <p className="consultation__heading">Consultation Fee</p>
      <input type="range" min={0} max={100} />
      <div>
        <span className="consultation__time">10:00</span>
        <span className="consultation__time">14:00</span>
      </div>

    </div>
  </div>
);

export default LeftBody;
