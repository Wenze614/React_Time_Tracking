import React, { useState, useEffect} from 'react';
import './App.css';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import TimerList from './TimerList';

function App() {

  const [result, setResult] = useState('');
  useEffect(()=>{console.log(result)},[result])
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>
      <TimerList/>


      { result }

    </React.Fragment>
  );
}

export default App;
