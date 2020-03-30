import React from "react";
import { Dropdown, DropdownButton, Badge, ButtonGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {changeSortName,getJOb,changeSTT} from "../../services/job/action";

const Sort = ({props}) => {
  let dispatch = useDispatch();

  const onChangename = (val) => {
    dispatch(changeSortName(val))
    props.job.sortByName =val
    dispatch(getJOb(props))
  };
  const onChangeSTT = (val)=>{
    dispatch(changeSTT(val))
    props.job.sortByActive =val
    dispatch(getJOb(props))
  }
  const loadText = ()=>{
      return (props.job.sortByActive === 0) ? "Tất cả" : (props.job.sortByActive === -1) ? "Kích hoạt" : "Ẩn"
  }
 
  return (
    <React.Fragment>
      <DropdownButton
        as={ButtonGroup}
        className="m-3"
        variant="danger"
        title={"Sắp xếp"}
      >
        <Dropdown.Item eventKey="1" onClick={()=>onChangename(1)}>
          <span>Sắp xếp từ A-Z &nbsp;&nbsp;</span>
          {props.job.sortByName === 1 && (
            <Badge pill variant="secondary">
              x
            </Badge>
          )}
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={()=>onChangename(-1)}>
          <span>Sắp xếp từ Z-A &nbsp;&nbsp;</span>{" "}
          {props.job.sortByName === -1 && (
            <Badge pill variant="secondary">
              x
            </Badge>
          )}
        </Dropdown.Item>
      </DropdownButton>
      <DropdownButton
        as={ButtonGroup}
        className="m-3"
        variant="danger"
        title={loadText()}
      >
        <Dropdown.Item eventKey="1" onClick={()=>onChangeSTT(0)}>
          <span>Tất cả &nbsp;&nbsp;</span>
        {props.job.sortByActive === 0 && ( <Badge pill variant="secondary">
            x
          </Badge>)}    
        </Dropdown.Item>
        <Dropdown.Item eventKey="2" onClick={()=>onChangeSTT(-1)}>
        
          <span> Kích hoạt &nbsp;&nbsp;</span>  {props.job.sortByActive ===-1 && (<Badge pill variant="secondary">
            x
          </Badge>)}
        </Dropdown.Item>
        <Dropdown.Item eventKey="3" onClick={()=>onChangeSTT(1)}>
         
          <span> Ẩn &nbsp;&nbsp;</span>  {props.job.sortByActive ===1 && (<Badge pill variant="secondary">
            x
          </Badge>)}
        </Dropdown.Item>
      </DropdownButton>
    </React.Fragment>
  );
};

export default Sort;
