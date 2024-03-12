import axios from "axios";

const API_URL = "/api/admin";
// Get All tickets
const allTickets = async (token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/", option);
  return response.data;
};

// Get Single Ticket
const getOnlyTicket = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL + "/" + id, option);
  return response.data;
};

// Edit Ticket
const editTicket = async (id, newData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + "/" + id, newData, option);
  return response.data;
};

// create Ticket
const createNote = async (newData, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, newData, option);
  // console.log("service",response.data);
  return response.data;
};

// Get all notes
const getNotes = async (id, token) => {
  const option = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(`/api/admin/note/${id}`, option);
  // console.log(response.data);
  return response.data;
};

const passServices = {
  allTickets,
  getOnlyTicket,
  editTicket,
  createNote,
  getNotes,
};
export default passServices;
