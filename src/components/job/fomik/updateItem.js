import React,{useState} from "react";
import * as Yup from "yup";
import { Button,Form } from "react-bootstrap";

export const UpdateFormik = ({submitForm,changeSTT,id,nameJob,active}) => {
  let [errors,setErrors] = useState("");
  let [name,setName] = useState(nameJob);
  let [activeI ,setActiveI] = useState(active);
  const onSubmit= ()=>{
    if(name === ""){
        setErrors("Vui lòng không bỏ trống tên công việc.");
        return false;
    }
    submitForm(id,name,activeI);
  }
  const onChangeName = (e)=>{
    (e.target.value =="") ?  setErrors("Vui lòng không bỏ trống tên công việc.") : setErrors("");
    setName(e.target.value);
  }
  return (
           <tr>
                <td>
                    {id}
                </td>
                <td>
                    <Form.Control name="nameJob" type="text" className="form-control" placeholder="Enter nameJob" defaultValue={nameJob} onChange={(e)=>onChangeName(e)} />
                {errors ? (
                    <div className="text-danger">{errors}</div>
                ) : null}
                </td>
                <td>
                <Form.Control as="select" name="active" className="form-control" defaultValue={active} onChange={(e)=>setActiveI(e.target.value)} >
                    <option value={true}>Kích hoạt</option>
                    <option value={false}>Ẩn</option>
                </Form.Control>
                </td>
                <td>
                <Button variant="danger" type="submit" onClick={()=>onSubmit()} >
                    Update
                </Button>
            
                <Button variant="primary" type="submit" onClick={()=>changeSTT()}>
                    Cancel
                </Button>
                </td>
              
           </tr>   
   
  );
};
