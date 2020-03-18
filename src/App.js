import React, { Component } from 'react';
import { Images, Jumbotron, Button } from 'reactstrap';
import Header from './Header';
import Card from './Card';



class App extends Component {
  render() {
  return (
    <div>
    <Header />
    <Card />
   
    </div>
  );
}
}

export default App;

class Footer extends Component {
  render() {
    return(
      <div>
        <p>ini footer</p>
      </div>
    )
  }
}

