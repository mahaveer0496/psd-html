import React from 'react';

const InlineSearch = () => (

  <form className="inlineSearch">
    <div className="inlineSearch__input1">
      <input type="text" placeholder="Dehradun, India" />
    </div>
    <div className="inlineSearch__input2">
      <input type="text" placeholder="Locality" />
    </div>
    <div className="inlineSearch__input3">
      <input type="text" placeholder="Search by Speciality, Symptomps" />
    </div>
    <button className="inlineSearch__button" type="submit" >
      <i className="ion-search" /> Search
    </button>
    {/* <input   value="Search" />*/}
  </form>

);

export default InlineSearch;
