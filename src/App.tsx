import './App.css';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import TimerContainer from './TimerContainer';

function App() {

  return (
    <div >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>
      <TimerContainer/>
    </div>
  );
}

export default App;
