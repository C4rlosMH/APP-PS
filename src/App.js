import React, { Component } from 'react';
import {Menu, Buscador, Cards} from './components'

class App extends Component {
  render() { 
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">PrivadaSpace</p>

          <Menu/>
         {/*<Cards/>*/}
       </div>|
      </div>
    );
  }
}
 
export default App;