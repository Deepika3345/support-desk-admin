import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTickets } from "../features/allTickets/ticketSlice";
import TicketRow from "./TicketRow";
import { useNavigate } from "react-router-dom";

const Tickets = () => {
  const { pass } = useSelector((state) => state.pass);
  const { person } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    if (!person) {
      navigate("/login");
    }
    dispatch(fetchTickets());
  }, [person]);

  return (
    <>
      <div className="container-fluid p-5">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Ticket Id</th>
              <th scope="col">Product</th>
              <th scope="col">Description</th>
              <th scope="col">Status</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {pass.map((item, index) => (
              <TicketRow key={item._id} index={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Tickets;
