import React from 'react';

const Doctor = () => (
  <div className="doctor">
    <div className="doctor__image">
      <img src="https://0.s3.envato.com/files/125457021/png/Doctor.png" alt="Doc image" />

    </div>
    <div className="doctor__about">
      <h4 className="doctor__about-name">Dr. Yogesh Sharma</h4>
      <p className="doctor__about-skills">
        Dentist, Pediatric, Cosmetic, Neuro-surgeon
      </p>
      <p className="doctor__about-exp">
        15 years of experience
      </p>
      <p className="doctor__about-bio">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt voluptas reiciendis aliquam facilis, dolores corrupti nihilIncidunt voluptas reiciendis aliquam facilis, dolores corrupti nihil facilis, dolores corrupti nihil
      </p>
      <a href="/" className="doctor__about-more">
        More info...</a>
    </div>
    <div className="doctor__review">
      <h4 className="doctor__review-votes">
        <i className="ion-thumbsup" /> 84% (69 Votes)
      </h4>
      <p className="doctor__review-feedback">
        <i className="ion-document-text" /> 11 feedback for 2 doctors
      </p>
      <p className="doctor__review-location">
        <i className="ion-ios-location-outline" /> Surajmal Vihar, Delhi
      </p>
      <p className="doctor__review-fee">
        &#8377; INR 300
      </p>
      <p className="doctor__review-timing">
        <i className="ion-ios-clock-outline" /> Mon-Sat <br />
        <span>
          10:15AM - 1:30PM, 5:15PM-8:30PM

        </span>
      </p>
      <button className="doctor__review-appointment">
        Book Appointment
      </button>
    </div>
  </div>
);

export default Doctor;
