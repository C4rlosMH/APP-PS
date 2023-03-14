import React, { Component } from 'react';
import Menu from "./components/Menu"
class App extends Component {
  render() { 
    return (
      <div className="App container">
        <div className="jumbotron">
          <p className="lead text-center">PrivadaSpace</p>

          <Menu/>
        </div>
      </div>
    );
  }
}
 
export default App;