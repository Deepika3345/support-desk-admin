import React from "react";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const { person } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav className="navbar bg-dark   ">
      <div className="container-fluid">
        <Link to={'/'} className="text-decoration-none">
        <span className="navbar-brand mb-0 h1 text-light">Admin - Desk</span>
        </Link>
     
        <span>
          {!person ? (
            <>
              {/* <Link to={"/register"}>
                <button type="button" className="btn btn-outline-secondary">
                  Register
                </button>
              </Link> */}
              <Link to={"/login"}>
              
                <button type="button" className="btn btn-outline-primary mx-2">
                  Login
                </button>
              </Link>
            </>
          ) : (
            <button
              type="button"
              className="btn btn-outline-danger"
              onClick={handleLogOut}
            >
              LogOut
            </button>
          )}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
