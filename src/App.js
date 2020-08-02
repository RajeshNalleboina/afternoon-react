import React from 'react';
import logo from './logo.svg';
import './App.css';
import Welcome from './Welcome';
import Greet from './Greetings';
import Sample from './SampleHook'
import Home from "./components/Home";
import {BrowserRouter,Route} from 'react-router-dom';
import Resume from './components/Resume'

function App() {
  return (
    <div >
      {/* <Welcome name="Rajesh">
        <h3>Hello Rajesh How are you</h3>
      </Welcome>
      <Welcome name="Surya">
      <h3>Hello Surya How are you</h3>

      </Welcome>
      <Welcome name="SaiRam">
      <h3>Hello SaiRam How are you</h3>

      </Welcome> */}
      {/* <Greet></Greet>
      <Sample></Sample> */}
      
        <Route exact path='/' component={Home} />
        <Route exact path='/resume' component={Resume} />
      
    </div>
  );
}



export default App;
