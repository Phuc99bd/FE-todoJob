import React, { useEffect } from "react";
import { Table, Container, Row, Col,Spinner,Form ,Button} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getJOb,changeStatus } from "../../services/job/action";
import TableRow from "./tableRow";
import AddJob from "./addJob";
import SearchForm from "./searchForm";
import jobProps from "../../services/job/selector";
import Sort from "./sort";
import Pagination from "./pagination";
import Swal from "sweetalert2";

const TableItem = () => {
  let dispatch = useDispatch();
  let props = jobProps();
  useEffect(() => {
    dispatch(getJOb(props));
  },[]);

  let col = props.job.status ? 9 : 12;
  const renderData= ()=>{
      let data = props.job.arrJob.map(i=>{
          return (<TableRow key={i._id} id={i._id} name={i.nameJob} active={i.active} props={props}></TableRow>)
      })
      return data;
  }
  const loading = ()=>{
      if(props.job.loading){
          return (<Spinner animation="grow" variant="primary" />)
      }
  }
  const changeSTT =()=>{
      dispatch(changeStatus())
  }
  const loadAdd=()=>{
      return props.job.status ? <AddJob changeSTT={()=>changeSTT()}></AddJob> : ""; 
  }
 
  return (
    <Container>
      <Row>
          {loadAdd()}
        <Col md={col}>
             <Form.Group className="d-inline-block w-100">
               {!props.job.status && <Button variant="primary"  type="button" onClick={()=>changeSTT()} >Thêm công việc</Button>} 
               <Sort props={props}></Sort>
               <hr/><SearchForm props={props}></SearchForm>
           </Form.Group>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name Job</th>
                <th>Trạng thái</th>
                <th>Action</th>
              </tr>
            </thead>
             <tbody>{renderData()}</tbody>
          </Table>
          {loading()}
          <Pagination props={props}></Pagination>

        </Col>
      </Row>
    </Container>
  );
};

export default TableItem;
