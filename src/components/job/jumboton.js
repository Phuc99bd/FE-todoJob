import React from "react";
import {Jumbotron,Container} from "react-bootstrap";

const JumbotronItem =()=>{
    return (<Jumbotron style={{"text-align" : "center"}}>
        <Container>
          <h1>Quản lý Job</h1>
          <p>
            Building for React-Redux , pattern Hook
          </p>
        </Container>
      </Jumbotron>)
}
export default JumbotronItem
