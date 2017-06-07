import React from 'react';

// components ----
import UpperNav from './UpperNav';
import LowerNav from './LowerNav';
import InlineSearch from './InlineSearch';
import LeftBody from './LeftBody';
import RightBody from './RightBody';
import UpperFooter from './UpperFooter';
import LowerFooter from './LowerFooter';

const App = () => (
  <div>
    <div className="container">
      <UpperNav />
      <LowerNav />
      <InlineSearch />
      <div className="body">
        <LeftBody />
        <RightBody />
      </div>
    </div>
    <div className="footer-upper">
      <div className="container">
        <UpperFooter />
      </div>
    </div>
    <div className="footer-lower">
      <div className="container">
        <LowerFooter />
      </div>
    </div>
  </div>
);

export default App;
