import React from 'react';
import { Jumbotron, Button } from 'reactstrap';



export default class Jumbo extends React.Component {
  render(){
    return(
<Jumbotron>
      <h1 className="display-3">Persija</h1>

      <h3>PERSIJA KEBANGGAN ORANG JAKARTA!</h3>
      <p className="lead">
        <Button color="primary">HOME</Button>
    </p>
    </Jumbotron>
    )
  }
}
