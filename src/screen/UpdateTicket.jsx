import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateTicket } from "../features/allTickets/ticketSlice";
import { useNavigate, useParams } from "react-router-dom";

import { toast } from 'react-toastify';

const UpdateTicket = ({ id }) => {
  // const { edit } = useSelector((state) => state.pass);
  const { person }= useSelector(state => state.auth)
  const navigate = useNavigate()
  const params = useParams(id);

  const dispatch = useDispatch();
  const [newData, setNewData] = useState({
    product: "IPhone",
    description: "",
    status: "open",
  });
  const { product, description, status } = newData;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTicket({ id: params.id, newData: newData }));
    toast.success("Ticket Update successful")
    navigate('/pass')
    setNewData("")
  };

  const handleChange = (e) => {
    setNewData((newData) => ({
      ...newData,
      [e.target.name]: e.target.value,
    }));
  };
  console.log(newData);
  useEffect(()=>{
    if(!person){
      navigate('/login')
    }

  },[person])


  return (
    <div className="container p-5 ">
      <form className=" form-control p-3" onSubmit={(e) => handleSubmit(e)}>
        <h2 className="text-center text-danger">Update your Ticket</h2>
        <select
          className="form-select m-2"
          name="product"
          value={newData.product}
          onChange={handleChange}
        >
          <option value="iPhone">iPhone</option>
          <option value="iPad">iPad</option>
          <option value="iPod">iPod</option>
          <option value="iMac">iMac</option>
          <option value="Macbook">Macbook</option>
          <option value="iWatch">iWatch</option>

        </select>

        <input
          type="text"
          className="form-control m-2"
          placeholder="description"
          name="description"
          value={description}
          onChange={handleChange}
          
        />
        
        <select
          className="form-select m-2"
          name="status"
          value={newData.status}
          onChange={handleChange}
        >
          <option value="open">open</option>
          <option value="close">close</option>
          <option value="new">new</option>
        </select>
   
        <button className="btn btn-success m-2 w-100" type="submit">
          Save
        </button>
      </form>
    </div>
  );
};

export default UpdateTicket;
