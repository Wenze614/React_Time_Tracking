import React, { useState } from 'react';
import './App.css';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';


import TimerInput from './Timer-input';

function App() {

 const [result, setResult] = useState('');

  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>

      <TimerInput placeholderText="Enter your time tracking description" onSubmit={(text: string) => {
        setResult(text);
      }}/>


      { result }

    </React.Fragment>
  );
}

export default App;
