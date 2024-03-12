import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Note = ({ item }) => {

  const {person}=useSelector(state => state.auth)
  const navigate = useNavigate()
  useEffect(()=>{
    if(!person){
      navigate('/login')
    }

  },[person])
  //   console.log("item", item);

  
  
  return (
    <>
      <div className="card m-2">
        <div className="card-header">Notes...</div>
        <div className="card-body">
          {
            <>
              <h2 className="card-title">Note :{item.text}</h2>
              <p className="card-text text-secondary">
                Date: {new Date(item.createdAt).toLocaleDateString("en-IN")}{" "}
                <br />
                Time: {new Date(item.createdAt).toLocaleTimeString(
                  "en-IN"
                )}
              </p>
              {
                item.isStaff?(
                  <p className="">From :- Staff <i className="text-warning">{item.staffId}</i></p>

                ):(
                  <p>
                    From :- Self
                  </p>
                )
              }


              <span className="float-end">

                <a
                  href="#"
                  className="btn btn-md btn-outline-danger rounded-5 mx-1"
                >
                  Close
                </a>
              </span>
            </>
          }
        </div>
      </div>
    </>
  );
};

export default Note;
