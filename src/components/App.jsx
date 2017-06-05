import React from 'react';

// components ----
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import InlineSearch from './InlineSearch';
import LeftBody from './LeftBody';
import RightBody from './RightBody';

const App = () => (
  <div className="container">
    <UpperNav />
    <LowerNav />
    <InlineSearch />
    <div className="body">
      <LeftBody />
      <RightBody />
    </div>
  </div>
);

export default App;
