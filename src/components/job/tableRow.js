import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Swal from 'sweetalert2'
import { deleteJob } from "../../services/job/action";
import UpdateJob from "./updateJob";

const TableRow = ({ id, name, active ,props}) => {

  let [editStatus, setEditStatus] = useState(false);

  let dispatch = useDispatch();
  const onDelete = () => {
    Swal.fire({
      title: "Bạn có chắc chắn không?",
      text: "You will not be able to recover this imaginary element!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, keep it"
    }).then(result => {
      if (result.value) {
        dispatch(deleteJob(id))
        Swal.fire("Deleted!", "Your element has been deleted.", "success");
      }
    });
  };



  const loading = () => {
    return !editStatus ? (
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{active ? "Kích hoạt" : "Ẩn"}</td>
        <td>
          <button
            className="btn btn-warning"
            onClick={() => setEditStatus(!editStatus)}
          >
            <i className="fa fa-edit" />
            Sửa
          </button>
          <button className="btn btn-danger" onClick={() => onDelete()}>
            <i className="fa fa-edit" />
            Xóa
          </button>
        </td>
      </tr>
    ) : (<UpdateJob props={props} id={id} nameJob={name} active={active} changeSTT={()=>setEditStatus(!editStatus)}></UpdateJob>);
  };
  return <React.Fragment>{loading()}</React.Fragment>;
};

export default TableRow
