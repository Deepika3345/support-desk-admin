import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FetchSingleTicket,
  fetchNotes,
  makeNote,
} from "../features/allTickets/ticketSlice";
import { Link, useNavigate, useParams } from "react-router-dom";

const TicketDetail = () => {
  const { person } = useSelector((state) => state.auth);
  const { singlePass } = useSelector((state) => state.pass);
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // create

  const [newData, setNewData] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      ticketid: singlePass._id,
      userid: singlePass.person,

      text: newData,
    };
    dispatch(makeNote(data));
    setNewData("");
  };
  useEffect(() => {
    if (!person) {
      navigate("/login");
    }
    dispatch(FetchSingleTicket(params.id));
  }, [person]);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center align-items-center p-3 m-5">
        <div className="card rounded-5 w-50">
          <div className="card-body">
            <h2 className="card-title">Product : {singlePass?.product}</h2>
            <p className="card-text">Description : {singlePass?.description}</p>
            <p>Id:{singlePass?._id}</p>
            <p>
              Date:
              {new Date(singlePass?.createdAt).toLocaleDateString("en-IN")}
            </p>
            <p>
              Time:{new Date(singlePass?.createdAt).toLocaleTimeString("en-IN")}
            </p>

            <Link className="text-decoration-none text-secondary">
              Status:
              {singlePass?.status === "open" ? (
                <span className="badge text-bg-warning m-2">
                  {singlePass?.status}
                </span>
              ) : singlePass?.status === "close" ? (
                <span className="badge text-bg-danger m-2">
                  {singlePass?.status}
                </span>
              ) : (
                <span className="badge text-bg-success m-2">
                  {singlePass?.status}
                </span>
              )}
            </Link>
            <span>
              <Link to={`/note/${singlePass?._id}`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary float-end rounded-5 mx-1"
                >
                  Notes
                </button>
              </Link>
              <Link to={`/edit/${singlePass?._id}`}>
                <span className="btn btn-sm btn-outline-warning float-end rounded-5">
                  Edit
                </span>
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-outline-warning float-end rounded-5 mx-1"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Add Note
              </button>
            </span>
          </div>
        </div>
      </div>

      {/* model */}
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="staticBackdropLabel">
                Modal title
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div className="modal-body">
              <textarea
                className="form-control  p-3"
                name="newData"
                value={newData}
                onChange={(e) => setNewData(e.target.value)}
                placeholder="Enter Your Note"
              />
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                onClick={handleSubmit}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TicketDetail;
