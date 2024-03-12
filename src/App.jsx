import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import Register from "./screen/Register";
import Login from "./screen/Login";
import Tickets from "./screen/Tickets";
import Users from "./screen/Users";
import TicketDetail from "./screen/TicketDetail";
import UpdateTicket from "./screen/UpdateTicket";


import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllNotes from "./screen/AllNotes";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="*" element={<PageNotFound />} />
        <Route path="/" element={<Home />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/pass" element={<Tickets />}/>
        <Route path="/pass/:id" element={<TicketDetail />} />
        <Route path="/edit/:id" element={<UpdateTicket />}/>
        <Route path="/note/:id" element={<AllNotes />}/>




        <Route path="/all-users" element={<Users />} />
      </Routes>
      <ToastContainer/>
    </Router>
  );
};

export default App;
