import React, { Component } from 'react';
import { Images, Jumbotron, Button } from 'reactstrap';
import Header from './Header';
import Jumbo from './Jumbo';
import Image from './Image';


class App extends Component {
  render() {
  return (
    <div>
    <Header />
    <Jumbo />
     <Images />
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

