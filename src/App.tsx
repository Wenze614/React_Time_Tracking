import React from 'react';
import './App.css';
import { Button } from 'reactstrap';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

function App() {
  return (
    <React.Fragment>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>


      <Button>Test</Button>
    </React.Fragment>
  );
}

export default App;
