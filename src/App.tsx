import './App.css';
import {store} from './app/store'

import {
  Navbar,
  NavbarBrand,
} from 'reactstrap';

import TimerContainer from './TimerContainer';
import TimerList from './TimerList'
import { Provider } from 'react-redux';
const AppWrapper = () => {
  return <Provider store = {store}>
    <App />
  </Provider>
}

const App = () => {

  return (
    <div >
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Simple Timer Application</NavbarBrand>
      </Navbar>
      <div className="content">
        <div className="record-container">
          <TimerList/>
        </div>
        <div className="timer-container">
          <TimerContainer/>
        </div>
      </div>
      
    </div>
  );
}

export default AppWrapper;
