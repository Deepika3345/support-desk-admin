import React, { useEffect, useState } from "react";
import "../css/Register.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/auth/authSlice";

const Register = () => {
  const { person, isLoading, isSuccess, isError } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, lastname, email, password, password2 } = formData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("invalid password");
      navigate("/register")
    }
    dispatch(registerUser(formData));
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  useEffect(() => {
    if (person && isSuccess) {
      navigate("/");
    }
  }, [person]);
  return (
    <section className="container-fluid-register">
      <div className=" d-flex justify-content-center align-items-center">
        <form className="form-register" onSubmit={handleSubmit}>
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>
          <div className="flex-register">
            <label>
              <input
                className="input-register"
                type="text"
                placeholder="Firstname"
                required=""
                onChange={handleChange}
                name="name"
                value={name}
              />
              {/* <span>Firstname</span> */}
            </label>

            <label>
              <input
                className="input-register"
                type="text"
                placeholder="Lastname"
                required=""
                onChange={handleChange}
                name="lastname"
                value={lastname}
              />
            </label>
          </div>

          <label>
            <input
              className="input-register"
              type="email"
              placeholder="Email"
              required=""
              onChange={handleChange}
              name="email"
              value={email}
            />
          </label>

          <label>
            <input
              className="input-register"
              type="password"
              placeholder="Password"
              required=""
              onChange={handleChange}
              name="password"
              value={password}
            />
            {/* <span>Password</span> */}
          </label>
          <label>
            <input
              className="input-register"
              type="password"
              placeholder="Confirm Password"
              required=""
              onChange={handleChange}
              name="password2"
              value={password2}
            />
            {/* <span>Confirm password</span> */}
          </label>
          <button className="submit">Submit</button>
          <p className="signin">
            Already have an acount ? <Link to={"/login"}>Signin</Link>{" "}
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
