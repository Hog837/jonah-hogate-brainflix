import './App.css';
// import { Component } from 'react'
import './component/Nav/Nav';
import NavRender from '../src/component/Nav/Nav'
import { Component } from 'react';


class App extends Component {
  state = {

  }
  
  render() {
    return (
      <div>
      <NavRender></NavRender>
      </div>
    );
  }


  
};

export default App;
