import React from 'react';

const InlineSearch = () => (

  <form className="inlineSearch">
    <div className="inlineSearch__input">
      <input type="text" placeholder="Dehradun" />
    </div>
    <div className="inlineSearch__input">
      <input type="text" placeholder="Locality" />
    </div>
    <div className="inlineSearch__input">
      <input type="text" placeholder="Search by city" />
    </div>
    <button className="inlineSearch__button" type="submit" >
      <i className="ion-search" /> Search
    </button>
    {/* <input   value="Search" />*/}
  </form>

);

export default InlineSearch;
