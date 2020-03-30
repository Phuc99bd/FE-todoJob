import Navbar from "../../components/layout/navbar";
import React, { Component } from "react";
import Jumbotron from "../../components/job/jumboton";
import Table from "../../components/job/table";

class Job extends Component{    
    render(){
        return (
          <React.Fragment>
            <Navbar></Navbar>
            <Jumbotron></Jumbotron>
            <Table></Table>
          </React.Fragment>
        )
    }
}
export default Job;