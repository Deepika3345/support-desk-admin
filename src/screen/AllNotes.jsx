import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  useNavigate, useParams } from "react-router-dom";
import { fetchNotes } from "../features/allTickets/ticketSlice";
import Note from "../components/Note";

const AllNotes = () => {
  const { notes } = useSelector((state) => state.pass);
  const {person} =useSelector(state => state.auth)
  const navigate = useNavigate()


  const params = useParams();
  const dispatch = useDispatch();
  

  useEffect(() => {
    if(!person){
      navigate('/login')
    }
    dispatch(fetchNotes(params.id));
  }, [person]);

  return (
    <>
      <div className="container-lg p-5">
        {notes.length === 0 || !notes ? (
          <>
            <div className="card p-3 my-3">
              <span>
                <h3 className="text-secondary ">No Notes Here... </h3>
                
              </span>
            </div>
          </>
        ) : (
          <>
            {notes.map((item ,index) => (
              <Note key={item?._id} item={item} index={index}/>
            ))}
          </>
        )}
      </div>
  
    </>
  );
};

export default AllNotes;
