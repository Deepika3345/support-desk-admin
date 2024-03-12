import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const TicketRow = ({ item, index }) => {
  const {person}=useSelector(state => state.auth)
  const navigate=useNavigate()
  useEffect(()=>{
    if(!person){
      navigate('/login')
    }

  },[person])

  return (
    <>
      <tr>
        <th scope="row">{index + 1}</th>
        <td>{item._id}</td>
        <td>{item.product}</td>
        <td>{item.description}</td>
        <td>
          {item.status === "open" ? (
            <span className="badge text-bg-warning">{item.status}</span>
          ) : item.status === "close" ? (
            <span className="badge text-bg-danger">{item.status}</span>
          ) : (
            <span className="badge text-bg-success">{item.status}</span>
          )}
        </td>
        <td>
          <Link
            to={`/pass/${item._id}`}
            className="btn btn-sm btn-outline-info"
          >
            View
          </Link>
        </td>
      </tr>
    </>
  );
};

export default TicketRow;
