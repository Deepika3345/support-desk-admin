import React, { useEffect } from "react";
import "../css/Home.css";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const { person } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (!person) {
      navigate("/login");
    }
  }, [person]);

  return (
    <>
      <div className="container">
        <div className="container-second">
         
         <h1 className="text-secondary text-center ">Admin Panel</h1>

          <h6 className="text-secondary ">
            Empower your digital realm effortlessly with our Admin Panel.
            Streamline operations, gain unparalleled control, and stay ahead of
            the curve with seamless navigation and robust features.
          </h6>
          <span>
            <Link style={{ color: "#7808d0" }} className="button border " to={'/pass'}>
              <span className="button__icon-wrapper">
                <svg
                  width="10"
                  className="button__icon-svg"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  ></path>
                </svg>

                <svg
                  className="button__icon-svg  button__icon-svg--copy "
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  fill="none"
                  viewBox="0 0 14 15"
                >
                  <path
                    fill="currentColor"
                    d="M13.376 11.552l-.264-10.44-10.44-.24.024 2.28 6.96-.048L.2 12.56l1.488 1.488 9.432-9.432-.048 6.912 2.304.024z"
                  ></path>
                </svg>
              </span>
              Tickets
            </Link>

          <Link to={'/all-users'}>
          <button className="btn-17">
              <span className="text-container">
                <span className="text-">Users</span>
              </span>
            </button>
          
          </Link>
          </span>
        </div>
      </div>
    </>
  );
};

export default Home;
