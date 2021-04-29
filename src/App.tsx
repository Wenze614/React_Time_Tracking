import './App.css';

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import TimerList from './TimerList';

function App() {

  return (
    <div >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>
      <TimerList/>
    </div>
  );
}

export default App;
